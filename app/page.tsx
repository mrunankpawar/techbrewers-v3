import type { Metadata } from 'next';
import HeroNew from "@/components/HeroNew";
import TechThrustersTalks from "@/components/TechThrustersTalks";
import CommunityInfo from "@/components/CommunityInfo";
import Sponsors from "@/components/Sponsors";
import MeetTheTeam from "@/components/MeetTheTeam";
import FooterNew from "@/components/FooterNew";
import AuthCallback from "@/components/AuthCallback";
import { SITE_URL, SOCIAL } from '@/lib/constants';
import { ogImage } from '@/lib/seo';

export const metadata: Metadata = {
  title: "TechThrusters | Tech Community, Events & Meetups",
  description: "Join TechThrusters to learn, connect, and build in tech. Discover events, meetups, community programs, and opportunities to grow with 1900+ members.",
  openGraph: {
    url: SITE_URL,
    images: [ogImage('home', 'TechThrusters: Learn. Connect. Build together.')],
  },
  twitter: {
    images: [ogImage('home', 'TechThrusters: Learn. Connect. Build together.')],
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
      <AuthCallback />
      <main className="relative overflow-hidden bg-paper">
        <HeroNew />
        <Sponsors />
        <CommunityInfo />
        <TechThrustersTalks />
        <MeetTheTeam />
        {/* <TestimonialsNew /> */}
        <FooterNew />
      </main>
    </>
  );
}
