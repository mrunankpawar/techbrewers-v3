import Head from 'next/head';
import Meetup from "@/components/Meetup";
// import ExpandableCards from "@/components/ExpandableCards";
// import CardCarousel from "@/components/Cards";

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
        <meta property="og:description" content="Glimpses from our past meetups" />
        <meta property="og:url" content="https://techbrewers.org/meetup" />
        <meta property="og:image" content="/images/ogimagemeetup.jpg" />
      </Head>
      
    <div>
      <Meetup />
    </div>
    </>
  )
}

export default page 