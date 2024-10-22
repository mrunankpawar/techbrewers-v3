import Head from 'next/head';
import Meetup from "@/components/Meetup";
import MeetupTeam from "@/components/MeetupTeam";
import MeetupSponsors from "@/components/MeetupSponsors";
// import MeetupSpeakers from "@/components/MeetupSpeakers";
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
        <meta property="og:title" content="Club TechBrewers" />
        <meta property="og:description" content="Glimpses from our past meetups" />
        <meta property="og:url" content="https://techbrewers.org/meetup" />
        <meta property="og:image" content="/images/ogimagemeetup.jpg" />
      </Head>
      
    <div>
      <Meetup />
      <MeetupTeam />
      <MeetupSponsors />
    </div>
    </>
  )
}

export default page 