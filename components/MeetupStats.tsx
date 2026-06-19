'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

const MeetupStats = () => {
  const stats = [
    { id: 1, value: '7+', label: 'Meetups Organized', image: '/images/thiings/organize.png' },
    { id: 2, value: '14+', label: 'Expert Speakers', image: '/images/thiings/speaker.png' },
    { id: 3, value: '500+', label: 'Total Attendees', image: '/images/thiings/attendees.png' },
  ];

  return (
    <div className="relative min-h-[70vh] overflow-hidden">
      <div className="relative pt-16 md:pt-20 pb-16 md:pb-24 px-6 sepia-background-hero">
        <div className="absolute inset-0 sepia-gradient-overlay" />

        <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh]">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                <span className="text-heading-gradient">
                  Building Community
                </span>
                <br />
                <span className="text-heading-gradient">
                  One Meetup at a Time
                </span>
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                Join us as we bring together tech enthusiasts, industry leaders, and innovators to learn, connect, and grow together.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.id}
                  className="group relative"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.08, ease }}
                  style={{ willChange: 'opacity, transform' }}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/20 via-orange-400/10 to-orange-500/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-orange-500/30 transition-colors duration-300 text-center">
                    <div className="flex justify-center mb-4">
                      <Image
                        src={stat.image}
                        alt={stat.label}
                        width={72}
                        height={72}
                        className="object-contain w-16 h-16 md:w-[72px] md:h-[72px]"
                      />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors duration-200">
                      {stat.value}
                    </div>
                    <div className="text-sm md:text-base text-white/60 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetupStats;
