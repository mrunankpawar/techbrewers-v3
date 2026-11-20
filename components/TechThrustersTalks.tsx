'use client';

import React from 'react';
import { Mic2, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { TECHTHRUSTERS_TALKS_FORM_URL } from '@/lib/techthrusters-talks';
import { ArrowButton } from './ui/ArrowButton';
import { SectionLabel } from './ui/Launch';

const ease = [0.22, 1, 0.36, 1] as const;

const formats = [
  { icon: Zap, title: 'Lightning talks', body: 'Five to ten minutes on one sharp idea.' },
  { icon: Users, title: 'Panels', body: 'Candid conversations with people doing the work.' },
  { icon: Mic2, title: 'First-time speakers', body: 'Stepping on stage for the first time? We would love to hear from you.' },
];

const TechThrustersTalks = () => {
  return (
    <section
      id="techthrusters-talks"
      className="relative overflow-hidden star-field-dark text-paper"
      aria-labelledby="techthrusters-talks-heading"
    >
      {/* warm glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-ember/30 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24 text-center md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease }}
        >
          <SectionLabel tone="light" className="justify-center">
            TechThrusters Talks
          </SectionLabel>
          <h2
            id="techthrusters-talks-heading"
            className="display mx-auto mt-6 max-w-4xl text-4xl md:text-6xl"
          >
            Got something worth sharing?
            <br />
            <span className="accent text-flare">Take the stage.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-paper/70">
            Lightning talks, panels and conversations with the community. Pitch your session idea in a
            few minutes and we&apos;ll follow up from there.
          </p>
          <div className="mt-10 flex justify-center">
            <ArrowButton href={TECHTHRUSTERS_TALKS_FORM_URL} external tone="paper">
              Apply to speak
            </ArrowButton>
          </div>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-px overflow-hidden rounded-2xl border border-paper/10 bg-paper/10 text-left md:grid-cols-3">
          {formats.map((f, i) => (
            <motion.div
              key={f.title}
              className="bg-ember-deep/90 p-6 backdrop-blur md:p-8"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.1 + i * 0.06, ease }}
            >
              <f.icon className="h-5 w-5 text-flare" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-paper/60">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechThrustersTalks;
