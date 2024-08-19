"use client";
import React from "react";
import { EvervaultCard } from "./ui/EvervaultCard";

function Community() {
  return (
    <div className="mt-0 md:mt-10 h-auto w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-5 md:py-10">
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center">
        <h3 className="text-xl mb-3 md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-violet-50 to-violet-400 z-10">
          All you need, All in one place
        </h3>
        <h1 className="mt-5 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-violet-50 to-violet-400 z-10">
          Club TechBrewers
        </h1>
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
