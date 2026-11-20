import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { ArrowUpRight, Handshake, Shield, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';
import FooterNew from '@/components/FooterNew';
import { SectionLabel } from '@/components/ui/Launch';
import { MemberCard, BADGE_ICON, initials } from '@/components/member/MemberCard';
import { CardForm } from '@/components/member/CardForm';
import { RsvpButton } from '@/components/member/RsvpButton';
import { AccountSettings } from '@/components/member/AccountSettings';
import { getCurrentUser } from '@/lib/auth';
import { isDbConfigured } from '@/lib/db';
import { getMember } from '@/lib/members';
import { listBadges, countBadges, BADGE_INFO } from '@/lib/badges';
import { listMemberRsvps } from '@/lib/events';
import { findMatches } from '@/lib/matching';
import { formatEventWhen, formatShortDate } from '@/lib/time';

export const metadata: Metadata = { title: 'Your profile | TechThrusters', robots: { index: false, follow: false } };
export const dynamic = 'force-dynamic';

function Section({ id, label, title, accent, children, intro }: { id: string; label: string; title: string; accent: string; intro?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-ink/10 py-14 md:py-20">
      <SectionLabel className="mb-4">{label}</SectionLabel>
      <h2 className="display text-3xl md:text-5xl">
        {title} <span className="accent text-ember">{accent}</span>
      </h2>
      {intro && <p className="mt-4 max-w-xl text-ink-soft">{intro}</p>}
      <div className="mt-8">{children}</div>
    </section>
  );
}

export default async function ProfilePage() {
  const user = await getCurrentUser();
  if (!user) redirect('/sign-up');

  if (!isDbConfigured()) {
    return (
      <div className="min-h-screen bg-paper text-ink">
        <Navbar />
        <main className="mx-auto max-w-3xl px-6 pb-24 pt-36">
          <SectionLabel>Your account</SectionLabel>
          <h1 className="display mt-5 text-5xl">
            Member cards are <span className="accent text-ember">almost here.</span>
          </h1>
          <p className="mt-6 text-lg text-ink-soft">This part of the site isn&apos;t switched on yet. You can still manage your sign-in below.</p>
          <div className="mt-10 rounded-[1.75rem] border border-ink/10 bg-white p-5 md:p-8">
            <AccountSettings />
          </div>
        </main>
        <FooterNew />
      </div>
    );
  }

  const member = await getMember(user.id);
  const [badges, rsvps, matches] = member
    ? await Promise.all([listBadges(user.id), listMemberRsvps(user.id), findMatches(member)])
    : [[], [], []];
  const counts = countBadges(badges);
  const upcoming = rsvps.filter((e) => !e.over).sort((a, b) => a.startsAt.getTime() - b.startsAt.getTime());
  const past = rsvps.filter((e) => e.over);
  const firstName = member?.name.split(' ')[0];

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 pb-10 pt-32 md:pt-40">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel>Your account</SectionLabel>
            <h1 className="display mt-5 text-5xl sm:text-6xl">
              {member ? (
                <>
                  Hi {firstName}, <span className="accent text-ember">welcome back.</span>
                </>
              ) : (
                <>
                  Set up your <span className="accent text-ember">member card.</span>
                </>
              )}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-ink-soft">
              {member
                ? 'Your card, your badges, the events you are going to and the people worth meeting.'
                : 'Tell the community what you know and what you are learning. You need a card to RSVP to events and to find a buddy.'}
            </p>
          </div>
          {user.isOrganizer && (
            <Link href="/admin" className="inline-flex h-11 items-center gap-2 rounded-full border border-ink/15 bg-white px-5 text-sm font-semibold text-ink hover:border-ink">
              <Shield className="h-4 w-4 text-ember" aria-hidden /> Organizer tools
            </Link>
          )}
        </div>

        {/* Card + editor */}
        <section id="card" className="scroll-mt-28 grid gap-10 py-14 md:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            {member ? (
              <>
                <MemberCard member={member} badgeCounts={counts} />
                <p className="mt-4 text-sm text-ink-soft">
                  {member.showInDirectory ? (
                    <>
                      Your card is public at{' '}
                      <Link href={`/members/${encodeURIComponent(member.userId)}`} className="font-medium text-[#ad450c] underline underline-offset-2">
                        your card link
                      </Link>
                      . Share it anywhere.
                    </>
                  ) : (
                    'Your card is private. Switch on "Show my card publicly" to get a link you can share.'
                  )}
                </p>
              </>
            ) : (
              <div className="flex aspect-[4/3] items-center justify-center rounded-[1.75rem] border border-dashed border-ink/20 bg-white/50 p-8 text-center text-ink-soft">
                Your card appears here once you save it.
              </div>
            )}
          </div>
          <div>
            <h2 className="text-xl font-semibold tracking-tight">{member ? 'Edit your card' : 'Create your card'}</h2>
            <div className="mt-6">
              <CardForm member={member} suggestedName="" />
            </div>
          </div>
        </section>

        {member && (
          <>
            {/* Events */}
            <Section id="events" label="Your events" title="Where you'll be" accent="next." intro="Events you have RSVP'd to. Organizers mark attendance after each event, which earns you an Attended badge.">
              {upcoming.length ? (
                <ul className="border-t border-ink/10">
                  {upcoming.map((e) => (
                    <li key={e.id} className="flex flex-col gap-4 border-b border-ink/10 py-6 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="display text-2xl md:text-3xl">{e.title}</h3>
                        <p className="mt-1 text-sm text-ink-soft">
                          {formatEventWhen(e.startsAt, e.endsAt, e.timezone)}
                          {e.venue ? ` · ${e.venue}` : ''}
                          {e.city ? `, ${e.city}` : ''}
                        </p>
                      </div>
                      <RsvpButton eventId={e.id} going full={false} open={e.rsvpOpen} viewer="member" />
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="rounded-[1.75rem] border border-dashed border-ink/20 bg-white/50 p-8 text-ink-soft">
                  You haven&apos;t RSVP&apos;d to anything yet.{' '}
                  <Link href="/events/upcoming" className="font-medium text-[#ad450c] underline underline-offset-2">
                    See upcoming events
                  </Link>
                  .
                </p>
              )}
              {past.length > 0 && (
                <div className="mt-10">
                  <p className="eyebrow mb-3 text-ink/60">Past</p>
                  <ul className="space-y-2 text-sm">
                    {past.map((e) => (
                      <li key={e.id} className="flex flex-wrap items-center gap-x-3 text-ink-soft">
                        <span className="font-medium text-ink">{e.title}</span>
                        <span>{formatShortDate(e.startsAt, e.timezone)}</span>
                        <span className={e.attended ? 'text-[#1f7a3d]' : ''}>{e.attended ? 'Attended' : 'Not marked as attended'}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Section>

            {/* Badges */}
            <Section id="badges" label="Badges" title="Proof you" accent="showed up." intro="Badges are awarded by organizers: Attended when you're marked present at an event, Speaker for a talk, Shipped for a project built with the community.">
              {badges.length ? (
                <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {badges.map((b) => {
                    const Icon = BADGE_ICON[b.kind];
                    return (
                      <li key={b.id} className="flex gap-4 rounded-2xl border border-ink/10 bg-white p-5">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink text-flare">
                          <Icon className="h-5 w-5" aria-hidden />
                        </span>
                        <div className="min-w-0">
                          <p className="font-semibold">{BADGE_INFO[b.kind].label}</p>
                          <p className="text-sm text-ink-soft">{b.note || b.eventTitle || BADGE_INFO[b.kind].description}</p>
                          <p className="mt-1 text-xs text-[#726b63]">
                            {b.note && b.eventTitle ? `${b.eventTitle} · ` : ''}
                            {formatShortDate(b.awardedAt, 'Asia/Kolkata')}
                            {b.url && (
                              <>
                                {' · '}
                                <a href={b.url} target="_blank" rel="noopener noreferrer nofollow" className="underline underline-offset-2">
                                  link
                                </a>
                              </>
                            )}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <ul className="grid gap-4 sm:grid-cols-3">
                  {(Object.keys(BADGE_INFO) as (keyof typeof BADGE_INFO)[]).map((k) => {
                    const Icon = BADGE_ICON[k];
                    return (
                      <li key={k} className="rounded-2xl border border-dashed border-ink/20 bg-white/50 p-5">
                        <Icon className="h-5 w-5 text-ink/40" aria-hidden />
                        <p className="mt-3 font-semibold">{BADGE_INFO[k].label}</p>
                        <p className="text-sm text-ink-soft">{BADGE_INFO[k].description}</p>
                      </li>
                    );
                  })}
                </ul>
              )}
            </Section>

            {/* Buddies */}
            <Section id="buddies" label="Find a buddy" title="People worth" accent="meeting." intro="Members who opted in, matched on what you know and what you're learning.">
              {!member.openToMatch ? (
                <div className="flex flex-col items-start gap-4 rounded-[1.75rem] bg-espresso p-8 text-paper sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-4">
                    <Handshake className="mt-1 h-6 w-6 shrink-0 text-flare" aria-hidden />
                    <p className="max-w-xl">
                      Switch on <strong>Find me a buddy</strong> on your card to be matched with members who can teach you what you&apos;re learning, or who are learning it too.
                    </p>
                  </div>
                  <Link href="#card" className="inline-flex h-11 shrink-0 items-center rounded-full bg-paper px-5 text-sm font-semibold text-ink">
                    Edit my card
                  </Link>
                </div>
              ) : matches.length === 0 ? (
                <p className="rounded-[1.75rem] border border-dashed border-ink/20 bg-white/50 p-8 text-ink-soft">
                  No matches yet. Add more skills and learning goals to your card, and check back as more members join.
                </p>
              ) : (
                <ul className="grid gap-5 lg:grid-cols-3">
                  {matches.map((m) => {
                    const reasons = [
                      m.theyCanTeach.length && `Knows ${m.theyCanTeach.join(', ')}, which you're learning`,
                      m.youCanTeach.length && `Learning ${m.youCanTeach.join(', ')}, which you know`,
                      m.learningTogether.length && `Also learning ${m.learningTogether.join(', ')}`,
                      m.sharedSkills.length && `You both know ${m.sharedSkills.join(', ')}`,
                      m.sameCity && `Also in ${m.member.city}`,
                    ].filter(Boolean) as string[];
                    const contact = [
                      m.member.linkedin && { href: m.member.linkedin, label: 'LinkedIn' },
                      m.member.github && { href: m.member.github, label: 'GitHub' },
                      m.member.website && { href: m.member.website, label: 'Website' },
                    ].filter(Boolean) as { href: string; label: string }[];
                    return (
                      <li key={m.member.userId} className="flex flex-col rounded-[1.75rem] border border-ink/10 bg-white p-6">
                        <div className="flex items-center gap-3">
                          <span aria-hidden className="flex h-12 w-12 items-center justify-center rounded-full bg-clay font-semibold text-ink">
                            {initials(m.member.name)}
                          </span>
                          <div className="min-w-0">
                            <p className="font-semibold">{m.member.name}</p>
                            {m.member.headline && <p className="truncate text-sm text-ink-soft">{m.member.headline}</p>}
                          </div>
                        </div>
                        {m.intro && (
                          <p className="mt-4 flex gap-2 text-sm text-ink">
                            <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-ember" aria-label="AI-written intro" />
                            <span>{m.intro}</span>
                          </p>
                        )}
                        <ul className="mt-4 space-y-1 text-sm text-ink-soft">
                          {reasons.map((r) => (
                            <li key={r}>· {r}</li>
                          ))}
                        </ul>
                        <div className="mt-auto flex flex-wrap gap-2 pt-5">
                          {contact.length ? (
                            contact.map((c) => (
                              <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-1 rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper hover:bg-ember">
                                Say hi on {c.label} <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                              </a>
                            ))
                          ) : (
                            <p className="text-sm text-[#726b63]">No contact links yet. Find {m.member.name.split(' ')[0]} on Discord.</p>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </Section>
          </>
        )}

        <section id="account" className="scroll-mt-28 border-t border-ink/10 py-14 md:py-20">
          <SectionLabel className="mb-4">Sign-in and security</SectionLabel>
          <div className="rounded-[1.75rem] border border-ink/10 bg-white p-5 md:p-8">
            <AccountSettings />
          </div>
        </section>
      </main>
      <FooterNew />
    </div>
  );
}
