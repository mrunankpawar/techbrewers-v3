import { canUseOrganizerTools } from '@/lib/auth';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Check } from 'lucide-react';
import { EventForm } from '@/components/admin/EventForm';
import { deleteEventAction, setAttendanceAction } from '@/app/actions/admin';
import { getEvent, listAttendees } from '@/lib/events';
import { formatEventWhen, utcToWallTime } from '@/lib/time';

export default async function EditEventPage({ params, searchParams }: { params: { id: string }; searchParams: { created?: string } }) {
  if (!(await canUseOrganizerTools())) return null; // the layout explains why
  const id = Number(params.id);
  if (!Number.isInteger(id) || id < 1) notFound();
  const event = await getEvent(id);
  if (!event) notFound();
  const attendees = await listAttendees(id);
  const attendedCount = attendees.filter((a) => a.attended).length;

  return (
    <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
      <div>
        <Link href="/admin" className="text-sm font-semibold text-ink-soft hover:text-ink">
          ‹ All events
        </Link>
        <h1 className="display mt-4 text-4xl md:text-5xl">{event.title}</h1>
        <p className="mt-3 text-ink-soft">
          {formatEventWhen(event.startsAt, event.endsAt, event.timezone)}
          {event.published && (
            <>
              {' · '}
              <Link href={`/events/upcoming#${event.slug}`} className="font-medium text-[#ad450c] underline underline-offset-2">
                View on site
              </Link>
            </>
          )}
        </p>
        {searchParams.created && <p role="status" className="mt-4 rounded-xl bg-[#1f7a3d]/10 px-4 py-3 text-sm font-medium text-[#1f7a3d]">Event created.</p>}
        <div className="mt-10">
          <EventForm
            values={{
              id: event.id,
              title: event.title,
              description: event.description,
              startsAt: utcToWallTime(event.startsAt, event.timezone),
              endsAt: event.endsAt ? utcToWallTime(event.endsAt, event.timezone) : '',
              timezone: event.timezone,
              venue: event.venue,
              city: event.city,
              onlineUrl: event.onlineUrl,
              capacity: event.capacity?.toString() ?? '',
              rsvpOpen: event.rsvpOpen,
              published: event.published,
            }}
          />
        </div>
        <details className="mt-14 rounded-2xl border border-[#b42318]/30 p-5">
          <summary className="cursor-pointer text-sm font-semibold text-[#b42318]">Delete this event</summary>
          <p className="mt-3 text-sm text-ink-soft">
            This removes the event and its {event.goingCount} RSVP{event.goingCount === 1 ? '' : 's'}. Attended badges for it are removed too. This cannot be undone; unpublish instead to just hide it.
          </p>
          <form action={deleteEventAction} className="mt-4">
            <input type="hidden" name="id" value={event.id} />
            <button type="submit" className="inline-flex h-10 items-center rounded-full bg-[#b42318] px-5 text-sm font-semibold text-white hover:bg-[#912018]">
              Delete event
            </button>
          </form>
        </details>
      </div>

      <aside className="lg:sticky lg:top-28 lg:self-start">
        <div className="rounded-[1.75rem] border border-ink/10 bg-white p-6 md:p-8">
          <h2 className="text-xl font-semibold tracking-tight">Attendees</h2>
          <p className="mt-1 text-sm text-ink-soft">
            {event.goingCount} RSVP{event.goingCount === 1 ? '' : 's'}
            {event.capacity !== null ? ` of ${event.capacity}` : ''} · {attendedCount} marked attended. Marking someone attended gives them the Attended badge.
          </p>
          {attendees.length ? (
            <ul className="mt-5 divide-y divide-ink/10 border-y border-ink/10">
              {attendees.map((a) => (
                <li key={a.userId} className="flex items-center justify-between gap-4 py-3">
                  <span className="min-w-0">
                    <span className="block truncate font-medium text-ink">{a.name}</span>
                    {a.headline && <span className="block truncate text-sm text-ink-soft">{a.headline}</span>}
                  </span>
                  <form action={setAttendanceAction}>
                    <input type="hidden" name="eventId" value={event.id} />
                    <input type="hidden" name="userId" value={a.userId} />
                    <input type="hidden" name="attended" value={a.attended ? '0' : '1'} />
                    <button
                      type="submit"
                      aria-pressed={a.attended}
                      aria-label={`${a.attended ? 'Unmark' : 'Mark'} ${a.name} as attended`}
                      className={
                        a.attended
                          ? 'inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full bg-ink px-4 text-sm font-semibold text-paper'
                          : 'inline-flex h-9 shrink-0 items-center rounded-full border border-ink/15 px-4 text-sm font-semibold text-ink hover:border-ink'
                      }
                    >
                      {a.attended ? (
                        <>
                          <Check className="h-4 w-4" aria-hidden /> Attended
                        </>
                      ) : (
                        'Mark attended'
                      )}
                    </button>
                  </form>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-5 text-sm text-ink-soft">No RSVPs yet.</p>
          )}
        </div>
      </aside>
    </div>
  );
}
