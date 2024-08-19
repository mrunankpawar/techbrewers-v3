"use client";
import React from "react";
import { EvervaultCard } from "./ui/EvervaultCard";

function Events() {
  return (
    <div className="mt-0 md:mt-10 h-auto w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-5 md:py-10">
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center">
        <h3 className="text-xl mb-2 md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-violet-50 to-violet-400 z-10">
          Upcoming Events
        </h3>
        <h5 className="mt-8 mb-8 md:mt-16 md:mb-16 text-md md:text-lg font-bold text-violet-300/[0.4] z-10">
          No upcoming events at the moment
        </h5>
        <h3 className="text-xl mb-3 md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-violet-50 to-violet-400 z-10">
          Past Events
        </h3>
      </div>
    </div>
  );
}

export default Events;
