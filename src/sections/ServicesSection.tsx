import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ServiceCard } from '@/components/ServiceCard';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SectionBadge } from '@/components/SectionBadge';
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
      'Your digital presence is your first impression. We build modern, responsive web experiences with security baked in.',
    points: [
      'High-performance modern frameworks',
      'UI/UX focused on clear conversion',
      'Secure-by-design front & back-end',
    ],
    emphasis: 'Fast. Modern. Built with clean architecture.',
    cta: 'Learn More',
    to: '/services/web-development',
  },
  {
    image: serviceCybersecurityImage,
    title: 'Cybersecurity Solutions',
    description:
      'Security planning, vulnerability assessments, and risk mitigation tailored for emerging businesses and startups.',
    points: [
      'Vulnerability assessment & discovery',
      'Secure cloud infrastructure planning',
      'Access control & zero-trust posture',
    ],
    emphasis: 'Proactive defense and vulnerability reduction from day one.',
    cta: 'Learn More',
    to: '/services/cybersecurity',
  },
  {
    image: serviceForensicsImage,
    title: 'Cyber Forensics',
    description:
      'Digital investigation, incident triage, and root-cause analysis to ensure security gaps are traced and remediated.',
    points: [
      'Incident triage & log analysis',
      'Evidence collection & timeline review',
      'Remediation plans to prevent recurrence',
    ],
    emphasis: 'Systematic analysis and rigorous evidence preservation.',
    cta: 'Learn More',
    to: '/services/cyber-forensics',
  },
  {
    image: serviceAiImage,
    title: 'AI Solutions',
    description:
      'Practical automation, custom document workflows, and intelligent integrations that eliminate operational drag.',
    points: [
      'Intelligent workflows & automation',
      'Document parsing & data extraction',
      'Custom AI assistants & integrations',
    ],
    emphasis: 'Real-world utility without unnecessary complexity.',
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
    <section id="services" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12">
          <SectionBadge text="What We Do" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
            Our Services
          </h2>
          <p className="text-text-secondary max-w-md mx-auto">
            Four core pillars of digital defense and modern development — honest, security-first, and built for growth.
          </p>
        </ScrollReveal>

        {/* Carousel */}
        <div className="relative group">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            aria-label="Previous service"
            className={cn(
              'absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/80 backdrop-blur-sm border flex items-center justify-center transition-all shadow-lg',
              canScrollLeft
                ? 'border-white/20 text-white/70 hover:text-white hover:border-accent-cyan hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:scale-110'
                : 'border-white/10 text-white/30 cursor-not-allowed'
            )}
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            aria-label="Next service"
            className={cn(
              'absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/80 backdrop-blur-sm border flex items-center justify-center transition-all shadow-lg',
              canScrollRight
                ? 'border-white/20 text-white/70 hover:text-white hover:border-accent-cyan hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:scale-110'
                : 'border-white/10 text-white/30 cursor-not-allowed'
            )}
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Cards Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory py-8 items-stretch"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                ref={(node) => {
                  cardRefs.current[index] = node;
                }}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
                className="snap-start shrink-0 flex h-auto"
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Service Tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
          {services.map((service, index) => (
            <button
              key={service.title}
              type="button"
              onClick={() => scrollToIndex(index)}
              aria-pressed={activeIndex === index}
              className={cn(
                'px-4 py-2 rounded-full text-xs sm:text-sm border transition-all duration-300 font-medium',
                activeIndex === index
                  ? 'bg-accent-cyan border-accent-cyan text-bg-primary shadow-[0_0_20px_rgba(6,182,212,0.3)]'
                  : 'bg-black border-white/20 text-white/70 hover:border-accent-cyan/50 hover:text-white hover:bg-accent-cyan/5'
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
