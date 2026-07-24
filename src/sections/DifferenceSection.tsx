import { DifferenceCard } from '@/components/DifferenceCard';
import { ScrollReveal } from '@/components/ScrollReveal';
import differenceEdgeImage from '@/assets/difference-edge.jpg';
import differenceScaleImage from '@/assets/difference-scale.jpg';
import differenceAiSecurityImage from '@/assets/difference-ai-security.jpg';
import featureZeroTrustImage from '@/assets/feature-zero-trust.jpg';

const differences = [
  {
    number: 1,
    title: 'Clean Edge',
    subtitle: 'Edge Computing',
    image: differenceEdgeImage,
  },
  {
    number: 2,
    title: 'Scalability & Performance',
    subtitle: 'Auto-Scaling',
    image: differenceScaleImage,
  },
  {
    number: 3,
    title: 'AI Driven Security',
    subtitle: 'Threat Detection',
    image: differenceAiSecurityImage,
  },
  {
    number: 4,
    title: '24/7 Threat Intelligence',
    subtitle: 'Threat Intelligence',
    image: featureZeroTrustImage,
  },
];

export default function DifferenceSection() {
  return (
    <section className="py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            THE BLACKGATE DIFFERENCE
          </h2>
          <p className="text-text-secondary">
            Five integrated advantages. One security advantage.
          </p>
        </ScrollReveal>

        {/* Difference Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differences.map((diff, index) => (
            <DifferenceCard 
              key={diff.title} 
              {...diff} 
              delay={index * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
