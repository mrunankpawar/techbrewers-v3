import { Search } from 'lucide-react';
import { canUseOrganizerTools } from '@/lib/auth';
import { AwardForm } from '@/components/admin/AwardForm';
import { revokeBadgeAction } from '@/app/actions/admin';
import { inputClass } from '@/components/ui/Form';
import { searchMembers } from '@/lib/members';
import { listEvents } from '@/lib/events';
import { BADGE_INFO, listRecentAwards } from '@/lib/badges';

export default async function AdminBadgesPage({ searchParams }: { searchParams: { q?: string } }) {
  if (!(await canUseOrganizerTools())) return null; // the layout explains why
  const q = typeof searchParams.q === 'string' ? searchParams.q.slice(0, 80) : '';
  const [members, past, upcoming, awards] = await Promise.all([
    q ? searchMembers(q, 8) : Promise.resolve([]),
    listEvents({ when: 'past', includeUnpublished: true }),
    listEvents({ when: 'upcoming', includeUnpublished: true }),
    listRecentAwards(),
  ]);
  const events = [...upcoming, ...past].map((e) => ({ id: e.id, title: e.title }));

  return (
    <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
      <div>
        <h1 className="display text-4xl md:text-6xl">
          Award a <span className="accent text-ember">badge.</span>
        </h1>
        <p className="mt-4 max-w-xl text-ink-soft">
          Speaker is for giving a talk or workshop. Shipped is for launching something built with the community. Attended badges come from marking attendance on an event.
        </p>
        <form role="search" className="mt-8 flex gap-2" action="/admin/badges">
          <label htmlFor="member-q" className="sr-only">
            Search members by name
          </label>
          <input id="member-q" name="q" defaultValue={q} placeholder="Search members by name" className={`${inputClass} mt-0`} />
          <button type="submit" aria-label="Search" className="inline-flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-xl bg-ink text-paper hover:bg-espresso">
            <Search className="h-5 w-5" aria-hidden />
          </button>
        </form>
        {q && (
          <div className="mt-8 space-y-6">
            {members.length ? (
              members.map((m) => (
                <div key={m.userId} className="rounded-[1.75rem] border border-ink/10 bg-white p-6">
                  <p className="font-semibold text-ink">{m.name}</p>
                  {m.headline && <p className="text-sm text-ink-soft">{m.headline}</p>}
                  <div className="mt-5">
                    <AwardForm userId={m.userId} name={m.name.split(' ')[0]} events={events} />
                  </div>
                </div>
              ))
            ) : (
              <p className="text-ink-soft">No members match &ldquo;{q}&rdquo;. They need to save a member card first.</p>
            )}
          </div>
        )}
      </div>

      <aside>
        <h2 className="text-xl font-semibold tracking-tight">Recently awarded</h2>
        {awards.length ? (
          <ul className="mt-4 divide-y divide-ink/10 border-y border-ink/10">
            {awards.map((a) => (
              <li key={a.id} className="flex items-center justify-between gap-4 py-3">
                <span className="min-w-0 text-sm">
                  <span className="font-semibold text-ink">{a.name}</span>
                  <span className="text-ink-soft">
                    {' '}
                    · {BADGE_INFO[a.kind].label}: {a.note}
                  </span>
                </span>
                <form action={revokeBadgeAction}>
                  <input type="hidden" name="id" value={a.id} />
                  <button type="submit" className="shrink-0 text-sm font-semibold text-[#b42318] hover:underline" aria-label={`Revoke ${BADGE_INFO[a.kind].label} badge from ${a.name}`}>
                    Revoke
                  </button>
                </form>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-sm text-ink-soft">No badges awarded yet.</p>
        )}
      </aside>
    </div>
  );
}
