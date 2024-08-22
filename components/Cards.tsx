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
    category: "",
    title: "TechBrewers Connect",
    src: "/images/meetup/connect/IMG_9295.png",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="/images/meetup/connect/IMG_9304.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="rounded-lg w-full h-auto object-contain"
            />
            <Image
              src="/images/meetup/connect/IMG_9304.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="rounded-lg w-full h-auto object-contain"
            />
            <Image
              src="/images/meetup/connect/IMG_9304.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="rounded-lg w-full h-auto object-contain"
            />
         </div> 
    ),
  },
  {
    category: "",
    title: "TechBrewers Community Meetup 1.0",
    src: "/images/meetup/connect/IMG_9295.png",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="/images/meetup/connect/IMG_9304.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="rounded-lg w-full h-auto object-contain"
            />
            <Image
              src="/images/meetup/connect/IMG_9304.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="rounded-lg w-full h-auto object-contain"
            />
            <Image
              src="/images/meetup/connect/IMG_9304.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="rounded-lg w-full h-auto object-contain"
            />
         </div> 
    ),
  },
  {
    category: "",
    title: "TechBrewers CelCon",
    src: "/images/meetup/celcon/5.jpg",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
            
            
            <Image
              src="/images/meetup/celcon/4.jpg"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="rounded-lg w-full h-auto object-contain"
            />
            <Image
              src="/images/meetup/celcon/2.jpg"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="rounded-lg w-full h-auto object-contain"
            />
            
            <Image
              src="/images/meetup/celcon/1.jpg"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="rounded-lg w-full h-auto object-contain"
            />
            
            
            <Image
              src="/images/meetup/celcon/group.jpg"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="rounded-lg w-full h-auto object-contain"
            />
            <Image
              src="/images/meetup/celcon/3.jpg"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="rounded-lg w-full h-auto object-contain"
            />
            
         </div> 
    ),
  },
  {
    category: "",
    title: "TechBrewers Community Meetup 2.0",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="/images/meetup/connect/IMG_9304.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="rounded-lg w-full h-auto object-contain"
            />
            <Image
              src="/images/meetup/connect/IMG_9304.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="rounded-lg w-full h-auto object-contain"
            />
            <Image
              src="/images/meetup/connect/IMG_9304.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="rounded-lg w-full h-auto object-contain"
            />
         </div> 
    ),
  },

  {
    category: "",
    title: "TechBrewers GenAI Meetup",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="/images/meetup/connect/IMG_9304.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="rounded-lg w-full h-auto object-contain"
            />
            <Image
              src="/images/meetup/connect/IMG_9304.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="rounded-lg w-full h-auto object-contain"
            />
            <Image
              src="/images/meetup/connect/IMG_9304.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="rounded-lg w-full h-auto object-contain"
            />
         </div> 
    ),
  },
];

