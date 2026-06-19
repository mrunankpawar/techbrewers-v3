import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import FooterNew from '@/components/FooterNew';
import TalksContent from '@/components/TalksContent';

const SITE = 'https://techthrusters.org';
const CANONICAL = `${SITE}/talks`;
const OG_IMAGE = `${SITE}/images/ogimagehome.png`;

export const metadata: Metadata = {
  title: 'TechThrusters Talks | Apply to Speak',
  description:
    'Apply to speak at TechThrusters Talks: community lightning talks, panels, and sessions for developers. First-time speakers welcome—submit your session idea in minutes.',
  keywords: [
    'TechThrusters Talks',
    'apply to speak',
    'tech community speakers',
    'developer lightning talks',
    'TechThrusters',
  ],
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: CANONICAL,
    siteName: 'TechThrusters',
    title: 'TechThrusters Talks | Apply to Speak',
    description:
      'Propose a lightning talk, panel, or session for the TechThrusters community. Open speaker form—experienced and first-time speakers welcome.',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'TechThrusters Talks — apply to speak',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechThrusters Talks | Apply to Speak',
    description:
      'Propose a session for TechThrusters Talks. Community talks for developers—submit your idea via the speaker form.',
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TalksPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${CANONICAL}#webpage`,
        url: CANONICAL,
        name: 'TechThrusters Talks',
        description:
          'Apply to speak at TechThrusters community talks: lightning sessions, panels, and conversations for developers.',
        isPartOf: {
          '@type': 'WebSite',
          '@id': `${SITE}/#website`,
          name: 'TechThrusters',
          url: SITE,
        },
      },
      {
        '@type': 'EventSeries',
        '@id': `${CANONICAL}#series`,
        name: 'TechThrusters Talks',
        description:
          'A series of community-led tech talks, panels, and lightning sessions hosted by TechThrusters.',
        url: CANONICAL,
        organizer: {
          '@type': 'Organization',
          '@id': `${SITE}/#organization`,
          name: 'TechThrusters',
          url: SITE,
          sameAs: [
            'https://twitter.com/TechThrusters',
            'https://linkedin.com/company/techthrusters',
          ],
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="gradient-background min-h-screen">
        <Navbar />
        <TalksContent />
        <FooterNew />
      </div>
    </>
  );
}
