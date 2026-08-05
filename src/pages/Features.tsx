import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Lock, Brain, Cloud, Layers, ShieldCheck, BarChart3, ClipboardList, Zap, Activity, Globe, Clock, ChevronRight, Building2, Heart, ShoppingCart, Landmark, Code2 } from 'lucide-react';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';

const coreCapabilities = [
  {
    icon: Eye,
    title: 'Real-Time Threat Visibility',
    description: 'Continuous monitoring across all layers gives you instant detection and deep context on emerging threats.',
  },
  {
    icon: Lock,
    title: 'Zero-Trust Access Control',
    description: 'Verify every user, every device, and every request with adaptive policies and strict least-privilege access.',
  },
  {
    icon: Brain,
    title: 'AI-Powered Defense',
    description: 'Machine learning models detect anomalies, predict risks, and automate responses before threats escalate.',
  },
  {
    icon: Cloud,
    title: 'Cloud-Native Resilience',
    description: 'Built for elasticity and high availability across hybrid and multi-cloud environments.',
  },
  {
    icon: Layers,
    title: 'Intelligent Automation',
    description: 'Automate playbooks, response workflows, and routine tasks to reduce MTTD and MTTR.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance by Design',
    description: 'Pre-built controls and continuous compliance monitoring across industry standards.',
  },
  {
    icon: BarChart3,
    title: 'Performance Optimization',
    description: 'Advanced routing, caching, and scaling ensure speed without sacrificing security.',
  },
  {
    icon: ClipboardList,
    title: 'Unified Governance',
    description: 'Centralized policies, audit trails, and reporting for complete operational visibility.',
  },
];

const impactStats = [
  { value: '99.99%', label: 'Platform Uptime', sub: 'SLA-backed reliability', icon: Activity },
  { value: '10+', label: 'Build Website', sub: '+50 this year target', icon: Layers },
  { value: '10+', label: 'Cybersecurity', sub: '+10 this year target', icon: Globe },
  { value: '24/7', label: 'Threat Monitoring', sub: 'Always-on protection', icon: Clock },
];

const impactTabs = [
  {
    id: 'detect',
    label: 'Detect & Respond',
    icon: Eye,
    title: 'Detect & Respond',
    description: 'Identify threats earlier and respond faster with unified telemetry, AI insights, and automated actions.',
    items: [
      { icon: Activity, title: 'Unified Threat Detection', description: 'Correlate signals across endpoints, networks, identities, and cloud workloads.' },
      { icon: Brain, title: 'Incident Prioritization', description: 'AI-driven risk scoring helps teams focus on what matters most.' },
      { icon: Zap, title: 'Automated Response', description: 'Trigger targeted actions and contain threats automatically with customizable playbooks.' },
      { icon: ShieldCheck, title: 'Forensic Readiness', description: 'Rich logs and evidence collection built in for faster investigations.' },
    ],
  },
  {
    id: 'secure',
    label: 'Secure & Protect',
    icon: Lock,
    title: 'Secure & Protect',
    description: 'Harden your environment with zero-trust controls, encryption, and policy enforcement.',
    items: [
      { icon: Lock, title: 'Zero-Trust Network Access', description: 'Enforce least-privilege access across every resource.' },
      { icon: ShieldCheck, title: 'Data Loss Prevention', description: 'Monitor, classify, and protect sensitive information.' },
      { icon: Eye, title: 'Encryption Management', description: 'Centralized key and certificate lifecycle management.' },
      { icon: Cloud, title: 'Cloud Security Posture', description: 'Continuously assess and remediate misconfigurations.' },
    ],
  },
  {
    id: 'automate',
    label: 'Automate & Orchestrate',
    icon: Zap,
    title: 'Automate & Orchestrate',
    description: 'Streamline operations with intelligent workflows and policy-driven automation.',
    items: [
      { icon: Layers, title: 'Workflow Automation', description: 'Build no-code playbooks for repetitive security tasks.' },
      { icon: Brain, title: 'AI Recommendations', description: 'Get actionable suggestions based on risk and impact.' },
      { icon: Activity, title: 'Incident Orchestration', description: 'Coordinate tools, teams, and timelines in one place.' },
      { icon: BarChart3, title: 'Metrics & Reporting', description: 'Measure effectiveness with executive-ready dashboards.' },
    ],
  },
  {
    id: 'observe',
    label: 'Observe & Optimize',
    icon: BarChart3,
    title: 'Observe & Optimize',
    description: 'Gain complete visibility and continuously improve performance and security posture.',
    items: [
      { icon: Eye, title: 'Unified Telemetry', description: 'Collect and correlate logs, metrics, and traces at scale.' },
      { icon: Globe, title: 'Global Performance', description: 'Monitor latency, availability, and health across regions.' },
      { icon: Activity, title: 'Anomaly Detection', description: 'Spot deviations with ML-powered baselines.' },
      { icon: ClipboardList, title: 'Compliance Reporting', description: 'Generate audit-ready reports automatically.' },
    ],
  },
  {
    id: 'govern',
    label: 'Govern & Comply',
    icon: ClipboardList,
    title: 'Govern & Comply',
    description: 'Maintain consistent governance, risk, and compliance posture across your organization.',
    items: [
      { icon: ClipboardList, title: 'Policy Management', description: 'Define, distribute, and enforce security policies.' },
      { icon: ShieldCheck, title: 'Risk Assessment', description: 'Identify, score, and remediate risks continuously.' },
      { icon: Lock, title: 'Access Reviews', description: 'Automate certification campaigns and recertification.' },
      { icon: BarChart3, title: 'Audit Trails', description: 'Immutable logs for compliance investigations.' },
    ],
  },
];

