import { motion } from 'framer-motion'
import { ArrowLeft, Shield, Lock, Server, Terminal, CheckCircle2, Zap, Database, Eye } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import ServiceQuickNav from '../components/ServiceQuickNav'
import './ServicePages.css'

function Cybersecurity() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="service-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <Link to="/" className="back-button">
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="service-hero-icon">
              <Shield size={64} />
            </div>
            <h1>Cybersecurity</h1>
            <p className="service-hero-subtitle">
              Enterprise-grade security engineering that stops threats before they materialize.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="service-nav-shell">
        <div className="container">
          <ServiceQuickNav />
        </div>
      </section>

      {/* Core Services */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>Comprehensive Security Services</h2>
            <p className="section-subtitle">
              From architecture design to 24/7 monitoring, we protect your digital assets at every layer.
            </p>
          </motion.div>

          <div className="service-features-grid">
            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Lock className="feature-icon" />
              <h3>Zero-Trust Architecture</h3>
              <p>
                Never trust, always verify. Every user, device, and request is authenticated and authorized 
                before accessing resources. Micro-segmentation limits blast radius of potential breaches.
              </p>
            </motion.div>

            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Eye className="feature-icon" />
              <h3>Threat Detection & Monitoring</h3>
              <p>
                AI-powered 24/7 monitoring analyzes network traffic, user behavior, and system logs to 
                identify anomalies before they become incidents. Real-time alerts and automated response.
              </p>
            </motion.div>

            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Terminal className="feature-icon" />
              <h3>Penetration Testing</h3>
              <p>
                We attack your systems before adversaries do. Comprehensive vulnerability assessments, 
                exploit validation, and actionable remediation guidance. Continuous testing, not annual audits.
              </p>
            </motion.div>

            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Database className="feature-icon" />
              <h3>Data Encryption</h3>
              <p>
                End-to-end encryption for data at rest, in transit, and in use. You control the keys. 
                Zero-knowledge architecture ensures even we can't access your sensitive information.
              </p>
            </motion.div>

            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <CheckCircle2 className="feature-icon" />
              <h3>Compliance & Auditing</h3>
              <p>
                GDPR, SOC 2, HIPAA, ISO 27001—we build compliance into your infrastructure from day one. 
                Automated audit logs and reporting simplify certification processes.
              </p>
            </motion.div>

            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Zap className="feature-icon" />
              <h3>Incident Response</h3>
              <p>
                When the impossible happens, we contain, analyze, and recover—fast. Documented playbooks, 
                communication protocols, and post-incident analysis to prevent recurrence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Framework */}
      <section className="section dark-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>Our Security Framework</h2>
            <p className="section-subtitle">
              Defense in depth. Multiple layers of protection ensure no single point of failure.
            </p>
          </motion.div>

          <div className="security-layers">
            <div className="security-layer">
              <div className="layer-number">Layer 1</div>
              <h3>Network Security</h3>
              <ul>
                <li><CheckCircle2 size={18} /> Firewall configuration and intrusion prevention</li>
                <li><CheckCircle2 size={18} /> DDoS protection and rate limiting</li>
                <li><CheckCircle2 size={18} /> VPN and secure remote access</li>
                <li><CheckCircle2 size={18} /> Network segmentation and isolation</li>
              </ul>
            </div>

            <div className="security-layer">
              <div className="layer-number">Layer 2</div>
              <h3>Application Security</h3>
              <ul>
                <li><CheckCircle2 size={18} /> Input validation and sanitization</li>
                <li><CheckCircle2 size={18} /> XSS and CSRF protection</li>
                <li><CheckCircle2 size={18} /> SQL injection prevention</li>
                <li><CheckCircle2 size={18} /> Secure session management</li>
              </ul>
            </div>

            <div className="security-layer">
              <div className="layer-number">Layer 3</div>
              <h3>Data Security</h3>
              <ul>
                <li><CheckCircle2 size={18} /> AES-256 encryption at rest</li>
                <li><CheckCircle2 size={18} /> TLS 1.3 for data in transit</li>
                <li><CheckCircle2 size={18} /> Key management and rotation</li>
                <li><CheckCircle2 size={18} /> Secure backup and recovery</li>
              </ul>
            </div>

            <div className="security-layer">
              <div className="layer-number">Layer 4</div>
              <h3>Identity & Access</h3>
              <ul>
                <li><CheckCircle2 size={18} /> Multi-factor authentication (MFA)</li>
                <li><CheckCircle2 size={18} /> Role-based access control (RBAC)</li>
                <li><CheckCircle2 size={18} /> Single sign-on (SSO) integration</li>
                <li><CheckCircle2 size={18} /> Privileged access management</li>
              </ul>
            </div>

            <div className="security-layer">
              <div className="layer-number">Layer 5</div>
              <h3>Monitoring & Response</h3>
              <ul>
                <li><CheckCircle2 size={18} /> SIEM and log aggregation</li>
                <li><CheckCircle2 size={18} /> Anomaly detection with ML</li>
                <li><CheckCircle2 size={18} /> Automated threat response</li>
                <li><CheckCircle2 size={18} /> Incident documentation and lessons learned</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Security Matters */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>The Cost of Inadequate Security</h2>
            <p className="section-subtitle">
              One breach can destroy years of reputation-building and customer trust.
            </p>
          </motion.div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-big">$4.45M</div>
              <div className="stat-label">Average cost of a data breach in 2023</div>
            </div>
            <div className="stat-card">
              <div className="stat-big">277 days</div>
              <div className="stat-label">Average time to identify and contain a breach</div>
            </div>
            <div className="stat-card">
              <div className="stat-big">60%</div>
              <div className="stat-label">Of small businesses close within 6 months of a cyberattack</div>
            </div>
            <div className="stat-card">
              <div className="stat-big">83%</div>
              <div className="stat-label">Of organizations experienced more than one breach</div>
            </div>
          </div>

          <div className="security-philosophy">
            <h3>Our Philosophy: Prevention Over Reaction</h3>
            <p>
              Responding to breaches is expensive, time-consuming, and damaging to your brand. 
              We engineer security into every layer of your infrastructure so incidents never happen in the first place.
            </p>
            <p>
              <strong>Reactive security is admitting defeat.</strong> Proactive security is how you win.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section dark-section">
        <div className="container">
          <motion.div
            className="service-cta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Don't Wait for a Breach to Take Security Seriously</h2>
            <p>
              Get a free security assessment. We'll identify vulnerabilities before attackers do.
            </p>
            <Link to="/#contact" className="primary-button">
              Request Security Audit
              <Shield size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Cybersecurity
