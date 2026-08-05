import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Shield, Lock, Eye, Database, Users, FileText } from 'lucide-react'
import Navbar from '../sections/Navbar'
import Footer from '../sections/Footer'
import AnimatedSection from '../components/AnimatedSection'

function Privacy() {
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
              <Shield size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Privacy Policy</h1>
            <p className="text-cyan-primary font-semibold mb-6">
              Last Updated: January 15, 2026
            </p>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              At Blackgate, privacy isn't an afterthought—it's foundational. This policy explains how we 
              collect, use, protect, and respect your personal information.
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-12">
          {/* 1. Information We Collect */}
          <AnimatedSection delay={0.1}>
            <div className="rounded-3xl bg-bg-card p-8 md:p-10 gradient-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-cyan-primary">
                  <Database size={24} />
                </div>
                <h2 className="text-2xl font-bold text-white">1. Information We Collect</h2>
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-4">1.1 Information You Provide</h3>
              <ul className="space-y-3 mb-8 text-text-secondary">
                <li className="flex items-start gap-3"><span className="text-cyan-primary mt-1">•</span><span><strong className="text-white">Contact Information:</strong> Name, email address, phone number, company name when you contact us or request services.</span></li>
                <li className="flex items-start gap-3"><span className="text-cyan-primary mt-1">•</span><span><strong className="text-white">Project Details:</strong> Information about your business needs, technical requirements, and project specifications.</span></li>
                <li className="flex items-start gap-3"><span className="text-cyan-primary mt-1">•</span><span><strong className="text-white">Communication Records:</strong> Correspondence via email, phone, or other communication channels.</span></li>
                <li className="flex items-start gap-3"><span className="text-cyan-primary mt-1">•</span><span><strong className="text-white">Payment Information:</strong> Billing details processed securely through third-party payment processors (we do not store credit card information).</span></li>
              </ul>

              <h3 className="text-lg font-semibold text-white mb-4">1.2 Automatically Collected Information</h3>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start gap-3"><span className="text-cyan-primary mt-1">•</span><span><strong className="text-white">Technical Data:</strong> IP address, browser type, device information, operating system.</span></li>
                <li className="flex items-start gap-3"><span className="text-cyan-primary mt-1">•</span><span><strong className="text-white">Usage Data:</strong> Pages visited, time spent on site, navigation patterns (via analytics tools).</span></li>
                <li className="flex items-start gap-3"><span className="text-cyan-primary mt-1">•</span><span><strong className="text-white">Cookies:</strong> Small data files stored on your device to improve user experience and track analytics.</span></li>
              </ul>
            </div>
          </AnimatedSection>

          {/* 2. How We Use Your Information */}
          <AnimatedSection delay={0.2}>
            <div className="rounded-3xl bg-bg-card p-8 md:p-10 gradient-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-cyan-primary">
                  <Eye size={24} />
                </div>
                <h2 className="text-2xl font-bold text-white">2. How We Use Your Information</h2>
              </div>
              
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start gap-3"><span className="text-cyan-primary mt-1">•</span><span><strong className="text-white">Service Delivery:</strong> To provide, maintain, and improve our web development, cybersecurity, AI, and forensics services.</span></li>
                <li className="flex items-start gap-3"><span className="text-cyan-primary mt-1">•</span><span><strong className="text-white">Communication:</strong> To respond to inquiries, provide project updates, and send important notifications.</span></li>
                <li className="flex items-start gap-3"><span className="text-cyan-primary mt-1">•</span><span><strong className="text-white">Security:</strong> To detect, prevent, and address technical issues, fraud, or security vulnerabilities.</span></li>
                <li className="flex items-start gap-3"><span className="text-cyan-primary mt-1">•</span><span><strong className="text-white">Analytics:</strong> To understand how our website is used and improve user experience.</span></li>
                <li className="flex items-start gap-3"><span className="text-cyan-primary mt-1">•</span><span><strong className="text-white">Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes.</span></li>
                <li className="flex items-start gap-3"><span className="text-cyan-primary mt-1">•</span><span><strong className="text-white">Marketing:</strong> To send relevant updates about our services (with your consent, and you can opt-out anytime).</span></li>
              </ul>
            </div>
          </AnimatedSection>

          {/* 3. Data Security */}
          <AnimatedSection delay={0.3}>
            <div className="rounded-3xl bg-bg-card p-8 md:p-10 gradient-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-cyan-primary">
                  <Lock size={24} />
                </div>
                <h2 className="text-2xl font-bold text-white">3. Data Security</h2>
              </div>
              
              <p className="text-text-secondary leading-relaxed mb-6">
                We implement industry-standard security measures to protect your personal information:
              </p>
              
              <ul className="space-y-3 mb-8 text-text-secondary">
                <li className="flex items-start gap-3"><span className="text-cyan-primary mt-1">•</span><span><strong className="text-white">Encryption:</strong> All data transmitted to and from our servers uses TLS/SSL encryption.</span></li>
                <li className="flex items-start gap-3"><span className="text-cyan-primary mt-1">•</span><span><strong className="text-white">Access Controls:</strong> Strict role-based access to personal data—only authorized personnel can access sensitive information.</span></li>
                <li className="flex items-start gap-3"><span className="text-cyan-primary mt-1">•</span><span><strong className="text-white">Secure Infrastructure:</strong> Hosting on secure, regularly audited cloud infrastructure with automated backups.</span></li>
                <li className="flex items-start gap-3"><span className="text-cyan-primary mt-1">•</span><span><strong className="text-white">Regular Audits:</strong> Periodic security assessments and vulnerability testing.</span></li>
                <li className="flex items-start gap-3"><span className="text-cyan-primary mt-1">•</span><span><strong className="text-white">Data Minimization:</strong> We collect only the information necessary to provide our services.</span></li>
                <li className="flex items-start gap-3"><span className="text-cyan-primary mt-1">•</span><span><strong className="text-white">Incident Response:</strong> Established protocols for detecting, responding to, and notifying about data breaches.</span></li>
              </ul>

              <div className="p-4 rounded-xl border border-accent-cyan/20 bg-accent-cyan/10">
                <p className="text-sm text-cyan-primary leading-relaxed">
                  <strong>Note:</strong> While we take security seriously, no method of transmission over the internet 
                  is 100% secure. We cannot guarantee absolute security but commit to industry best practices.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* 4. Information Sharing */}
          <AnimatedSection delay={0.4}>
            <div className="rounded-3xl bg-bg-card p-8 md:p-10 gradient-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-cyan-primary">
                  <Users size={24} />
                </div>
                <h2 className="text-2xl font-bold text-white">4. Information Sharing</h2>
              </div>
              
              <p className="text-text-secondary leading-relaxed mb-6">We do not sell, rent, or trade your personal information. We may share information only in these circumstances:</p>
              
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start gap-3"><span className="text-cyan-primary mt-1">•</span><span><strong className="text-white">Service Providers:</strong> Trusted third-party vendors who assist in operations (hosting, analytics, payment processing) under strict confidentiality agreements.</span></li>
                <li className="flex items-start gap-3"><span className="text-cyan-primary mt-1">•</span><span><strong className="text-white">Legal Requirements:</strong> When required by law, court order, or government regulation.</span></li>
                <li className="flex items-start gap-3"><span className="text-cyan-primary mt-1">•</span><span><strong className="text-white">Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets (you will be notified).</span></li>
                <li className="flex items-start gap-3"><span className="text-cyan-primary mt-1">•</span><span><strong className="text-white">With Your Consent:</strong> When you explicitly authorize us to share information.</span></li>
                <li className="flex items-start gap-3"><span className="text-cyan-primary mt-1">•</span><span><strong className="text-white">Security & Fraud Prevention:</strong> To protect against fraud, unauthorized access, or illegal activity.</span></li>
              </ul>
            </div>
          </AnimatedSection>

          {/* 5. Your Rights */}
          <AnimatedSection delay={0.5}>
            <div className="rounded-3xl bg-bg-card p-8 md:p-10 gradient-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-cyan-primary">
                  <FileText size={24} />
                </div>
                <h2 className="text-2xl font-bold text-white">5. Your Rights</h2>
              </div>
              
              <p className="text-text-secondary leading-relaxed mb-6">You have the following rights regarding your personal data:</p>
              
              <ul className="space-y-3 mb-8 text-text-secondary">
                <li className="flex items-start gap-3"><span className="text-cyan-primary mt-1">•</span><span><strong className="text-white">Access:</strong> Request a copy of the personal information we hold about you.</span></li>
                <li className="flex items-start gap-3"><span className="text-cyan-primary mt-1">•</span><span><strong className="text-white">Correction:</strong> Request correction of inaccurate or incomplete information.</span></li>
                <li className="flex items-start gap-3"><span className="text-cyan-primary mt-1">•</span><span><strong className="text-white">Deletion:</strong> Request deletion of your personal data (subject to legal obligations).</span></li>
                <li className="flex items-start gap-3"><span className="text-cyan-primary mt-1">•</span><span><strong className="text-white">Portability:</strong> Request transfer of your data to another service provider.</span></li>
                <li className="flex items-start gap-3"><span className="text-cyan-primary mt-1">•</span><span><strong className="text-white">Opt-Out:</strong> Unsubscribe from marketing communications at any time.</span></li>
                <li className="flex items-start gap-3"><span className="text-cyan-primary mt-1">•</span><span><strong className="text-white">Object:</strong> Object to processing of your data for certain purposes.</span></li>
                <li className="flex items-start gap-3"><span className="text-cyan-primary mt-1">•</span><span><strong className="text-white">Withdraw Consent:</strong> Withdraw previously given consent for data processing.</span></li>
              </ul>

              <div className="p-4 rounded-xl bg-bg-primary/50 border border-white/5">
                <span className="text-text-secondary">To exercise these rights, contact us at </span>
                <strong className="text-cyan-primary ml-1">privacy@blackgate.dev</strong>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.6}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 rounded-3xl bg-bg-card border border-white/10">
                <h2 className="text-xl font-bold text-white mb-4">6. Cookies & Tracking</h2>
                <p className="text-text-secondary leading-relaxed mb-4">We use cookies and similar technologies to remember preferences, analyze traffic, and improve user experience.</p>
                <p className="text-sm text-text-muted">You can control cookies through your browser settings. Note that disabling cookies may affect site functionality.</p>
              </div>
              <div className="p-8 rounded-3xl bg-bg-card border border-white/10">
                <h2 className="text-xl font-bold text-white mb-4">7. Data Retention</h2>
                <p className="text-text-secondary leading-relaxed">We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy. When data is no longer needed, we securely delete or anonymize it.</p>
              </div>
              <div className="p-8 rounded-3xl bg-bg-card border border-white/10">
                <h2 className="text-xl font-bold text-white mb-4">8. International Transfers</h2>
                <p className="text-text-secondary leading-relaxed">Your information may be transferred to servers located outside your country. We ensure appropriate safeguards are in place to protect your data.</p>
              </div>
              <div className="p-8 rounded-3xl bg-bg-card border border-white/10">
                <h2 className="text-xl font-bold text-white mb-4">9. Children's Privacy</h2>
                <p className="text-text-secondary leading-relaxed">Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.7}>
            <div className="rounded-3xl bg-bg-card p-8 md:p-10 gradient-border">
              <h2 className="text-2xl font-bold text-white mb-6">10. Contact Us</h2>
              
              <p className="text-text-secondary leading-relaxed mb-6">
                For questions, concerns, or requests regarding this Privacy Policy or your personal data:
              </p>
              
              <div className="grid gap-4">
                <div className="p-4 rounded-xl bg-bg-primary/50 border border-white/5">
                  <span className="text-white font-semibold">Email:</span>
                  <span className="text-cyan-primary ml-2">blackgatesolutions@gmail.com</span>
                </div>
                <div className="p-4 rounded-xl bg-bg-primary/50 border border-white/5">
                  <span className="text-white font-semibold">Address:</span>
                  <span className="text-text-secondary ml-2">Blackgate Technologies, Mumbai, India</span>
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

export default Privacy
