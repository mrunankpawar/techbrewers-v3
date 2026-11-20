'use client';

import { useFormStatus } from 'react-dom';
import type { ActionState } from '@/app/actions/member';

/** Shared form primitives for the member card and organizer tools. */

export const inputClass =
  'mt-1.5 block w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink placeholder:text-ink/40 focus:border-ember focus:outline-none focus:ring-2 focus:ring-ember/30';

export function Field({ id, label, hint, children }: { id: string; label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-ink">
        {label}
      </label>
      {children}
      {hint && <p className="mt-1 text-xs text-[#726b63]">{hint}</p>}
    </div>
  );
}

export function Toggle({ id, name, defaultChecked, title, body }: { id: string; name: string; defaultChecked: boolean; title: string; body: string }) {
  return (
    <label htmlFor={id} className="flex cursor-pointer items-start gap-3 rounded-2xl border border-ink/10 bg-white p-4 has-[:checked]:border-ember/50 has-[:checked]:bg-ember/5">
      <input id={id} name={name} type="checkbox" defaultChecked={defaultChecked} className="mt-1 h-4 w-4 accent-[#c54f0e]" />
      <span>
        <span className="block text-sm font-semibold text-ink">{title}</span>
        <span className="block text-sm text-ink-soft">{body}</span>
      </span>
    </label>
  );
}

export function SubmitButton({ children, pendingLabel = 'Saving…' }: { children: React.ReactNode; pendingLabel?: string }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex h-12 items-center rounded-full bg-ember px-6 text-sm font-semibold text-paper transition-colors hover:bg-ember-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 disabled:opacity-60"
    >
      {pending ? pendingLabel : children}
    </button>
  );
}

export function FormStatus({ state }: { state: ActionState }) {
  return (
    <p role="status" aria-live="polite" className={state ? (state.ok ? 'text-sm font-medium text-[#1f7a3d]' : 'text-sm font-medium text-[#b42318]') : 'sr-only'}>
      {state?.message ?? ''}
    </p>
  );
}
