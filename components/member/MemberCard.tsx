import { CalendarCheck, Github, Globe, Linkedin, MapPin, Mic2, Rocket } from 'lucide-react';
import type { Member } from '@/lib/members';
import type { BadgeKind } from '@/lib/badges';
import { cn } from '@/lib/utils';

export const BADGE_ICON: Record<BadgeKind, typeof Mic2> = { attended: CalendarCheck, speaker: Mic2, shipped: Rocket };
const BADGE_LABEL: Record<BadgeKind, [string, string]> = {
  attended: ['event', 'events'],
  speaker: ['talk', 'talks'],
  shipped: ['project', 'projects'],
};

export function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]!.toUpperCase())
    .join('');
}

/** The member's card: who they are, what they know, what they're learning, and their badges. */
export function MemberCard({
  member,
  badgeCounts,
  className,
}: {
  member: Pick<Member, 'name' | 'headline' | 'city' | 'skills' | 'learning' | 'github' | 'linkedin' | 'website' | 'createdAt'>;
  badgeCounts: Record<BadgeKind, number>;
  className?: string;
}) {
  const since = new Intl.DateTimeFormat('en-GB', { month: 'short', year: 'numeric' }).format(member.createdAt);
  const links = [
    member.github && { href: member.github, label: 'GitHub', Icon: Github },
    member.linkedin && { href: member.linkedin, label: 'LinkedIn', Icon: Linkedin },
    member.website && { href: member.website, label: 'Website', Icon: Globe },
  ].filter(Boolean) as { href: string; label: string; Icon: typeof Github }[];

  return (
    <article className={cn('overflow-hidden rounded-[1.75rem] border border-ink/10 bg-white shadow-[0_30px_60px_-35px_rgba(26,18,11,0.45)]', className)}>
      <div className="flex items-center justify-between bg-ember px-6 py-3 text-paper">
        <span className="eyebrow">TechThrusters member</span>
        <span className="text-xs text-paper/80">Since {since}</span>
      </div>
      <div className="p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <div aria-hidden className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-flare text-xl font-semibold text-ink">
            {initials(member.name) || '?'}
          </div>
          <div className="min-w-0">
            <h2 className="display text-3xl leading-tight text-ink sm:text-4xl">{member.name}</h2>
            {member.headline && <p className="mt-1 text-ink-soft">{member.headline}</p>}
            {member.city && (
              <p className="mt-1 inline-flex items-center gap-1 text-sm text-ink-soft">
                <MapPin className="h-3.5 w-3.5 text-ember" aria-hidden /> {member.city}
              </p>
            )}
          </div>
        </div>

        <dl className="mt-6 space-y-4">
          <div>
            <dt className="eyebrow text-ink/60">Knows</dt>
            <dd className="mt-2 flex flex-wrap gap-2">
              {member.skills.length ? (
                member.skills.map((s) => (
                  <span key={s} className="rounded-full border border-ink/15 px-3 py-1 text-sm text-ink">
                    {s}
                  </span>
                ))
              ) : (
                <span className="text-sm text-ink/60">Add your skills</span>
              )}
            </dd>
          </div>
          <div>
            <dt className="eyebrow text-ink/60">Learning</dt>
            <dd className="mt-2 flex flex-wrap gap-2">
              {member.learning.length ? (
                member.learning.map((s) => (
                  <span key={s} className="rounded-full bg-ember/10 px-3 py-1 text-sm text-[#ad450c]">
                    {s}
                  </span>
                ))
              ) : (
                <span className="text-sm text-ink/60">Add what you&apos;re learning</span>
              )}
            </dd>
          </div>
        </dl>

        <ul className="mt-6 grid grid-cols-3 gap-2 border-t border-ink/10 pt-5">
          {(Object.keys(BADGE_ICON) as BadgeKind[]).map((k) => {
            const Icon = BADGE_ICON[k];
            const n = badgeCounts[k];
            return (
              <li key={k} className={cn('flex items-center gap-2', n === 0 && 'opacity-40')}>
                <span className={cn('flex h-9 w-9 shrink-0 items-center justify-center rounded-full', n ? 'bg-ink text-flare' : 'bg-ink/5 text-ink/60')}>
                  <Icon className="h-4 w-4" aria-hidden />
                </span>
                <span className="text-sm leading-tight text-ink">
                  <span className="font-semibold tabular-nums">{n}</span> {BADGE_LABEL[k][n === 1 ? 0 : 1]}
                  <span className="sr-only"> ({k})</span>
                </span>
              </li>
            );
          })}
        </ul>

        {links.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {links.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-1.5 rounded-full bg-ink/5 px-3 py-1.5 text-sm text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                <Icon className="h-3.5 w-3.5" aria-hidden /> {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
