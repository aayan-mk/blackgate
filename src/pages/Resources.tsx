import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, FileText, GraduationCap, BookOpen, ClipboardCheck, Download, Play, ArrowRight, Check, Shield } from 'lucide-react';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';

const categories = [
  { icon: FileText, title: 'Documentation', description: 'Product docs and technical references' },
  { icon: GraduationCap, title: 'Guides & Tutorials', description: 'Step-by-step guides and best practices' },
  { icon: BookOpen, title: 'Playbooks', description: 'Incident response and operational playbooks' },
  { icon: ClipboardCheck, title: 'Case Reports', description: 'Real-world cases and lessons learned' },
  { icon: Download, title: 'Tools & Downloads', description: 'Utilities, templates and helpful tools' },
  { icon: Play, title: 'Webinars', description: 'On-demand sessions and trainings' },
];

const tabs = ['All Resources', 'Trending', 'Latest', 'Popular'];

const resources = [
  { type: 'Guide', icon: Shield, title: 'Zero-Trust Architecture Implementation Guide', description: 'A practical guide to design and implement zero-trust security across hybrid environments.', format: 'Coming Soon', time: '', tags: ['Trending', 'Popular'] },
  { type: 'Playbook', icon: BookOpen, title: 'Ransomware Response Playbook', description: 'End-to-end playbook for detecting, containing, and recovering from ransomware incidents.', format: 'Coming Soon', time: '', tags: ['Latest'] },
  { type: 'Case Report', icon: ClipboardCheck, title: 'Cloud Security Posture Assessment Case Study', description: 'How a global enterprise reduced critical misconfigurations by 85% using Blackgate.', format: 'Coming Soon', time: '', tags: ['Popular'] },
  { type: 'Guide', icon: Shield, title: 'Cloud Hardening Checklist', description: 'Comprehensive checklist to secure AWS, Azure, and GCP environments.', format: 'Coming Soon', time: '', tags: ['Latest', 'Trending'] },
  { type: 'Template', icon: FileText, title: 'Incident Report Template', description: 'Standardized template for incident documentation and executive reporting.', format: 'Coming Soon', time: '', tags: ['Trending'] },
  { type: 'Tutorial', icon: Play, title: 'Getting Started with Blackgate', description: 'Quick start tutorial to deploy and configure Blackgate in your environment.', format: 'Coming Soon', time: '', tags: ['Popular'] },
  { type: 'Guide', icon: FileText, title: 'Identity & Access Management Best Practices', description: 'Principles and practices for secure access management at enterprise scale.', format: 'Coming Soon', time: '', tags: ['Trending'] },
  { type: 'Case Report', icon: ClipboardCheck, title: 'SOC Automation Success Story', description: 'How automation reduced alert fatigue by 70% and improved MTTR.', format: 'Coming Soon', time: '', tags: ['Latest', 'Popular'] },
  { type: 'Data Sheet', icon: Download, title: 'Blackgate Platform Overview', description: 'Feature overview, architecture highlights, and deployment options.', format: 'Coming Soon', time: '', tags: ['Latest'] },
  { type: 'Webinar', icon: Play, title: 'Building Resilient Cloud Operations', description: 'On-demand webinar with experts on building secure and resilient cloud operations.', format: 'Coming Soon', time: '', tags: ['Trending', 'Popular'] },
];

const topics = [
  'Zero Trust', 'Identity Security', 'Cloud Security', 'Threat Detection',
  'Incident Response', 'Automation', 'Compliance', 'Risk Management',
];

