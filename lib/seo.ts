import { SITE_URL } from './constants';

export type OgName =
  | 'home'
  | 'community'
  | 'meetup'
  | 'talks'
  | 'events-upcoming'
  | 'events-partners'
  | 'events-livestreams';

/**
 * Link-preview image for a page (1200×630, in public/images/og).
 * Pages that set their own `openGraph` replace the layout's defaults rather
 * than merging with them, so every such page must list its image explicitly.
 */
export function ogImage(name: OgName, alt: string) {
  return { url: `${SITE_URL}/images/og/${name}.jpg`, width: 1200, height: 630, alt };
}
