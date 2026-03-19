import Head from 'next/head';
import Events from "@/components/Events";
import ExpandableCards from "@/components/ExpandableCards";
import Navbar from "@/components/Navbar";
import FooterNew from "@/components/FooterNew";

function page() {
  return (
    <>
    <Head>
        <title>TechThrusters Events | Upcoming Sessions & Past Talks</title>
        <meta name="description" content="Browse upcoming TechThrusters events and past talks with speaker highlights and watch links from workshops, meetups, and community sessions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        {/* Open Graph / Social media meta tags */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="TechThrusters" />
        <meta property="og:title" content="TechThrusters Events | Upcoming Sessions & Past Talks" />
        <meta property="og:description" content="Browse upcoming TechThrusters events and past talks with speaker highlights and watch links from workshops, meetups, and community sessions." />
        <meta property="og:url" content="https://techthrusters.org/events" />
        <meta property="og:image" content="https://techthrusters.org/images/ogimageevents.jpg" />
        <meta property="og:image:alt" content="TechThrusters Events" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="TechThrusters Events | Upcoming Sessions & Past Talks" />
        <meta property="twitter:description" content="Browse upcoming TechThrusters events and past talks with speaker highlights and watch links from workshops, meetups, and community sessions." />
        <meta property="twitter:image" content="https://techthrusters.org/images/ogimageevents.jpg" />
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