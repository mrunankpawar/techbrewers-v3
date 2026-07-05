"use client";
import React from "react";
import { FaCalendarAlt, FaClock, FaUser } from "react-icons/fa";

const upcomingEvents = [
  {
    title: "Why AI Coding Agents Break in Real Codebases",
    speaker: "Manav Sutar",
    date: "12th July 2025",
    time: "8:30 PM IST",
    tag: "Talk",
    youtubeId: "r3JjQGa4j88",
  },
];

function Events() {
  return (
    <div className="mt-0 md:mt-10 h-auto w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto md:py-20">
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] w-full flex flex-col items-center justify-center text-center">
        <div className="relative group">
          <h1 className="mb-4 text-4xl md:text-6xl font-bold leading-tight text-heading-gradient z-10 pb-2">
            Upcoming Events
          </h1>
        </div>

        <div className="mt-8 mb-12 md:mt-12 md:mb-16 w-full flex flex-col gap-6">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="relative group text-left">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/20 via-orange-400/10 to-orange-500/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-7 hover:border-orange-500/40 transition-all duration-500">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <span className="px-3 py-1 text-xs font-semibold bg-orange-500/20 text-orange-300 rounded-full border border-orange-500/30 flex-shrink-0">
                    {event.tag}
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-5 leading-snug group-hover:text-orange-100 transition-colors duration-300">
                  {event.title}
                </h2>
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 text-sm text-gray-400 mb-6">
                  <span className="flex items-center gap-2">
                    <FaUser className="text-orange-400 flex-shrink-0" />
                    {event.speaker}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaCalendarAlt className="text-orange-400 flex-shrink-0" />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaClock className="text-orange-400 flex-shrink-0" />
                    {event.time}
                  </span>
                </div>
                {event.youtubeId && (
                  <div className="rounded-xl overflow-hidden border border-white/10 aspect-video w-full">
                    <iframe
                      src={`https://www.youtube.com/embed/${event.youtubeId}`}
                      title={event.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Events;
