import Head from 'next/head';
import Challenges from "@/components/Challenges";

function page() {
  return (
    <>
    <Head>
        <title>TechThrusters</title>
        <meta name="description" content="TechThrusters" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        {/* Open Graph / Social media meta tags */}
        <meta property="og:title" content="TechThrusters" />
        <meta property="og:description" content="Monthly Challenges at TechThrusters Community" />
        <meta property="og:url" content="https://techthrusters.org/challenges" />
        <meta property="og:image" content="/images/ogimagecommunity.jpg" />
      </Head>
    <div>
      <Challenges />
    </div>
    </>
  )
}

export default page 