// "use client";
// import React from "react";
// import { EvervaultCard } from "./ui/EvervaultCard";
// import SparklesCore from "./ui/Sparkles";
// import { Timeline } from "./ui/Timeline";
// import Link from "next/link";

// const data = [
//   {
//     title: "Late 2021",
//     content: (
//       <div>
//         <p className="text-neutral-800 dark:text-neutral-200 text-md text-left md:text-lg font-bold mb-4">
//           Start of Club TechBrewers
//         </p>
//         <div className="mb-8">
//           <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-left text-md md:text-lg">
//             🌱 Birth of Club TechBrewers
//           </div>
//           <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-left text-md md:text-lg">
//             1️⃣ First Virtual Event
//           </div>
//           <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-left text-md md:text-lg">
//             👥 First Few Friends
//           </div>
//         </div>
//       </div>
//     ),
//   },
//   {
//     title: "Early 2022",
//     content: (
//       <div>
//         <p className="text-neutral-800 dark:text-neutral-200 text-md text-left md:text-lg font-bold mb-4">
//           Initial Growth
//         </p>
//         <div className="mb-8">
//           <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-left text-md md:text-lg">
//             💯 First 100 Members
//           </div>
//           <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-left text-md md:text-lg">
//             💻 Website Launch
//           </div>
//           <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-left text-md md:text-lg">
//             💡 Logo Design Competition
//           </div>
//           <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-left text-md md:text-lg">
//             🚀 New Logo Announcement
//           </div>
//         </div>
//       </div>
//     ),
//   },
//   {
//     title: "Late 2022",
//     content: (
//       <div>
//         <p className="text-neutral-800 dark:text-neutral-200 text-md text-left md:text-lg font-bold mb-4">
//           New Initiatives
//         </p>
//         <div className="mb-8">
//           <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-left text-md md:text-lg">
//             📱 Social Media Strategies
//           </div>
//           <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-left text-md md:text-lg">
//             🎁 Giveaway
//           </div>
//           <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-left text-md md:text-lg">
//             👥 New Team Members
//           </div>
//           <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-left text-md md:text-lg">
//             🎉 TechBrewers Community Meetup 1.0
//           </div>
//         </div>
//       </div>
//     ),
//   },
//   {
//     title: "Early 2023",
//     content: (
//       <div>
//         <p className="text-neutral-800 dark:text-neutral-200 text-md text-left md:text-lg font-bold mb-4">
//           Collaborations and Partnerships
//         </p>
//         <div className="mb-8">
//           <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-left text-md md:text-lg">
//             🤝 Collaborated with hackathons
//           </div>

//           <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-left text-md md:text-lg">
//             📈 Crossed 1000+ Members
//           </div>
//           <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-left text-md md:text-lg">
//             🎉 TechBrewers CelCon
//           </div>
//           <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-left text-md md:text-lg">
//             💻 Website Theme Change
//           </div>
//         </div>
//       </div>
//     ),
//   },
//   {
//     title: "Late 2023",
//     content: (
//       <div>
//         <p className="text-neutral-800 dark:text-neutral-200 text-md text-left md:text-lg font-bold mb-4">
//           Events and Meetup
//         </p>
//         <div className="mb-8">
//           <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-left text-md md:text-lg">
//             💻 Hacktoberfest event
//           </div>
//           <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-left text-md md:text-lg">
//             🎉 TechBrewers Community Meetup 2.0
//           </div>
//           <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-left text-md md:text-lg">
//             🎨 Website Theme Change
//           </div>
//           <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-left text-md md:text-lg">
//             🤝 Community Partner with GDG Silicon Valley
//           </div>
//         </div>
//       </div>
//     ),
//   },
//   {
//     title: "Early 2024",
//     content: (
//       <div>
//         <p className="text-neutral-800 dark:text-neutral-200 text-md text-left font-bold md:text-lg mb-4">
//           Partnerships and Initiatives
//         </p>
//         <div className="mb-8">
//           <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-left text-md md:text-lg">
//             🤝 Partnered with Developer Week SF
//           </div>
//           <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-left text-md md:text-lg">
//             📰 Announcing monthly newsletter
//           </div>
//           <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-left text-md md:text-lg">
//             🎉 TechBrewers GenAI Meetup
//           </div>
//           <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-left text-md md:text-lg">
//             👾 Launch community on Discord
//           </div>
//         </div>
//       </div>
//     ),
//   },
//   {
//     title: "Late 2024",
//     content: (
//       <div>
//         <p className="text-neutral-800 dark:text-neutral-200 text-md text-left font-bold md:text-lg mb-4">
//           In-person Meetup
//         </p>
//         <div className="mb-8">
//           <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-left text-md md:text-lg">
//             🎉 Celebrated 3 years of TechBrewers
//           </div>
//           <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-left text-md md:text-lg">
//             🚀 TechBrewers Meetup 3.0
//           </div>
//           {/* <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-left text-md md:text-lg">
//             🎉 TechBrewers GenAI Meetup
//           </div>
//           <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-left text-md md:text-lg">
//             👾 Launch community on Discord
//           </div> */}
//         </div>
//       </div>
//     ),
//   },
// ];

