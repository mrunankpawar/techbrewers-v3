'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { getCurrentUser, type CurrentUser } from '@/lib/auth';
import { isDbConfigured } from '@/lib/db';
import { createEvent, deleteEvent, setAttendance, updateEvent } from '@/lib/events';
import { awardBadge, revokeBadge } from '@/lib/badges';
import { ValidationError } from '@/lib/validation';
import type { ActionState } from './member';

/** Every organizer action checks the role itself; hiding the page is not enough. */
async function organizer(): Promise<CurrentUser | null> {
  if (!isDbConfigured()) return null;
  const user = await getCurrentUser();
  return user?.isOrganizer ? user : null;
}

const DENIED: ActionState = { ok: false, message: 'Only organizers can do that. Sign in again if your role just changed.' };

function failure(err: unknown, fallback: string): ActionState {
  if (err instanceof ValidationError) return { ok: false, message: err.message };
  console.error(fallback, err);
  return { ok: false, message: fallback };
}

function positiveInt(value: FormDataEntryValue | null): number | null {
  const n = Number(value);
  return Number.isInteger(n) && n > 0 ? n : null;
}

function refreshEventPages(eventId?: number) {
  revalidatePath('/admin');
  if (eventId) revalidatePath(`/admin/events/${eventId}`);
  revalidatePath('/events/upcoming');
  revalidatePath('/profile');
}

export async function saveEventAction(_prev: ActionState, formData: FormData): Promise<ActionState> {
  const user = await organizer();
  if (!user) return DENIED;
  const id = positiveInt(formData.get('id'));
  const input = Object.fromEntries(formData);
  let createdId: number | null = null;
  try {
    if (id) await updateEvent(id, input);
    else createdId = await createEvent(user.id, input);
  } catch (err) {
    return failure(err, 'Could not save the event. Please try again.');
  }
  refreshEventPages(id ?? createdId ?? undefined);
  // redirect() throws, so it stays outside the try block
  if (createdId) redirect(`/admin/events/${createdId}?created=1`);
  return { ok: true, message: 'Event saved.' };
}

export async function deleteEventAction(formData: FormData) {
  const user = await organizer();
  const id = positiveInt(formData.get('id'));
  if (!user || !id) return;
  await deleteEvent(id);
  refreshEventPages();
  redirect('/admin');
}

export async function setAttendanceAction(formData: FormData) {
  const user = await organizer();
  const eventId = positiveInt(formData.get('eventId'));
  const userId = formData.get('userId');
  if (!user || !eventId || typeof userId !== 'string' || !userId) return;
  await setAttendance(eventId, userId, formData.get('attended') === '1', user.id);
  refreshEventPages(eventId);
  revalidatePath(`/members/${userId}`);
}

export async function awardBadgeAction(_prev: ActionState, formData: FormData): Promise<ActionState> {
  const user = await organizer();
  if (!user) return DENIED;
  try {
    await awardBadge(user.id, Object.fromEntries(formData));
  } catch (err) {
    return failure(err, 'Could not award the badge. Please try again.');
  }
  revalidatePath('/admin/badges');
  revalidatePath('/profile');
  const userId = formData.get('userId');
  if (typeof userId === 'string') revalidatePath(`/members/${userId}`);
  return { ok: true, message: 'Badge awarded.' };
}

export async function revokeBadgeAction(formData: FormData) {
  const user = await organizer();
  const id = positiveInt(formData.get('id'));
  if (!user || !id) return;
  await revokeBadge(id);
  revalidatePath('/admin/badges');
  revalidatePath('/profile');
}
