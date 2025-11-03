import React from 'react';
import Image from 'next/image';

const FooterNew = () => {
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
                src="/images/logo/whitetrans.png"
                alt="TechThrusters Logo"
                width={100}
                height={32}
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 mb-2">
              Made remotely with <span className="text-orange-500">💜</span> and passion
            </p>
            <p className="text-gray-400">
              - TechThrusters Team
            </p>
          </div>

          {/* Template Pages Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Template Pages</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Portfolio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Social</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Twitter (X)</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Instagram</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">YouTube</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex items-center justify-center">
            <div className="text-gray-400/50 text-sm">
              © {new Date().getFullYear()} TechThrusters
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterNew;
