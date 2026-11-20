/** Input cleaning for member and event forms. Everything users type passes through here. */

export const LIMITS = {
  name: 80,
  headline: 120,
  city: 60,
  tag: 32,
  tags: 12,
  url: 200,
  eventTitle: 120,
  eventDescription: 2000,
  venue: 120,
  note: 160,
};

export class ValidationError extends Error {}

export function cleanText(value: unknown, max: number, field: string, required = false): string {
  const s = typeof value === 'string' ? value.replace(/\s+/g, ' ').trim() : '';
  if (required && !s) throw new ValidationError(`${field} is required.`);
  if (s.length > max) throw new ValidationError(`${field} must be ${max} characters or fewer.`);
  return s;
}

/** Multi-line text: keeps line breaks, trims each line. */
export function cleanLongText(value: unknown, max: number, field: string): string {
  const s = typeof value === 'string' ? value.replace(/\r\n?/g, '\n').split('\n').map((l) => l.trim()).join('\n').trim() : '';
  if (s.length > max) throw new ValidationError(`${field} must be ${max} characters or fewer.`);
  return s;
}

/** "React, TypeScript,  rust" -> ["React", "TypeScript", "rust"], de-duplicated case-insensitively. */
export function cleanTags(value: unknown, field: string): string[] {
  const raw = Array.isArray(value) ? value.join(',') : typeof value === 'string' ? value : '';
  const out: string[] = [];
  const seen = new Set<string>();
  for (const part of raw.split(/[,\n]/)) {
    const tag = part.replace(/\s+/g, ' ').trim();
    if (!tag) continue;
    if (tag.length > LIMITS.tag) throw new ValidationError(`Each ${field} entry must be ${LIMITS.tag} characters or fewer.`);
    const key = tag.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(tag);
  }
  if (out.length > LIMITS.tags) throw new ValidationError(`Add at most ${LIMITS.tags} ${field}.`);
  return out;
}

/** Accepts a full http(s) URL; returns '' for empty input. */
export function cleanUrl(value: unknown, field: string): string {
  const s = typeof value === 'string' ? value.trim() : '';
  if (!s) return '';
  if (s.length > LIMITS.url) throw new ValidationError(`${field} is too long.`);
  let u: URL;
  try {
    u = new URL(/^https?:\/\//i.test(s) ? s : `https://${s}`);
  } catch {
    throw new ValidationError(`${field} must be a web address.`);
  }
  if (u.protocol !== 'https:' && u.protocol !== 'http:') throw new ValidationError(`${field} must be a web address.`);
  return u.toString();
}

/** GitHub: accepts "octocat", "@octocat" or a github.com URL. */
export function cleanGithub(value: unknown): string {
  const s = typeof value === 'string' ? value.trim() : '';
  if (!s) return '';
  const handle = s.replace(/^@/, '').replace(/^https?:\/\/(www\.)?github\.com\//i, '').replace(/\/.*$/, '');
  if (!/^[A-Za-z0-9](?:[A-Za-z0-9-]{0,38})$/.test(handle)) throw new ValidationError('GitHub must be a username or a github.com link.');
  return `https://github.com/${handle}`;
}

/** LinkedIn: accepts a linkedin.com/in/... link or just the profile handle. */
export function cleanLinkedin(value: unknown): string {
  const s = typeof value === 'string' ? value.trim() : '';
  if (!s) return '';
  const m = s.match(/^(?:https?:\/\/)?(?:[a-z]{2,3}\.)?linkedin\.com\/in\/([A-Za-z0-9_-]{2,100})\/?/i);
  const handle = m ? m[1] : s.replace(/^@/, '');
  if (!/^[A-Za-z0-9_-]{2,100}$/.test(handle)) throw new ValidationError('LinkedIn must be a linkedin.com/in/… link or your profile handle.');
  return `https://www.linkedin.com/in/${handle}/`;
}

export function slugify(title: string): string {
  return (
    title
      .toLowerCase()
      .normalize('NFKD')
      .replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 60) || 'event'
  );
}

/** Same-origin path check for "return to" redirects. */
export function safeReturnPath(value: unknown, fallback: string): string {
  const s = typeof value === 'string' ? value : '';
  return s.startsWith('/') && !s.startsWith('//') ? s : fallback;
}
