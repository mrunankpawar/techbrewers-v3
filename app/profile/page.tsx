'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { useUser, useDescope } from '@descope/nextjs-sdk/client';
import Navbar from '@/components/Navbar';
import { Loader2 } from 'lucide-react';
import { PageHeader } from '@/components/ui/Launch';

// Dynamically import UserProfile widget with SSR disabled
const UserProfile = dynamic(
  () => import('@descope/nextjs-sdk').then((mod) => mod.UserProfile),
  { ssr: false }
);

export default function ProfilePage() {
  const router = useRouter();
  const { user, isUserLoading } = useUser();
  const sdk = useDescope();

  const handleLogout = () => {
    sdk.logout();
    router.push('/');
  };

  if (isUserLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-paper">
        <Loader2 className="h-9 w-9 animate-spin text-ember" aria-label="Loading" />
      </div>
    );
  }

  if (!user) {
    router.push('/sign-up');
    return null;
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-paper text-ink">
      <Navbar />
      <PageHeader
        label="Account"
        title="My"
        accent="profile."
        intro="Manage your account settings and profile information."
      />
      <div className="mx-auto max-w-4xl px-6 pb-20 md:pb-28">
        <div className="rounded-[1.75rem] border border-ink/10 bg-white p-5 shadow-[0_30px_60px_-30px_rgba(26,18,11,0.3)] md:p-8">
          <UserProfile
            widgetId="user-profile-widget"
            theme="light"
            onLogout={handleLogout}
          />
        </div>
      </div>
    </div>
  );
}
