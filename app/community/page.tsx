import Head from 'next/head';
import Community from "@/components/Community";
import Navbar from "@/components/Navbar";
import FooterNew from "@/components/FooterNew";

function page() {
  return (
    <>
    <Head>
        <title>TechThrusters Community | Join 1900+ Developers</title>
        <meta name="description" content="Explore the TechThrusters community journey, values, FAQs, and programs. Join 1900+ developers to learn, connect, and build together." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        {/* Open Graph / Social media meta tags */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="TechThrusters" />
        <meta property="og:title" content="TechThrusters Community | Join 1900+ Developers" />
        <meta property="og:description" content="Explore the TechThrusters community journey, values, FAQs, and programs. Join 1900+ developers to learn, connect, and build together." />
        <meta property="og:url" content="https://techthrusters.org/community" />
        <meta property="og:image" content="https://techthrusters.org/images/ogimagecommunity.jpg" />
        <meta property="og:image:alt" content="TechThrusters Community" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="TechThrusters Community | Join 1900+ Developers" />
        <meta property="twitter:description" content="Explore the TechThrusters community journey, values, FAQs, and programs. Join 1900+ developers to learn, connect, and build together." />
        <meta property="twitter:image" content="https://techthrusters.org/images/ogimagecommunity.jpg" />
      </Head>
    <div className="gradient-background min-h-screen">
      <Navbar />
      <Community />
      <FooterNew />
    </div>
    </>
  )
}

export default page 