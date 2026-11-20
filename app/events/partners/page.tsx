import type { Metadata } from 'next';
import PartnerEvents from '@/components/PartnerEvents';
import { ogImage } from '@/lib/seo';

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

export default function PartnerEventsPage() {
  return <PartnerEvents />;
}
