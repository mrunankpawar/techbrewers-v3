'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { useUser } from '@descope/nextjs-sdk/client';
import { useDescope } from '@descope/nextjs-sdk/client';
import Navbar from '@/components/Navbar';
import { FaSpinner } from 'react-icons/fa';

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
      <div className="min-h-screen gradient-background flex items-center justify-center">
        <FaSpinner className="animate-spin text-orange-400 text-4xl" />
      </div>
    );
  }

  if (!user) {
    router.push('/sign-up');
    return null;
  }

  return (
    <div className="relative min-h-screen gradient-background overflow-hidden">
      <Navbar />
      
      <div className="relative z-10 pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
                My Profile
              </span>
            </h1>
            <p className="text-gray-300 text-lg">
              Manage your account settings and profile information
            </p>
          </div>

          {/* Descope User Profile Widget */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8">
            <UserProfile
              widgetId="user-profile-widget"
              theme="dark"
              onLogout={handleLogout}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
