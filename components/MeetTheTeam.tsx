'use client';

import React from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    id: 1,
    name: "Mrunank Pawar",
    // title: "Co-Founder, CEO",
    image: "/images/team/mrunanknew.png",
    linkedin: "https://www.linkedin.com/in/mrunankpawar/",
  },
  {
    id: 2,
    name: "Vaibhav Kadam",
    // title: "Co-Founder, CTO",
    image: "/images/team/vaibhavnew.png",
    linkedin: "https://www.linkedin.com/in/4lph4v/",
  },
  {
    id: 3,
    name: "Abhi Savale",
    // title: "Senior Developer",
    image: "/images/team/abhinew.png",
    linkedin: "https://www.linkedin.com/in/abhijeet-savale/",
  },
  {
    id: 4,
    name: "Sana Shaikh",
    // title: "Chief Operations Officer",
    image: "/images/team/sananew.png",
    linkedin: "https://www.linkedin.com/in/sanashaikh30/",
  },
];

const MeetTheTeam = () => {
  return (
    <div className="relative py-20 px-6 gradient-background overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-orange-500/15 via-orange-500/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1/3 bg-gradient-to-t from-orange-500/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="text-center mb-12">
          {/* Our Team Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <svg className="w-4 h-4 text-white mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
            <span className="text-white text-sm font-medium">Our Team</span>
          </div>
          
          {/* Main Title */}
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-white">Meet the Team Making</span>
            <br />
            <span className="bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">Things Happen Every Day</span>
          </h2>
          
          {/* Description */}
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Our team is made up of passionate professionals who bring their expertise and creativity to every project.
          </p>
        </div>

        {/* Team Grid - Horizontal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-5 hover:border-orange-500/50 transition-all duration-300 relative group flex items-center"
            >
              {/* Profile Picture */}
              <div className="flex-shrink-0 mr-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gray-700 group-hover:border-orange-500 transition-colors">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* Info Section */}
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-bold text-base truncate">
                  {member.name}
                </h3>
              </div>
              
              {/* LinkedIn Button */}
              <div className="flex-shrink-0 ml-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg transition-colors backdrop-blur-sm border border-white/20"
                  aria-label={`${member.name}'s LinkedIn`}
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;

