/**
 * Event times are stored in UTC with the event's IANA timezone, entered and
 * shown as local wall time where the event happens (Pune and the Bay Area
 * should both read naturally).
 */

export const EVENT_TIMEZONES = [
  { id: 'Asia/Kolkata', label: 'India (IST)' },
  { id: 'America/Los_Angeles', label: 'US Pacific (PT)' },
  { id: 'America/New_York', label: 'US Eastern (ET)' },
  { id: 'Europe/London', label: 'UK (GMT/BST)' },
  { id: 'UTC', label: 'UTC' },
] as const;

export const DEFAULT_TIMEZONE = 'Asia/Kolkata';

export function isKnownTimezone(tz: string): boolean {
  return EVENT_TIMEZONES.some((t) => t.id === tz);
}

/** Milliseconds the zone is ahead of UTC at the given instant. */
function zoneOffset(utcMs: number, tz: string): number {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: tz,
    hourCycle: 'h23',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).formatToParts(new Date(utcMs));
  const get = (t: string) => Number(parts.find((p) => p.type === t)?.value);
  const asUtc = Date.UTC(get('year'), get('month') - 1, get('day'), get('hour'), get('minute'), get('second'));
  return asUtc - utcMs;
}

/** "2026-12-05T18:00" in "Asia/Kolkata" -> the UTC instant. Returns null if malformed. */
export function wallTimeToUtc(wall: string, tz: string): Date | null {
  const m = wall.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})$/);
  if (!m) return null;
  const guess = Date.UTC(+m[1], +m[2] - 1, +m[3], +m[4], +m[5]);
  let utc = guess - zoneOffset(guess, tz);
  utc = guess - zoneOffset(utc, tz); // settle across DST changes
  const d = new Date(utc);
  return Number.isNaN(d.getTime()) ? null : d;
}

/** The UTC instant as "YYYY-MM-DDTHH:mm" wall time in tz (for <input type="datetime-local">). */
export function utcToWallTime(date: Date, tz: string): string {
  const shifted = new Date(date.getTime() + zoneOffset(date.getTime(), tz));
  return shifted.toISOString().slice(0, 16);
}

/** "Sat, 5 Dec 2026 · 6:00 – 9:00 PM IST" */
export function formatEventWhen(start: Date, end: Date | null, tz: string): string {
  const day = new Intl.DateTimeFormat('en-GB', { timeZone: tz, weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' }).format(start);
  const time = (d: Date) => new Intl.DateTimeFormat('en-US', { timeZone: tz, hour: 'numeric', minute: '2-digit' }).format(d);
  const zone =
    tz === 'Asia/Kolkata'
      ? 'IST' // browsers print "GMT+5:30"
      : new Intl.DateTimeFormat('en-US', { timeZone: tz, timeZoneName: 'short' }).formatToParts(start).find((p) => p.type === 'timeZoneName')?.value ?? tz;
  const sameDay = end && utcToWallTime(end, tz).slice(0, 10) === utcToWallTime(start, tz).slice(0, 10);
  if (end && sameDay) return `${day} · ${time(start)} – ${time(end)} ${zone}`;
  if (end) {
    const endDay = new Intl.DateTimeFormat('en-GB', { timeZone: tz, day: 'numeric', month: 'short' }).format(end);
    return `${day} · ${time(start)} – ${endDay}, ${time(end)} ${zone}`;
  }
  return `${day} · ${time(start)} ${zone}`;
}

/** "5 Dec" in the event's zone, for compact lists. */
export function formatShortDate(d: Date, tz: string): string {
  return new Intl.DateTimeFormat('en-GB', { timeZone: tz, day: 'numeric', month: 'short', year: 'numeric' }).format(d);
}
