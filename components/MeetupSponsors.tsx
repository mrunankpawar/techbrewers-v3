'use client';

import { motion } from "framer-motion";
import { LogoMark } from "./Sponsors";
import { SPONSORS } from "@/data/sponsors";
import { SectionLabel } from "./ui/Launch";

const ease = [0.22, 1, 0.36, 1] as const;

// Sponsors who backed our meetups (subset of the main sponsor list)
const MEETUP_SPONSOR_LOGOS = [
  "/images/sponsors/trimmed/github.png",
  "/images/sponsors/trimmed/securityium.png",
  "/images/sponsors/trimmed/daftar.png",
  "/images/sponsors/trimmed/peerlist.png",
  "/images/sponsors/trimmed/gfg.png",
  "/images/sponsors/trimmed/h2s.png",
  "/images/sponsors/trimmed/aeka.png",
  "/images/sponsors/trimmed/moneylancer.png",
];

const meetupSponsors = MEETUP_SPONSOR_LOGOS.map((logo) => SPONSORS.find((s) => s.logo === logo)!).filter(Boolean);

function Sponsors() {
  return (
    <section className="border-t border-ink/10 bg-paper-2">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease }}
        >
          <SectionLabel className="mb-4 justify-center">Past sponsors</SectionLabel>
          <h2 className="display text-4xl text-ink md:text-5xl">
            Fuelled by{" "}
            <span className="accent text-ember">great partners.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 border-l border-t border-ink/10 [--logo-scale:0.8] sm:grid-cols-4 sm:[--logo-scale:0.9] lg:[--logo-scale:1]">
          {meetupSponsors.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              title={s.name}
              className="group flex h-24 items-center justify-center border-b border-r border-ink/10 bg-paper-2 px-6 transition-colors hover:bg-white md:h-28"
            >
              <LogoMark sponsor={s} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sponsors;
