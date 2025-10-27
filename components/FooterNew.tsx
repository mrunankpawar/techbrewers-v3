import React from 'react';
import Image from 'next/image';

const FooterNew = () => {
  return (
    <footer className="relative overflow-hidden brown-background">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
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

          {/* Subscribe Form Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Subscribe Form</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter Your Email...."
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
              />
              <button className="bg-orange-700 hover:bg-orange-600 text-white px-6 py-3 rounded-r-lg transition-colors">
                Subscribe Us
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2024 TechThrusters
            </div>
            
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Terms & Conditions</a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Privacy Policy</a>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gray-800 rounded flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </div>
              <span className="text-gray-400 text-sm">Made with Next.js</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterNew;
