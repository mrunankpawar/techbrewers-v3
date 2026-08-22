'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SOCIAL } from '@/lib/constants';

const ease = [0.22, 1, 0.36, 1] as const;

const FooterNew = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden brown-background">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, ease }}
        >
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
              <li><Link href="/" className="text-gray-400 hover:text-orange-300 transition-colors duration-300 group/item inline-block">Home <span className="inline-block group-hover/item:translate-x-1 transition-transform duration-300">→</span></Link></li>
              <li><Link href="/community" className="text-gray-400 hover:text-orange-300 transition-colors duration-300 group/item inline-block">Community <span className="inline-block group-hover/item:translate-x-1 transition-transform duration-300">→</span></Link></li>
              <li><Link href="/events/partners" className="text-gray-400 hover:text-orange-300 transition-colors duration-300 group/item inline-block">Events <span className="inline-block group-hover/item:translate-x-1 transition-transform duration-300">→</span></Link></li>
              <li><Link href="/meetup" className="text-gray-400 hover:text-orange-300 transition-colors duration-300 group/item inline-block">Meetups <span className="inline-block group-hover/item:translate-x-1 transition-transform duration-300">→</span></Link></li>
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Social</h3>
            <ul className="space-y-3">
              <li><a href={SOCIAL.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-300 transition-colors duration-300 group/item inline-block">Twitter (X) <span className="inline-block group-hover/item:translate-x-1 transition-transform duration-300">→</span></a></li>
              <li><a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-300 transition-colors duration-300 group/item inline-block">Instagram <span className="inline-block group-hover/item:translate-x-1 transition-transform duration-300">→</span></a></li>
              <li><a href={SOCIAL.discord} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-300 transition-colors duration-300 group/item inline-block">Discord <span className="inline-block group-hover/item:translate-x-1 transition-transform duration-300">→</span></a></li>
              <li><a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-300 transition-colors duration-300 group/item inline-block">LinkedIn <span className="inline-block group-hover/item:translate-x-1 transition-transform duration-300">→</span></a></li>
            </ul>
          </div>
        </motion.div>

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
