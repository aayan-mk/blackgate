import { motion } from 'framer-motion';
import { Cloud, Shield, Brain, Zap, Server, Globe, Activity, Lock, Eye, FileText, AlertTriangle, Users, Code, Monitor, ClipboardCheck, TrendingUp } from 'lucide-react';
import AnimatedSection, { StaggerContainer, StaggerItem } from '../components/AnimatedSection';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';

const pillars = [
  {
    icon: Cloud,
    title: 'Cloud Command Layer',
    description: 'Unified cloud orchestration for deployments, cost controls, and operational guardrails across multi-cloud environments.',
  },
  {
    icon: Shield,
    title: 'Security Control Plane',
    description: 'Policy-driven identity, zero-trust access, threat telemetry, and compliance automation in one hardened layer.',
  },
  {
    icon: Brain,
    title: 'AI Operations Engine',
    description: 'Behavioral analysis and anomaly detection tuned for infrastructure, application, and endpoint intelligence.',
  },
  {
    icon: Zap,
    title: 'Response Automation',
    description: 'Runbooks and automated response workflows that reduce incident MTTR and improve service continuity.',
  },
];

const capabilities = [
  { icon: AlertTriangle, title: 'Threat Detection', description: 'Real-time detection with global threat intelligence.' },
  { icon: Lock, title: 'Identity Security', description: 'Zero trust access with continuous verification.' },
  { icon: FileText, title: 'Compliance & Audit', description: 'Automated compliance and audit reporting.' },
  { icon: Shield, title: 'Data Protection', description: 'Encrypt, classify and protect sensitive data.' },
  { icon: Eye, title: 'Observability', description: 'End-to-end visibility across your stack.' },
  { icon: Activity, title: 'Incident Response', description: 'Automate, orchestrate and accelerate response.' },
];

const impactMetrics = [
  { value: '99.9%', label: 'Platform Uptime', sub: '+2.41% vs last month', icon: Activity },
  { value: '10+', label: 'Build Website', sub: '+50 this year target', icon: Server },
  { value: '10+', label: 'Cybersecurity', sub: '+10 this year target', icon: Globe },
  { value: '5+', label: 'Cyber Forensics', sub: '+5 this year target', icon: Shield },
];

const teams = [
  { icon: Users, title: 'Security Teams', description: 'Detect, investigate and respond faster with unified tooling.' },
  { icon: Code, title: 'DevOps Teams', description: 'Automate deployments and enforce guardrails without slowing down.' },
  { icon: Monitor, title: 'IT Operations', description: 'Maintain resilient and available infrastructure at global scale.' },
  { icon: ClipboardCheck, title: 'Compliance Teams', description: 'Simplify audits and meet regulatory requirements with confidence.' },
  { icon: TrendingUp, title: 'Business Leaders', description: 'Gain real-time insights and drive secure business outcomes.' },
];

// const partners = ['CloudScale', 'Datacore', 'InnovaTech', 'NextLayer', 'SecureWorks', 'Vertex Labs'];
const partners = ['BlackGate'];

