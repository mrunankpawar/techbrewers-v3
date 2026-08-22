'use client';

import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

const Descope = dynamic(
  () => import('@descope/nextjs-sdk').then((mod) => mod.Descope),
  { ssr: false }
);

export default function AuthCallbackPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen gradient-background flex items-center justify-center">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="w-10 h-10 rounded-full border-2 border-orange-400/40 border-t-orange-400 animate-spin" />
        <p className="text-white/60 text-sm">Completing sign in…</p>
      </div>
      {/* Hidden — handles the code exchange, then fires onSuccess */}
      <div className="hidden">
        <Descope
          flowId="sign-up-or-in"
          onSuccess={() => router.push('/')}
          onError={(e: CustomEvent) => {
            console.error('Auth callback error:', e);
            router.push('/sign-up');
          }}
        />
      </div>
    </div>
  );
}
