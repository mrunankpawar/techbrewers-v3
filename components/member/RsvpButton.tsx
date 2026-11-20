'use client';

import Link from 'next/link';
import { useFormState, useFormStatus } from 'react-dom';
import { Check } from 'lucide-react';
import { cancelRsvpAction, rsvpAction, type ActionState } from '@/app/actions/member';

export type RsvpViewer = 'signed-out' | 'no-card' | 'member';

function Submit({ children, tone }: { children: React.ReactNode; tone: 'ember' | 'ghost' }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={
        tone === 'ember'
          ? 'inline-flex h-11 items-center gap-2 rounded-full bg-ember px-5 text-sm font-semibold text-paper transition-colors hover:bg-ember-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 disabled:opacity-60'
          : 'inline-flex h-11 items-center rounded-full px-4 text-sm font-medium text-ink/70 underline underline-offset-4 hover:text-ink disabled:opacity-60'
      }
    >
      {pending ? 'Saving…' : children}
    </button>
  );
}

/** RSVP / cancel for one event, with the right prompt for signed-out members and members without a card. */
export function RsvpButton({
  eventId,
  going,
  full,
  open,
  viewer,
}: {
  eventId: number;
  going: boolean;
  full: boolean;
  open: boolean;
  viewer: RsvpViewer;
}) {
  const [rsvpState, rsvpFormAction] = useFormState<ActionState, FormData>(rsvpAction, null);
  const [cancelState, cancelFormAction] = useFormState<ActionState, FormData>(cancelRsvpAction, null);
  const state = going ? cancelState ?? rsvpState : rsvpState ?? cancelState;

  let body: React.ReactNode;
  if (viewer === 'signed-out') {
    body = (
      <Link href="/sign-up" className="inline-flex h-11 items-center rounded-full bg-ink px-5 text-sm font-semibold text-paper hover:bg-espresso">
        Sign in to RSVP
      </Link>
    );
  } else if (viewer === 'no-card') {
    body = (
      <Link href="/profile#card" className="inline-flex h-11 items-center rounded-full bg-ink px-5 text-sm font-semibold text-paper hover:bg-espresso">
        Set up your card to RSVP
      </Link>
    );
  } else if (going) {
    body = (
      <form action={cancelFormAction} className="flex flex-wrap items-center gap-1">
        <input type="hidden" name="eventId" value={eventId} />
        <span className="inline-flex h-11 items-center gap-2 rounded-full bg-[#e7f3ea] px-4 text-sm font-semibold text-[#1f7a3d]">
          <Check className="h-4 w-4" aria-hidden /> You&apos;re going
        </span>
        <Submit tone="ghost">Cancel RSVP</Submit>
      </form>
    );
  } else if (!open) {
    body = <span className="text-sm font-medium text-ink-soft">RSVPs are closed</span>;
  } else if (full) {
    body = <span className="text-sm font-medium text-ink-soft">This event is full</span>;
  } else {
    body = (
      <form action={rsvpFormAction}>
        <input type="hidden" name="eventId" value={eventId} />
        <Submit tone="ember">RSVP</Submit>
      </form>
    );
  }

  return (
    <div className="flex flex-col items-start gap-2">
      {body}
      {state && !state.ok && (
        <p role="alert" className="text-sm text-[#b42318]">
          {state.message}
        </p>
      )}
    </div>
  );
}
