import { motion } from 'framer-motion';
import { FeatureCard } from '@/components/FeatureCard';
import { ScrollReveal } from '@/components/ScrollReveal';
import featureKubernetesImage from '@/assets/feature-kubernetes.jpg';
import featureEdgeNetworkImage from '@/assets/feature-edge-network.jpg';
import featureZeroTrustImage from '@/assets/feature-zero-trust.jpg';
import featureScalabilityImage from '@/assets/feature-scalability.jpg';
import featureAiSecurityImage from '@/assets/feature-ai-security.jpg';

const features = [
  {
    number: 1,
    title: 'Managed Kubernetes',
    description: 'Container orchestration with automated deployment, scaling, and management.',
    image: featureKubernetesImage,
  },
  {
    number: 2,
    title: 'Global Edge Network',
    description: 'Worldwide CDN with low-latency content delivery across 100+ locations.',
    image: featureEdgeNetworkImage,
  },
  {
    number: 3,
    title: 'Zero-Trust Architecture',
    description: 'Security framework requiring strict identity verification for every access.',
    image: featureZeroTrustImage,
  },
  {
    number: 4,
    title: 'Scalability & Performance',
    description: 'Auto-scaling infrastructure that adapts to your workload demands.',
    image: featureScalabilityImage,
  },
  {
    number: 5,
    title: 'AI-Driven Security',
    description: 'Intelligent threat detection and response powered by machine learning.',
    image: featureAiSecurityImage,
  },
];

export default function UncompromiseSection() {
  return (
    <section id="features" className="py-20 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            THE BLACKGATE UNCOMPROMISE
          </h2>
          <p className="text-text-secondary">
            The intelligent & continuous advantage delivery
          </p>
        </ScrollReveal>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
