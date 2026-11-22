import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SectionBadge } from '@/components/SectionBadge';
import { Search, Target, Cpu, ShieldCheck } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Assess',
    description:
      'We evaluate your current architecture, map out attack vectors, and identify vulnerabilities before writing a single line of defense.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Clean blueprints tailored to your stack — zero-trust access, secure API contracts, and modern cloud configurations that avoid technical debt.',
    icon: Target,
  },
  {
    number: '03',
    title: 'Implement',
    description:
      'Direct hands-on engineering. Clean, maintainable code with automated linting, test suites, and streamlined deployment pipelines.',
    icon: Cpu,
  },
  {
    number: '04',
    title: 'Verify & Support',
    description:
      'Comprehensive post-launch testing, security validation, and responsive ongoing support to keep your systems resilient as you grow.',
    icon: ShieldCheck,
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
            A transparent, hands-on engineering workflow tailored for early-stage ventures and agile teams.
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
                {/* Step Number Circle */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-bg-surface border border-accent-cyan/30 flex items-center justify-center group-hover:border-accent-cyan group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300">
                  <span className="text-base sm:text-xl font-bold text-accent-cyan font-mono">
                    {step.number}
                  </span>
                </div>

                {/* Content Card */}
                <div className="flex-1 rounded-2xl bg-bg-surface/50 border border-border-subtle p-6 sm:p-8 backdrop-blur-sm group-hover:border-accent-cyan/40 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.08)]">
                  <div className="flex items-center gap-3 mb-3">
                    <step.icon className="w-5 h-5 text-accent-cyan" />
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
