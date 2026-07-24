import { motion } from 'framer-motion';
import { StrengthCard } from '@/components/StrengthCard';
import { ScrollReveal } from '@/components/ScrollReveal';
import coreCloudNativeImage from '@/assets/core-cloud-native.jpg';
import coreServerlessImage from '@/assets/core-serverless.jpg';
import coreAiImage from '@/assets/core-ai.jpg';

const strengths = [
  {
    image: coreCloudNativeImage,
    title: 'Cloud Native',
    description: 'Scalable infrastructure built on a cloud-first foundation.',
  },
  {
    image: coreServerlessImage,
    title: 'Serverless',
    description: 'Function-as-a-service for modern apps with maximum efficiency.',
  },
  {
    image: coreAiImage,
    title: 'AI Driven',
    description: 'Cognitive threat intelligence driving proactive protection.',
  },
];

export default function CoreStrengthsSection() {
  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            CORE STRENGTHS
          </h2>
          <p className="text-text-secondary">
            Highly skilled to 3D interactive schematic pathways
          </p>
        </ScrollReveal>

        {/* Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {strengths.map((strength, index) => (
            <motion.div
              key={strength.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <StrengthCard {...strength} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
