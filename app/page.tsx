import type { Metadata } from 'next';
import HeroNew from "@/components/HeroNew";
import TechThrustersTalks from "@/components/TechThrustersTalks";
import CommunityInfo from "@/components/CommunityInfo";
import Sponsors from "@/components/Sponsors";
import MeetTheTeam from "@/components/MeetTheTeam";
import FooterNew from "@/components/FooterNew";
import { SITE_URL, SOCIAL } from '@/lib/constants';

export const metadata: Metadata = {
  title: "TechThrusters | Tech Community, Events & Meetups",
  description: "Join TechThrusters to learn, connect, and build in tech. Discover events, meetups, community programs, and opportunities to grow with 1900+ members.",
  openGraph: {
    url: SITE_URL,
    images: [{ url: `${SITE_URL}/images/ogimagehome.png`, width: 1200, height: 630 }],
  },
  twitter: {
    images: [`${SITE_URL}/images/ogimagehome.png`],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TechThrusters",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo/whitetrans.png`,
  description: "TechThrusters is a community-driven platform empowering tech innovation and learning.",
  sameAs: [SOCIAL.twitter, SOCIAL.linkedin, SOCIAL.instagram, SOCIAL.discord],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="relative overflow-hidden">
        <HeroNew />
        <TechThrustersTalks />
        <CommunityInfo />
        <Sponsors />
        <MeetTheTeam />
        {/* <TestimonialsNew /> */}
        <FooterNew />
      </main>
    </>
  );
}
