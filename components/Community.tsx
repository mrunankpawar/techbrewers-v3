"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Plus } from "lucide-react";
import { ArrowButton } from "./ui/ArrowButton";
import { PageHeader, SectionLabel } from "./ui/Launch";
import { DISCORD_URL } from "@/lib/constants";

const ease = [0.22, 1, 0.36, 1] as const;

function scrollReveal(delay = 0) {
  return {
    initial: { opacity: 0, y: 36 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 as const },
    transition: { duration: 0.45, delay, ease },
  };
}

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

  return (
    <div className="relative overflow-hidden bg-paper text-ink">
      <PageHeader
        label="Community"
        title="A community that"
        accent="grows with you."
        intro="Connect with 1,900+ developers, learn from experts, build projects and advance your tech career in a supportive environment."
        photos={[
          { src: "/images/meetup/meetup3/group.JPG", alt: "Group photo at TechBrewers Community Meetup 3.0", caption: "Group photo, TechBrewers Meetup 3.0" },
          { src: "/images/meetup/celcon/celconteam.jpg", alt: "TechBrewers Team at CelCon", caption: "CelCon" },
        ]}
      >
        <ArrowButton href={DISCORD_URL} external>
          Join the Discord
        </ArrowButton>
        <Link
          href="/events/partners"
          className="group inline-flex items-center gap-1 text-sm font-semibold text-ink/80 transition-colors hover:text-ink"
        >
          Explore events
          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </Link>
      </PageHeader>

      {/* Journey: a mission log */}
      <section className="border-y border-ink/10 bg-paper-2">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <motion.div {...scrollReveal(0)} className="lg:sticky lg:top-32 lg:self-start">
            <SectionLabel className="mb-4">Our story</SectionLabel>
            <h2 className="display text-4xl md:text-6xl">
              Our{' '}
              <span className="accent text-ember">journey</span>
              {' '}so far.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
              From humble beginnings to a thriving community of 1,900+ developers. Here&apos;s our story.
            </p>
          </motion.div>

          <ol className="relative">
            {/* flight path */}
            <span aria-hidden className="absolute bottom-3 left-[7px] top-3 w-px bg-gradient-to-b from-ember via-ember/40 to-ember" />
            {journeyTimeline.map((item, index) => {
              const isNow = index === journeyTimeline.length - 1;
              return (
                <motion.li
                  key={item.year}
                  {...scrollReveal(0.04)}
                  className="relative pb-12 pl-10 last:pb-0 md:pl-14"
                >
                  <span
                    aria-hidden
                    className={`absolute left-0 top-2 flex h-[15px] w-[15px] items-center justify-center rounded-full border-2 border-ember ${
                      isNow ? 'bg-ember' : 'bg-paper-2'
                    }`}
                  >
                    {isNow && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-40" />}
                  </span>

                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <span className="display text-5xl text-ink md:text-6xl">{item.year}</span>
                    <span className="eyebrow text-ink/50">{item.title}</span>
                    {isNow && (
                      <span className="eyebrow rounded-full bg-ember px-2 py-0.5 text-[10px] text-paper">Present</span>
                    )}
                  </div>
                  <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">{item.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {item.milestones.map((m) => (
                      <li
                        key={m}
                        className="rounded-full border border-ink/10 bg-paper px-3 py-1 text-xs text-ink/70"
                      >
                        {m}
                      </li>
                    ))}
                  </ul>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </section>

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
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-ember underline underline-offset-2 hover:text-ember-bright"
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
    <section className="relative">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <motion.div {...scrollReveal(0)} className="lg:sticky lg:top-32 lg:self-start">
          <SectionLabel className="mb-4">FAQ</SectionLabel>
          <h2 className="display text-4xl md:text-6xl">
            Questions,{' '}
            <span className="accent text-ember">answered.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
            Have questions? We&apos;ve got answers. Here are some common questions about our community.
          </p>
        </motion.div>

        <div className="border-t border-ink/10">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <motion.div
                key={faq.question}
                className="border-b border-ink/10"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.05, ease }}
              >
                <h3>
                  <button
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={open}
                    aria-controls={`faq-panel-${index}`}
                    id={`faq-button-${index}`}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="text-lg font-semibold tracking-tight transition-colors group-hover:text-ember md:text-xl">
                      {faq.question}
                    </span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        open ? 'rotate-45 border-ember bg-ember text-paper' : 'border-ink/15 text-ink/60'
                      }`}
                      aria-hidden
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-button-${index}`}
                  className={`grid transition-all duration-500 ease-in-out ${
                    open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="max-w-2xl pb-6 leading-relaxed text-ink-soft">
                      {typeof faq.answer === 'string' ? <p>{faq.answer}</p> : faq.answer}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Community;
