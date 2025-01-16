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
          <h2 className="text-2xl font-semibold mb-2">{challenges[0].challenge}</h2>
          <p className="text-gray-700 mb-4">{challenges[0].month} Challenge</p>
          <p className="text-gray-600 mb-6">
            Join us for the {challenges[0].challenge}, where creativity meets competition. Show your talent and win exciting prizes while showcasing your skills. Dont miss the chance to be featured as our challenge winner!
          </p>
          <p className="text-gray-600 mb-6">
            Join us for the {challenges[0].challenge}, where creativity meets competition. Show your talent and win exciting prizes atured as our challenge winner!
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


        {/* Past Challenges */}
        <h2 className="text-2xl font-bold mb-6">Past Challenges</h2>
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
      </div>
    </div>
  );
}

export default Challenges;