// function Community() {
//   return (
//     <div className="mt-0 md:mt-10 h-auto w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-28 md:py-20">
//       <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center">
//         <h3 className="mb-3 text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-violet-50 to-violet-400 z-10">
//           Unveiling the TechThrusters Journey
//         </h3>

//         <div className="w-full">
//           <Timeline data={data} />
//         </div>

//         <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-violet-50 to-violet-400 z-10">
//           All you need, All in one place
//         </h3>
//         <div className="w-[40rem] h-40 relative">
//           <SparklesCore
//             background="transparent"
//             minSize={0.4}
//             maxSize={1}
//             particleDensity={1200}
//             className="w-full h-full"
//             particleColor="#FFFFFF"
//           />

//           <div className="absolute inset-0 w-full h-full bg-black-100 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
//         </div>

//         <div className="container mx-auto px-4 mt-10">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//             {/* Web dev */}
//             <Link href="https://discord.gg/kQtQpAKV9K" target="_blank" passHref>
//               <div className="border-2 rounded-xl border-violet-300 dark:border-violet-300/[0.5] flex flex-col items-center max-w-sm mx-auto p-4 relative h-[20rem] cursor-pointer">
//                 <EvervaultCard text="💻" />
//                 <h2 className="mt-5 md:mb-3 uppercase font-semibold tracking-widest text-md text-center text-blue-100 max-w-80 z-10">
//                   Web Development
//                 </h2>
//               </div>
//             </Link>

//             {/* Cybersec */}
//             <Link href="https://discord.gg/Jhp9zrkyz5" target="_blank" passHref>
//               <div className="border-2 rounded-xl border-violet-300 dark:border-violet-300/[0.5] flex flex-col items-center max-w-sm mx-auto p-4 relative h-[20rem]">
//                 <EvervaultCard text="🔐" />

//                 <h2 className="mt-5 md:mb-3 uppercase font-semibold tracking-widest text-md text-center text-blue-100 max-w-80 z-10">
//                   Cybersecurity
//                 </h2>
//               </div>
//             </Link>

//             {/* Cloud */}
//             <Link href="https://discord.gg/avEERtbqYQ" target="_blank" passHref>
//               <div className="border-2 rounded-xl border-violet-300 dark:border-violet-300/[0.5] flex flex-col items-center max-w-sm mx-auto p-4 relative h-[20rem]">
//                 <EvervaultCard text="☁️" />

//                 <h2 className="mt-5 md:mb-3 uppercase font-semibold tracking-widest text-md text-center text-blue-100 max-w-80 z-10">
//                   Cloud
//                 </h2>
//               </div>
//             </Link>

//             {/* App Dev */}
//             <Link href="https://discord.gg/gGXYaz7bJ9" target="_blank" passHref>
//               <div className="border-2 rounded-xl border-violet-300 dark:border-violet-300/[0.5] flex flex-col items-center max-w-sm mx-auto p-4 relative h-[20rem]">
//                 <EvervaultCard text="📱" />

//                 <h2 className="mt-5 md:mb-3 uppercase font-semibold tracking-widest text-md text-center text-blue-100 max-w-80 z-10">
//                   App Development
//                 </h2>
//               </div>
//             </Link>

