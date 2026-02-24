import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "./provider";
import KeyboardShortcuts from "@/components/ui/KeyboardShortcuts";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { AuthProvider } from '@descope/nextjs-sdk';

const inter = Inter({ subsets: ["latin"] });

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
    images: [
      {
        url: "https://techthrusters.org/images/webogimage.png",
        width: 1200,
        height: 630,
        alt: "TechThrusters - Empowering Tech Innovation & Community",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechThrusters",
    description: "Join the TechThrusters community to learn, connect and build in tech.",
    images: ["https://techthrusters.org/images/webogimage.png"],
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
    <html className="bg-black-100" lang="en">
      <body className={inter.className && "bg-black-100"}>
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
