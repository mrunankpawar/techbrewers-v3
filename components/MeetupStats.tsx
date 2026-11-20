'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PageHeader } from './ui/Launch';
import { ArrowButton } from './ui/ArrowButton';
import { DISCORD_URL } from '@/lib/constants';
import { MEETUP_STATS } from '@/data/site';

const ease = [0.22, 1, 0.36, 1] as const;

const STAT_IMAGES = ['/images/thiings/organize.png', '/images/thiings/speaker.png', '/images/thiings/attendees.png'];
const stats = MEETUP_STATS.map((s, i) => ({ ...s, image: STAT_IMAGES[i] }));


const MeetupStats = () => {
  return (
    <>
      <PageHeader
        label="Meetups"
        title="Building community,"
        accent="one meetup at a time."
        intro="Join us as we bring together tech enthusiasts, industry leaders and innovators to learn, connect and grow together."
        photos={[
          { src: "/images/meetup/meetup3/crowd.JPG", alt: "Folks attending TechBrewers Meetup 3.0", caption: "TechBrewers Meetup 3.0" },
          { src: "/images/meetup/meetup3/networking.JPG", alt: "Folks networking at TechBrewers Community Meetup 3.0", caption: "Networking" },
        ]}
      >
        <ArrowButton href={DISCORD_URL} external>
          Join the Discord
        </ArrowButton>
      </PageHeader>

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
          <div className="grid divide-y divide-ink/10 overflow-hidden rounded-[1.75rem] border border-ink/10 bg-white/60 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="flex items-center gap-5 p-6 md:p-8"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.07, ease }}
              >
                <Image src={s.image} alt="" width={64} height={64} className="h-14 w-14 shrink-0 object-contain md:h-16 md:w-16" />
                <div>
                  <div className="display text-4xl text-ink md:text-5xl">{s.value}</div>
                  <div className="mt-1 text-sm text-ink-soft">{s.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MeetupStats;
