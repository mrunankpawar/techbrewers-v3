"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Plus } from "lucide-react";
import { ArrowButton } from "./ui/ArrowButton";
import { PageHeader, SectionLabel } from "./ui/Launch";
import { DISCORD_URL } from "@/lib/constants";
import { FAQS, JOURNEY } from "@/data/site";

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
            {JOURNEY.map((item, index) => {
              const isNow = index === JOURNEY.length - 1;
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
          {FAQS.map((faq, index) => {
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
                      <p>
                        {faq.link ? (
                          <>
                            {faq.answer.split(faq.link.text)[0]}
                            <a
                              href={faq.link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-medium text-ember underline underline-offset-2 hover:text-ember-bright"
                            >
                              {faq.link.text}
                            </a>
                            {faq.answer.split(faq.link.text).slice(1).join(faq.link.text)}
                          </>
                        ) : (
                          faq.answer
                        )}
                      </p>
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
