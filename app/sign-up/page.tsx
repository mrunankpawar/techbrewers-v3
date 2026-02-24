'use client';

import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

// Dynamically import Descope component with SSR disabled
const Descope = dynamic(
  () => import('@descope/nextjs-sdk').then((mod) => mod.Descope),
  { ssr: false }
);

export default function SignUpPage() {
  const router = useRouter();

  const handleSuccess = (e: any) => {
    console.log('Authentication successful:', e.detail.user);
    // Redirect to home page after successful authentication
    router.push('/');
  };

  const handleError = (e: any) => {
    console.error('Authentication error:', e);
  };

  return (
    <div className="relative min-h-screen overflow-hidden sepia-background-hero flex flex-col">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 sepia-gradient-overlay" />
      
      <Navbar />
      <div className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto px-6 md:px-8 lg:px-12 pt-24 md:pt-28 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center w-full">
          {/* Left Side - Header Text */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent leading-tight pb-2">
              Join the Community
            </h1>
            
            {/* Header Images */}
            <div className="flex items-center justify-start mb-4 mt-4 select-none pointer-events-none">
              <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-white/20 -mr-2 md:-mr-3 z-10">
                <Image
                  src="/images/header/1.png"
                  alt=""
                  width={48}
                  height={48}
                  className="object-cover w-full h-full select-none pointer-events-none"
                  draggable={false}
                  unoptimized
                />
              </div>
              <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-white/20 -mr-2 md:-mr-3 z-20">
                <Image
                  src="/images/header/2.png"
                  alt=""
                  width={48}
                  height={48}
                  className="object-cover w-full h-full select-none pointer-events-none"
                  draggable={false}
                  unoptimized
                />
              </div>
              <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-white/20 -mr-2 md:-mr-3 z-30">
                <Image
                  src="/images/header/3.png"
                  alt=""
                  width={48}
                  height={48}
                  className="object-cover w-full h-full select-none pointer-events-none"
                  draggable={false}
                  unoptimized
                />
              </div>
              <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-white/20 -mr-2 md:-mr-3 z-40">
                <Image
                  src="/images/header/4.png"
                  alt=""
                  width={48}
                  height={48}
                  className="object-cover w-full h-full select-none pointer-events-none"
                  draggable={false}
                  unoptimized
                />
              </div>
              <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-white/20 z-50">
                <Image
                  src="/images/header/5.png"
                  alt=""
                  width={48}
                  height={48}
                  className="object-cover w-full h-full select-none pointer-events-none"
                  draggable={false}
                  unoptimized
                />
              </div>
              <span className="text-white/60 text-sm md:text-base ml-3">
                Join 1900+ others
              </span>
            </div>
            
            <p className="text-white/60 text-lg mt-4">
              Connect with people who love building cool things just as much as you do.
            </p>

            {/* Benefits List */}
            <div className="mt-8 space-y-4">
              {[
                "Access exclusive events and workshops",
                "Connect with industry leaders and mentors",
                "Build projects and showcase your skills",
                "Join monthly challenges and competitions"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 group/item">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-orange-500/30 to-orange-600/20 border border-orange-400/40 flex items-center justify-center mt-0.5 group-hover/item:from-orange-500/40 group-hover/item:to-orange-600/30 group-hover/item:border-orange-400/60 transition-all duration-300 group-hover/item:scale-110">
                    <svg className="w-4 h-4 text-orange-300 group-hover/item:text-orange-200 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-white/80 text-base group-hover/item:text-white transition-colors duration-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Descope Component */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative group w-full max-w-md">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/20 via-orange-400/10 to-orange-500/20 rounded-2xl blur-sm opacity-50" />
              <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <Descope
                  flowId="sign-up-or-in"
                  theme="light"
                  onSuccess={handleSuccess}
                  onError={handleError}
                  redirectAfterSuccess="/events"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

