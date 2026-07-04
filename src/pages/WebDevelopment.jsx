import { motion } from 'framer-motion'
import { ArrowLeft, Code, CheckCircle2, Zap, Globe, Smartphone, Server, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import ServiceQuickNav from '../components/ServiceQuickNav'
import './ServicePages.css'

function WebDevelopment() {
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
              <Code size={64} />
            </div>
            <h1>Web Development</h1>
            <p className="service-hero-subtitle">
              Modern, secure, and lightning-fast web applications built with precision engineering.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="service-nav-shell">
        <div className="container">
          <ServiceQuickNav />
        </div>
      </section>

      {/* What We Build */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>What We Build</h2>
            <p className="section-subtitle">
              From concept to deployment, we craft digital experiences that users love and businesses depend on.
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
              <Globe className="feature-icon" />
              <h3>Progressive Web Apps</h3>
              <p>
                Fast, reliable, and engaging experiences that work seamlessly across all devices. 
                Offline capabilities, push notifications, and native app-like performance.
              </p>
            </motion.div>

            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Smartphone className="feature-icon" />
              <h3>Responsive Design</h3>
              <p>
                Pixel-perfect interfaces that adapt beautifully to any screen size. Mobile-first 
                approach ensures optimal experience on smartphones, tablets, and desktops.
              </p>
            </motion.div>

            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Server className="feature-icon" />
              <h3>API Development</h3>
              <p>
                RESTful and GraphQL APIs built for performance and scalability. Clean documentation, 
                versioning, and authentication out of the box.
              </p>
            </motion.div>

            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Zap className="feature-icon" />
              <h3>Performance Optimization</h3>
              <p>
                Sub-second load times through code splitting, lazy loading, CDN delivery, and 
                aggressive caching strategies. Every millisecond counts.
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
              <h3>Security First</h3>
              <p>
                HTTPS everywhere, CSP headers, XSS protection, CSRF tokens, and secure authentication. 
                Security isn't a feature—it's the foundation.
              </p>
            </motion.div>

            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Code className="feature-icon" />
              <h3>Clean Architecture</h3>
              <p>
                Maintainable, testable code with comprehensive documentation. Future developers 
                (including you) will thank you for the clarity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section dark-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>Our Web Development Stack</h2>
            <p className="section-subtitle">
              Battle-tested technologies chosen for reliability, performance, and long-term maintainability.
            </p>
          </motion.div>

          <div className="tech-stack-detail">
            <div className="tech-category-detail">
              <h3>Front-End Frameworks</h3>
              <ul>
                <li><CheckCircle2 size={18} /> <strong>React</strong> - Component-based UI with unmatched ecosystem</li>
                <li><CheckCircle2 size={18} /> <strong>Next.js</strong> - Server-side rendering and static generation</li>
                <li><CheckCircle2 size={18} /> <strong>TypeScript</strong> - Type safety that prevents runtime errors</li>
                <li><CheckCircle2 size={18} /> <strong>Tailwind CSS</strong> - Utility-first styling for rapid development</li>
              </ul>
            </div>

            <div className="tech-category-detail">
              <h3>Back-End & APIs</h3>
              <ul>
                <li><CheckCircle2 size={18} /> <strong>Node.js</strong> - JavaScript runtime for high-performance servers</li>
                <li><CheckCircle2 size={18} /> <strong>Python (Django/FastAPI)</strong> - Robust frameworks for complex logic</li>
                <li><CheckCircle2 size={18} /> <strong>GraphQL</strong> - Efficient data fetching with precise queries</li>
                <li><CheckCircle2 size={18} /> <strong>REST APIs</strong> - Standard, cacheable HTTP endpoints</li>
              </ul>
            </div>

            <div className="tech-category-detail">
              <h3>Databases & Storage</h3>
              <ul>
                <li><CheckCircle2 size={18} /> <strong>PostgreSQL</strong> - Reliable relational database with advanced features</li>
                <li><CheckCircle2 size={18} /> <strong>MongoDB</strong> - Flexible document storage for dynamic data</li>
                <li><CheckCircle2 size={18} /> <strong>Redis</strong> - In-memory caching for instant response times</li>
                <li><CheckCircle2 size={18} /> <strong>AWS S3</strong> - Scalable object storage for media and assets</li>
              </ul>
            </div>

            <div className="tech-category-detail">
              <h3>DevOps & Deployment</h3>
              <ul>
                <li><CheckCircle2 size={18} /> <strong>Docker</strong> - Containerization for consistent environments</li>
                <li><CheckCircle2 size={18} /> <strong>Kubernetes</strong> - Orchestration for scaling and reliability</li>
                <li><CheckCircle2 size={18} /> <strong>CI/CD Pipelines</strong> - Automated testing and deployment</li>
                <li><CheckCircle2 size={18} /> <strong>AWS/Azure/GCP</strong> - Cloud infrastructure that scales with you</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>Our Development Process</h2>
            <p className="section-subtitle">
              From wireframes to production, every step is planned, documented, and validated.
            </p>
          </motion.div>

          <div className="process-timeline">
            <div className="process-step">
              <div className="process-number">01</div>
              <h3>Discovery & Planning</h3>
              <p>
                We start by understanding your business goals, target audience, and technical requirements. 
                Detailed wireframes and user flows ensure everyone's aligned before development begins.
              </p>
            </div>

            <div className="process-step">
              <div className="process-number">02</div>
              <h3>Design & Prototyping</h3>
              <p>
                High-fidelity mockups and interactive prototypes bring your vision to life. User testing 
                validates design decisions before we write production code.
              </p>
            </div>

            <div className="process-step">
              <div className="process-number">03</div>
              <h3>Development & Testing</h3>
              <p>
                Agile sprints with regular check-ins. Automated testing catches bugs early. Code reviews 
                ensure quality and knowledge sharing across the team.
              </p>
            </div>

            <div className="process-step">
              <div className="process-number">04</div>
              <h3>Deployment & Monitoring</h3>
              <p>
                Staged rollouts minimize risk. Real-time monitoring catches issues before users do. 
                Post-launch support ensures smooth operation and continuous improvement.
              </p>
            </div>
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
            <h2>Ready to Build Something Exceptional?</h2>
            <p>
              Let's discuss your project requirements and create a development roadmap tailored to your goals.
            </p>
            <Link to="/#contact" className="primary-button">
              Start Your Project
              <Code size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default WebDevelopment
