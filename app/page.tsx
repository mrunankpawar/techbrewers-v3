import Head from 'next/head';
import HeroNew from "@/components/HeroNew";
import Sponsors from "@/components/Sponsors";
import MeetTheTeam from "@/components/MeetTheTeam";
import TestimonialsNew from "@/components/TestimonialsNew";
import FooterNew from "@/components/FooterNew";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TechThrusters",
    "url": "https://techthrusters.org",
    "logo": "https://techthrusters.org/images/logo/whitetrans.png",
    "description": "TechThrusters is a community-driven platform empowering tech innovation and learning.",
    "sameAs": [
      "https://twitter.com/TechThrusters",
      "https://linkedin.com/company/techthrusters",
      "https://instagram.com/tech.thrusters",
      "https://discord.gg/techthrusters"
    ]
  };

  return (
    <>
      <Head>
        <title>TechThrusters - Empowering Tech Innovation & Community</title>
        <meta name="description" content="Join TechThrusters community to learn, connect and build in tech. Your gateway to tech innovation, events, and a thriving tech community." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        
        {/* Primary Meta Tags */}
        <meta name="title" content="TechThrusters - Empowering Tech Innovation & Community" />
        <meta name="keywords" content="tech community, tech events, programming, software development, tech innovation, tech learning, tech networking" />
        <meta name="author" content="TechThrusters" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://techthrusters.org/" />
        <meta property="og:title" content="TechThrusters - Empowering Tech Innovation & Community" />
        <meta property="og:description" content="Join TechThrusters community to learn, connect and build in tech. Your gateway to tech innovation, events, and a thriving tech community." />
        <meta property="og:image" content="https://techthrusters.org/images/ogimagehome.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://techthrusters.org/" />
        <meta property="twitter:title" content="TechThrusters - Empowering Tech Innovation & Community" />
        <meta property="twitter:description" content="Join TechThrusters community to learn, connect and build in tech. Your gateway to tech innovation, events, and a thriving tech community." />
        <meta property="twitter:image" content="https://techthrusters.org/images/ogimagehome.png" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      
      <main className="relative overflow-hidden">
        <HeroNew />
        <Sponsors />
        <MeetTheTeam />
        <TestimonialsNew />
        <FooterNew />
      </main>
    </>
  );
}