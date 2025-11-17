import Head from 'next/head';
import Meetup from "@/components/Meetup";
import MeetupTeam from "@/components/MeetupTeam";
import MeetupSponsors from "@/components/MeetupSponsors";
import Navbar from "@/components/Navbar";

function page() {
  return (
    <>
    <Head>
        <title>TechThrusters</title>
        <meta name="description" content="TechThrusters" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta property="og:title" content="TechThrusters" />
        <meta property="og:description" content="Glimpses from our past meetups" />
        <meta property="og:url" content="https://techthrusters.org/meetup" />
        <meta property="og:image" content="/images/ogimagemeetup.jpg" />
      </Head>
      
    <div className="gradient-background min-h-screen">
      <Navbar />
      <div className="pt-24 md:pt-28">
        <Meetup />
        <MeetupTeam />
        <MeetupSponsors />
      </div>
    </div>
    </>
  )
}

export default page 