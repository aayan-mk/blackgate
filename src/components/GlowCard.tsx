import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

interface GlowCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
}

export function GlowCard({ children, className, ...props }: GlowCardProps) {
  return (
    <motion.div
      {...props}
      className={cn(
        'group relative bg-bg-card border border-border-subtle rounded-lg overflow-hidden',
        'transition-colors duration-300',
        'hover:border-accent-cyan/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]',
        className
      )}
      whileHover={{ y: -8, ...((props.whileHover as object) || {}) }}
      transition={{ type: 'spring', stiffness: 300, ...((props.transition as object) || {}) }}
    >
      {children}
    </motion.div>
  );
}
