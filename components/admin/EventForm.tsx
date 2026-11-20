'use client';

import { useFormState } from 'react-dom';
import { saveEventAction } from '@/app/actions/admin';
import type { ActionState } from '@/app/actions/member';
import { Field, FormStatus, SubmitButton, Toggle, inputClass } from '@/components/ui/Form';
import { DEFAULT_TIMEZONE, EVENT_TIMEZONES } from '@/lib/time';
import { LIMITS } from '@/lib/validation';

export type EventFormValues = {
  id?: number;
  title: string;
  description: string;
  /** Wall time in the event's timezone, "YYYY-MM-DDTHH:mm" */
  startsAt: string;
  endsAt: string;
  timezone: string;
  venue: string;
  city: string;
  onlineUrl: string;
  capacity: string;
  rsvpOpen: boolean;
  published: boolean;
};

export const EMPTY_EVENT: EventFormValues = {
  title: '',
  description: '',
  startsAt: '',
  endsAt: '',
  timezone: DEFAULT_TIMEZONE,
  venue: '',
  city: '',
  onlineUrl: '',
  capacity: '',
  rsvpOpen: true,
  published: true,
};

/** Create or edit an event. Times are entered as local time where the event happens. */
export function EventForm({ values }: { values: EventFormValues }) {
  const [state, action] = useFormState<ActionState, FormData>(saveEventAction, null);
  return (
    <form action={action} className="space-y-5" noValidate>
      {values.id && <input type="hidden" name="id" value={values.id} />}
      <Field id="ev-title" label="Title">
        <input id="ev-title" name="title" required maxLength={LIMITS.eventTitle} defaultValue={values.title} placeholder="TechThrusters Build Night: AI agents" className={inputClass} />
      </Field>
      <Field id="ev-description" label="Description" hint="Plain text. Line breaks are kept.">
        <textarea id="ev-description" name="description" rows={5} maxLength={LIMITS.eventDescription} defaultValue={values.description} className={inputClass} />
      </Field>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="ev-start" label="Starts">
          <input id="ev-start" name="startsAt" type="datetime-local" required defaultValue={values.startsAt} className={inputClass} />
        </Field>
        <Field id="ev-end" label="Ends" hint="Optional.">
          <input id="ev-end" name="endsAt" type="datetime-local" defaultValue={values.endsAt} className={inputClass} />
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="ev-tz" label="Time zone" hint="Times above are local to this zone.">
          <select id="ev-tz" name="timezone" defaultValue={values.timezone} className={inputClass}>
            {EVENT_TIMEZONES.map((tz) => (
              <option key={tz.id} value={tz.id}>
                {tz.label}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="ev-venue" label="Venue" hint="Leave empty for an online-only event.">
          <input id="ev-venue" name="venue" maxLength={LIMITS.venue} defaultValue={values.venue} placeholder="Builders Hub, Baner" className={inputClass} />
        </Field>
        <Field id="ev-city" label="City">
          <input id="ev-city" name="city" maxLength={LIMITS.city} defaultValue={values.city} placeholder="Pune" className={inputClass} />
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="ev-online" label="Online link" hint="Only shown to people who RSVP'd.">
          <input id="ev-online" name="onlineUrl" type="url" inputMode="url" defaultValue={values.onlineUrl} placeholder="https://meet.google.com/..." className={inputClass} />
        </Field>
        <Field id="ev-capacity" label="Capacity" hint="Empty for no limit.">
          <input id="ev-capacity" name="capacity" type="number" min={1} inputMode="numeric" defaultValue={values.capacity} className={inputClass} />
        </Field>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <Toggle id="ev-published" name="published" defaultChecked={values.published} title="Published" body="Shown on the Upcoming events page." />
        <Toggle id="ev-rsvp" name="rsvpOpen" defaultChecked={values.rsvpOpen} title="RSVPs open" body="Members can RSVP until the event is over or full." />
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <SubmitButton>{values.id ? 'Save changes' : 'Create event'}</SubmitButton>
        <FormStatus state={state} />
      </div>
    </form>
  );
}
