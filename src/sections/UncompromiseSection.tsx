import { motion } from 'framer-motion';
import { FeatureCard } from '@/components/FeatureCard';
import { ScrollReveal } from '@/components/ScrollReveal';
import { SectionBadge } from '@/components/SectionBadge';
import ContactSection from './ContactSection';
import featureKubernetesImage from '@/assets/feature-kubernetes.jpg';
import featureEdgeNetworkImage from '@/assets/feature-edge-network.jpg';
import featureZeroTrustImage from '@/assets/feature-zero-trust.jpg';
import featureScalabilityImage from '@/assets/feature-scalability.jpg';
import featureAiSecurityImage from '@/assets/feature-ai-security.jpg';

const features = [
  {
    number: 1,
    title: 'Managed Kubernetes',
    description: 'Container orchestration with auto-scaling, self-healing, and zero-downtime management.',
    image: featureKubernetesImage,
  },
  {
    number: 2,
    title: 'Global Edge Network',
    description: 'Worldwide CDN with low latency and high availability.',
    image: featureEdgeNetworkImage,
  },
  {
    number: 3,
    title: 'Zero-Trust Architecture',
    description: 'Security by identity, least privilege for every access.',
    image: featureZeroTrustImage,
  },
  {
    number: 4,
    title: 'Scalability & Performance',
    description: 'Auto-scaling infrastructure for consistent performance.',
    image: featureScalabilityImage,
  },
  {
    number: 5,
    title: 'AI Driven Security',
    description: 'Smart defense by machine learning & behavioral analytics.',
    image: featureAiSecurityImage,
  },
];

export default function UncompromiseSection() {
  return (
    <section id="features" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12">
          <SectionBadge text="Infrastructure" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
            THE BLACKGATE UNCOMPROMISE
          </h2>
          <p className="text-text-secondary">
            The infrastructure. Continuous advantage delivery.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Features columns (Left, approx 67%, 8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                className="h-full"
              >
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </div>

          {/* Contact Form Column (Right, approx 33%, 4 cols) */}
          <motion.div
            className="lg:col-span-4 w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <ContactSection />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
