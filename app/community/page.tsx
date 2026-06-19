import type { Metadata } from 'next';
import Community from "@/components/Community";
import Navbar from "@/components/Navbar";
import FooterNew from "@/components/FooterNew";

export const metadata: Metadata = {
  title: 'TechThrusters Community | Join 1,900+ Developers',
  description: 'Explore the TechThrusters community journey, values, FAQs, and programs. Join 1,900+ developers to learn, connect, and build together.',
  alternates: { canonical: 'https://techthrusters.org/community' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'TechThrusters',
    title: 'TechThrusters Community | Join 1,900+ Developers',
    description: 'Explore the TechThrusters community journey, values, FAQs, and programs. Join 1,900+ developers to learn, connect, and build together.',
    url: 'https://techthrusters.org/community',
    images: [{ url: 'https://techthrusters.org/images/ogimagecommunity.jpg', alt: 'TechThrusters Community' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechThrusters Community | Join 1,900+ Developers',
    description: 'Explore the TechThrusters community journey, values, FAQs, and programs. Join 1,900+ developers to learn, connect, and build together.',
    images: ['https://techthrusters.org/images/ogimagecommunity.jpg'],
  },
  robots: { index: true, follow: true },
};

export default function CommunityPage() {
  return (
    <div className="gradient-background min-h-screen">
      <Navbar />
      <Community />
      <FooterNew />
    </div>
  );
}
