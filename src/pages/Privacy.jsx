import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Shield, Lock, Eye, Database, Users, FileText } from 'lucide-react'
import './LegalPages.css'

function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="legal-page">
      <section className="legal-hero">
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
              <Shield size={48} />
            </div>
            <h1>Privacy Policy</h1>
            <p className="legal-subtitle">
              Last Updated: January 15, 2026
            </p>
            <p className="legal-intro">
              At Blackgate, privacy isn't an afterthought—it's foundational. This policy explains how we 
              collect, use, protect, and respect your personal information.
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
              <Database size={24} />
            </div>
            <h2>1. Information We Collect</h2>
            
            <h3>1.1 Information You Provide</h3>
            <ul>
              <li><strong>Contact Information:</strong> Name, email address, phone number, company name when you contact us or request services.</li>
              <li><strong>Project Details:</strong> Information about your business needs, technical requirements, and project specifications.</li>
              <li><strong>Communication Records:</strong> Correspondence via email, phone, or other communication channels.</li>
              <li><strong>Payment Information:</strong> Billing details processed securely through third-party payment processors (we do not store credit card information).</li>
            </ul>

            <h3>1.2 Automatically Collected Information</h3>
            <ul>
              <li><strong>Technical Data:</strong> IP address, browser type, device information, operating system.</li>
              <li><strong>Usage Data:</strong> Pages visited, time spent on site, navigation patterns (via analytics tools).</li>
              <li><strong>Cookies:</strong> Small data files stored on your device to improve user experience and track analytics.</li>
            </ul>
          </motion.div>

          <motion.div
            className="legal-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="section-icon">
              <Eye size={24} />
            </div>
            <h2>2. How We Use Your Information</h2>
            
            <ul>
              <li><strong>Service Delivery:</strong> To provide, maintain, and improve our web development, cybersecurity, AI, and forensics services.</li>
              <li><strong>Communication:</strong> To respond to inquiries, provide project updates, and send important notifications.</li>
              <li><strong>Security:</strong> To detect, prevent, and address technical issues, fraud, or security vulnerabilities.</li>
              <li><strong>Analytics:</strong> To understand how our website is used and improve user experience.</li>
              <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes.</li>
              <li><strong>Marketing:</strong> To send relevant updates about our services (with your consent, and you can opt-out anytime).</li>
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
              <Lock size={24} />
            </div>
            <h2>3. Data Security</h2>
            
            <p>
              We implement industry-standard security measures to protect your personal information:
            </p>
            
            <ul>
              <li><strong>Encryption:</strong> All data transmitted to and from our servers uses TLS/SSL encryption.</li>
              <li><strong>Access Controls:</strong> Strict role-based access to personal data—only authorized personnel can access sensitive information.</li>
              <li><strong>Secure Infrastructure:</strong> Hosting on secure, regularly audited cloud infrastructure with automated backups.</li>
              <li><strong>Regular Audits:</strong> Periodic security assessments and vulnerability testing.</li>
              <li><strong>Data Minimization:</strong> We collect only the information necessary to provide our services.</li>
              <li><strong>Incident Response:</strong> Established protocols for detecting, responding to, and notifying about data breaches.</li>
            </ul>

            <div className="legal-note">
              <strong>Note:</strong> While we take security seriously, no method of transmission over the internet 
              is 100% secure. We cannot guarantee absolute security but commit to industry best practices.
            </div>
          </motion.div>

          <motion.div
            className="legal-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="section-icon">
              <Users size={24} />
            </div>
            <h2>4. Information Sharing</h2>
            
            <p>We do not sell, rent, or trade your personal information. We may share information only in these circumstances:</p>
            
            <ul>
              <li><strong>Service Providers:</strong> Trusted third-party vendors who assist in operations (hosting, analytics, payment processing) under strict confidentiality agreements.</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets (you will be notified).</li>
              <li><strong>With Your Consent:</strong> When you explicitly authorize us to share information.</li>
              <li><strong>Security & Fraud Prevention:</strong> To protect against fraud, unauthorized access, or illegal activity.</li>
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
              <FileText size={24} />
            </div>
            <h2>5. Your Rights</h2>
            
            <p>You have the following rights regarding your personal data:</p>
            
            <ul>
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you.</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information.</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data (subject to legal obligations).</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service provider.</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time.</li>
              <li><strong>Object:</strong> Object to processing of your data for certain purposes.</li>
              <li><strong>Withdraw Consent:</strong> Withdraw previously given consent for data processing.</li>
            </ul>

            <p>
              To exercise these rights, contact us at <strong>privacy@blackgate.dev</strong>
            </p>
          </motion.div>

          <motion.div
            className="legal-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2>6. Cookies & Tracking</h2>
            
            <p>We use cookies and similar technologies to:</p>
            
            <ul>
              <li>Remember your preferences and settings</li>
              <li>Analyze site traffic and usage patterns</li>
              <li>Improve website performance and user experience</li>
              <li>Provide personalized content</li>
            </ul>

            <p>
              You can control cookies through your browser settings. Note that disabling cookies may affect 
              site functionality.
            </p>
          </motion.div>

          <motion.div
            className="legal-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2>7. Data Retention</h2>
            
            <p>
              We retain your personal information only as long as necessary to fulfill the purposes outlined 
              in this policy, unless a longer retention period is required by law. When data is no longer needed, 
              we securely delete or anonymize it.
            </p>
          </motion.div>

          <motion.div
            className="legal-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h2>8. International Data Transfers</h2>
            
            <p>
              Your information may be transferred to and maintained on servers located outside your country. 
              We ensure appropriate safeguards are in place to protect your data in compliance with applicable 
              data protection laws.
            </p>
          </motion.div>

          <motion.div
            className="legal-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2>9. Children's Privacy</h2>
            
            <p>
              Our services are not directed to individuals under 18 years of age. We do not knowingly collect 
              personal information from children. If we become aware of such collection, we will delete it immediately.
            </p>
          </motion.div>

          <motion.div
            className="legal-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <h2>10. Changes to This Policy</h2>
            
            <p>
              We may update this Privacy Policy periodically. Changes will be posted on this page with an 
              updated "Last Updated" date. For material changes, we will provide additional notice 
              (email notification or prominent website notice).
            </p>
          </motion.div>

          <motion.div
            className="legal-section legal-contact"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <h2>11. Contact Us</h2>
            
            <p>
              For questions, concerns, or requests regarding this Privacy Policy or your personal data:
            </p>
            
            <div className="contact-details">
              <p><strong>Email:</strong> privacy@blackgate.dev</p>
              <p><strong>Address:</strong> Blackgate Technologies, Mumbai, India</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Privacy
