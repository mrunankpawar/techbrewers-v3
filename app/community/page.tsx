import Head from 'next/head';
import Community from "@/components/Community";

function page() {
  return (
    <>
    <Head>
        <title>Club TechBrewers</title>
        <meta name="description" content="Club TechBrewers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        {/* Open Graph / Social media meta tags */}
        <meta property="og:title" content="Club TechBrewers" />
        <meta property="og:description" content="Get to know about the journey of TechBrewers" />
        <meta property="og:url" content="https://techbrewers.org/community" />
        <meta property="og:image" content="/images/ogimagecommunity.jpg" />
      </Head>
    <div>
      <Community />
    </div>
    </>
  )
}

export default page 