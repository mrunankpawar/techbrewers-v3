import Head from 'next/head';
import Meetup from "@/components/Meetup";
import MeetupTeam from "@/components/MeetupTeam";
// import ExpandableCards from "@/components/ExpandableCards";
// import CardCarousel from "@/components/Cards";
import Script from 'next/script';

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
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-MZEN1DZW0S" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'YOUR_GOOGLE_ANALYTICS_ID');  // Replace with your Google Analytics ID
        `}
      </Script>
      
    <div>
      <Meetup />
      <MeetupTeam />
    </div>
    </>
  )
}

export default page 