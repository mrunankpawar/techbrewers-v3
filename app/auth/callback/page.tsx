'use client';

import { Suspense, useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import { useSession } from '@descope/nextjs-sdk/client';

const Descope = dynamic(
  () => import('@descope/nextjs-sdk').then((mod) => mod.Descope),
  { ssr: false }
);

function AuthCallbackInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { isAuthenticated, isSessionLoading } = useSession();
  const redirected = useRef(false);

  // A magic link opened in a fresh tab carries continuation params (e.g. `t`)
  // that the flow needs to process. Without any params there's nothing to
  // exchange, so re-running the flow here would just hang on a hidden,
  // un-completable form.
  const hasContinuationParams = searchParams.toString().length > 0;

  useEffect(() => {
    if (redirected.current || isSessionLoading) return;
    if (isAuthenticated || !hasContinuationParams) {
      redirected.current = true;
      router.replace('/');
    }
  }, [isAuthenticated, isSessionLoading, hasContinuationParams, router]);

  const showFlow = !isSessionLoading && !isAuthenticated && hasContinuationParams;

  return (
    <div className="min-h-screen gradient-background flex items-center justify-center">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="w-10 h-10 rounded-full border-2 border-orange-400/40 border-t-orange-400 animate-spin" />
        <p className="text-white/60 text-sm">Completing sign in…</p>
      </div>
      {showFlow && (
        <div className="hidden">
          <Descope
            flowId="sign-up-or-in"
            onSuccess={() => {
              redirected.current = true;
              router.replace('/');
            }}
            onError={(e: CustomEvent) => {
              console.error('Auth callback error:', e);
              redirected.current = true;
              router.replace('/sign-up');
            }}
          />
        </div>
      )}
    </div>
  );
}

export default function AuthCallbackPage() {
  return (
    <Suspense>
      <AuthCallbackInner />
    </Suspense>
  );
}
