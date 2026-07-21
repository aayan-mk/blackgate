import { useEffect } from 'react';
import { motion as Motion } from 'framer-motion';
import { ShieldCheck, Cloud, Cpu, Workflow, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/sections/Navbar';
import Footer from '@/sections/Footer';
import { GlowCard } from '@/components/GlowCard';

const productBlocks = [
  {
    icon: Cloud,
    title: 'Cloud Command Layer',
    text: 'Unified cloud orchestration for deployments, cost controls, and operational guardrails across multi-cloud environments.',
  },
  {
    icon: ShieldCheck,
    title: 'Security Control Plane',
    text: 'Policy-driven identity, zero-trust access, threat telemetry, and compliance automation in one hardened layer.',
  },
  {
    icon: Cpu,
    title: 'AI Operations Engine',
    text: 'Behavioral analysis and anomaly detection tuned for infrastructure, application, and endpoint intelligence.',
  },
  {
    icon: Workflow,
    title: 'Response Automation',
    text: 'Runbooks and automated response workflows that reduce incident MTTR and improve service continuity.',
  },
];

export default function Product() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-transparent">
      <Navbar />

      <main className="pt-24">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-accent-cyan mb-4">Product</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
              One platform. Complete digital defense and delivery.
            </h1>
            <p className="text-lg text-text-secondary">
              Blackgate Product unifies cloud operations, cybersecurity enforcement, and intelligent automation so teams can ship faster without compromising resilience.
            </p>
          </Motion.div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {productBlocks.map((block, index) => (
              <GlowCard
                key={block.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="p-6"
              >
                <div className="w-11 h-11 rounded-lg bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center mb-4">
                  <block.icon className="w-5 h-5 text-accent-cyan" />
                </div>
                <h2 className="text-xl font-semibold text-white mb-2">{block.title}</h2>
                <p className="text-text-secondary">{block.text}</p>
              </GlowCard>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="bg-bg-card border border-accent-cyan/25 rounded-2xl p-7 sm:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Need a tailored product walkthrough?</h3>
              <p className="text-text-secondary">See how Blackgate fits your architecture, controls, and growth goals.</p>
            </div>
            <Link
              to="/resources"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-cyan text-bg-primary font-medium hover:bg-accent-teal transition-colors"
            >
              Explore Resources
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
