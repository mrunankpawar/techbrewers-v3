import type { Metadata } from 'next';
import HeroNew from "@/components/HeroNew";
import TechThrustersTalks from "@/components/TechThrustersTalks";
import CommunityInfo from "@/components/CommunityInfo";
import Sponsors from "@/components/Sponsors";
import MeetTheTeam from "@/components/MeetTheTeam";
import FooterNew from "@/components/FooterNew";
import AuthCallback from "@/components/AuthCallback";
import { SITE_URL } from '@/lib/constants';
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


export default function Home() {
  return (
    <>
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
