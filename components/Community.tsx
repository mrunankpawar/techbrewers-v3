"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaArrowRight, FaUsers, FaHandshake, FaTrophy, FaCalendarAlt, FaCode, FaLinkedin, FaTwitter, FaInstagram, FaChevronDown } from "react-icons/fa";

const Community = () => {
  const journeyTimeline = [
    {
      year: 2021,
      title: "The Beginning",
      description: "What started as a small group of friends became Hack Club TechBrewers—a student-led community built to share opportunities beyond college walls, from open-source to hackathons and learning in public.",
      milestones: [
        "Hack Club TechBrewers founded",
        "First core team of friends",
        "Focus on OSS, hackathons & learning in public"
      ]
    },
    {
      year: 2022,
      title: "Growing Strong",
      description: "We hit our first 100 members, rebranded to Club TechBrewers with a new logo, hosted virtual YouTube sessions, ran a logo design competition and closed the year crossing 500+ community members.",
      milestones: [
        "100 → 500+ members",
        "New logo & Club TechBrewers rebrand",
        "First virtual sessions & logo competition",
        "First in‑person meetup"
      ]
    },
    {
      year: 2023,
      title: "Expanding Horizons",
      description: "Early 2023 we crossed 1000+ members, celebrated with CelCon to bring the community together, and hosted TechBrewers Meetup 2.0 with incredible speakers sharing their journeys and insights.",
      milestones: [
        "1000+ member milestone",
        "CelCon community celebration",
        "TechBrewers Meetup 2.0"
      ]
    },
    {
      year: 2024,
      title: "Reaching New Heights",
      description: "We partnered with events, conferences and hackathons, launched monthly newsletters, hosted a GenAI meetup, ran TechBrewers Meetup 3.0 and rebranded from Club TechBrewers to TechThrusters.",
      milestones: [
        "Community event partnerships",
        "Monthly community newsletter",
        "GenAI meetup",
        "TechBrewers Meetup 3.0",
        "Rebrand to TechThrusters"
      ]
    },
    {
      year: 2025,
      title: "Building Momentum",
      description: "We kicked off monthly build challenges so members could ship something new every month, and launched the Open Source Project Incubator Program to help the community build in public together.",
      milestones: [
        "Monthly build challenges",
        "Open Source Project Incubator Program"
      ]
    },
    {
      year: 2026,
      title: "The Journey Continues",
      description: "As we continue our journey, we're committed to empowering more developers, fostering innovation, and building a stronger tech community together.",
      milestones: ["Ongoing Growth", "Future Initiatives", "Community Expansion"]
    }
  ];

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
      <div className="relative pt-24 md:pt-28 pb-16 md:pb-24 px-6 sepia-background-hero">
        <div className="absolute inset-0 sepia-gradient-overlay" />
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh]">
          <div className="max-w-7xl mx-auto w-full text-center">
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
              className="group relative bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-[0_8px_30px_rgba(197,79,14,0.25)] hover:-translate-y-0.5"
              style={{ willChange: 'transform' }}
            >
              <span className="relative z-10">Join Discord Community</span>
              <FaArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/0 via-orange-500/0 to-orange-500/0 group-hover:from-orange-500/10 group-hover:via-orange-500/5 group-hover:to-orange-500/10 transition-all duration-500 pointer-events-none" />
            </a>
            <Link
              href="/events"
              className="group relative bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 text-white px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 backdrop-blur-xl border border-white/20 hover:border-orange-500/40 shadow-lg hover:shadow-[0_8px_30px_rgba(197,79,14,0.15)] hover:-translate-y-0.5"
              style={{ willChange: 'transform' }}
            >
              Explore Events
            </Link>
          </div>
          </div>
        </div>
      </div>

      {/* Journey Timeline Section */}
      <div className="relative py-20 px-6 gradient-background">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
                Our Journey
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              From humble beginnings to a thriving community of 1900+ developers. Here&apos;s our story.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-orange-400 to-orange-500 transform md:-translate-x-1/2 hidden md:block" />
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-orange-400 to-orange-500 md:hidden" />

            {/* Timeline Items */}
            <div className="space-y-12 md:space-y-16">
              {journeyTimeline.map((item, index) => (
              <div
                  key={item.year}
                  className="relative flex flex-col md:grid md:grid-cols-12 items-start md:items-center gap-6 md:gap-0"
                style={{ 
                    animationDelay: `${index * 150}ms`,
                  willChange: 'transform'
                }}
              >
                  {/* Timeline Dot - positioned absolutely on the line center */}
                  <div className="absolute left-[33px] md:left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="w-4 h-4 bg-orange-500 rounded-full border-4 border-black shadow-lg shadow-orange-500/50" />
                    <div className="absolute inset-0 w-4 h-4 bg-orange-500 rounded-full animate-pulse" />
                  </div>

                  {/* Content Card - Alternating left/right */}
                  <div className={`flex-1 w-full pl-12 md:pl-0 md:col-span-5 ${
                    index % 2 === 0 
                      ? 'md:col-start-2 md:pr-8' 
                      : 'md:col-start-7 md:pl-8 md:ml-8'
                  }`}>
                    <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/20 via-orange-400/10 to-orange-500/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 hover:border-orange-500/40 transition-all duration-500 group-hover:shadow-[0_8px_30px_rgba(197,79,14,0.12)]">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/0 via-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:via-orange-500/0 group-hover:to-orange-500/5 transition-all duration-500 pointer-events-none" />
                        
                        <div className="relative z-10">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-orange-400 to-orange-600 bg-clip-text text-transparent">
                              {item.year}
                            </span>
                            {index === journeyTimeline.length - 1 && (
                              <span className="px-3 py-1 text-xs font-semibold bg-orange-500/20 text-orange-300 rounded-full border border-orange-500/30">
                                Present
                              </span>
                            )}
                </div>
                          
                          <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-orange-200 transition-colors duration-300">
                            {item.title}
                          </h3>
                          
                          <p className="text-gray-300 text-sm md:text-base mb-4 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                            {item.description}
                          </p>

                          {/* Milestones */}
                          <div className="flex flex-wrap gap-2">
                            {item.milestones.map((milestone, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1.5 text-xs font-medium bg-white/5 text-gray-300 rounded-lg border border-white/10 group-hover:border-orange-500/30 group-hover:text-orange-200 transition-all duration-300"
                              >
                                {milestone}
                              </span>
            ))}
          </div>
        </div>
      </div>
                    </div>
          </div>
                </div>
              ))}
              </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
};

