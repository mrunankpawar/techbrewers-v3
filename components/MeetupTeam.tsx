import Image from "next/image";

const people = [
  {
    id: 1,
    name: "Ganesh Divekar",
    designation: "Engineering @ Bajaj Finserv",
    image: "/images/meetupteam/ganeshnew.png",
    url: "https://www.linkedin.com/in/ganesh-divekar-96a72bb7",
  },
  {
    id: 2,
    name: "Pranoti Nandurkar",
    designation: "Technical Architect @ Tata Consultancy Services",
    image: "/images/meetupteam/pranotinew.png",
    url: "https://www.linkedin.com/in/pranoti-nandurkar-170021b",
  },
  {
    id: 3,
    name: "Vijaykumar Jangamashetti",
    designation: "Sr Google Cloud Consulting Architect, Google",
    image: "/images/meetupteam/vijaykumarnew.png",
    url: "https://www.linkedin.com/in/vijaykumar-jangamashetti/",
  },
  {
    id: 4,
    name: "Yogini Bende",
    designation: "Co-founder and CTO @ Peerlist",
    image: "/images/meetupteam/yogininew.png",
    url: "https://peerlist.io/yogini",
  },
  {
    id: 5,
    name: "Akash Bhadange",
    designation: "Co-founder and CEO @ Peerlist",
    image: "/images/meetupteam/akashnew.png",
    url: "https://peerlist.io/designerdada",
  },
  
  {
    id: 6,
    name: "Pralhad Sonar",
    designation: "Customer Success @ Vercel",
    image: "/images/meetupteam/pralhadnew.png",
    url: "https://www.linkedin.com/in/npralhad/",
  },
  {
    id: 7,
    name: "Rahul Ambhore",
    designation: "Assistant Vice President @ State Street",
    image: "/images/meetupteam/rahulnew.png",
    url: "https://www.linkedin.com/in/ambhorerahul/",
  },
  {
    id: 8,
    name: "Touhid Shaikh",
    designation: "Head of Service Delivery @ Securityium",
    image: "/images/meetupteam/touhidnew.png",
    url: "https://www.linkedin.com/in/touhidshaikh22/",
  },
  {
    id: 9,
    name: "Jeenika Anadani",
    designation: "Cyber Security Engineer",
    image: "/images/meetupteam/jeenikanew.png",
    url: "https://www.linkedin.com/in/jeenika/",
  },
  {
    id: 10,
    name: "Vaishnavi Joshi",
    designation: "Open Source Admin @ AnitaB.org",
    image: "/images/meetupteam/vaishnavinew.png",
    url: "https://www.linkedin.com/in/vaishnavi-joshi29/",
  },
  {
    id: 11,
    name: "Nakia Lightwala",
    designation: "Developer @ Veritas",
    image: "/images/meetupteam/nakianew.png",
    url: "https://www.linkedin.com/in/nakia-lightwala/",
  },
  {
    id: 12,
    name: "Rohan Kulkarni",
    designation: "Developer @ Upsurge Labs",
    image: "/images/meetupteam/rohannew.png",
    url: "https://www.linkedin.com/in/rohan-k-2502/",
  },
  {
    id: 13,
    name: "Faizan Akhtar",
    designation: "Software Engineer @ Criteo",
    image: "/images/meetupteam/faizannew.png",
    url: "https://www.linkedin.com/in/akhtar-faizan/",
  },
  {
    id: 14,
    name: "Vishwas Kshirsagar",
    designation: "Data Science Consultant",
    image: "/images/meetupteam/vishwasnew.png",
    url: "https://www.linkedin.com/in/k98vishwas",
  },
];

function Team() {
  return (
    <div className="mt-0 h-auto w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-5 md:py-10">
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center">
        <h3 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 z-10">
          Speaker Archive
        </h3>
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {people.map((person, index) => (
            <div
              key={person.id}
              className="group relative flex flex-col items-center w-1/3 sm:w-1/3 lg:w-1/4"
              style={{ 
                animationDelay: `${index * 50}ms`,
                willChange: 'transform'
              }}
            >
              <div className="relative mb-3">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/30 via-orange-400/20 to-orange-500/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full border-2 border-white/20 group-hover:border-orange-500/60 transition-all duration-500 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Image
                    src={person.image}
                    alt={person.name}
                    className="object-cover relative z-10"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
              <a
                href={person.url}
                className="mt-2 text-sm md:text-base font-semibold text-white hover:text-orange-300 transition-colors duration-300 text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                {person.name}
              </a>
              <div className="text-xs md:text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300 text-center mt-1">
                {person.designation}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
