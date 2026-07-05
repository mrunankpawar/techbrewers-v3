'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

const inView = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease },
  }),
};

const CommunityInfo = () => {
  const features = [
    {
      id: 1,
      image: '/images/thiings/learn.png',
      title: 'Learn',
      description: 'Access workshops, webinars, and resources to level up your tech skills and stay ahead of the curve.',
    },
    {
      id: 2,
      image: '/images/thiings/connect.png',
      title: 'Connect',
      description: 'Network with industry professionals, mentors, and fellow developers in a supportive environment.',
    },
    {
      id: 3,
      image: '/images/thiings/build.png',
      title: 'Build',
      description: 'Participate in monthly challenges, collaborate on projects, and showcase your work to the community.',
    },
  ];

  const stats = [
    { number: '1,900', label: 'Members' },
    { number: '10', label: 'Countries' },
    { number: '50', label: 'Events & Workshops' },
    { number: '4', label: 'Years Growing' },
  ];

  return (
    <div className="relative py-20 px-6 gradient-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-orange-500/10 via-orange-500/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={inView}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          custom={0}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-heading-gradient">
              What Makes TechThrusters Special
            </span>
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            A thriving ecosystem where learning, networking, and innovation come together to shape the future of tech.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 mb-16 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="group relative w-full max-w-[320px] md:max-w-[320px] mx-auto md:mx-0"
              variants={inView}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              custom={index * 0.08}
              style={{ willChange: 'opacity, transform' }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/20 via-orange-400/10 to-orange-500/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-orange-500/30 transition-colors duration-300 h-full flex flex-col items-center text-center">
                <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mb-6 flex-shrink-0">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={96}
                    height={96}
                    className="object-contain w-full h-full relative z-10"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 flex-shrink-0 relative z-10 group-hover:text-orange-200 transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-gray-300/90 text-sm leading-relaxed mt-auto relative z-10">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="relative"
          variants={inView}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          custom={0.08}
        >
          <div className="relative bg-[#1a1208] border border-white/[0.07] rounded-2xl px-6 py-10 md:py-12">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className={[
                    'flex flex-col items-center justify-center text-center px-6 py-8 md:py-0 border-white/10',
                    index % 2 === 0 ? 'border-r' : '',
                    index === 1 ? 'md:border-r' : '',
                    index < 2 ? 'border-b md:border-b-0' : '',
                  ].join(' ')}
                  variants={inView}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  custom={index * 0.08}
                >
                  <div className="text-5xl md:text-6xl font-bold mb-3 leading-none">
                    <span className="text-white">{stat.number}</span>
                    <span className="text-orange-500">+</span>
                  </div>
                  <div className="text-sm md:text-base text-gray-400 tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CommunityInfo;
