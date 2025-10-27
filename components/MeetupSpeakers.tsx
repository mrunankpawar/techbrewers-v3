import Image from "next/image";
import React, { useState, useEffect } from "react";

const people = [
  {
    id: 1,
    name: "Ganesh Divekar",
    designation: "Engineering @ Bajaj Finserv",
    image: "/images/meetupteam/ganesh.png",
    url: "https://www.linkedin.com/in/ganesh-divekar-96a72bb7",
  },
  {
    id: 2,
    name: "Pranoti Nandurkar",
    designation: "Technical Architect @ Tata Consultancy Services",
    image: "/images/meetupteam/pranoti.png",
    url: "https://www.linkedin.com/in/pranoti-nandurkar-170021b",
  },
  {
    id: 3,
    name: "Vijaykumar Jangamashetti",
    designation: "Sr Google Cloud Consulting Architect, Google",
    image: "/images/meetupteam/vijaykumar.png",
    url: "https://www.linkedin.com/in/vijaykumar-jangamashetti/",
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
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600 z-10">
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
