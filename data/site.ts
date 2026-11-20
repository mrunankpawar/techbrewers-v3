import { DISCORD_URL, SITE_URL, SOCIAL } from '@/lib/constants';
import { TECHTHRUSTERS_TALKS_FORM_URL } from '@/lib/techthrusters-talks';

/**
 * Facts about TechThrusters, shared by the pages, the structured data
 * (JSON-LD) and /llms.txt so humans and agents always see the same thing.
 * Only put things here that are true and current.
 */
export const ORG = {
  name: 'TechThrusters',
  /** Earlier names, from the community journey */
  alternateNames: ['TechBrewers', 'Club TechBrewers', 'Hack Club TechBrewers'],
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo/techthrusters-dark.png`,
  tagline: 'Learn. Connect. Build.',
  description:
    'TechThrusters is a free, open community of developers, designers and makers. Members join workshops, ship projects and meet people shaping what is next in tech.',
  foundingYear: '2021',
  discord: DISCORD_URL,
  /** Direct Discord invite (DISCORD_URL is a short link to the same server) */
  discordInvite: 'https://discord.gg/techthrusters',
  talksForm: TECHTHRUSTERS_TALKS_FORM_URL,
  social: SOCIAL,
} as const;

/** Headline community numbers (homepage) */
export const COMMUNITY_STATS = [
  { value: '1,900+', label: 'Members' },
  { value: '50+', label: 'Events & workshops' },
  { value: '10', label: 'Countries' },
  { value: '4 yrs', label: 'And growing' },
] as const;

/** Meetup numbers (meetups page) */
export const MEETUP_STATS = [
  { value: '7+', label: 'Meetups organized' },
  { value: '14+', label: 'Expert speakers' },
  { value: '500+', label: 'Total attendees' },
] as const;

/** Ongoing community programs */
export const PROGRAMS = [
  {
    name: 'Open Source Project Incubator Program',
    url: 'https://bit.ly/TTOSPI',
    description: 'Helps members build open source projects in public with the community.',
  },
] as const;

export type TeamMember = { name: string; role: string; image: string; linkedin: string };

export const TEAM: TeamMember[] = [
  { name: 'Mrunank Pawar', role: 'Core team', image: '/images/team/mrunanknew.png', linkedin: 'https://www.linkedin.com/in/mrunankpawar/' },
  { name: 'Vaibhav Kadam', role: 'Core team', image: '/images/team/vaibhavnew.png', linkedin: 'https://www.linkedin.com/in/4lph4v/' },
  { name: 'Abhi Savale', role: 'Core team', image: '/images/team/abhinew.png', linkedin: 'https://www.linkedin.com/in/abhijeet-savale/' },
  { name: 'Sana Shaikh', role: 'Core team', image: '/images/team/sananew.png', linkedin: 'https://www.linkedin.com/in/sanashaikh30/' },
];

export type JourneyEntry = { year: number; title: string; description: string; milestones: string[] };

export const JOURNEY: JourneyEntry[] = [
  {
    year: 2021,
    title: "The Beginning",
    description: "What started as a small group of friends became Hack Club TechBrewers—a student-led community built to share opportunities beyond college walls, from open-source to hackathons and learning in public.",
    milestones: [
      "Hack Club TechBrewers founded",
      "First core team of friends",
      "Focus on OSS, hackathons & learning in public"
    ]
  },
  {
    year: 2022,
    title: "Growing Strong",
    description: "We hit our first 100 members, rebranded to Club TechBrewers with a new logo, hosted virtual YouTube sessions, ran a logo design competition and closed the year crossing 500+ community members.",
    milestones: [
      "100 → 500+ members",
      "New logo & Club TechBrewers rebrand",
      "First virtual sessions & logo competition",
      "First in‑person meetup"
    ]
  },
  {
    year: 2023,
    title: "Expanding Horizons",
    description: "Early 2023 we crossed 1000+ members, celebrated with CelCon to bring the community together, and hosted TechBrewers Meetup 2.0 with incredible speakers sharing their journeys and insights.",
    milestones: [
      "1000+ member milestone",
      "CelCon community celebration",
      "TechBrewers Meetup 2.0"
    ]
  },
  {
    year: 2024,
    title: "Reaching New Heights",
    description: "We partnered with events, conferences and hackathons, launched monthly newsletters, hosted a GenAI meetup, ran TechBrewers Meetup 3.0 and rebranded from Club TechBrewers to TechThrusters.",
    milestones: [
      "Community event partnerships",
      "Monthly community newsletter",
      "GenAI meetup",
      "TechBrewers Meetup 3.0",
      "Rebrand to TechThrusters"
    ]
  },
  {
    year: 2025,
    title: "Building Momentum",
    description: "We kicked off monthly build challenges so members could ship something new every month, and launched the Open Source Project Incubator Program to help the community build in public together.",
    milestones: [
      "Monthly build challenges",
      "Open Source Project Incubator Program"
    ]
  },
  {
    year: 2026,
    title: "The Journey Continues",
    description: "As we continue our journey, we're committed to empowering more developers, fostering innovation, and building a stronger tech community together.",
    milestones: ["Ongoing Growth", "Future Initiatives", "Community Expansion"]
  }
];

export type Faq = {
  question: string;
  answer: string;
  /** Optional phrase inside `answer` to render as a link */
  link?: { text: string; href: string };
};

export const FAQS: Faq[] = [
  {
    question: 'How do I join the TechThrusters community?',
    answer:
      "Getting started is simple, join our Discord server. Once you're in, introduce yourself in the welcome channel and start connecting with fellow developers.",
    link: { text: 'Discord server', href: DISCORD_URL },
  },
  {
    question: 'Is TechThrusters free to join?',
    answer:
      'Yes, absolutely! TechThrusters is completely free to join. All our events, workshops, meetups, and community resources are available at no cost. We believe in making tech education and networking accessible to everyone.',
  },
  {
    question: 'What kind of events does TechThrusters organize?',
    answer:
      'We organize a variety of events including virtual monthly meetups with industry experts, hands-on workshops on trending technologies, hackathons, coding challenges, and networking sessions. We also host annual in-person meetups and webinars to accommodate members from different locations.',
  },
  {
    question: 'Do I need to be an experienced developer to join?',
    answer:
      'Not at all! TechThrusters welcomes developers of all skill levels - from complete beginners to seasoned professionals. Our community is designed to be inclusive and supportive, with resources and mentorship opportunities for everyone at every stage of their tech journey.',
  },
  {
    question: 'Can I organize an event or workshop?',
    answer:
      "Absolutely! We encourage community members to share their knowledge. If you have a topic you'd like to present or a workshop you'd like to organize, reach out to our team through Discord. We'll help you plan and promote your event to the community.",
  },
];
