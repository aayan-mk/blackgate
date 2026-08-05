import { motion } from 'framer-motion'
import { ArrowLeft, Code, CheckCircle2, Zap, Globe, Smartphone, Server, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import ServiceQuickNav from '../components/ServiceQuickNav'
import Navbar from '@/sections/Navbar'
import Footer from '@/sections/Footer'
import { GlowCard } from '../components/GlowCard'

function WebDevelopment() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="relative min-h-screen overflow-hidden bg-bg-primary cyber-grid">
      <Navbar />

      {/* Hero Section */}
      <section className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 lg:px-8">
        {/* Glowing background blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-primary/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content (Left Side) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start text-left"
          >
            {/* Service Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-primary/10 border border-cyan-primary/20 mb-6 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-primary animate-pulse shadow-[0_0_10px_rgba(0,212,255,1)]" />
              <span className="text-xs font-bold tracking-widest text-cyan-primary uppercase">Service</span>
            </motion.div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-2xl">
              Web <span className="gradient-text drop-shadow-[0_0_30px_rgba(0,212,255,0.3)]">Development</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-text-secondary max-w-2xl leading-relaxed">
              We build high-performance, secure, and scalable web applications that drive your business forward.
            </p>
          </motion.div>

          {/* Logo / Icon (Right Side) */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            {/* High-fi Icon Wrapper */}
            <div className="relative group">
              <div className="absolute inset-0 bg-cyan-primary/30 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative inline-flex items-center justify-center p-12 sm:p-16 rounded-[3rem] bg-black/50 backdrop-blur-xl border border-cyan-primary/40 shadow-[inset_0_0_30px_rgba(0,212,255,0.2)] group-hover:shadow-[inset_0_0_50px_rgba(0,212,255,0.4),0_0_60px_rgba(0,212,255,0.3)] transition-all duration-700 text-cyan-primary">
                <Code size={100} className="sm:w-32 sm:h-32 drop-shadow-[0_0_20px_rgba(0,212,255,0.8)]" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-6 border-b border-border-subtle relative z-10">
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
              <Globe className="w-12 h-12 text-cyan-primary mb-6" />
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
              <Smartphone className="w-12 h-12 text-cyan-primary mb-6" />
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
              <Server className="w-12 h-12 text-cyan-primary mb-6" />
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
              <Zap className="w-12 h-12 text-cyan-primary mb-6" />
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
              <Shield className="w-12 h-12 text-cyan-primary mb-6" />
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
              <Code className="w-12 h-12 text-cyan-primary mb-6" />
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


      <Footer />
    </div>
  )
}

export default WebDevelopment