// FAQ Component
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do I join the TechThrusters community?",
      answer: (
        <>
          Getting started is simple, join our {` `}
          <a
            href="https://bit.ly/TBDISCORD"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-300 underline transition-colors"
          >
            Discord server
          </a>. Once you&apos;re in, introduce yourself in the welcome channel and start connecting with fellow developers.
        </>
      )
    },
    {
      question: "Is TechThrusters free to join?",
      answer: "Yes, absolutely! TechThrusters is completely free to join. All our events, workshops, meetups, and community resources are available at no cost. We believe in making tech education and networking accessible to everyone."
    },
    {
      question: "What kind of events does TechThrusters organize?",
      answer: "We organize a variety of events including virtual monthly meetups with industry experts, hands-on workshops on trending technologies, hackathons, coding challenges, and networking sessions. We also host annual in-person meetups and webinars to accommodate members from different locations."
    },
    {
      question: "Do I need to be an experienced developer to join?",
      answer: "Not at all! TechThrusters welcomes developers of all skill levels - from complete beginners to seasoned professionals. Our community is designed to be inclusive and supportive, with resources and mentorship opportunities for everyone at every stage of their tech journey."
    },
    {
      question: "Can I organize an event or workshop?",
      answer: "Absolutely! We encourage community members to share their knowledge. If you have a topic you'd like to present or a workshop you'd like to organize, reach out to our team through Discord. We'll help you plan and promote your event to the community."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
      <div className="relative py-20 px-6 gradient-background">
      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have questions? We&apos;ve got answers. Here are some common questions about our community.
          </p>
                  </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/20 via-orange-400/10 to-orange-500/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-orange-500/40 transition-all duration-500">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between group/button"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-white group-hover/button:text-orange-200 transition-colors duration-300 pr-4">
                    {faq.question}
                  </h3>
                  <FaChevronDown
                    className={`flex-shrink-0 w-5 h-5 text-orange-400 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100 py-2' : 'max-h-0 opacity-0 py-0'
                  }`}
                >
                  <div className="px-6 pb-5">
                    <div className="text-gray-300 leading-relaxed">
                      {typeof faq.answer === 'string' ? <p>{faq.answer}</p> : faq.answer}
                </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
