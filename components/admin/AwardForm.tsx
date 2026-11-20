'use client';

import { useFormState } from 'react-dom';
import { awardBadgeAction } from '@/app/actions/admin';
import type { ActionState } from '@/app/actions/member';
import { Field, FormStatus, SubmitButton, inputClass } from '@/components/ui/Form';
import { LIMITS } from '@/lib/validation';

/** Award a Speaker or Shipped badge to one member. */
export function AwardForm({ userId, name, events }: { userId: string; name: string; events: { id: number; title: string }[] }) {
  const [state, action] = useFormState<ActionState, FormData>(awardBadgeAction, null);
  const p = `aw-${userId.replace(/[^a-zA-Z0-9]/g, '')}`;
  return (
    <form action={action} className="space-y-4" noValidate>
      <input type="hidden" name="userId" value={userId} />
      <fieldset>
        <legend className="text-sm font-semibold text-ink">Badge for {name}</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {[
            { v: 'speaker', l: 'Speaker' },
            { v: 'shipped', l: 'Shipped' },
          ].map((k, i) => (
            <label key={k.v} className="cursor-pointer rounded-full border border-ink/15 bg-white px-4 py-2 text-sm font-medium has-[:checked]:border-ember has-[:checked]:bg-ember/10 has-[:checked]:text-ember-deep">
              <input type="radio" name="kind" value={k.v} defaultChecked={i === 0} className="sr-only" />
              {k.l}
            </label>
          ))}
        </div>
      </fieldset>
      <Field id={`${p}-note`} label="Talk title or project name">
        <input id={`${p}-note`} name="note" required maxLength={LIMITS.note} className={inputClass} />
      </Field>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id={`${p}-url`} label="Link" hint="Optional: slides, repo or demo.">
          <input id={`${p}-url`} name="url" type="url" inputMode="url" className={inputClass} />
        </Field>
        <Field id={`${p}-event`} label="Event" hint="Optional.">
          <select id={`${p}-event`} name="eventId" defaultValue="" className={inputClass}>
            <option value="">None</option>
            {events.map((e) => (
              <option key={e.id} value={e.id}>
                {e.title}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <SubmitButton pendingLabel="Awarding…">Award badge</SubmitButton>
        <FormStatus state={state} />
      </div>
    </form>
  );
}
