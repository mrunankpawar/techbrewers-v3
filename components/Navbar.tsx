'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ChevronDown, LogOut, Menu, User, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useDescope, useSession, useUser } from '@descope/nextjs-sdk/client';
import { DISCORD_URL } from '@/lib/constants';

const mainLinks = [
  { name: 'Community', href: '/community' },
  { name: 'Meetups', href: '/meetup' },
  { name: 'Talks', href: '/talks' },
] as const;

const eventLinks = [
  { name: 'Upcoming', href: '/events/upcoming', description: 'TechThrusters sessions' },
  { name: 'Partner events', href: '/events/partners', description: 'Meetups with partner communities' },
  { name: 'Livestreams', href: '/events/livestreams', description: 'Past talks on YouTube' },
] as const;

const isActive = (pathname: string, href: string) => pathname === href || pathname.startsWith(`${href}/`);

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const eventsRef = useRef<HTMLLIElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Descope
  const { isAuthenticated, isSessionLoading } = useSession();
  const { user } = useUser();
  const sdk = useDescope();
  const firstName = user?.name?.split(' ')[0] || user?.email?.split('@')[0] || 'Account';

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const y = window.scrollY;
        setIsScrolled(y > 20);
        const delta = y - lastY;
        if (y < 120) setIsHidden(false);
        else if (delta > 6) setIsHidden(true);
        else if (delta < -6) setIsHidden(false);
        lastY = y;
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Never hide while a menu is open
  const hidden = isHidden && !mobileOpen && !eventsOpen && !userMenuOpen;

  // Close everything on navigation
  useEffect(() => {
    setMobileOpen(false);
    setEventsOpen(false);
    setUserMenuOpen(false);
  }, [pathname]);

  // Outside click + Escape for desktop dropdowns
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (eventsRef.current && !eventsRef.current.contains(e.target as Node)) setEventsOpen(false);
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) setUserMenuOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      setEventsOpen(false);
      setUserMenuOpen(false);
      setMobileOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  // Mobile sheet: lock scroll and manage focus
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();
    const toggle = menuButtonRef.current;
    return () => {
      document.body.style.overflow = prev;
      toggle?.focus();
    };
  }, [mobileOpen]);

  const handleLogout = useCallback(() => {
    sdk.logout();
    setUserMenuOpen(false);
    setMobileOpen(false);
    router.push('/');
  }, [sdk, router]);

  const linkCls = (active: boolean) =>
    cn(
      'rounded-full px-3 py-2 text-sm transition-colors',
      active ? 'font-semibold text-ember' : 'text-ink/75 hover:text-ink'
    );

  return (
    <>
      <nav
        aria-label="Main"
        className={cn(
          'fixed left-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 transition-[top,transform] duration-300 ease-out',
          isScrolled ? 'top-3' : 'top-5',
          hidden && '-translate-y-[calc(100%+2rem)]'
        )}
      >
        <div
          className={cn(
            'flex items-center justify-between rounded-full border border-ink/10 bg-paper/85 py-2 pl-5 pr-2 backdrop-blur-md transition-shadow duration-300',
            isScrolled && 'shadow-[0_10px_30px_-12px_rgba(26,18,11,0.25)]'
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center" aria-label="TechThrusters home">
            <Image
              src="/images/logo/techthrusters-dark.png"
              alt="TechThrusters"
              width={461}
              height={146}
              className="h-9 w-auto object-contain md:h-10"
              priority
            />
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 md:flex">
            {mainLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={linkCls(isActive(pathname, l.href))} aria-current={isActive(pathname, l.href) ? 'page' : undefined}>
                  {l.name}
                </Link>
              </li>
            ))}
            <li
              ref={eventsRef}
              className="relative"
              onMouseEnter={() => setEventsOpen(true)}
              onMouseLeave={() => setEventsOpen(false)}
            >
              <button
                type="button"
                onClick={() => setEventsOpen((o) => !o)}
                aria-expanded={eventsOpen}
                aria-controls="events-menu"
                className={cn(linkCls(isActive(pathname, '/events')), 'inline-flex items-center gap-1')}
              >
                Events
                <ChevronDown className={cn('h-4 w-4 opacity-70 transition-transform duration-200', eventsOpen && 'rotate-180')} aria-hidden />
              </button>
              <AnimatePresence>
                {eventsOpen && (
                  <motion.div
                    id="events-menu"
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-1/2 top-full w-[260px] -translate-x-1/2 pt-2"
                  >
                    <ul className="rounded-2xl border border-ink/10 bg-paper p-1.5 shadow-[0_20px_40px_-16px_rgba(26,18,11,0.3)]">
                      {eventLinks.map((l) => (
                        <li key={l.href}>
                          <Link
                            href={l.href}
                            aria-current={pathname === l.href ? 'page' : undefined}
                            className={cn(
                              'block rounded-xl px-4 py-2.5 text-sm transition-colors',
                              pathname === l.href ? 'bg-ember/10 text-ember' : 'text-ink/80 hover:bg-ink/5 hover:text-ink'
                            )}
                          >
                            <span className="font-medium">{l.name}</span>
                            <span className="mt-0.5 block text-xs text-ink/50">{l.description}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Account slot: fixed width, so swapping "Sign in" for the account name
                once the session check confirms a login never shifts the layout */}
            <div className="hidden w-[104px] justify-end md:flex" ref={userMenuRef}>
              {!isSessionLoading && isAuthenticated && user ? (
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setUserMenuOpen((o) => !o)}
                    aria-expanded={userMenuOpen}
                    aria-haspopup="menu"
                    className="inline-flex h-10 max-w-[104px] items-center gap-1.5 rounded-full px-3 text-sm text-ink/75 transition-colors hover:text-ink"
                  >
                    <User className="h-4 w-4 shrink-0" aria-hidden />
                    <span className="truncate">{firstName}</span>
                  </button>
                  <AnimatePresence>
                    {userMenuOpen && (
                      <motion.div
                        role="menu"
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 top-full mt-2 w-52 overflow-hidden rounded-2xl border border-ink/10 bg-paper p-1.5 shadow-[0_20px_40px_-16px_rgba(26,18,11,0.3)]"
                      >
                        <p className="truncate px-3 py-2 text-xs text-ink/50">{user.email || user.name}</p>
                        <Link href="/profile" role="menuitem" className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm text-ink hover:bg-ink/5">
                          <User className="h-4 w-4 text-ink/50" aria-hidden /> Profile
                        </Link>
                        <button type="button" role="menuitem" onClick={handleLogout} className="flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-left text-sm text-ink hover:bg-ink/5">
                          <LogOut className="h-4 w-4 text-ink/50" aria-hidden /> Log out
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link href="/sign-up" className="inline-flex h-10 items-center rounded-full px-3 text-sm text-ink/75 transition-colors hover:text-ink">
                  Sign in
                </Link>
              )}
            </div>

            {/* Primary CTA */}
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-ink px-3 text-paper transition-colors hover:bg-ember sm:px-4"
              aria-label="Join the TechThrusters Discord"
            >
              <DiscordIcon className="h-4 w-4" />
              <span className="hidden text-sm font-semibold sm:inline">Join Discord</span>
            </a>

            {/* Mobile menu toggle */}
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMobileOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink md:hidden"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <Menu className="h-6 w-6" aria-hidden />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile: full-screen sheet */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[70] flex flex-col bg-paper text-ink md:hidden"
          >
            <div className="flex items-center justify-between px-6 pb-2 pt-6">
              <Link href="/" aria-label="TechThrusters home" onClick={() => setMobileOpen(false)}>
                <Image src="/images/logo/techthrusters-dark.png" alt="TechThrusters" width={461} height={146} className="h-9 w-auto" />
              </Link>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/15"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>

            <motion.div
              className="flex-1 overflow-y-auto px-6 pb-6 pt-6"
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <ul className="divide-y divide-ink/10 border-y border-ink/10">
                {[{ name: 'Home', href: '/' }, ...mainLinks].map((l) => {
                  const active = l.href === '/' ? pathname === '/' : isActive(pathname, l.href);
                  return (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        aria-current={active ? 'page' : undefined}
                        className={cn('flex items-center justify-between py-4 text-3xl font-semibold tracking-tight', active ? 'text-ember' : 'text-ink')}
                      >
                        {l.name}
                        <ArrowRight className="h-5 w-5 text-ink/30" aria-hidden />
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <p className="eyebrow mt-8 text-ink/50">Events</p>
              <ul className="mt-3 space-y-1">
                {eventLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      aria-current={pathname === l.href ? 'page' : undefined}
                      className={cn('block py-2 text-xl font-medium', pathname === l.href ? 'text-ember' : 'text-ink/80')}
                    >
                      {l.name}
                      <span className="block text-sm font-normal text-ink/50">{l.description}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-ink/10 pt-6 text-base">
                {isAuthenticated && user ? (
                  <div className="flex items-center justify-between gap-4">
                    <Link href="/profile" className="inline-flex items-center gap-2 text-ink/80">
                      <User className="h-4 w-4" aria-hidden /> {firstName}
                    </Link>
                    <button type="button" onClick={handleLogout} className="inline-flex items-center gap-2 text-ink/60">
                      <LogOut className="h-4 w-4" aria-hidden /> Log out
                    </button>
                  </div>
                ) : (
                  <Link href="/sign-up" className="text-ink/70 underline underline-offset-4">
                    Sign in to your account
                  </Link>
                )}
              </div>
            </motion.div>

            {/* Pinned CTA, within thumb reach */}
            <div className="border-t border-ink/10 bg-paper px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-4">
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-full items-center justify-center gap-3 rounded-full bg-ember text-base font-semibold text-paper transition-colors active:bg-ember-bright"
              >
                <DiscordIcon className="h-5 w-5" />
                Join the Discord
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
