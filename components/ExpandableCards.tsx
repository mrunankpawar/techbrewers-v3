"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { FaArrowRight } from "react-icons/fa";

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
            className="fixed inset-0 bg-black/60 backdrop-blur-md h-full w-full z-10"
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
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
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
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col sm:rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-black/90 via-black/80 to-black/90 backdrop-blur-xl border border-orange-500/30"
            >
              <motion.div layoutId={`image-${active.title}-${id}`} layout={!isClosing}>
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
                      layout={!isClosing}
                      className="font-bold text-white"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      layout={!isClosing}
                      className="text-gray-300"
                      style={{ color: '#d4a574' }}
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    layout={!isClosing}
                    href={active.ctaLink}
                    target="_blank"
                    className="group flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl border transition-all duration-300 bg-gradient-to-r from-orange-500/20 to-orange-600/20 border-orange-500/40 hover:border-orange-500/60 hover:from-orange-500/30 hover:to-orange-600/30 text-orange-200 hover:text-orange-100"
                  >
                    {active.ctaText}
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
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-white text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
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
      <ul className="max-w-2xl mx-auto w-full space-y-4 px-6 pb-20">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="group relative p-4 flex flex-col md:flex-row justify-between items-center md:items-start rounded-2xl cursor-pointer transition-all duration-500 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-orange-500/40 hover:shadow-[0_8px_30px_rgba(197,79,14,0.12)] hover:-translate-y-1"
            style={{ willChange: 'transform' }}
          >
            <div className="flex flex-col items-center md:items-start gap-4 md:flex-row w-full">
              <motion.div
                layoutId={`image-${card.title}-${id}`}
                className="flex justify-center md:justify-start w-full md:w-auto"
              >
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="text-center md:text-left w-full md:w-auto">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-white"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-orange-700"
                  style={{ color: '#C54F0E' }}
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="group flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl border transition-all duration-300 mt-4 md:mt-0 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border-orange-500/30 hover:border-orange-500/50 hover:from-orange-500/20 hover:to-orange-600/20 text-orange-300 hover:text-orange-200"
            >
              {card.ctaText}
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
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
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
    description: "Kevin Blanco",
    title: "Building Developer Communities",
    src: "/images/events/kevin.png",
    ctaText: "Watch",
    ctaLink: "https://www.youtube.com/live/629hOd60J9k?si=D6FwwRcRLf6t4AtD",
    content: () => {
      return (
        <p>
          Join us for an exclusive session with Kevin Blanco, Senior DevRel Advocate at Appsmith, as he shares his incredible 10-year journey in building developer communities across the globe.
          <br></br>
          <br></br>
          In just 30 minutes, Kevin will walk us through real-world experiences, key lessons, and actionable insights on how to create, scale, and sustain thriving tech communities. Whether you&apos;re a community enthusiast, aspiring DevRel, or just curious about what it takes—this talk is for you!
        </p>
      );
    },
  },
  {
    description: "Abhijeet Ingle",
    title: "Integrating LLMs in Your Applications",
    src: "/images/events/abhijeet.png",
    ctaText: "Watch",
    ctaLink: "https://www.youtube.com/live/wRNQ5wFU7WQ?si=pXE3_ahfdCqB5-41",
    content: () => {
      return (
        <p>
          An exciting virtual session with Abhijeet Ingle, Security Researcher, as he dives into Integrating LLMs in Your Applications: A Security-First Approach.
          <br></br>
          <br></br>
          AI-powered applications are the future, but are they secure? This session will uncover the potential security risks of integrating Large Language Models (LLMs) and how to mitigate them with a security-first mindset. Whether you&apos;re a developer, researcher, or security enthusiast, this is your chance to learn how to build AI-driven applications without compromising security!
        </p>
      );
    },
  },
  {
    description: "Vinod Thomas",
    title: "Transitioning to Product Management",
    src: "/images/events/pm2.png",
    ctaText: "Watch",
    ctaLink: "https://www.youtube.com/live/kIcvBf5bRyc?feature=shared",
    content: () => {
      return (
        <p>
          Breaking into Product Management without prior experience can feel
          like an uphill battle. But what if you had a roadmap to make it
          happen?
          <br></br>
          <br></br>
          Breaking into Product Management without prior experience can feel
          like an uphill battle. But what if you had a roadmap to make it
          happen? Join us for an insightful session with Vinod Thomas, Product
          Manager at Google, as he shares his journey of gaining product
          experience and transitioning into Product Management.
        </p>
      );
    },
  },
  {
    description: "Mohd Toukir Khan",
    title: "Learning Open Source with Hacktoberfest",
    src: "/images/events/oshack.png",
    ctaText: "Watch",
    ctaLink: "https://www.youtube.com/live/iphlaYDN3J0?si=WWbIS9l21jikFpcV",
    content: () => {
      return (
        <p>
          The speaker provides practical guidance on how to get started with
          Hacktoberfest, beginning with registering on the official
          Hacktoberfest website to join the event. Once registered, participants
          can explore repositories on GitHub labeled with Hacktoberfest,
          focusing on projects that align with their interests or areas of
          expertise.
          <br></br>
          <br></br>
          Contributions should be meaningful, with pull requests carefully
          adhering to the project&apos;s contribution guidelines to ensure they
          are accepted. The speaker also emphasizes the importance of respectful
          engagement, encouraging participants to interact courteously with
          project maintainers and fellow contributors, as collaboration is a
          cornerstone of open-source development.
        </p>
      );
    },
  },
  {
    description: "Aditya Shende",
    title: "Getting Started in Cyber Stream Security",
    src: "/images/events/wcan.png",
    ctaText: "Watch",
    ctaLink: "https://www.youtube.com/live/Ol9F-mSUh9A?si=1GWg-9d34w1U7Xqd",
    content: () => {
      return (
        <p>
          WCAN is an introductory guide designed for aspiring cybersecurity
          professionals. WCAN, which stands for Web, Cloud, API, and Network
          security, offers a comprehensive overview of key areas in the
          cybersecurity landscape. This talk organized by Club TechBrewers
          covers fundamental concepts, practical techniques, and essential tools
          needed to exploit as well as secure digital assets in these critical
          domains.
          <br></br>
          <br></br>
          Ideal for cybersecurity enthusiasts, it provides a solid foundation
          for anyone looking to embark on a career in cybersecurity and develop
          the skills required to attack and protect against modern cyber
          threats.
        </p>
      );
    },
  },
  {
    description: "Vik Agarwal (Product Leader at Meta)",
    title: "Navigating a Career in Product Management",
    src: "/images/events/productManagement.png",
    ctaText: "Watch",
    ctaLink: "https://www.youtube.com/live/1J9Y3ERrP9A?si=yYikT6qdTVaCIkZz",
    content: () => {
      return (
        <p>
          Entering the world of Product Management can feel like exploring new
          territory, especially when you&apos;re bombarded with so many
          questions. Maybe you&apos;re not sure about the differences between
          Product and Program Management, or you&apos;re wondering how to get
          ready for a PM job, or any other doubts regarding Product Management
          in general. 💻
          <br></br>
          <br></br>
          It can all be overwhelming, but don&apos;t worry! Think of this
          session as your guide through the world of Product Management.
          We&apos;ll break things down for you in simple terms, helping you
          understand the ins and outs of Product Management. 🎉
        </p>
      );
    },
  },

  {
    description: "Santosh Yadav (GDE Angular)",
    title: "Getting Started with Angular",
    src: "/images/events/angular.png",
    ctaText: "Watch",
    ctaLink: "https://www.youtube.com/live/QL6Zbnf_mi4?si=CdnSVv9pSspQRrW0",
    content: () => {
      return (
        <p>
          Embark on a captivating journey into the realm of Angular development
          with Club TechBrewers at our event Getting Started with Angular. This
          session unites tech enthusiasts and professionals alike to delve into
          the intricacies of Angular, exploring its latest features, best
          practices, and real-world applications. Whether you&apos;re a seasoned
          developer or just beginning your journey with Angular.
          <br></br>
          <br></br>
          Santosh Yadav brings over 15 years of experience in programming and
          application development, known for his solution-oriented approach.
          With expertise in managing projects from concept to completion,
          he&apos;s recognized as an Angular GDE and GitHub Star.
        </p>
      );
    },
  },

  {
    description: "Sankalp Paranjpe",
    title: "Building Efficient CI/ CD Pipelines on AWS",
    src: "/images/events/cloud.png",
    ctaText: "Watch",
    ctaLink: "https://www.youtube.com/live/yW87L0FzqXk?si=SBbm7qyUDzIjK4a6",
    content: () => {
      return (
        <p>
          Amazon Web Services is one of the world&apos;s largest and widely used
          cloud services platform. With the deployment, cloud storage and
          automation tools it provides, learning AWS tools and technologies has
          always driven people towards cloud-based development. This event as
          the title suggests is a hands-on workshop on building a CI/CD pipeline
          on AWS for smooth production flow and automating the whole process.
          <br></br>
          <br></br>
          You&apos;ll gain insights about AWS cloud computing principles,
          DevOps, DevSecOps, auto-scaling strategies and prioritize what all
          constraints while deploying your application on AWS. The session is
          beginner-friendly too, so simply follow the workshop and implement the
          same.
        </p>
      );
    },
  },

  {
    description: "Jatin Pandya, Chhavi Garg and Mrunank Pawar",
    title: "Hackathon Chats: Exploring Ideas",
    src: "/images/events/hackathonChats.png",
    ctaText: "Watch",
    ctaLink: "https://www.youtube.com/live/LazVwF18uZU?si=bQBbjwapdYVkcNlM",
    content: () => {
      return (
        <p>
          Hackathons have always been the perfect kind of kickstart for
          upskilling self in technology, networking with other tech-enthusiasts
          and collaborative building in a community. Jatin, Chhavi and Mrunank
          here shed light on hackathons from an organizer, a mentor and
          participant and judge&apos;s perspective. The insights provided
          encourgae you to participate in various hackathons that are happening
          globally. Jatin here is himself one of the founding organizers of Hack
          The League.
          <br></br>
          <br></br>
          We bring to you this session consisting of Do&apos;s and Dont&apos;s
          to follow while being a part of a hackathon from any perspective!
        </p>
      );
    },
  },
  {
    description: "Praveen Kumar Purushothaman",
    title: "TechBrewers x Hacktoberfest'23",
    src: "/images/events/hacktoberfest.png",
    ctaText: "Watch",
    ctaLink: "https://www.youtube.com/live/ortVf_XxsoM?si=M9dFL5B5-muGZngx",
    content: () => {
      return (
        <p>
          In this engaging session, Praveen provides a comprehensive guide on
          Getting started with Hacktoberfest, an annual celebration of
          open-source contributions. Tailored for both beginners and seasoned
          developers, the session covers essential steps for participation,
          including how to find beginner-friendly issues and navigate the
          contribution process.
          <br></br>
          <br></br>
          Whether you&apos;re new to coding or an experienced professional, this
          talk offers valuable insights on making meaningful contributions to
          open-source projects during Hacktoberfest.
        </p>
      );
    },
  },
  {
    description: "Jatin Pandya (Organiser of Hack The League)",
    title: "Elevate YOU: Personal Branding Workshop",
    src: "/images/events/personalBranding.png",
    ctaText: "Watch",
    ctaLink: "https://www.youtube.com/live/-r7uUwmCZzk?si=86NT48UOKGZ0ovku",
    content: () => {
      return (
        <p>
          In this insightful session, Jatin delves into the essential strategies
          for building and establishing a personal brand in the technology
          industry. The discussion covers practical tips on defining your unique
          value proposition, leveraging online platforms, and creating impactful
          content to enhance visibility.
          <br></br>
          <br></br>
          Whether you&apos;re just starting out or looking to elevate your
          presence, this session offers valuable guidance on positioning
          yourself as a thought leader and effectively navigating the dynamic
          tech landscape. Perfect for professionals aiming to make a lasting
          impression in the tech world.
        </p>
      );
    },
  },
  {
    description: "Divyansh Singh",
    title: "Getting started with Android Development",
    src: "/images/events/android.png",
    ctaText: "Watch",
    ctaLink: "https://www.youtube.com/live/b6U4T6hIlJc?si=KCMnumuNGRP8zcAv",
    content: () => {
      return (
        <p>
          Building applications is one of the interesting skills to learn where
          you can actually implement an idea that once riddled your mind as What
          if I had XYZ app for XYZ task? Oh! It would&apos;ve been so
          convenient., ain&apos;t it?
          <br></br>
          <br></br>
          Well to channelize your curiosity about building android applications
          Divyansh has a hands-on workshop developing a beginner-friendly
          application and introducing you to some basic and essential terms and
          concepts to learn as you entitle yourself with android development.
        </p>
      );
    },
  },
  {
    description: "Sowmiya V",
    title: "Introduction to UI/ UX Design",
    src: "/images/events/ui-uxbig.png",
    ctaText: "Watch",
    ctaLink: "https://www.youtube.com/live/hqvOYh6h0v8?si=4lDhbuHzzp9hUlYY",
    content: () => {
      return (
        <p>
          Visually appealing screens always catch your eye? Wonder if only you
          could learn to design one of your ideas into existence too? Join us in
          this insightful session where an Sowmiya delves into the art of
          building user interface/experience designs.
          <br></br>
          <br></br>
          The session covers essential best practices for creating intuitive and
          engaging UI designs, focusing on the latest trends, tools, and
          methodologies that ensure user-centric experiences. Whether
          you&apos;re a seasoned designer or just starting out, this talk
          provides valuable tips and strategies to elevate your design skills
          and create interfaces that truly resonate with users.
        </p>
      );
    },
  },
  {
    description: "Mrunank Pawar",
    title: "Getting Started with Git and GitHub",
    src: "/images/events/gitgithub.png",
    ctaText: "Watch",
    ctaLink: "https://www.youtube.com/live/t9X_PDOJyCI?si=NC2HWRAiQH_K6tHR",
    content: () => {
      return (
        <p>
          In this engaging session, join us as Mrunank takes you through a
          hands-on introduction to Git and GitHub. Whether you&apos;re a
          complete beginner or looking to sharpen your skills, this workshop
          will guide you through the essentials of version control and
          collaboration.
          <br></br>
          <br></br>
          Learn the fundamentals of Git, explore the powerful features of
          GitHub, and get practical experience with real-world projects. Perfect
          for anyone eager to start their journey in software development or
          enhance their workflow!
        </p>
      );
    },
  },
  {
    description: "Vaibhav Kadam",
    title: "Fundamentals of Cyber Security",
    src: "/images/events/vibhavrect.png",
    ctaText: "Watch",
    ctaLink: "https://youtu.be/3YVLJs0g7mU?si=uRSTUicQtsv-GXZP",
    content: () => {
      return (
        <p>
          Imagine stepping into a digital fortress, where the walls are
          constructed from complex codes and intricate protocols. In this
          enlightening session, our expert speaker unveils the crucial building
          blocks of cyber security, offering a comprehensive introduction to the
          fundamental principles that safeguard our digital world.
          <br></br>
          <br></br>
          Join us as we delve into the core concepts, strategies, and best
          practices essential for protecting information in an increasingly
          interconnected era.
        </p>
      );
    },
  },
];
