import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import Image from "next/image";
import { FlipWords } from "./ui/Flipwords";

const words = ["Learn", "Connect", "Build"];

function Hero() {
  return (
    <div className="relative h-screen w-full pb-20">
      <div className="relative flex flex-col items-center justify-center mx-auto h-full w-full max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] text-center">
        <button className="mb-10 bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-sm font-normal leading-6  text-white inline-block">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(13, 17, 131, 0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
            <span>🚨 We&apos;re excited to share that Club TechBrewers is now TechThrusters </span>
            <svg
              fill="none"
              height="16"
              viewBox="0 0 24 24"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.75 8.75L14.25 12L10.75 15.25"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </button>
        <Image
          src="/images/logo/whitetrans.png"
          alt="TechThrusters logo"
          className="pb-5 w-40 md:w-44 lg:w-48"
          width={192}
          height={192}
        />
        <h2 className="mb-3 text-lg sm:text-xl md:text-2xl lg:text-2xl font-medium sm:font-semibold md:font-bold lg:font-extrabold text-blue-100 uppercase tracking-widest z-10">
          <FlipWords words={words} /> with
        </h2>

        <h1 className="mt-5 md:mt-0 text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-violet-50 to-violet-400 z-10">
          TechThrusters
        </h1>
        <div className="mt-8 lg:mt-4 z-10">
          <Link href="https://bit.ly/TBDISCORD" target="__blank">
            <MagicButton
              title="Join the community"
              icon={<FaArrowRight />}
              position="right"
            />
          </Link>
        </div>
      </div>

      <div
        className="absolute inset-0 h-screen w-full"
        style={{ opacity: 0.1 }}
      >
        <Image
          src="/images/bgfilled.png"
          alt="Background Image"
          className="object-cover"
          fill={true}
        />
      </div>
    </div>
  );
}

export default Hero;
