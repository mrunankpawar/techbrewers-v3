import type { Metadata } from 'next';
import Link from 'next/link';
import { Mic2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import FooterNew from '@/components/FooterNew';
import { TECHTHRUSTERS_TALKS_FORM_URL } from '@/lib/techthrusters-talks';

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
        <main className="pt-24 md:pt-28 pb-16 px-6">
          <article className="relative max-w-3xl mx-auto">
            <div className="relative text-center mb-10">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500/15 to-orange-600/10 border border-white/10 mb-6">
                <Mic2 className="w-7 h-7 text-orange-300/90" aria-hidden />
              </div>
              <p className="text-sm font-medium text-orange-200/80 mb-2">Community speaker series</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
                  TechThrusters Talks
                </span>
              </h1>
            </div>

            <div className="relative rounded-2xl border border-white/[0.07] bg-gradient-to-br from-black/40 via-black/30 to-black/40 backdrop-blur-xl p-8 md:p-10 space-y-5 text-gray-300 leading-relaxed shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)]">
              <p>
                TechThrusters Talks is our{' '}
                <strong className="font-semibold text-white/95">community speaker series</strong>
                —lightning talks, panels, and open conversations about real tools, projects, and
                ideas. Sessions stay{' '}
                <strong className="font-semibold text-white/95">short and practical</strong>,
                built for developers who like learning together and shipping in public.
              </p>
              <p>
                We welcome{' '}
                <strong className="font-semibold text-white/95">
                  seasoned speakers and first-time presenters
                </strong>
                . If you have something you want to share, use the{' '}
                <strong className="font-semibold text-white/95">speaker form</strong> with your
                session title, abstract, audience level, and the takeaways you want attendees to
                leave with.
              </p>
              <p>
                <strong className="font-semibold text-white/95">New to TechThrusters?</strong> Get
                to know us on the{' '}
                <Link href="/community" className="text-orange-300 hover:text-orange-200 underline underline-offset-2">
                  community page
                </Link>{' '}
                or{' '}
                <Link href="/events" className="text-orange-300 hover:text-orange-200 underline underline-offset-2">
                  browse events
                </Link>{' '}
                to see what we are about.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href={TECHTHRUSTERS_TALKS_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-white/10 to-white/5 hover:from-orange-500/20 hover:to-orange-600/20 text-white px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 backdrop-blur-xl border border-white/20 hover:border-orange-500/40 shadow-lg hover:shadow-[0_8px_30px_rgba(197,79,14,0.25)] hover:-translate-y-0.5 w-full sm:w-auto"
                >
                  <span className="relative z-10">Open speaker application form</span>
                  <span className="relative z-10" aria-hidden>
                    →
                  </span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </div>
          </article>
        </main>
        <FooterNew />
      </div>
    </>
  );
}
