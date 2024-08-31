import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import Image from "next/image";
import { FlipWords } from "./ui/Flipwords";

const words = ["Learn", "Connect", "Build"];

function Hero() {
  return (
    <div className="relative h-screen w-full pb-20">
      {/* Background Grids */}
      <div className="absolute inset-0 flex items-center justify-center dark:bg-black-100 bg-white dark:bg-grid-white/[0.07] bg-grid-black/[0.2]">
        <div className="absolute inset-0 dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative flex flex-col items-center justify-center mx-auto h-full w-full max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] text-center">
        <Image
          src="/images/techbrewers.png"
          alt="TechBrewers logo"
          width={190}
          height={190}
          className="pb-5" />
        <h2 className="mb-3 text-lg sm:text-xl md:text-2xl lg:text-2xl font-medium sm:font-semibold md:font-bold lg:font-extrabold text-blue-100 uppercase tracking-widest z-10">
          <FlipWords words={words} /> with
        </h2>

        <h1 className="mt-5 md:mt-0 text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-violet-50 to-violet-400 z-10">
          Club TechBrewers
        </h1>
        {/* <p className="mt-4 text-base md:text-lg text-violet-200 z-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam,
          sequi. Adipisci consequatur aut optio quas, rerum ipsam similique
          delectus quae doloribus.
        </p> */}
        <div className="mt-4 z-10">
          <Link href="https://bit.ly/TBDISCORD" target="__blank">
            <MagicButton
              title="Join the community"
              icon={<FaArrowRight />}
              position="right"
            />
          </Link>
        </div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 h-screen w-full" style={{ opacity: 0.15 }}>
        <Image
          src="/images/bg100.png"
          alt="Background Image"
          className="object-cover"
          fill={true}
        />
      </div>

    </div>
  );
}

export default Hero;
