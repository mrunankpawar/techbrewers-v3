import Link from "next/link";
import type { PartnerEvent } from "@/data/partnerEvents";

type PartnerEventCardProps = {
  event: PartnerEvent;
};

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
      aria-hidden
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function PartnerEventCard({ event }: PartnerEventCardProps) {
  const eventPageUrl = event.eventPageUrl ?? event.registerUrl;

  return (
    <article className="group relative flex flex-col items-center justify-between rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-4 transition-colors duration-300 hover:border-orange-500/30 md:flex-row md:items-start">
      <div className="flex w-full flex-col items-center gap-1 text-center md:items-start md:text-left">
        <h3 className="font-medium text-white">{event.title}</h3>
        <time dateTime={event.date} className="text-sm" style={{ color: '#C54F0E' }}>
          {event.date}
        </time>
        {event.location ? (
          <p className="text-sm text-gray-400">{event.location}</p>
        ) : null}
      </div>

      <Link
        href={eventPageUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-4 inline-flex items-center gap-2 rounded-xl border border-orange-500/30 bg-gradient-to-r from-orange-500/10 to-orange-600/10 px-4 py-2 text-sm font-medium text-orange-300 transition-colors duration-200 hover:border-orange-500/50 hover:text-orange-200 md:mt-0 md:shrink-0"
      >
        Event page
        <ArrowIcon />
      </Link>
    </article>
  );
}

export default PartnerEventCard;
