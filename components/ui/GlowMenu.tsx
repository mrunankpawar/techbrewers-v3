"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiHome, FiUsers, FiCalendar, FiMapPin, FiMenu, FiX } from "react-icons/fi";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <FiHome className="h-5 w-5" />,
    gradient:
      "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
  },
  {
    name: "Community",
    link: "/community",
    icon: <FiUsers className="h-5 w-5" />,
    gradient:
      "radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(236,72,153,0.06) 50%, rgba(219,39,119,0) 100%)",
  },
  {
    name: "Events",
    link: "/events",
    icon: <FiCalendar className="h-5 w-5" />,
    gradient:
      "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
  },
  {
    name: "Meetup",
    link: "/meetup",
    icon: <FiMapPin className="h-5 w-5" />,
    gradient:
      "radial-gradient(circle, rgba(251,191,36,0.15) 0%, rgba(251,146,60,0.06) 50%, rgba(251,113,133,0) 100%)",
  },
];

const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
};

const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
};

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2.2,
    filter: "blur(16px)",
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 },
    },
  },
};

const sharedTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  duration: 0.5,
};

function NavItem({ item, isMobile = false, onClose }: { item: typeof navItems[0]; isMobile?: boolean; onClose?: () => void }) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    if (isMobile && onClose) {
      e.preventDefault();
      router.push(item.link);
      // Small delay to allow the page to start loading before closing the menu
      setTimeout(() => {
        onClose();
      }, 100);
    }
  };

  return (
    <motion.li className={cn("relative", isMobile && "w-full")}> 
      <motion.div
        className={cn(
          "block rounded-xl overflow-visible group relative",
          isMobile && "w-full"
        )}
        style={{ perspective: "600px" }}
        whileHover="hover"
        initial="initial"
      >
        {/* Glow background */}
        <motion.div
          className={cn(
            "absolute inset-0 z-0 pointer-events-none",
            isMobile && "blur-xl"
          )}
          variants={glowVariants}
          style={{
            background: item.gradient,
            opacity: 0,
            borderRadius: isMobile ? "20px" : "16px",
            ...(isMobile ? { filter: "blur(18px)" } : {}),
          }}
        />
        {/* Front side */}
        <motion.div
          className={cn(
            "flex items-center gap-2 px-4 py-2 relative z-10 bg-transparent group-hover:text-foreground transition-colors rounded-xl",
            isMobile && "gap-3 px-8 py-4 text-xl justify-center"
          )}
          variants={itemVariants}
          transition={sharedTransition}
          style={{ transformStyle: "preserve-3d", transformOrigin: "center bottom" }}
        >
          <Link
            href={item.link}
            className={cn(
              "flex items-center gap-2 text-white",
              isMobile && "gap-3 w-full text-center justify-center"
            )}
            onClick={handleClick}
          >
            <span className="transition-colors duration-300 text-white">{item.icon}</span>
            {item.name}
          </Link>
        </motion.div>
        {/* Back side (flip) */}
        <motion.div
          className={cn(
            "flex items-center gap-2 px-4 py-2 absolute inset-0 z-10 bg-transparent group-hover:text-foreground transition-colors rounded-xl",
            isMobile && "gap-3 px-8 py-4 text-xl justify-center"
          )}
          variants={backVariants}
          transition={sharedTransition}
          style={{ transformStyle: "preserve-3d", transformOrigin: "center top", rotateX: 90 }}
        >
          <Link
            href={item.link}
            className={cn(
              "flex items-center gap-2 text-white",
              isMobile && "gap-3 w-full text-center justify-center"
            )}
            onClick={handleClick}
          >
            <span className="transition-colors duration-300 text-white">{item.icon}</span>
            {item.name}
          </Link>
        </motion.div>
      </motion.div>
    </motion.li>
  );
}

export const GlowMenu = ({ className }: { className?: string }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // const pathname = usePathname(); // Not needed for color anymore

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        className={cn(
          "fixed top-0 left-0 w-full z-[9999] flex items-center px-8 py-4 bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-lg border-b border-border/40 shadow-lg hidden sm:flex",
          className
        )}
        initial="initial"
        whileHover="hover"
      >
        <div className="flex-1 flex justify-center max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] mx-auto w-full">
          <ul className="flex items-center gap-2 relative z-10">
            {navItems.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </ul>
        </div>
      </motion.nav>

      {/* Mobile Navbar */}
      <nav
        className={cn(
          "fixed top-4 right-4 z-[5000] flex sm:hidden items-center justify-between w-auto px-3 py-2 rounded-xl bg-gradient-to-b from-background/90 to-background/60 backdrop-blur-lg border border-border/40 shadow-lg",
          className
        )}
      >
        <button
          aria-label="Open menu"
          className="text-2xl text-muted-foreground focus:outline-none"
          onClick={() => setMobileOpen(true)}
        >
          <FiMenu />
        </button>
      </nav>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[6000] bg-black/70 backdrop-blur-lg flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              aria-label="Close menu"
              className="absolute top-6 right-6 text-3xl text-white focus:outline-none"
              onClick={() => setMobileOpen(false)}
            >
              <FiX />
            </button>
            <ul className="flex flex-col gap-6 items-center justify-center">
              {navItems.map((item) => (
                <NavItem key={item.name} item={item} isMobile onClose={() => setMobileOpen(false)} />
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GlowMenu; 