'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

export type RevealVariant = 'hero' | 'default' | 'subtle';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  /** Extra delay (seconds) for staggered sequences */
  delay?: number;
  variant?: RevealVariant;
};

export function Reveal({
  children,
  className,
  id,
  delay = 0,
  variant = 'default',
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div id={id} className={className}>
        {children}
      </div>
    );
  }

  const initial =
    variant === 'hero'
      ? { opacity: 0, y: 16 }
      : variant === 'subtle'
        ? { opacity: 0, y: 18 }
        : { opacity: 0, y: 40 };

  const duration = variant === 'hero' ? 0.6 : variant === 'subtle' ? 0.55 : 0.72;
  const transition = {
    duration,
    delay,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  if (variant === 'hero') {
    return (
      <motion.div
        id={id}
        className={cn(className)}
        initial={initial}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      id={id}
      className={cn(className)}
      initial={initial}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08, margin: '0px 0px -72px 0px' }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
