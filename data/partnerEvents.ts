export type PartnerEvent = {
  id: string;
  title: string;
  /** Display date, e.g. "June 15, 2026" */
  date: string;
  /** ISO start date (YYYY-MM-DD), used to sort, split upcoming/past and for structured data */
  startDate: string;
  /** ISO end date (YYYY-MM-DD); same as startDate for one-day events */
  endDate: string;
  /** Registration / ticket link */
  registerUrl: string;
  /** Event info page (defaults to registerUrl if omitted) */
  eventPageUrl?: string;
  /** Venue or area (optional) */
  location?: string;
  /** Where it happens, for structured data (optional) */
  city?: string;
  region?: string;
  country?: string;
};

/** True once the event's last day has passed (UTC). */
export function isPastEvent(e: PartnerEvent, now: Date = new Date()): boolean {
  return e.endDate < now.toISOString().slice(0, 10);
}

/**
 * Community partner events TechThrusters is co-hosting or supporting.
 * Add entries here — each shows as a card on /events/partners.
 */
export const partnerEvents: PartnerEvent[] = [
  {
    id: "api-world-2026",
    title: "API World",
    date: "September 1–3, 2026",
    startDate: "2026-09-01",
    endDate: "2026-09-03",
    location: "Santa Clara Convention Center",
    city: "Santa Clara",
    region: "CA",
    country: "US",
    registerUrl: "https://link.devnetwork.com/ZryGirAp",
    eventPageUrl: "https://apiworld.co/",
  },
  {
    id: "cloudx-2026",
    title: "CloudX",
    date: "September 1–3, 2026",
    startDate: "2026-09-01",
    endDate: "2026-09-03",
    location: "Santa Clara Convention Center",
    city: "Santa Clara",
    region: "CA",
    country: "US",
    registerUrl: "https://link.devnetwork.com/ZryGirAp",
    eventPageUrl: "https://cloudxconf.com/",
  },
  {
    id: "ai-techworld-2026",
    title: "AI TechWorld",
    date: "September 1–3, 2026",
    startDate: "2026-09-01",
    endDate: "2026-09-03",
    location: "Santa Clara Convention Center",
    city: "Santa Clara",
    region: "CA",
    country: "US",
    registerUrl: "https://link.devnetwork.com/ZryGirAp",
    eventPageUrl: "https://aitechworld.co/",
  },
];
