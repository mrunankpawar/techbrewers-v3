import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Image from "next/image";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Club TechBrewers",
  description: "Club TechBrewers is a global tech community with an aim of helping folks learn, connect and build.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-black-100" lang="en">
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
      </ ThemeProvider>
      </body>
    </html>
  );
}
