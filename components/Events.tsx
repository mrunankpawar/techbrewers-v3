"use client";
import React from "react";

function Events() {
  return (
    <div className="mt-0 md:mt-10 h-auto w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto md:py-20">
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center">
        <div className="relative group">
          <h2 className="mb-4 text-4xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 z-10 pb-2">
            Upcoming Events
          </h2>
        </div>
        
        <div className="mt-8 mb-12 md:mt-12 md:mb-16">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/20 via-orange-400/10 to-orange-500/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-orange-500/40 transition-all duration-500">
              <p className="text-lg text-gray-300 z-10 relative">
                No upcoming events at the moment
              </p>
              <p className="text-sm text-gray-400 mt-2 z-10 relative">
                Check back soon for exciting new events!
              </p>
            </div>
          </div>
        </div>
        
        <div className="relative group">
          <h2 className="mb-3 text-4xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 z-10 pb-2">
            Past Events
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Events;
