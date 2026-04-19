import { useEffect } from 'react';
import { motion as Motion } from 'framer-motion';
import { Radar, LockKeyhole, Globe2, Layers3, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/sections/Navbar';
import Footer from '@/sections/Footer';

const featureList = [
  {
    icon: Radar,
    title: 'Threat Visibility in Real Time',
    text: 'Telemetry from cloud, network, and endpoint surfaces is correlated into actionable detection signals.',
  },
  {
    icon: LockKeyhole,
    title: 'Policy-Based Access & Trust',
    text: 'Identity-aware controls enforce least privilege with adaptive trust scoring and risk-aware sessions.',
  },
  {
    icon: Globe2,
    title: 'Global Delivery Reliability',
    text: 'Optimized routing and resilience patterns keep workloads responsive and available across regions.',
  },
  {
    icon: Layers3,
    title: 'Layered Defense by Design',
    text: 'Defense-in-depth architecture combines preventative controls, detection models, and rapid response.',
  },
];

export default function Feature() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar />

      <main className="pt-24">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-accent-cyan mb-4">Features</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
              Built-in capabilities that keep systems fast, secure, and adaptive.
            </h1>
            <p className="text-lg text-text-secondary">
              Every feature is engineered to support mission-critical workloads where uptime, trust, and performance matter simultaneously.
            </p>
          </Motion.div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featureList.map((item, index) => (
              <Motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="bg-bg-card border border-border-subtle rounded-xl p-6"
              >
                <div className="w-11 h-11 rounded-lg bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-accent-cyan" />
                </div>
                <h2 className="text-xl font-semibold text-white mb-2">{item.title}</h2>
                <p className="text-text-secondary">{item.text}</p>
              </Motion.article>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="bg-bg-card border border-border-subtle rounded-2xl p-7 sm:p-10">
            <h3 className="text-2xl font-semibold text-white mb-3">Want all feature specs in one place?</h3>
            <p className="text-text-secondary mb-6">
              Access deeper technical guidance, implementation notes, and deployment references.
            </p>
            <Link
              to="/resources"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-cyan text-bg-primary font-medium hover:bg-accent-teal transition-colors"
            >
              Open Resources
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
