'use client';

import { motion } from 'framer-motion';
import { partnerEvents } from "@/data/partnerEvents";
import PartnerEventCard from "@/components/PartnerEventCard";
import { PageHeader } from './ui/Launch';
import EventsTabs from './EventsTabs';

const ease = [0.22, 1, 0.36, 1] as const;

function PartnerEvents() {
  const hasEvents = partnerEvents.length > 0;

  return (
    <>
      <PageHeader
        label="Community partners"
        title="Partner events"
        accent="& meetups."
        intro="Events and meetups we are supporting alongside other developer communities."
        photos={[
          { src: "/images/meetup/genai/group3.jpg", alt: "Event attendees at TechBrewers GenAI Meetup", caption: "Attendees, TechBrewers GenAI Meetup" },
          { src: "/images/meetup/meetup1/group1.jpg", alt: "Group photo at TechBrewers Community Meetup 1.0", caption: "Meetup 1.0" },
        ]}
      >
        <EventsTabs />
      </PageHeader>

      <section
        id="community-partners"
        className="mx-auto w-full max-w-7xl scroll-mt-28 px-6 pb-20 md:pb-28"
        aria-label="Partner events"
      >
        {hasEvents ? (
          <ul className="border-t border-ink/10">
            {partnerEvents.map((event, index) => (
              <motion.li
                key={event.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.06, ease }}
              >
                <PartnerEventCard event={event} />
              </motion.li>
            ))}
          </ul>
        ) : (
          <div className="rounded-[1.75rem] border border-dashed border-ink/20 bg-white/50 px-6 py-14 text-center">
            <p className="display text-2xl text-ink md:text-3xl">Partner events will be listed here <span className="accent text-ember">soon.</span></p>
            <p className="mt-3 text-ink-soft">
              Check back for meetups we are co-hosting with other communities.
            </p>
          </div>
        )}
      </section>
    </>
  );
}

export default PartnerEvents;
