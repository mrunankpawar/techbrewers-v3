"use client";
import React from "react";
import Link from "next/link";
import { FaArrowRight, FaUsers, FaHandshake, FaTrophy, FaCalendarAlt, FaCode, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Community = () => {
  const resources = [
    {
      icon: <FaCalendarAlt className="w-8 h-8" />,
      title: "Attend Meetups & Events",
      description: "Join our in-person and virtual events to learn from industry experts and network with fellow developers.",
      link: "/meetup",
      linkText: "View Meetups"
    },
    {
      icon: <FaCode className="w-8 h-8" />,
      title: "Contribute to Open Source",
      description: "Build impactful projects and contribute to open source initiatives with the community.",
      link: "https://bit.ly/TTOSPI",
      linkText: "Learn More",
      external: true
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Build Together",
      description: "Collaborate on projects, form study groups, and build meaningful connections with like-minded developers.",
      link: "https://bit.ly/TBDISCORD",
      linkText: "Connect Now",
      external: true
    }
  ];

  const communityValues = [
    {
      title: "Supportive",
      description: "A safe space where everyone can learn, ask questions, and grow without judgment."
    },
    {
      title: "Inclusive",
      description: "We welcome developers of all skill levels, backgrounds, and experiences."
    },
    {
      title: "Growth-Focused",
      description: "Continuous learning and improvement are at the heart of everything we do."
    },
    {
      title: "Collaborative",
      description: "We believe in the power of working together to achieve greater things."
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Hero Section */}
      <div className="relative py-20 px-6 gradient-background">
        <div className="absolute inset-0 bg-gradient-radial from-orange-500/10 via-orange-500/5 to-transparent pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
              Join a Community That
            </span>
            <br />
            <span className="bg-gradient-to-b from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Grows With You
            </span>
          </h1>
          
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Connect with 1900+ developers, learn from experts, build projects, and advance your tech career in a supportive environment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://bit.ly/TBDISCORD"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              Join Discord Community
              <FaArrowRight />
            </a>
            <Link
              href="/events"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-colors backdrop-blur-sm border border-white/20"
            >
              Explore Events
            </Link>
          </div>
        </div>
      </div>

      {/* Why Join Section */}
      <div className="relative py-20 px-6 gradient-background">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
                Why Join TechThrusters?
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We&apos;re more than just a community—we&apos;re a movement dedicated to helping each other succeed in tech.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {communityValues.map((value, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-orange-500/30 transition-all duration-300 text-center"
              >
                <h3 className="text-xl font-bold bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent mb-3">{value.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="relative py-20 px-6 gradient-background">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
                Resources
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Everything you need to get started and stay connected with the community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-orange-500/30 transition-all duration-300 group"
              >
                <div className="text-orange-400 mb-4">{resource.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{resource.title}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{resource.description}</p>
                {resource.external ? (
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium text-sm group-hover:gap-3 transition-all"
                  >
                    {resource.linkText}
                    <FaArrowRight />
                  </a>
                ) : (
                  <Link
                    href={resource.link}
                    className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium text-sm group-hover:gap-3 transition-all"
                  >
                    {resource.linkText}
                    <FaArrowRight />
            </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="relative py-20 px-6 gradient-background">
        <div className="absolute inset-0 bg-gradient-radial from-orange-500/15 via-orange-500/5 to-transparent pointer-events-none" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
              Ready to Join the Movement?
            </span>
          </h2>
          
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join 1900+ developers who are learning, building, and growing together. Your tech journey starts here.
          </p>

          <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">What to Expect When You Join</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start gap-3">
                <FaUsers className="text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Active Community</h4>
                  <p className="text-gray-300 text-sm">Engage in daily discussions, get help, and share your progress.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaCalendarAlt className="text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Regular Events</h4>
                  <p className="text-gray-300 text-sm">Attend workshops, meetups, and networking sessions.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaTrophy className="text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Monthly Challenges</h4>
                  <p className="text-gray-300 text-sm">Participate in coding challenges and showcase your skills.</p>
                </div>
        </div>
              <div className="flex items-start gap-3">
                <FaHandshake className="text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Mentorship Opportunities</h4>
                  <p className="text-gray-300 text-sm">Get mentored or become a mentor to help others grow.</p>
                </div>
              </div>
            </div>
        </div>

          <a
            href="https://bit.ly/TBDISCORD"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Join Discord Community
            <FaArrowRight />
          </a>

          <div className="mt-8 flex justify-center gap-6">
            <a
              href="https://twitter.com/TechThrusters"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-400 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/company/techthrusters"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com/tech.thrusters"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-400 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
