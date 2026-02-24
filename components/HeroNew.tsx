import React from 'react';
import Image from 'next/image';
import Navbar from './Navbar';

const HeroNew = () => {
  return (
    <div className="relative min-h-screen overflow-hidden sepia-background-hero">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 sepia-gradient-overlay" />
      
      {/* Navigation */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-6 pt-32 md:pt-40">
        {/* Badge */}
        <div className="mb-8 flex items-center bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-full px-4 py-2 hover:border-orange-500/40 transition-all duration-300 group shadow-lg hover:shadow-[0_8px_30px_rgba(197,79,14,0.15)]">
          <span className="bg-gradient-to-r from-orange-500/30 to-orange-600/20 border border-orange-400/40 rounded-full px-3 py-1 text-orange-200 text-sm font-semibold group-hover:from-orange-500/40 group-hover:to-orange-600/30 transition-all duration-300">NEW</span>
          <a 
            href="https://bit.ly/TTOSPI" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white text-sm font-medium ml-3 hover:text-orange-200 transition-colors duration-300"
          >
            Open Source Project Incubator Program
          </a>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-6 leading-tight">
          <span className="bg-gradient-to-b from-orange-600 via-orange-700 to-orange-800 bg-clip-text text-transparent">TechThrusters</span>
          <br />
          <span className="bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">Learn. Connect. Build</span>
        </h1>

        {/* Header Images */}
        <div className="flex items-center justify-center mb-6 select-none pointer-events-none">
          <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-white/20 -mr-4 md:-mr-6 z-10">
            <Image
              src="/images/header/1.png"
              alt=""
              width={80}
              height={80}
              className="object-cover w-full h-full select-none pointer-events-none"
              draggable={false}
              unoptimized
            />
          </div>
          <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-white/20 -mr-4 md:-mr-6 z-20">
            <Image
              src="/images/header/2.png"
              alt=""
              width={80}
              height={80}
              className="object-cover w-full h-full select-none pointer-events-none"
              draggable={false}
              unoptimized
            />
          </div>
          <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-white/20 z-30">
            <Image
              src="/images/header/3.png"
              alt=""
              width={80}
              height={80}
              className="object-cover w-full h-full select-none pointer-events-none"
              draggable={false}
              unoptimized
            />
          </div>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-white/80 text-center mb-8 max-w-3xl leading-relaxed">
          Join a thriving community of innovators, creators, and lifelong learners. 
          Build projects, launch careers, and connect with tech leaders shaping tomorrow.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center mb-12">
          <a 
            href="https://bit.ly/TBDISCORD"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-r from-white/10 to-white/5 hover:from-orange-500/20 hover:to-orange-600/20 text-white px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 backdrop-blur-xl border border-white/20 hover:border-orange-500/40 text-center shadow-lg hover:shadow-[0_8px_30px_rgba(197,79,14,0.25)] hover:-translate-y-0.5"
            style={{ willChange: 'transform' }}
          >
            <span className="relative z-10">Join Discord</span>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/0 via-orange-500/0 to-orange-500/0 group-hover:from-orange-500/10 group-hover:via-orange-500/5 group-hover:to-orange-500/10 transition-all duration-500 pointer-events-none" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroNew;
