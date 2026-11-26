import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Shield, Lock, Code, Terminal, Brain, ArrowRight, 
  CheckCircle2, Zap, Server, Database, Cloud
} from 'lucide-react'
import Navbar from '../sections/Navbar'
import Footer from '../sections/Footer'
import AnimatedSection from '../components/AnimatedSection'

function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const foundingTeam = [
    {
      name: "Aayan Shaikh",
      role: "Engineering, Web Systems & AI Automation",
      bio: "Responsible for web architecture, performance optimization, and intelligent automation. Focused on building clean, maintainable systems that scale securely.",
      icon: <Code size={32} />
    },
    {
      name: "Avaish Khan",
      role: "Cybersecurity & Risk",
      bio: "Focused on security-by-design principles, threat awareness, and access control. Ensures every system decision accounts for real-world risks.",
      icon: <Shield size={32} />
    },
    {
      name: "Aniket Gupta",
      role: "Security Architecture & Reliability",
      bio: "Specializes in preventive security practices, reliability planning, and building systems that fail safely. Champions documentation and long-term thinking.",
      icon: <Lock size={32} />
    },
    {
      name: "Vidhan Gambhire",
      role: "Cyber Forensics & Incident Response",
      bio: "Leads digital investigations, evidence preservation, and post-incident analysis. Expert in reconstructing attack timelines and ensuring breaches never repeat.",
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
    <div className="relative min-h-screen overflow-hidden bg-bg-primary cyber-grid pt-24">
      <Navbar />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 mb-20">
        
        {/* Hero Section */}
        <AnimatedSection>
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About Blackgate</h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              We're not a quick-service agency churning out templates. We're a long-term technology 
              partner invested in your success, built on security, intelligence, and uncompromising standards.
            </p>
          </div>
        </AnimatedSection>

        {/* Founding Team */}
        <div className="mb-32">
          <AnimatedSection delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Meet the Founding Team</h2>
              <p className="text-text-secondary text-lg">Four experts. One mission: Build secure, reliable, intelligent systems.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {foundingTeam.map((member, index) => (
                <div key={index} className="p-8 rounded-3xl bg-bg-card gradient-border flex flex-col items-center text-center">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-primary/10 text-cyan-primary mb-6 glow-cyan border border-cyan-primary/20">
                    {member.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-primary text-sm font-semibold mb-4">{member.role}</p>
                  <p className="text-text-secondary text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* How We Work */}
        <div className="mb-32">
          <AnimatedSection delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">How We Work</h2>
              <p className="text-text-secondary text-lg">Our process isn't rushed. It's methodical, secure, and designed for long-term success.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {workflow.map((phase, index) => (
                <div key={index} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-primary/30 transition-colors">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-3xl font-bold text-white/20">{phase.step}</span>
                    <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
                  </div>
                  <p className="text-text-secondary mb-6">{phase.desc}</p>
                  <ul className="space-y-3">
                    {phase.activities.map((activity, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-cyan-primary shrink-0 mt-1" />
                        <span className="text-sm text-text-secondary">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Tech Stack */}
        <div className="mb-32">
          <AnimatedSection delay={0.3}>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Technology Stack</h2>
              <p className="text-text-secondary text-lg">We use proven, production-grade technologies. No experiments on your infrastructure.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {techStack.map((stack, index) => (
                <div key={index} className="p-6 rounded-2xl bg-bg-card border border-white/5">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="text-cyan-primary p-2 bg-cyan-primary/10 rounded-lg">
                      {stack.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white">{stack.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {stack.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-medium bg-white/5 text-text-secondary rounded-full border border-white/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Partnership Philosophy */}
        <AnimatedSection delay={0.4}>
          <div className="p-10 md:p-16 rounded-3xl bg-bg-card gradient-border flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-6">A Partner, Not a Vendor</h2>
              <p className="text-xl text-cyan-primary font-semibold mb-6">
                We're not a quick-service agency churning out templates. We're a long-term technology partner invested in your success.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                We embed with your team. We understand your domain. We architect for the next decade, 
                not just the next quarter. When you work with Blackgate, you're not buying a project—you're 
                building a relationship founded on trust, transparency, and technical excellence.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <Zap size={24} className="text-cyan-primary mt-1" />
                  <div>
                    <h4 className="text-white font-bold mb-1">Multi-Year Engagements</h4>
                    <p className="text-sm text-text-muted">We grow with you, not away from you</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 size={24} className="text-cyan-primary mt-1" />
                  <div>
                    <h4 className="text-white font-bold mb-1">Strategic Advisory</h4>
                    <p className="text-sm text-text-muted">Technology decisions that compound over time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

      </div>
      <Footer />
    </div>
  )
}

export default About
