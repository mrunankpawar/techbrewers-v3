'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Thin top progress bar tied to document scroll (wisprflow-style cue).
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 right-0 top-0 z-[100] h-[2px] origin-left bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400"
      style={{ scaleX }}
    />
  );
}