//             {/* Product Management */}
//             <Link href="https://discord.gg/DqUcPvAQSH" target="_blank" passHref>
//               <div className="border-2 rounded-xl border-violet-300 dark:border-violet-300/[0.5] flex flex-col items-center max-w-sm mx-auto p-4 relative h-[20rem]">
//                 <EvervaultCard text="💡" />

//                 <h2 className="mt-5 md:mb-3 uppercase font-semibold tracking-widest text-md text-center text-blue-100 max-w-80 z-10">
//                   Product Management
//                 </h2>
//               </div>
//             </Link>

//             {/* AR /VR */}
//             <Link href="https://discord.gg/FGkd3rYXc4" target="_blank" passHref>
//               <div className="border-2 rounded-xl border-violet-300 dark:border-violet-300/[0.5] flex flex-col items-center max-w-sm mx-auto p-4 relative h-[20rem]">
//                 <EvervaultCard text="ᯅ" />

//                 <h2 className="mt-5 md:mb-3 uppercase font-semibold tracking-widest text-md text-center text-blue-100 max-w-80 z-10">
//                   AR /VR
//                 </h2>
//               </div>
//             </Link>

//             {/* AI /ML */}
//             <Link href="https://discord.gg/weK9ByUEZa" target="_blank" passHref>
//               <div className="border-2 rounded-xl border-violet-300 dark:border-violet-300/[0.5] flex flex-col items-center max-w-sm mx-auto p-4 relative h-[20rem]">
//                 <EvervaultCard text="🤖" />

//                 <h2 className="mt-5 md:mb-3 uppercase font-semibold tracking-widest text-md text-center text-blue-100 max-w-80 z-10">
//                   AI /ML
//                 </h2>
//               </div>
//             </Link>

//             {/* Networking */}
//             <Link href="https://discord.gg/Kj7DvEQW2R" target="_blank" passHref>
//               <div className="border-2 rounded-xl border-violet-300 dark:border-violet-300/[0.5] flex flex-col items-center max-w-sm mx-auto p-4 relative h-[20rem]">
//                 <EvervaultCard text="🤝" />

//                 <h2 className="mt-5 md:mb-3 uppercase font-semibold tracking-widest text-md text-center text-blue-100 max-w-80 z-10">
//                   Networking
//                 </h2>
//               </div>
//             </Link>

//             {/* Opportunities */}
//             <Link href="https://discord.gg/5JuF8gPtKX" target="_blank" passHref>
//               <div className="border-2 rounded-xl border-violet-300 dark:border-violet-300/[0.5] flex flex-col items-center max-w-sm mx-auto p-4 relative h-[20rem]">
//                 <EvervaultCard text="💼" />

//                 <h2 className="mt-5 md:mb-3 uppercase font-semibold tracking-widest text-md text-center text-blue-100 max-w-80 z-10">
//                   Opportunities
//                 </h2>
//               </div>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Community;

"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import MagicButton from "./ui/MagicButton";
import { FaArrowRight } from "react-icons/fa";

const challenges = [
  {
    month: "May",
    challenge: "Portfolio Challenge",
    poster: "/images/challenges/MayChallenge.png",
    winner: {
      name: "Samarth Pujari",
      photo: "/images/meetup/meetup3/group.JPG",
    },
  },
  {
    month: "May",
    challenge: "Portfolio Challenge",
    poster: "/images/challenges/MayChallenge.png",
    winner: {
      name: "It can be you!",
      photo: "/images/meetup/meetup3/group.JPG",
    },
  },
  {
    month: "April",
    challenge: "Leetcode Streak Challenge",
    poster: "/images/challengewinners/april.png",
    winner: {
      name: "Niharika Panda",
      photo: "/images/meetup/meetup3/group.JPG",
    },
  },
  {
    month: "March",
    challenge: "30 Days Skill Sprint Challenge",
    poster: "/images/challengewinners/march.png",
    winner: {
      name: "Everyone (Keep Learning)",
      photo: "/images/meetup/meetup3/group.JPG",
    },
  },
  {
    month: "February",
    challenge: "Technical Blog Writing Challenge",
    poster: "/images/challengewinners/february.png",
    winner: {
      name: "Jagadhiswaran Devaraj",
      photo: "/images/meetup/meetup3/group.JPG",
    },
  },
  {
    month: "January",
    challenge: "Best GitHub Profile README",
    poster: "/images/challengewinners/january.png",
    winner: {
      name: "Samarth Pujari",
      photo: "/images/challenges/FebruaryChallenge.png",
    },
  },
];

