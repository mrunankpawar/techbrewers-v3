"use client";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

const testimonials = [
  {
    quote:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, neque.",
    name: "Mrunank Pawar",
    title: "Founder and Lead @Club TechBrewers",
  },
  {
    quote:
      "The community and support at this school are unmatched. I've grown not just as a pianist, but also as a performer, thanks to their comprehensive approach.",
    name: "Samantha Lee",
    title: "Piano Student",
  },
  {
    quote:
      "This school offered me the tools and confidence to take my singing to the next level. I'm endlessly grateful for the personalized coaching.",
    name: "Michael Chen",
    title: "Vocal Student",
  },
  {
    quote:
      "As a violinist, finding the right mentor can be challenging, but this school matched me with a teacher who truly understands my goals and challenges.",
    name: "Emily Taylor",
    title: "Violin Student",
  },
  {
    quote:
      "The production courses here opened my eyes to the intricacies of music production. Highly recommend for any aspiring producers!",
    name: "Chris Morales",
    title: "Music Production Student",
  },
];

function TestimonialCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black-100 dark:bg-dot-white/[0.1] relative flex flex-col items-center justify-center overflow-hidden">
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center">
        <h3 className="text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-violet-50 to-violet-400 z-10">
          What people say about us
        </h3>
        <p className="mt-4 font-normal text-base md:text-lg text-violet-200 max-w-xl mx-auto z-10 mb-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam,
          sequi. Adipisci consequatur aut optio quas, rerum ipsam
        </p>
      </div>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCards;
