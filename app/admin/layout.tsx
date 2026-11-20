import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import Navbar from '@/components/Navbar';
import FooterNew from '@/components/FooterNew';
import { SectionLabel } from '@/components/ui/Launch';
import { getCurrentUser } from '@/lib/auth';
import { isDbConfigured } from '@/lib/db';

export const metadata: Metadata = { title: 'Organizer tools | TechThrusters', robots: { index: false, follow: false } };
export const dynamic = 'force-dynamic';

/** Organizer-only area. Middleware already requires sign-in; this checks the role. */
export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const user = await getCurrentUser();
  if (!user) redirect('/sign-up');

  let body = children;
  if (!user.isOrganizer) {
    body = (
      <div className="max-w-xl">
        <h1 className="display mt-5 text-4xl md:text-5xl">
          Organizers <span className="accent text-ember">only.</span>
        </h1>
        <p className="mt-5 text-lg text-ink-soft">
          This area is for TechThrusters organizers. If you should have access, ask an admin to give your account the organizer role, then sign out and back in.
        </p>
        <Link href="/profile" className="mt-8 inline-block text-sm font-semibold text-[#ad450c] underline underline-offset-2">
          Back to your profile
        </Link>
      </div>
    );
  } else if (!isDbConfigured()) {
    body = <p className="mt-5 text-lg text-ink-soft">The database is not connected yet. Add Postgres from Vercel Storage, then redeploy.</p>;
  }

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 pb-24 pt-32 md:pt-40">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <SectionLabel>Organizer tools</SectionLabel>
          {user.isOrganizer && (
            <nav aria-label="Organizer tools" className="flex gap-1 rounded-full border border-ink/10 bg-white p-1 text-sm font-semibold">
              <Link href="/admin" className="rounded-full px-4 py-2 text-ink hover:bg-paper-2">
                Events
              </Link>
              <Link href="/admin/badges" className="rounded-full px-4 py-2 text-ink hover:bg-paper-2">
                Badges
              </Link>
              <Link href="/profile" className="rounded-full px-4 py-2 text-ink-soft hover:bg-paper-2">
                Profile
              </Link>
            </nav>
          )}
        </div>
        <div className="mt-6">{body}</div>
      </main>
      <FooterNew />
    </div>
  );
}
