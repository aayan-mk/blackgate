import { useState, useEffect, useRef, useMemo } from 'react';

export function useCountUp(end: number, duration: number = 2, startOnView: boolean = true) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const hasTriggeredRef = useRef(false);
  const decimalPlaces = useMemo(() => {
    const [, fraction = ''] = end.toString().split('.');
    return fraction.length;
  }, [end]);
  const precisionFactor = useMemo(() => Math.pow(10, decimalPlaces), [decimalPlaces]);

  useEffect(() => {
    if (!startOnView) {
      hasTriggeredRef.current = true;
      setHasStarted(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggeredRef.current) {
          hasTriggeredRef.current = true;
          setHasStarted(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [startOnView]);

  useEffect(() => {
    if (!hasStarted) return;

    if (duration <= 0) {
      setCount(end);
      return;
    }

    let startTime: number | null = null;
    let animationFrame = 0;

    setCount(0);

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const nextValue = Math.round(easeOut * end * precisionFactor) / precisionFactor;
      setCount(nextValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, end, duration, precisionFactor]);

  return { count, ref };
}
