'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "./ui/Launch";
import { speakers } from "@/data/speakers";

const ease = [0.22, 1, 0.36, 1] as const;


function Team() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <motion.div
          className="mb-12 max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease }}
        >
          <SectionLabel className="mb-4">Speaker archive</SectionLabel>
          <h2 className="display text-4xl text-ink md:text-6xl">
            The voices who{" "}
            <span className="accent text-ember">took the stage.</span>
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
            {speakers.length} speakers have shared their journeys and insights at our meetups so far.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 border-l border-t border-ink/10 sm:grid-cols-3 lg:grid-cols-5">
          {speakers.map((person, index) => (
            <motion.a
              key={person.id}
              href={person.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center border-b border-r border-ink/10 px-3 py-7 text-center transition-colors hover:bg-white sm:px-5 md:py-9"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: (index % 5) * 0.05 }}
            >
              <ArrowUpRight
                className="absolute right-3 top-3 h-4 w-4 text-ink/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ember"
                aria-hidden
              />
              <div className="relative h-24 w-24 transition-transform duration-500 group-hover:-translate-y-1 md:h-32 md:w-32">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  sizes="128px"
                  className="object-contain"
                />
              </div>
              <h3 className="mt-4 text-sm font-semibold leading-tight text-ink md:text-base">{person.name}</h3>
              <p className="mt-1 text-xs leading-snug text-ink-soft md:text-sm">{person.designation}</p>
            </motion.a>
          ))}

          {/* Call to action: become the next speaker */}
          <Link
            href="/talks"
            className="group flex flex-col justify-between gap-6 border-b border-r border-ink/10 bg-ink p-5 text-paper transition-colors hover:bg-ember md:p-6"
          >
            <span className="eyebrow text-flare group-hover:text-paper">Your turn</span>
            <span>
              <span className="block text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
                Want to <span className="accent text-flare group-hover:text-paper">speak?</span>
              </span>
              <span className="mt-2 inline-flex items-center gap-1 text-xs text-paper/70 group-hover:text-paper">
                Apply for TechThrusters Talks
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Team;
