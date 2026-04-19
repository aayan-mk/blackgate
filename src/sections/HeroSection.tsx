import { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroGlobeImage from '@/assets/hero-globe.jpg';

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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Globe */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-transparent to-bg-primary z-10" />
        <img 
          src={heroGlobeImage}
          alt="Digital Globe" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-bg-primary/40" />
      </div>

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
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Blackgate: Forged in Security.
            <br />
            <span className="text-gradient-cyan">Perfected by Intelligence.</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl text-text-secondary mb-10 max-w-2xl mx-auto"
          >
            Your uncompromised cloud and cybersecurity fortress.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-medium text-bg-primary bg-accent-cyan rounded-full hover:bg-accent-teal transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]"
            >
              Get Started
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-medium text-accent-cyan border border-accent-cyan/50 rounded-full hover:bg-accent-cyan/10 transition-all duration-300 hover:border-accent-cyan"
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent z-10" />
    </section>
  );
}
