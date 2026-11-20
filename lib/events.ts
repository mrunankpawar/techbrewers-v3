import { db } from './db';
import { LIMITS, ValidationError, cleanLongText, cleanText, cleanUrl, slugify } from './validation';
import { DEFAULT_TIMEZONE, isKnownTimezone, wallTimeToUtc } from './time';

export type CommunityEvent = {
  id: number;
  slug: string;
  title: string;
  description: string;
  startsAt: Date;
  endsAt: Date | null;
  timezone: string;
  venue: string;
  city: string;
  onlineUrl: string;
  capacity: number | null;
  rsvpOpen: boolean;
  published: boolean;
  goingCount: number;
  /** Whether the current member has RSVP'd (false when signed out) */
  going: boolean;
};

type Row = {
  id: number;
  slug: string;
  title: string;
  description: string;
  starts_at: Date;
  ends_at: Date | null;
  timezone: string;
  venue: string;
  city: string;
  online_url: string;
  capacity: number | null;
  rsvp_open: boolean;
  published: boolean;
  going_count: number;
  going: boolean;
};

const toEvent = (r: Row): CommunityEvent => ({
  id: r.id,
  slug: r.slug,
  title: r.title,
  description: r.description,
  startsAt: r.starts_at,
  endsAt: r.ends_at,
  timezone: r.timezone,
  venue: r.venue,
  city: r.city,
  onlineUrl: r.online_url,
  capacity: r.capacity,
  rsvpOpen: r.rsvp_open,
  published: r.published,
  goingCount: Number(r.going_count),
  going: r.going,
});

/** An event is over once its end (or, without an end, its start + 4h) has passed. */
const OVER = `coalesce(e.ends_at, e.starts_at + interval '4 hours') < now()`;

export async function listEvents(opts: { userId?: string | null; when: 'upcoming' | 'past'; includeUnpublished?: boolean }) {
  const sql = await db();
  const uid = opts.userId ?? '';
  const rows = await sql<Row[]>`
    SELECT e.*,
      (SELECT count(*) FROM rsvps r WHERE r.event_id = e.id)::int AS going_count,
      EXISTS (SELECT 1 FROM rsvps r WHERE r.event_id = e.id AND r.user_id = ${uid}) AS going
    FROM events e
    WHERE ${opts.includeUnpublished ? sql`true` : sql`e.published`}
      AND ${opts.when === 'past' ? sql.unsafe(OVER) : sql.unsafe(`NOT (${OVER})`)}
    ORDER BY e.starts_at ${opts.when === 'past' ? sql`DESC` : sql`ASC`}
    LIMIT 100`;
  return rows.map(toEvent);
}

export async function getEvent(id: number, userId?: string | null): Promise<CommunityEvent | null> {
  const sql = await db();
  const [row] = await sql<Row[]>`
    SELECT e.*,
      (SELECT count(*) FROM rsvps r WHERE r.event_id = e.id)::int AS going_count,
      EXISTS (SELECT 1 FROM rsvps r WHERE r.event_id = e.id AND r.user_id = ${userId ?? ''}) AS going
    FROM events e WHERE e.id = ${id}`;
  return row ? toEvent(row) : null;
}

/** Events this member has RSVP'd to, soonest first, with whether they attended. */
export async function listMemberRsvps(userId: string) {
  const sql = await db();
  const rows = await sql<(Row & { attended: boolean; over: boolean })[]>`
    SELECT e.*, r.attended, true AS going,
      (SELECT count(*) FROM rsvps x WHERE x.event_id = e.id)::int AS going_count,
      ${sql.unsafe(OVER)} AS over
    FROM rsvps r JOIN events e ON e.id = r.event_id
    WHERE r.user_id = ${userId}
    ORDER BY e.starts_at DESC`;
  return rows.map((r) => ({ ...toEvent(r), attended: r.attended, over: r.over }));
}

export class RsvpError extends Error {}

/** RSVP, honouring capacity and the event being open. Requires a member card (FK). */
export async function rsvp(userId: string, eventId: number) {
  const sql = await db();
  await sql.begin(async (tx) => {
    const [e] = await tx<{ capacity: number | null; rsvp_open: boolean; published: boolean; over: boolean }[]>`
      SELECT capacity, rsvp_open, published, ${tx.unsafe(OVER)} AS over FROM events e WHERE id = ${eventId} FOR UPDATE`;
    if (!e || !e.published) throw new RsvpError('That event no longer exists.');
    if (e.over) throw new RsvpError('This event has already happened.');
    if (!e.rsvp_open) throw new RsvpError('RSVPs for this event are closed.');
    const [{ n }] = await tx<{ n: number }[]>`SELECT count(*)::int AS n FROM rsvps WHERE event_id = ${eventId}`;
    const [mine] = await tx`SELECT 1 FROM rsvps WHERE event_id = ${eventId} AND user_id = ${userId}`;
    if (mine) return;
    if (e.capacity !== null && n >= e.capacity) throw new RsvpError('This event is full.');
    await tx`INSERT INTO rsvps (event_id, user_id) VALUES (${eventId}, ${userId}) ON CONFLICT DO NOTHING`;
  });
}

