import type { Metadata } from 'next';
import Events from '@/components/Events';
import { ogImage } from '@/lib/seo';

export const metadata: Metadata = {
  title: "Upcoming Events | TechThrusters",
  description: "Upcoming TechThrusters workshops, meetups, and community sessions.",
  alternates: { canonical: "https://techthrusters.org/events/upcoming" },
  openGraph: {
    type: "website",
    siteName: "TechThrusters",
    url: "https://techthrusters.org/events/upcoming",
    title: "Upcoming Events | TechThrusters",
    description: "Upcoming TechThrusters workshops, meetups, and community sessions.",
    images: [ogImage("events-upcoming", "TechThrusters: upcoming sessions")],
  },
  twitter: {
    card: "summary_large_image",
    title: "Upcoming Events | TechThrusters",
    description: "Upcoming TechThrusters workshops, meetups, and community sessions.",
    images: [ogImage("events-upcoming", "TechThrusters: upcoming sessions")],
  },
};

export default function UpcomingEventsPage() {
  return <Events />;
}
