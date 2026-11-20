import type { Metadata } from 'next';
import PartnerEvents from '@/components/PartnerEvents';
import { partnerEvents, isPastEvent } from '@/data/partnerEvents';
import { ogImage } from '@/lib/seo';
import { partnerEventList, jsonLd } from '@/lib/structured-data';

const TITLE = 'Partner Events | TechThrusters';
const DESCRIPTION = 'Events and meetups TechThrusters is partnering with alongside other developer communities.';
const URL = 'https://techthrusters.org/events/partners';
const IMAGE = ogImage('events-partners', 'TechThrusters: partner events and meetups');

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { type: 'website', siteName: 'TechThrusters', url: URL, title: TITLE, description: DESCRIPTION, images: [IMAGE] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [IMAGE] },
};

// Re-render daily so events move from "upcoming" to "past" on their own.
export const revalidate = 86400;

export default function PartnerEventsPage() {
  const now = new Date();
  const sorted = [...partnerEvents].sort((a, b) => a.startDate.localeCompare(b.startDate));
  const upcoming = sorted.filter((e) => !isPastEvent(e, now));
  // most recent first; events on the same dates keep their listed order
  const past = sorted
    .filter((e) => isPastEvent(e, now))
    .sort((a, b) => b.startDate.localeCompare(a.startDate));
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(partnerEventList(URL, sorted, now)) }} />
      <PartnerEvents upcoming={upcoming} past={past} />
    </>
  );
}
