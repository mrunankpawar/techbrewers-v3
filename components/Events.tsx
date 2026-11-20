import React from "react";
import Link from "next/link";
import { Globe, MapPin, Radio, Users } from "lucide-react";
import { PageHeader } from "./ui/Launch";
import { ArrowButton } from "./ui/ArrowButton";
import EventsTabs from "./EventsTabs";
import { RsvpButton, type RsvpViewer } from "./member/RsvpButton";
import { DISCORD_URL } from "@/lib/constants";
import type { CommunityEvent } from "@/lib/events";
import { formatEventWhen } from "@/lib/time";

function DateBlock({ date, tz }: { date: Date; tz: string }) {
  const day = new Intl.DateTimeFormat("en-GB", { timeZone: tz, day: "numeric" }).format(date);
  const month = new Intl.DateTimeFormat("en-GB", { timeZone: tz, month: "short" }).format(date);
  return (
    <div aria-hidden className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-2xl bg-ink text-paper">
      <span className="display text-3xl leading-none">{day}</span>
      <span className="eyebrow mt-1 text-flare">{month}</span>
    </div>
  );
}

/** Upcoming TechThrusters events with RSVPs. Rendered on the server; events come from the database. */
function Events({ events, viewer }: { events: CommunityEvent[]; viewer: RsvpViewer }) {
  return (
    <>
      <PageHeader
        label="Events"
        title="Upcoming"
        accent="sessions."
        intro="Talks, workshops and live sessions from the TechThrusters community."
        photos={[
          { src: "/images/meetup/genai/session.jpg", alt: "Rahul Ambhore speaking at TechBrewers GenAI Meetup", caption: "Rahul Ambhore, TechBrewers GenAI Meetup" },
          { src: "/images/meetup/connect/stickers.jpg", alt: "Stickers for audience at TechBrewers Connect", caption: "Stickers at TechBrewers Connect" },
        ]}
      >
        <EventsTabs />
      </PageHeader>

      <section className="mx-auto max-w-7xl px-6 pb-20 md:pb-28">
        {events.length > 0 ? (
          <ul className="border-t border-ink/10">
            {events.map((e) => {
              const spotsLeft = e.capacity !== null ? Math.max(0, e.capacity - e.goingCount) : null;
              const place = e.venue ? `${e.venue}${e.city ? `, ${e.city}` : ""}` : "Online";
              return (
                <li key={e.id} id={e.slug} className="grid scroll-mt-28 gap-6 border-b border-ink/10 py-8 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-8 md:py-10">
                  <DateBlock date={e.startsAt} tz={e.timezone} />
                  <div className="min-w-0">
                    <h2 className="display text-2xl text-ink md:text-4xl">{e.title}</h2>
                    <p className="mt-2 text-sm font-medium text-ink">{formatEventWhen(e.startsAt, e.endsAt, e.timezone)}</p>
                    <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm text-ink-soft">
                      <span className="inline-flex items-center gap-1.5">
                        {e.venue ? <MapPin className="h-3.5 w-3.5 text-ember" aria-hidden /> : <Globe className="h-3.5 w-3.5 text-ember" aria-hidden />}
                        {place}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Users className="h-3.5 w-3.5 text-ember" aria-hidden />
                        {e.goingCount} going
                        {spotsLeft !== null && ` · ${spotsLeft === 0 ? "full" : `${spotsLeft} ${spotsLeft === 1 ? "spot" : "spots"} left`}`}
                      </span>
                    </div>
                    {e.description && <p className="mt-4 max-w-2xl whitespace-pre-line text-ink-soft">{e.description}</p>}
                    {e.onlineUrl && e.going && (
                      <p className="mt-3 text-sm">
                        <a href={e.onlineUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-[#ad450c] underline underline-offset-2">
                          Join link
                        </a>
                      </p>
                    )}
                  </div>
                  <RsvpButton eventId={e.id} going={e.going} full={spotsLeft === 0} open={e.rsvpOpen} viewer={viewer} />
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="relative overflow-hidden rounded-[1.75rem] border border-dashed border-ink/20 bg-white/50 px-6 py-14 text-center md:py-20">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-ember/10 text-ember">
              <Radio className="h-6 w-6" aria-hidden />
            </div>
            <p className="eyebrow mt-6 text-ink/50">Nothing scheduled yet</p>
            <h2 className="display mt-3 text-3xl text-ink md:text-4xl">
              No upcoming sessions <span className="accent text-ember">right now.</span>
            </h2>
            <p className="mx-auto mt-3 max-w-md text-ink-soft">
              Check back soon for new events and workshops. In the meantime, catch up on{" "}
              <Link href="/events/livestreams" className="font-medium text-ember underline underline-offset-2 hover:text-ember-bright">
                past livestreams
              </Link>
              .
            </p>
            <div className="mt-8 flex justify-center">
              <ArrowButton href={DISCORD_URL} external tone="ink">
                Join the Discord
              </ArrowButton>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default Events;
