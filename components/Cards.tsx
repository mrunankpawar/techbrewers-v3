"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { Carousel, Card } from "@/components/ui/CardCarousel";
import { CardStack } from "./ui/CardStack";
import { div } from "three/webgpu";

function CardCarousel() {
  const photos = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-violet-50 to-violet-400 z-10">
        Glimpses from our past meetups
      </h2>
      <Carousel items={photos} />
    </div>
  );
}

export default CardCarousel;

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            
          >
            
            
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Community Meetup",
    title: "TechBrewers Community Meetup 2.0",
    src: "/images/meetup/meetup2/cover3.jpg",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="/images/meetup/meetup2/mrunank.jpg"
              alt="Mrunank speaking at TechBrewers Community Meetup 2.0"
              height="500"
              width="500"
              className="rounded-lg w-full h-auto object-contain"
            />
            <Image
              src="/images/meetup/meetup2/pralhad.jpg"
              alt="Pralhad speaking at TechBrewers Community Meetup 2.0"
              height="500"
              width="500"
              className="rounded-lg w-full h-auto object-contain"
            />
            <Image
              src="/images/meetup/meetup2/rahul.jpg"
              alt="Rahul speaking at TechBrewers Community Meetup 2.0"
              height="500"
              width="500"
              className="rounded-lg w-full h-auto object-contain"
            />
            <Image
              src="/images/meetup/meetup2/vishwas.jpg"
              alt="Vishwas speaking at TechBrewers Community Meetup 2.0"
              height="500"
              width="500"
              className="rounded-lg w-full h-auto object-contain"
            />
            <Image
              src="/images/meetup/meetup2/group4.jpg"
              alt="Group photo at TechBrewers Community Meetup 2.0"
              height="500"
              width="500"
              className="rounded-lg w-full h-auto object-contain"
            />
         </div> 
    ),
  },
  {
    category: "In-person Meetup",
    title: "TechBrewers GenAI Meetup",
    src: "/images/meetup/genai/cover.jpg",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="/images/meetup/genai/session.jpg"
              alt="Rahul Ambhore speaking at TechBrewers GenAI Meetup"
              height="500"
              width="500"
              className="rounded-lg w-full h-auto object-contain"
            />
            <Image
              src="/images/meetup/genai/peerlistLogo.jpg"
              alt="Peerlist logo along with TechBrewers standee"
              height="500"
              width="500"
              className="rounded-lg w-full h-auto object-contain"
            />
            <Image
              src="/images/meetup/genai/group3.jpg"
              alt="Event attnedees at TechBrewers GenAI Meetup"
              height="500"
              width="500"
              className="rounded-lg w-full h-auto object-contain"
            />
         </div> 
    ),
  },
  {
    category: "Celebration + Connect",
    title: "TechBrewers CelCon",
    src: "/images/meetup/celcon/5.jpg",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
            
            
            <Image
              src="/images/meetup/celcon/4.jpg"
              alt="Mrunank speaking at TechBrewers CelCon"
              height="500"
              width="500"
              className="rounded-lg w-full h-auto object-contain"
            />
            <Image
              src="/images/meetup/celcon/2.jpg"
              alt="Mrunank addressing the audience at TechBrewers CelCon"
              height="500"
              width="500"
              className="rounded-lg w-full h-auto object-contain"
            />
            
            <Image
              src="/images/meetup/celcon/1.jpg"
              alt="Attendess sharing their experience"
              height="500"
              width="500"
              className="rounded-lg w-full h-auto object-contain"
            />
            
            
            <Image
              src="/images/meetup/celcon/group.jpg"
              alt="Audience at TechBrewers CelCon"
              height="500"
              width="500"
              className="rounded-lg w-full h-auto object-contain"
            />
            <Image
              src="/images/meetup/celcon/3.jpg"
              alt="TechBrewers Team at CelCon"
              height="500"
              width="500"
              className="rounded-lg w-full h-auto object-contain"
            />
            
         </div> 
    ),
  },
 
  {
    category: "Community Meetup",
    title: "TechBrewers Community Meetup 1.0",
    src: "/images/meetup/meetup1/cover.jpg",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="/images/meetup/meetup1/activity.jpg"
              alt="Audience activity at TechBrewers Community Meetup 1.0"
              height="500"
              width="500"
              className="rounded-lg w-full h-auto object-contain"
            />
            <Image
              src="/images/meetup/meetup1/almas.jpg"
              alt="Almas speaking at TechBrewers Community Meetup 1.0"
              height="500"
              width="500"
              className="rounded-lg w-full h-auto object-contain"
            />
            <Image
              src="/images/meetup/meetup1/mrunank.jpg"
              alt="Mrunank speaking at TechBrewers Community Meetup 1.0"
              height="500"
              width="500"
              className="rounded-lg w-full h-auto object-contain"
            />
            <Image
              src="/images/meetup/meetup1/rohan.jpg"
              alt="Rohan speaking at TechBrewers Community Meetup 1.0"
              height="500"
              width="500"
              className="rounded-lg w-full h-auto object-contain"
            />
            
            <Image
              src="/images/meetup/meetup1/tj.jpg"
              alt="Touhid and Jeenika speaking at TechBrewers Community Meetup 1.0"
              height="500"
              width="500"
              className="rounded-lg w-full h-auto object-contain"
            />
            <Image
              src="/images/meetup/meetup1/cake.jpg"
              alt="Cake cutting ceremony at TechBrewers Community Meetup 1.0"
              height="500"
              width="500"
              className="rounded-lg w-full h-auto object-contain"
            />
            <Image
              src="/images/meetup/meetup1/group1.jpg"
              alt="Group photo at TechBrewers Community Meetup 1.0"
              height="500"
              width="500"
              className="rounded-lg w-full h-auto object-contain"
            />
         </div> 
    ),
  },
  {
    category: "First Meetup",
    title: "TechBrewers Connect",
    src: "/images/meetup/connect/coffee.png",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <Image
              src="/images/meetup/connect/coffee.png"
              alt="Attendees at TechBrewers Connect"
              height="500"
              width="500"
              className="rounded-lg w-full h-auto object-contain"
            />
            <Image
              src="/images/meetup/connect/stickers.jpg"
              alt="Stickers for audience at TechBrewers Connect"
              height="500"
              width="500"
              className="rounded-lg w-full h-auto object-contain"
            />
            <Image
              src="/images/meetup/connect/group2.png"
              alt="Group photo at TechBrewers Connect"
              height="500"
              width="500"
              className="rounded-lg w-full h-auto object-contain"
            />
            
         </div> 
    ),
  },
  
];

