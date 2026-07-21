import { useMemo, lazy, Suspense } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const RotatingEarth = lazy(() => import('@/components/ui/wireframe-dotted-globe'));

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const particles = useMemo(
    () =>
      Array.from({ length: 14 }, (_, index) => ({
        id: index,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: 3 + Math.random() * 2,
        delay: Math.random() * 2,
      })),
    []
  );

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-transparent">
      {/* Floating Particles */}
      <div className="absolute inset-0 z-[5] overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-accent-cyan/30 rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
              willChange: 'transform, opacity',
            }}
            animate={
              shouldReduceMotion
                ? { y: 0, opacity: 0.4 }
                : {
                    y: [0, -30, 0],
                    opacity: [0.3, 0.8, 0.3],
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
      </div>

      {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-[1.05fr_0.95fr] items-center gap-12 lg:gap-10 pt-10 lg:pt-0">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center lg:text-left w-full"
            >
              <motion.h1 
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-bold text-white mb-6 leading-tight max-w-3xl mx-auto lg:mx-0"
              >
                Blackgate: Forged in Security.
                <br className="hidden md:block" />
                <span className="text-gradient-cyan md:block lg:inline">Perfected by Intelligence.</span>
              </motion.h1>

              <motion.p 
                variants={itemVariants}
                className="text-base sm:text-lg md:text-xl text-text-secondary mb-8 sm:mb-10 max-w-2xl mx-auto lg:mx-0"
              >
                Your uncompromised cloud and cybersecurity fortress.
              </motion.p>

              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-3 sm:py-4 text-base font-medium text-bg-primary bg-accent-cyan rounded-full hover:bg-accent-teal transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6, 182, 212,0.4)] w-full sm:w-auto"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 sm:py-4 text-base font-medium text-accent-cyan border border-accent-cyan/50 rounded-full hover:bg-accent-cyan/10 transition-all duration-300 hover:border-accent-cyan w-full sm:w-auto"
                >
                  Learn More
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="relative flex items-center justify-center lg:justify-end w-full mt-4 sm:mt-8 lg:mt-0"
            >
              <div className="relative w-full max-w-[280px] sm:max-w-[380px] md:max-w-[450px] lg:max-w-[550px] xl:max-w-[620px] aspect-square opacity-95 lg:opacity-100">
                <div className="absolute inset-0 rounded-full bg-black/80 blur-3xl" />
                <Suspense fallback={<div className="w-full h-full flex items-center justify-center opacity-50"><div className="w-10 h-10 border-4 border-accent-cyan border-t-transparent rounded-full animate-spin" /></div>}>
                  <RotatingEarth width={620} height={620} className="relative w-full" />
                </Suspense>
              </div>
            </motion.div>
          </div>
        </div>

    </section>
  );
}
