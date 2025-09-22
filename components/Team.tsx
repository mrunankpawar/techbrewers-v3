import Image from "next/image";
import { CometCard } from "@/components/ui/comet-card";

const people = [
  {
    id: 1,
    name: "Mrunank Pawar",
    image: "/images/team/mrunank.png",
    url: "https://www.linkedin.com/in/mrunankpawar/",
  },
  {
    id: 2,
    name: "Vaibhav Kadam",
    image: "/images/team/vaibhav.png",
    url: "https://www.linkedin.com/in/4lph4v/",
  },
  {
    id: 3,
    name: "Abhi Savale",
    image: "/images/team/abhi.png",
    url: "https://www.linkedin.com/in/abhijeet-savale/",
  },
  {
    id: 4,
    name: "Sana Shaikh",
    image: "/images/team/sana.png",
    url: "https://www.linkedin.com/in/sanashaikh30/",
  },
  {
    id: 5,
    name: "Ayush Singh",
    image: "/images/team/ayush.png",
    url: "https://www.linkedin.com/in/ayush-singh-work/",
  },
  {
    id: 6,
    name: "Akanksha Sonawane",
    image: "/images/team/akanksha.png",
    url: "https://www.linkedin.com/in/akanksha-sonawane/",
  },
];

function Team() {
  return (
    <div className="mt-0 md:mt-10 h-auto w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-5 md:py-10">
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-violet-50 to-violet-400 z-10">
          Humans of TechThrusters
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {people.map((person) => (
            <CometCard key={person.id} className="w-full">
              <a
                href={person.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-64 h-80 mx-auto block cursor-pointer"
              >
                <div className="relative w-full h-full rounded-[16px] overflow-hidden bg-[#1F2121] border border-gray-800/50">
                  {/* Profile Image */}
                  <div className="relative w-full h-52 overflow-hidden">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <h4 className="text-l md:text-xl font-bold text-white text-center leading-tight drop-shadow-lg p-5">
                      {person.name}
                    </h4>
                  </div> 
                  
                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-violet-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
                </div>
              </a>
            </CometCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
