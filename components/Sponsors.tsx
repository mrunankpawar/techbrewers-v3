import Image from "next/image";

const sponsors = [
  {
    name: 'Sponsor 1',
    logo: '/images/sponsors/adc.jpg',
  },
  {
    name: 'Sponsor 2',
    logo: '/images/sponsors/aeka.png',
  },
  {
    name: 'Sponsor 3',
    logo: '/images/sponsors/bsidespune.png',
  },
  {
    name: 'Sponsor 3',
    logo: '/images/sponsors/daftar.png',
  },
  {
    name: 'Sponsor 3',
    logo: '/images/sponsors/gfg.png',
  },
  {
    name: 'Sponsor 3',
    logo: '/images/sponsors/gmc.png',
  },
  {
    name: 'Sponsor 3',
    logo: '/images/sponsors/h2s.png',
  },
  {
    name: 'Sponsor 3',
    logo: '/images/sponsors/htf.png',
  },
  {
    name: 'Sponsor 3',
    logo: '/images/sponsors/htl.png',
  },
  {
    name: 'Sponsor 3',
    logo: '/images/sponsors/htm.png',
  },
  {
    name: 'Sponsor 3',
    logo: '/images/sponsors/keploy.png',
  },
  {
    name: 'Sponsor 3',
    logo: '/images/sponsors/zeeve.png',
  },
  {
    name: 'Sponsor 3',
    logo: '/images/sponsors/sknisb.png',
  },
  {
    name: 'Sponsor 3',
    logo: '/images/sponsors/securityium.png',
  },
  {
    name: 'Sponsor 3',
    logo: '/images/sponsors/devweek.png',
  },
  {
    name: 'Sponsor 3',
    logo: '/images/sponsors/devweek.png',
  },
  {
    name: 'Sponsor 3',
    logo: '/images/sponsors/devweek.png',
  },
  {
    name: 'Sponsor 3',
    logo: '/images/sponsors/devweek.png',
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
            <div key={index} className="flex items-center justify-center p-4 border border-violet-200 rounded-lg shadow-md hover:shadow-lg">
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  )
}

export default Sponsors