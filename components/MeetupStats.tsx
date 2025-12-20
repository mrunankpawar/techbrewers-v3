'use client';

import React from 'react';
import Image from 'next/image';

const MeetupStats = () => {
  const stats = [
    {
      id: 1,
      value: '7+',
      label: 'Meetups Organized',
      image: '/images/thiings/organise.png',
    },
    {
      id: 2,
      value: '14+',
      label: 'Expert Speakers',
      image: '/images/thiings/speaker.png',
    },
    {
      id: 3,
      value: '500+',
      label: 'Total Attendees',
      image: '/images/thiings/attendees.png',
    },
  ];

  return (
    <div className="relative min-h-[70vh] overflow-hidden sepia-background-hero">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 sepia-gradient-overlay" />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] px-6 pt-32 md:pt-40 pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto w-full">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
                Building Community
              </span>
              <br />
              <span className="bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
                One Meetup at a Time
              </span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Join us as we bring together tech enthusiasts, industry leaders, and innovators to learn, connect, and grow together.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 md:p-5 hover:border-orange-500/30 hover:bg-white/10 transition-all duration-300 text-center group"
              >
                {/* Icon or Image */}
                <div className="flex justify-center mb-3">
                  {stat.image ? (
                    <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
                      <Image
                        src={stat.image}
                        alt={stat.label}
                        width={64}
                        height={64}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  ) : null}
                </div>
                
                {/* Value */}
                <div className="text-2xl md:text-3xl font-bold text-white mb-1.5">
                  {stat.value}
                </div>
                
                {/* Label */}
                <div className="text-xs md:text-sm text-white/70 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetupStats;
