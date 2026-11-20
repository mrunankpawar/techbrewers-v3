'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SectionLabel } from './ui/Launch';
import { TEAM } from '@/data/site';

const ease = [0.22, 1, 0.36, 1] as const;

const TILES = ['bg-flare', 'bg-clay', 'bg-espresso', 'bg-ember'];
const teamMembers = TEAM.map((m, i) => ({ ...m, tile: TILES[i % TILES.length] }));


const MeetTheTeam = () => {
  return (
    <section className="relative bg-paper text-ink">
      <div aria-hidden className="absolute inset-0 star-field fade-edges" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
        <motion.div
          className="mx-auto mb-14 max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease }}
        >
          <SectionLabel className="mb-4 justify-center">The team</SectionLabel>
          <h2 className="display text-4xl md:text-6xl">
            The people who make it
            <br />
            <span className="accent text-ember">happen, every day.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ink-soft">
            We&apos;re more than just a team: we&apos;re a close-knit family of passionate individuals.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {teamMembers.map((m, i) => (
            <motion.a
              key={m.name}
              href={m.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${m.name} on LinkedIn`}
              className={`group block ${i % 2 ? 'lg:mt-10' : ''}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: i * 0.07, ease }}
            >
              <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-[0_1px_0_rgba(26,18,11,0.06)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_18px_40px_-18px_rgba(26,18,11,0.35)]">
                <div className={`relative flex aspect-square items-end justify-center overflow-hidden ${m.tile}`}>
                  <div className="relative h-[86%] w-[86%] translate-y-[8%] transition-transform duration-500 group-hover:translate-y-[4%] group-hover:scale-[1.03]">
                    <Image
                      src={m.image}
                      alt={m.name}
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between gap-2 px-3 py-3 sm:px-4 sm:py-4 md:px-5">
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold leading-tight sm:text-base">{m.name}</h3>
                    <p className="text-xs text-ink/50">{m.role}</p>
                  </div>
                  <span className="hidden h-8 w-8 shrink-0 sm:inline-flex items-center justify-center rounded-full bg-ink/5 text-ink/60 transition-colors group-hover:bg-ember group-hover:text-paper">
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
