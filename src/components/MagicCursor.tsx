import { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, textarea, select, label[for], summary, .cursor-hover, .cursor-pointer';

export function MagicCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    const finePointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)');

    const syncPointerSupport = () => {
      const supported = finePointerQuery.matches;
      setIsEnabled(supported);
      document.documentElement.classList.toggle('magic-cursor-active', supported);
      if (!supported) {
        setIsVisible(false);
      }
    };

    syncPointerSupport();
    finePointerQuery.addEventListener('change', syncPointerSupport);

    const moveCursor = (e: MouseEvent) => {
      if (!finePointerQuery.matches) return;
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsEnabled(true);
      setIsVisible(true);
      document.documentElement.classList.add('magic-cursor-active');
    };

    const handleTouchStart = () => {
      setIsVisible(false);
      setIsHovering(false);
      document.documentElement.classList.remove('magic-cursor-active');
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      setIsHovering(Boolean(target?.closest(INTERACTIVE_SELECTOR)));
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => {
      if (finePointerQuery.matches) {
        setIsVisible(true);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('mouseover', handleMouseOver);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      finePointerQuery.removeEventListener('change', syncPointerSupport);
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('mouseover', handleMouseOver);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
      document.documentElement.classList.remove('magic-cursor-active');
    };
  }, [cursorX, cursorY]);

  if (!isEnabled) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className="rounded-full border border-white/80"
          animate={{
            width: isHovering ? 44 : 32,
            height: isHovering ? 44 : 32,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{
            type: 'spring',
            damping: 20,
            stiffness: 300,
            opacity: { duration: 0.2 },
          }}
        />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className="rounded-full bg-white"
          animate={{
            width: isHovering ? 12 : 6,
            height: isHovering ? 12 : 6,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{
            type: 'spring',
            damping: 20,
            stiffness: 400,
            opacity: { duration: 0.2 },
          }}
        />
      </motion.div>
    </>
  );
}
