import { motion } from 'framer-motion'
import { ArrowLeft, Terminal, Lock, Database, Shield, CheckCircle2, Zap, Search, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import ServiceQuickNav from '../components/ServiceQuickNav'
import Navbar from '@/sections/Navbar'
import Footer from '@/sections/Footer'
import { GlowCard } from '@/components/GlowCard'

function CyberForensics() {
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
              <Terminal size={48} className="sm:w-16 sm:h-16" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Cyber <span className="text-gradient-cyan">Forensics</span>
            </h1>
            <p className="text-lg sm:text-xl text-text-secondary max-w-2xl leading-relaxed">
              When incidents happen, evidence speaks. We investigate, preserve, and prevent recurrence.
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Forensic Investigation Services</h2>
            <p className="text-lg text-text-secondary">
              Every log tells a story. We uncover the truth behind security incidents.
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
              <Terminal className="w-12 h-12 text-accent-cyan mb-6" />
              <h3 className="text-xl font-semibold text-white mb-3">Digital Evidence Collection</h3>
              <p className="text-text-secondary leading-relaxed">
                Forensically sound acquisition of system logs, memory dumps, disk images, and network traffic. 
                Chain of custody documentation that stands up in court. Preservation of volatile data before it's lost.
              </p>
            </GlowCard>

            <GlowCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8"
            >
              <Search className="w-12 h-12 text-accent-cyan mb-6" />
              <h3 className="text-xl font-semibold text-white mb-3">Malware Analysis</h3>
              <p className="text-text-secondary leading-relaxed">
                Reverse engineering malicious code to understand attack vectors, capabilities, and indicators 
                of compromise. Static and dynamic analysis in isolated sandbox environments.
              </p>
            </GlowCard>

            <GlowCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-8"
            >
              <Database className="w-12 h-12 text-accent-cyan mb-6" />
              <h3 className="text-xl font-semibold text-white mb-3">Data Breach Investigation</h3>
              <p className="text-text-secondary leading-relaxed">
                Identify what data was accessed, when, by whom, and whether it left your network. 
                Determine scope of exposure and regulatory notification requirements.
              </p>
            </GlowCard>

            <GlowCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-8"
            >
              <Clock className="w-12 h-12 text-accent-cyan mb-6" />
              <h3 className="text-xl font-semibold text-white mb-3">Timeline Reconstruction</h3>
              <p className="text-text-secondary leading-relaxed">
                Build precise attack timelines from disparate data sources—system logs, registry entries, 
                file metadata, and network captures. Understand the full kill chain.
              </p>
            </GlowCard>

            <GlowCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="p-8"
            >
              <Shield className="w-12 h-12 text-accent-cyan mb-6" />
              <h3 className="text-xl font-semibold text-white mb-3">Post-Incident Hardening</h3>
              <p className="text-text-secondary leading-relaxed">
                Close vulnerabilities exploited during the attack. Patch gaps in defenses. 
                Implement controls to ensure the same attack vector never works twice.
              </p>
            </GlowCard>

            <GlowCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="p-8"
            >
              <CheckCircle2 className="w-12 h-12 text-accent-cyan mb-6" />
              <h3 className="text-xl font-semibold text-white mb-3">Legal & Compliance Support</h3>
              <p className="text-text-secondary leading-relaxed">
                Court-ready forensic reports with detailed findings and chain of custody documentation. 
                Expert testimony and regulatory disclosure assistance when needed.
              </p>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* Forensic Process */}
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Forensic Investigation Process</h2>
            <p className="text-lg text-text-secondary">
              Methodical, documented, and designed to uncover the complete story.
            </p>
          </motion.div>

          <div className="flex flex-col gap-6 max-w-3xl mx-auto">
            <GlowCard className="p-8 pl-16 relative">
              <div className="absolute left-6 top-6 text-2xl font-bold text-accent-cyan/30">01</div>
              <h3 className="text-xl font-semibold text-white mb-3">Incident Triage & Containment</h3>
              <p className="text-text-secondary leading-relaxed">
                Immediate response to contain the threat and prevent further damage. Isolate affected 
                systems while preserving evidence. Document initial observations and establish secure communication channels.
              </p>
            </GlowCard>

            <GlowCard className="p-8 pl-16 relative">
              <div className="absolute left-6 top-6 text-2xl font-bold text-accent-cyan/30">02</div>
              <h3 className="text-xl font-semibold text-white mb-3">Evidence Collection & Preservation</h3>
              <p className="text-text-secondary leading-relaxed">
                Forensically sound acquisition of volatile and non-volatile data. Memory dumps, disk images, 
                network traffic captures, and log files. Chain of custody documentation for every piece of evidence.
              </p>
            </GlowCard>

            <GlowCard className="p-8 pl-16 relative">
              <div className="absolute left-6 top-6 text-2xl font-bold text-accent-cyan/30">03</div>
              <h3 className="text-xl font-semibold text-white mb-3">Analysis & Investigation</h3>
              <p className="text-text-secondary leading-relaxed">
                Deep dive into collected evidence. Timeline reconstruction, malware reverse engineering, 
                log correlation, and artifact analysis. Identify attack vectors, lateral movement, and data exfiltration.
              </p>
            </GlowCard>

            <GlowCard className="p-8 pl-16 relative">
              <div className="absolute left-6 top-6 text-2xl font-bold text-accent-cyan/30">04</div>
              <h3 className="text-xl font-semibold text-white mb-3">Root Cause Identification</h3>
              <p className="text-text-secondary leading-relaxed">
                Determine how the attacker gained initial access, what vulnerabilities were exploited, 
                and why existing defenses failed. This is where prevention begins.
              </p>
            </GlowCard>

            <GlowCard className="p-8 pl-16 relative">
              <div className="absolute left-6 top-6 text-2xl font-bold text-accent-cyan/30">05</div>
              <h3 className="text-xl font-semibold text-white mb-3">Remediation & Hardening</h3>
              <p className="text-text-secondary leading-relaxed">
                Actionable recommendations to close vulnerabilities, patch systems, and strengthen defenses. 
                Implementation support to ensure fixes are applied correctly.
              </p>
            </GlowCard>

            <GlowCard className="p-8 pl-16 relative">
              <div className="absolute left-6 top-6 text-2xl font-bold text-accent-cyan/30">06</div>
              <h3 className="text-xl font-semibold text-white mb-3">Reporting & Documentation</h3>
              <p className="text-text-secondary leading-relaxed">
                Comprehensive forensic report with findings, evidence, timeline, and recommendations. 
                Executive summary for leadership and technical details for IT teams. Legal-grade documentation if needed.
              </p>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* Why Forensics Matters */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Why Professional Forensics Matters</h2>
            <p className="text-lg text-text-secondary">
              Cleaning up after an attack without understanding what happened guarantees it will happen again.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <GlowCard className="p-8 flex gap-6">
              <Zap className="w-12 h-12 text-accent-cyan shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Prevent Recurrence</h3>
                <p className="text-text-secondary leading-relaxed">
                  Without understanding how an attack succeeded, you're just waiting for it to happen again. 
                  Root cause analysis identifies exactly what failed and how to fix it permanently.
                </p>
              </div>
            </GlowCard>

            <GlowCard className="p-8 flex gap-6">
              <Lock className="w-12 h-12 text-accent-cyan shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Legal Protection</h3>
                <p className="text-text-secondary leading-relaxed">
                  Properly documented evidence and chain of custody are essential for legal action against 
                  attackers or insurance claims. DIY investigations often contaminate evidence.
                </p>
              </div>
            </GlowCard>

            <GlowCard className="p-8 flex gap-6">
              <CheckCircle2 className="w-12 h-12 text-accent-cyan shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Regulatory Compliance</h3>
                <p className="text-text-secondary leading-relaxed">
                  Many regulations require forensic investigation and reporting after data breaches. 
                  Professional documentation demonstrates due diligence to regulators and customers.
                </p>
              </div>
            </GlowCard>

            <GlowCard className="p-8 flex gap-6">
              <Shield className="w-12 h-12 text-accent-cyan shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Scope Determination</h3>
                <p className="text-text-secondary leading-relaxed">
                  Was it one server or your entire network? One attacker or a coordinated campaign? 
                  Understanding full scope prevents surprises and ensures complete remediation.
                </p>
              </div>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* Emergency Response */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-red-900/20 to-red-600/10 border-y border-red-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/50 text-red-400 font-bold mb-8 animate-pulse">
              <Zap size={20} />
              <span>24/7 Emergency Response</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Active Incident? Every Minute Counts</h2>
            <p className="text-xl text-text-secondary mb-12 max-w-3xl mx-auto">
              Compromised systems continue to leak data and lose evidence every second they remain active. 
              Contact us immediately for emergency forensic response.
            </p>
            
            <div className="flex justify-center gap-8 md:gap-16 mb-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2">&lt;15min</div>
                <div className="text-text-secondary">Initial Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2">24/7</div>
                <div className="text-text-secondary">Availability</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2">100%</div>
                <div className="text-text-secondary">Evidence Preservation</div>
              </div>
            </div>
            
            <Link to="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-full hover:scale-105 transition-all shadow-[0_0_20px_rgba(239,68,68,0.4)] animate-pulse">
              Emergency Forensics Response
              <Terminal size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center bg-bg-card/50 border border-accent-cyan/20 rounded-2xl p-10 sm:p-16 max-w-4xl mx-auto backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Proactive Forensic Readiness</h2>
            <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
              Don't wait for an incident to think about forensics. We help you prepare logging, 
              monitoring, and evidence collection infrastructure before you need it.
            </p>
            <Link to="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-accent-cyan text-bg-primary font-bold rounded-full hover:bg-accent-teal hover:scale-105 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              Discuss Forensic Readiness
              <Shield size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CyberForensics
