"use client";
import React from "react";
import Link from "next/link";
import { Calendar, Clock, User, Radio } from "lucide-react";
import { PageHeader } from "./ui/Launch";
import { ArrowButton } from "./ui/ArrowButton";
import EventsTabs from "./EventsTabs";
import { DISCORD_URL } from "@/lib/constants";

const upcomingEvents: {
  title: string;
  speaker: string;
  date: string;
  time: string;
  tag: string;
  youtubeId?: string;
}[] = [];

function Events() {
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
        {upcomingEvents.length > 0 ? (
          <ul className="space-y-5">
            {upcomingEvents.map((event) => (
              <li
                key={event.title}
                className="overflow-hidden rounded-[1.75rem] border border-ink/10 bg-white/70 p-6 md:p-8"
              >
                <span className="eyebrow rounded-full bg-ember/10 px-2.5 py-1 text-ember">{event.tag}</span>
                <h2 className="display mt-4 text-2xl text-ink md:text-4xl">{event.title}</h2>
                <div className="mt-5 flex flex-col flex-wrap gap-3 text-sm text-ink-soft sm:flex-row sm:gap-6">
                  <span className="flex items-center gap-2"><User className="h-4 w-4 text-ember" aria-hidden />{event.speaker}</span>
                  <span className="flex items-center gap-2"><Calendar className="h-4 w-4 text-ember" aria-hidden />{event.date}</span>
                  <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-ember" aria-hidden />{event.time}</span>
                </div>
                {event.youtubeId && (
                  <div className="mt-6 aspect-video w-full overflow-hidden rounded-2xl border border-ink/10">
                    <iframe
                      src={`https://www.youtube.com/embed/${event.youtubeId}`}
                      title={event.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="h-full w-full"
                    />
                  </div>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <div className="relative overflow-hidden rounded-[1.75rem] border border-dashed border-ink/20 bg-white/50 px-6 py-14 text-center md:py-20">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-ember/10 text-ember">
              <Radio className="h-6 w-6" aria-hidden />
            </div>
            <p className="eyebrow mt-6 text-ink/50">Nothing scheduled yet</p>
            <h2 className="display mt-3 text-3xl text-ink md:text-4xl">No upcoming sessions <span className="accent text-ember">right now.</span></h2>
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
