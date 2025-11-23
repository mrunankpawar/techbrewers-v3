import Head from 'next/head';
import Events from "@/components/Events";
import ExpandableCards from "@/components/ExpandableCards";
import Navbar from "@/components/Navbar";
import FooterNew from "@/components/FooterNew";

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
      

    <div className="gradient-background min-h-screen">
      <Navbar />
      <div className="pt-24 md:pt-28">
        <Events />
        <ExpandableCards />
      </div>
      <FooterNew />
    </div>
    </>
  )
}

export default page 