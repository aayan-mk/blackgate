import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SectionBadge } from '@/components/SectionBadge';
import { Search, Target, Cpu, Shield } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Assess',
    description:
      'We dive deep into your digital ecosystem — mapping vulnerabilities, evaluating infrastructure, and understanding your threat landscape before writing a single line of defense.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Architecture meets strategy. We design security-first solutions tailored to your business — from zero-trust frameworks to AI-powered monitoring blueprints.',
    icon: Target,
  },
  {
    number: '03',
    title: 'Implement',
    description:
      'Execution with precision. Our engineers deploy hardened infrastructure, secure applications, and intelligent monitoring systems with zero-downtime methodology.',
    icon: Cpu,
  },
  {
    number: '04',
    title: 'Monitor',
    description:
      'Security never sleeps. We provide 24/7 threat intelligence, continuous compliance monitoring, and proactive incident response to keep you ahead of evolving threats.',
    icon: Shield,
  },
];

const lineVariants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const stepVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

export default function ProcessSection() {
  return (
    <section className="py-20 bg-transparent relative overflow-hidden">
      {/* Subtle background grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <SectionBadge text="How We Work" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
            Our Process
          </h2>
          <p className="text-text-secondary max-w-lg mx-auto">
            A battle-tested methodology that turns complex security challenges into fortified digital operations.
          </p>
        </ScrollReveal>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <motion.div
            className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan/60 via-accent-cyan/30 to-transparent origin-top hidden md:block"
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                custom={index}
                variants={stepVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="relative flex items-start gap-6 sm:gap-8 group"
              >
                {/* Number Circle */}
                <div className="relative flex-shrink-0 z-10">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-bg-primary border-2 border-accent-cyan/40 flex items-center justify-center group-hover:border-accent-cyan group-hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] transition-all duration-500">
                    <span className="text-lg sm:text-xl font-bold text-accent-cyan">{step.number}</span>
                  </div>
                  {/* Pulse ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border border-accent-cyan/30"
                    animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeOut',
                      delay: index * 0.5,
                    }}
                  />
                </div>

                {/* Content Card */}
                <div className="flex-grow pb-8 md:pb-0">
                  <div className="group/card relative p-5 sm:p-6 rounded-xl bg-black border border-border-subtle hover:border-accent-cyan/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.08)] transition-all duration-500">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent-cyan/10 border border-accent-cyan/20 mb-3 group-hover/card:bg-accent-cyan/20 transition-colors duration-300">
                      <step.icon className="w-5 h-5 text-accent-cyan" />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover/card:text-accent-cyan transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                      {step.description}
                    </p>

                    {/* Hover glow */}
                    <div className="absolute inset-0 rounded-xl bg-accent-cyan/[0.02] opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
