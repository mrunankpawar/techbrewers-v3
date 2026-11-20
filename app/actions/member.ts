'use server';

import { revalidatePath } from 'next/cache';
import { getCurrentUser } from '@/lib/auth';
import { isDbConfigured } from '@/lib/db';
import { getMember, saveMember } from '@/lib/members';
import { cancelRsvp, rsvp, RsvpError } from '@/lib/events';
import { ValidationError } from '@/lib/validation';

export type ActionState = { ok: boolean; message: string } | null;

const NOT_READY: ActionState = { ok: false, message: 'Member accounts are not switched on yet. Please try again later.' };

function failure(err: unknown, fallback: string): ActionState {
  if (err instanceof ValidationError || err instanceof RsvpError) return { ok: false, message: err.message };
  console.error(fallback, err);
  return { ok: false, message: fallback };
}

export async function saveCardAction(_prev: ActionState, formData: FormData): Promise<ActionState> {
  if (!isDbConfigured()) return NOT_READY;
  const user = await getCurrentUser();
  if (!user) return { ok: false, message: 'Your session has ended. Sign in again to save your card.' };
  try {
    await saveMember(user.id, Object.fromEntries(formData));
  } catch (err) {
    return failure(err, 'Could not save your card. Please try again.');
  }
  revalidatePath('/profile');
  revalidatePath(`/members/${user.id}`);
  return { ok: true, message: 'Card saved.' };
}

function eventIdFrom(formData: FormData): number | null {
  const id = Number(formData.get('eventId'));
  return Number.isInteger(id) && id > 0 ? id : null;
}

export async function rsvpAction(_prev: ActionState, formData: FormData): Promise<ActionState> {
  if (!isDbConfigured()) return NOT_READY;
  const user = await getCurrentUser();
  if (!user) return { ok: false, message: 'Sign in to RSVP.' };
  const eventId = eventIdFrom(formData);
  if (!eventId) return { ok: false, message: 'That event no longer exists.' };
  try {
    if (!(await getMember(user.id))) return { ok: false, message: 'Set up your member card first, then RSVP.' };
    await rsvp(user.id, eventId);
  } catch (err) {
    return failure(err, 'Could not save your RSVP. Please try again.');
  }
  revalidatePath('/events/upcoming');
  revalidatePath('/profile');
  return { ok: true, message: "You're going." };
}

export async function cancelRsvpAction(_prev: ActionState, formData: FormData): Promise<ActionState> {
  if (!isDbConfigured()) return NOT_READY;
  const user = await getCurrentUser();
  if (!user) return { ok: false, message: 'Sign in first.' };
  const eventId = eventIdFrom(formData);
  if (!eventId) return { ok: false, message: 'That event no longer exists.' };
  try {
    await cancelRsvp(user.id, eventId);
  } catch (err) {
    return failure(err, 'Could not cancel your RSVP. Please try again.');
  }
  revalidatePath('/events/upcoming');
  revalidatePath('/profile');
  return { ok: true, message: 'RSVP cancelled.' };
}
