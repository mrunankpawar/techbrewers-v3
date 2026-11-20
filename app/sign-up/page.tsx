'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { authRedirectUrl } from '@/lib/auth-redirect';
import Image from 'next/image';
import { Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { SectionLabel } from '@/components/ui/Launch';

const Descope = dynamic(
  () => import('@descope/nextjs-sdk').then((mod) => mod.Descope),
  { ssr: false }
);

export default function SignUpPage() {
  const router = useRouter();
  const [signedIn, setSignedIn] = useState(false);

  const handleSuccess = (_e: CustomEvent) => {
    setSignedIn(true);
    setTimeout(() => router.push('/'), 1500);
  };

  const handleError = (e: CustomEvent) => {
    console.error('Authentication error:', e);
  };

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-paper text-ink">
      <div aria-hidden className="absolute inset-0 star-field fade-edges" />

      <Navbar />
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-6 pb-16 pt-32 md:pt-36">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: pitch */}
          <div className="flex flex-col justify-center">
            <SectionLabel>Sign up</SectionLabel>
            <h1 className="display mt-5 text-5xl sm:text-6xl lg:text-7xl">
              Join the{' '}
              <span className="accent text-ember">
                community.
              </span>
            </h1>

            <div className="mt-6 flex select-none items-center">
              {[1, 2, 3, 4, 5].map((n, i) => (
                <div
                  key={n}
                  className="relative -mr-3 h-11 w-11 overflow-hidden rounded-full ring-2 ring-paper md:h-12 md:w-12"
                  style={{ zIndex: 10 + i }}
                >
                  <Image src={`/images/header/${n}.png`} alt="" fill sizes="48px" className="scale-110 object-cover" draggable={false} />
                </div>
              ))}
              <span className="ml-6 text-sm text-ink-soft md:text-base">Join 1,900+ others</span>
            </div>

            <p className="mt-6 max-w-md text-lg text-ink-soft">
              Connect with people who love building cool things just as much as you do.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                'Access exclusive events and workshops',
                'Connect with industry leaders and mentors',
                'Build projects and showcase your skills',
                'Join monthly challenges and competitions',
              ].map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ember text-paper">
                    <Check className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  <span className="text-ink/80">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Descope flow */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-[1.75rem] border border-ink/10 bg-white p-5 shadow-[0_30px_60px_-30px_rgba(26,18,11,0.35)] sm:p-6">
              <div className="mb-2 flex items-center justify-between border-b border-dashed border-ink/15 pb-4">
                <span className="eyebrow text-ink/50">TechThrusters</span>
                <span className="eyebrow text-ember">Sign up or sign in</span>
              </div>
              {signedIn ? (
                <div className="flex flex-col items-center justify-center gap-3 py-12 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-ember text-paper">
                    <Check className="h-7 w-7" aria-hidden />
                  </div>
                  <p className="text-lg font-semibold">Signed in successfully!</p>
                  <p className="text-sm text-ink-soft">Redirecting you to the home page…</p>
                </div>
              ) : (
                <Descope
                  flowId="sign-up-or-in"
                  redirectUrl={authRedirectUrl()}
                  theme="light"
                  onSuccess={handleSuccess}
                  onError={handleError}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
