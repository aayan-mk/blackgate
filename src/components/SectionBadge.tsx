import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionBadgeProps {
  text: string;
  className?: string;
}

export function SectionBadge({ text, className }: SectionBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn('inline-flex mb-4', className)}
    >
      <span className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase text-accent-cyan bg-accent-cyan/5 border border-accent-cyan/20 overflow-hidden">
        {/* Animated shimmer */}
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-cyan/10 to-transparent animate-shimmer" />
        
        {/* Pulse dot */}
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan" />
        </span>
        
        <span className="relative">{text}</span>
      </span>
    </motion.div>
  );
}
