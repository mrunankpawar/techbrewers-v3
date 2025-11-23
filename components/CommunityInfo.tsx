'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <svg className="w-4 h-4 text-white mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
            </svg>
            <span className="text-white text-sm font-medium">About Our Community</span>
          </div>
          
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
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16 max-w-5xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-orange-500/30 transition-all duration-300 group w-full max-w-[280px] flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-4">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={80}
                  height={80}
                  className="object-contain w-full h-full"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
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

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-lg text-gray-300 mb-6">
            Ready to be part of something bigger?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sign-up"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-colors backdrop-blur-sm border border-white/20"
            >
              Join the Community
            </Link>
            <a
              href="https://bit.ly/TBDISCORD"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Join Discord
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityInfo;

