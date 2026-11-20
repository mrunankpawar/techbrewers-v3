import type { Metadata } from "next";
import { Schibsted_Grotesk, Newsreader } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "./provider";
import KeyboardShortcuts from "@/components/ui/KeyboardShortcuts";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { AuthProvider } from '@descope/nextjs-sdk';
import { ogImage } from "@/lib/seo";

const sans = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-serif",
  display: "swap",
  // Next.js has no fallback metrics for Newsreader; skip the adjustment
  // instead of logging "Failed to find font override values" on every build.
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "TechThrusters",
  description: "Join the TechThrusters community to learn, connect and build in tech.",
  icons: {
    icon: "/images/TB_Rocket.png",
  },
  openGraph: {
    type: "website",
    title: "TechThrusters",
    description: "Join the TechThrusters community to learn, connect and build in tech.",
    url: "https://techthrusters.org/",
    siteName: "TechThrusters",
    images: [ogImage("home", "TechThrusters: Learn. Connect. Build together.")],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechThrusters",
    description: "Join the TechThrusters community to learn, connect and build in tech.",
    images: [ogImage("home", "TechThrusters: Learn. Connect. Build together.")],
    creator: "@TechThrusters",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-[#1a1209]" lang="en" suppressHydrationWarning>
      <body className={`${sans.variable} ${serif.variable} font-sans bg-[#1a1209]`}>
      <AuthProvider 
        projectId={process.env.NEXT_PUBLIC_DESCOPE_PROJECT_ID || ""}
        persistTokens={true}
        sessionTokenViaCookie={true}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <KeyboardShortcuts />
          {children}
        </ ThemeProvider>
        <Analytics/>
        <SpeedInsights/>
      </AuthProvider>
      <Script
        id="linkedin-embed-script"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var script = document.createElement('script');
              script.src = 'https://platform.linkedin.com/in.js';
              script.type = 'text/javascript';
              script.async = true;
              script.innerHTML = 'lang: en_US';
              document.head.appendChild(script);
            })();
          `
        }}
      />
      </body>
    </html>
  );
}
