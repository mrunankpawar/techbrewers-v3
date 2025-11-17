import React from 'react';
import Image from 'next/image';
import AnnouncementBar from './AnnouncementBar';
import Navbar from './Navbar';

const HeroNew = () => {
  return (
    <div className="relative min-h-screen overflow-hidden sepia-background-hero">
      {/* Announcement Bar */}
      <AnnouncementBar />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 sepia-gradient-overlay" />
      
      {/* Navigation */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-6 pt-24 md:pt-28">
        {/* Badge */}
        <div className="mb-8 flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
          <span className="bg-orange-500/20 border border-orange-400/30 rounded-full px-2 py-1 text-orange-200 text-sm font-medium">NEW</span>
          <a 
            href="https://bit.ly/TTOSPI" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white text-sm font-medium ml-2 hover:text-orange-200 transition-colors"
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

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-colors backdrop-blur-sm border border-white/20">
            Connect With Us
          </button>
          <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-colors backdrop-blur-sm border border-white/20">
            What is TechThrusters?
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroNew;
