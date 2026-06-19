'use client';

import React from 'react';
import { Mic2 } from 'lucide-react';
import { TECHTHRUSTERS_TALKS_FORM_URL } from '@/lib/techthrusters-talks';
import { motion } from 'framer-motion';

const TechThrustersTalks = () => {
  return (
    <section
      id="techthrusters-talks"
      className="relative py-20 px-6 gradient-background overflow-hidden"
      aria-labelledby="techthrusters-talks-heading"
    >
      <div className="absolute inset-0 bg-gradient-radial from-orange-500/10 via-orange-500/5 to-transparent pointer-events-none" />

      <div className="relative max-w-3xl mx-auto">
        <motion.div
          className="relative group"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/10 via-transparent to-orange-500/10 rounded-2xl blur opacity-40" />

          <div className="relative bg-gradient-to-br from-black/40 via-black/30 to-black/40 border border-white/10 rounded-2xl p-8 md:p-10 text-center hover:border-orange-500/20 transition-colors duration-300">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/15 to-orange-600/10 border border-white/10 mb-5">
              <Mic2 className="w-6 h-6 text-orange-300/90" aria-hidden />
            </div>

            <p className="text-sm font-medium text-orange-200/80 mb-2">New initiative</p>
            <h2
              id="techthrusters-talks-heading"
              className="text-3xl md:text-5xl font-bold mb-4"
            >
              <span className="text-heading-gradient">
                TechThrusters Talks
              </span>
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-3 max-w-2xl mx-auto">
              Lightning talks, panels, and conversations with the community. Whether you are an
              experienced speaker or stepping on stage for the first time, we would love to hear
              from you.
            </p>
            <p className="text-gray-400/90 text-sm mb-8 max-w-xl mx-auto">
              Share your session idea in a few minutes—we will follow up from there.
            </p>

            <a
              href={TECHTHRUSTERS_TALKS_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-white/10 to-white/5 hover:from-orange-500/20 hover:to-orange-600/20 text-white px-8 py-3.5 rounded-xl font-semibold transition-colors duration-200 border border-white/20 hover:border-orange-500/40 shadow-lg hover:-translate-y-0.5 transition-transform"
            >
              <span>Apply to speak</span>
              <span className="inline-block group-hover:translate-x-0.5 transition-transform duration-200" aria-hidden>
                →
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechThrustersTalks;
