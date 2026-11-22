import { useMemo, lazy, Suspense, useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SectionBadge } from '@/components/SectionBadge';

const RotatingEarth = lazy(() => import('@/components/ui/wireframe-dotted-globe'));

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.4 + i * 0.06,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const heroParallaxY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const globeParallaxY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const particleParallaxY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, index) => ({
        id: index,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: 1 + Math.random() * 2,
        duration: 3 + Math.random() * 3,
        delay: Math.random() * 2,
      })),
    []
  );

  const titleWords = 'Blackgate: Forged in Security.'.split(' ');

  return (
    <section ref={sectionRef} id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-transparent">
      {/* Floating Particles with parallax */}
      <motion.div
        className="absolute inset-0 z-[5] overflow-hidden pointer-events-none"
        style={shouldReduceMotion ? {} : { y: particleParallaxY }}
      >
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-accent-cyan/30 rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              willChange: 'transform, opacity',
            }}
            animate={
              shouldReduceMotion
                ? { y: 0, opacity: 0.4 }
                : {
                    y: [0, -40, 0],
                    opacity: [0.2, 0.8, 0.2],
                  }
            }
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    duration: particle.duration,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: particle.delay,
                  }
            }
          />
        ))}
      </motion.div>

      {/* Radial gradient accent */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent-cyan/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent-teal/[0.02] rounded-full blur-[100px] pointer-events-none" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        style={shouldReduceMotion ? {} : { y: heroParallaxY, opacity: heroOpacity }}
      >
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-[1.05fr_0.95fr] items-center gap-12 lg:gap-10 pt-10 lg:pt-0">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left w-full"
          >
            {/* Early access badge */}
            <motion.div variants={itemVariants} className="mb-6 inline-flex items-center justify-center lg:justify-start">
              <a
                href="#contact"
                className="group/pilot inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium border border-accent-cyan/40 bg-accent-cyan/10 text-accent-cyan hover:bg-accent-cyan/20 hover:border-accent-cyan/80 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] backdrop-blur-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span>Early Access Pilot • Now Accepting New Projects</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/pilot:translate-x-1" />
              </a>
            </motion.div>

            {/* Animated title - word by word */}
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-bold text-white mb-6 leading-tight max-w-3xl mx-auto lg:mx-0">
              {titleWords.map((word, i) => (
                <motion.span
                  key={word + i}
                  custom={i}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block mr-[0.3em]"
                >
                  {word}
                </motion.span>
              ))}
              <br className="hidden md:block" />
              <motion.span
                initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-gradient-cyan md:block lg:inline"
              >
                Perfected by Intelligence.
              </motion.span>
            </div>

            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-text-secondary mb-8 sm:mb-10 max-w-2xl mx-auto lg:mx-0"
            >
              An emerging web engineering and cybersecurity studio. We craft modern, resilient web systems and AI automations built right from day one.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-3 sm:py-4 text-base font-medium text-bg-primary bg-accent-cyan rounded-full hover:bg-accent-teal transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] w-full sm:w-auto relative overflow-hidden"
              >
                {/* Shimmer effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                <span className="relative">Start a Project</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 relative" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 sm:py-4 text-base font-medium text-accent-cyan border border-accent-cyan/50 rounded-full hover:bg-accent-cyan/10 transition-all duration-300 hover:border-accent-cyan hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] w-full sm:w-auto"
              >
                Explore Services
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="relative flex items-center justify-center lg:justify-end w-full mt-4 sm:mt-8 lg:mt-0"
            style={shouldReduceMotion ? {} : { y: globeParallaxY }}
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[380px] md:max-w-[450px] lg:max-w-[550px] xl:max-w-[620px] aspect-square opacity-95 lg:opacity-100">
              <div className="absolute inset-0 rounded-full bg-black/80 blur-3xl" />
              {/* Animated glow ring */}
              <motion.div
                className="absolute inset-[-10%] rounded-full border border-accent-cyan/10"
                animate={shouldReduceMotion ? {} : { rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />
              <Suspense fallback={<div className="w-full h-full flex items-center justify-center opacity-50"><div className="w-10 h-10 border-4 border-accent-cyan border-t-transparent rounded-full animate-spin" /></div>}>
                <RotatingEarth width={620} height={620} className="relative w-full" />
              </Suspense>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
