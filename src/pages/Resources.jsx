import { useEffect } from 'react';
import { motion as Motion } from 'framer-motion';
import { BookOpen, Shield, FileText, Wrench, ArrowRight } from 'lucide-react';
import Navbar from '@/sections/Navbar';
import Footer from '@/sections/Footer';
import { GlowCard } from '@/components/GlowCard';

const resources = [
  {
    icon: BookOpen,
    title: 'Playbooks',
    points: ['Incident response templates', 'Cloud hardening checklists', 'Operational recovery drills'],
  },
  {
    icon: Shield,
    title: 'Security Guides',
    points: ['Zero-trust architecture patterns', 'Identity and key management', 'Compliance mapping starter kits'],
  },
  {
    icon: FileText,
    title: 'Case Reports',
    points: ['Threat investigation summaries', 'Post-incident lessons learned', 'ROI and resilience outcomes'],
  },
  {
    icon: Wrench,
    title: 'Implementation Notes',
    points: ['Deployment blueprints', 'Reference integrations', 'Performance tuning checklists'],
  },
];

export default function Resources() {
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
            <p className="text-sm uppercase tracking-[0.2em] text-accent-cyan mb-4">Resources</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
              Documentation and field knowledge for faster execution.
            </h1>
            <p className="text-lg text-text-secondary">
              Explore practical resources curated for engineering, security, and leadership teams adopting Blackgate at scale.
            </p>
          </Motion.div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((item, index) => (
              <GlowCard
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="p-6"
              >
                <div className="w-11 h-11 rounded-lg bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-accent-cyan" />
                </div>
                <h2 className="text-xl font-semibold text-white mb-3">{item.title}</h2>
                <ul className="space-y-2">
                  {item.points.map((point) => (
                    <li key={point} className="text-text-secondary text-sm">
                      • {point}
                    </li>
                  ))}
                </ul>
              </GlowCard>
            ))}
          </div>
        </section>

        <section id="contact-team" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <GlowCard className="p-7 sm:p-10">
            <h3 className="text-2xl font-semibold text-white mb-3">Need a custom resource pack?</h3>
            <p className="text-text-secondary mb-6">
              Reach out and our team will prepare a targeted implementation pack for your use case.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-cyan text-bg-primary font-medium hover:bg-accent-teal transition-colors"
            >
              Contact Team
              <ArrowRight className="w-4 h-4" />
            </a>
          </GlowCard>
        </section>
      </main>

      <Footer />
    </div>
  );
}
