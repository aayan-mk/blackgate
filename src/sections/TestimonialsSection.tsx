import { useRef, useCallback, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SectionBadge } from '@/components/SectionBadge';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    quote:
      'As an early pilot partner, working with Blackgate was refreshing. Their engineers gave us direct, hands-on attention, auditing our web application and securing our endpoints before launch.',
    author: 'Early Pilot Partner',
    role: 'SaaS Beta Cohort',
    accent: 'from-accent-cyan/20 to-accent-teal/20',
    borderAccent: 'border-accent-cyan/30',
  },
  {
    quote:
      'During technical evaluation, the team demonstrated remarkable discipline. They approached system architecture with a security-first mindset, focusing on zero-trust access and clean code.',
    author: 'Academic & Technical Mentor',
    role: 'Computer Systems Research Advisor',
    accent: 'from-emerald-500/20 to-cyan-500/20',
    borderAccent: 'border-emerald-500/30',
  },
  {
    quote:
      'Blackgate helped us review our API authentication and set up safe cloud defaults from Day 1. Getting direct access to the actual developers building our stack made a huge difference.',
    author: 'Early Stage Creator',
    role: 'Pre-Seed Founder',
    accent: 'from-blue-500/20 to-purple-500/20',
    borderAccent: 'border-blue-500/30',
  },
  {
    quote:
      'We built Blackgate on a simple principle: quality over vanity numbers. If code is not tested, secure, and well-documented, it simply does not ship. We treat every early project with extreme care.',
    author: 'Blackgate Founding Team',
    role: 'Engineering & Architecture Standard',
    accent: 'from-amber-500/20 to-orange-500/20',
    borderAccent: 'border-amber-500/30',
  },
  {
    quote:
      'Their pragmatic approach to AI automation and secure web foundations helped us cut through industry hype and implement practical tools that actually save our team time.',
    author: 'Design & Tech Collaborator',
    role: 'Early Adopter Network',
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
          <SectionBadge text="Early Collaborations" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
            EARLY FEEDBACK &amp; STANDARDS
          </h2>
          <p className="text-text-secondary max-w-md mx-auto">
            Grounded perspectives from our early pilot partners, advisors, and core engineering philosophy.
          </p>
        </ScrollReveal>

        {/* Carousel */}
        <div className="relative group">
          {/* Nav buttons */}
          <button
            type="button"
            onClick={() => scrollToIndex(activeIndex - 1)}
            disabled={activeIndex === 0}
            aria-label="Previous testimonial"
            className={cn(
              'absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/80 backdrop-blur-sm border flex items-center justify-center transition-all shadow-lg',
              activeIndex === 0
                ? 'border-white/10 text-white/30 cursor-not-allowed'
                : 'border-white/20 text-white/70 hover:text-white hover:border-accent-cyan hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:scale-110'
            )}
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            type="button"
            onClick={() => scrollToIndex(activeIndex + 1)}
            disabled={activeIndex === testimonials.length - 1}
            aria-label="Next testimonial"
            className={cn(
              'absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/80 backdrop-blur-sm border flex items-center justify-center transition-all shadow-lg',
              activeIndex === testimonials.length - 1
                ? 'border-white/10 text-white/30 cursor-not-allowed'
                : 'border-white/20 text-white/70 hover:text-white hover:border-accent-cyan hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:scale-110'
            )}
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Cards container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory py-8 items-stretch"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((t, index) => (
              <motion.div
                key={t.author}
                ref={(node) => {
                  cardRefs.current[index] = node;
                }}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="snap-center shrink-0 w-[300px] sm:w-[380px] md:w-[420px] flex flex-col justify-between rounded-2xl bg-bg-surface/50 border border-border-subtle p-6 sm:p-8 backdrop-blur-sm relative group/card hover:border-accent-cyan/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]"
              >
                {/* Top glow */}
                <div
                  className={cn(
                    'absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r opacity-0 group-hover/card:opacity-100 transition-opacity duration-300',
                    t.accent
                  )}
                />

                <div>
                  {/* Quote icon & stars */}
                  <div className="flex items-center justify-between mb-4">
                    <Quote className="w-8 h-8 text-accent-cyan/40" />
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Quote text */}
                  <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Author info */}
                <div className="border-t border-border-subtle/60 pt-4 flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-semibold text-sm sm:text-base">
                      {t.author}
                    </h4>
                    <p className="text-xs sm:text-sm text-text-muted">{t.role}</p>
                  </div>
                  <span className="text-xs font-mono text-accent-cyan/80 px-2 py-0.5 rounded bg-accent-cyan/10 border border-accent-cyan/20">
                    Verified
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={cn(
                'h-2 rounded-full transition-all duration-300',
                activeIndex === i
                  ? 'w-8 bg-accent-cyan shadow-[0_0_10px_rgba(6,182,212,0.5)]'
                  : 'w-2 bg-white/20 hover:bg-white/40'
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
