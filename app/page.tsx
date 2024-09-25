
import Head from 'next/head';
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Sponsors from "@/components/Sponsors";
import Team from "@/components/Team";
import TestimonialCards from "@/components/TestimonialCards";
// import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";
// import Image from "next/image";
import Script from 'next/script';

export default function Home() {
  return (
    <>
    <Head>
        <title>Club TechBrewers</title>
        <meta name="description" content="Club TechBrewers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        {/* Open Graph / Social media meta tags */}
        <meta property="og:title" content="Club TechBrewers" />
        <meta property="og:description" content="Join the TechBrewers community to learn, connect and build in tech." />
        <meta property="og:url" content="https://techbrewers.org/" />
        <meta property="og:image" content="/images/ogimagehome.png" />
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-MZEN1DZW0S" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'YOUR_GOOGLE_ANALYTICS_ID');  // Replace with your Google Analytics ID
        `}
      </Script>
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