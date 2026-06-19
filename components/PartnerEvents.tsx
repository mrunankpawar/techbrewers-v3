'use client';

import { motion } from 'framer-motion';
import { partnerEvents } from "@/data/partnerEvents";
import PartnerEventCard from "@/components/PartnerEventCard";

const ease = [0.22, 1, 0.36, 1] as const;

function PartnerEvents() {
  const hasEvents = partnerEvents.length > 0;

  return (
    <section
      id="community-partners"
      className="relative mx-auto w-full max-w-6xl scroll-mt-28 px-5 pb-16 md:px-8 md:pb-24"
      aria-labelledby="community-partners-heading"
    >
      <motion.div
        className="mx-auto max-w-3xl text-center"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.42, ease }}
      >
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-orange-400/90">
          Community partners
        </p>
        <h1
          id="community-partners-heading"
          className="text-3xl font-bold text-heading-gradient md:text-5xl"
        >
          Partner events & meetups
        </h1>
        <p className="mt-4 text-base text-gray-400 md:text-lg">
          Events and meetups we are supporting alongside other developer
          communities.
        </p>
      </motion.div>

      {hasEvents ? (
        <ul className="mx-auto mt-12 max-w-2xl w-full list-none space-y-4 px-1">
          {partnerEvents.map((event, index) => (
            <motion.li
              key={event.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.08, ease }}
            >
              <PartnerEventCard event={event} />
            </motion.li>
          ))}
        </ul>
      ) : (
        <motion.div
          className="mx-auto mt-10 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease }}
        >
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] px-6 py-8 text-center backdrop-blur-md">
            <p className="text-gray-300">Partner events will be listed here soon.</p>
            <p className="mt-2 text-sm text-gray-500">
              Check back for meetups we are co-hosting with other communities.
            </p>
          </div>
        </motion.div>
      )}
    </section>
  );
}

export default PartnerEvents;
