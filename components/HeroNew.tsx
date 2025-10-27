import React from 'react';
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
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-6">
        {/* Badge */}
        <div className="mb-8 flex items-center bg-gradient-to-r from-orange-700 to-gray-800 rounded-full px-4 py-2">
          <span className="text-orange-200 text-sm font-medium">2025</span>
          <span className="text-white text-sm font-medium ml-2">Next-Gen Tech Community</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-6 leading-tight">
          Tech-Driven Success
          <br />
          <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            Redefining the Future
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 text-center mb-8 max-w-3xl leading-relaxed">
          Creating latest solutions that redefine innovation. Stay ahead with tech-powered 
          community and learning for the future.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Connect With Us
          </button>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            What is TechThrusters?
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroNew;
