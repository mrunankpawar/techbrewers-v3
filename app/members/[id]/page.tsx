import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import FooterNew from '@/components/FooterNew';
import { MemberCard } from '@/components/member/MemberCard';
import { SectionLabel } from '@/components/ui/Launch';
import { ArrowButton } from '@/components/ui/ArrowButton';
import { isDbConfigured } from '@/lib/db';
import { getPublicMember } from '@/lib/members';
import { listBadges, countBadges, BADGE_INFO } from '@/lib/badges';
import { DISCORD_URL } from '@/lib/constants';

export const dynamic = 'force-dynamic';

async function load(id: string) {
  if (!isDbConfigured()) return null;
  const member = await getPublicMember(decodeURIComponent(id));
  if (!member) return null;
  const badges = await listBadges(member.userId);
  return { member, badges };
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const data = await load(params.id);
  if (!data) return { title: 'Member not found | TechThrusters', robots: { index: false } };
  const { member } = data;
  return {
    title: `${member.name} | TechThrusters member`,
    description: [member.headline, member.learning.length ? `Learning ${member.learning.join(', ')}` : ''].filter(Boolean).join('. '),
    // member pages stay out of search results; they're for sharing
    robots: { index: false, follow: false },
  };
}

export default async function MemberPage({ params }: { params: { id: string } }) {
  const data = await load(params.id);
  if (!data) notFound();
  const { member, badges } = data;
  const notable = badges.filter((b) => b.kind !== 'attended');

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navbar />
      <main className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 star-field fade-edges" />
        <div className="relative mx-auto grid max-w-7xl items-start gap-12 px-6 pb-24 pt-32 md:pt-40 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <MemberCard member={member} badgeCounts={countBadges(badges)} />
          <div>
            <SectionLabel>TechThrusters</SectionLabel>
            <h1 className="display mt-5 text-4xl md:text-6xl">
              {member.name.split(' ')[0]} learns and builds <span className="accent text-ember">with us.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-ink-soft">
              TechThrusters is a free, open community of developers, designers and makers. Members meet at events, learn from each other and ship projects together.
            </p>
            {notable.length > 0 && (
              <ul className="mt-8 space-y-2">
                {notable.map((b) => (
                  <li key={b.id} className="text-ink-soft">
                    <span className="font-semibold text-ink">{BADGE_INFO[b.kind].label}:</span> {b.note}
                    {b.eventTitle ? ` (${b.eventTitle})` : ''}
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
              <ArrowButton href={DISCORD_URL} external>
                Join the community
              </ArrowButton>
              <Link href="/sign-up" className="text-sm font-semibold text-ink/80 hover:text-ink">
                Make your own card ›
              </Link>
            </div>
          </div>
        </div>
      </main>
      <FooterNew />
    </div>
  );
}
