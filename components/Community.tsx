"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MagicButton from "./ui/MagicButton";
import { FaArrowRight, FaChevronDown, FaChevronUp } from "react-icons/fa";

// Monthly Challenge Data
const challenges = [
  {
    month: "June",
    challenge: "Builder's Space",
    poster: "/images/challenges/JuneChallenge.png",
    winner: {
      name: "Samarth Pujari",
      photo: "/images/meetup/meetup3/group.JPG",
    },
  },
  {
    month: "May",
    challenge: "Portfolio Challenge",
    poster: "/images/challenges/MayChallenge.png",
    winner: {
      name: "Jagadhiswaran Devaraj",
      photo: "/images/challengewinners/may.png",
    },
  },
  {
    month: "April",
    challenge: "Leetcode Streak Challenge",
    poster: "/images/challenges/AprilChallenge.png",
    winner: {
      name: "Niharika Panda",
      photo: "/images/challengewinners/april.png",
    },
  },
  {
    month: "March",
    challenge: "30 Days Skill Sprint Challenge",
    poster: "/images/challenges/MarchChallenge.png",
    winner: {
      name: "Everyone (Keep Learning)",
      photo: "/images/challengewinners/march.png",
    },
  },
  {
    month: "February",
    challenge: "Technical Blog Writing Challenge",
    poster: "/images/challenges/FebruaryChallenge.png",
    winner: {
      name: "Jagadhiswaran Devaraj",
      photo: "/images/challengewinners/february.png",
    },
  },
  {
    month: "January",
    challenge: "Best GitHub Profile README",
    poster: "/images/challenges/JanuaryChallenge.png",
    winner: {
      name: "Samarth Pujari",
      photo: "/images/challengewinners/january.png",
    },
  },
];

// Newsletter Data
const newsletters = [
  {
    title: "June Weekly Newsletter",
    week: "Week 3",
    date: "June 15-21",
    link: "https://techthrusters.substack.com/p/may-2024",
  },
  {
    title: "June Weekly Newsletter",
    week: "Week 3",
    date: "June 15 - 21",
    link: "https://open.substack.com/pub/techthrusters/p/techthrusters-weekly-newsletter-week-312?r=n6g8k",
  },
  {
    title: "June Weekly Newsletter",
    week: "Week 2",
    date: "June 8 - 14",
    link: "https://open.substack.com/pub/techthrusters/p/techthrusters-weekly-newsletter-week-1ef?r=n6g8k",
  },
  {
    title: "June Weekly Newsletter",
    week: "Week 1",
    date: "June 1 - 7",
    link: "https://open.substack.com/pub/techthrusters/p/techthrusters-weekly-newsletter-week?r=n6g8k",
  },
  {
    title: "April Monthly Newsletter",
    week: "2025",
    date: "April 1 - 30",
    link: "https://techthrusters.substack.com/p/techthrusters-monthly-newsletter-d21?r=n6g8k",
  },
  {
    title: "March Monthly Newsletter",
    week: "2025",
    date: "March 1 - 31",
    link: "https://techthrusters.substack.com/p/techthrusters-monthly-newsletter-f51?r=n6g8k",
  },
  {
    title: "February Monthly Newsletter",
    week: "2025",
    date: "February 1 - 28",
    link: "https://techthrusters.substack.com/p/techthrusters-monthly-newsletter-1a8?r=n6g8k",
  },
  {
    title: "January Monthly Newsletter",
    week: "2025",
    date: "January 1 - 31",
    link: "https://techthrusters.substack.com/p/techthrusters-monthly-newsletter?r=n6g8k",
  },
  {
    title: "December Monthly Newsletter",
    week: "2024",
    date: "December 1 - 31",
    link: "https://techthrusters.substack.com/p/techbrewers-december-newsletter?r=n6g8k",
  },
  {
    title: "November Monthly Newsletter",
    week: "2024",
    date: "November 1 - 30",
    link: "https://techthrusters.substack.com/p/techbrewers-november-newsletter?r=n6g8k",
  },
  {
    title: "October Monthly Newsletter",
    week: "2024",
    date: "October 1 - 31",
    link: "https://techthrusters.substack.com/p/techbrewers-october-newsletter?r=n6g8k",
  },
  {
    title: "September Monthly Newsletter",
    week: "2024",
    date: "September 1 - 30",
    link: "https://techthrusters.substack.com/p/techbrewers-september-newsletter?r=n6g8k",
  },
  {
    title: "August Monthly Newsletter",
    week: "2024",
    date: "August 1 - 31",
    link: "https://techthrusters.substack.com/p/techbrewers-august-newsletter?r=n6g8k",
  },
  {
    title: "July Monthly Newsletter",
    week: "2024",
    date: "July 1 - 31",
    link: "https://techthrusters.substack.com/p/techbrewers-july-newsletter?r=n6g8k",
  },
  {
    title: "June Monthly Newsletter",
    week: "2024",
    date: "June 1 - 30",
    link: "https://techthrusters.substack.com/p/techbrewers-june-newsletter?r=n6g8k",
  },
  {
    title: "May Monthly Newsletter",
    week: "2024",
    date: "May 1 - 31",
    link: "https://techthrusters.substack.com/p/techbrewers-may-newsletter?r=n6g8k",
  },
  {
    title: "April Monthly Newsletter",
    week: "2024",
    date: "April 1 - 30",
    link: "https://techthrusters.substack.com/p/techbrewers-april-newsletter?r=n6g8k",
  },
  {
    title: "March Monthly Newsletter",
    week: "2024",
    date: "March 1 - 31",
    link: "https://techthrusters.substack.com/p/techbrewers-march-newsletter?r=n6g8k",
  },
  {
    title: "February Monthly Newsletter",
    week: "2024",
    date: "February 1 - 29",
    link: "https://techthrusters.substack.com/p/techbrewers-february-newsletter?r=n6g8k",
  },
  {
    title: "January Monthly Newsletter",
    week: "2024",
    date: "January 1 - 31",
    link: "https://techthrusters.substack.com/p/techbrewers-january-newsletter?r=n6g8k",
  }
];

