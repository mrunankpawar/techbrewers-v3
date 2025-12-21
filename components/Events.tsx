"use client";
import React from "react";

function Events() {
  return (
    <div className="mt-0 md:mt-10 h-auto w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto md:py-20">
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center">
        <h2 className="mb-4 text-4xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 z-10 pb-2">
          Upcoming Events
        </h2>
        <p className="mt-8 mb-12 md:mt-12 md:mb-16 text-lg text-gray-300 z-10">
          No upcoming events at the moment
        </p>
        <h2 className="mb-3 text-4xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 z-10 pb-2">
          Past Events
        </h2>
      </div>
    </div>
  );
}

export default Events;
