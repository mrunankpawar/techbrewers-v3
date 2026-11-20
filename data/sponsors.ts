/** Logos are pre-trimmed to their artwork (see public/images/sponsors/trimmed); w/h are the trimmed pixel sizes. */
export type Sponsor = { name: string; logo: string; url: string; w: number; h: number };

export const SPONSORS: Sponsor[] = [
  { name: 'GitHub', logo: '/images/sponsors/trimmed/github.png', url: 'https://github.com/', w: 640, h: 190 },
  { name: 'Peerlist', logo: '/images/sponsors/trimmed/peerlist.png', url: 'https://peerlist.io/', w: 640, h: 165 },
  { name: 'Azure Developer Community', logo: '/images/sponsors/trimmed/adc.png', url: 'https://azdev.reskilll.com/', w: 579, h: 176 },
  { name: 'Cloud Native Day Pune', logo: '/images/sponsors/trimmed/cnd.png', url: 'https://www.cloudnativepune.com/', w: 381, h: 319 },
  { name: 'Moneylancer Investments', logo: '/images/sponsors/trimmed/moneylancer.png', url: 'https://mymoneylancer.com/', w: 640, h: 640 },
  { name: 'Securityium', logo: '/images/sponsors/trimmed/securityium.png', url: 'https://www.securityium.com/', w: 476, h: 181 },
  { name: 'GeeksforGeeks', logo: '/images/sponsors/trimmed/gfg.png', url: 'https://www.geeksforgeeks.org/', w: 388, h: 206 },
  { name: 'Daftar', logo: '/images/sponsors/trimmed/daftar.png', url: 'https://www.instagram.com/thedaftar/', w: 375, h: 130 },
  { name: 'Hack2Skill', logo: '/images/sponsors/trimmed/h2s.png', url: 'https://hack2skill.com/', w: 417, h: 168 },
  { name: 'BSides Pune', logo: '/images/sponsors/trimmed/bsidespune.png', url: 'https://www.linkedin.com/company/bsides-pune/', w: 484, h: 234 },
  { name: 'Give My Certificate', logo: '/images/sponsors/trimmed/gmc.png', url: 'https://givemycertificate.com/', w: 424, h: 455 },
  { name: 'Aeka Coffee', logo: '/images/sponsors/trimmed/aeka.png', url: 'https://www.instagram.com/aekascoffee/', w: 640, h: 291 },
  { name: 'Zeeve', logo: '/images/sponsors/trimmed/zeeve.png', url: 'https://www.zeeve.io/', w: 417, h: 287 },
  { name: 'Hack This Fall', logo: '/images/sponsors/trimmed/htf.png', url: 'https://hackthisfall.tech/', w: 498, h: 220 },
  { name: 'Hack The Mountains', logo: '/images/sponsors/trimmed/htm.png', url: 'https://hackthemountain.tech/', w: 472, h: 266 },
  { name: 'Hack The League', logo: '/images/sponsors/trimmed/htl.png', url: 'https://hacktheleague.com/', w: 409, h: 494 },
  { name: 'Pune FOSS 3.0', logo: '/images/sponsors/trimmed/punefoss3.png', url: 'https://fossunited.org/c/pune/punefoss3', w: 500, h: 132 },
];
