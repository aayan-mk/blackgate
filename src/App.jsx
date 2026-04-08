import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Shield, Lock, Code, Brain, Zap, Globe, 
  CheckCircle2, ArrowRight, Server, Database,
  Cpu, Cloud, Terminal, ChevronDown, Menu, X,
  Github, Linkedin, Twitter, Mail, Phone, MapPin
} from 'lucide-react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) setIsMenuOpen(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMenuOpen])

  const services = [
    {
      icon: <Code className="service-icon" />,
      title: "Web Design & Development",
      description: "Your digital presence is your first line of defense. We build experiences that convert visitors into believers.",
      features: [
        "High-performance websites",
        "UI/UX focused on conversion",
        "Secure-by-design architecture"
      ],
      emphasis: "Performance isn't optional. Security isn't negotiable.",
      route: "/services/web-development"
    },
    {
      icon: <Shield className="service-icon" />,
      title: "Cybersecurity Solutions",
      description: "One breach can end your business. We make sure it never happens.",
      features: [
        "Vulnerability assessment & penetration testing",
        "Secure infrastructure planning",
        "Risk analysis and compliance support"
      ],
      emphasis: "Your reputation depends on our vigilance.",
      route: "/services/cybersecurity"
    },
    {
      icon: <Terminal className="service-icon" />,
      title: "Cyber Forensics",
      description: "When incidents happen, evidence matters. We investigate, analyze, and reconstruct digital events with forensic precision.",
      features: [
        "Incident response & digital investigation",
        "Evidence collection & chain of custody",
        "Breach analysis & root cause identification"
      ],
      emphasis: "The truth is in the logs. We find it.",
      route: "/services/cyber-forensics"
    },
    {
      icon: <Brain className="service-icon" />,
      title: "AI Solutions",
      description: "Intelligence that scales your business while you sleep. Automation that compounds.",
      features: [
        "AI chatbots & agents",
        "Business automation",
        "Predictive analytics & intelligent systems"
      ],
      emphasis: "AI isn't the future. It's the present—if you're ready.",
      route: "/services/ai-solutions"
    }
  ]

  const workflow = [
    { 
      step: "01", 
      title: "Discover & Audit", 
      desc: "We start by understanding your business, technical landscape, and security posture. Comprehensive audits reveal vulnerabilities, bottlenecks, and opportunities before a single line of code is written.",
      activities: ["Business requirements analysis", "Security & infrastructure audit", "Threat modeling & risk assessment"]
    },
    { 
      step: "02", 
      title: "Design & Secure", 
      desc: "Architecture comes first. We design systems with security, scalability, and performance built into the foundation—not added later. Every decision is documented, every trade-off justified.",
      activities: ["System architecture & data flow design", "Security framework implementation", "UI/UX prototyping & user testing"]
    },
    { 
      step: "03", 
      title: "Build & Integrate", 
      desc: "Development follows the blueprint. Clean code, automated testing, continuous integration. We build incrementally, validate constantly, and keep you informed every step of the way.",
      activities: ["Agile development sprints", "Automated testing & CI/CD pipelines", "Third-party integrations & API development"]
    },
    { 
      step: "04", 
      title: "Launch, Monitor & Improve", 
      desc: "Deployment isn't the end—it's the beginning. We monitor performance, track security threats, gather user feedback, and continuously optimize. Your system evolves as your business grows.",
      activities: ["Staged deployment & rollback protocols", "24/7 monitoring & incident response", "Performance optimization & feature iteration"]
    }
  ]

  return (
    <div className="app">
      {/* Navigation */}
      <motion.nav 
        className="navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/blackgate-removebg-preview.png" alt="Blackgate logo" className="visually-hidden" />
            <div className="logo-mask" aria-hidden="true"></div>
            <span>BLACKGATE</span>
          </div>
          
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#team">Team</a>
            <Link to="/about">About</Link>
            <Link to="/case-studies">Case Studies</Link>
            <a href="#contact">Contact</a>
            <a href="#contact" className="cta-button">Get Started</a>
          </div>

          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <motion.div 
          className="hero-content"
          style={{ opacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="hero-badge">
              <Lock size={14} />
              <span>Enterprise-Grade Security, Forensics & AI Innovation</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Blackgate — <span className="gradient-text">Secure.</span>
            <br />
            <span className="gradient-text">Intelligent.</span> Uncompromising.
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            We design powerful digital experiences, protect critical systems, investigate security incidents, 
            and build AI-driven solutions for businesses that refuse to take risks.
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a href="#contact" className="primary-button">
              Request a Security Consultation
              <ArrowRight size={18} />
            </a>
            <a href="#services" className="secondary-button">
              Explore Our Solutions
            </a>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="stat">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Uptime SLA</div>
            </div>
            <div className="stat">
              <div className="stat-number">500+</div>
              <div className="stat-label">Systems Secured</div>
            </div>
            <div className="stat">
              <div className="stat-number">100+</div>
              <div className="stat-label">Incidents Investigated</div>
            </div>
            <div className="stat">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Threat Monitoring</div>
            </div>
          </motion.div>
        </motion.div>

        <div className="hero-background">
          <div className="grid-overlay"></div>
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          
          {/* Encrypted Data Streams */}
          <div className="data-streams">
            {[...Array(8)].map((_, i) => (
              <div key={i} className={`data-stream stream-${i + 1}`}>
                <div className="stream-content">
                  {['1', '0', '1', '0', '1', '1', '0', '1', '0'].map((bit, j) => (
                    <span key={j} className="data-bit">{bit}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Hexagonal Pattern */}
          <div className="hex-pattern">
            {[...Array(15)].map((_, i) => (
              <div key={i} className={`hex hex-${i + 1}`}></div>
            ))}
          </div>

          {/* Scanning Lines */}
          <div className="scan-line scan-line-1"></div>
          <div className="scan-line scan-line-2"></div>

          {/* Circuit Connections */}
          <svg className="circuit-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <line x1="0" y1="20" x2="100" y2="20" className="circuit-line" />
            <line x1="0" y1="50" x2="100" y2="50" className="circuit-line" />
            <line x1="0" y1="80" x2="100" y2="80" className="circuit-line" />
            <circle cx="20" cy="20" r="0.5" className="circuit-node" />
            <circle cx="50" cy="50" r="0.5" className="circuit-node" />
            <circle cx="80" cy="80" r="0.5" className="circuit-node" />
          </svg>
        </div>

        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown />
        </motion.div>
      </section>

      {/* About Section */}
      <section className="about section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>About Blackgate</h2>
            <p className="section-subtitle">
              Blackgate was founded on one belief:
            </p>
          </motion.div>

          <motion.div
            className="about-manifesto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="manifesto-text">
              Digital systems should be <span className="highlight">beautiful</span>, 
              <span className="highlight"> intelligent</span>, and 
              <span className="highlight"> secure by default</span> — not patched later.
            </h3>
          </motion.div>

          <motion.div
            className="about-description"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p>
              We don't believe in retrofitting security. We don't accept fragile architectures. 
              We refuse to separate design from engineering. And when incidents happen, we don't just clean up—we investigate, learn, and prevent recurrence.
            </p>
            <p>
              At Blackgate, we build systems where <strong>design thinking</strong>, 
              <strong> security engineering</strong>, <strong>forensic investigation</strong>, and <strong>artificial intelligence</strong> converge 
              from day one. Every pixel deliberate. Every endpoint protected. Every incident analyzed. Every algorithm purposeful.
            </p>
          </motion.div>

          <div className="about-pillars">
            <motion.div
              className="pillar-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="pillar-icon-wrapper">
                <Code className="pillar-icon" />
              </div>
              <h3>Design Thinking</h3>
              <p>
                User experience isn't decoration—it's architecture. We craft interfaces that 
                feel intuitive because they're built on empathy, research, and relentless iteration.
              </p>
            </motion.div>

            <motion.div
              className="pillar-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="pillar-icon-wrapper">
                <Shield className="pillar-icon" />
              </div>
              <h3>Security Engineering</h3>
              <p>
                Security is not a feature—it's the foundation. From zero-trust architectures to 
                encrypted data flows, we engineer systems that withstand real-world threats.
              </p>
            </motion.div>

            <motion.div
              className="pillar-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="pillar-icon-wrapper">
                <Terminal className="pillar-icon" />
              </div>
              <h3>Cyber Forensics</h3>
              <p>
                When breaches occur, evidence tells the story. We investigate digital incidents with forensic rigor, 
                uncovering root causes, preserving evidence, and ensuring attacks never succeed twice.
              </p>
            </motion.div>

            <motion.div
              className="pillar-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="pillar-icon-wrapper">
                <Brain className="pillar-icon" />
              </div>
              <h3>Artificial Intelligence</h3>
              <p>
                AI isn't hype—it's infrastructure. We deploy machine learning where it matters: 
                automating complexity, predicting risks, and scaling intelligence.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="about-partnership"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="partnership-content">
              <h3>A Partner, Not a Vendor</h3>
              <p>
                We're not a quick-service agency churning out templates. We're a 
                <strong> long-term technology partner</strong> invested in your success.
              </p>
              <p>
                We embed with your team. We understand your domain. We architect for the next decade, 
                not just the next quarter. When you work with Blackgate, you're not buying a project—you're 
                building a relationship founded on trust, transparency, and technical excellence.
              </p>
              <div className="partnership-stats">
                <div className="partnership-stat">
                  <Zap className="stat-icon" />
                  <div>
                    <strong>Multi-Year Engagements</strong>
                    <span>We grow with you, not away from you</span>
                  </div>
                </div>
                <div className="partnership-stat">
                  <CheckCircle2 className="stat-icon" />
                  <div>
                    <strong>Strategic Advisory</strong>
                    <span>Technology decisions that compound over time</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>Our Services</h2>
            <p className="section-subtitle">
              Four mission-critical pillars. One uncompromising standard.
            </p>
          </motion.div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="service-header">
                  <div className="service-icon-wrapper">
                    {service.icon}
                  </div>
                  <h3>{service.title}</h3>
                </div>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, i) => (
                    <li key={i}>
                      <CheckCircle2 size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="service-emphasis">
                  <Lock size={14} />
                  <span>{service.emphasis}</span>
                </div>
                <Link to={service.route} className="service-link">
                  Learn More <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="services-cta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3>Not sure which service you need?</h3>
            <p>We'll analyze your situation and recommend the right solution. No sales pitch. Just honest technical guidance.</p>
            <a href="#contact" className="primary-button">
              Schedule a Consultation
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Quick Overview - Detailed content moved to service pages */}
      <section className="quick-overview section dark-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>Why Blackgate?</h2>
            <p className="section-subtitle">
              Security-first engineering. AI-powered intelligence. Forensic precision.
            </p>
          </motion.div>

          <motion.div
            className="overview-stats"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="overview-stat">
              <Shield size={48} />
              <h3>100%</h3>
              <p>Systems Secured</p>
            </div>
            <div className="overview-stat">
              <Terminal size={48} />
              <h3>24/7</h3>
              <p>Threat Monitoring</p>
            </div>
            <div className="overview-stat">
              <Brain size={48} />
              <h3>AI-Powered</h3>
              <p>Automation</p>
            </div>
          </motion.div>

          <motion.div
            className="overview-cta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p>Explore our services in detail to see how we can protect and scale your business.</p>
            <div className="overview-cta-buttons">
              <Link to="/services/web-development" className="secondary-button">
                Web Development
                <ArrowRight size={18} />
              </Link>
              <Link to="/services/cybersecurity" className="secondary-button">
                Cybersecurity
                <ArrowRight size={18} />
              </Link>
              <Link to="/services/ai-solutions" className="secondary-button">
                AI Solutions
                <ArrowRight size={18} />
              </Link>
              <Link to="/services/cyber-forensics" className="secondary-button">
                Cyber Forensics
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>



      {/* Why Blackgate */}
      <section id="why-blackgate" className="why-blackgate section dark-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>The Difference</h2>
            <p className="section-subtitle">
              What sets Blackgate apart isn't what we say—it's how we build.
            </p>
          </motion.div>

          <div className="why-differences">
            <motion.div
              className="difference-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="difference-number">01</div>
              <div className="difference-content">
                <h3>Security-First Engineering</h3>
                <p>
                  We don't bolt security on afterward. Every line of code, every architecture decision, 
                  every deployment starts with threat modeling. Security isn't a feature—it's the foundation 
                  upon which everything else is built.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="difference-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="difference-number">02</div>
              <div className="difference-content">
                <h3>Design That Serves Function, Not Ego</h3>
                <p>
                  Beautiful interfaces mean nothing if they don't solve problems. We design for clarity, 
                  efficiency, and user intent—not awards. Every pixel has a purpose. Every interaction 
                  removes friction. Form follows function, always.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="difference-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="difference-number">03</div>
              <div className="difference-content">
                <h3>AI-Driven Mindset</h3>
                <p>
                  We leverage artificial intelligence where it creates genuine value—automation, 
                  predictive analysis, intelligent decision-making. Not because it's trendy, but because 
                  it compounds your capabilities while reducing error rates.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="difference-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="difference-number">04</div>
              <div className="difference-content">
                <h3>Transparent Processes</h3>
                <p>
                  You know what we're building, when, and why. Weekly updates, clear documentation, 
                  open communication channels. No surprises, no excuses. If something goes wrong, 
                  you hear it from us first—with a solution already in motion.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="difference-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="difference-number">05</div>
              <div className="difference-content">
                <h3>Long-Term Support & Evolution</h3>
                <p>
                  We build systems that adapt. Technology shifts, threats evolve, businesses grow—your 
                  infrastructure should too. We don't disappear after launch. We monitor, maintain, and 
                  evolve your systems as your needs change.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="why-cta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="why-cta-text">
              We're not for everyone. We're for businesses that understand that quality, 
              security, and longevity matter more than speed to market at any cost.
            </p>
            <a href="#contact" className="primary-button">
              Start a Conversation
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Learn More About Us */}
      <section className="about-cta-section section">
        <div className="container">
          <motion.div
            className="cta-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Want to Know How We Work?</h2>
            <p>
              Explore our team, technology stack, and proven development process.
            </p>
            <Link to="/about" className="primary-button">
              Learn About Blackgate
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Case Studies CTA */}
      <section className="about-cta-section section dark-section">
        <div className="container">
          <motion.div
            className="cta-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>See Our Real-World Experience</h2>
            <p>
              Explore case studies from academic infrastructure, healthcare systems, and AI automation projects.
            </p>
            <Link to="/case-studies" className="primary-button">
              View Case Studies
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>Meet the Founding Team</h2>
            <p className="section-subtitle">
              Four experts. One mission: Build secure, reliable, intelligent systems.
            </p>
          </motion.div>

          <div className="team-grid">
            <motion.div
              className="team-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
            >
              <div className="team-icon-wrapper">
                <Code size={32} />
              </div>
              <h3 className="team-name">Aayan Shaikh</h3>
              <div className="team-role">Engineering, Web Systems & AI Automation</div>
              <p className="team-bio">
                Responsible for web architecture, performance optimization, and intelligent automation. 
                Focused on building clean, maintainable systems that scale securely.
              </p>
            </motion.div>

            <motion.div
              className="team-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="team-icon-wrapper">
                <Shield size={32} />
              </div>
              <h3 className="team-name">Avaish Khan</h3>
              <div className="team-role">Cybersecurity & Risk</div>
              <p className="team-bio">
                Focused on security-by-design principles, threat awareness, and access control. 
                Ensures every system decision accounts for real-world risks.
              </p>
            </motion.div>

            <motion.div
              className="team-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="team-icon-wrapper">
                <Lock size={32} />
              </div>
              <h3 className="team-name">Aniket Gupta</h3>
              <div className="team-role">Security Architecture & Reliability</div>
              <p className="team-bio">
                Specializes in preventive security practices, reliability planning, and building systems 
                that fail safely. Champions documentation and long-term thinking.
              </p>
            </motion.div>

            <motion.div
              className="team-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="team-icon-wrapper">
                <Terminal size={32} />
              </div>
              <h3 className="team-name">Vidhaan Ghambire</h3>
              <div className="team-role">Cyber Forensics & Incident Response</div>
              <p className="team-bio">
                Leads digital investigations, evidence preservation, and post-incident analysis. 
                Expert in reconstructing attack timelines and ensuring breaches never repeat.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="team-cta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p>Want to learn more about our approach and expertise?</p>
            <Link to="/about" className="secondary-button">
              Learn More About Us
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact & CTA */}
      <section id="contact" className="contact section">
        <div className="container">
          <motion.div
            className="contact-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-header">
              <motion.div
                className="contact-badge"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Shield size={16} />
                <span>Step Inside the Gate</span>
              </motion.div>
              
              <h2>Secure Your Digital Future with Blackgate</h2>
              <p className="contact-subtitle">
                Let's discuss how we can fortify your systems, protect your data, and scale your operations.
              </p>
            </div>

            <div className="contact-grid">
              <motion.div
                className="contact-info"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3>Get in Touch</h3>
                <p className="contact-info-text">
                  Reach out directly, or fill out the form. We respond to every inquiry within 24 hours.
                </p>

                <div className="contact-methods">
                  <a href="mailto:hello@blackgate.io" className="contact-method">
                    <div className="method-icon">
                      <Mail size={24} />
                    </div>
                    <div className="method-details">
                      <strong>Email Us</strong>
                      <span>blackgateitsolutions@gmail.com</span>
                    </div>
                  </a>

                  <a href="https://wa.me/919321216280" target="_blank" rel="noopener noreferrer" className="contact-method">
                    <div className="method-icon whatsapp">
                      <Phone size={24} />
                    </div>
                    <div className="method-details">
                      <strong>WhatsApp</strong>
                      <span>+919321216280</span>
                    </div>
                  </a>

                  <div className="contact-method">
                    <div className="method-icon">
                      <MapPin size={24} />
                    </div>
                    <div className="method-details">
                      <strong>Location</strong>
                      <span>Global. Remote-first. Secure.</span>
                    </div>
                  </div>
                </div>

                <div className="contact-assurance">
                  <Lock size={16} />
                  <span>Confidential. Secure. No spam.</span>
                </div>
              </motion.div>

              <motion.form
                className="contact-form"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input 
                    type="text" 
                    id="name"
                    placeholder="John Doe" 
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email *</label>
                  <input 
                    type="email" 
                    id="email"
                    placeholder="john@company.com" 
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input 
                    type="text" 
                    id="company"
                    placeholder="Your Company Name" 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Tell Us About Your Project *</label>
                  <textarea 
                    id="message"
                    placeholder="What challenges are you facing? What are your security concerns? What are your goals?"
                    rows="5" 
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-button">
                  Send Secure Message
                  <Shield size={18} />
                </button>

                <p className="form-note">
                  All communications are encrypted and confidential. We never share your information.
                </p>
              </motion.form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">
                <img src="/blackgate-removebg-preview.png" alt="Blackgate logo" className="visually-hidden" />
                <div className="logo-mask" aria-hidden="true"></div>
                <span>BLACKGATE</span>
              </div>
              <p className="footer-tagline">
                Secure. Intelligent. Uncompromising.
              </p>
              <p className="footer-description">
                Building digital systems where security, intelligence, forensics, and design converge.
              </p>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <h4>Services</h4>
                <ul>
                  <li><Link to="/services/web-development">Web Development</Link></li>
                  <li><Link to="/services/cybersecurity">Cybersecurity</Link></li>
                  <li><Link to="/services/cyber-forensics">Cyber Forensics</Link></li>
                  <li><Link to="/services/ai-solutions">AI Solutions</Link></li>
                </ul>
              </div>

              <div className="footer-column">
                <h4>Company</h4>
                <ul>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/case-studies">Case Studies</Link></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>

              <div className="footer-column">
                <h4>Legal</h4>
                <ul>
                  <li><Link to="/privacy">Privacy Policy</Link></li>
                  <li><Link to="/terms">Terms of Service</Link></li>
                  <li><Link to="/security">Security</Link></li>
                </ul>
              </div>

              <div className="footer-column">
                <h4>Connect</h4>
                <ul className="social-links">
                  <li>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <Github size={18} />
                      <span>GitHub</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <Linkedin size={18} />
                      <span>LinkedIn</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                      <Twitter size={18} />
                      <span>Twitter</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 Blackgate. All rights reserved.</p>
            <div className="footer-bottom-links">
              <Link to="/privacy">Privacy</Link>
              <span className="separator">•</span>
              <Link to="/terms">Terms</Link>
              <span className="separator">•</span>
              <Link to="/security">Security</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
