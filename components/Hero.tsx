import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import Image from "next/image";

function Hero() {
  return (
    // md:h-[40rem]
    <div>
    <div className="hero h-auto w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className="hero--content max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center">
        <h2 className="mt-20 md:mb-3 uppercase tracking-widest text-md text-center text-blue-100 max-w-80 z-10">
          Learn, Connect and Build with
        </h2>
        <h1 className="mt-5 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-violet-50 to-violet-400 z-10">
          Club TechBrewers
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-violet-200 max-w-md mx-auto z-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam,
          sequi. Adipisci consequatur aut optio quas, rerum ipsam similique
          delectus quae doloribus
        </p>

        <div className="mt-4 z-10">
          {/* Magic Button */}
          <Link href="https://bit.ly/TBDISCORD" target="__blank">
            <MagicButton
              title="Join the community"
              icon={<FaArrowRight />}
              position="right"
            />
          </Link>
        </div>
        <Image
          src="/images/bg.png"
          alt="Background Image"
          className="bg-img"
            // width={2800}
            // height={700}
          fill={true}
        />
      </div>
    </div>
        </div>
  );
}

export default Hero;
