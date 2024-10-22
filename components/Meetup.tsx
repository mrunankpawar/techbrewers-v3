import React from "react";
import Link from "next/link";
import CardCarousel from "@/components/Cards";
// import MeetupTeam from "@/components/MeetupTeam";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import MeetupSpeakers from "@/components/MeetupSpeakers";
import { BackgroundLines } from "./ui/BackgroundLines";
import { CardSpotlight } from "./ui/CardSpotlight";
import MagicButton from "./ui/MagicButton";

const RocketIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c4.418 0 8 3.582 8 8 0 2.531 -1.418 5.252 -4 8.035v3.965c0 .553 -.448 1 -1 1 -.276 0 -.527 -.112 -.707 -.293l-2.293 -2.293 -2.293 2.293c-.181 .181 -.431 .293 -.707 .293 -.552 0 -1 -.447 -1 -1v-3.965c-2.582 -2.783 -4 -5.504 -4 -8.035 0 -4.418 3.582 -8 8 -8zm0 2c-3.313 0 -6 2.686 -6 6 0 2.094 1.192 4.463 3.529 7.105 .295 .344 .471 .784 .471 1.241v1.533l1.293 -1.293c.39 -.39 1.024 -.39 1.414 0l1.293 1.293v-1.533c0 -.457 .176 -.897 .471 -1.241 2.337 -2.642 3.529 -5.011 3.529 -7.105 0 -3.314 -2.686 -6 -6 -6zm0 3c.828 0 1.5 .672 1.5 1.5s-.672 1.5 -1.5 1.5 -1.5 -.672 -1.5 -1.5 .672 -1.5 1.5 -1.5zm0 6.5c1.379 0 2.5 1.121 2.5 2.5h-5c0 -1.379 1.121 -2.5 2.5 -2.5z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <RocketIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};


function Meetup() {
  return (
    <div className="mt-0 md:mt-10 h-auto w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-5 md:py-10">
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center">
      <div className="w-full h-full pt-20 pb-10">
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-violet-50 to-violet-400 z-10">
        TechBrewers Meetup 3.0
      </h3>

      {/* Date, Time, and Venue - Stack vertically on mobile, horizontal on larger screens */}
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-sm sm:text-base md:text-lg font-medium text-indigo-100 m-10">
          <div className="flex items-center space-x-2">
            <FaCalendarAlt className="text-xl sm:text-2xl text-indigo-400" />
            <span>Date: December 21, 2024</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaClock className="text-xl sm:text-2xl text-indigo-400" />
            <span>Time: 10:30 AM - 4:30 PM IST</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-xl sm:text-2xl text-indigo-400" />
            <span>Venue: The Daftar, Baner</span>
          </div>
        </div>

        
  <CardSpotlight className="relative p-6 bg-indigo-950 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-lg max-w-xs md:max-w-lg mx-auto shadow-lg">
    <p className="text-xl font-bold relative z-20 mt-2 text-white text-left">
      Why Join Us at TechBrewers Meetup 3.0?
    </p>
    <div className="text-white-200 mt-4 relative z-20 text-left">
      Follow these exciting reasons why you shouldn&apos;t miss out:
      <ul className="list-none mt-4 space-y-2">
      <Step title="Connect with forward-thinking innovators and industry experts." />
          <Step title="Get hands-on experience with the latest tech trends." />
          <Step title="Grow your professional network and collaborate on groundbreaking projects." />
          <Step title="Special surprises and exclusive swag for attendees!" />
      </ul>
    </div>

    <div className="z-10 mt-4 sm:mt-6">
          <Link href="https://bit.ly/TBMP3" target="__blank">
            <MagicButton
              title="Register now"
              // icon={<FaArrowRight />}
              position="right"
            />
          </Link>
        </div>
    
  </CardSpotlight>

        <MeetupSpeakers />
    </div>
        <CardCarousel />
        {/* <MeetupTeam /> */}
      </div>
    </div>
  );
}

export default Meetup;