export async function cancelRsvp(userId: string, eventId: number) {
  const sql = await db();
  // keep the record once attendance was marked
  await sql`DELETE FROM rsvps WHERE event_id = ${eventId} AND user_id = ${userId} AND NOT attended`;
}

// ---------- organizer ----------

export type EventInput = Record<string, unknown>;

/** <input type="datetime-local"> value, read as wall time in the event's timezone. */
function parseDateTime(value: unknown, tz: string, field: string, required: boolean): Date | null {
  const s = typeof value === 'string' ? value.trim() : '';
  if (!s) {
    if (required) throw new ValidationError(`${field} is required.`);
    return null;
  }
  const d = wallTimeToUtc(s, tz);
  if (!d) throw new ValidationError(`${field} is not a valid date and time.`);
  return d;
}

export function cleanEventInput(input: EventInput) {
  const title = cleanText(input.title, LIMITS.eventTitle, 'Title', true);
  const timezone = typeof input.timezone === 'string' && isKnownTimezone(input.timezone) ? input.timezone : DEFAULT_TIMEZONE;
  const startsAt = parseDateTime(input.startsAt, timezone, 'Start', true)!;
  const endsAt = parseDateTime(input.endsAt, timezone, 'End', false);
  if (endsAt && endsAt <= startsAt) throw new ValidationError('End must be after the start.');
  const capRaw = typeof input.capacity === 'string' ? input.capacity.trim() : '';
  const capacity = capRaw ? Number(capRaw) : null;
  if (capacity !== null && (!Number.isInteger(capacity) || capacity < 1 || capacity > 100000))
    throw new ValidationError('Capacity must be a whole number above 0, or empty for no limit.');
  const venue = cleanText(input.venue, LIMITS.venue, 'Venue');
  const onlineUrl = cleanUrl(input.onlineUrl, 'Online link');
  if (!venue && !onlineUrl) throw new ValidationError('Add a venue or an online link.');
  return {
    title,
    description: cleanLongText(input.description, LIMITS.eventDescription, 'Description'),
    starts_at: startsAt,
    ends_at: endsAt,
    timezone,
    venue,
    city: cleanText(input.city, LIMITS.city, 'City'),
    online_url: onlineUrl,
    capacity,
    rsvp_open: input.rsvpOpen === true || input.rsvpOpen === 'on',
    published: input.published === true || input.published === 'on',
  };
}

export async function createEvent(createdBy: string, input: EventInput): Promise<number> {
  const v = cleanEventInput(input);
  const sql = await db();
  const base = `${slugify(v.title)}-${v.starts_at.toISOString().slice(0, 10)}`;
  for (let i = 0; i < 20; i++) {
    const slug = i ? `${base}-${i + 1}` : base;
    const rows = await sql<{ id: number }[]>`
      INSERT INTO events ${sql({ ...v, slug, created_by: createdBy })}
      ON CONFLICT (slug) DO NOTHING RETURNING id`;
    if (rows.length) return rows[0].id;
  }
  throw new ValidationError('Could not create a unique link for this event; change the title.');
}

export async function updateEvent(id: number, input: EventInput) {
  const v = cleanEventInput(input);
  const sql = await db();
  const rows = await sql`UPDATE events SET ${sql(v)}, updated_at = now() WHERE id = ${id} RETURNING id`;
  if (!rows.length) throw new ValidationError('That event no longer exists.');
}

export async function deleteEvent(id: number) {
  const sql = await db();
  await sql`DELETE FROM events WHERE id = ${id}`;
}

export type Attendee = { userId: string; name: string; headline: string; rsvpAt: Date; attended: boolean };

export async function listAttendees(eventId: number): Promise<Attendee[]> {
  const sql = await db();
  const rows = await sql<{ user_id: string; name: string; headline: string; created_at: Date; attended: boolean }[]>`
    SELECT m.user_id, m.name, m.headline, r.created_at, r.attended
    FROM rsvps r JOIN members m ON m.user_id = r.user_id
    WHERE r.event_id = ${eventId} ORDER BY m.name`;
  return rows.map((r) => ({ userId: r.user_id, name: r.name, headline: r.headline, rsvpAt: r.created_at, attended: r.attended }));
}

/** Marks attendance and keeps the Attended badge in step with it. */
export async function setAttendance(eventId: number, userId: string, attended: boolean, organizerId: string) {
  const sql = await db();
  await sql.begin(async (tx) => {
    const rows = await tx`UPDATE rsvps SET attended = ${attended} WHERE event_id = ${eventId} AND user_id = ${userId} RETURNING 1`;
    if (!rows.length) throw new ValidationError('That member has no RSVP for this event.');
    if (attended) {
      await tx`
        INSERT INTO badges (user_id, kind, event_id, awarded_by)
        VALUES (${userId}, 'attended', ${eventId}, ${organizerId})
        ON CONFLICT (user_id, event_id) WHERE kind = 'attended' DO NOTHING`;
    } else {
      await tx`DELETE FROM badges WHERE user_id = ${userId} AND event_id = ${eventId} AND kind = 'attended'`;
    }
  });
}
