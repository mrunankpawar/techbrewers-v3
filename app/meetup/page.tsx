import type { Metadata } from 'next';
import Meetup from "@/components/Meetup";
import MeetupStats from "@/components/MeetupStats";
import MeetupTeam from "@/components/MeetupTeam";
import MeetupSponsors from "@/components/MeetupSponsors";
import Navbar from "@/components/Navbar";
import FooterNew from "@/components/FooterNew";
import { ogImage } from "@/lib/seo";
import { speakerList, jsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: 'TechThrusters Meetups | Speaker Archive & Highlights',
  description: 'Discover TechThrusters meetup highlights, speaker archive, event snapshots, and community milestones from past in-person and virtual meetups.',
  alternates: { canonical: 'https://techthrusters.org/meetup' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'TechThrusters',
    title: 'TechThrusters Meetups | Speaker Archive & Highlights',
    description: 'Discover TechThrusters meetup highlights, speaker archive, event snapshots, and community milestones from past in-person and virtual meetups.',
    url: 'https://techthrusters.org/meetup',
    images: [ogImage('meetup', 'TechThrusters Meetups: building community, one meetup at a time')],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechThrusters Meetups | Speaker Archive & Highlights',
    description: 'Discover TechThrusters meetup highlights, speaker archive, event snapshots, and community milestones from past in-person and virtual meetups.',
    images: [ogImage('meetup', 'TechThrusters Meetups: building community, one meetup at a time')],
  },
  robots: { index: true, follow: true },
};

export default function MeetupPage() {
  return (
    <div className="min-h-screen bg-paper">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(speakerList('https://techthrusters.org/meetup')) }} />
      <Navbar />
      <main>
        <MeetupStats />
        <Meetup />
        <MeetupTeam />
        <MeetupSponsors />
      </main>
      <FooterNew />
    </div>
  );
}
