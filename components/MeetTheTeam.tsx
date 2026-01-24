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
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group relative"
              style={{ 
                animationDelay: `${index * 100}ms`,
                willChange: 'transform'
              }}
            >
              {/* Gradient Border Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/20 via-orange-400/10 to-orange-500/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Card */}
              <div className="relative bg-gradient-to-br from-black/40 via-black/30 to-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-orange-500/40 transition-all duration-500 group-hover:shadow-[0_8px_30px_rgba(197,79,14,0.12)] group-hover:-translate-y-1 flex items-center">
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/0 via-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:via-orange-500/0 group-hover:to-orange-500/5 transition-all duration-500 pointer-events-none" />
                
                {/* Profile Picture */}
                <div className="flex-shrink-0 mr-4 relative z-10">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-orange-500/60 transition-all duration-500 group-hover:scale-110">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover relative z-10"
                    />
                  </div>
                </div>
                
                {/* Info Section */}
                <div className="flex-1 min-w-0 relative z-10">
                  <h3 className="text-white font-bold text-lg truncate group-hover:text-orange-200 transition-colors duration-300">
                    {member.name}
                  </h3>
                </div>
                
                {/* LinkedIn Button */}
                <div className="flex-shrink-0 ml-4 relative z-10">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-11 h-11 bg-white/10 hover:bg-orange-500/20 rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-orange-500/40 group-hover:scale-110"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <svg className="w-5 h-5 text-white group-hover:text-orange-200 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;

