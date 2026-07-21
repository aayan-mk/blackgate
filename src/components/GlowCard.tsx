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
        'group relative bg-black border border-border-subtle rounded-lg overflow-hidden',
        'transition-colors duration-300',
        'hover:border-white hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]',
        className
      )}
      whileHover={{ y: -8, ...((props.whileHover as object) || {}) }}
      transition={{ type: 'spring', stiffness: 300, ...((props.transition as object) || {}) }}
    >
      {children}
    </motion.div>
  );
}
