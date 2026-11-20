/**
 * schema.org structured data (JSON-LD), built from the shared data modules so
 * search engines and AI agents read exactly what the pages show.
 * Every node about the organisation points at ORG_ID, so crawlers treat the
 * site as one consistent entity.
 */
import { ORG, TEAM, FAQS } from '@/data/site';
import { SPONSORS } from '@/data/sponsors';
import { speakers } from '@/data/speakers';
import { livestreams } from '@/data/livestreams';
import type { PartnerEvent } from '@/data/partnerEvents';
import { isPastEvent } from '@/data/partnerEvents';
import { SITE_URL } from './constants';

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

type Json = Record<string, unknown>;

const orgRef = { '@id': ORG_ID };

/** The organisation and website: rendered once, site-wide, in the root layout. */
export function siteGraph(): Json {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': ORG_ID,
        name: ORG.name,
        alternateName: ORG.alternateNames,
        url: ORG.url,
        logo: { '@type': 'ImageObject', url: ORG.logo },
        image: `${SITE_URL}/images/og/home.jpg`,
        slogan: ORG.tagline,
        description: ORG.description,
        foundingDate: ORG.foundingYear,
        sameAs: [ORG.social.linkedin, ORG.social.twitter, ORG.social.instagram, ORG.social.discord],
        member: TEAM.map((m) => ({
          '@type': 'OrganizationRole',
          roleName: m.role,
          member: { '@type': 'Person', name: m.name, sameAs: m.linkedin },
        })),
        sponsor: SPONSORS.map((s) => ({ '@type': 'Organization', name: s.name, url: s.url })),
        knowsAbout: ['Software development', 'Open source', 'Hackathons', 'Cloud computing', 'Cybersecurity', 'AI', 'Product management', 'Developer communities'],
        potentialAction: { '@type': 'JoinAction', target: ORG.discord, name: 'Join the TechThrusters Discord' },
      },
      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        url: SITE_URL,
        name: ORG.name,
        description: ORG.description,
        publisher: orgRef,
        inLanguage: 'en',
      },
    ],
  };
}

/** Community page: the FAQ. */
export function faqPage(url: string): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    url,
    isPartOf: { '@id': WEBSITE_ID },
    about: orgRef,
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

/** Meetups page: the speaker archive. */
export function speakerList(url: string): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${url}#speakers`,
    name: 'TechThrusters meetup speakers',
    url,
    numberOfItems: speakers.length,
    itemListElement: speakers.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Person',
        name: p.name,
        description: p.designation,
        image: `${SITE_URL}${p.image}`,
        sameAs: p.url,
      },
    })),
  };
}

/** Partner events page: one Event per partner event. */
export function partnerEventList(url: string, events: PartnerEvent[], now: Date = new Date()): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${url}#events`,
    name: 'Events TechThrusters is partnering on',
    url,
    numberOfItems: events.length,
    itemListElement: events.map((e, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Event',
        name: e.title,
        startDate: e.startDate,
        endDate: e.endDate,
        url: e.eventPageUrl ?? e.registerUrl,
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        eventStatus: 'https://schema.org/EventScheduled',
        ...(e.location
          ? {
              location: {
                '@type': 'Place',
                name: e.location,
                ...(e.city
                  ? { address: { '@type': 'PostalAddress', addressLocality: e.city, addressRegion: e.region, addressCountry: e.country } }
                  : {}),
              },
            }
          : {}),
        ...(isPastEvent(e, now) ? {} : { offers: { '@type': 'Offer', url: e.registerUrl } }),
      },
    })),
  };
}

/** Livestreams page: the recorded sessions. */
export function livestreamList(url: string): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${url}#livestreams`,
    name: 'TechThrusters livestreams',
    url,
    numberOfItems: livestreams.length,
    itemListElement: livestreams.map((l, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'VideoObject',
        name: l.title,
        description: l.summary.join(' '),
        thumbnailUrl: `${SITE_URL}${l.image}`,
        url: l.url,
        contributor: l.speaker,
        publisher: orgRef,
      },
    })),
  };
}

/** Escape so the JSON can't close the <script> tag early. */
export function jsonLd(data: Json): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
