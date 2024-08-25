"use client";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

const testimonials = [
  {
    quote:
      "I have been part of the TechBrewers community which is organising multiple latest technology initiatives including webinars which I am extremely happy to be part of it. Not only it has helped me learn new tech but also allowing to present relevant technologies including the cloud. ",
    name: "Rahul Ambhore",
    title: "Assistant Vice President @State Street",
  },
  {
    quote:
      "Club TechBrewers is no doubt one of the best tech-based communities, I have seen that has grown by such a huge margin in India with such potential the impact they are doing through their programs and events have been really been impactful and the growth rate of the community is really commendable.",
    name: "Anmol Reshi",
    title: "Co-founder @Sudans Tech",
  },
  {
    quote:
      "TechBrewers has been not only keen on doing initiatives to grow the community in a positive way but also in constantly collaborating with many communities to make sure impact never stops. Being a part of this group is no less than the feeling of pride that these people are giving their absolute best to make sure we all grow in the community.",
    name: "Jatin Pandya",
    title: "Product Growth and DevRel @Zeeve.io",
  },
  {
        quote:
          "One of the community which I have seen growing from zero. I know the team personally and everyone is working hard without expecting anything in return. That's what community means. I will always be there with TechBrewers community.",
        name: "Rohan Kulkarni",
        title: "Developer @Upsurge Labs",
      },
      {
        quote:
          "I came to Pune from a different city and as my college was a tier 3 college, I didn't get much active clubs and college communities there. So I started looking for active communities in Pune. TechBrewers helped me grow on a personal and professional scale. ",
        name: "Krushna Nalawade",
        title: "Chief Executive @hypebuddy",
      },
      {
        quote:
          "I have been part of the TechBrewers community since its initial days. TechBrewers has helped me grow socially as well as technologically. During our meetups, I had an opportunity to exchange project ideas with fellow club members. I have been referred for an internship through the TechBrewers community.",
        name: "Astitva Nikose",
        title: "Assistant Manager @Jio",
      },
];

// const testimonials2 = [
//   {
//     quote:
//       "One of the community which I have seen growing from zero. I know the team personally and everyone is working hard without expecting anything in return. That's what community means. I will always be there with TechBrewers community.",
//     name: "Rohan Kulkarni",
//     title: "Developer @Upsurge Labs",
//   },
//   {
//     quote:
//       "I came to Pune from a different city and as my college was a tier 3 college, I didn't get much active clubs and college communities there. So I started looking for active communities in Pune. TechBrewers helped me grow on a personal and professional scale. ",
//     name: "Krushna Nalawade",
//     title: "Chief Executive @hypebuddy",
//   },
//   {
//     quote:
//       "I have been part of the TechBrewers community since its initial days. TechBrewers has helped me grow socially as well as technologically. During our meetups, I had an opportunity to exchange project ideas with fellow club members. I have been referred for an internship through the TechBrewers community.",
//     name: "Astitva Nikose",
//     title: "Assistant Manager @Jio",
//   },
// ];

function TestimonialCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black-100 dark:bg-dot-white/[0.1] relative flex flex-col items-center justify-center overflow-hidden">
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center">
        <h3 className="text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-violet-50 to-violet-400 z-10">
          What people say about us
        </h3>
        <p className="mt-4 font-normal text-base md:text-lg text-violet-200 max-w-xl mx-auto z-10 mb-10">
        Discover the powerful stories of growth, collaboration, and the remarkable connections that define the TechBrewers experience.
        </p>
      </div>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
          {/* <InfiniteMovingCards
            items={testimonials2}
            direction="right"
            speed="slow"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default TestimonialCards;
