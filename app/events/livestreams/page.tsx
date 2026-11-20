import type { Metadata } from 'next';
import ExpandableCards from '@/components/ExpandableCards';
import { ogImage } from '@/lib/seo';
import { livestreamList, jsonLd } from '@/lib/structured-data';

const TITLE = 'YouTube Livestreams | TechThrusters Events';
const DESCRIPTION = 'Rewatch TechThrusters recorded talks and community sessions on YouTube.';
const URL = 'https://techthrusters.org/events/livestreams';
const IMAGE = ogImage('events-livestreams', 'TechThrusters: YouTube livestreams');

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { type: 'website', siteName: 'TechThrusters', url: URL, title: TITLE, description: DESCRIPTION, images: [IMAGE] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [IMAGE] },
};

export default function LivestreamsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(livestreamList(URL)) }} />
      <ExpandableCards />
    </>
  );
}
