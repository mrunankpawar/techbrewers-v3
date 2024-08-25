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
        <h3 className="text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-violet-50 to-violet-400 z-10">
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
      <div className="bg-black-100 mt-10">
      <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
  <span className="absolute inset-0 overflow-hidden rounded-full">
    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
  </span>
  <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
    <span>
      Tailwind Connect
    </span>
    <svg
      fill="none"
      height="16"
      viewBox="0 0 24 24"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.75 8.75L14.25 12L10.75 15.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </div>
  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
</button>
      </div>
    </div>
  )
}

export default Sponsors