const industries = [
  { icon: Building2, title: 'Finance', description: 'Protect sensitive data and ensure compliance.' },
  { icon: Heart, title: 'Healthcare', description: 'Secure patient data and critical systems.' },
  { icon: ShoppingCart, title: 'Retail & eCommerce', description: 'Stop fraud and keep customer experiences fast.' },
  { icon: Landmark, title: 'Government', description: 'Mission-ready security for public sector.' },
  { icon: Code2, title: 'Technology', description: 'Secure innovation at every stage.' },
];

export default function Features() {
  const [activeTab, setActiveTab] = useState('detect');
  const activeImpact = impactTabs.find((t) => t.id === activeTab) || impactTabs[0];

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
            <span className="inline-block text-xs font-semibold tracking-wider text-cyan-primary uppercase mb-4">Features</span>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              Built-in capabilities that keep systems <span className="gradient-text">fast, secure, and adaptive.</span>
            </h1>
            <p className="mt-6 max-w-lg text-text-secondary">
              Every feature is engineered to support mission-critical workloads where uptime, trust, and performance matter simultaneously.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-primary/20 blur-[80px] rounded-full" />
              <div className="relative rounded-3xl bg-gradient-to-b from-cyan-primary/20 to-transparent p-12 border border-cyan-primary/20">
                <div className="grid grid-cols-2 gap-4">
                  {[Cloud, Lock, Brain, Eye, ShieldCheck, Zap, Activity, Globe].map((Icon, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + i * 0.08 }}
                      className="rounded-xl bg-bg-card p-4 border border-cyan-primary/20"
                    >
                      <Icon size={28} className="text-cyan-primary" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <h2 className="text-3xl font-bold text-white">Core Capabilities</h2>
          <p className="mt-3 text-text-secondary">Powerful features working together to deliver uncompromised security.</p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4" staggerDelay={0.08}>
          {coreCapabilities.map((cap, index) => (
            <StaggerItem key={index}>
              <div className="h-full rounded-2xl bg-bg-card p-6 gradient-border hover:bg-bg-card-hover transition-all duration-300 hover:-translate-y-1">
                <div className="mb-4 inline-flex rounded-xl bg-cyan-primary/10 p-3 text-cyan-primary">
                  <cap.icon size={24} />
                </div>
                <h3 className="text-base font-semibold text-white">{cap.title}</h3>
                <p className="mt-3 text-sm text-text-secondary">{cap.description}</p>
                <button className="mt-5 text-sm font-medium text-cyan-primary flex items-center gap-1">
                  Learn more <span>→</span>
                </button>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Stats */}
      <section className="relative mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="rounded-2xl bg-bg-card p-8 gradient-border">
          <StaggerContainer className="grid grid-cols-2 gap-8 md:grid-cols-4" staggerDelay={0.1}>
            {impactStats.map((stat, index) => (
              <StaggerItem key={index}>
                <div className="text-center">
                  <div className="mx-auto mb-3 inline-flex text-cyan-primary">
                    <stat.icon size={28} />
                  </div>
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="mt-1 text-sm font-medium text-white">{stat.label}</div>
                  <div className="mt-1 text-xs text-text-muted">{stat.sub}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Designed for Impact */}
      <section className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Designed for Impact</h2>
          <p className="mt-3 text-text-secondary">Every capability is built to solve real security and performance challenges.</p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid grid-cols-1 gap-0 rounded-2xl overflow-hidden bg-bg-card gradient-border lg:grid-cols-3">
            <div className="border-b border-border lg:border-b-0 lg:border-r">
              {impactTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center justify-between px-6 py-5 text-left transition-colors ${activeTab === tab.id
                    ? 'bg-cyan-primary/10 text-cyan-primary border-l-2 border-cyan-primary'
                    : 'text-text-secondary hover:bg-white/5 hover:text-white'
                    }`}
                >
                  <span className="flex items-center gap-3 text-sm font-medium">
                    <tab.icon size={18} />
                    {tab.label}
                  </span>
                  <ChevronRight size={16} className={`transition-transform ${activeTab === tab.id ? 'rotate-90' : ''}`} />
                </button>
              ))}
            </div>

            <div className="col-span-2 p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <h3 className="text-xl font-semibold text-white">{activeImpact.title}</h3>
                  <p className="mt-3 text-text-secondary">{activeImpact.description}</p>
                  <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {activeImpact.items.map((item, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-primary/10 text-cyan-primary">
                          <item.icon size={20} />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                          <p className="mt-1 text-xs text-text-secondary">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="mt-8 text-sm font-medium text-cyan-primary flex items-center gap-1">
                    View all capabilities <span>→</span>
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Industries */}
      <section className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Purpose-Built for Every Industry</h2>
          <p className="mt-3 text-text-secondary">Flexible solutions for the most demanding environments.</p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5" staggerDelay={0.08}>
          {industries.map((ind, index) => (
            <StaggerItem key={index}>
              <div className="rounded-2xl bg-bg-card p-6 gradient-border text-center hover:bg-bg-card-hover transition-all duration-300 hover:-translate-y-1">
                <div className="mx-auto mb-4 inline-flex rounded-xl bg-cyan-primary/10 p-3 text-cyan-primary">
                  <ind.icon size={24} />
                </div>
                <h3 className="text-sm font-semibold text-white">{ind.title}</h3>
                <p className="mt-2 text-xs text-text-secondary">{ind.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* CTA */}
      <section className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-3xl bg-bg-card p-10 md:p-14 border border-cyan-primary/20">
            <div className="relative z-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div>
                <h2 className="text-2xl font-bold text-white md:text-3xl">Explore all features in action</h2>
                <p className="mt-2 text-text-secondary">See how Blackgate can strengthen your security posture.</p>
              </div>
              <button className="rounded-full bg-cyan-primary px-8 py-3.5 text-sm font-semibold text-black btn-glow flex items-center gap-2 shrink-0">
                Request a Demo <span>→</span>
              </button>
            </div>
          </div>
        </AnimatedSection>
      </section>


      <Footer />
    </div>
  );
}
