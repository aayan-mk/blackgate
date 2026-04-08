import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Shield, Lock, Eye, AlertTriangle, CheckCircle2, Server } from 'lucide-react'
import './LegalPages.css'

function Security() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="legal-page">
      <section className="legal-hero security-hero">
        <div className="container">
          <Link to="/" className="back-button">
            ← Back to Home
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="legal-icon">
              <Lock size={48} />
            </div>
            <h1>Security Practices</h1>
            <p className="legal-subtitle">
              Last Updated: January 15, 2026
            </p>
            <p className="legal-intro">
              Security isn't a feature at Blackgate—it's the foundation. This page outlines our security 
              practices, infrastructure, and commitment to protecting your data.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="legal-content">
        <div className="container">
          <motion.div
            className="legal-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-icon">
              <Shield size={24} />
            </div>
            <h2>1. Our Security Philosophy</h2>
            
            <p>
              At Blackgate, we believe security is not negotiable. We design systems with security-first 
              principles, implement defense-in-depth strategies, and maintain constant vigilance against 
              evolving threats.
            </p>

            <div className="security-principles">
              <div className="principle-card">
                <h4>Zero Trust Architecture</h4>
                <p>Never trust, always verify. Every access request is authenticated and authorized.</p>
              </div>
              <div className="principle-card">
                <h4>Least Privilege Access</h4>
                <p>Users and systems have only the minimum access necessary to perform their functions.</p>
              </div>
              <div className="principle-card">
                <h4>Defense in Depth</h4>
                <p>Multiple layers of security controls to protect against diverse threats.</p>
              </div>
              <div className="principle-card">
                <h4>Continuous Monitoring</h4>
                <p>24/7 surveillance of systems, networks, and data for suspicious activity.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="legal-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="section-icon">
              <Lock size={24} />
            </div>
            <h2>2. Data Encryption</h2>
            
            <h3>2.1 Data in Transit</h3>
            <ul>
              <li><strong>TLS 1.3:</strong> All data transmitted between your browser and our servers is encrypted using the latest TLS protocol.</li>
              <li><strong>HTTPS Everywhere:</strong> Our website and all services enforce HTTPS-only connections.</li>
              <li><strong>Certificate Pinning:</strong> Protection against man-in-the-middle attacks through certificate validation.</li>
            </ul>

            <h3>2.2 Data at Rest</h3>
            <ul>
              <li><strong>AES-256 Encryption:</strong> All stored data is encrypted using industry-standard AES-256 encryption.</li>
              <li><strong>Database Encryption:</strong> Sensitive fields in databases are encrypted at the column level.</li>
              <li><strong>Encrypted Backups:</strong> All backups are encrypted before storage.</li>
              <li><strong>Secure Key Management:</strong> Encryption keys are stored separately from data using Hardware Security Modules (HSMs).</li>
            </ul>
          </motion.div>

          <motion.div
            className="legal-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="section-icon">
              <Eye size={24} />
            </div>
            <h2>3. Access Control</h2>
            
            <h3>3.1 Authentication</h3>
            <ul>
              <li><strong>Multi-Factor Authentication (MFA):</strong> Required for all team members accessing sensitive systems.</li>
              <li><strong>Strong Password Policies:</strong> Minimum 12 characters with complexity requirements.</li>
              <li><strong>Password Managers:</strong> Mandatory use of enterprise password management tools.</li>
              <li><strong>Session Management:</strong> Automatic logout after inactivity, secure session tokens.</li>
            </ul>

            <h3>3.2 Authorization</h3>
            <ul>
              <li><strong>Role-Based Access Control (RBAC):</strong> Permissions assigned based on job function.</li>
              <li><strong>Just-In-Time Access:</strong> Temporary elevated permissions granted only when needed.</li>
              <li><strong>Regular Access Reviews:</strong> Quarterly audits to ensure appropriate access levels.</li>
              <li><strong>Immediate Revocation:</strong> Access removed immediately upon employee departure.</li>
            </ul>
          </motion.div>

          <motion.div
            className="legal-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="section-icon">
              <Server size={24} />
            </div>
            <h2>4. Infrastructure Security</h2>
            
            <h3>4.1 Hosting & Cloud Security</h3>
            <ul>
              <li><strong>Tier-1 Providers:</strong> We host on SOC 2, ISO 27001 certified cloud platforms (AWS, Azure, GCP).</li>
              <li><strong>Private Networks:</strong> Isolated Virtual Private Clouds (VPCs) with strict firewall rules.</li>
              <li><strong>DDoS Protection:</strong> Advanced distributed denial-of-service mitigation.</li>
              <li><strong>Geographic Redundancy:</strong> Multi-region deployment for high availability.</li>
            </ul>

            <h3>4.2 Application Security</h3>
            <ul>
              <li><strong>Secure Development Lifecycle:</strong> Security integrated into every phase of development.</li>
              <li><strong>Code Reviews:</strong> Mandatory peer review for all code changes.</li>
              <li><strong>Static Analysis:</strong> Automated scanning for vulnerabilities in source code.</li>
              <li><strong>Dependency Scanning:</strong> Continuous monitoring of third-party libraries for known vulnerabilities.</li>
              <li><strong>Penetration Testing:</strong> Regular third-party security assessments.</li>
            </ul>

            <h3>4.3 Network Security</h3>
            <ul>
              <li><strong>Firewalls:</strong> Next-generation firewalls with deep packet inspection.</li>
              <li><strong>Intrusion Detection:</strong> Real-time monitoring for malicious network activity.</li>
              <li><strong>Network Segmentation:</strong> Isolated environments for development, staging, and production.</li>
              <li><strong>VPN Access:</strong> Encrypted tunnels for remote team access.</li>
            </ul>
          </motion.div>

          <motion.div
            className="legal-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="section-icon">
              <AlertTriangle size={24} />
            </div>
            <h2>5. Incident Response</h2>
            
            <p>
              We maintain a comprehensive incident response plan to detect, contain, and remediate security incidents.
            </p>

            <h3>5.1 Detection & Monitoring</h3>
            <ul>
              <li><strong>24/7 Monitoring:</strong> Continuous surveillance of systems and networks.</li>
              <li><strong>Security Information & Event Management (SIEM):</strong> Centralized logging and analysis.</li>
              <li><strong>Automated Alerts:</strong> Real-time notifications for suspicious activity.</li>
              <li><strong>Threat Intelligence:</strong> Integration with global threat databases.</li>
            </ul>

            <h3>5.2 Response Protocol</h3>
            <ol>
              <li><strong>Identification:</strong> Confirm and classify the incident severity.</li>
              <li><strong>Containment:</strong> Isolate affected systems to prevent spread.</li>
              <li><strong>Eradication:</strong> Remove the threat and close vulnerabilities.</li>
              <li><strong>Recovery:</strong> Restore systems to normal operation.</li>
              <li><strong>Post-Incident Review:</strong> Analyze root cause and improve defenses.</li>
            </ol>

            <h3>5.3 Communication</h3>
            <p>
              In the event of a data breach affecting client data, we will:
            </p>
            <ul>
              <li>Notify affected clients within 72 hours of discovery</li>
              <li>Provide details about the incident, affected data, and remediation steps</li>
              <li>Offer support and guidance to mitigate potential harm</li>
              <li>Report to relevant authorities as required by law</li>
            </ul>
          </motion.div>

          <motion.div
            className="legal-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="section-icon">
              <CheckCircle2 size={24} />
            </div>
            <h2>6. Compliance & Certifications</h2>
            
            <p>
              We align our practices with industry standards and regulatory requirements:
            </p>
            
            <ul>
              <li><strong>OWASP Top 10:</strong> Protection against the most critical web application security risks.</li>
              <li><strong>GDPR Compliance:</strong> Adherence to EU data protection regulations.</li>
              <li><strong>ISO 27001 Alignment:</strong> Information security management best practices.</li>
              <li><strong>SOC 2 Principles:</strong> Security, availability, confidentiality controls.</li>
              <li><strong>PCI DSS Awareness:</strong> Payment card data security standards (for relevant projects).</li>
            </ul>
          </motion.div>

          <motion.div
            className="legal-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2>7. Employee Security</h2>
            
            <h3>7.1 Training & Awareness</h3>
            <ul>
              <li><strong>Security Training:</strong> Mandatory onboarding and annual security awareness training.</li>
              <li><strong>Phishing Simulations:</strong> Regular testing to identify and educate vulnerable employees.</li>
              <li><strong>Secure Coding Practices:</strong> Ongoing education on OWASP, CWE, and secure development.</li>
            </ul>

            <h3>7.2 Background Checks</h3>
            <p>
              All employees undergo background verification before accessing sensitive systems or client data.
            </p>

            <h3>7.3 Confidentiality Agreements</h3>
            <p>
              Every team member signs non-disclosure and confidentiality agreements.
            </p>
          </motion.div>

          <motion.div
            className="legal-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h2>8. Data Backup & Recovery</h2>
            
            <ul>
              <li><strong>Automated Backups:</strong> Daily encrypted backups of all critical data.</li>
              <li><strong>Geographic Distribution:</strong> Backups stored in multiple geographic regions.</li>
              <li><strong>Regular Testing:</strong> Quarterly disaster recovery drills to ensure restore capabilities.</li>
              <li><strong>Retention Policies:</strong> Backups retained according to regulatory requirements and client contracts.</li>
              <li><strong>Immutable Backups:</strong> Protection against ransomware with write-once-read-many (WORM) storage.</li>
            </ul>
          </motion.div>

          <motion.div
            className="legal-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2>9. Third-Party Security</h2>
            
            <p>
              We carefully vet all third-party vendors and service providers:
            </p>
            
            <ul>
              <li><strong>Security Assessments:</strong> Evaluation of vendor security practices before engagement.</li>
              <li><strong>Contractual Protections:</strong> Data processing agreements with security and confidentiality clauses.</li>
              <li><strong>Limited Access:</strong> Vendors granted only the minimum access necessary.</li>
              <li><strong>Regular Reviews:</strong> Periodic re-assessment of vendor security posture.</li>
            </ul>
          </motion.div>

          <motion.div
            className="legal-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <h2>10. Physical Security</h2>
            
            <p>
              While most of our infrastructure is cloud-based, we maintain physical security controls:
            </p>
            
            <ul>
              <li><strong>Secure Offices:</strong> Access-controlled workspaces with surveillance.</li>
              <li><strong>Clean Desk Policy:</strong> No sensitive information left unattended.</li>
              <li><strong>Secure Disposal:</strong> Shredding of physical documents, secure wiping of devices.</li>
              <li><strong>Device Management:</strong> Encrypted laptops with remote wipe capabilities.</li>
            </ul>
          </motion.div>

          <motion.div
            className="legal-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <h2>11. Continuous Improvement</h2>
            
            <p>
              Security is not a one-time effort—it's an ongoing commitment:
            </p>
            
            <ul>
              <li><strong>Regular Audits:</strong> Quarterly internal security assessments.</li>
              <li><strong>Vulnerability Management:</strong> Continuous scanning and patching of systems.</li>
              <li><strong>Threat Modeling:</strong> Periodic review of potential attack vectors.</li>
              <li><strong>Lessons Learned:</strong> Post-incident reviews to improve defenses.</li>
              <li><strong>Industry Engagement:</strong> Active participation in security communities and conferences.</li>
            </ul>
          </motion.div>

          <motion.div
            className="legal-section legal-contact"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <h2>12. Report a Security Issue</h2>
            
            <p>
              We take security reports seriously. If you discover a vulnerability:
            </p>
            
            <div className="contact-details">
              <p><strong>Email:</strong> security@blackgate.dev</p>
              <p><strong>PGP Key:</strong> Available upon request for encrypted communication</p>
            </div>

            <div className="legal-note">
              <strong>Responsible Disclosure:</strong> We appreciate security researchers who report 
              vulnerabilities responsibly. We commit to acknowledging reports within 48 hours and providing 
              updates on remediation progress.
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Security
