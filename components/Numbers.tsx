"use client";
import React from "react";
import NumberGlobe from "./ui/NumberGlobe";
import GlareCardStats from "./ui/GlareCardStats";

function Numbers() {
  return (
    <div className="mt-0 md:mt-10 h-auto w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-5 md:py-10">
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center">
        <h3 className="text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-violet-50 to-violet-400 z-10">
          Some numbers that matter
        </h3>
        <p className="mt-4 font-normal text-base md:text-lg text-violet-200 max-w-xl mx-auto z-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam,
          sequi. Adipisci consequatur aut optio quas, rerum ipsam
        </p>
        <GlareCardStats />
        <NumberGlobe />
      </div>
    </div>
  );
}

export default Numbers;
