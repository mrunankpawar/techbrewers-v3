'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useDescope, useSession, useUser } from '@descope/nextjs-sdk/client';

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  // Descope hooks
  const { isAuthenticated, isSessionLoading } = useSession();
  const { user } = useUser();
  const sdk = useDescope();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false);
      }
    };

    if (showUserMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showUserMenu]);

  const handleLogout = useCallback(() => {
    sdk.logout();
    router.push('/');
  }, [sdk, router]);

  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'Community', link: '/community' },
    { name: 'Events', link: '/events' },
    { name: 'Meetups', link: '/meetup' },
  ];

  return (
    <nav
      className={cn(
        'fixed z-50 transition-all duration-300 ease-in-out',
        isScrolled
          ? 'top-4 left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] lg:w-[85%]'
          : 'top-0 left-0 w-full'
      )}
    >
      <div
        className={cn(
          'bg-black/20 backdrop-blur-sm border border-white/20 transition-all duration-300',
          isScrolled 
            ? 'mx-auto px-4 py-2 rounded-2xl md:rounded-full max-w-7xl' 
            : 'w-full px-6 py-4 border-t-0 border-l-0 border-r-0'
        )}
      >
        <div className={cn(
          'flex items-center justify-between',
          !isScrolled && 'max-w-7xl mx-auto'
        )}>
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/images/logo/trans-rect-white.png"
              alt="TechThrusters Logo"
              width={180}
              height={54}
              className={cn(
                'w-auto object-contain transition-all duration-300',
                isScrolled ? 'h-10' : 'h-14'
              )}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 flex-1 justify-center">
            {navItems.map((item) => (
              <Link
                key={item.link}
                href={item.link}
                className={cn(
                  'transition-colors text-sm lg:text-base',
                  pathname === item.link
                    ? 'text-orange-400 font-semibold'
                    : 'text-white hover:text-orange-400'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            {!isSessionLoading && (
              <>
                {isAuthenticated && user ? (
                  <div className="relative" ref={userMenuRef}>
                    <button
                      onClick={() => setShowUserMenu(!showUserMenu)}
                      className={cn(
                        'bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 flex items-center justify-center flex-shrink-0 backdrop-blur-sm border border-white/20',
                        showUserMenu && 'bg-white/20 border-white/30',
                        isScrolled ? 'w-8 h-8' : 'w-10 h-10'
                      )}
                      aria-expanded={showUserMenu}
                      aria-haspopup="true"
                      title={user.name || user.email || 'User'}
                    >
                      {/* Person Silhouette Icon */}
                      <svg
                        className={cn(
                          'flex-shrink-0',
                          isScrolled ? 'w-4 h-4' : 'w-5 h-5'
                        )}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </button>
                    
                    {showUserMenu && (
                      <div className="absolute top-full right-0 mt-2 bg-black/95 backdrop-blur-md border border-white/20 rounded-lg overflow-hidden z-50 min-w-[180px] shadow-2xl transform transition-all duration-200 ease-out origin-top-right">
                        <div className="py-1">
                          <div className="px-4 py-2 border-b border-white/10">
                            <p className="text-xs text-white/60 uppercase tracking-wider">Account</p>
                            <p className="text-sm text-white font-medium mt-1 truncate">
                              {user.name || user.email || 'User'}
                            </p>
                          </div>
                          <Link
                            href="/profile"
                            onClick={() => setShowUserMenu(false)}
                            className="w-full px-4 py-3 text-left text-white hover:bg-white/10 active:bg-white/15 transition-colors flex items-center gap-3 group"
                          >
                            <svg className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <span className="font-medium">Profile</span>
                          </Link>
                          <button
                            onClick={handleLogout}
                            className="w-full px-4 py-3 text-left text-white hover:bg-white/10 active:bg-white/15 transition-colors flex items-center gap-3 group"
                          >
                            <svg className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                            <span className="font-medium">Logout</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href="/sign-up"
                    className={cn(
                      'bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 flex items-center justify-center flex-shrink-0 backdrop-blur-sm border border-white/20',
                      isScrolled ? 'h-8 px-3 text-xs' : 'h-10 px-4 text-sm'
                    )}
                  >
                    <span>Sign Up</span>
                  </Link>
                )}
              </>
            )}
            <a
              href="https://bit.ly/TBDISCORD"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'bg-orange-700 hover:bg-orange-600 text-white rounded-lg transition-all duration-300 flex items-center justify-center flex-shrink-0',
                isScrolled ? 'w-8 h-8' : 'w-10 h-10'
              )}
            >
              <svg className={cn(
                'flex-shrink-0',
                isScrolled ? 'w-4 h-4' : 'w-5 h-5'
              )} fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/20">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.link}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'transition-colors text-base py-2 px-4 rounded-lg',
                    pathname === item.link
                      ? 'text-orange-400 font-semibold bg-orange-400/10'
                      : 'text-white hover:text-orange-400 hover:bg-white/5'
                  )}
                >
                  {item.name}
                </Link>
              ))}
              {isAuthenticated && user && (
                <div className="pt-2 border-t border-white/20">
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-2 text-left text-white hover:bg-white/10 transition-colors flex items-center gap-3 rounded-lg"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
