import type { Metadata } from 'next';
import Events from '@/components/Events';

export const metadata: Metadata = {
  title: "Upcoming Events | TechThrusters",
  description: "Upcoming TechThrusters workshops, meetups, and community sessions.",
  openGraph: {
    url: "https://techthrusters.org/events/upcoming",
    title: "Upcoming Events | TechThrusters",
  },
};

export default function UpcomingEventsPage() {
  return <Events />;
}
