'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'talks', label: 'TechThrusters Talks' },
  { id: 'pillars', label: 'Learn, connect, build' },
  { id: 'sponsors', label: 'Sponsors' },
  { id: 'team', label: 'Team' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'footer', label: 'Footer' },
] as const;

export default function HomeScrollSpy() {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState<string>('home');

  useEffect(() => {
    if (pathname !== '/') return;

    const elements = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting && e.target.id)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActiveId(visible.target.id);
        }
      },
      {
        root: null,
        rootMargin: '-42% 0px -42% 0px',
        threshold: [0, 0.08, 0.15, 0.25, 0.4, 0.6],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  if (pathname !== '/') return null;

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav
      className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-2.5 md:flex"
      aria-label="On this page"
    >
      {SECTIONS.map((section) => (
        <button
          key={section.id}
          type="button"
          aria-label={`Go to ${section.label}`}
          aria-current={activeId === section.id ? 'true' : undefined}
          onClick={() => scrollTo(section.id)}
          className={cn(
            'h-2 w-2 rounded-full ring-2 ring-transparent transition-all duration-300',
            activeId === section.id
              ? 'scale-125 bg-orange-500 shadow-[0_0_12px_rgba(197,79,14,0.55)] ring-orange-400/40'
              : 'bg-black/20 hover:bg-black/35 dark:bg-white/20 dark:hover:bg-white/40'
          )}
        />
      ))}
    </nav>
  );
}
