import { isDbConfigured } from './db';
import { session, createSdk } from '@descope/nextjs-sdk/server';

export type CurrentUser = {
  /** Descope user id (the session token's "sub") */
  id: string;
  /** Has the Descope role "organizer" */
  isOrganizer: boolean;
};

export const ORGANIZER_ROLE = 'organizer';

let sdk: ReturnType<typeof createSdk> | undefined;
const descope = () => (sdk ??= createSdk({ projectId: process.env.NEXT_PUBLIC_DESCOPE_PROJECT_ID }));

/**
 * The signed-in member, from the Descope session cookie, validated on the
 * server. Returns null when signed out.
 *
 * Local development only: with NODE_ENV=development and DEV_AUTH_USER_ID set
 * in .env.local, that id is treated as signed in (DEV_AUTH_ORGANIZER=1 adds the
 * organizer role), so the member features can be tried without a real Descope
 * project. Never active in production builds, where NODE_ENV is "production".
 */
export async function getCurrentUser(): Promise<CurrentUser | null> {
  if (process.env.NODE_ENV === 'development' && process.env.DEV_AUTH_USER_ID) {
    return { id: process.env.DEV_AUTH_USER_ID, isOrganizer: process.env.DEV_AUTH_ORGANIZER === '1' };
  }
  const info = await session();
  const id = info?.token?.sub;
  if (!info || typeof id !== 'string' || !id) return null;
  return { id, isOrganizer: descope().validateRoles(info, [ORGANIZER_ROLE]) };
}

export async function requireUser(): Promise<CurrentUser> {
  const user = await getCurrentUser();
  if (!user) throw new Error('Please sign in first.');
  return user;
}

export async function requireOrganizer(): Promise<CurrentUser> {
  const user = await requireUser();
  if (!user.isOrganizer) throw new Error('Only organizers can do that.');
  return user;
}

/**
 * For organizer pages. Next.js renders pages in parallel with layouts, so each
 * page checks the role itself instead of trusting the layout's check.
 */
export async function canUseOrganizerTools(): Promise<boolean> {
  const user = await getCurrentUser();
  return Boolean(user?.isOrganizer && isDbConfigured());
}
