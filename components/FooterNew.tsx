'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SOCIAL, DISCORD_URL } from '@/lib/constants';
import { ArrowButton } from './ui/ArrowButton';

const ease = [0.22, 1, 0.36, 1] as const;

const columns = [
  {
    title: 'Explore',
    links: [
      { name: 'Home', href: '/' },
      { name: 'Community', href: '/community' },
      { name: 'Meetups', href: '/meetup' },
      { name: 'TechThrusters Talks', href: '/talks' },
      { name: 'Sign in', href: '/sign-up' },
    ],
  },
  {
    title: 'Events',
    links: [
      { name: 'Upcoming', href: '/events/upcoming' },
      { name: 'Partner events', href: '/events/partners' },
      { name: 'Livestreams', href: '/events/livestreams' },
    ],
  },
  {
    title: 'Social',
    links: [
      { name: 'Discord', href: SOCIAL.discord, external: true },
      { name: 'LinkedIn', href: SOCIAL.linkedin, external: true },
      { name: 'Instagram', href: SOCIAL.instagram, external: true },
      { name: 'Twitter (X)', href: SOCIAL.twitter, external: true },
    ],
  },
];

const FooterNew = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ember-night text-paper">
      {/* Closing CTA */}
      <div className="relative border-b border-paper/10">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-64 w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember/40 blur-[110px]"
        />
        <motion.div
          className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-16 md:flex-row md:items-center md:py-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease }}
        >
          <h2 className="display text-4xl md:text-6xl">
            Your next big thing
            <br />
            <span className="accent text-flare">starts with hello.</span>
          </h2>
          <ArrowButton href={DISCORD_URL} external tone="paper">
            Join the Discord
          </ArrowButton>
        </motion.div>
      </div>

      {/* Links */}
      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-x-8 gap-y-12 px-6 py-16 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div className="col-span-2 md:col-span-1">
          <Image
            src="/images/logo/techthrusters-light.png"
            alt="TechThrusters"
            width={1518}
            height={479}
            className="h-11 w-auto object-contain"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/60">
            A free, open community where people learn, connect and build in tech. Together we grow.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="eyebrow mb-5 text-paper/40">{col.title}</h3>
            <ul className="space-y-3 text-sm">
              {col.links.map((l) => {
                const cls =
                  'group inline-flex items-center gap-1 text-paper/75 transition-colors hover:text-paper';
                const arrow = (
                  <ArrowUpRight
                    className="h-3.5 w-3.5 opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:opacity-100"
                    aria-hidden
                  />
                );
                return (
                  <li key={l.name}>
                    {'external' in l && l.external ? (
                      <a href={l.href} target="_blank" rel="noopener noreferrer" className={cls}>
                        {l.name}
                        {arrow}
                      </a>
                    ) : (
                      <Link href={l.href} className={cls}>
                        {l.name}
                        {arrow}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      {/* Giant wordmark */}
      <div className="relative mx-auto max-w-7xl px-6">
        <div
          aria-hidden
          className="select-none text-center text-[15.5vw] font-semibold leading-[0.8] tracking-[-0.06em] text-transparent [-webkit-text-stroke:1px_rgba(245,240,230,0.14)] xl:text-[12.5rem]"
        >
          TechThrusters
        </div>
      </div>

      <div className="relative border-t border-paper/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-paper/40 sm:flex-row">
          <span>© {currentYear} TechThrusters</span>
          <span>Learn. Connect. Build.</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterNew;
