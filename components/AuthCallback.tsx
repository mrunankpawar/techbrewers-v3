'use client';

import { useEffect, useRef, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSession, useUser } from '@descope/nextjs-sdk/client';

function AuthCallbackInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { isAuthenticated, isSessionLoading } = useSession();
  const { user } = useUser();
  const [showToast, setShowToast] = useState(false);
  const handled = useRef(false);

  const isCallback =
    searchParams.has('code') || searchParams.has('descope-login-flow');

  useEffect(() => {
    if (!isCallback || isSessionLoading || handled.current) return;
    handled.current = true;
    router.replace('/');
    if (isAuthenticated) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 4000);
    }
  }, [isCallback, isSessionLoading, isAuthenticated, router]);

  if (!showToast) return null;

  const name = user?.name?.split(' ')[0] || user?.email?.split('@')[0];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-2xl border border-orange-500/30 bg-black/80 px-5 py-4 shadow-2xl backdrop-blur-md animate-in slide-in-from-bottom-4 duration-300">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500/20 border border-orange-400/40">
        <svg className="h-5 w-5 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div>
        <p className="text-sm font-semibold text-white">
          {name ? `Welcome back, ${name}!` : 'Signed in successfully!'}
        </p>
        <p className="text-xs text-white/50">You're now logged in.</p>
      </div>
    </div>
  );
}

export default function AuthCallback() {
  return (
    <Suspense>
      <AuthCallbackInner />
    </Suspense>
  );
}
