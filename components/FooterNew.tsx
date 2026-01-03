import React from 'react';
import Image from 'next/image';

const FooterNew = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative overflow-hidden brown-background">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center mb-6">
              <Image
                src="/images/logo/trans-rect-white.png"
                alt="TechThrusters Logo"
                width={180}
                height={54}
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Learn. Connect. Build. Together we grow.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Navigation</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-400 hover:text-orange-400 transition-colors">Home</a></li>
              <li><a href="/community" className="text-gray-400 hover:text-orange-400 transition-colors">Community</a></li>
              <li><a href="/events" className="text-gray-400 hover:text-orange-400 transition-colors">Events</a></li>
              <li><a href="/meetup" className="text-gray-400 hover:text-orange-400 transition-colors">Meetups</a></li>
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Social</h3>
            <ul className="space-y-3">
              <li><a href="https://twitter.com/TechThrusters" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors">Twitter (X)</a></li>
              <li><a href="https://instagram.com/tech.thrusters" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors">Instagram</a></li>
              <li><a href="https://bit.ly/TBDISCORD" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors">Discord</a></li>
              <li><a href="https://linkedin.com/company/techthrusters" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex items-center justify-center">
            <div className="text-gray-400/50 text-sm">
              © {currentYear} TechThrusters
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterNew;
