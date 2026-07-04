import { motion, useReducedMotion } from 'framer-motion';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { ScrollReveal } from '@/components/ScrollReveal';
import worldMapImage from '@/assets/world-map.jpg';

const stats = [
  {
    value: 99.9,
    suffix: '%',
    label: 'Network Uptime',
  },
  {
    value: 1000,
    suffix: '+',
    label: 'Enterprise Clients',
  },
  {
    value: 100,
    suffix: '+',
    label: 'Datacenters Globally',
  },
];

const mapHotspots = [
  { id: 'us-west', left: 12.5, top: 35.4 },
  { id: 'us-east', left: 25.4, top: 35.3 },
  { id: 'south-america-north', left: 23.4, top: 55.2 },
  { id: 'south-america-south', left: 26.5, top: 67.3 },
  { id: 'europe', left: 45.4, top: 26.0 },
  { id: 'north-africa', left: 45.4, top: 37.4 },
  { id: 'west-africa', left: 45.8, top: 43.2 },
  { id: 'central-africa', left: 56.4, top: 49.5 },
  { id: 'central-asia', left: 66.6, top: 35.4 },
  { id: 'india', left: 71.8, top: 41.1 },
  { id: 'southeast-asia', left: 76.2, top: 47.5 },
  { id: 'east-asia', left: 78.8, top: 39.2 },
  { id: 'australia', left: 80.4, top: 73.4 },
];

export default function WorldMapSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 bg-bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            CORE STRENGTHS
          </h2>
          <p className="text-text-secondary">
            Highly detailed 3D interactive schematic cutaways
          </p>
        </ScrollReveal>

        {/* World Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-xl overflow-hidden mb-8"
        >
          <img 
            src={worldMapImage}
            alt="Global Network" 
            className="block w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent" />
          
          {/* Pulsing Data Points */}
          {mapHotspots.map((point, i) => (
            <motion.div
              key={point.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 w-3 h-3 pointer-events-none"
              style={{
                left: `${point.left}%`,
                top: `${point.top}%`,
              }}
            >
              <motion.div
                className="w-full h-full rounded-full bg-accent-cyan"
                animate={
                  shouldReduceMotion
                    ? { scale: 1, opacity: 0.7 }
                    : {
                        scale: [1, 1.35, 1],
                        opacity: [0.85, 0.45, 0.85],
                      }
                }
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : {
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: i * 0.2,
                      }
                }
                style={{ willChange: 'transform, opacity' }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border border-accent-cyan/40"
                animate={
                  shouldReduceMotion
                    ? { scale: 1.15, opacity: 0.3 }
                    : {
                        scale: [1, 2],
                        opacity: [0.55, 0],
                      }
                }
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : {
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeOut',
                        delay: i * 0.2,
                      }
                }
                style={{ willChange: 'transform, opacity' }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <AnimatedCounter
                  end={stat.value}
                  duration={2}
                  suffix={stat.suffix}
                  className="text-3xl sm:text-4xl font-bold text-white"
                />
              </div>
              <p className="text-text-secondary">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
