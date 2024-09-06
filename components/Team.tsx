import Image from "next/image";

const people = [
  {
    id: 1,
    name: "Mrunank Pawar",
    designation: "",
    image: "/images/team/mrunank.png",
    url: "https://www.linkedin.com/in/mrunankpawar/",
  },
  {
    id: 2,
    name: "Vaibhav Kadam",
    designation: "",
    image: "/images/team/vaibhavc.png",
    url: "https://www.linkedin.com/in/dennis-george-george/",
  },
  {
    id: 3,
    name: "Abhi Savale",
    designation: "",
    image: "/images/team/abhi.jpg",
    url: "https://www.linkedin.com/in/dennis-george-george/",
  },
  {
    id: 4,
    name: "Sana Shaikh",
    designation: "",
    image: "/images/team/sana.png",
    url: "https://www.linkedin.com/in/dennis-george-george/",
  },
  {
    id: 5,
    name: "Ayush Singh",
    designation: "",
    image: "/images/team/ayush.png",
    url: "https://www.linkedin.com/in/dennis-george-george/",
  },
  {
    id: 6,
    name: "Akanksha Sonawane",
    designation: "",
    image: "/images/team/akanksha.jpg",
    url: "https://www.linkedin.com/in/dennis-george-george/",
  },
];

function Team() {
  return (
    <div className="mt-0 md:mt-10 h-auto w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-5 md:py-10">
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-violet-50 to-violet-400 z-10">
          Humans of TechBrewers
        </h3>
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {people.map((person) => (
            <div
              key={person.id}
              className="flex flex-col items-center w-1/3 sm:w-1/3 lg:w-1/4"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 relative overflow-hidden rounded-full">
                <Image
                  src={person.image}
                  alt={person.name}
                  className="object-cover"
                  width={200}
                  height={200}
                />
              </div>
              <a
                href={person.url}
                className="mt-2 text-sm md:text-base font-semibold hover:text-violet-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                {person.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
