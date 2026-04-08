import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FileText, Scale, AlertCircle, CheckCircle2, XCircle, Shield } from 'lucide-react'
import './LegalPages.css'

function Terms() {
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
              <FileText size={48} />
            </div>
            <h1>Terms of Service</h1>
            <p className="legal-subtitle">
              Last Updated: January 15, 2026
            </p>
            <p className="legal-intro">
              These Terms of Service govern your use of Blackgate's services and website. By engaging with us, 
              you agree to these terms. Please read them carefully.
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
              <Scale size={24} />
            </div>
            <h2>1. Acceptance of Terms</h2>
            
            <p>
              By accessing or using Blackgate's website, services, or products, you agree to be bound by these 
              Terms of Service and our Privacy Policy. If you do not agree, do not use our services.
            </p>

            <p>
              These terms apply to all users, clients, visitors, and anyone who accesses our services.
            </p>
          </motion.div>

          <motion.div
            className="legal-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="section-icon">
              <CheckCircle2 size={24} />
            </div>
            <h2>2. Services Offered</h2>
            
            <p>Blackgate provides the following professional services:</p>
            
            <ul>
              <li><strong>Web Design & Development:</strong> Custom websites, web applications, and digital experiences.</li>
              <li><strong>Cybersecurity Solutions:</strong> Vulnerability assessments, penetration testing, security audits, and infrastructure hardening.</li>
              <li><strong>Cyber Forensics:</strong> Digital investigations, incident response, evidence analysis, and breach reconstruction.</li>
              <li><strong>AI Solutions:</strong> AI chatbots, automation systems, machine learning implementations, and intelligent business tools.</li>
            </ul>

            <p>
              Specific project scope, deliverables, timelines, and pricing are defined in individual project 
              agreements or contracts.
            </p>
          </motion.div>

          <motion.div
            className="legal-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="section-icon">
              <Shield size={24} />
            </div>
            <h2>3. Client Responsibilities</h2>
            
            <p>As a client, you agree to:</p>
            
            <ul>
              <li><strong>Provide Accurate Information:</strong> Supply truthful, complete information about your business and project requirements.</li>
              <li><strong>Timely Feedback:</strong> Respond to requests for feedback, approvals, and materials within agreed timeframes.</li>
              <li><strong>Access & Credentials:</strong> Provide necessary access to systems, accounts, or data required for project completion.</li>
              <li><strong>Payment:</strong> Pay invoices according to agreed payment terms.</li>
              <li><strong>Legal Compliance:</strong> Ensure your project complies with applicable laws and regulations.</li>
              <li><strong>Content Ownership:</strong> Guarantee you have rights to any content, images, or materials you provide.</li>
            </ul>
          </motion.div>

          <motion.div
            className="legal-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2>4. Payment Terms</h2>
            
            <h3>4.1 Project Pricing</h3>
            <p>
              Pricing is determined on a project-by-project basis and outlined in individual contracts or 
              statements of work. Pricing may be fixed-fee, hourly, or retainer-based.
            </p>

            <h3>4.2 Payment Schedule</h3>
            <ul>
              <li>Deposits (typically 30-50%) are required before work begins.</li>
              <li>Milestone payments may be required for larger projects.</li>
              <li>Final payment is due upon project completion or as specified in the contract.</li>
            </ul>

            <h3>4.3 Late Payments</h3>
            <p>
              Invoices not paid within 30 days may incur a late fee of 1.5% per month. Blackgate reserves 
              the right to suspend services or withhold deliverables until payment is received.
            </p>

            <h3>4.4 Refunds</h3>
            <p>
              Deposits are non-refundable once work has commenced. Refunds for completed work are not provided. 
              Disputes should be raised immediately.
            </p>
          </motion.div>

          <motion.div
            className="legal-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2>5. Intellectual Property</h2>
            
            <h3>5.1 Client-Provided Content</h3>
            <p>
              You retain ownership of all content, data, and materials you provide to Blackgate.
            </p>

            <h3>5.2 Deliverables</h3>
            <p>
              Upon full payment, you receive ownership of the final deliverables created specifically for your 
              project (websites, applications, custom code).
            </p>

            <h3>5.3 Pre-Existing & Third-Party Tools</h3>
            <p>
              Blackgate retains ownership of proprietary tools, frameworks, libraries, and methodologies. 
              Third-party software/libraries are subject to their respective licenses.
            </p>

            <h3>5.4 Portfolio Rights</h3>
            <p>
              Blackgate reserves the right to showcase completed projects in our portfolio, case studies, 
              or marketing materials (with client approval for confidential projects).
            </p>
          </motion.div>

          <motion.div
            className="legal-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2>6. Confidentiality</h2>
            
            <p>
              Both parties agree to keep confidential information disclosed during the project private. 
              This includes:
            </p>
            
            <ul>
              <li>Business strategies, financial data, and proprietary information</li>
              <li>Technical specifications, source code, and system architectures</li>
              <li>Security vulnerabilities and assessment findings</li>
            </ul>

            <p>
              Confidentiality obligations survive project completion. Non-Disclosure Agreements (NDAs) can 
              be executed for sensitive projects.
            </p>
          </motion.div>

          <motion.div
            className="legal-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="section-icon">
              <AlertCircle size={24} />
            </div>
            <h2>7. Warranties & Disclaimers</h2>
            
            <h3>7.1 Service Warranty</h3>
            <p>
              Blackgate warrants that services will be performed with professional skill and care, consistent 
              with industry standards.
            </p>

            <h3>7.2 Bug Fixes & Support</h3>
            <p>
              We provide a reasonable period (typically 30-90 days) of bug fixes for defects in deliverables 
              after project completion. Extended support can be contracted separately.
            </p>

            <h3>7.3 No Absolute Guarantees</h3>
            <p>
              While we employ best practices, we cannot guarantee:
            </p>
            <ul>
              <li>100% uptime or zero security breaches</li>
              <li>Specific business outcomes or revenue increases</li>
              <li>Third-party service availability</li>
              <li>Complete elimination of all security vulnerabilities</li>
            </ul>

            <div className="legal-note">
              <strong>DISCLAIMER:</strong> Services are provided "as is" without warranties of any kind, 
              express or implied, beyond those explicitly stated in project contracts.
            </div>
          </motion.div>

          <motion.div
            className="legal-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h2>8. Limitation of Liability</h2>
            
            <p>
              To the maximum extent permitted by law, Blackgate's total liability for any claim arising from 
              our services shall not exceed the total fees paid by the client for the specific project.
            </p>

            <p>
              We are not liable for indirect, incidental, consequential, or punitive damages including lost 
              profits, data loss, or business interruption.
            </p>

            <p>
              This limitation applies regardless of the legal theory (contract, tort, negligence, etc.).
            </p>
          </motion.div>

          <motion.div
            className="legal-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="section-icon">
              <XCircle size={24} />
            </div>
            <h2>9. Termination</h2>
            
            <h3>9.1 Termination by Client</h3>
            <p>
              You may terminate a project with written notice. You remain responsible for payment of work 
              completed to date, plus any non-refundable expenses incurred.
            </p>

            <h3>9.2 Termination by Blackgate</h3>
            <p>
              We reserve the right to terminate services if:
            </p>
            <ul>
              <li>Invoices remain unpaid beyond 30 days</li>
              <li>Client breaches these Terms of Service</li>
              <li>Client engages in illegal, unethical, or harmful activities</li>
              <li>Continuation would violate our values or legal obligations</li>
            </ul>

            <h3>9.3 Effects of Termination</h3>
            <p>
              Upon termination, access to work-in-progress may be revoked until final payment is received. 
              Confidentiality and intellectual property clauses remain in effect.
            </p>
          </motion.div>

          <motion.div
            className="legal-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <h2>10. Indemnification</h2>
            
            <p>
              You agree to indemnify and hold Blackgate harmless from any claims, damages, or expenses arising from:
            </p>
            
            <ul>
              <li>Your use of deliverables in violation of applicable laws</li>
              <li>Content you provide that infringes third-party rights</li>
              <li>Your breach of these Terms of Service</li>
              <li>Unauthorized modifications to deliverables after handover</li>
            </ul>
          </motion.div>

          <motion.div
            className="legal-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <h2>11. Dispute Resolution</h2>
            
            <p>
              In the event of a dispute, both parties agree to:
            </p>
            
            <ul>
              <li><strong>Good Faith Negotiation:</strong> Attempt to resolve disputes amicably through direct communication.</li>
              <li><strong>Mediation:</strong> If negotiation fails, engage in mediation before pursuing legal action.</li>
              <li><strong>Governing Law:</strong> These terms are governed by the laws of India.</li>
              <li><strong>Jurisdiction:</strong> Disputes shall be resolved in the courts of Mumbai, India.</li>
            </ul>
          </motion.div>

          <motion.div
            className="legal-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <h2>12. Changes to Terms</h2>
            
            <p>
              Blackgate reserves the right to modify these Terms of Service at any time. Changes will be 
              posted on this page with an updated "Last Updated" date. Continued use of our services after 
              changes constitutes acceptance.
            </p>
          </motion.div>

          <motion.div
            className="legal-section legal-contact"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <h2>13. Contact Information</h2>
            
            <p>
              For questions about these Terms of Service:
            </p>
            
            <div className="contact-details">
              <p><strong>Email:</strong> legal@blackgate.dev</p>
              <p><strong>Address:</strong> Blackgate Technologies, Mumbai, India</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Terms
