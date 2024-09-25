import Head from 'next/head';
import Events from "@/components/Events";
import ExpandableCards from "@/components/ExpandableCards";

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
        <meta property="og:description" content="Check our upcoming and past events" />
        <meta property="og:url" content="https://techbrewers.org/events" />
        <meta property="og:image" content="/images/ogimageevents.jpg" />
      </Head>
      

    <div>
      <Events />
      <ExpandableCards />
    </div>
    </>
  )
}

export default page 