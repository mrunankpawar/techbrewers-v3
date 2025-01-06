
import Head from 'next/head';
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Sponsors from "@/components/Sponsors";
import Team from "@/components/Team";
import TestimonialCards from "@/components/TestimonialCards";
// import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";
// import Image from "next/image";

export default function Home() {
  return (
    <>
    <Head>
        <title>TechThrusters</title>
        <meta name="description" content="TechThrusters" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        {/* Open Graph / Social media meta tags */}
        <meta property="og:title" content="TechThrusters" />
        <meta property="og:description" content="Join TechThrusters community to learn, connect and build in tech." />
        <meta property="og:url" content="https://techthrusters.org/" />
        <meta property="og:image" content="/images/ogimagehome.png" />
      </Head>
    <main className="mt-5 pt-5 relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-8xl w-full">
        <Hero />
        <Grid />
        <TestimonialCards />
        <Team />
        <Sponsors />
      </div>
    </main>
    </>
  );
}