import { motion } from 'framer-motion'
import { ArrowLeft, Terminal, Lock, Database, Shield, CheckCircle2, Zap, Search, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './ServicePages.css'

function CyberForensics() {
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
              <Terminal size={64} />
            </div>
            <h1>Cyber Forensics</h1>
            <p className="service-hero-subtitle">
              When incidents happen, evidence speaks. We investigate, preserve, and prevent recurrence.
            </p>
          </motion.div>
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
            <h2>Forensic Investigation Services</h2>
            <p className="section-subtitle">
              Every log tells a story. We uncover the truth behind security incidents.
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
              <Terminal className="feature-icon" />
              <h3>Digital Evidence Collection</h3>
              <p>
                Forensically sound acquisition of system logs, memory dumps, disk images, and network traffic. 
                Chain of custody documentation that stands up in court. Preservation of volatile data before it's lost.
              </p>
            </motion.div>

            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Search className="feature-icon" />
              <h3>Malware Analysis</h3>
              <p>
                Reverse engineering malicious code to understand attack vectors, capabilities, and indicators 
                of compromise. Static and dynamic analysis in isolated sandbox environments.
              </p>
            </motion.div>

            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Database className="feature-icon" />
              <h3>Data Breach Investigation</h3>
              <p>
                Identify what data was accessed, when, by whom, and whether it left your network. 
                Determine scope of exposure and regulatory notification requirements.
              </p>
            </motion.div>

            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Clock className="feature-icon" />
              <h3>Timeline Reconstruction</h3>
              <p>
                Build precise attack timelines from disparate data sources—system logs, registry entries, 
                file metadata, and network captures. Understand the full kill chain.
              </p>
            </motion.div>

            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Shield className="feature-icon" />
              <h3>Post-Incident Hardening</h3>
              <p>
                Close vulnerabilities exploited during the attack. Patch gaps in defenses. 
                Implement controls to ensure the same attack vector never works twice.
              </p>
            </motion.div>

            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <CheckCircle2 className="feature-icon" />
              <h3>Legal & Compliance Support</h3>
              <p>
                Court-ready forensic reports with detailed findings and chain of custody documentation. 
                Expert testimony and regulatory disclosure assistance when needed.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Forensic Process */}
      <section className="section dark-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>Our Forensic Investigation Process</h2>
            <p className="section-subtitle">
              Methodical, documented, and designed to uncover the complete story.
            </p>
          </motion.div>

          <div className="process-timeline">
            <div className="process-step">
              <div className="process-number">01</div>
              <h3>Incident Triage & Containment</h3>
              <p>
                Immediate response to contain the threat and prevent further damage. Isolate affected 
                systems while preserving evidence. Document initial observations and establish secure communication channels.
              </p>
            </div>

            <div className="process-step">
              <div className="process-number">02</div>
              <h3>Evidence Collection & Preservation</h3>
              <p>
                Forensically sound acquisition of volatile and non-volatile data. Memory dumps, disk images, 
                network traffic captures, and log files. Chain of custody documentation for every piece of evidence.
              </p>
            </div>

            <div className="process-step">
              <div className="process-number">03</div>
              <h3>Analysis & Investigation</h3>
              <p>
                Deep dive into collected evidence. Timeline reconstruction, malware reverse engineering, 
                log correlation, and artifact analysis. Identify attack vectors, lateral movement, and data exfiltration.
              </p>
            </div>

            <div className="process-step">
              <div className="process-number">04</div>
              <h3>Root Cause Identification</h3>
              <p>
                Determine how the attacker gained initial access, what vulnerabilities were exploited, 
                and why existing defenses failed. This is where prevention begins.
              </p>
            </div>

            <div className="process-step">
              <div className="process-number">05</div>
              <h3>Remediation & Hardening</h3>
              <p>
                Actionable recommendations to close vulnerabilities, patch systems, and strengthen defenses. 
                Implementation support to ensure fixes are applied correctly.
              </p>
            </div>

            <div className="process-step">
              <div className="process-number">06</div>
              <h3>Reporting & Documentation</h3>
              <p>
                Comprehensive forensic report with findings, evidence, timeline, and recommendations. 
                Executive summary for leadership and technical details for IT teams. Legal-grade documentation if needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Forensics Matters */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>Why Professional Forensics Matters</h2>
            <p className="section-subtitle">
              Cleaning up after an attack without understanding what happened guarantees it will happen again.
            </p>
          </motion.div>

          <div className="forensics-importance">
            <div className="importance-item">
              <Zap className="importance-icon" />
              <div>
                <h3>Prevent Recurrence</h3>
                <p>
                  Without understanding how an attack succeeded, you're just waiting for it to happen again. 
                  Root cause analysis identifies exactly what failed and how to fix it permanently.
                </p>
              </div>
            </div>

            <div className="importance-item">
              <Lock className="importance-icon" />
              <div>
                <h3>Legal Protection</h3>
                <p>
                  Properly documented evidence and chain of custody are essential for legal action against 
                  attackers or insurance claims. DIY investigations often contaminate evidence.
                </p>
              </div>
            </div>

            <div className="importance-item">
              <CheckCircle2 className="importance-icon" />
              <div>
                <h3>Regulatory Compliance</h3>
                <p>
                  Many regulations require forensic investigation and reporting after data breaches. 
                  Professional documentation demonstrates due diligence to regulators and customers.
                </p>
              </div>
            </div>

            <div className="importance-item">
              <Shield className="importance-icon" />
              <div>
                <h3>Scope Determination</h3>
                <p>
                  Was it one server or your entire network? One attacker or a coordinated campaign? 
                  Understanding full scope prevents surprises and ensures complete remediation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Response */}
      <section className="section dark-section">
        <div className="container">
          <motion.div
            className="emergency-response"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="emergency-badge">
              <Zap size={20} />
              <span>24/7 Emergency Response</span>
            </div>
            <h2>Active Incident? Every Minute Counts</h2>
            <p>
              Compromised systems continue to leak data and lose evidence every second they remain active. 
              Contact us immediately for emergency forensic response.
            </p>
            <div className="emergency-stats">
              <div className="emergency-stat">
                <div className="stat-value">&lt;15min</div>
                <div className="stat-label">Initial Response Time</div>
              </div>
              <div className="emergency-stat">
                <div className="stat-value">24/7</div>
                <div className="stat-label">Availability</div>
              </div>
              <div className="emergency-stat">
                <div className="stat-value">100%</div>
                <div className="stat-label">Evidence Preservation</div>
              </div>
            </div>
            <Link to="/#contact" className="primary-button urgent">
              Emergency Forensics Response
              <Terminal size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <motion.div
            className="service-cta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Proactive Forensic Readiness</h2>
            <p>
              Don't wait for an incident to think about forensics. We help you prepare logging, 
              monitoring, and evidence collection infrastructure before you need it.
            </p>
            <Link to="/#contact" className="primary-button">
              Discuss Forensic Readiness
              <Shield size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CyberForensics
