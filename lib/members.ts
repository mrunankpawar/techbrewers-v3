import { db } from './db';
import {
  LIMITS,
  cleanGithub,
  cleanLinkedin,
  cleanTags,
  cleanText,
  cleanUrl,
} from './validation';

export type Member = {
  userId: string;
  name: string;
  headline: string;
  city: string;
  skills: string[];
  learning: string[];
  github: string;
  linkedin: string;
  website: string;
  showInDirectory: boolean;
  openToMatch: boolean;
  createdAt: Date;
};

type Row = {
  user_id: string;
  name: string;
  headline: string;
  city: string;
  skills: string[];
  learning: string[];
  github: string;
  linkedin: string;
  website: string;
  show_in_directory: boolean;
  open_to_match: boolean;
  created_at: Date;
};

export const toMember = (r: Row): Member => ({
  userId: r.user_id,
  name: r.name,
  headline: r.headline,
  city: r.city,
  skills: r.skills,
  learning: r.learning,
  github: r.github,
  linkedin: r.linkedin,
  website: r.website,
  showInDirectory: r.show_in_directory,
  openToMatch: r.open_to_match,
  createdAt: r.created_at,
});

export async function getMember(userId: string): Promise<Member | null> {
  const sql = await db();
  const [row] = await sql<Row[]>`SELECT * FROM members WHERE user_id = ${userId}`;
  return row ? toMember(row) : null;
}

/** A member's public card: only when they chose to show it. */
export async function getPublicMember(userId: string): Promise<Member | null> {
  const sql = await db();
  const [row] = await sql<Row[]>`SELECT * FROM members WHERE user_id = ${userId} AND show_in_directory`;
  return row ? toMember(row) : null;
}

export type MemberInput = Record<string, unknown>;

/** Validates form input and creates or updates the member's card. */
export async function saveMember(userId: string, input: MemberInput): Promise<Member> {
  const values = {
    name: cleanText(input.name, LIMITS.name, 'Name', true),
    headline: cleanText(input.headline, LIMITS.headline, 'Headline'),
    city: cleanText(input.city, LIMITS.city, 'City'),
    skills: cleanTags(input.skills, 'skills'),
    learning: cleanTags(input.learning, 'learning goals'),
    github: cleanGithub(input.github),
    linkedin: cleanLinkedin(input.linkedin),
    website: cleanUrl(input.website, 'Website'),
    show_in_directory: input.showInDirectory === true || input.showInDirectory === 'on',
    open_to_match: input.openToMatch === true || input.openToMatch === 'on',
  };
  const sql = await db();
  const [row] = await sql<Row[]>`
    INSERT INTO members ${sql({ user_id: userId, ...values })}
    ON CONFLICT (user_id) DO UPDATE SET
      name = EXCLUDED.name,
      headline = EXCLUDED.headline,
      city = EXCLUDED.city,
      skills = EXCLUDED.skills,
      learning = EXCLUDED.learning,
      github = EXCLUDED.github,
      linkedin = EXCLUDED.linkedin,
      website = EXCLUDED.website,
      show_in_directory = EXCLUDED.show_in_directory,
      open_to_match = EXCLUDED.open_to_match,
      updated_at = now()
    RETURNING *`;
  return toMember(row);
}

/** Organizer search over all members (for awarding badges). */
export async function searchMembers(query: string, limit = 20): Promise<Member[]> {
  const q = query.trim();
  const sql = await db();
  const rows = q
    ? await sql<Row[]>`SELECT * FROM members WHERE name ILIKE ${'%' + q.replace(/[%_\\]/g, (c) => '\\' + c) + '%'} ORDER BY name LIMIT ${limit}`
    : await sql<Row[]>`SELECT * FROM members ORDER BY created_at DESC LIMIT ${limit}`;
  return rows.map(toMember);
}
