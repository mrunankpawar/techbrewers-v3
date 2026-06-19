import type { Metadata } from 'next';
import Meetup from "@/components/Meetup";
import MeetupStats from "@/components/MeetupStats";
import MeetupTeam from "@/components/MeetupTeam";
import MeetupSponsors from "@/components/MeetupSponsors";
import Navbar from "@/components/Navbar";
import FooterNew from "@/components/FooterNew";

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
    images: [{ url: 'https://techthrusters.org/images/ogimagemeetup.jpg', alt: 'TechThrusters Meetups' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechThrusters Meetups | Speaker Archive & Highlights',
    description: 'Discover TechThrusters meetup highlights, speaker archive, event snapshots, and community milestones from past in-person and virtual meetups.',
    images: ['https://techthrusters.org/images/ogimagemeetup.jpg'],
  },
  robots: { index: true, follow: true },
};

export default function MeetupPage() {
  return (
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
  );
}
