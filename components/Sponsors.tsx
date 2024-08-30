import Image from "next/image";
import Link from "next/link";

const sponsors = [
  {
    name: 'Azure Developer Community',
    logo: '/images/sponsors/adc.jpg',
    url: 'https://azdev.reskilll.com/',
  },
  {
    name: 'Securityium',
    logo: '/images/sponsors/securityium.png',
    url: 'https://www.securityium.com/',
  },

  {
    name: 'Daftar',
    logo: '/images/sponsors/daftar.png',
    url: 'https://www.instagram.com/thedaftar/',
  },
  {
    name: 'Peerlist',
    logo: '/images/sponsors/peerlist.png',
    url: 'https://peerlist.io/',
  },
  {
    name: 'Bsides Pune',
    logo: '/images/sponsors/bsidespune.png',
    url: 'https://www.linkedin.com/company/bsides-pune/',
  },
  {
    name: 'Geeks For Geeks',
    logo: '/images/sponsors/gfg.png',
    url: 'https://www.geeksforgeeks.org/',
  },
  {
    name: 'Give My Certificate',
    logo: '/images/sponsors/gmc.png',
    url: 'https://givemycertificate.com/',
  },

  {
    name: 'Hack This Fall',
    logo: '/images/sponsors/htf.png',
    url: 'https://hackthisfall.tech/',
  },
  {
    name: 'Hack The League',
    logo: '/images/sponsors/htl.png',
    url: 'https://hacktheleague.com/',
  },
  {
    name: 'Hack The Mountains',
    logo: '/images/sponsors/htm.png',
    url: 'https://hackthemountain.tech/',
  },
  {
    name: 'Hack 2 Skill',
    logo: '/images/sponsors/h2s.png',
    url: 'https://hack2skill.com/',
  },
  {
    name: 'Developer Week',
    logo: '/images/sponsors/devweek.png',
    url: 'https://www.developerweek.com/',
  },

  {
    name: 'Aeka Coffee',
    logo: '/images/sponsors/aeka.png',
    url: 'https://www.instagram.com/aekascoffee/',
  },
  {
    name: 'Keploy',
    logo: '/images/sponsors/keploy.png',
    url: 'https://keploy.io/',
  },
  {
    name: 'SKNISB',
    logo: '/images/sponsors/sknisb.png',
    url: 'https://sknisb.in/',
  },
  {
    name: 'Cloud Native Day Pune',
    logo: '/images/sponsors/cnd.jpg',
    url: 'https://www.cloudnativepune.com/',
  },
  {
    name: 'Zeeve',
    logo: '/images/sponsors/zeeve.png',
    url: 'https://www.zeeve.io/',
  },
  {
    name: 'GDG Silicon Valley',
    logo: '/images/sponsors/gdg.jpg',
    url: 'https://gdg.community.dev/gdg-silicon-valley/',
  },


];


function Sponsors() {
  return (
    <div className="mt-0 md:mt-10 h-auto w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-5 md:py-10">
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-violet-50 to-violet-400 z-10">
          Sponsors and Partners
        </h3>

        <div className="container mx-auto px-4 mt-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {sponsors.map((sponsor, index) => (
              <div key={index}
                className="flex items-center justify-center p-4 border border-violet-200 rounded-lg shadow-md hover:shadow-lg filter transition duration-300">
                <Link href={sponsor.url} passHref target="__blank">

                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={150}
                    height={150}
                    className="object-contain"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Sponsors