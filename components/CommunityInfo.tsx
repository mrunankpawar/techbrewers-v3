'use client';

import React from 'react';
import Image from 'next/image';

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
    { value: '1900+', label: 'Active Members' },
    { value: '50+', label: 'Events & Workshops' },
    { value: '100+', label: 'Projects Built' },
    { value: '3+', label: 'Years Growing' },
  ];

  return (
    <div className="relative py-20 px-6 gradient-background overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-orange-500/10 via-orange-500/5 to-transparent pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
              What Makes TechThrusters Special
            </span>
          </h2>
          
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            A thriving ecosystem where learning, networking, and innovation come together to shape the future of tech.
          </p>
        </div>

        {/* Features Grid */}
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 mb-16 max-w-5xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-orange-500/30 transition-all duration-300 group w-full max-w-[280px] flex flex-col items-center text-center h-full"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-4 flex-shrink-0">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={80}
                  height={80}
                  className="object-contain w-full h-full"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 flex-shrink-0">{feature.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed mt-auto">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-8 md:p-12 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-300">
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

export default CommunityInfo;

