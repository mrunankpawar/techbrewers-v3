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
    { value: '1900+', label: 'Members' },
    { value: '50+', label: 'Events & Workshops' },
    { value: '4+', label: 'Years Growing' },
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
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="group relative w-full max-w-[320px] md:max-w-[320px] mx-auto md:mx-0"
              style={{ 
                animationDelay: `${index * 100}ms`,
                willChange: 'transform'
              }}
            >
              {/* Gradient Border Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/20 via-orange-400/10 to-orange-500/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Card */}
              <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-orange-500/40 transition-all duration-500 group-hover:shadow-[0_8px_30px_rgba(197,79,14,0.12)] group-hover:-translate-y-1 h-full flex flex-col items-center text-center">
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/0 via-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:via-orange-500/0 group-hover:to-orange-500/5 transition-all duration-500 pointer-events-none" />
                
                {/* Icon Container */}
                <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mb-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={96}
                      height={96}
                      className="object-contain w-full h-full relative z-10"
                    />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3 flex-shrink-0 relative z-10 group-hover:text-orange-200 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300/90 text-sm leading-relaxed mt-auto relative z-10 group-hover:text-gray-200 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="relative group">
          {/* Gradient Border */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/10 via-transparent to-orange-500/10 rounded-2xl blur opacity-50" />
          
          <div className="relative bg-gradient-to-br from-black/40 via-black/30 to-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 hover:border-orange-500/30 transition-all duration-500">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center group/stat"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-white via-white to-white/80 bg-clip-text text-transparent mb-2 group-hover/stat:from-orange-400 group-hover/stat:via-orange-300 group-hover/stat:to-orange-400 transition-all duration-500">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-gray-300/80 group-hover/stat:text-gray-200 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityInfo;

