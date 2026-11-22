import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  scale?: boolean;
}

export function ScrollReveal({ 
  children, 
  delay = 0, 
  className = '',
  direction = 'up',
  scale = false,
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  };

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directions[direction],
        ...(scale ? { scale: 0.95 } : {}),
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        x: 0,
        ...(scale ? { scale: 1 } : {}),
      }}
      viewport={{ once: true, amount: 0.2, margin: '0px 0px -8% 0px' }}
      transition={{ 
        duration: 0.7, 
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      style={{ willChange: 'transform, opacity' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
