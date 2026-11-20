'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SOCIAL } from '@/lib/constants';
import { SPONSORS, type Sponsor } from '@/data/sponsors';
import { SectionLabel } from './ui/Launch';

/**
 * Optical sizing: every logo gets roughly the same visual area, so a wide
 * wordmark and a square badge read as equally important. Sizes scale with
 * the --logo-scale custom property set on the grid.
 * Logos keep their real colours; white artwork was recoloured to ink and
 * white boxes removed in the trimmed files so they read on paper.
 */
const LOGO_AREA = 6400; // px² at --logo-scale: 1
const MAX_H = 64;
const MAX_W = 168;

function logoBox(s: Sponsor) {
  const ratio = s.w / s.h;
  let h = Math.sqrt(LOGO_AREA / ratio);
  let w = h * ratio;
  if (h > MAX_H) { h = MAX_H; w = h * ratio; }
  if (w > MAX_W) { w = MAX_W; h = w / ratio; }
  return { w: Math.round(w), h: Math.round(h) };
}

/** A sponsor logo flattened onto paper; place inside a `group` element. */
export function LogoMark({ sponsor: s }: { sponsor: Sponsor }) {
  const { w, h } = logoBox(s);
  return (
    <div
      className="relative"
      style={{ width: `calc(${w}px * var(--logo-scale, 1))`, height: `calc(${h}px * var(--logo-scale, 1))` }}
    >
      <Image
        src={s.logo}
        alt={s.name}
        fill
        sizes="200px"
        className="object-contain"
      />
    </div>
  );
}

function Sponsors() {
  return (
    <section id="partners" className="bg-paper text-ink">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <motion.div
          className="mb-12 max-w-3xl md:mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionLabel className="mb-4">Sponsors &amp; partners</SectionLabel>
          <h2 className="display text-4xl md:text-6xl">
            Free for everyone, thanks to{' '}
            <span className="accent text-ember">these folks.</span>
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
            TechThrusters is free and open for everyone, made possible by these wonderful sponsors
            and partners who support our events, programs and members.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 border-l border-t border-ink/10 [--logo-scale:0.62] sm:[--logo-scale:0.85] lg:grid-cols-6 lg:[--logo-scale:1]">
          {SPONSORS.map((s, i) => (
            <motion.a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              title={s.name}
              className="group relative flex h-20 items-center justify-center border-b border-r border-ink/10 bg-paper px-3 sm:h-28 sm:px-6 transition-colors duration-200 hover:bg-white md:h-32"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.04 }}
            >
              <LogoMark sponsor={s} />
            </motion.a>
          ))}

          {/* Call-to-action cell */}
          <a
            href={SOCIAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Your logo here? Partner with us (opens LinkedIn)"
            className="group flex h-20 flex-col items-start justify-between border-b border-r border-ink/10 bg-ink p-3 sm:h-28 sm:p-4 text-paper transition-colors hover:bg-ember md:h-32 md:p-5"
          >
            <span className="text-xs font-semibold leading-tight sm:text-sm">Your logo here?</span>
            <span className="inline-flex items-center gap-1 text-[11px] text-paper/70 group-hover:text-paper sm:text-xs">
              <span className="hidden sm:inline">Partner with us</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Sponsors;
