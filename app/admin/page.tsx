import { canUseOrganizerTools } from '@/lib/auth';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import { listEvents, type CommunityEvent } from '@/lib/events';
import { formatShortDate } from '@/lib/time';

function Status({ e }: { e: CommunityEvent }) {
  const chips = [!e.published && 'Draft', e.published && !e.rsvpOpen && 'RSVPs closed', e.capacity !== null && e.goingCount >= e.capacity && 'Full'].filter(Boolean) as string[];
  return (
    <>
      {chips.map((c) => (
        <span key={c} className="rounded-full bg-paper-2 px-2.5 py-0.5 text-xs font-semibold text-ink-soft">
          {c}
        </span>
      ))}
    </>
  );
}

function EventList({ events, empty }: { events: CommunityEvent[]; empty: string }) {
  if (!events.length) return <p className="py-6 text-ink-soft">{empty}</p>;
  return (
    <ul className="border-t border-ink/10">
      {events.map((e) => (
        <li key={e.id}>
          <Link href={`/admin/events/${e.id}`} className="group flex flex-col gap-2 border-b border-ink/10 py-5 sm:flex-row sm:items-center sm:gap-6">
            <span className="w-32 shrink-0 text-sm font-medium text-ink-soft">{formatShortDate(e.startsAt, e.timezone)}</span>
            <span className="flex min-w-0 flex-1 flex-wrap items-center gap-2">
              <span className="font-semibold text-ink group-hover:text-ember">{e.title}</span>
              <Status e={e} />
            </span>
            <span className="text-sm text-ink-soft">
              {e.goingCount}
              {e.capacity !== null ? ` / ${e.capacity}` : ''} going
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default async function AdminEventsPage() {
  if (!(await canUseOrganizerTools())) return null; // the layout explains why
  const [upcoming, past] = await Promise.all([
    listEvents({ when: 'upcoming', includeUnpublished: true }),
    listEvents({ when: 'past', includeUnpublished: true }),
  ]);
  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h1 className="display text-4xl md:text-6xl">
          Community <span className="accent text-ember">events.</span>
        </h1>
        <Link href="/admin/events/new" className="inline-flex h-12 items-center gap-2 rounded-full bg-ember px-6 text-sm font-semibold text-paper hover:bg-ember-bright">
          <Plus className="h-4 w-4" aria-hidden /> New event
        </Link>
      </div>
      <section className="mt-12">
        <h2 className="eyebrow text-ink-soft">Upcoming</h2>
        <div className="mt-3">
          <EventList events={upcoming} empty="Nothing scheduled. Create the next event." />
        </div>
      </section>
      <section className="mt-12">
        <h2 className="eyebrow text-ink-soft">Past: mark attendance here</h2>
        <div className="mt-3">
          <EventList events={past} empty="No past events yet." />
        </div>
      </section>
    </>
  );
}
