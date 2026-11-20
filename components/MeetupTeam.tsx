'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "./ui/Launch";

const ease = [0.22, 1, 0.36, 1] as const;

const people = [
  { id: 1, name: "Ganesh Divekar", designation: "Engineering @ Bajaj Finserv", image: "/images/meetupteam/ganeshnew.png", url: "https://www.linkedin.com/in/ganesh-divekar-96a72bb7" },
  { id: 2, name: "Pranoti Nandurkar", designation: "Technical Architect @ Tata Consultancy Services", image: "/images/meetupteam/pranotinew.png", url: "https://www.linkedin.com/in/pranoti-nandurkar-170021b" },
  { id: 3, name: "Vijaykumar Jangamashetti", designation: "Sr Google Cloud Consulting Architect, Google", image: "/images/meetupteam/vijaykumarnew.png", url: "https://www.linkedin.com/in/vijaykumar-jangamashetti/" },
  { id: 4, name: "Yogini Bende", designation: "Co-founder and CTO @ Peerlist", image: "/images/meetupteam/yogininew.png", url: "https://peerlist.io/yogini" },
  { id: 5, name: "Akash Bhadange", designation: "Co-founder and CEO @ Peerlist", image: "/images/meetupteam/akashnew.png", url: "https://peerlist.io/designerdada" },
  { id: 6, name: "Pralhad Sonar", designation: "Customer Success @ Vercel", image: "/images/meetupteam/pralhadnew.png", url: "https://www.linkedin.com/in/npralhad/" },
  { id: 7, name: "Rahul Ambhore", designation: "Assistant Vice President @ State Street", image: "/images/meetupteam/rahulnew.png", url: "https://www.linkedin.com/in/ambhorerahul/" },
  { id: 8, name: "Touhid Shaikh", designation: "Head of Service Delivery @ Securityium", image: "/images/meetupteam/touhidnew.png", url: "https://www.linkedin.com/in/touhidshaikh22/" },
  { id: 9, name: "Jeenika Anadani", designation: "Cyber Security Engineer", image: "/images/meetupteam/jeenikanew.png", url: "https://www.linkedin.com/in/jeenika/" },
  { id: 10, name: "Vaishnavi Joshi", designation: "Open Source Admin @ AnitaB.org", image: "/images/meetupteam/vaishnavinew.png", url: "https://www.linkedin.com/in/vaishnavi-joshi29/" },
  { id: 11, name: "Nakia Lightwala", designation: "Developer @ Veritas", image: "/images/meetupteam/nakianew.png", url: "https://www.linkedin.com/in/nakia-lightwala/" },
  { id: 12, name: "Rohan Kulkarni", designation: "Developer @ Upsurge Labs", image: "/images/meetupteam/rohannew.png", url: "https://www.linkedin.com/in/rohan-k-2502/" },
  { id: 13, name: "Faizan Akhtar", designation: "Software Engineer @ Criteo", image: "/images/meetupteam/faizannew.png", url: "https://www.linkedin.com/in/akhtar-faizan/" },
  { id: 14, name: "Vishwas Kshirsagar", designation: "Data Science Consultant", image: "/images/meetupteam/vishwasnew.png", url: "https://www.linkedin.com/in/k98vishwas" },
];

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
            {people.length} speakers have shared their journeys and insights at our meetups so far.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 border-l border-t border-ink/10 sm:grid-cols-3 lg:grid-cols-5">
          {people.map((person, index) => (
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
