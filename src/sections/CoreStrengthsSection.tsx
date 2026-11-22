import { motion } from 'framer-motion';
import { StrengthCard } from '@/components/StrengthCard';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SectionBadge } from '@/components/SectionBadge';
import coreCloudNativeImage from '@/assets/core-cloud-native.jpg';
import coreServerlessImage from '@/assets/core-serverless.jpg';
import coreAiImage from '@/assets/core-ai.jpg';

const strengths = [
  {
    image: coreCloudNativeImage,
    title: 'Cloud Native',
    description: 'Modern, containerized setups built on clean cloud foundations.',
  },
  {
    image: coreServerlessImage,
    title: 'Lean Serverless',
    description: 'Function-driven architectures that minimize maintenance and cloud cost overhead.',
  },
  {
    image: coreAiImage,
    title: 'Applied AI',
    description: 'Practical automation and intelligence to accelerate repetitive operations.',
  },
];

export default function CoreStrengthsSection() {
  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12">
          <SectionBadge text="Technology Stack" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
            CORE STRENGTHS
          </h2>
          <p className="text-text-secondary max-w-md mx-auto">
            Practical engineering disciplines powering every project we build.
          </p>
        </ScrollReveal>

        {/* Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {strengths.map((strength, index) => (
            <motion.div
              key={strength.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <StrengthCard {...strength} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
