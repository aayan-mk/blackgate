import { DifferenceCard } from '@/components/DifferenceCard';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SectionBadge } from '@/components/SectionBadge';
import differenceEdgeImage from '@/assets/difference-edge.jpg';
import differenceScaleImage from '@/assets/difference-scale.jpg';
import differenceAiSecurityImage from '@/assets/difference-ai-security.jpg';
import featureZeroTrustImage from '@/assets/feature-zero-trust.jpg';

const differences = [
  {
    number: 1,
    title: 'Direct Engineer Access',
    subtitle: 'Zero Bureaucracy',
    image: differenceEdgeImage,
  },
  {
    number: 2,
    title: 'Modern, Zero-Legacy Tech',
    subtitle: 'Clean Code',
    image: differenceScaleImage,
  },
  {
    number: 3,
    title: 'Security-by-Design',
    subtitle: 'Day-One Defense',
    image: differenceAiSecurityImage,
  },
  {
    number: 4,
    title: 'Agile & Collaborative',
    subtitle: 'Rapid Iteration',
    image: featureZeroTrustImage,
  },
];

export default function DifferenceSection() {
  return (
    <section className="py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12">
          <SectionBadge text="Why Partner With Us" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
            THE BLACKGATE ADVANTAGE
          </h2>
          <p className="text-text-secondary max-w-lg mx-auto">
            Why early-stage teams and growing projects choose an agile, dedicated engineering partner over bureaucratic agencies.
          </p>
        </ScrollReveal>

        {/* Difference Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differences.map((diff, index) => (
            <DifferenceCard 
              key={diff.title} 
              {...diff} 
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
