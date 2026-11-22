import { useRef, useCallback, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SectionBadge } from '@/components/SectionBadge';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    quote:
      'Blackgate transformed our entire security posture. Their zero-trust implementation reduced our attack surface by 85% within the first quarter.',
    author: 'Rahul Sharma',
    role: 'CTO, FinSecure Labs',
    accent: 'from-accent-cyan/20 to-accent-teal/20',
    borderAccent: 'border-accent-cyan/30',
  },
  {
    quote:
      'The AI-driven threat detection caught anomalies our previous system missed entirely. Their team operates with military-grade precision.',
    author: 'Priya Deshmukh',
    role: 'VP Engineering, CloudScale',
    accent: 'from-emerald-500/20 to-cyan-500/20',
    borderAccent: 'border-emerald-500/30',
  },
  {
    quote:
      'From penetration testing to compliance — Blackgate delivered a comprehensive security audit that helped us achieve SOC 2 certification in record time.',
    author: 'Ankit Mehta',
    role: 'Founder, DataVault',
    accent: 'from-blue-500/20 to-purple-500/20',
    borderAccent: 'border-blue-500/30',
  },
  {
    quote:
      'Their web development team built us a high-performance platform that handles 10x our previous traffic with enterprise-grade security baked in.',
    author: 'Sara Patel',
    role: 'Product Lead, NexGen',
    accent: 'from-amber-500/20 to-orange-500/20',
    borderAccent: 'border-amber-500/30',
  },
  {
    quote:
      'Outstanding incident response. When we faced a potential breach, Blackgate had it contained and analyzed within 2 hours. Truly world-class.',
    author: 'Vikram Joshi',
    role: 'CISO, MediShield',
    accent: 'from-rose-500/20 to-pink-500/20',
    borderAccent: 'border-rose-500/30',
  },
];

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = useCallback((index: number) => {
    const bounded = Math.max(0, Math.min(index, testimonials.length - 1));
    const node = cardRefs.current[bounded];
    if (!node) return;
    node.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    setActiveIndex(bounded);
  }, []);

  const updateActiveFromScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    const center = container.scrollLeft + container.clientWidth / 2;
    let closest = 0;
    let minDist = Infinity;
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const dist = Math.abs(cardCenter - center);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });
    setActiveIndex((p) => (p === closest ? p : closest));
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.addEventListener('scroll', updateActiveFromScroll, { passive: true });
    return () => container.removeEventListener('scroll', updateActiveFromScroll);
  }, [updateActiveFromScroll]);

  return (
    <section className="py-20 bg-transparent relative overflow-hidden">
      {/* Noise background */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12">
          <SectionBadge text="Client Reviews" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
            Trusted by Leaders
          </h2>
          <p className="text-text-secondary max-w-lg mx-auto">
            What our clients say about working with Blackgate.
          </p>
        </ScrollReveal>

        {/* Carousel */}
        <div className="relative group">
          {/* Nav Buttons */}
          <button
            onClick={() => scrollToIndex(activeIndex - 1)}
            disabled={activeIndex === 0}
            aria-label="Previous testimonial"
            className={cn(
              'absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black border flex items-center justify-center transition-all shadow-lg',
              activeIndex > 0
                ? 'border-white/20 text-white/70 hover:text-white hover:border-white hover:scale-110'
                : 'border-white/10 text-white/30 cursor-not-allowed'
            )}
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={() => scrollToIndex(activeIndex + 1)}
            disabled={activeIndex === testimonials.length - 1}
            aria-label="Next testimonial"
            className={cn(
              'absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black border flex items-center justify-center transition-all shadow-lg',
              activeIndex < testimonials.length - 1
                ? 'border-white/20 text-white/70 hover:text-white hover:border-white hover:scale-110'
                : 'border-white/10 text-white/30 cursor-not-allowed'
            )}
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 items-stretch"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={t.author}
                ref={(node) => { cardRefs.current[i] = node; }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="snap-center shrink-0 w-[320px] sm:w-[380px] md:w-[420px]"
              >
                <div
                  className={cn(
                    'relative h-full p-6 sm:p-8 rounded-2xl bg-black border transition-all duration-500 group/card hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] flex flex-col',
                    t.borderAccent,
                    activeIndex === i ? 'border-opacity-100 scale-[1.02]' : 'border-opacity-50'
                  )}
                >
                  {/* Gradient overlay */}
                  <div
                    className={cn(
                      'absolute inset-0 rounded-2xl bg-gradient-to-br opacity-30 pointer-events-none',
                      t.accent
                    )}
                  />

                  {/* Quote icon */}
                  <Quote className="w-8 h-8 text-accent-cyan/30 mb-4 flex-shrink-0 relative" />

                  {/* Stars */}
                  <div className="flex gap-1 mb-4 relative">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-accent-cyan text-accent-cyan" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-6 flex-grow relative">
                    "{t.quote}"
                  </p>

                  {/* Author */}
                  <div className="relative">
                    <p className="text-sm font-semibold text-white">{t.author}</p>
                    <p className="text-xs text-text-secondary">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={cn(
                'transition-all duration-300 rounded-full',
                activeIndex === i
                  ? 'w-8 h-2 bg-accent-cyan'
                  : 'w-2 h-2 bg-white/20 hover:bg-white/40'
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
