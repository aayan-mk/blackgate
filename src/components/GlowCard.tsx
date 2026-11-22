import { useRef, type ReactNode, type MouseEvent } from 'react';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface GlowCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export function GlowCard({ children, className, glowColor, ...props }: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { damping: 25, stiffness: 150 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 150 });

  const glowBackground = useTransform(
    [springX, springY],
    ([x, y]) =>
      `radial-gradient(400px circle at ${x}px ${y}px, ${glowColor || 'rgba(6,182,212,0.08)'}, transparent 60%)`
  );

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    mouseX.set(ref.current ? ref.current.clientWidth / 2 : 0);
    mouseY.set(ref.current ? ref.current.clientHeight / 2 : 0);
  };

  return (
    <motion.div
      ref={ref}
      {...props}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'group relative bg-black/60 border border-border-subtle rounded-2xl overflow-hidden',
        'transition-all duration-300 backdrop-blur-xl',
        'hover:border-accent-cyan/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]',
        className
      )}
      whileHover={{ y: -4, ...((props.whileHover as object) || {}) }}
      transition={{ type: 'spring', stiffness: 300, damping: 22, ...((props.transition as object) || {}) }}
    >
      {/* Mouse-tracking glow overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
        style={{ background: glowBackground }}
      />
      <div className="relative z-10 w-full h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
}
