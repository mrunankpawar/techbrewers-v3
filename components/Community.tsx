"use client";
import React from "react";
import { EvervaultCard } from "./ui/EvervaultCard";
import SparklesCore from "./ui/Sparkles";
// import { calsans } from "@/fonts/calsans";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import TracingBeam from "./ui/TracingBeam";

const dummyContent = [
  {
    title: "The Beginning",
    description: (
      <>
        <p>
          It all started with a deep passion for spreading awareness about
          hackathons and communities, these experiences had profoundly impacted
          the founding team. Driven by this enthusiasm, they began sharing their
          knowledge and insights within a few WhatsApp groups, where like-minded
          students gathered. What started as simple message exchange quickly
          gained momentum, and the potential for something bigger became clear.
          This idea emerged and this evolved into a thriving community, united
          by the shared goals of Learn, Connect and Build.
        </p>
      </>
    ),
    badge: "2021",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Overcoming the Challenges",
    description: (
      <>
        <p>
        Inspiration struck, and with it, a realization: this group had the potential to evolve into a thriving community where students from around the world could learn, collaborate, and build together. The dream of TechBrewers was born—a space not just for conversation, but for creation, innovation, and growth. We started running experiments, organizing small meetups, hosting virtual events, and testing the waters of what this community could become. Each step forward brought us closer to realizing our vision.
        </p>
      </>
    ),
    badge: "2022",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Growing Together",
    description: (
      <>
        <p>
        Fueled by our vision, the founding team dove in with full-fledged motivation. We reached out to other communities and partnered with hackathons, striving to amplify our impact and spread the word. Our goal was simple: to serve the students, spread awareness about the opportunities available to them, and create a space where they could thrive. We knew we were onto something special when we crossed the milestone of 1,000 members—a sign that we were on the right path.
        </p>
      </>
    ),
    badge: "2023",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Building and Growing",
    description: (
      <>
        <p>
        As our community continued to grow, so did our determination. When we hit 1,000 members, it was a moment of reflection and pride—proof that we had come a long way from those early days on WhatsApp. This achievement only fueled our desire to do more, to give back to the community that had given us so much. Today, with over 2,000 members strong, TechBrewers stands as a testament to what can be accomplished when passion meets purpose. We've built something incredible together, and the journey is just beginning.
        </p>
      </>
    ),
    badge: "2024",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function Community() {
  return (
    <div className="mt-0 md:mt-10 h-auto w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-5 md:py-10">
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center">
        <h3 className="text-xl mb-3 md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-violet-50 to-violet-400 z-10">
          Unveiling the TechBrewers Journey
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
        <TracingBeam className="px-6">
          <div className="max-w-2xl mx-auto antialiased pt-4 relative">
            {dummyContent.map((item, index) => (
              <div key={`content-${index}`} className="mb-10">
                <h2 className="bg-black-100 border border-vi text-violet-300 rounded-full text-sm font-semibold w-fit px-4 py-1 mb-4">
                  {item.badge}
                </h2>

                <p className={twMerge("text-xl text-left mb-4")}>
                  {item.title}
                </p>

                <div className="text-sm prose text-left prose-sm dark:prose-invert">
                  {item?.image && (
                    <Image
                      src={item.image}
                      alt="blog thumbnail"
                      height="350"
                      width="350"
                      className="rounded-lg mb-10 object-cover"
                    />
                  )}
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </TracingBeam>

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
