import { motion, useReducedMotion } from 'framer-motion';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Radio, MapPin } from 'lucide-react';
import { GlowCard } from '@/components/GlowCard';
import worldMapImage from '@/assets/world-map.jpg';

const mapHotspots = [
  { id: 'us-west', left: 14.8, top: 37.4 },
  { id: 'us-east', left: 25.4, top: 35.3 },
  { id: 'south-america-north', left: 26.2, top: 57.8 },
  { id: 'south-america-south', left: 30.4, top: 63.9 },
  { id: 'europe', left: 45.4, top: 26.0 },
  { id: 'north-africa', left: 45.4, top: 37.4 },
  { id: 'west-africa', left: 45.8, top: 43.2 },
  { id: 'central-africa', left: 56.4, top: 49.5 },
  { id: 'central-asia', left: 66.6, top: 35.4 },
  { id: 'india', left: 71.8, top: 41.1 },
  { id: 'southeast-asia', left: 76.2, top: 47.5 },
  { id: 'east-asia', left: 78.8, top: 39.2 },
  { id: 'australia', left: 79.3, top: 67.8 },
];

export default function WorldMapSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-12 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="border border-border-subtle bg-[#080c14] rounded-2xl p-4 sm:p-5 md:p-6 relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* World Map Side (Left 8 columns, transparent, no separate border) */}
              <div className="lg:col-span-8 relative h-[200px] sm:h-[240px] lg:h-[280px] overflow-hidden rounded-lg">
                <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                  <div className="relative w-full aspect-[2] flex-shrink-0">
                    <img 
                      src={worldMapImage}
                      alt="Global Network" 
                      className="block w-full h-full object-cover"
                    />
                    
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
                  </div>
                </div>
              </div>

              {/* Sidebar Stats Panel (Right 4 columns, transparent, stacked inline) */}
              <div className="lg:col-span-4 flex flex-col justify-center gap-8 pl-0 lg:pl-4">
                {/* Stat 1 */}
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-accent-cyan/5 border border-accent-cyan/20 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                    <Radio className="w-6 h-6 text-accent-cyan animate-pulse" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-1">
                      <AnimatedCounter
                        end={18.5}
                        duration={2}
                        suffix="%"
                        className="text-3xl font-bold text-white tracking-tight"
                      />
                    </div>
                    <p className="text-sm font-semibold text-white mt-0.5">Platform Uptime</p>
                    <p className="text-xs text-accent-cyan font-medium mt-1">+1.3% vs last month</p>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-accent-cyan/5 border border-accent-cyan/20 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                    <MapPin className="w-6 h-6 text-accent-cyan" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-1">
                      <AnimatedCounter
                        end={185}
                        duration={2}
                        suffix="+"
                        className="text-3xl font-bold text-white tracking-tight"
                      />
                    </div>
                    <p className="text-sm font-semibold text-white mt-0.5">Active Deployments</p>
                    <p className="text-xs text-accent-cyan font-medium mt-1">+24 vs last month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
