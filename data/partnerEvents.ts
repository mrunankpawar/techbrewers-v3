export type PartnerEvent = {
  id: string;
  title: string;
  /** Display date, e.g. "June 15, 2026" */
  date: string;
  /** Registration / ticket link */
  registerUrl: string;
  /** Event info page (defaults to registerUrl if omitted) */
  eventPageUrl?: string;
  /** City or venue area (optional) */
  location?: string;
};

/**
 * Community partner events TechThrusters is co-hosting or supporting.
 * Add entries here — each shows as a card on /events/partners.
 */
export const partnerEvents: PartnerEvent[] = [
  {
    id: "api-world-2026",
    title: "API World",
    date: "September 1–3, 2026",
    location: "Santa Clara Convention Center",
    registerUrl: "https://link.devnetwork.com/ZryGirAp",
    eventPageUrl: "https://apiworld.co/",
  },
  {
    id: "cloudx-2026",
    title: "CloudX",
    date: "September 1–3, 2026",
    location: "Santa Clara Convention Center",
    registerUrl: "https://link.devnetwork.com/ZryGirAp",
    eventPageUrl: "https://cloudxconf.com/",
  },
  {
    id: "ai-techworld-2026",
    title: "AI TechWorld",
    date: "September 1–3, 2026",
    location: "Santa Clara Convention Center",
    registerUrl: "https://link.devnetwork.com/ZryGirAp",
    eventPageUrl: "https://aitechworld.co/",
  },
];
