import Image from "next/image";
import Link from "next/link";

const sponsors = [
  // Row 1: 2 logos
  {
    name: "GitHub",
    logo: "/images/sponsors/github.png",
    url: "https://github.com/",
  },
  {
    name: "Peerlist",
    logo: "/images/sponsors/peerlist.png",
    url: "https://peerlist.io/",
  },
  // Row 2: 3 logos
  {
    name: "Azure Developer Community",
    logo: "/images/sponsors/adc.jpg",
    url: "https://azdev.reskilll.com/",
  },
  {
    name: "Cloud Native Day Pune",
    logo: "/images/sponsors/cnd.jpg",
    url: "https://www.cloudnativepune.com/",
  },
  {
    name: "Moneylancer Investments",
    logo: "/images/sponsors/moneylancer.png",
    url: "https://mymoneylancer.com/",
  },
  // Row 3: 4 logos
  {
    name: "Securityium",
    logo: "/images/sponsors/securityium.png",
    url: "https://www.securityium.com/",
  },
  {
    name: "Geeks For Geeks",
    logo: "/images/sponsors/gfg.png",
    url: "https://www.geeksforgeeks.org/",
  },
  {
    name: "Daftar",
    logo: "/images/sponsors/daftar.png",
    url: "https://www.instagram.com/thedaftar/",
  },
  {
    name: "Hack 2 Skill",
    logo: "/images/sponsors/h2s.png",
    url: "https://hack2skill.com/",
  },
  // Row 4: 4 logos
  {
    name: "Bsides Pune",
    logo: "/images/sponsors/bsidespune.png",
    url: "https://www.linkedin.com/company/bsides-pune/",
  },
  {
    name: "Give My Certificate",
    logo: "/images/sponsors/gmc.png",
    url: "https://givemycertificate.com/",
  },
  {
    name: "Aeka Coffee",
    logo: "/images/sponsors/aeka.png",
    url: "https://www.instagram.com/aekascoffee/",
  },
  {
    name: "Zeeve",
    logo: "/images/sponsors/zeeve.png",
    url: "https://www.zeeve.io/",
  },
  // Row 5: 4 logos
  {
    name: "Hack This Fall",
    logo: "/images/sponsors/htf.png",
    url: "https://hackthisfall.tech/",
  },
  {
    name: "Hack The Mountains",
    logo: "/images/sponsors/htm.png",
    url: "https://hackthemountain.tech/",
  },
  {
    name: "Hack The League",
    logo: "/images/sponsors/htl.png",
    url: "https://hacktheleague.com/",
  },
  {
    name: "Pune FOSS 3.0",
    logo: "/images/sponsors/punefoss3.png",
    url: "https://fossunited.org/c/pune/punefoss3",
  },
];

