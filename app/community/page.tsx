import Head from 'next/head';
import Community from "@/components/Community";
import Navbar from "@/components/Navbar";

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
        <meta property="og:description" content="Get to know about the journey of TechThrusters" />
        <meta property="og:url" content="https://techthrusters.org/community" />
        <meta property="og:image" content="/images/ogimagecommunity.jpg" />
      </Head>
    <div className="gradient-background min-h-screen">
      <Navbar />
      <div className="pt-24 md:pt-28">
        <Community />
      </div>
    </div>
    </>
  )
}

export default page 