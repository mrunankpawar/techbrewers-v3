'use client';

import { useFormState } from 'react-dom';
import { Field, FormStatus, SubmitButton, Toggle, inputClass as input } from '@/components/ui/Form';
import { saveCardAction, type ActionState } from '@/app/actions/member';
import type { Member } from '@/lib/members';
import { LIMITS } from '@/lib/validation';

/** Create or edit the signed-in member's card. */
export function CardForm({ member, suggestedName }: { member: Member | null; suggestedName: string }) {
  const [state, action] = useFormState<ActionState, FormData>(saveCardAction, null);
  return (
    <form action={action} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="card-name" label="Name">
          <input id="card-name" name="name" required maxLength={LIMITS.name} defaultValue={member?.name ?? suggestedName} autoComplete="name" className={input} />
        </Field>
        <Field id="card-city" label="City">
          <input id="card-city" name="city" maxLength={LIMITS.city} defaultValue={member?.city} placeholder="Pune" autoComplete="address-level2" className={input} />
        </Field>
      </div>
      <Field id="card-headline" label="Headline" hint="One line about what you do.">
        <input id="card-headline" name="headline" maxLength={LIMITS.headline} defaultValue={member?.headline} placeholder="Backend developer at a fintech startup" className={input} />
      </Field>
      <Field id="card-skills" label="What you know" hint={`Separate with commas, up to ${LIMITS.tags}.`}>
        <input id="card-skills" name="skills" defaultValue={member?.skills.join(', ')} placeholder="Go, Postgres, Docker" className={input} />
      </Field>
      <Field id="card-learning" label="What you're learning" hint="Used to find you a study or build buddy.">
        <input id="card-learning" name="learning" defaultValue={member?.learning.join(', ')} placeholder="Rust, Kubernetes" className={input} />
      </Field>
      <div className="grid gap-5 sm:grid-cols-3">
        <Field id="card-github" label="GitHub">
          <input id="card-github" name="github" defaultValue={member?.github.replace('https://github.com/', '')} placeholder="username" className={input} />
        </Field>
        <Field id="card-linkedin" label="LinkedIn">
          <input id="card-linkedin" name="linkedin" defaultValue={member?.linkedin} placeholder="linkedin.com/in/you" className={input} />
        </Field>
        <Field id="card-website" label="Website">
          <input id="card-website" name="website" type="url" inputMode="url" defaultValue={member?.website} placeholder="yoursite.dev" className={input} />
        </Field>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <Toggle
          id="card-public"
          name="showInDirectory"
          defaultChecked={member?.showInDirectory ?? false}
          title="Show my card publicly"
          body="Anyone with your card link can see it. Your email is never shown."
        />
        <Toggle
          id="card-match"
          name="openToMatch"
          defaultChecked={member?.openToMatch ?? false}
          title="Find me a buddy"
          body="Match me with members who share my skills or learning goals. They'll see this card."
        />
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <SubmitButton>Save card</SubmitButton>
        <FormStatus state={state} />
      </div>
    </form>
  );
}
