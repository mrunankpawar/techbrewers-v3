"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import MagicButton from "./ui/MagicButton";
import { FaArrowRight } from "react-icons/fa";

const challenges = [
  {
    month: "January",
    challenge: "Best GitHub Profile README",
    poster: "/images/meetup/meetup3/group.JPG",
    winner: {
      name: "John Doe",
      photo: "/images/meetup/meetup3/group.JPG",
    },
  },
  {
    month: "February",
    challenge: "Best GitHub Profile README",
    poster: "/images/meetup/meetup3/group.JPG",
    winner: {
      name: "Jane Smith",
      photo: "/images/meetup/meetup3/group.JPG",
    },
  },
  // Add more challenges as needed
];

function Challenges() {
  return (
    <div className="mt-0 md:mt-10 h-auto w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-28 md:py-20">
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center">
        <h3 className="mb-5 pb-5 text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 z-10">
          TechThrusters Monthly Challenges
        </h3>

        {/* -------------- */}

        <div className="group relative mb-12">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/20 via-orange-400/10 to-orange-500/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-orange-500/40 transition-all duration-500 group-hover:shadow-[0_8px_30px_rgba(197,79,14,0.12)] flex flex-col md:flex-row items-center">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/0 via-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:via-orange-500/0 group-hover:to-orange-500/5 transition-all duration-500 pointer-events-none" />
            <Image
              src={challenges[0].poster}
              alt="Present Challenge Poster"
              className="rounded-xl mb-4 md:mb-0 md:mr-6 w-full md:w-2/3 h-auto relative z-10 group-hover:scale-[1.02] transition-transform duration-500"
              width={600}
              height={250}
            />
            <div className="flex flex-col items-center md:items-start text-center md:text-left relative z-10">
              <h2 className="text-2xl font-semibold mb-2 text-white group-hover:text-orange-200 transition-colors duration-300">{challenges[0].challenge}</h2>
              <p className="text-orange-400 mb-4 font-medium">{challenges[0].month} Challenge</p>
              <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors duration-300">
                Join us for the {challenges[0].challenge}, where creativity meets competition. Show your talent and win exciting prizes while showcasing your skills. Don&apos;t miss the chance to be featured as our challenge winner!
              </p>
              
              <div className="">
                <Link href="https://bit.ly/TBDISCORD" target="__blank">
                  <MagicButton
                    title="Participate now"
                    icon={<FaArrowRight />}
                    position="right"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>


        {/* Past Challenges */}
        <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 mb-6">Past Challenges</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.slice(1).map((challenge, index) => (
            <div 
              key={index} 
              className="group relative"
              style={{ 
                animationDelay: `${index * 100}ms`,
                willChange: 'transform'
              }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/20 via-orange-400/10 to-orange-500/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-4 hover:border-orange-500/40 transition-all duration-500 group-hover:shadow-[0_8px_30px_rgba(197,79,14,0.12)] group-hover:-translate-y-1">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/0 via-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:via-orange-500/0 group-hover:to-orange-500/5 transition-all duration-500 pointer-events-none" />
                <Image
                  src={challenge.poster}
                  alt={`${challenge.challenge} Poster`}
                  className="rounded-xl mb-4 w-full h-auto relative z-10 group-hover:scale-[1.02] transition-transform duration-500"
                  width={500}
                  height={300}
                />
                <h2 className="text-xl font-semibold mb-2 text-white relative z-10 group-hover:text-orange-200 transition-colors duration-300">{challenge.month}</h2>
                <p className="text-gray-300 mb-4 relative z-10 group-hover:text-gray-200 transition-colors duration-300">{challenge.challenge}</p>
                <p className="text-sm font-medium text-center text-orange-400 relative z-10 group-hover:text-orange-300 transition-colors duration-300">
                  Winner: {challenge.winner.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* -------------- */}
      </div>
    </div>
  );
}

export default Challenges;
