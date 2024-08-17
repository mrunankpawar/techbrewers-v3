
import Hero from "@/components/Hero";
import Numbers from "@/components/Numbers";
import Sponsors from "@/components/Sponsors";
import Team from "@/components/Team";
import TestimonialCards from "@/components/TestimonialCards";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mt-10 pt-10 relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-8xl w-full">
        <Hero />
        <Numbers />
        <TestimonialCards />
        <Team />
        <Sponsors />
      </div>
    </main>
  );
}