function Community() {
  const [showAllChallenges, setShowAllChallenges] = useState(false);
  const [showAllNewsletters, setShowAllNewsletters] = useState(false);

  return (
    <div className="mt-0 md:mt-10 h-auto w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-28 md:py-20">
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center">
        {/* Monthly Challenge Section */}
        <h3 className="mb-5 pb-5 text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-violet-50 to-violet-400 z-10">
          Monthly Challenges
        </h3>
        <div className="shadow-lg p-6 border rounded-lg mb-12 flex flex-col md:flex-row items-center">
          <Image
            src={challenges[0].poster}
            alt="Present Challenge Poster"
            className="rounded-lg mb-4 md:mb-0 md:mr-6 w-full md:w-2/3 h-auto"
            width={600}
            height={250}
          />
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-2">
              {challenges[0].challenge}
            </h2>
            <p className="text-indigo-300 mb-4">
              {challenges[0].month} Challenge
            </p>
            <p className="text-gray-400 mb-6">
            This month, the spotlight is on building and shipping! We challenge you to take on the side project Project Challenge—share your side project challenge in the #builders-space Discord channel anytime before 30th June. <br></br> <br></br>

Whether it&apos;s a weekend build or something you&apos;ve been quietly hacking on, this is your moment to launch, get visibility, and receive valuable feedback from the community.
            </p>
            <Link href="https://discord.com/invite/4sUmgTZa8H" target="_blank" rel="noopener noreferrer">
              <MagicButton
                title="Participate now"
                icon={<FaArrowRight />}
                position="right"
              />
            </Link>
          </div>
        </div>

        {/* Past Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {challenges.slice(1, showAllChallenges ? undefined : 4).map((challenge, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl border border-violet-300/20 bg-black-100/50 backdrop-blur-sm relative overflow-hidden group hover:border-violet-400/50 transition-all duration-300"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-indigo-500/5 opacity-50" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="relative w-full h-40 mb-4 max-w-[200px] mx-auto">
                  <Image
                    src={challenge.winner.photo}
                    alt={`${challenge.winner.name} - Winner`}
                    className="rounded-lg object-contain"
                    fill
                  />
                </div>
                <h4 className="text-xl font-semibold mb-1 text-violet-200">
                  {challenge.month}
                </h4>
                <p className="text-lg text-violet-300/80 mb-1">{challenge.challenge}</p>
                <p className="text-sm text-gray-400">
                  Winner: {challenge.winner.name}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {challenges.length > 4 && (
          <button
            onClick={() => setShowAllChallenges(!showAllChallenges)}
            className="flex items-center gap-2 text-violet-400 hover:text-violet-300 mb-20"
          >
            {showAllChallenges ? (
              <>
                Show Less <FaChevronUp />
              </>
            ) : (
              <>
                View More Challenges <FaChevronDown />
              </>
            )}
          </button>
        )}

        {/* Newsletter Section */}
        <h3 className="mt-20 mb-5 pb-5 text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-violet-50 to-violet-400 z-10">
          Weekly Newsletter
        </h3>
        
        {/* Latest Newsletter Embed */}
        <div className="w-full mb-12">
          <iframe
            src="https://techthrusters.substack.com/embed?theme=dark"
            className="w-full h-[600px] border-0"
            title="Latest Newsletter"
          />
        </div>

        {/* Past Newsletters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {newsletters.slice(1, showAllNewsletters ? undefined : 4).map((newsletter, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl border border-violet-300/20 bg-black-100/50 backdrop-blur-sm relative overflow-hidden group hover:border-violet-400/50 transition-all duration-300"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-indigo-500/5 opacity-50" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
              
              {/* Content */}
              <div className="relative z-10">
                <h4 className="text-xl font-semibold mb-1 text-violet-200">
                  {newsletter.title}
                </h4>
                <p className="text-lg text-violet-300/80 mb-1">{newsletter.week}</p>
                <p className="text-sm text-gray-400 mb-4">{newsletter.date}</p>
                <div className="flex justify-center">
                  <Link href={newsletter.link} target="_blank" rel="noopener noreferrer">
                    <button className="group flex items-center gap-2 px-4 py-2 text-sm font-medium text-violet-300 border border-violet-400/10 rounded-lg hover:border-violet-400/30 hover:bg-violet-400/5 transition-all duration-300">
                      Read Newsletter
                      <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {newsletters.length > 4 && (
          <button
            onClick={() => setShowAllNewsletters(!showAllNewsletters)}
            className="flex items-center gap-2 text-violet-400 hover:text-violet-300 mb-20"
          >
            {showAllNewsletters ? (
              <>
                Show Less <FaChevronUp />
              </>
            ) : (
              <>
                View More Newsletters <FaChevronDown />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}

export default Community;
