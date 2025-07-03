import Link from "next/link";
import React from "react";
import Image from "next/image";
import {
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa6";
import { SiPeerlist } from "react-icons/si";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-violet-100/[0.05] mt-20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Image
              src="/images/logo/whitetrans.png"
              alt="TechThrusters Logo"
              width={180}
              height={180}
              className="mb-4"
            />
            <p className="text-gray-400 text-base leading-relaxed">
              Join our vibrant community of tech enthusiasts, learners, and builders.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/events" className="text-gray-400 hover:text-violet-300 text-base transition-colors duration-200">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/challenges" className="text-gray-400 hover:text-violet-300 text-base transition-colors duration-200">
                  Challenges
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-gray-400 hover:text-violet-300 text-base transition-colors duration-200">
                  Community
                </Link>
              </li>
              <li>
                <Link href="mailto:contact@techthrusters.org" className="text-gray-400 hover:text-violet-300 text-base transition-colors duration-200">
                  Partner with us
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Connect</h3>
            <div className="flex flex-col space-y-3">
              <Link
                href="https://bit.ly/TBDISCORD"
                target="_blank"
                className="text-gray-400 hover:text-violet-300 text-base flex items-center gap-2 transition-colors duration-200"
              >
                <FaDiscord className="text-xl" /> Join Discord
              </Link>
              <Link
                href="https://techthrusters.substack.com"
                target="_blank"
                className="text-gray-400 hover:text-violet-300 text-base flex items-center gap-2 transition-colors duration-200"
              >
                Subscribe to Newsletter
              </Link>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-8 mt-10 pt-8 border-t border-violet-300/10">
          <Link href="https://www.instagram.com/tech.thrusters/" target="_blank">
            <FaInstagram className="text-gray-400 hover:text-pink-500 text-2xl transition-colors duration-200" />
          </Link>
          <Link href="https://www.linkedin.com/company/techthrusters/" target="_blank">
            <FaLinkedinIn className="text-gray-400 hover:text-[#0A66C2] text-2xl transition-colors duration-200" />
          </Link>
          <Link href="https://twitter.com/TechThrusters" target="_blank">
            <FaXTwitter className="text-gray-400 hover:text-white text-2xl transition-colors duration-200" />
          </Link>
          <Link href="https://www.youtube.com/@tech.thrusters" target="_blank">
            <FaYoutube className="text-gray-400 hover:text-[#FF0000] text-2xl transition-colors duration-200" />
          </Link>
          <Link href="https://peerlist.io/company/techthrusters" target="_blank">
            <SiPeerlist className="text-gray-400 hover:text-[#01A93A] text-2xl transition-colors duration-200" />
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm mt-10">
          © {currentYear} TechThrusters. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

