import Head from 'next/head';
import Meetup from "@/components/Meetup";
import MeetupStats from "@/components/MeetupStats";
import MeetupTeam from "@/components/MeetupTeam";
import MeetupSponsors from "@/components/MeetupSponsors";
import Navbar from "@/components/Navbar";
import FooterNew from "@/components/FooterNew";

function page() {
  return (
    <>
    <Head>
        <title>TechThrusters Meetups | Speaker Archive & Highlights</title>
        <meta name="description" content="Discover TechThrusters meetup highlights, speaker archive, event snapshots, and community milestones from past in-person and virtual meetups." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="TechThrusters" />
        <meta property="og:title" content="TechThrusters Meetups | Speaker Archive & Highlights" />
        <meta property="og:description" content="Discover TechThrusters meetup highlights, speaker archive, event snapshots, and community milestones from past in-person and virtual meetups." />
        <meta property="og:url" content="https://techthrusters.org/meetup" />
        <meta property="og:image" content="https://techthrusters.org/images/ogimagemeetup.jpg" />
        <meta property="og:image:alt" content="TechThrusters Meetups" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="TechThrusters Meetups | Speaker Archive & Highlights" />
        <meta property="twitter:description" content="Discover TechThrusters meetup highlights, speaker archive, event snapshots, and community milestones from past in-person and virtual meetups." />
        <meta property="twitter:image" content="https://techthrusters.org/images/ogimagemeetup.jpg" />
      </Head>
      
    <div className="min-h-screen">
      <Navbar />
      <MeetupStats />
      <div className="gradient-background">
        <Meetup />
        <MeetupTeam />
        <MeetupSponsors />
      </div>
      <FooterNew />
    </div>
    </>
  )
}

export default page 