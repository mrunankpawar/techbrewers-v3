import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: "/images/TB_Rocket.png",
  },
  openGraph: {
    title: "Club TechBrewers",
    description: "Join the TechBrewers community to learn, connect and build in tech.",
    url: "https://techbrewers.org/",
    images: "https://techbrewers.org/images/ogimagehome.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-black-100" lang="en">
      <head>
      <meta property="og:image" content="https://drive.google.com/file/d/1In4zGOmzTPQqT8FtvQSqRpVWHkZQgshJ/view?usp=drive_link"/>
      </head>

      <body className={inter.className && "bg-black-100"}>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <div className="relative w-full flex items-center justify-center">
          <FloatingNav navItems={[
            { name: "Home", link: "/" },
            { name: "Community", link: "/community" },
            { name: "Events", link: "/events" },
            { name: "Meetup", link: "/meetup" },
          ]}/>
        </div>
        {children}
        <Footer />
      </ ThemeProvider>
      <Analytics/>
      <SpeedInsights/>
      </body>
    </html>
  );
}
