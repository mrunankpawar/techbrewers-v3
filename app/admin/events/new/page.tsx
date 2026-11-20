import { canUseOrganizerTools } from '@/lib/auth';
import Link from 'next/link';
import { EventForm, EMPTY_EVENT } from '@/components/admin/EventForm';

export default async function NewEventPage() {
  if (!(await canUseOrganizerTools())) return null; // the layout explains why
  return (
    <div className="max-w-3xl">
      <Link href="/admin" className="text-sm font-semibold text-ink-soft hover:text-ink">
        ‹ All events
      </Link>
      <h1 className="display mt-4 text-4xl md:text-6xl">
        New <span className="accent text-ember">event.</span>
      </h1>
      <div className="mt-10">
        <EventForm values={EMPTY_EVENT} />
      </div>
    </div>
  );
}
