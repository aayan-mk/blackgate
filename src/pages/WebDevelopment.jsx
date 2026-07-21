import { motion } from 'framer-motion'
import { ArrowLeft, Code, CheckCircle2, Zap, Globe, Smartphone, Server, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import ServiceQuickNav from '../components/ServiceQuickNav'
import Navbar from '@/sections/Navbar'
import Footer from '@/sections/Footer'
import { GlowCard } from '@/components/GlowCard'

function WebDevelopment() {
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
              <Code size={48} className="sm:w-16 sm:h-16" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Web <span className="text-gradient-cyan">Development</span>
            </h1>
            <p className="text-lg sm:text-xl text-text-secondary max-w-2xl leading-relaxed">
              Modern, secure, and lightning-fast web applications built with precision engineering.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-6 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceQuickNav />
        </div>
      </section>

      {/* What We Build */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What We Build</h2>
            <p className="text-lg text-text-secondary">
              From concept to deployment, we craft digital experiences that users love and businesses depend on.
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
              <Globe className="w-12 h-12 text-accent-cyan mb-6" />
              <h3 className="text-xl font-semibold text-white mb-3">Progressive Web Apps</h3>
              <p className="text-text-secondary leading-relaxed">
                Fast, reliable, and engaging experiences that work seamlessly across all devices. 
                Offline capabilities, push notifications, and native app-like performance.
              </p>
            </GlowCard>

            <GlowCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8"
            >
              <Smartphone className="w-12 h-12 text-accent-cyan mb-6" />
              <h3 className="text-xl font-semibold text-white mb-3">Responsive Design</h3>
              <p className="text-text-secondary leading-relaxed">
                Pixel-perfect interfaces that adapt beautifully to any screen size. Mobile-first 
                approach ensures optimal experience on smartphones, tablets, and desktops.
              </p>
            </GlowCard>

            <GlowCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-8"
            >
              <Server className="w-12 h-12 text-accent-cyan mb-6" />
              <h3 className="text-xl font-semibold text-white mb-3">API Development</h3>
              <p className="text-text-secondary leading-relaxed">
                RESTful and GraphQL APIs built for performance and scalability. Clean documentation, 
                versioning, and authentication out of the box.
              </p>
            </GlowCard>

            <GlowCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-8"
            >
              <Zap className="w-12 h-12 text-accent-cyan mb-6" />
              <h3 className="text-xl font-semibold text-white mb-3">Performance Optimization</h3>
              <p className="text-text-secondary leading-relaxed">
                Sub-second load times through code splitting, lazy loading, CDN delivery, and 
                aggressive caching strategies. Every millisecond counts.
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
              <h3 className="text-xl font-semibold text-white mb-3">Security First</h3>
              <p className="text-text-secondary leading-relaxed">
                HTTPS everywhere, CSP headers, XSS protection, CSRF tokens, and secure authentication. 
                Security isn't a feature—it's the foundation.
              </p>
            </GlowCard>

            <GlowCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="p-8"
            >
              <Code className="w-12 h-12 text-accent-cyan mb-6" />
              <h3 className="text-xl font-semibold text-white mb-3">Clean Architecture</h3>
              <p className="text-text-secondary leading-relaxed">
                Maintainable, testable code with comprehensive documentation. Future developers 
                (including you) will thank you for the clarity.
              </p>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Web Development Stack</h2>
            <p className="text-lg text-text-secondary">
              Battle-tested technologies chosen for reliability, performance, and long-term maintainability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <GlowCard className="p-8">
              <h3 className="text-xl font-semibold text-accent-cyan mb-6">Front-End Frameworks</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-text-secondary">
                  <CheckCircle2 size={20} className="text-accent-cyan shrink-0 mt-0.5" />
                  <span><strong className="text-white font-semibold">React</strong> - Component-based UI with unmatched ecosystem</span>
                </li>
                <li className="flex items-start gap-3 text-text-secondary">
                  <CheckCircle2 size={20} className="text-accent-cyan shrink-0 mt-0.5" />
                  <span><strong className="text-white font-semibold">Next.js</strong> - Server-side rendering and static generation</span>
                </li>
                <li className="flex items-start gap-3 text-text-secondary">
                  <CheckCircle2 size={20} className="text-accent-cyan shrink-0 mt-0.5" />
                  <span><strong className="text-white font-semibold">TypeScript</strong> - Type safety that prevents runtime errors</span>
                </li>
                <li className="flex items-start gap-3 text-text-secondary">
                  <CheckCircle2 size={20} className="text-accent-cyan shrink-0 mt-0.5" />
                  <span><strong className="text-white font-semibold">Tailwind CSS</strong> - Utility-first styling for rapid development</span>
                </li>
              </ul>
            </GlowCard>

            <GlowCard className="p-8">
              <h3 className="text-xl font-semibold text-accent-cyan mb-6">Back-End & APIs</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-text-secondary">
                  <CheckCircle2 size={20} className="text-accent-cyan shrink-0 mt-0.5" />
                  <span><strong className="text-white font-semibold">Node.js</strong> - JavaScript runtime for high-performance servers</span>
                </li>
                <li className="flex items-start gap-3 text-text-secondary">
                  <CheckCircle2 size={20} className="text-accent-cyan shrink-0 mt-0.5" />
                  <span><strong className="text-white font-semibold">Python (Django/FastAPI)</strong> - Robust frameworks for complex logic</span>
                </li>
                <li className="flex items-start gap-3 text-text-secondary">
                  <CheckCircle2 size={20} className="text-accent-cyan shrink-0 mt-0.5" />
                  <span><strong className="text-white font-semibold">GraphQL</strong> - Efficient data fetching with precise queries</span>
                </li>
                <li className="flex items-start gap-3 text-text-secondary">
                  <CheckCircle2 size={20} className="text-accent-cyan shrink-0 mt-0.5" />
                  <span><strong className="text-white font-semibold">REST APIs</strong> - Standard, cacheable HTTP endpoints</span>
                </li>
              </ul>
            </GlowCard>

            <GlowCard className="p-8">
              <h3 className="text-xl font-semibold text-accent-cyan mb-6">Databases & Storage</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-text-secondary">
                  <CheckCircle2 size={20} className="text-accent-cyan shrink-0 mt-0.5" />
                  <span><strong className="text-white font-semibold">PostgreSQL</strong> - Reliable relational database with advanced features</span>
                </li>
                <li className="flex items-start gap-3 text-text-secondary">
                  <CheckCircle2 size={20} className="text-accent-cyan shrink-0 mt-0.5" />
                  <span><strong className="text-white font-semibold">MongoDB</strong> - Flexible document storage for dynamic data</span>
                </li>
                <li className="flex items-start gap-3 text-text-secondary">
                  <CheckCircle2 size={20} className="text-accent-cyan shrink-0 mt-0.5" />
                  <span><strong className="text-white font-semibold">Redis</strong> - In-memory caching for instant response times</span>
                </li>
                <li className="flex items-start gap-3 text-text-secondary">
                  <CheckCircle2 size={20} className="text-accent-cyan shrink-0 mt-0.5" />
                  <span><strong className="text-white font-semibold">AWS S3</strong> - Scalable object storage for media and assets</span>
                </li>
              </ul>
            </GlowCard>

            <GlowCard className="p-8">
              <h3 className="text-xl font-semibold text-accent-cyan mb-6">DevOps & Deployment</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-text-secondary">
                  <CheckCircle2 size={20} className="text-accent-cyan shrink-0 mt-0.5" />
                  <span><strong className="text-white font-semibold">Docker</strong> - Containerization for consistent environments</span>
                </li>
                <li className="flex items-start gap-3 text-text-secondary">
                  <CheckCircle2 size={20} className="text-accent-cyan shrink-0 mt-0.5" />
                  <span><strong className="text-white font-semibold">Kubernetes</strong> - Orchestration for scaling and reliability</span>
                </li>
                <li className="flex items-start gap-3 text-text-secondary">
                  <CheckCircle2 size={20} className="text-accent-cyan shrink-0 mt-0.5" />
                  <span><strong className="text-white font-semibold">CI/CD Pipelines</strong> - Automated testing and deployment</span>
                </li>
                <li className="flex items-start gap-3 text-text-secondary">
                  <CheckCircle2 size={20} className="text-accent-cyan shrink-0 mt-0.5" />
                  <span><strong className="text-white font-semibold">AWS/Azure/GCP</strong> - Cloud infrastructure that scales with you</span>
                </li>
              </ul>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Development Process</h2>
            <p className="text-lg text-text-secondary">
              From wireframes to production, every step is planned, documented, and validated.
            </p>
          </motion.div>

          <div className="flex flex-col gap-6 max-w-3xl mx-auto">
            <GlowCard className="p-8 pl-16 relative">
              <div className="absolute left-6 top-6 text-2xl font-bold text-accent-cyan/30">01</div>
              <h3 className="text-xl font-semibold text-white mb-3">Discovery & Planning</h3>
              <p className="text-text-secondary leading-relaxed">
                We start by understanding your business goals, target audience, and technical requirements. 
                Detailed wireframes and user flows ensure everyone's aligned before development begins.
              </p>
            </GlowCard>

            <GlowCard className="p-8 pl-16 relative">
              <div className="absolute left-6 top-6 text-2xl font-bold text-accent-cyan/30">02</div>
              <h3 className="text-xl font-semibold text-white mb-3">Design & Prototyping</h3>
              <p className="text-text-secondary leading-relaxed">
                High-fidelity mockups and interactive prototypes bring your vision to life. User testing 
                validates design decisions before we write production code.
              </p>
            </GlowCard>

            <GlowCard className="p-8 pl-16 relative">
              <div className="absolute left-6 top-6 text-2xl font-bold text-accent-cyan/30">03</div>
              <h3 className="text-xl font-semibold text-white mb-3">Development & Testing</h3>
              <p className="text-text-secondary leading-relaxed">
                Agile sprints with regular check-ins. Automated testing catches bugs early. Code reviews 
                ensure quality and knowledge sharing across the team.
              </p>
            </GlowCard>

            <GlowCard className="p-8 pl-16 relative">
              <div className="absolute left-6 top-6 text-2xl font-bold text-accent-cyan/30">04</div>
              <h3 className="text-xl font-semibold text-white mb-3">Deployment & Monitoring</h3>
              <p className="text-text-secondary leading-relaxed">
                Staged rollouts minimize risk. Real-time monitoring catches issues before users do. 
                Post-launch support ensures smooth operation and continuous improvement.
              </p>
            </GlowCard>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Build Something Exceptional?</h2>
            <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a development roadmap tailored to your goals.
            </p>
            <Link to="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-accent-cyan text-bg-primary font-bold rounded-full hover:bg-accent-teal hover:scale-105 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              Start Your Project
              <Code size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default WebDevelopment
