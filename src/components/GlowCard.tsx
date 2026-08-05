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
        'group rounded-2xl bg-bg-card p-5 gradient-border hover:bg-bg-card-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
