'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowButton } from './ui/ArrowButton';
import { SectionLabel } from './ui/Launch';

const ease = [0.22, 1, 0.36, 1] as const;

const features = [
  {
    image: '/images/thiings/learn.png',
    title: 'Learn',
    kicker: 'Workshops & webinars',
    description:
      'Hands-on sessions and resources to level up your tech skills and stay ahead of the curve.',
  },
  {
    image: '/images/thiings/connect.png',
    title: 'Connect',
    kicker: 'Mentors & peers',
    description:
      'Meet industry professionals, mentors and fellow developers in a supportive, welcoming space.',
  },
  {
    image: '/images/thiings/build.png',
    title: 'Build',
    kicker: 'Challenges & projects',
    description:
      'Take on monthly challenges, collaborate on projects and showcase your work to the community.',
  },
];

const CommunityInfo = () => {
  return (
    <section className="border-y border-ink/10 bg-paper-2 text-ink">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <motion.div
          className="lg:sticky lg:top-32 lg:self-start"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease }}
        >
          <SectionLabel className="mb-4">Why TechThrusters</SectionLabel>
          <h2 className="display text-4xl md:text-6xl">
            One community.
            <br />
            <span className="accent text-ember">Every</span> stage of
            your career.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
            Whether you&apos;re writing your first line of code or shipping to millions, there&apos;s a
            place for you here. Learning, networking and building, all in one place.
          </p>
          <div className="mt-8">
            <ArrowButton href="/community" tone="ink">
              Our story
            </ArrowButton>
          </div>
        </motion.div>

        <div className="divide-y divide-ink/10 border-y border-ink/10">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="group grid grid-cols-[auto_1fr] items-start gap-6 py-8 md:gap-8 md:py-10"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease }}
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-ink/10 bg-paper shadow-[0_1px_0_rgba(26,18,11,0.05)] transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105 md:h-24 md:w-24">
                <Image src={f.image} alt="" width={72} height={72} className="h-14 w-14 object-contain md:h-16 md:w-16" />
              </div>
              <div>
                <h3 className="display text-3xl md:text-4xl">{f.title}</h3>
                <p className="eyebrow mt-3 text-ink/50">{f.kicker}</p>
                <p className="mt-2 max-w-md leading-relaxed text-ink-soft">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityInfo;
