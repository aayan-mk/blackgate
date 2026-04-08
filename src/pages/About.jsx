import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Shield, Lock, Code, Terminal, Brain, ArrowRight, 
  CheckCircle2, Zap, Server, Database, Cloud, Cpu
} from 'lucide-react'
import './ServicePages.css'

function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const foundingTeam = [
    {
      name: "Aayan Shaikh",
      role: "Engineering, Web Systems & AI Automation",
      bio: "Responsible for web architecture, performance optimization, and intelligent automation. Focused on building clean, maintainable systems that scale securely. Believes AI should solve real problems with explainable outcomes—not add complexity for its own sake.",
      icon: <Code size={32} />
    },
    {
      name: "Avaish Khan",
      role: "Cybersecurity & Risk",
      bio: "Focused on security-by-design principles, threat awareness, and access control. Ensures every system decision accounts for real-world risks. Approaches engineering with caution and discipline—because one oversight can compromise everything.",
      icon: <Shield size={32} />
    },
    {
      name: "Aniket Gupta",
      role: "Security Architecture & Reliability",
      bio: "Specializes in preventive security practices, reliability planning, and building systems that fail safely. Champions documentation, clear communication, and long-term thinking. Believes the best security incidents are the ones that never happen.",
      icon: <Lock size={32} />
    },
    {
      name: "Vidhaan Ghambire",
      role: "Cyber Forensics & Incident Response",
      bio: "Leads digital investigations, evidence preservation, and post-incident analysis. Expert in reconstructing attack timelines, malware reverse engineering, and ensuring breaches never repeat. Believes every incident is a learning opportunity—and every log tells a story.",
      icon: <Terminal size={32} />
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

  const techStack = [
    {
      category: "Front-End",
      icon: <Code size={24} />,
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      category: "Back-End",
      icon: <Server size={24} />,
      technologies: ["Node.js", "Python", "Go", "GraphQL"]
    },
    {
      category: "Databases",
      icon: <Database size={24} />,
      technologies: ["PostgreSQL", "MongoDB", "Redis", "MySQL"]
    },
    {
      category: "Cloud & DevOps",
      icon: <Cloud size={24} />,
      technologies: ["AWS", "Azure", "Docker", "Kubernetes"]
    },
    {
      category: "AI & Machine Learning",
      icon: <Brain size={24} />,
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "LangChain"]
    },
    {
      category: "Security & Infrastructure",
      icon: <Shield size={24} />,
      technologies: ["Zero Trust", "OAuth 2.0", "Encryption", "CI/CD"]
    }
  ]

  return (
    <div className="service-page">
      {/* Hero Section */}
      <section className="service-hero about-hero">
        <div className="container">
          <Link to="/" className="back-button">
            ← Back to Home
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>About Blackgate</h1>
            <p className="service-hero-subtitle">
              We're not a quick-service agency churning out templates. We're a long-term technology 
              partner invested in your success, built on security, intelligence, and uncompromising standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founding Team */}
      <section className="service-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>Founding Team</h2>
            <p className="section-subtitle">
              Four experts. One mission: Build systems that never compromise.
            </p>
          </motion.div>

          <div className="team-grid">
            {foundingTeam.map((member, index) => (
              <motion.div
                key={index}
                className="team-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="team-icon-wrapper">
                  {member.icon}
                </div>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="service-section dark-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>How We Work</h2>
            <p className="section-subtitle">
              Our process isn't rushed. It's methodical, secure, and designed for long-term success.
            </p>
          </motion.div>

          <div className="process-timeline">
            {workflow.map((phase, index) => (
              <motion.div
                key={index}
                className="process-step"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="step-number">{phase.step}</div>
                <div className="step-content">
                  <h3>{phase.title}</h3>
                  <p>{phase.desc}</p>
                  <ul className="step-activities">
                    {phase.activities.map((activity, i) => (
                      <li key={i}>
                        <CheckCircle2 size={16} />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="service-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>Technology Stack</h2>
            <p className="section-subtitle">
              We use proven, production-grade technologies. No experiments on your infrastructure.
            </p>
          </motion.div>

          <div className="tech-stack-grid">
            {techStack.map((stack, index) => (
              <motion.div
                key={index}
                className="tech-stack-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="tech-icon-wrapper">
                  {stack.icon}
                </div>
                <h3>{stack.category}</h3>
                <div className="tech-list">
                  {stack.technologies.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Philosophy */}
      <section className="service-section dark-bg">
        <div className="container">
          <motion.div
            className="partnership-philosophy"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>A Partner, Not a Vendor</h2>
            <p className="philosophy-intro">
              We're not a quick-service agency churning out templates. We're a 
              <strong> long-term technology partner</strong> invested in your success.
            </p>
            <p>
              We embed with your team. We understand your domain. We architect for the next decade, 
              not just the next quarter. When you work with Blackgate, you're not buying a project—you're 
              building a relationship founded on trust, transparency, and technical excellence.
            </p>
            <div className="partnership-benefits">
              <div className="benefit-item">
                <Zap size={32} />
                <div>
                  <h4>Multi-Year Engagements</h4>
                  <p>We grow with you, not away from you</p>
                </div>
              </div>
              <div className="benefit-item">
                <CheckCircle2 size={32} />
                <div>
                  <h4>Strategic Advisory</h4>
                  <p>Technology decisions that compound over time</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="service-cta-section">
        <div className="container">
          <motion.div
            className="service-cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Ready to Work Together?</h2>
            <p>
              Let's discuss how Blackgate can help secure, scale, and future-proof your business.
            </p>
            <Link to="/#contact" className="cta-button">
              Get in Touch
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