function Sponsors() {
  return (
    <div className="h-auto w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-14 gradient-background">
      <div className="max-w-[89vw] md:max-w-3xl lg:max-w-6xl flex flex-col items-center justify-center text-center gap-4">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">
            Community Backed
          </p>
          <h3 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 z-10">
            Sponsors & Partners
          </h3>
          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">
            TechThrusters is free and open for everyone, made possible by these wonderful sponsors and partners who support our events, programs, and members.
          </p>
        </div>

        <div className="container mx-auto px-4 mt-8 md:mt-10 w-full">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-black/20 to-black/10 backdrop-blur-sm">
            {/* Row 1: 2 logos */}
            <div className="grid grid-cols-2">
              {sponsors.slice(0, 2).map((sponsor, index) => {
                const isLastInRow = index === 1;
                const roundedTopLeft = index === 0;
                const roundedTopRight = index === 1;
                
                let roundedClasses = '';
                if (roundedTopLeft) roundedClasses += ' rounded-tl-2xl';
                if (roundedTopRight) roundedClasses += ' rounded-tr-2xl';
                
                let borderClasses = 'border-t border-l border-white/10';
                if (isLastInRow) borderClasses += ' border-r';
                borderClasses += ' border-b';
                
                return (
                  <Link 
                    key={index}
                    href={sponsor.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center justify-center group ${borderClasses} ${roundedClasses} hover:bg-white/5 transition-all duration-300 relative`}
                    style={{ willChange: 'background-color' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-orange-500/0 transition-all duration-300 pointer-events-none" />
                    <div className="flex items-center justify-center w-full h-20 sm:h-24 md:h-28 p-4 relative z-10">
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={150}
                        height={150}
                        className="object-contain w-full h-full max-w-[120px] grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100 group-hover:scale-110"
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
            
            {/* Row 2: 3 logos */}
            <div className="grid grid-cols-3">
              {sponsors.slice(2, 5).map((sponsor, index) => {
                const actualIndex = index + 2;
                const isLastInRow = index === 2;
                
                let borderClasses = 'border-l border-b border-white/10';
                if (isLastInRow) borderClasses += ' border-r';
                
                return (
                  <Link 
                    key={actualIndex}
                    href={sponsor.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center justify-center group ${borderClasses} hover:bg-white/5 transition-all duration-300 relative`}
                    style={{ willChange: 'background-color' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-orange-500/0 transition-all duration-300 pointer-events-none" />
                    <div className="flex items-center justify-center w-full h-20 sm:h-24 md:h-28 p-4 relative z-10">
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={150}
                        height={150}
                        className="object-contain w-full h-full max-w-[120px] grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100 group-hover:scale-110"
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
            
            {/* Row 3: 4 logos */}
            <div className="grid grid-cols-4">
              {sponsors.slice(5, 9).map((sponsor, index) => {
                const actualIndex = index + 5;
                const isLastInRow = index === 3;
                
                let borderClasses = 'border-l border-b border-white/10';
                if (isLastInRow) borderClasses += ' border-r';
                
                return (
                  <Link 
                    key={actualIndex}
                    href={sponsor.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center justify-center group ${borderClasses} hover:bg-white/5 transition-all duration-300 relative`}
                    style={{ willChange: 'background-color' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-orange-500/0 transition-all duration-300 pointer-events-none" />
                    <div className="flex items-center justify-center w-full h-20 sm:h-24 md:h-28 p-4 relative z-10">
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={150}
                        height={150}
                        className="object-contain w-full h-full max-w-[120px] grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100 group-hover:scale-110"
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
            
            {/* Row 4: 4 logos */}
            <div className="grid grid-cols-4">
              {sponsors.slice(9, 13).map((sponsor, index) => {
                const actualIndex = index + 9;
                const isLastInRow = index === 3;
                
                let borderClasses = 'border-l border-b border-white/10';
                if (isLastInRow) borderClasses += ' border-r';
                
                return (
                  <Link 
                    key={actualIndex}
                    href={sponsor.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center justify-center group ${borderClasses} hover:bg-white/5 transition-all duration-300 relative`}
                    style={{ willChange: 'background-color' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-orange-500/0 transition-all duration-300 pointer-events-none" />
                    <div className="flex items-center justify-center w-full h-20 sm:h-24 md:h-28 p-4 relative z-10">
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={150}
                        height={150}
                        className="object-contain w-full h-full max-w-[120px] grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100 group-hover:scale-110"
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
            
            {/* Row 5: 4 logos */}
            <div className="grid grid-cols-4">
              {sponsors.slice(13).map((sponsor, index) => {
                const actualIndex = index + 13;
                const isLastInRow = index === 3;
                
                // Determine rounded corners for bottom row
                const roundedBottomLeft = index === 0;
                const roundedBottomRight = index === 3;
                
                let roundedClasses = '';
                if (roundedBottomLeft) roundedClasses += ' rounded-bl-2xl';
                if (roundedBottomRight) roundedClasses += ' rounded-br-2xl';
                
                let borderClasses = 'border-l border-b border-white/10';
                if (isLastInRow) borderClasses += ' border-r';
                
                return (
                  <Link 
                    key={actualIndex}
                    href={sponsor.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center justify-center group ${borderClasses} ${roundedClasses} hover:bg-white/5 transition-all duration-300 relative`}
                    style={{ willChange: 'background-color' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-orange-500/0 transition-all duration-300 pointer-events-none" />
                    <div className="flex items-center justify-center w-full h-20 sm:h-24 md:h-28 p-4 relative z-10">
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={150}
                        height={150}
                        className="object-contain w-full h-full max-w-[120px] grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100 group-hover:scale-110"
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
