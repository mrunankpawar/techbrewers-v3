'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const tabs = [
  { name: 'Upcoming', href: '/events/upcoming' },
  { name: 'Partner events', href: '/events/partners' },
  { name: 'Livestreams', href: '/events/livestreams' },
];

/** Segmented control for moving between the three events pages. */
export default function EventsTabs() {
  const pathname = usePathname();
  return (
    <nav aria-label="Events sections" className="-mx-1 max-w-full overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <ul className="inline-flex gap-1 rounded-full border border-ink/10 bg-white/70 p-1 backdrop-blur">
        {tabs.map((t) => {
          const active = pathname === t.href;
          return (
            <li key={t.href}>
              <Link
                href={t.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'block whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  active ? 'bg-ink text-paper' : 'text-ink/70 hover:bg-ink/5 hover:text-ink'
                )}
              >
                {t.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
