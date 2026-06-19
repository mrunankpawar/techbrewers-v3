'use client';

import Link from 'next/link';
import { Mic2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { TECHTHRUSTERS_TALKS_FORM_URL } from '@/lib/techthrusters-talks';

const ease = [0.22, 1, 0.36, 1] as const;

export default function TalksContent() {
  return (
    <main className="pt-24 md:pt-28 pb-16 px-6">
      <article className="relative max-w-3xl mx-auto">
        <motion.div
          className="relative text-center mb-10"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, ease }}
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500/15 to-orange-600/10 border border-white/10 mb-6">
            <Mic2 className="w-7 h-7 text-orange-300/90" aria-hidden />
          </div>
          <p className="text-sm font-medium text-orange-200/80 mb-2">Community speaker series</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-heading-gradient">
              TechThrusters Talks
            </span>
          </h1>
        </motion.div>

        <motion.div
          className="relative rounded-2xl border border-white/[0.07] bg-gradient-to-br from-black/40 via-black/30 to-black/40 backdrop-blur-md p-8 md:p-10 space-y-5 text-gray-300 leading-relaxed shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)]"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15, ease }}
        >
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
            <Link href="/events/partners" className="text-orange-300 hover:text-orange-200 underline underline-offset-2">
              browse events
            </Link>{' '}
            to see what we are about.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={TECHTHRUSTERS_TALKS_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-white/10 to-white/5 hover:from-orange-500/20 hover:to-orange-600/20 text-white px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 backdrop-blur-md border border-white/20 hover:border-orange-500/40 shadow-lg hover:shadow-[0_8px_30px_rgba(197,79,14,0.25)] hover:-translate-y-0.5 w-full sm:w-auto"
            >
              <span className="relative z-10">Open speaker application form</span>
              <span className="relative z-10" aria-hidden>→</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </motion.div>
      </article>
    </main>
  );
}
