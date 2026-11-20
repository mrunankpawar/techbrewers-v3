import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterNew from "@/components/FooterNew";
import { ArrowButton } from "@/components/ui/ArrowButton";

export const metadata: Metadata = {
  title: "Page not found | TechThrusters",
  robots: { index: false, follow: true },
};

const destinations = [
  { name: "Community", href: "/community", body: "Our story, values and FAQ" },
  { name: "Meetups", href: "/meetup", body: "Photos and the speaker archive" },
  { name: "Talks", href: "/talks", body: "Apply to speak" },
  { name: "Events", href: "/events/upcoming", body: "Upcoming sessions and livestreams" },
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navbar />
      <main className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 star-field fade-edges" />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-36 md:pb-28 md:pt-44">
          <p className="eyebrow text-ember">Error 404</p>

          <p
            aria-hidden
            className="display mt-4 select-none text-[9rem] leading-[0.8] tracking-[-0.06em] text-ink sm:text-[13rem] md:text-[16rem]"
          >
            4<span className="accent text-ember">0</span>4
          </p>

          <h1 className="display mt-8 text-4xl sm:text-5xl md:text-6xl">
            This page took <span className="accent text-ember">a wrong turn.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
            The page you&apos;re looking for doesn&apos;t exist or has moved. Here are a few good places to
            pick up from.
          </p>

          <div className="mt-9">
            <ArrowButton href="/">Go back home</ArrowButton>
          </div>

          <ul className="mt-14 grid border-l border-t border-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.map((d) => (
              <li key={d.href} className="border-b border-r border-ink/10">
                <Link href={d.href} className="group flex h-full flex-col justify-between gap-6 p-5 transition-colors hover:bg-white md:p-6">
                  <span className="flex items-start justify-between gap-3">
                    <span className="text-xl font-semibold tracking-tight group-hover:text-ember">{d.name}</span>
                    <ArrowUpRight
                      className="h-5 w-5 shrink-0 text-ink/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ember"
                      aria-hidden
                    />
                  </span>
                  <span className="text-sm text-ink-soft">{d.body}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <FooterNew />
    </div>
  );
}
