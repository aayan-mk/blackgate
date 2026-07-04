import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ServiceCard } from '@/components/ServiceCard';
import { ScrollReveal } from '@/components/ScrollReveal';
import { cn } from '@/lib/utils';
import serviceWebImage from '@/assets/service-cloud-native.jpg';
import serviceCybersecurityImage from '@/assets/service-cybersecurity.jpg';
import serviceForensicsImage from '@/assets/service-infrastructure.jpg';
import serviceAiImage from '@/assets/service-api.jpg';

const services = [
  {
    image: serviceWebImage,
    title: 'Web Design & Development',
    description:
      'Your digital presence is your first line of defense. We build experiences that convert visitors into believers.',
    points: [
      'High-performance websites',
      'UI/UX focused on conversion',
      'Secure-by-design architecture',
    ],
    emphasis: "Performance isn't optional. Security isn't negotiable.",
    cta: 'Learn More',
    to: '/services/web-development',
  },
  {
    image: serviceCybersecurityImage,
    title: 'Cybersecurity Solutions',
    description:
      'One breach can end your business. We make sure it never happens.',
    points: [
      'Vulnerability assessment & penetration testing',
      'Secure infrastructure planning',
      'Risk analysis and compliance support',
    ],
    emphasis: 'Your reputation depends on our vigilance.',
    cta: 'Learn More',
    to: '/services/cybersecurity',
  },
  {
    image: serviceForensicsImage,
    title: 'Cyber Forensics',
    description:
      'When incidents happen, evidence matters. We investigate, analyze, and reconstruct digital events with forensic precision.',
    points: [
      'Incident response & digital investigation',
      'Evidence collection & chain of custody',
      'Breach analysis & root cause identification',
    ],
    emphasis: 'The truth is in the logs. We find it.',
    cta: 'Learn More',
    to: '/services/cyber-forensics',
  },
  {
    image: serviceAiImage,
    title: 'AI Solutions',
    description:
      'Intelligence that scales your business while you sleep. Automation that compounds.',
    points: [
      'AI chatbots & agents',
      'Business automation',
      'Predictive analytics & intelligent systems',
    ],
    emphasis: "AI isn't the future. It's the present, if you're ready.",
    cta: 'Learn More',
    to: '/services/ai-solutions',
  },
];

export default function ServicesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = useCallback((index: number) => {
    const boundedIndex = Math.max(0, Math.min(index, services.length - 1));
    const node = cardRefs.current[boundedIndex];

    if (!node) return;

    node.scrollIntoView({
      behavior: 'smooth',
      inline: 'start',
      block: 'nearest',
    });

    setActiveIndex(boundedIndex);
  }, []);

  const updateActiveFromScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(cardCenter - containerCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex((prev) => (prev === closestIndex ? prev : closestIndex));
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return undefined;

    updateActiveFromScroll();

    const onScroll = () => updateActiveFromScroll();
    container.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      container.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [updateActiveFromScroll]);

  const scroll = (direction: 'left' | 'right') => {
    const nextIndex = activeIndex + (direction === 'left' ? -1 : 1);
    scrollToIndex(nextIndex);
  };

  const canScrollLeft = activeIndex > 0;
  const canScrollRight = activeIndex < services.length - 1;

  return (
    <section id="services" className="py-20 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Our Services
          </h2>
          <p className="text-text-secondary">
            Four mission-critical pillars. One uncompromising standard.
          </p>
        </ScrollReveal>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            aria-label="Previous service"
            className={cn(
              'absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-bg-card border border-border-subtle flex items-center justify-center transition-all',
              canScrollLeft
                ? 'text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/50'
                : 'text-text-muted/50 cursor-not-allowed opacity-60'
            )}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            aria-label="Next service"
            className={cn(
              'absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-bg-card border border-border-subtle flex items-center justify-center transition-all',
              canScrollRight
                ? 'text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/50'
                : 'text-text-muted/50 cursor-not-allowed opacity-60'
            )}
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Cards Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                ref={(node) => {
                  cardRefs.current[index] = node;
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="snap-start shrink-0"
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Service Tabs */}
        <div className="mt-7 flex flex-wrap justify-center gap-2">
          {services.map((service, index) => (
            <button
              key={service.title}
              type="button"
              onClick={() => scrollToIndex(index)}
              aria-pressed={activeIndex === index}
              className={cn(
                'px-3.5 py-1.5 rounded-full text-xs sm:text-sm border transition-all',
                activeIndex === index
                  ? 'bg-accent-cyan/15 border-accent-cyan text-accent-cyan'
                  : 'bg-bg-card border-border-subtle text-text-secondary hover:border-accent-cyan/40 hover:text-white'
              )}
            >
              {service.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
