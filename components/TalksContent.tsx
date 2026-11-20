'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mic2, Users, Zap, FileText, AlignLeft, Gauge, Target } from 'lucide-react';
import { TECHTHRUSTERS_TALKS_FORM_URL } from '@/lib/techthrusters-talks';
import { PageHeader, SectionLabel } from './ui/Launch';
import { ArrowButton } from './ui/ArrowButton';

const ease = [0.22, 1, 0.36, 1] as const;

const formats = [
  { icon: Zap, title: 'Lightning talks', body: 'Short and practical: one idea, told well.' },
  { icon: Users, title: 'Panels', body: 'Open conversations about real tools, projects and ideas.' },
  { icon: Mic2, title: 'First-time presenters', body: 'Seasoned speakers and first-timers are equally welcome.' },
];

// What the speaker form asks for (from the application copy)
const checklist = [
  { icon: FileText, label: 'Session title' },
  { icon: AlignLeft, label: 'Abstract' },
  { icon: Gauge, label: 'Audience level' },
  { icon: Target, label: 'Key takeaways' },
];

export default function TalksContent() {
  return (
    <main>
      <PageHeader
        label="Community speaker series"
        title="TechThrusters"
        accent="Talks."
        intro="Lightning talks, panels and open conversations about real tools, projects and ideas, built for developers who like learning together and shipping in public."
        photos={[
          { src: "/images/meetup/meetup3/vj.JPG", alt: "Vijaykumar speaking at TechBrewers Meetup 3.0", caption: "Vijaykumar on stage, TechBrewers Meetup 3.0" },
          { src: "/images/meetup/meetup2/pralhad.jpg", alt: "Pralhad speaking at TechBrewers Community Meetup 2.0", caption: "Meetup 2.0" },
        ]}
      >
        <ArrowButton href={TECHTHRUSTERS_TALKS_FORM_URL} external>
          Apply to speak
        </ArrowButton>
      </PageHeader>

      {/* Formats strip */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
          <div className="grid divide-y divide-ink/10 overflow-hidden rounded-[1.75rem] border border-ink/10 bg-white/60 md:grid-cols-3 md:divide-x md:divide-y-0">
            {formats.map((f, i) => (
              <motion.div
                key={f.title}
                className="p-6 md:p-8"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.07, ease }}
              >
                <f.icon className="h-5 w-5 text-ember" aria-hidden />
                <h2 className="mt-5 text-xl font-semibold tracking-tight text-ink">{f.title}</h2>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{f.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to apply */}
      <section className="relative overflow-hidden star-field-dark text-paper">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-ember/30 blur-[120px]"
        />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease }}
          >
            <SectionLabel tone="light" className="mb-4">How to apply</SectionLabel>
            <h2 className="display text-4xl md:text-6xl">
              Have something to share?
              <br />
              <span className="accent text-flare">We&apos;d love to hear it.</span>
            </h2>
            <div className="mt-8 max-w-xl space-y-5 leading-relaxed text-paper/75">
              <p>
                We welcome{' '}
                <strong className="font-semibold text-paper">seasoned speakers and first-time presenters</strong>.
                If you have something you want to share, use the{' '}
                <strong className="font-semibold text-paper">speaker form</strong> with your session title,
                abstract, audience level, and the takeaways you want attendees to leave with.
              </p>
              <p>
                <strong className="font-semibold text-paper">New to TechThrusters?</strong> Get to know us on the{' '}
                <Link href="/community" className="text-flare underline underline-offset-2 hover:text-paper">
                  community page
                </Link>{' '}
                or{' '}
                <Link href="/events/partners" className="text-flare underline underline-offset-2 hover:text-paper">
                  browse events
                </Link>{' '}
                to see what we are about.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="self-start rounded-[1.75rem] border border-paper/10 bg-paper/[0.04] p-6 backdrop-blur md:p-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
          >
            <p className="eyebrow text-paper/50">What to include</p>
            <ul className="mt-5 divide-y divide-paper/10">
              {checklist.map((c) => (
                <li key={c.label} className="flex items-center gap-4 py-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-paper/10 text-flare">
                    <c.icon className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="flex-1 font-medium">{c.label}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <ArrowButton href={TECHTHRUSTERS_TALKS_FORM_URL} external tone="paper" className="w-full justify-between">
                Open speaker application form
              </ArrowButton>
              <p className="mt-3 text-center text-xs text-paper/40">Opens in a new tab</p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
