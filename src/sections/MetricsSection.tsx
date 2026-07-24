import { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Activity, Server, Globe } from 'lucide-react';
import { GlowCard } from '@/components/GlowCard';

const metrics = [
  {
    icon: Activity,
    value: 99.9,
    suffix: '%',
    label: 'SERVICE UPTIME',
    comparison: '+2.41% vs last month',
  },
  {
    icon: Server,
    value: 1000,
    suffix: '+',
    label: 'Managed Servers',
    comparison: '+180 vs last month',
  },
  {
    icon: Globe,
    value: 100,
    suffix: '+',
    label: 'Global Regions',
    comparison: '+12 vs last month',
  },
];

export default function MetricsSection() {
  const shouldReduceMotion = useReducedMotion();
  const barHeights = useMemo(
    () => Array.from({ length: 50 }, () => 20 + Math.random() * 60),
    []
  );

  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            OPERATIONAL METRICS
          </h2>
          <p className="text-text-secondary">
            Clear visibility into platform health
          </p>
        </ScrollReveal>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <GlowCard
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center mb-4 group-hover:bg-accent-cyan/20 transition-colors">
                <metric.icon className="w-6 h-6 text-accent-cyan" />
              </div>

              {/* Value */}
              <div className="flex items-baseline gap-1 mb-2">
                <AnimatedCounter
                  end={metric.value}
                  duration={2}
                  suffix={metric.suffix}
                  className="text-4xl sm:text-5xl font-bold text-white"
                />
              </div>

              {/* Label */}
              <h3 className="text-lg font-semibold text-white">{metric.label}</h3>
              {metric.comparison && (
                <p className="text-sm text-accent-cyan font-medium mt-1">{metric.comparison}</p>
              )}

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-xl bg-accent-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </GlowCard>
          ))}
        </div>

        {/* Chart Visualization */}
        <GlowCard
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Platform Performance</h3>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-semibold text-emerald-400 tracking-wider">Live</span>
            </div>
          </div>
          <div className="h-32 flex items-end gap-1.5">
            {barHeights.map((height, i) => (
              <motion.div
                key={i}
                className="flex-1 h-full bg-accent-cyan/40 rounded-t origin-bottom hover:bg-accent-cyan/80 transition-colors duration-200"
                initial={{ scaleY: 0.2 }}
                animate={
                  shouldReduceMotion
                    ? { scaleY: height / 100 }
                    : { scaleY: [0.2, height / 100, 0.2] }
                }
                transition={
                  shouldReduceMotion
                    ? { duration: 0.35, delay: i * 0.01 }
                    : {
                        duration: 2.2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: i * 0.03,
                      }
                }
                style={{ willChange: 'transform' }}
              />
            ))}
          </div>
        </GlowCard>
      </div>
    </section>
  );
}
