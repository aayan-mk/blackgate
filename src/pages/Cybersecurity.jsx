import { motion } from 'framer-motion'
import { ArrowLeft, Shield, Lock, Server, Terminal, CheckCircle2, Zap, Database, Eye } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import ServiceQuickNav from '../components/ServiceQuickNav'
import Navbar from '@/sections/Navbar'
import Footer from '@/sections/Footer'
import { GlowCard } from '@/components/GlowCard'

function Cybersecurity() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="min-h-screen bg-transparent">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-accent-cyan/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-br from-accent-cyan/10 to-accent-cyan/5 border-2 border-accent-cyan/30 rounded-2xl flex items-center justify-center mb-8 text-accent-cyan">
              <Shield size={48} className="sm:w-16 sm:h-16" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="text-gradient-cyan">Cyber</span>security
            </h1>
            <p className="text-lg sm:text-xl text-text-secondary max-w-2xl leading-relaxed">
              Enterprise-grade security engineering that stops threats before they materialize.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-6 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceQuickNav />
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Comprehensive Security Services</h2>
            <p className="text-lg text-text-secondary">
              From architecture design to 24/7 monitoring, we protect your digital assets at every layer.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <GlowCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8"
            >
              <Lock className="w-12 h-12 text-accent-cyan mb-6" />
              <h3 className="text-xl font-semibold text-white mb-3">Zero-Trust Architecture</h3>
              <p className="text-text-secondary leading-relaxed">
                Never trust, always verify. Every user, device, and request is authenticated and authorized 
                before accessing resources. Micro-segmentation limits blast radius of potential breaches.
              </p>
            </GlowCard>

            <GlowCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8"
            >
              <Eye className="w-12 h-12 text-accent-cyan mb-6" />
              <h3 className="text-xl font-semibold text-white mb-3">Threat Detection & Monitoring</h3>
              <p className="text-text-secondary leading-relaxed">
                AI-powered 24/7 monitoring analyzes network traffic, user behavior, and system logs to 
                identify anomalies before they become incidents. Real-time alerts and automated response.
              </p>
            </GlowCard>

            <GlowCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-8"
            >
              <Terminal className="w-12 h-12 text-accent-cyan mb-6" />
              <h3 className="text-xl font-semibold text-white mb-3">Penetration Testing</h3>
              <p className="text-text-secondary leading-relaxed">
                We attack your systems before adversaries do. Comprehensive vulnerability assessments, 
                exploit validation, and actionable remediation guidance. Continuous testing, not annual audits.
              </p>
            </GlowCard>

            <GlowCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-8"
            >
              <Database className="w-12 h-12 text-accent-cyan mb-6" />
              <h3 className="text-xl font-semibold text-white mb-3">Data Encryption</h3>
              <p className="text-text-secondary leading-relaxed">
                End-to-end encryption for data at rest, in transit, and in use. You control the keys. 
                Zero-knowledge architecture ensures even we can't access your sensitive information.
              </p>
            </GlowCard>

            <GlowCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="p-8"
            >
              <CheckCircle2 className="w-12 h-12 text-accent-cyan mb-6" />
              <h3 className="text-xl font-semibold text-white mb-3">Compliance & Auditing</h3>
              <p className="text-text-secondary leading-relaxed">
                GDPR, SOC 2, HIPAA, ISO 27001—we build compliance into your infrastructure from day one. 
                Automated audit logs and reporting simplify certification processes.
              </p>
            </GlowCard>

            <GlowCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="p-8"
            >
              <Zap className="w-12 h-12 text-accent-cyan mb-6" />
              <h3 className="text-xl font-semibold text-white mb-3">Incident Response</h3>
              <p className="text-text-secondary leading-relaxed">
                When the impossible happens, we contain, analyze, and recover—fast. Documented playbooks, 
                communication protocols, and post-incident analysis to prevent recurrence.
              </p>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* Security Framework */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-accent-cyan/[0.02] border-y border-accent-cyan/10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Security Framework</h2>
            <p className="text-lg text-text-secondary">
              Defense in depth. Multiple layers of protection ensure no single point of failure.
            </p>
          </motion.div>

          <div className="flex flex-col gap-6 max-w-4xl mx-auto">
            <GlowCard className="p-8 pl-24 relative">
              <div className="absolute left-6 top-6 bg-gradient-to-br from-accent-cyan to-accent-teal text-bg-primary font-bold px-3 py-1.5 rounded-lg text-sm">Layer 1</div>
              <h3 className="text-xl font-semibold text-white mb-4">Network Security</h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                <li className="flex items-start gap-2 text-text-secondary"><CheckCircle2 size={18} className="text-accent-cyan shrink-0 mt-0.5" /> Firewall configuration and intrusion prevention</li>
                <li className="flex items-start gap-2 text-text-secondary"><CheckCircle2 size={18} className="text-accent-cyan shrink-0 mt-0.5" /> DDoS protection and rate limiting</li>
                <li className="flex items-start gap-2 text-text-secondary"><CheckCircle2 size={18} className="text-accent-cyan shrink-0 mt-0.5" /> VPN and secure remote access</li>
                <li className="flex items-start gap-2 text-text-secondary"><CheckCircle2 size={18} className="text-accent-cyan shrink-0 mt-0.5" /> Network segmentation and isolation</li>
              </ul>
            </GlowCard>

            <GlowCard className="p-8 pl-24 relative">
              <div className="absolute left-6 top-6 bg-gradient-to-br from-accent-cyan to-accent-teal text-bg-primary font-bold px-3 py-1.5 rounded-lg text-sm">Layer 2</div>
              <h3 className="text-xl font-semibold text-white mb-4">Application Security</h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                <li className="flex items-start gap-2 text-text-secondary"><CheckCircle2 size={18} className="text-accent-cyan shrink-0 mt-0.5" /> Input validation and sanitization</li>
                <li className="flex items-start gap-2 text-text-secondary"><CheckCircle2 size={18} className="text-accent-cyan shrink-0 mt-0.5" /> XSS and CSRF protection</li>
                <li className="flex items-start gap-2 text-text-secondary"><CheckCircle2 size={18} className="text-accent-cyan shrink-0 mt-0.5" /> SQL injection prevention</li>
                <li className="flex items-start gap-2 text-text-secondary"><CheckCircle2 size={18} className="text-accent-cyan shrink-0 mt-0.5" /> Secure session management</li>
              </ul>
            </GlowCard>

            <GlowCard className="p-8 pl-24 relative">
              <div className="absolute left-6 top-6 bg-gradient-to-br from-accent-cyan to-accent-teal text-bg-primary font-bold px-3 py-1.5 rounded-lg text-sm">Layer 3</div>
              <h3 className="text-xl font-semibold text-white mb-4">Data Security</h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                <li className="flex items-start gap-2 text-text-secondary"><CheckCircle2 size={18} className="text-accent-cyan shrink-0 mt-0.5" /> AES-256 encryption at rest</li>
                <li className="flex items-start gap-2 text-text-secondary"><CheckCircle2 size={18} className="text-accent-cyan shrink-0 mt-0.5" /> TLS 1.3 for data in transit</li>
                <li className="flex items-start gap-2 text-text-secondary"><CheckCircle2 size={18} className="text-accent-cyan shrink-0 mt-0.5" /> Key management and rotation</li>
                <li className="flex items-start gap-2 text-text-secondary"><CheckCircle2 size={18} className="text-accent-cyan shrink-0 mt-0.5" /> Secure backup and recovery</li>
              </ul>
            </GlowCard>

            <GlowCard className="p-8 pl-24 relative">
              <div className="absolute left-6 top-6 bg-gradient-to-br from-accent-cyan to-accent-teal text-bg-primary font-bold px-3 py-1.5 rounded-lg text-sm">Layer 4</div>
              <h3 className="text-xl font-semibold text-white mb-4">Identity & Access</h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                <li className="flex items-start gap-2 text-text-secondary"><CheckCircle2 size={18} className="text-accent-cyan shrink-0 mt-0.5" /> Multi-factor authentication (MFA)</li>
                <li className="flex items-start gap-2 text-text-secondary"><CheckCircle2 size={18} className="text-accent-cyan shrink-0 mt-0.5" /> Role-based access control (RBAC)</li>
                <li className="flex items-start gap-2 text-text-secondary"><CheckCircle2 size={18} className="text-accent-cyan shrink-0 mt-0.5" /> Single sign-on (SSO) integration</li>
                <li className="flex items-start gap-2 text-text-secondary"><CheckCircle2 size={18} className="text-accent-cyan shrink-0 mt-0.5" /> Privileged access management</li>
              </ul>
            </GlowCard>

            <GlowCard className="p-8 pl-24 relative">
              <div className="absolute left-6 top-6 bg-gradient-to-br from-accent-cyan to-accent-teal text-bg-primary font-bold px-3 py-1.5 rounded-lg text-sm">Layer 5</div>
              <h3 className="text-xl font-semibold text-white mb-4">Monitoring & Response</h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                <li className="flex items-start gap-2 text-text-secondary"><CheckCircle2 size={18} className="text-accent-cyan shrink-0 mt-0.5" /> SIEM and log aggregation</li>
                <li className="flex items-start gap-2 text-text-secondary"><CheckCircle2 size={18} className="text-accent-cyan shrink-0 mt-0.5" /> Anomaly detection with ML</li>
                <li className="flex items-start gap-2 text-text-secondary"><CheckCircle2 size={18} className="text-accent-cyan shrink-0 mt-0.5" /> Automated threat response</li>
                <li className="flex items-start gap-2 text-text-secondary"><CheckCircle2 size={18} className="text-accent-cyan shrink-0 mt-0.5" /> Incident documentation and lessons learned</li>
              </ul>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* Why Security Matters */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">The Cost of Inadequate Security</h2>
            <p className="text-lg text-text-secondary">
              One breach can destroy years of reputation-building and customer trust.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <GlowCard className="p-8 text-center">
              <div className="text-4xl font-bold bg-gradient-to-br from-accent-cyan to-accent-teal text-transparent bg-clip-text mb-2">$4.45M</div>
              <div className="text-text-secondary text-sm">Average cost of a data breach in 2023</div>
            </GlowCard>
            <GlowCard className="p-8 text-center">
              <div className="text-4xl font-bold bg-gradient-to-br from-accent-cyan to-accent-teal text-transparent bg-clip-text mb-2">277 days</div>
              <div className="text-text-secondary text-sm">Average time to identify and contain a breach</div>
            </GlowCard>
            <GlowCard className="p-8 text-center">
              <div className="text-4xl font-bold bg-gradient-to-br from-accent-cyan to-accent-teal text-transparent bg-clip-text mb-2">60%</div>
              <div className="text-text-secondary text-sm">Of small businesses close within 6 months of a cyberattack</div>
            </GlowCard>
            <GlowCard className="p-8 text-center">
              <div className="text-4xl font-bold bg-gradient-to-br from-accent-cyan to-accent-teal text-transparent bg-clip-text mb-2">83%</div>
              <div className="text-text-secondary text-sm">Of organizations experienced more than one breach</div>
            </GlowCard>
          </div>

          <div className="bg-accent-cyan/5 border border-accent-cyan/20 rounded-2xl p-10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Our Philosophy: Prevention Over Reaction</h3>
            <p className="text-text-secondary text-lg leading-relaxed mb-4">
              Responding to breaches is expensive, time-consuming, and damaging to your brand. 
              We engineer security into every layer of your infrastructure so incidents never happen in the first place.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              <strong className="text-accent-cyan">Reactive security is admitting defeat.</strong> Proactive security is how you win.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-accent-cyan/[0.02] border-y border-accent-cyan/10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center bg-black border border-border-subtle hover:border-white hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300 rounded-2xl p-10 sm:p-16 max-w-4xl mx-auto backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Don't Wait for a Breach to Take Security Seriously</h2>
            <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
              Get a free security assessment. We'll identify vulnerabilities before attackers do.
            </p>
            <Link to="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-accent-cyan text-bg-primary font-bold rounded-full hover:bg-accent-teal hover:scale-105 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              Request Security Audit
              <Shield size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Cybersecurity
