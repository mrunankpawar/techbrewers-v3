/**
 * Plain-markdown descriptions of TechThrusters for AI agents and LLM tools,
 * following the llms.txt convention (https://llmstxt.org): /llms.txt is a
 * short, linked overview; /llms-full.txt adds the full detail.
 * Everything is generated from the same data the pages render.
 */
import { ORG, COMMUNITY_STATS, MEETUP_STATS, TEAM, JOURNEY, FAQS, PROGRAMS } from '@/data/site';
import { SPONSORS } from '@/data/sponsors';
import { speakers } from '@/data/speakers';
import { livestreams } from '@/data/livestreams';
import { partnerEvents, isPastEvent } from '@/data/partnerEvents';
import { SITE_URL } from './constants';

const u = (path: string) => `${SITE_URL}${path}`;

function header(): string {
  const stats = COMMUNITY_STATS.map((s) => `${s.value} ${s.label.toLowerCase()}`).join(', ');
  return [
    `# ${ORG.name}`,
    '',
    `> ${ORG.description} ${ORG.tagline}`,
    '',
    `${ORG.name} (formerly ${ORG.alternateNames.join(', ')}) started in ${ORG.foundingYear}. Community at a glance: ${stats}. Membership, events and resources are free.`,
    '',
    `- Website: ${ORG.url}`,
    `- Join the community (Discord): ${ORG.discordInvite} (short link: ${ORG.discord})`,
    `- Apply to speak (TechThrusters Talks): ${ORG.talksForm}`,
    `- LinkedIn: ${ORG.social.linkedin}`,
    `- X (Twitter): ${ORG.social.twitter}`,
    `- Instagram: ${ORG.social.instagram}`,
  ].join('\n');
}

function pages(): string {
  return [
    '## Pages',
    '',
    `- [Home](${u('/')}): what the community offers (learn, connect, build), sponsors and team`,
    `- [Community](${u('/community')}): history since ${ORG.foundingYear} and frequently asked questions`,
    `- [Meetups](${u('/meetup')}): in-person meetup photos, speaker archive and past sponsors`,
    `- [TechThrusters Talks](${u('/talks')}): community speaker series; how to apply to speak`,
    `- [Upcoming events](${u('/events/upcoming')}): upcoming TechThrusters sessions`,
    `- [Partner events](${u('/events/partners')}): events and meetups TechThrusters supports alongside other developer communities`,
    `- [Livestreams](${u('/events/livestreams')}): recorded talks on YouTube`,
  ].join('\n');
}

function partnerEventLines(): string[] {
  const now = new Date();
  return [...partnerEvents]
    .sort((a, b) => a.startDate.localeCompare(b.startDate))
    .map((e) => {
      const where = [e.location, e.city && e.region ? `${e.city}, ${e.region}` : e.city].filter(Boolean).join(', ');
      const status = isPastEvent(e, now) ? 'past' : 'upcoming';
      return `- ${e.title}: ${e.date}${where ? `, ${where}` : ''} (${status}). ${e.eventPageUrl ?? e.registerUrl}`;
    });
}

/** Short overview served at /llms.txt */
export function llmsTxt(): string {
  return [
    header(),
    '',
    pages(),
    '',
    '## Get involved',
    '',
    `- Join the Discord to take part in events, challenges and discussions: ${ORG.discord}`,
    `- Speak at TechThrusters Talks (first-time speakers welcome): ${ORG.talksForm}`,
    ...PROGRAMS.map((p) => `- ${p.name}: ${p.description} ${p.url}`),
    `- Become a sponsor or partner: reach the team on LinkedIn (${ORG.social.linkedin}) or Discord`,
    '',
    '## Optional',
    '',
    `- [Full details for LLMs](${u('/llms-full.txt')}): history, FAQ, speakers, livestreams, sponsors and partner events`,
    `- [Sitemap](${u('/sitemap.xml')})`,
    '',
  ].join('\n');
}

/** Full detail served at /llms-full.txt */
export function llmsFullTxt(): string {
  return [
    header(),
    '',
    pages(),
    '',
    '## History',
    '',
    ...JOURNEY.flatMap((j) => [`### ${j.year}: ${j.title}`, '', j.description, '', ...j.milestones.map((m) => `- ${m}`), '']),
    '## Frequently asked questions',
    '',
    ...FAQS.flatMap((f) => [`### ${f.question}`, '', f.link ? `${f.answer} (${f.link.text}: ${f.link.href})` : f.answer, '']),
    '## Meetups',
    '',
    ...MEETUP_STATS.map((s) => `- ${s.value} ${s.label.toLowerCase()}`),
    '',
    '### Speaker archive',
    '',
    ...speakers.map((p) => `- ${p.name}, ${p.designation} (${p.url})`),
    '',
    '## Livestreams',
    '',
    ...livestreams.flatMap((l) => [`### ${l.title}`, '', `Speaker: ${l.speaker}. Watch: ${l.url}`, '', ...l.summary, '']),
    '## Partner events',
    '',
    ...partnerEventLines(),
    '',
    '## Sponsors and partners',
    '',
    ...SPONSORS.map((s) => `- ${s.name}: ${s.url}`),
    '',
    '## Team',
    '',
    ...TEAM.map((m) => `- ${m.name}, ${m.role} (${m.linkedin})`),
    '',
  ].join('\n');
}
