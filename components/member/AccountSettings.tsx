'use client';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useDescope } from '@descope/nextjs-sdk/client';

const UserProfile = dynamic(() => import('@descope/nextjs-sdk').then((mod) => mod.UserProfile), { ssr: false });

/** Descope's own widget for email, login methods and sign-out. */
export function AccountSettings() {
  const router = useRouter();
  const sdk = useDescope();
  return (
    <UserProfile
      widgetId="user-profile-widget"
      theme="light"
      onLogout={() => {
        sdk.logout();
        router.push('/');
      }}
    />
  );
}
