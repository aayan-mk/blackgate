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
    title: 'Cloud-Native Setup',
    description: 'Clean container setups with automated deployments and reliable cloud baselines.',
    image: featureKubernetesImage,
  },
  {
    number: 2,
    title: 'Secure-by-Design Web',
    description: 'High-performance, responsive web architectures with strict security headers.',
    image: featureEdgeNetworkImage,
  },
  {
    number: 3,
    title: 'Zero-Trust Principles',
    description: 'Identity-first access controls and least-privilege security across all endpoints.',
    image: featureZeroTrustImage,
  },
  {
    number: 4,
    title: 'Built to Scale',
    description: 'Clean codebases structured to accommodate growing traffic without costly rewrites.',
    image: featureScalabilityImage,
  },
  {
    number: 5,
    title: 'Applied AI Workflows',
    description: 'Intelligent automation and smart integrations that solve real business bottlenecks.',
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
            THE BLACKGATE FOUNDATION
          </h2>
          <p className="text-text-secondary max-w-lg mx-auto">
            Modern infrastructure and development principles engineered with care from day one.
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
