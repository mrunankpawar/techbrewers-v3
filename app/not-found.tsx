import Link from "next/link";
import Image from "next/image";
import { ArrowButton } from "@/components/ui/ArrowButton";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-paper px-6 py-16 text-ink">
      <div aria-hidden className="absolute inset-0 star-field fade-edges" />

      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center text-center">
        <Image
          src="/images/404e.png"
          alt=""
          width={400}
          height={400}
          className="mx-auto mb-6 h-auto w-40 sm:w-48"
        />
        <p className="eyebrow text-ember">Error 404</p>
        <h1 className="display mt-4 text-5xl sm:text-7xl">
          Page not{" "}
          <span className="accent text-ember">found.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-md text-lg text-ink-soft">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
          <ArrowButton href="/">Go back home</ArrowButton>
          <Link href="/events/upcoming" className="text-sm font-semibold text-ink/70 transition-colors hover:text-ink">
            Browse events
          </Link>
        </div>
      </div>
    </div>
  );
}
