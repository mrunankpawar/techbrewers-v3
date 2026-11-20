import type { Metadata } from 'next';
import Events from '@/components/Events';
import { ogImage } from '@/lib/seo';
import { getCurrentUser } from '@/lib/auth';
import { isDbConfigured } from '@/lib/db';
import { listEvents, type CommunityEvent } from '@/lib/events';
import { getMember } from '@/lib/members';
import { jsonLd } from '@/lib/structured-data';
import type { RsvpViewer } from '@/components/member/RsvpButton';

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

// RSVP counts and the viewer's own RSVP change per request
export const dynamic = 'force-dynamic';

function eventsJsonLd(events: CommunityEvent[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Upcoming TechThrusters events',
    itemListElement: events.map((e, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Event',
        name: e.title,
        description: e.description || undefined,
        startDate: e.startsAt.toISOString(),
        endDate: e.endsAt?.toISOString(),
        url: `https://techthrusters.org/events/upcoming#${e.slug}`,
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: e.venue
          ? e.onlineUrl
            ? 'https://schema.org/MixedEventAttendanceMode'
            : 'https://schema.org/OfflineEventAttendanceMode'
          : 'https://schema.org/OnlineEventAttendanceMode',
        location: e.venue
          ? { '@type': 'Place', name: e.venue, address: e.city || undefined }
          : { '@type': 'VirtualLocation', url: 'https://techthrusters.org/events/upcoming' },
        organizer: { '@id': 'https://techthrusters.org/#organization' },
        isAccessibleForFree: true,
      },
    })),
  };
}

export default async function UpcomingEventsPage() {
  let events: CommunityEvent[] = [];
  let viewer: RsvpViewer = 'signed-out';
  if (isDbConfigured()) {
    const user = await getCurrentUser();
    try {
      events = await listEvents({ userId: user?.id, when: 'upcoming' });
      if (user) viewer = (await getMember(user.id)) ? 'member' : 'no-card';
    } catch (err) {
      // keep the page up (empty state) if the database is unreachable
      console.error('Could not load events', err);
    }
  }
  return (
    <>
      {events.length > 0 && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(eventsJsonLd(events)) }} />}
      <Events events={events} viewer={viewer} />
    </>
  );
}
