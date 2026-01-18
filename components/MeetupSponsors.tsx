import Image from "next/image";
import Link from "next/link";

const meetupSponsors = [
  {
    name: "GitHub",
    logo: "/images/sponsors/github.png",
    url: "https://github.com/",
  },
  {
    name: "Securityium",
    logo: "/images/sponsors/securityium.png",
    url: "https://www.securityium.com/",
  },
  {
    name: "Daftar",
    logo: "/images/sponsors/daftar.png",
    url: "https://www.instagram.com/thedaftar/",
  },
  {
    name: "Peerlist",
    logo: "/images/sponsors/peerlist.png",
    url: "https://peerlist.io/",
  },
  {
    name: "Geeks For Geeks",
    logo: "/images/sponsors/gfg.png",
    url: "https://www.geeksforgeeks.org/",
  },
  {
    name: "Hack 2 Skill",
    logo: "/images/sponsors/h2s.png",
    url: "https://hack2skill.com/",
  },
  {
    name: "Aeka Coffee",
    logo: "/images/sponsors/aeka.png",
    url: "https://www.instagram.com/aekascoffee/",
  },
  {
    name: "Moneylancer Investments",
    logo: "/images/sponsors/moneylancer.png",
    url: "https://mymoneylancer.com/",
  },

];

function Sponsors() {
  return (
    <div className="mt-0 h-auto w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-5 md:py-10">
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center">
        <h3 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 z-10">
          Past Sponsors
        </h3>

        <div className="container mx-auto px-4 mt-10">
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {meetupSponsors.map((sponsor, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 border border-white/10 rounded-lg"
              >
                <Link href={sponsor.url} passHref target="__blank">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={150}
                    height={150}
                    className="object-contain w-20 h-20 sm:w-28 sm:h-24 md:w-28 md:h-24 lg:w-28 lg:h-24"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