export default function Product() {
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
            <span className="inline-block text-xs font-semibold tracking-wider text-cyan-primary uppercase mb-4">Product</span>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              One platform.<br />
              Complete digital<br />
              <span className="gradient-text">defense and delivery.</span>
            </h1>
            <p className="mt-6 max-w-lg text-text-secondary">
              Blackgate Product unifies cloud operations, cybersecurity enforcement, and intelligent automation so teams can ship faster without compromising resilience.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="rounded-full bg-cyan-primary px-8 py-3.5 text-sm font-semibold text-black btn-glow flex items-center gap-2">
                Request a Demo <span>→</span>
              </button>
              <button className="rounded-full border border-border bg-white/5 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
                Explore Docs
              </button>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {['Unified Platform', 'Zero Trust', 'Automation First', 'Enterprise Ready'].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-text-secondary">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-primary" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl bg-gradient-to-b from-cyan-primary/10 to-transparent p-8"
          >
            <div className="aspect-square relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-48 w-48 rounded-full border border-cyan-primary/30 animate-pulse" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-64 w-64 rounded-full border border-cyan-primary/20" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-80 w-80 rounded-full border border-cyan-primary/10" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-2xl bg-cyan-primary/10 p-8 border border-cyan-primary/30 glow-cyan">
                  <Shield size={64} className="text-cyan-primary" />
                </div>
              </div>
              {[
                { icon: Cloud, top: '10%', left: '10%' },
                { icon: Lock, top: '10%', right: '10%' },
                { icon: Brain, bottom: '10%', left: '10%' },
                { icon: Zap, bottom: '10%', right: '10%' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="absolute rounded-xl bg-bg-card p-3 border border-cyan-primary/20"
                  style={{ top: item.top, left: item.left, right: item.right, bottom: item.bottom }}
                >
                  <item.icon size={24} className="text-cyan-primary" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platform Pillars */}
      <section className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <span className="text-xs font-semibold tracking-wider text-cyan-primary uppercase">Platform Pillars</span>
        </AnimatedSection>
        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
          {pillars.map((pillar, index) => (
            <StaggerItem key={index}>
              <div className="h-full rounded-2xl bg-bg-card p-6 gradient-border hover:bg-bg-card-hover transition-all duration-300 hover:-translate-y-1">
                <div className="mb-4 inline-flex rounded-xl bg-cyan-primary/10 p-3 text-cyan-primary">
                  <pillar.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
                <p className="mt-3 text-sm text-text-secondary">{pillar.description}</p>
                <button className="mt-5 text-sm font-medium text-cyan-primary flex items-center gap-1">
                  Learn more <span>→</span>
                </button>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Key Capabilities */}
      <section className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <span className="text-xs font-semibold tracking-wider text-cyan-primary uppercase">Key Capabilities</span>
        </AnimatedSection>
        <StaggerContainer className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6" staggerDelay={0.08}>
          {capabilities.map((cap, index) => (
            <StaggerItem key={index}>
              <div className="rounded-2xl bg-bg-card p-5 gradient-border text-center hover:bg-bg-card-hover transition-colors">
                <div className="mx-auto mb-3 inline-flex rounded-xl bg-cyan-primary/10 p-2.5 text-cyan-primary">
                  <cap.icon size={22} />
                </div>
                <h3 className="text-sm font-semibold text-white">{cap.title}</h3>
                <p className="mt-2 text-xs text-text-secondary">{cap.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Platform Impact */}
      <section className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <span className="text-xs font-semibold tracking-wider text-cyan-primary uppercase">Platform Impact</span>
        </AnimatedSection>
        <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
          {impactMetrics.map((metric, index) => (
            <StaggerItem key={index}>
              <div className="rounded-2xl bg-bg-card p-6 gradient-border hover:bg-bg-card-hover transition-colors">
                <div className="mb-4 inline-flex rounded-xl bg-cyan-primary/10 p-3 text-cyan-primary">
                  <metric.icon size={24} />
                </div>
                <div className="text-3xl font-bold text-white">{metric.value}</div>
                <div className="mt-1 text-sm font-medium text-white">{metric.label}</div>
                <div className="mt-1 text-xs text-cyan-primary">{metric.sub}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.3} className="mt-8 rounded-2xl bg-bg-card p-6 gradient-border">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-white">Platform Performance</span>
            <span className="flex items-center gap-2 text-xs text-text-secondary">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" /> Live
            </span>
          </div>
          <div className="flex items-end gap-1.5 h-28">
            {Array.from({ length: 60 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ height: `${Math.max(15, Math.random() * 100)}%` }}
                animate={{ 
                  height: [
                    `${Math.max(15, Math.random() * 100)}%`,
                    `${Math.max(15, Math.random() * 100)}%`,
                    `${Math.max(15, Math.random() * 100)}%`
                  ] 
                }}
                transition={{ 
                  duration: 2 + Math.random() * 2, 
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                  delay: Math.random() * 2
                }}
                className="flex-1 rounded-t bg-cyan-primary/50 hover:bg-cyan-primary transition-colors shadow-[0_0_10px_rgba(0,212,255,0.2)] hover:shadow-[0_0_15px_rgba(0,212,255,0.6)]"
              />
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Built for Every Team */}
      <section className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <span className="text-xs font-semibold tracking-wider text-cyan-primary uppercase">Built for Every Team</span>
        </AnimatedSection>
        <StaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5" staggerDelay={0.1}>
          {teams.map((team, index) => (
            <StaggerItem key={index}>
              <div className="h-full rounded-2xl bg-bg-card p-6 gradient-border hover:bg-bg-card-hover transition-all duration-300 hover:-translate-y-1">
                <div className="mb-4 inline-flex rounded-xl bg-cyan-primary/10 p-3 text-cyan-primary">
                  <team.icon size={24} />
                </div>
                <h3 className="text-base font-semibold text-white">{team.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{team.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Trusted By */}
      <section className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <AnimatedSection className="text-center mb-10">
          <span className="text-xs font-semibold tracking-wider text-cyan-primary uppercase">Trusted by Innovative Companies</span>
        </AnimatedSection>
        <StaggerContainer className="flex flex-wrap items-center justify-center gap-8 md:gap-12" staggerDelay={0.08}>
          {partners.map((partner, index) => (
            <StaggerItem key={index}>
              <div className="flex items-center gap-2 text-text-muted hover:text-cyan-primary transition-colors">
                <Shield size={20} />
                <span className="text-lg font-semibold">{partner}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>


      <Footer />
    </div>
  );
}
