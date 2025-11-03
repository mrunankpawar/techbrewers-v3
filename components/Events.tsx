"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";

function Events() {
  return (
    <div className="mt-0 pt-32 md:mt-10 h-auto w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto md:py-20 gradient-background">
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center">
        <h3 className="mb-2 text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 z-10">
          Upcoming Events
        </h3>
        <h5 className="mt-8 mb-8 md:mt-16 md:mb-16 text-md md:text-lg font-bold text-orange-300/[0.4] z-10">
          No upcoming events at the moment
        </h5>
        {/* <div className="mt-8 mb-8 md:mt-16 md:mb-16 w-full max-w-[400px] md:max-w-[500px]">
          <div className="relative aspect-square rounded-xl overflow-hidden mb-4 md:mb-0">
            <Image
              src="/images/events/devrel.png"
              alt="Upcoming Event"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </div>
          <Link href="https://lu.ma/6eo2s499" target="_blank">
            <MagicButton
              title="Register Now"
              icon={<FaArrowRight />}
              position="right"
            />
          </Link>
        </div> */}
        <h3 className="mb-3 text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 z-10">
          Past Events
        </h3>
      </div>
    </div>
  );
}

export default Events;
