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
            {stats.map((stat, index) => (
              <div
                key={stat.id}
                className="group relative"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  willChange: 'transform'
                }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/20 via-orange-400/10 to-orange-500/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 hover:border-orange-500/40 transition-all duration-500 group-hover:shadow-[0_8px_30px_rgba(197,79,14,0.12)] group-hover:-translate-y-1 text-center">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/0 via-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:via-orange-500/0 group-hover:to-orange-500/5 transition-all duration-500 pointer-events-none" />
                  
                  {/* Icon or Image */}
                  <div className="flex justify-center mb-4 relative z-10">
                    {stat.image ? (
                      <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <Image
                          src={stat.image}
                          alt={stat.label}
                          width={80}
                          height={80}
                          className="object-contain w-full h-full"
                        />
                      </div>
                    ) : null}
                  </div>
                  
                  {/* Value */}
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-white via-white to-white/80 bg-clip-text text-transparent mb-2 relative z-10 group-hover:from-orange-400 group-hover:via-orange-300 group-hover:to-orange-400 transition-all duration-500">
                    {stat.value}
                  </div>
                  
                  {/* Label */}
                  <div className="text-sm md:text-base text-white/70 font-medium relative z-10 group-hover:text-gray-200 transition-colors duration-300">
                    {stat.label}
                  </div>
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
