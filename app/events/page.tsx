import Head from 'next/head';
import Events from "@/components/Events";
import ExpandableCards from "@/components/ExpandableCards";

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
        <meta property="og:description" content="Check our upcoming and past events" />
        <meta property="og:url" content="https://techthrusters.org/events" />
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