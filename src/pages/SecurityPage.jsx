import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Shield, Lock, Eye, AlertTriangle, CheckCircle2, Server } from 'lucide-react'
import Navbar from '../sections/Navbar'
import Footer from '../sections/Footer'
import AnimatedSection from '../components/AnimatedSection'

function Security() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-bg-primary cyber-grid pt-24">
      <Navbar />
      
      <div className="mx-auto max-w-4xl px-6 lg:px-8 py-12 mb-20">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-cyan-primary/10 text-cyan-primary mb-6 glow-cyan border border-cyan-primary/20">
              <Lock size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Security Practices</h1>
            <p className="text-cyan-primary font-semibold mb-6">
              Last Updated: January 15, 2026
            </p>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Security isn't a feature at Blackgate—it's the foundation. This page outlines our security 
              practices, infrastructure, and commitment to protecting your data.
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-12">
          {/* 1. Our Security Philosophy */}
          <AnimatedSection delay={0.1}>
            <div className="rounded-3xl bg-bg-card p-8 md:p-10 gradient-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-cyan-primary">
                  <Shield size={24} />
                </div>
                <h2 className="text-2xl font-bold text-white">1. Our Security Philosophy</h2>
              </div>
              
              <p className="text-text-secondary leading-relaxed mb-8">
                At Blackgate, we believe security is not negotiable. We design systems with security-first 
                principles, implement defense-in-depth strategies, and maintain constant vigilance against 
                evolving threats.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="text-white font-semibold mb-2">Zero Trust Architecture</h4>
                  <p className="text-sm text-text-muted">Never trust, always verify. Every access request is authenticated and authorized.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="text-white font-semibold mb-2">Least Privilege Access</h4>
                  <p className="text-sm text-text-muted">Users and systems have only the minimum access necessary to perform their functions.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="text-white font-semibold mb-2">Defense in Depth</h4>
                  <p className="text-sm text-text-muted">Multiple layers of security controls to protect against diverse threats.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="text-white font-semibold mb-2">Continuous Monitoring</h4>
                  <p className="text-sm text-text-muted">Surveillance of systems, networks, and data for suspicious activity.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* 2. Data Encryption */}
          <AnimatedSection delay={0.2}>
            <div className="rounded-3xl bg-bg-card p-8 md:p-10 gradient-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-cyan-primary">
                  <Lock size={24} />
                </div>
                <h2 className="text-2xl font-bold text-white">2. Data Encryption</h2>
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-4">2.1 Data in Transit</h3>
              <ul className="space-y-3 mb-8 text-text-secondary">
                <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-cyan-primary shrink-0 mt-1" /><span><strong className="text-white">TLS 1.3:</strong> All data transmitted between your browser and our servers is encrypted using the latest TLS protocol.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-cyan-primary shrink-0 mt-1" /><span><strong className="text-white">HTTPS Everywhere:</strong> Our website and all services enforce HTTPS-only connections.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-cyan-primary shrink-0 mt-1" /><span><strong className="text-white">Certificate Pinning:</strong> Protection against man-in-the-middle attacks through certificate validation.</span></li>
              </ul>

              <h3 className="text-lg font-semibold text-white mb-4">2.2 Data at Rest</h3>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-cyan-primary shrink-0 mt-1" /><span><strong className="text-white">AES-256 Encryption:</strong> All stored data is encrypted using industry-standard AES-256 encryption.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-cyan-primary shrink-0 mt-1" /><span><strong className="text-white">Database Encryption:</strong> Sensitive fields in databases are encrypted at the column level.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-cyan-primary shrink-0 mt-1" /><span><strong className="text-white">Encrypted Backups:</strong> All backups are encrypted before storage.</span></li>
              </ul>
            </div>
          </AnimatedSection>

          {/* 3. Access Control */}
          <AnimatedSection delay={0.3}>
            <div className="rounded-3xl bg-bg-card p-8 md:p-10 gradient-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-cyan-primary">
                  <Shield size={24} />
                </div>
                <h2 className="text-2xl font-bold text-white">3. Access Control</h2>
              </div>
              
              <p className="text-text-secondary leading-relaxed mb-6">
                We implement strict access controls to ensure your data is only accessible to authorized personnel:
              </p>
              
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-cyan-primary shrink-0 mt-1" /><span><strong className="text-white">MFA Required:</strong> Multi-factor authentication is mandatory for all Blackgate team members.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-cyan-primary shrink-0 mt-1" /><span><strong className="text-white">Role-Based Access:</strong> Access to systems and data is granted based on job responsibilities.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-cyan-primary shrink-0 mt-1" /><span><strong className="text-white">Regular Audits:</strong> Access logs are reviewed regularly for anomalies.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 size={18} className="text-cyan-primary shrink-0 mt-1" /><span><strong className="text-white">Prompt Revocation:</strong> Access is immediately revoked upon team member departure.</span></li>
              </ul>
            </div>
          </AnimatedSection>

          {/* 4. Report a Security Issue */}
          <AnimatedSection delay={0.4}>
            <div className="rounded-3xl bg-bg-card p-8 md:p-10 gradient-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-cyan-primary">
                  <AlertTriangle size={24} />
                </div>
                <h2 className="text-2xl font-bold text-white">4. Report a Security Issue</h2>
              </div>
              
              <p className="text-text-secondary leading-relaxed mb-6">
                We take security reports seriously. If you discover a vulnerability:
              </p>
              
              <div className="grid gap-4 mb-8">
                <div className="p-4 rounded-xl bg-bg-primary/50 border border-white/5">
                  <span className="text-white font-semibold">Email:</span>
                  <span className="text-cyan-primary ml-2">info@blackgateitsolutions.co.in</span>
                </div>
                <div className="p-4 rounded-xl bg-bg-primary/50 border border-white/5">
                  <span className="text-white font-semibold">PGP Key:</span>
                  <span className="text-text-secondary ml-2">Available upon request for encrypted communication</span>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-accent-cyan/20 bg-accent-cyan/10">
                <p className="text-sm text-cyan-primary leading-relaxed">
                  <strong>Responsible Disclosure:</strong> We appreciate security researchers who report 
                  vulnerabilities responsibly. We commit to acknowledging reports within 48 hours and providing 
                  updates on remediation progress.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default Security
