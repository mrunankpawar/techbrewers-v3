import { db } from './db';
import { LIMITS, ValidationError, cleanText, cleanUrl } from './validation';

export type BadgeKind = 'attended' | 'speaker' | 'shipped';

export const BADGE_INFO: Record<BadgeKind, { label: string; description: string }> = {
  attended: { label: 'Attended', description: 'Showed up to a TechThrusters event' },
  speaker: { label: 'Speaker', description: 'Gave a talk or ran a session' },
  shipped: { label: 'Shipped', description: 'Shipped a project with the community' },
};

export type Badge = {
  id: number;
  kind: BadgeKind;
  note: string;
  url: string;
  eventId: number | null;
  eventTitle: string | null;
  awardedAt: Date;
};

type Row = { id: number; kind: BadgeKind; note: string; url: string; event_id: number | null; event_title: string | null; awarded_at: Date };

export async function listBadges(userId: string): Promise<Badge[]> {
  const sql = await db();
  const rows = await sql<Row[]>`
    SELECT b.id, b.kind, b.note, b.url, b.event_id, e.title AS event_title, b.awarded_at
    FROM badges b LEFT JOIN events e ON e.id = b.event_id
    WHERE b.user_id = ${userId}
    ORDER BY b.awarded_at DESC`;
  return rows.map((r) => ({
    id: r.id,
    kind: r.kind,
    note: r.note,
    url: r.url,
    eventId: r.event_id,
    eventTitle: r.event_title,
    awardedAt: r.awarded_at,
  }));
}

/** Badge counts per kind, for the member card. */
export function countBadges(badges: Badge[]): Record<BadgeKind, number> {
  const out: Record<BadgeKind, number> = { attended: 0, speaker: 0, shipped: 0 };
  for (const b of badges) out[b.kind] += 1;
  return out;
}

/** Organizers award Speaker and Shipped badges; Attended comes from marking attendance. */
export async function awardBadge(organizerId: string, input: Record<string, unknown>) {
  const kind = input.kind;
  if (kind !== 'speaker' && kind !== 'shipped') throw new ValidationError('Choose Speaker or Shipped.');
  const userId = typeof input.userId === 'string' ? input.userId : '';
  if (!userId) throw new ValidationError('Choose a member.');
  const note = cleanText(input.note, LIMITS.note, kind === 'speaker' ? 'Talk title' : 'Project name', true);
  const url = cleanUrl(input.url, 'Link');
  const eventIdRaw = typeof input.eventId === 'string' ? input.eventId : '';
  const eventId = eventIdRaw ? Number(eventIdRaw) : null;
  if (eventId !== null && !Number.isInteger(eventId)) throw new ValidationError('Choose an event from the list.');
  const sql = await db();
  const [member] = await sql`SELECT 1 FROM members WHERE user_id = ${userId}`;
  if (!member) throw new ValidationError('That member has not set up a card yet.');
  await sql`
    INSERT INTO badges (user_id, kind, event_id, note, url, awarded_by)
    VALUES (${userId}, ${kind}, ${eventId}, ${note}, ${url}, ${organizerId})`;
}

export async function revokeBadge(badgeId: number) {
  const sql = await db();
  // Attended badges follow attendance; revoke those by unmarking attendance.
  await sql`DELETE FROM badges WHERE id = ${badgeId} AND kind <> 'attended'`;
}

export async function listRecentAwards(limit = 20) {
  const sql = await db();
  return sql<{ id: number; kind: BadgeKind; note: string; name: string; user_id: string; awarded_at: Date }[]>`
    SELECT b.id, b.kind, b.note, m.name, b.user_id, b.awarded_at
    FROM badges b JOIN members m ON m.user_id = b.user_id
    WHERE b.kind <> 'attended'
    ORDER BY b.awarded_at DESC LIMIT ${limit}`;
}
