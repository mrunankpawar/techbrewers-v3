import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';

// Pages that are per-user or transient; nothing for crawlers there.
const PRIVATE = ['/profile', '/auth/'];

// AI assistants and answer engines we explicitly welcome, so agents can cite
// TechThrusters accurately. (The catch-all rule allows them too; listing them
// makes the intent explicit.)
const AI_AGENTS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'CCBot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: PRIVATE },
      { userAgent: AI_AGENTS, allow: '/', disallow: PRIVATE },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
