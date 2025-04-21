"use client";

import { useState, useEffect } from "react";
import { IoCopyOutline } from "react-icons/io5";

// Also install this npm i --save-dev @types/react-lottie
import Lottie from "react-lottie";

import { cn } from "@/lib/utils";

import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";
import { BackgroundBeams } from "./BackgroundBeams";
import { Boxes } from "./BackgroundBoxes";


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  descriptionClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  spareImg?: string;
}) => {
  const [subscribed, setSubscribed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: subscribed,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleSubscribe = () => {
    setSubscribed(true);
    window.open("https://techthrusters.substack.com/", "_blank");
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "#07091C",
        backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, #000002 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
              loading="lazy"
            />
          )}
        </div>

        {id === 2 && !isMobile && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            `group-hover/bento:translate-x-2 text-xs transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 ${id === 2 && 'justify-center'} ${id === 3 ? "lg:p-5" : "lg:p-10"}`
          )}
        >
          <div className={`font-sans text-base lg:text-xl max-w-96 font-bold z-10 ${id === 1 && 'xl:pt-16 2xl:pt-20'}`}>
            {title}
          </div>
          <div className="font-sans font-normal pt-5 md:max-w-64 md:text-xs lg:text-base text-sm text-violet-100 z-50">
            {description}
          </div>

          {id === 1 && !isMobile && (
            <div>
              <GridGlobe />
              <BackgroundBeams />
            </div>
          )}

          {id === 2 && (
            <div className="mt-2 relative">
              <div className={`absolute -bottom-5 right-0 ${subscribed ? "block" : "block"}`}>
                {!isMobile && (
                  <Lottie options={defaultOptions} height={200} width={400} />
                )}
              </div>

              <MagicButton
                title={subscribed ? "Thanks for clicking, we hope you subscribed 🎉" : "Don't miss out! Subscribe now 🔔"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleSubscribe}
                otherClasses="bg-black-100"
              />
            </div>
          )}

          {id === 3 && !isMobile && (
            <Boxes />
          )}
        </div>
      </div>
    </div>
  );
};
