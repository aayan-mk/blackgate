import { useScroll, useTransform, type MotionValue } from 'framer-motion';
import type { RefObject } from 'react';

interface UseParallaxOptions {
  target?: RefObject<HTMLElement | null>;
  offset?: [string, string];
  speed?: number;
}

export function useParallax({
  target,
  offset = ['start end', 'end start'],
  speed = 0.5,
}: UseParallaxOptions = {}): MotionValue<number> {
  const { scrollYProgress } = useScroll({
    target: target ?? undefined,
    offset: offset as any,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-speed * 100, speed * 100]);

  return y;
}