export default function Resources() {
  const [activeTab, setActiveTab] = useState('All Resources');

  return (
    <div className="relative min-h-screen overflow-hidden bg-bg-primary cyber-grid">
      <Navbar />
      <section className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block text-xs font-semibold tracking-wider text-cyan-primary uppercase mb-4">Resources</span>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              Documentation and field knowledge for <span className="gradient-text">faster execution.</span>
            </h1>
            <p className="mt-6 max-w-lg text-text-secondary">
              Explore practical resources curated for engineering, security, and leadership teams adopting Blackgate at scale.
            </p>
            <div className="mt-8 relative max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
              <input
                type="text"
                placeholder="Search resources, guides, playbooks..."
                className="w-full rounded-xl border border-border bg-bg-card py-3.5 pl-11 pr-4 text-sm text-white placeholder-text-muted focus:border-cyan-primary focus:outline-none focus:ring-1 focus:ring-cyan-primary"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center"
          >
            <div className="relative rounded-3xl bg-gradient-to-b from-cyan-primary/10 to-transparent p-10 border border-cyan-primary/20">
              <div className="grid grid-cols-3 gap-4">
                {categories.slice(0, 6).map((cat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.08 }}
                    className="rounded-xl bg-bg-card p-4 border border-cyan-primary/20 text-center"
                  >
                    <cat.icon size={24} className="mx-auto text-cyan-primary" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="relative mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <StaggerContainer className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6" staggerDelay={0.08}>
          {categories.map((cat, index) => (
            <StaggerItem key={index}>
              <div className="h-full rounded-2xl bg-bg-card p-5 gradient-border text-center hover:bg-bg-card-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div className="mx-auto mb-3 inline-flex rounded-xl bg-cyan-primary/10 p-2.5 text-cyan-primary">
                  <cat.icon size={22} />
                </div>
                <h3 className="text-sm font-semibold text-white">{cat.title}</h3>
                <p className="mt-2 text-xs text-text-secondary">{cat.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Resource Library */}
      <section className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <AnimatedSection>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">Resource Library</h2>
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${activeTab === tab
                      ? 'bg-cyan-primary/10 text-cyan-primary'
                      : 'text-text-secondary hover:text-white hover:bg-white/5'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <motion.div layout className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          <AnimatePresence mode="popLayout">
            {resources
              .filter((resource) => activeTab === 'All Resources' || resource.tags.includes(activeTab))
              .map((resource) => (
              <motion.div
                layout
                key={resource.title}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, type: 'spring', bounce: 0.3 }}
                className="group rounded-2xl bg-bg-card p-5 gradient-border hover:bg-bg-card-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
              <div className="mb-4 inline-flex rounded-xl bg-cyan-primary/10 p-2.5 text-cyan-primary group-hover:bg-cyan-primary/20 transition-colors">
                <resource.icon size={20} />
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-cyan-primary">{resource.type}</div>
              <h3 className="mt-2 text-sm font-semibold text-white leading-snug">{resource.title}</h3>
              <p className="mt-2 text-xs text-text-secondary line-clamp-3">{resource.description}</p>
              <div className="mt-4 flex items-center justify-between text-xs text-text-muted">
                <span>{resource.format} · {resource.time}</span>
                <ArrowRight size={14} className="text-cyan-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Topics & Newsletter */}
      <section className="relative mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <AnimatedSection>
          <div className="grid grid-cols-1 gap-8 rounded-2xl bg-bg-card p-8 gradient-border lg:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-white mb-5">Popular Topics</h3>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {topics.map((topic, i) => (
                  <button
                    key={i}
                    className="flex items-center justify-between rounded-xl border border-border bg-white/5 px-4 py-3 text-sm text-text-secondary hover:border-cyan-primary/30 hover:text-cyan-primary transition-colors"
                  >
                    {topic}
                    <ArrowRight size={14} />
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-5">Stay Updated</h3>
              <p className="text-sm text-text-secondary mb-4">Get the latest guides, playbooks, and updates straight to your inbox.</p>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your work email"
                  className="flex-1 rounded-xl border border-border bg-bg-primary px-4 py-3 text-sm text-white placeholder-text-muted focus:border-cyan-primary focus:outline-none focus:ring-1 focus:ring-cyan-primary"
                />
                <button className="rounded-xl bg-cyan-primary px-5 py-3 text-sm font-semibold text-black btn-glow">
                  Subscribe
                </button>
              </div>
              <div className="mt-4 flex flex-wrap gap-4 text-xs text-text-secondary">
                <span className="flex items-center gap-2"><Check size={14} className="text-cyan-primary" /> Weekly updates</span>
                <span className="flex items-center gap-2"><Check size={14} className="text-cyan-primary" /> No spam, unsubscribe anytime</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Contact CTA */}
      <section className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-3xl bg-bg-card p-10 border border-cyan-primary/20">
            <div className="relative z-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div>
                <h2 className="text-2xl font-bold text-white md:text-3xl">Can't find what you need?</h2>
                <p className="mt-2 text-text-secondary">Our security experts are here to help you find the right resources.</p>
              </div>
              <button className="rounded-full bg-cyan-primary px-8 py-3.5 text-sm font-semibold text-black btn-glow flex items-center gap-2 shrink-0">
                Contact Our Team <span>→</span>
              </button>
            </div>
          </div>
        </AnimatedSection>
      </section>


      <Footer />
    </div>
  );
}
