"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

function ExpandableCards() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
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

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
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
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
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
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
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
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Aditya Shende",
    title: "Getting Started in Cyber Stream Security",
    src: "/images/events/cybersec2.png",
    ctaText: "Watch now",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return <p></p>;
    },
  },
  {
    description: "Vik Agarwal (Product Leader at Meta)",
    title: "Navigating a Career in Product Management",
    src: "/images/events/pm.jpeg",
    ctaText: "Watch now",
    ctaLink: "https://www.youtube.com/live/1J9Y3ERrP9A?si=yYikT6qdTVaCIkZz",
    content: () => {
      return (
        <p>
          Entering the world of Product Management can feel like exploring new
          territory, especially when you're bombarded with so many questions.
          Maybe you're not sure about the differences between Product and
          Program Management, or you're wondering how to get ready for a PM job,
          or any other doubts regarding Product Management in general. 💻
          <br></br>
          <br></br>
          It can all be overwhelming, but don't worry! Think of this session as
          your guide through the world of Product Management. We'll break things
          down for you in simple terms, helping you understand the ins and outs
          of Product Management. 🎉
        </p>
      );
    },
  },

  {
    description: "Santosh Yadav (GDE Angular)",
    title: "Getting Started with Angular",
    src: "/images/events/angular.jpeg",
    ctaText: "Watch now",
    ctaLink: "https://www.youtube.com/live/QL6Zbnf_mi4?si=CdnSVv9pSspQRrW0",
    content: () => {
      return <p></p>;
    },
  },

  {
    description: "Sankalp Paranjpe",
    title: "Building Efficient CI/ CD Pipelines on AWS",
    src: "",
    ctaText: "Watch now",
    ctaLink: "https://www.youtube.com/live/yW87L0FzqXk?si=SBbm7qyUDzIjK4a6",
    content: () => {
      return <p></p>;
    },
  },

  {
    description: "Jatin Pandya, Chhavi Garg and Mrunank Pawar",
    title: "Hackathon Chats: Exploring Ideas",
    src: "",
    ctaText: "Watch now",
    ctaLink: "https://www.youtube.com/live/LazVwF18uZU?si=bQBbjwapdYVkcNlM",
    content: () => {
      return <p></p>;
    },
  },
  {
    description: "Praveen Kumar Purushothaman",
    title: "TechBrewers x Hacktoberfest'23",
    src: "/images/events/hacktoberfest.png",
    ctaText: "Watch now",
    ctaLink: "https://www.youtube.com/live/ortVf_XxsoM?si=M9dFL5B5-muGZngx",
    content: () => {
      return <p></p>;
    },
  },
  {
    description: "Jatin Pandya (Organiser of Hack The League)",
    title: "Elevate YOU: Personal Branding Workshop",
    src: "",
    ctaText: "Watch now",
    ctaLink: "https://www.youtube.com/live/-r7uUwmCZzk?si=86NT48UOKGZ0ovku",
    content: () => {
      return <p></p>;
    },
  },
  {
    description: "Divyansh Singh",
    title: "Getting started with Android Development",
    src: "/images/events/appdev.png",
    ctaText: "Watch now",
    ctaLink: "https://www.youtube.com/live/b6U4T6hIlJc?si=KCMnumuNGRP8zcAv",
    content: () => {
      return <p></p>;
    },
  },
  {
    description: "Sowmiya V",
    title: "Introduction to UI/ UX Design",
    src: "",
    ctaText: "Watch now",
    ctaLink: "https://www.youtube.com/live/hqvOYh6h0v8?si=4lDhbuHzzp9hUlYY",
    content: () => {
      return <p></p>;
    },
  },
  {
    description: "Vaibhav Kadam",
    title: "Build Custom Search Engine",
    src: "",
    ctaText: "Watch now",
    ctaLink: "https://www.youtube.com/live/DiBaMg3H_CM?si=qnCQffjrQyNuSEir",
    content: () => {
      return <p></p>;
    },
  },
  {
    description: "Mrunank Pawar",
    title: "Getting Started with Git and GitHub",
    src: "",
    ctaText: "Watch now",
    ctaLink: "https://www.youtube.com/live/t9X_PDOJyCI?si=NC2HWRAiQH_K6tHR",
    content: () => {
      return <p></p>;
    },
  },
  {
    description: "Vaibhav Kadam",
    title: "Introduction and Fundamentals of Cyber Security",
    src: "",
    ctaText: "Watch now",
    ctaLink: "https://youtu.be/3YVLJs0g7mU?si=uRSTUicQtsv-GXZP",
    content: () => {
      return <p></p>;
    },
  },
];
