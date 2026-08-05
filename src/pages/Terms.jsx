import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FileText, Scale, AlertCircle, CheckCircle2, XCircle, Shield } from 'lucide-react'
import Navbar from '../sections/Navbar'
import Footer from '../sections/Footer'
import AnimatedSection from '../components/AnimatedSection'

function Terms() {
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
              <FileText size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Terms of Service</h1>
            <p className="text-cyan-primary font-semibold mb-6">
              Last Updated: January 15, 2026
            </p>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              These Terms of Service govern your use of Blackgate's services and website. By engaging with us, 
              you agree to these terms. Please read them carefully.
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-12">
          {/* 1. Acceptance of Terms */}
          <AnimatedSection delay={0.1}>
            <div className="rounded-3xl bg-bg-card p-8 md:p-10 gradient-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-cyan-primary">
                  <Scale size={24} />
                </div>
                <h2 className="text-2xl font-bold text-white">1. Acceptance of Terms</h2>
              </div>
              
              <p className="text-text-secondary leading-relaxed mb-4">
                By accessing or using Blackgate's website, services, or products, you agree to be bound by these 
                Terms of Service and our Privacy Policy. If you do not agree, do not use our services.
              </p>
              <p className="text-text-secondary leading-relaxed">
                These terms apply to all users, clients, visitors, and anyone who accesses our services.
              </p>
            </div>
          </AnimatedSection>

          {/* 2. Services Offered */}
          <AnimatedSection delay={0.2}>
            <div className="rounded-3xl bg-bg-card p-8 md:p-10 gradient-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-cyan-primary">
                  <CheckCircle2 size={24} />
                </div>
                <h2 className="text-2xl font-bold text-white">2. Services Offered</h2>
              </div>
              
              <p className="text-text-secondary leading-relaxed mb-6">Blackgate provides the following professional services:</p>
              
              <ul className="space-y-3 mb-6 text-text-secondary">
                <li className="flex items-start gap-3"><span className="text-cyan-primary mt-1">•</span><span><strong className="text-white">Web Design & Development:</strong> Custom websites, web applications, and digital experiences.</span></li>
                <li className="flex items-start gap-3"><span className="text-cyan-primary mt-1">•</span><span><strong className="text-white">Cybersecurity Solutions:</strong> Vulnerability assessments, penetration testing, security audits, and infrastructure hardening.</span></li>
                <li className="flex items-start gap-3"><span className="text-cyan-primary mt-1">•</span><span><strong className="text-white">Cyber Forensics:</strong> Digital investigations, incident response, evidence analysis, and breach reconstruction.</span></li>
                <li className="flex items-start gap-3"><span className="text-cyan-primary mt-1">•</span><span><strong className="text-white">AI Solutions:</strong> AI chatbots, automation systems, machine learning implementations, and intelligent business tools.</span></li>
              </ul>
              <p className="text-sm text-text-muted">
                Specific project scope, deliverables, timelines, and pricing are defined in individual project agreements or contracts.
              </p>
            </div>
          </AnimatedSection>

          {/* 3. Client Responsibilities */}
          <AnimatedSection delay={0.3}>
            <div className="rounded-3xl bg-bg-card p-8 md:p-10 gradient-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-cyan-primary">
                  <Shield size={24} />
                </div>
                <h2 className="text-2xl font-bold text-white">3. Client Responsibilities</h2>
              </div>
              
              <p className="text-text-secondary leading-relaxed mb-6">As a client, you agree to:</p>
              
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start gap-3"><span className="text-cyan-primary mt-1">•</span><span><strong className="text-white">Provide Accurate Information:</strong> Supply truthful, complete information about your business and project requirements.</span></li>
                <li className="flex items-start gap-3"><span className="text-cyan-primary mt-1">•</span><span><strong className="text-white">Timely Feedback:</strong> Respond to requests for feedback, approvals, and materials within agreed timeframes.</span></li>
                <li className="flex items-start gap-3"><span className="text-cyan-primary mt-1">•</span><span><strong className="text-white">Access & Credentials:</strong> Provide necessary access to systems, accounts, or data required for project completion.</span></li>
                <li className="flex items-start gap-3"><span className="text-cyan-primary mt-1">•</span><span><strong className="text-white">Payment:</strong> Pay invoices according to agreed payment terms.</span></li>
                <li className="flex items-start gap-3"><span className="text-cyan-primary mt-1">•</span><span><strong className="text-white">Legal Compliance:</strong> Ensure your project complies with applicable laws and regulations.</span></li>
                <li className="flex items-start gap-3"><span className="text-cyan-primary mt-1">•</span><span><strong className="text-white">Content Ownership:</strong> Guarantee you have rights to any content, images, or materials you provide.</span></li>
              </ul>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.4}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 4. Payment Terms */}
              <div className="p-8 rounded-3xl bg-bg-card border border-white/10">
                <h2 className="text-xl font-bold text-white mb-6">4. Payment Terms</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-white font-semibold mb-2">4.1 Project Pricing</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">Pricing is determined on a project-by-project basis and outlined in individual contracts or statements of work. Pricing may be fixed-fee, hourly, or retainer-based.</p>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">4.2 Payment Schedule</h3>
                    <ul className="text-sm text-text-secondary leading-relaxed space-y-1 list-disc list-inside">
                      <li>Deposits (typically 30-50%) are required before work begins.</li>
                      <li>Milestone payments may be required for larger projects.</li>
                      <li>Final payment is due upon project completion or as specified.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">4.3 Late Payments & Refunds</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">Invoices not paid within 30 days may incur a late fee of 1.5% per month. Deposits are non-refundable once work has commenced. Refunds for completed work are not provided.</p>
                  </div>
                </div>
              </div>

              {/* 5. Intellectual Property */}
              <div className="p-8 rounded-3xl bg-bg-card border border-white/10">
                <h2 className="text-xl font-bold text-white mb-6">5. Intellectual Property</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-white font-semibold mb-2">5.1 Client-Provided Content</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">You retain ownership of all content, data, and materials you provide to Blackgate.</p>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">5.2 Deliverables</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">Upon full payment, you receive ownership of the final deliverables created specifically for your project (websites, applications, custom code).</p>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">5.3 Pre-Existing & Third-Party Tools</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">Blackgate retains ownership of proprietary tools, frameworks, and methodologies. Third-party software is subject to their respective licenses.</p>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">5.4 Portfolio Rights</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">Blackgate reserves the right to showcase completed projects in our portfolio or marketing materials (with client approval for confidential projects).</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* 6. Confidentiality */}
          <AnimatedSection delay={0.5}>
            <div className="rounded-3xl bg-bg-card p-8 md:p-10 gradient-border">
              <h2 className="text-2xl font-bold text-white mb-6">6. Confidentiality</h2>
              <p className="text-text-secondary leading-relaxed mb-4">Both parties agree to keep confidential information disclosed during the project private. This includes:</p>
              <ul className="space-y-3 mb-6 text-text-secondary">
                <li className="flex items-start gap-3"><span className="text-cyan-primary mt-1">•</span><span>Business strategies, financial data, and proprietary information</span></li>
                <li className="flex items-start gap-3"><span className="text-cyan-primary mt-1">•</span><span>Technical specifications, source code, and system architectures</span></li>
                <li className="flex items-start gap-3"><span className="text-cyan-primary mt-1">•</span><span>Security vulnerabilities and assessment findings</span></li>
              </ul>
              <p className="text-text-secondary leading-relaxed">Confidentiality obligations survive project completion. Non-Disclosure Agreements (NDAs) can be executed for sensitive projects.</p>
            </div>
          </AnimatedSection>

          {/* 7. Warranties & Disclaimers */}
          <AnimatedSection delay={0.6}>
            <div className="rounded-3xl bg-bg-card p-8 md:p-10 gradient-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-cyan-primary">
                  <AlertCircle size={24} />
                </div>
                <h2 className="text-2xl font-bold text-white">7. Warranties & Disclaimers</h2>
              </div>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-white font-semibold mb-2">7.1 Service Warranty & Bug Fixes</h3>
                  <p className="text-text-secondary leading-relaxed">Blackgate warrants that services will be performed with professional skill and care. We provide a reasonable period (typically 30-90 days) of bug fixes for defects in deliverables after project completion.</p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">7.2 No Absolute Guarantees</h3>
                  <p className="text-text-secondary leading-relaxed mb-2">While we employ best practices, we cannot guarantee:</p>
                  <ul className="text-text-secondary leading-relaxed space-y-1 list-disc list-inside">
                    <li>100% uptime or zero security breaches</li>
                    <li>Specific business outcomes or revenue increases</li>
                    <li>Third-party service availability</li>
                    <li>Complete elimination of all security vulnerabilities</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-accent-cyan/20 bg-accent-cyan/10">
                <p className="text-sm text-cyan-primary leading-relaxed">
                  <strong>DISCLAIMER:</strong> Services are provided "as is" without warranties of any kind, express or implied, beyond those explicitly stated in project contracts.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.7}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 rounded-3xl bg-bg-card border border-white/10">
                <h2 className="text-xl font-bold text-white mb-4">8. Limitation of Liability</h2>
                <p className="text-text-secondary leading-relaxed mb-4">To the maximum extent permitted by law, Blackgate's total liability for any claim arising from our services shall not exceed the total fees paid by the client for the specific project.</p>
                <p className="text-text-secondary leading-relaxed">We are not liable for indirect, incidental, consequential, or punitive damages including lost profits, data loss, or business interruption.</p>
              </div>
              <div className="p-8 rounded-3xl bg-bg-card border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <XCircle size={20} className="text-cyan-primary" />
                  <h2 className="text-xl font-bold text-white">9. Termination</h2>
                </div>
                <p className="text-text-secondary leading-relaxed mb-4">You may terminate a project with written notice. You remain responsible for payment of work completed to date.</p>
                <p className="text-text-secondary leading-relaxed">We reserve the right to terminate services if invoices remain unpaid beyond 30 days, or if the client breaches these Terms, engages in illegal activities, or violates our values.</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.8}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 rounded-3xl bg-bg-card border border-white/10">
                <h2 className="text-xl font-bold text-white mb-4">10. Indemnification</h2>
                <p className="text-text-secondary leading-relaxed mb-4">You agree to indemnify and hold Blackgate harmless from any claims, damages, or expenses arising from:</p>
                <ul className="text-sm text-text-secondary leading-relaxed space-y-1 list-disc list-inside">
                  <li>Your use of deliverables in violation of applicable laws</li>
                  <li>Content you provide that infringes third-party rights</li>
                  <li>Your breach of these Terms of Service</li>
                  <li>Unauthorized modifications to deliverables after handover</li>
                </ul>
              </div>
              <div className="p-8 rounded-3xl bg-bg-card border border-white/10">
                <h2 className="text-xl font-bold text-white mb-4">11. Dispute Resolution</h2>
                <p className="text-text-secondary leading-relaxed mb-4">In the event of a dispute, both parties agree to attempt to resolve disputes amicably through direct communication, followed by mediation if negotiation fails.</p>
                <p className="text-sm text-text-secondary leading-relaxed mt-4 pt-4 border-t border-white/10">
                  These terms are governed by the laws of India. Disputes shall be resolved in the courts of Mumbai, India.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.9}>
            <div className="rounded-3xl bg-bg-card p-8 md:p-10 gradient-border flex flex-col md:flex-row gap-12 justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">12. Changes & Contact</h2>
                <p className="text-text-secondary leading-relaxed mb-6 max-w-xl">
                  Blackgate reserves the right to modify these Terms of Service at any time. Changes will be posted on this page with an updated date.
                </p>
                
                <div className="grid gap-4">
                  <div className="p-4 rounded-xl bg-bg-primary/50 border border-white/5 inline-block">
                    <span className="text-white font-semibold">Email:</span>
                    <span className="text-cyan-primary ml-2">blackgatesolutions@gmail.com</span>
                  </div>
                  <div className="p-4 rounded-xl bg-bg-primary/50 border border-white/5 inline-block">
                    <span className="text-white font-semibold">Address:</span>
                    <span className="text-text-secondary ml-2">Blackgate Technologies, Mumbai, India</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default Terms
