import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  hoverScale?: boolean;
}

export function GlowCard({ children, className, hoverScale = true }: GlowCardProps) {
  return (
    <div
      className={cn(
        'group relative bg-bg-card border border-border-subtle rounded-lg overflow-hidden',
        'transition-all duration-300',
        'hover:border-accent-cyan/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]',
        hoverScale && 'hover:scale-[1.02]',
        className
      )}
    >
      {children}
    </div>
  );
}
