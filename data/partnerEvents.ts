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
    id: "punefoss-4",
    title: "PuneFOSS 4.0",
    date: "June 20, 2026",
    location: "Pune",
    registerUrl: "https://fossunited.org/c/pune/punefoss4",
  },
];
