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
        <div className="mb-10 relative">
          <div className="relative flex items-center justify-center">
            <div className="px-3 py-2 md:px-4 md:py-3 rounded-xl bg-black border border-indigo-500/50 backdrop-blur-md inline-block mx-6 md:mx-8">
              <div className="flex items-center justify-center gap-2">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_#6366f1] flex-shrink-0"></div>
                <span className="text-xs md:text-sm text-white max-w-[280px] md:max-w-none">We&apos;re excited to share that Club TechBrewers is now TechThrusters</span>
                <svg
                  fill="none"
                  height="12"
                  width="12"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-indigo-500 md:h-4 md:w-4"
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
            </div>
          </div>
        </div>
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
        <p className="mt-4 text-base md:text-lg text-gray-200 dark:text-gray-300 max-w-2xl mx-auto z-10">
          TechThrusters is a global tech community enabling folks to Learn, Connect, and Build together through collaboration and shared growth.
        </p>
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
