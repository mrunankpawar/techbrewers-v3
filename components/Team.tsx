
import { AnimatedTooltip } from "./ui/AnimatedTooltip";


const people = [
  {
    id: 1,
    name: "Mrunank Pawar",
    designation: "",
    image:
      "/images/team/mrunank.png",
  },
  {
    id: 2,
    name: "Vaibhav Kadam",
    designation: "",
    image:
      "/images/team/vaibhav.png",
  },
  {
    id: 3,
    name: "Abhi Savale",
    designation: "",
    image:
      "/images/team/abhi.jpg",
  },
  {
    id: 4,
    name: "Sana Shaikh",
    designation: "",
    image:
      "/images/team/sana.png",
  },
  {
    id: 5,
    name: "Ayush Singh",
    designation: "",
    image:
      "/images/team/ayush.png",
  },
  {
    id: 6,
    name: "Akanksha Sonawane",
    designation: "",
    image:
      "/images/team/akanksha.jpg",
  },
];

function Team() {
  return (
    <div className="mt-0 md:mt-10 h-auto w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-5 md:py-10">
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center">
        <h3 className="text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-violet-50 to-violet-400 z-10">
          Humans of TechBrewers
        </h3>
        <div className="flex flex-row items-center justify-center w-full mt-10">
          <AnimatedTooltip items={people} />
        </div>
      </div>
    </div>
  );
}

export default Team;
