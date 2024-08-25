"use client";
import React from "react";
import { EvervaultCard } from "./ui/EvervaultCard";
import SparklesCore from "./ui/Sparkles";
// import { calsans } from "@/fonts/calsans";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import TracingBeam from "./ui/TracingBeam";
import { Timeline } from "./ui/Timeline";

const data = [
  {
    title: "Late 2021",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-md text-left md:text-lg font-bold mb-4">
          Start of Club TechBrewers
        </p>
        <div className="mb-8">
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-left text-md md:text-lg">
            🌱 Birth of Club TechBrewers
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-left text-md md:text-lg">
            1️⃣ First Virtual Event
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-left text-md md:text-lg">
            👥 First Few Friends
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Early 2022",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-md text-left md:text-lg font-bold mb-4">
          Initial Growth
        </p>
        <div className="mb-8">
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-left text-md md:text-lg">
            💯 First 100 Members
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-left text-md md:text-lg">
            💻 Website Launch
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-left text-md md:text-lg">
            💡 Logo Design Competition
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-left text-md md:text-lg">
            🚀 New Logo Announcement
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Late 2022",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-md text-left md:text-lg font-bold mb-4">
          New Initiatives
        </p>
        <div className="mb-8">
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-left text-md md:text-lg">
            📱 Social Media Strategies
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-left text-md md:text-lg">
            🎁 Giveaway
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-left text-md md:text-lg">
            👥 New Team Members
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-left text-md md:text-lg">
            🎉 TechBrewers Community Meetup 1.0
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Early 2023",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-md text-left md:text-lg font-bold mb-4">
          Collaborations and Partnerships
        </p>
        <div className="mb-8">
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-left text-md md:text-lg">
            🤝 Collaborated with hackathons
          </div>

          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-left text-md md:text-lg">
            📈 Crossed 1000+ Members
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-left text-md md:text-lg">
            🎉 TechBrewers CelCon
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-left text-md md:text-lg">
            💻 Website Theme Change
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Late 2023",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-md text-left md:text-lg font-bold mb-4">
          Events and Meetup
        </p>
        <div className="mb-8">
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-left text-md md:text-lg">
            💻 Hacktoberfest event
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-left text-md md:text-lg">
            🎉 TechBrewers Community Meetup 2.0
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-left text-md md:text-lg">
            🎨 Website Theme Change
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-left text-md md:text-lg">
            🤝 Community Partner with GDG Silicon Valley
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Early 2024",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-md text-left font-bold md:text-lg mb-4">
          Partnerships and Initiatives
        </p>
        <div className="mb-8">
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-left text-md md:text-lg">
            🤝 Partnered with Developer Week SF
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-left text-md md:text-lg">
            📰 Announcing monthly newsletter
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-left text-md md:text-lg">
            🎉 TechBrewers GenAI Meetup
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-left text-md md:text-lg">
            👾 Launch community on Discord
          </div>
        </div>
      </div>
    ),
  },
];

function Community() {
  return (
    <div className="mt-0 md:mt-10 h-auto w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-28 md:py-20">
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center">
        <h3 className="text-xl mb-3 md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-violet-50 to-violet-400 z-10">
          Unveiling the TechBrewers Journey
        </h3>

        <div className="w-full">
          <Timeline data={data} />
        </div>

        <h3 className="text-xl mb-3 md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-violet-50 to-violet-400 z-10">
          All you need, All in one place
        </h3>
        <div className="w-[40rem] h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black-100 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
        {/* <h1 className="mt-5 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-violet-50 to-violet-400 z-10">
          Club TechBrewers
        </h1> */}

        <div className="container mx-auto px-4 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Web dev */}
            <div className="border-2 rounded-xl border-violet-300 dark:border-violet-300/[0.5] flex flex-col items-center max-w-sm mx-auto p-4 relative h-[20rem]">
              <EvervaultCard text="💻" />

              <h2 className="mt-5 md:mb-3 uppercase font-semibold tracking-widest text-md text-center text-blue-100 max-w-80 z-10">
                Web Development
              </h2>
            </div>

            {/* Cybersec */}
            <div className="border-2 rounded-xl border-violet-300 dark:border-violet-300/[0.5] flex flex-col items-center max-w-sm mx-auto p-4 relative h-[20rem]">
              <EvervaultCard text="🔐" />

              <h2 className="mt-5 md:mb-3 uppercase font-semibold tracking-widest text-md text-center text-blue-100 max-w-80 z-10">
                Cybersecurity
              </h2>
            </div>

            {/* Cloud */}
            <div className="border-2 rounded-xl border-violet-300 dark:border-violet-300/[0.5] flex flex-col items-center max-w-sm mx-auto p-4 relative h-[20rem]">
              <EvervaultCard text="☁️" />

              <h2 className="mt-5 md:mb-3 uppercase font-semibold tracking-widest text-md text-center text-blue-100 max-w-80 z-10">
                Cloud
              </h2>
            </div>

            {/* App Dev */}
            <div className="border-2 rounded-xl border-violet-300 dark:border-violet-300/[0.5] flex flex-col items-center max-w-sm mx-auto p-4 relative h-[20rem]">
              <EvervaultCard text="📱" />

              <h2 className="mt-5 md:mb-3 uppercase font-semibold tracking-widest text-md text-center text-blue-100 max-w-80 z-10">
                App Development
              </h2>
            </div>

            {/* Card 3 */}
            <div className="border-2 rounded-xl border-violet-300 dark:border-violet-300/[0.5] flex flex-col items-center max-w-sm mx-auto p-4 relative h-[20rem]">
              <EvervaultCard text="💡" />

              <h2 className="mt-5 md:mb-3 uppercase font-semibold tracking-widest text-md text-center text-blue-100 max-w-80 z-10">
                Product Management
              </h2>
            </div>

            {/* AR /VR */}
            <div className="border-2 rounded-xl border-violet-300 dark:border-violet-300/[0.5] flex flex-col items-center max-w-sm mx-auto p-4 relative h-[20rem]">
              <EvervaultCard text="ᯅ" />

              <h2 className="mt-5 md:mb-3 uppercase font-semibold tracking-widest text-md text-center text-blue-100 max-w-80 z-10">
                AR /VR
              </h2>
            </div>

            {/* AI /ML */}
            <div className="border-2 rounded-xl border-violet-300 dark:border-violet-300/[0.5] flex flex-col items-center max-w-sm mx-auto p-4 relative h-[20rem]">
              <EvervaultCard text="🤖" />

              <h2 className="mt-5 md:mb-3 uppercase font-semibold tracking-widest text-md text-center text-blue-100 max-w-80 z-10">
                AI /ML
              </h2>
            </div>

            {/* Networking */}
            <div className="border-2 rounded-xl border-violet-300 dark:border-violet-300/[0.5] flex flex-col items-center max-w-sm mx-auto p-4 relative h-[20rem]">
              <EvervaultCard text="🤝" />

              <h2 className="mt-5 md:mb-3 uppercase font-semibold tracking-widest text-md text-center text-blue-100 max-w-80 z-10">
                Networking
              </h2>
            </div>

            {/* Opportunities */}
            <div className="border-2 rounded-xl border-violet-300 dark:border-violet-300/[0.5] flex flex-col items-center max-w-sm mx-auto p-4 relative h-[20rem]">
              <EvervaultCard text="💼" />

              <h2 className="mt-5 md:mb-3 uppercase font-semibold tracking-widest text-md text-center text-blue-100 max-w-80 z-10">
                Opportunities
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
