"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { ArrowUpRight, Play } from "lucide-react";
import { PageHeader } from "./ui/Launch";
import EventsTabs from "./EventsTabs";
import { livestreams } from "@/data/livestreams";

function ExpandableCards() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const [isClosing, setIsClosing] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setActive(null);
      setIsClosing(false);
    }, 200);
  };

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && active && typeof active === "object") {
        handleClose();
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => handleClose());

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn"
              }
            }}
            className="fixed inset-0 z-10 h-full w-full bg-ink/70 backdrop-blur-md"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.2,
                },
              }}
              className="absolute right-3 top-3 z-[110] flex h-9 w-9 items-center justify-center rounded-full bg-paper lg:hidden"
              aria-label="Close"
              onClick={handleClose}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              key={`card-${active.title}-${id}`}
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ 
                opacity: 0, 
                scale: 0.95,
                transition: {
                  duration: 0.2,
                  ease: "easeIn",
                  layout: { duration: 0 }
                }
              }}
              layout={!isClosing}
              className="flex h-full w-full max-w-[560px] flex-col overflow-hidden border border-ink/10 bg-paper text-ink shadow-2xl sm:rounded-[1.75rem] md:h-fit md:max-h-[90%]"
            >
              <motion.div layoutId={`image-${active.title}-${id}`} layout={!isClosing}>
                <Image
                  priority
                  width={1120}
                  height={630}
                  src={active.src}
                  alt={active.title}
                  className="aspect-video h-auto w-full object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex items-start justify-between gap-4 p-5 md:p-6">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      layout={!isClosing}
                      className="display text-2xl"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      layout={!isClosing}
                      className="mt-1 text-sm font-medium text-ember"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    layout={!isClosing}
                    href={active.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-ember py-2 pl-4 pr-3 text-sm font-semibold text-paper transition-colors hover:bg-ember-bright"
                  >
                    <Play className="h-3.5 w-3.5 fill-current" aria-hidden />
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="relative px-5 md:px-6">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex h-48 flex-col items-start gap-4 overflow-auto pb-10 text-sm leading-relaxed text-ink-soft [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] md:h-fit md:text-base"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <PageHeader
        label="Past events"
        title="YouTube"
        accent="livestreams."
        intro="Rewatch recorded talks and community sessions from our YouTube channel."
        photos={[
          { src: "/images/meetup/celcon/mrunankspeak.jpg", alt: "Mrunank addressing the audience at TechBrewers CelCon", caption: "Mrunank at TechBrewers CelCon" },
          { src: "/images/meetup/meetup1/tj.jpg", alt: "Touhid and Jeenika speaking at TechBrewers Community Meetup 1.0", caption: "Meetup 1.0" },
        ]}
      >
        <EventsTabs />
      </PageHeader>
      <section
        id="past-livestreams"
        className="mx-auto w-full max-w-7xl scroll-mt-28 px-6 pb-20 md:pb-28"
        aria-label="Past livestreams"
      >
        <ul className="grid list-none gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <motion.li
              layoutId={`card-${card.title}-${id}`}
              key={`card-${card.title}-${id}`}
              className="group"
            >
              <button
                type="button"
                onClick={() => setActive(card)}
                className="block w-full text-left focus-visible:outline-none"
                aria-label={`${card.title} with ${card.description}: show details`}
              >
                <motion.div
                  layoutId={`image-${card.title}-${id}`}
                  className="relative overflow-hidden rounded-[1.25rem] border border-ink/10 bg-espresso group-focus-visible:ring-2 group-focus-visible:ring-ember"
                >
                  <Image
                    width={640}
                    height={360}
                    src={card.src}
                    alt=""
                    className="aspect-video w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <span className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-ember text-paper shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Play className="ml-0.5 h-4 w-4 fill-current" aria-hidden />
                  </span>
                </motion.div>
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="mt-4 text-lg font-semibold leading-snug tracking-tight text-ink transition-colors group-hover:text-ember"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="mt-1 text-sm text-ink-soft"
                >
                  {card.description}
                </motion.p>
              </button>
              <motion.a
                layoutId={`button-${card.title}-${id}`}
                href={card.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-ink/80 transition-colors hover:text-ember"
              >
                {card.ctaText} on YouTube
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </motion.a>
            </motion.li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default ExpandableCards;

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-ink"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

// Cards are built from the shared livestream data (also used by structured data and /llms.txt)
const cards = livestreams.map((l) => ({
  title: l.title,
  description: l.speaker,
  src: l.image,
  ctaText: 'Watch',
  ctaLink: l.url,
  content: () => (
    <>
      {l.summary.map((p) => (
        <p key={p.slice(0, 24)}>{p}</p>
      ))}
    </>
  ),
}));
