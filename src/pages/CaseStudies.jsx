import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, AlertCircle, Target, Lightbulb } from 'lucide-react'
import './ServicePages.css'

function CaseStudies() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const caseStudies = [
    {
      title: "Academic IT Infrastructure",
      context: "Internship Experience — Large Institutional Environment",
      background: "During an internship within a large academic institution's IT department, we gained exposure to complex, multi-layered infrastructure serving thousands of users across teaching, research, and administrative functions.",
      challenge: "The institution operated legacy authentication systems with fragmented access control across multiple platforms (learning management systems, research databases, administrative portals). Performance bottlenecks during peak registration periods created user frustration and security risks from timeout-related workarounds.",
      approach: "Worked alongside senior engineers to analyze authentication flows, document security vulnerabilities, and propose architectural improvements. Contributed to database query optimization research, access control auditing, and load testing scenarios. Learned secure-by-design principles in environments where uptime and data integrity are non-negotiable.",
      learnings: [
        { insight: "Understanding Legacy Constraints", detail: "Real-world systems carry technical debt—security improvements must work within existing limitations." },
        { insight: "Access Control Complexity", detail: "Role-based permissions at scale require meticulous planning and continuous auditing." },
        { insight: "Performance Under Load", detail: "Systems must be designed for peak demand, not average usage." },
        { insight: "Operational Awareness", detail: "Downtime has cascading consequences—resilience and fallback strategies are essential." }
      ],
      outcome: "This experience taught us that security and performance are deeply intertwined. It shaped Blackgate's commitment to zero-trust architecture and rigorous load planning from day one."
    },
    {
      title: "Healthcare Data Systems",
      context: "Professional Exposure — Regulated, Sensitive Data Environment",
      background: "Through professional exposure within a healthcare-adjacent technology environment, we observed firsthand the operational realities of handling sensitive patient information under strict regulatory frameworks.",
      challenge: "The environment involved disparate systems handling confidential health records, billing data, and care coordination workflows. Data access required multi-layered authentication, audit trails, and compliance with regulatory standards. Manual processes introduced delays and potential for human error in high-stakes scenarios.",
      approach: "Gained understanding of compliance-driven workflows (data encryption standards, audit logging requirements, access revocation protocols). Observed how security policies translate into technical controls. Learned the importance of designing systems that balance security rigor with clinical workflow efficiency—over-engineering security can harm patient outcomes if providers can't access critical information quickly.",
      learnings: [
        { insight: "Compliance is Non-Negotiable", detail: "Regulatory frameworks exist for a reason—security isn't optional in sensitive environments." },
        { insight: "Audit Trails Matter", detail: "Every access event must be logged, traceable, and reviewable for accountability." },
        { insight: "Risk-Aware Design", detail: "Understanding breach consequences shapes every architectural decision." },
        { insight: "Operational Reliability", detail: "Systems protecting critical data must never fail—redundancy and monitoring are mandatory." }
      ],
      outcome: "This exposure instilled a deep respect for data privacy and the life-or-death importance of reliable systems. It's why Blackgate prioritizes end-to-end encryption, role-based access control, and proactive threat monitoring in everything we build."
    },
    {
      title: "AI-Driven Document Processing",
      context: "Internal R&D Project — Pre-Client Validation",
      background: "Before onboarding external clients, Blackgate developed an internal AI prototype to validate our approach to intelligent automation. The project addressed a common business pain point: extracting structured data from unstructured documents (invoices, contracts, forms) with high accuracy and minimal manual intervention.",
      challenge: "Document formats vary wildly (PDFs, scanned images, handwritten forms). Traditional rule-based extraction fails when layouts change or quality degrades. Manual processing is slow, error-prone, and doesn't scale. We needed a solution that could learn from examples and generalize to new document types.",
      approach: "Built a machine learning pipeline using OpenAI's GPT models combined with custom preprocessing logic. Implemented OCR for image-based documents, then used prompt engineering and structured output parsing to extract key fields (dates, amounts, vendor names, line items). Validated accuracy against manually labeled test datasets. Iterated on prompt design and error handling to improve reliability.",
      learnings: [
        { insight: "AI Requires Quality Data", detail: "Model performance depends on training examples and data preprocessing quality." },
        { insight: "Prompt Engineering is Critical", detail: "How you ask determines what you get—precise prompts yield reliable outputs." },
        { insight: "Error Handling Matters", detail: "AI isn't perfect—systems must gracefully handle edge cases and low-confidence outputs." },
        { insight: "Validation Before Deployment", detail: "Internal testing reveals gaps that only surface under real-world conditions." }
      ],
      outcome: "This R&D project proved our ability to deploy AI-driven automation that actually works. We validated technical feasibility, identified edge cases, and built confidence in our approach before offering it to clients. It's now the foundation for our AI solutions offering."
    }
  ]

  const testimonials = [
    {
      quote: "During their internship, the team demonstrated exceptional discipline and technical maturity. They approached every task with a security-first mindset—asking the right questions about access control, data integrity, and system resilience before writing a single line of code. Their work ethic and professional conduct set them apart.",
      author: "Academic Supervisor",
      role: "Computer Science Department, Large Research University",
      rating: 5
    },
    {
      quote: "What impressed me most was their respect for data privacy and their cautious, methodical approach to working in a regulated environment. They understood that in healthcare IT, mistakes aren't just bugs—they're patient safety risks. They handled sensitive systems with the gravity they deserve.",
      author: "Senior IT Administrator",
      role: "Healthcare Technology Environment",
      rating: 5
    },
    {
      quote: "We built Blackgate on a simple principle: quality over speed, always. No shortcuts. No technical debt we're not willing to pay down immediately. If it's not secure, it doesn't ship. If it's not well-documented, it's not done. This standard isn't negotiable—it's who we are.",
      author: "Internal Engineering Review",
      role: "Blackgate Founding Team",
      rating: 5
    }
  ]

  return (
    <div className="service-page">
      {/* Hero Section */}
      <section className="service-hero case-studies-hero">
        <div className="container">
          <Link to="/" className="back-button">
            ← Back to Home
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Case Studies & Experience</h1>
            <p className="service-hero-subtitle">
              Real-world experience in high-stakes environments. These aren't hypotheticals—they're 
              the foundations of how we think, build, and secure systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="service-section">
        <div className="container">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              className="case-study-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="case-study-header">
                <h2>{study.title}</h2>
                <p className="case-study-context">{study.context}</p>
              </div>

              <div className="case-study-section">
                <h3><Target size={20} /> Background</h3>
                <p>{study.background}</p>
              </div>

              <div className="case-study-section">
                <h3><AlertCircle size={20} /> Challenge</h3>
                <p>{study.challenge}</p>
              </div>

              <div className="case-study-section">
                <h3><CheckCircle2 size={20} /> Approach</h3>
                <p>{study.approach}</p>
              </div>

              <div className="case-study-section">
                <h3><Lightbulb size={20} /> Key Learnings</h3>
                <div className="learnings-grid">
                  {study.learnings.map((learning, i) => (
                    <div key={i} className="learning-card">
                      <h4>{learning.insight}</h4>
                      <p>{learning.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="case-study-outcome">
                <h4>Outcome</h4>
                <p>{study.outcome}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="service-section dark-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>What Others Say</h2>
            <p className="section-subtitle">
              Validation from those who've worked with us in real environments.
            </p>
          </motion.div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="testimonial-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div className="testimonial-author">
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
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
            <h2>Ready to Add Your Success Story?</h2>
            <p>
              Let's discuss how Blackgate's experience can help solve your unique challenges.
            </p>
            <Link to="/#contact" className="cta-button">
              Start a Conversation
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies
