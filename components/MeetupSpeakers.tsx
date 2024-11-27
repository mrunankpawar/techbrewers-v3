import Image from "next/image";
import React, { useState, useEffect } from "react";

const people = [
  {
    id: 1,
    name: "STAY TUNED",
    // designation: "Customer Success @ Vercel",
    image: "/images/meetupteam/tuned.png",
    url: "https://www.linkedin.com/in/npralhad/",
  },
  {
    id: 2,
    name: "STAY TUNED",
    // designation: "Assistant Vice President @ State Street",
    image: "/images/meetupteam/tuned2.png",
    // url: "https://www.linkedin.com/in/ambhorerahul/",
  },
  {
    id: 3,
    name: "STAY TUNED",
    // designation: "Head of Service Delivery @ Securityium",
    image: "/images/meetupteam/tuned.png",
    // url: "https://www.linkedin.com/in/touhidshaikh22/",
  },
  {
    id: 4,
    name: "Yogini Bende",
    designation: "Co-founder and CTO @ Peerlist",
    image: "/images/meetupteam/yogini.png",
    url: "https://peerlist.io/yogini",
  },
  {
    id: 8,
    name: "Akash Bhadange",
    designation: "Co-founder and CEO @ Peerlist",
    image: "/images/meetupteam/akash.png",
    url: "https://peerlist.io/designerdada",
  },
  
];

function Team() {

    
  return (
    <div className="mt-0 md:mt-10 h-auto w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-5 md:py-10">
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-violet-50 to-violet-400 z-10">
          Speakers
        </h3>
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {people.map((person) => (
            <div
              key={person.id}
              className="flex flex-col items-center w-1/3 sm:w-1/3 lg:w-1/4"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 relative overflow-hidden rounded-full">
                <Image
                  src={person.image}
                  alt={person.name}
                  className="object-cover"
                  width={200}
                  height={200}
                />
              </div>
              <a
                href={person.url}
                className="mt-2 text-sm md:text-base font-semibold hover:text-violet-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                {person.name}
              </a>
              <div className="text-xs md:text-sm">
                {person.designation}
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