const hallOfFame = [
  { name: "", photo: "/images/meetupteam/tuned2.png" },
  { name: "", photo: "/images/meetupteam/tuned.png" },
  { name: "", photo: "/images/meetupteam/tuned2.png" },
  { name: "", photo: "/images/meetupteam/tuned.png" },
  { name: "", photo: "/images/meetupteam/tuned.png" },
  { name: "", photo: "/images/meetupteam/tuned2.png" },
  { name: "", photo: "/images/meetupteam/tuned.png" },
  { name: "", photo: "/images/meetupteam/tuned2.png" },
  { name: "", photo: "/images/meetupteam/tuned2.png" },
  { name: "", photo: "/images/meetupteam/tuned.png" },
  { name: "", photo: "/images/meetupteam/tuned2.png" },
  { name: "", photo: "/images/meetupteam/tuned.png" },
];

function Community() {
  return (
    <div className="mt-0 md:mt-10 h-auto w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-28 md:py-20">
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center">
        <h3 className="mb-5 pb-5 text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-violet-50 to-violet-400 z-10">
          TechThrusters Monthly Challenges
        </h3>

        {/* -------------- */}

        <div className="shadow-lg p-6 border rounded-lg mb-12 flex flex-col md:flex-row items-center">
          <Image
            src={challenges[0].poster}
            alt="Present Challenge Poster"
            className="rounded-lg mb-4 md:mb-0 md:mr-6 w-full md:w-2/3 h-auto"
            width={600}
            height={250}
          />
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-2">
              {challenges[0].challenge}
            </h2>
            <p className="text-indigo-300 mb-4">
              {challenges[0].month} Challenge
            </p>
            <p className="text-gray-400 mb-6">
            This month, the spotlight is on <b>showcasing yourself and your work</b>! This month, we challenge you to take on the <b>Portfolio Challenge</b>—share your personal portfolio website in the <b>#may-challenge</b> Discord channel anytime <b> before 31st May</b>.<br></br><br></br>
            
            Whether it&apos;s your first portfolio or a fresh revamp, this is your moment to show off your projects, tell your story, and get feedback from the community.
            </p>

            <div className="">
              <Link href="https://discord.com/invite/4sUmgTZa8H" target="__blank">
                <MagicButton
                  title="Participate now"
                  icon={<FaArrowRight />}
                  position="right"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Past Challenges */}
        <h2 className="text-2xl font-bold mb-6">Past Challenges</h2>
        {/* <h4 className="text-md text-gray-400">
          🐣 No past challenges to show yet, but don&apos;t worry—greatness
          takes time (and so do brag-worthy victories)!
        </h4> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.slice(1).map((challenge, index) => (
            <div key={index} className="shadow-lg p-4 border rounded-lg">
              <Image
                src={challenge.poster}
                alt={`${challenge.challenge} Poster`}
                className="rounded-lg mb-4 w-full h-auto"
                width={500}
                height={300}
              />
              <h2 className="text-xl font-semibold mb-2">{challenge.month}</h2>
              <p className="text-gray-700 mb-4">{challenge.challenge}</p>
              <p className="text-sm font-medium text-center text-gray-600">
                Winner: {challenge.winner.name}
              </p>
            </div>
          ))}
        </div>

        {/* -------------- */}

        {/* <h3 className="mb-5 mt-24 pb-5 text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-violet-50 to-violet-400 z-10">
          Hall of Fame
        </h3>
    
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {hallOfFame.map((contributor, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Image
                src={contributor.photo}
                alt={contributor.name}
                className="rounded-full mb-2 w-24 h-24"
                width={96}
                height={96}
              />
              <p className="text-sm font-medium text-vwhite">
                {contributor.name}
              </p>
            </div>
          ))}
        </div> */}
        {/* -------------- */}
      </div>
    </div>
  );
}

export default Community;
