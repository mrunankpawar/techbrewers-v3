'use client';

import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    quote: "I have been part of the TechThrusters community which is organising multiple latest technology initiatives including webinars which I am extremely happy to be part of it. Not only it has helped me learn new tech but also allowing to present relevant technologies including the cloud.",
    name: "Rahul Ambhore",
    company: "State Street",
    avatar: "/images/team/mrunank.png",
    type: "large-orange",
  },
  {
    id: 2,
    quote: "Club TechThrusters is no doubt one of the best tech-based communities, I have seen that has grown by such a huge margin in India with such potential the impact they are doing through their programs and events have been really been impactful.",
    name: "Anmol Reshi",
    company: "Sudans Tech",
    avatar: "/images/team/abhi.png",
    type: "small-dark",
  },
  {
    id: 3,
    quote: "TechThrusters has been not only keen on doing initiatives to grow the community in a positive way but also in constantly collaborating with many communities to make sure impact never stops.",
    name: "Jatin Pandya",
    company: "Supra",
    avatar: "/images/team/mrunank.png",
    type: "small-dark",
  },
  {
    id: 4,
    quote: "We no longer juggle multiple tools. TechThrusters brought all our integrations together in one place, which simplified our entire workflow.",
    name: "Rohan Kulkarni",
    company: "Upsurge Labs",
    avatar: "/images/team/vaibhav.png",
    type: "small-dark",
  },
  {
    id: 5,
    quote: "I came to Pune from a different city and as my college was a tier 3 college, I didn't get much active clubs and college communities there. TechThrusters helped me grow on a personal and professional scale.",
    name: "Krushna Nalawade",
    company: "hypebuddy",
    avatar: "/images/team/sana.png",
    type: "small-dark",
  },
  {
    id: 6,
    quote: "Collaborative coding feels effortless now. With TechThrusters's real-time previews, pair programming has become faster and more productive.",
    name: "Astitva Nikose",
    company: "Jio",
    avatar: "/images/team/akanksha.png",
    type: "small-dark",
  },
  {
    id: 7,
    quote: "Being a part of this group is no less than the feeling of pride that these people are giving their absolute best to make sure we all grow in the community. The growth rate of the community is really commendable.",
    name: "Astitva Nikose",
    company: "Jio",
    avatar: "/images/team/ayush.png",
    type: "large-light",
  },
];

const TestimonialCard = ({ quote, name, company, avatar, type }) => {
  const isLargeCard = type.startsWith("large");
  const avatarSize = isLargeCard ? 48 : 36;
  const avatarBorderRadius = isLargeCard ? "rounded-[41px]" : "rounded-[30.75px]";
  const padding = isLargeCard ? "p-6" : "p-5";

  let cardClasses = `flex flex-col justify-between items-start overflow-hidden rounded-[10px] shadow-[0px_2px_4px_rgba(0,0,0,0.08)] relative ${padding}`;
  let quoteClasses = "";
  let nameClasses = "";
  let companyClasses = "";
  let cardHeight = "";
  const cardWidth = "w-full md:w-[384px]";

  if (type === "large-orange") {
    cardClasses += " bg-gradient-to-br from-orange-600/20 to-orange-800/30 border border-orange-500/20";
    quoteClasses += " text-white text-2xl font-medium leading-8";
    nameClasses += " text-white text-base font-normal leading-6";
    companyClasses += " text-white/60 text-base font-normal leading-6";
    cardHeight = "h-[502px]";
  } else if (type === "large-light") {
    cardClasses += " bg-white/5 backdrop-blur-sm border border-white/10";
    quoteClasses += " text-white/90 text-2xl font-medium leading-8";
    nameClasses += " text-white text-base font-normal leading-6";
    companyClasses += " text-white/60 text-base font-normal leading-6";
    cardHeight = "h-[502px]";
  } else {
    cardClasses += " bg-white/5 backdrop-blur-sm border border-white/10";
    quoteClasses += " text-white/80 text-[17px] font-normal leading-6";
    nameClasses += " text-white text-sm font-normal leading-[22px]";
    companyClasses += " text-white/50 text-sm font-normal leading-[22px]";
    cardHeight = "h-[244px]";
  }

  return (
    <div className={`${cardClasses} ${cardWidth} ${cardHeight} flex flex-col justify-between`}>
      <div className={`relative z-10 font-normal break-words flex-grow ${quoteClasses} mb-6`}>{quote}</div>
      <div className="relative z-10 flex items-center gap-3 mt-auto">
        <div className="flex-shrink-0">
          <div className={`${avatarBorderRadius} overflow-hidden flex-shrink-0`} style={{ width: avatarSize, height: avatarSize, border: "1px solid rgba(255, 255, 255, 0.08)" }}>
            <Image
              src={avatar || "/placeholder.svg"}
              alt={`${name} avatar`}
              width={avatarSize}
              height={avatarSize}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-0.5 min-w-0 flex-1">
          <div className={`${nameClasses} truncate w-full`}>{name}</div>
          <div className={`${companyClasses} truncate w-full`}>{company}</div>
        </div>
      </div>
    </div>
  );
};

const TestimonialsNew = () => {
  return (
    <section className="w-full px-5 overflow-hidden flex flex-col justify-start py-6 md:py-8 lg:py-14 gradient-background">
      <div className="self-stretch py-6 md:py-8 lg:py-14 flex flex-col justify-center items-center gap-2">
        <div className="flex flex-col justify-start items-center gap-4">
          <h2 className="text-center text-white text-4xl md:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
              Community made impactful
            </span>
          </h2>
          <p className="self-stretch text-center text-white/60 text-sm md:text-sm lg:text-base font-medium leading-[18.20px] md:leading-relaxed lg:leading-relaxed">
            {"Hear how members learn faster, connect seamlessly,"} <br />{" "}
            {"and build with confidence through TechThrusters powerful community"}
          </p>
        </div>
      </div>
      <div className="w-full pt-0.5 pb-4 md:pb-6 lg:pb-10 flex flex-col md:flex-row justify-center items-start gap-4 md:gap-4 lg:gap-6 max-w-[1100px] mx-auto">
        <div className="flex-1 flex flex-col justify-start items-start gap-4 md:gap-4 lg:gap-6">
          <TestimonialCard {...testimonials[0]} />
          <TestimonialCard {...testimonials[1]} />
        </div>
        <div className="flex-1 flex flex-col justify-start items-start gap-4 md:gap-4 lg:gap-6">
          <TestimonialCard {...testimonials[2]} />
          <TestimonialCard {...testimonials[3]} />
          <TestimonialCard {...testimonials[4]} />
        </div>
        <div className="flex-1 flex flex-col justify-start items-start gap-4 md:gap-4 lg:gap-6">
          <TestimonialCard {...testimonials[5]} />
          <TestimonialCard {...testimonials[6]} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsNew;

