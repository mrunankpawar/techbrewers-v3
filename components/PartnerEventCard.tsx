import { ArrowUpRight, Calendar, MapPin } from "lucide-react";
import type { PartnerEvent } from "@/data/partnerEvents";

type PartnerEventCardProps = {
  event: PartnerEvent;
};

/** One row in the partner events list: the whole row links to the event page. */
function PartnerEventCard({ event }: PartnerEventCardProps) {
  const eventPageUrl = event.eventPageUrl ?? event.registerUrl;

  return (
    <a
      href={eventPageUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group grid grid-cols-[1fr_auto] items-center gap-4 border-b border-ink/10 py-6 transition-colors hover:bg-white/60 sm:gap-8 sm:px-4 md:py-8"
    >
      <div className="min-w-0">
        <h3 className="display text-2xl text-ink transition-colors group-hover:text-ember md:text-4xl">
          {event.title}
        </h3>
        <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm text-ink-soft">
          <time dateTime={event.date} className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-ember" aria-hidden />
            {event.date}
          </time>
          {event.location ? (
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-ember" aria-hidden />
              {event.location}
            </span>
          ) : null}
        </div>
      </div>
      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-all group-hover:border-ember group-hover:bg-ember group-hover:text-paper">
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
        <span className="sr-only">Event page (opens in a new tab)</span>
      </span>
    </a>
  );
}

export default PartnerEventCard;
