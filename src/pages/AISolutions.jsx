import { motion } from 'framer-motion'
import { ArrowLeft, Brain, Cpu, Zap, CheckCircle2, Bot, TrendingUp, Target, MessageSquare } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import ServiceQuickNav from '../components/ServiceQuickNav'
import './ServicePages.css'

function AISolutions() {
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
              <Brain size={64} />
            </div>
            <h1>AI Solutions</h1>
            <p className="service-hero-subtitle">
              Intelligence at scale. AI systems that automate complexity and unlock insights.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="service-nav-shell">
        <div className="container">
          <ServiceQuickNav />
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>AI Capabilities We Deploy</h2>
            <p className="section-subtitle">
              From automation to prediction, we build AI systems that deliver measurable business value.
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
              <Cpu className="feature-icon" />
              <h3>Intelligent Automation</h3>
              <p>
                Free your team from repetitive tasks. Our AI agents handle data entry, document processing, 
                email triage, scheduling, and routine decision-making—24/7, error-free, infinitely scalable.
              </p>
            </motion.div>

            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <MessageSquare className="feature-icon" />
              <h3>Conversational AI</h3>
              <p>
                AI-powered chatbots and virtual assistants that understand context, remember conversations, 
                and deliver personalized experiences. Multilingual support and 24/7 availability.
              </p>
            </motion.div>

            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <TrendingUp className="feature-icon" />
              <h3>Predictive Analytics</h3>
              <p>
                Forecast trends, detect anomalies, and identify opportunities before competitors see them. 
                Machine learning models that turn historical data into future insights.
              </p>
            </motion.div>

            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Target className="feature-icon" />
              <h3>Recommendation Engines</h3>
              <p>
                Personalized product recommendations, content suggestions, and dynamic pricing. 
                Collaborative filtering and deep learning that increase conversion and engagement.
              </p>
            </motion.div>

            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Bot className="feature-icon" />
              <h3>Computer Vision</h3>
              <p>
                Object detection, image classification, facial recognition, and quality control automation. 
                Train custom models on your data for specialized use cases.
              </p>
            </motion.div>

            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Zap className="feature-icon" />
              <h3>Natural Language Processing</h3>
              <p>
                Sentiment analysis, document classification, entity extraction, and text summarization. 
                Turn unstructured text into structured insights at scale.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="section dark-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>How AI Transforms Your Business</h2>
            <p className="section-subtitle">
              Real benefits, not hype. Here's what AI actually delivers.
            </p>
          </motion.div>

          <div className="ai-benefits-detailed">
            <div className="benefit-detailed">
              <div className="benefit-icon-wrapper">
                <Cpu size={32} />
              </div>
              <h3>Operational Efficiency</h3>
              <p>
                Reduce operational costs by 30-50% through intelligent automation. Tasks that took hours 
                now complete in seconds. Employees focus on strategic work instead of repetitive drudgery.
              </p>
              <div className="benefit-metrics">
                <div className="metric">
                  <strong>40+ hours</strong>
                  <span>saved per employee per week</span>
                </div>
                <div className="metric">
                  <strong>99.9%</strong>
                  <span>accuracy in automated tasks</span>
                </div>
              </div>
            </div>

            <div className="benefit-detailed">
              <div className="benefit-icon-wrapper">
                <MessageSquare size={32} />
              </div>
              <h3>Customer Experience</h3>
              <p>
                Instant, personalized support that scales infinitely. AI chatbots handle routine inquiries 
                while human agents focus on complex issues requiring empathy and judgment.
              </p>
              <div className="benefit-metrics">
                <div className="metric">
                  <strong>90% faster</strong>
                  <span>response times</span>
                </div>
                <div className="metric">
                  <strong>24/7</strong>
                  <span>availability, zero downtime</span>
                </div>
              </div>
            </div>

            <div className="benefit-detailed">
              <div className="benefit-icon-wrapper">
                <TrendingUp size={32} />
              </div>
              <h3>Data-Driven Decisions</h3>
              <p>
                Predictive models forecast trends and identify opportunities before the market shifts. 
                Act on insights in seconds instead of waiting days for manual analysis.
              </p>
              <div className="benefit-metrics">
                <div className="metric">
                  <strong>85%</strong>
                  <span>prediction accuracy</span>
                </div>
                <div className="metric">
                  <strong>10x faster</strong>
                  <span>insight generation</span>
                </div>
              </div>
            </div>

            <div className="benefit-detailed">
              <div className="benefit-icon-wrapper">
                <Zap size={32} />
              </div>
              <h3>Revenue Growth</h3>
              <p>
                AI-powered recommendations increase conversion rates and average order value. 
                Personalization at scale turns browsers into buyers.
              </p>
              <div className="benefit-metrics">
                <div className="metric">
                  <strong>15-30%</strong>
                  <span>increase in conversion</span>
                </div>
                <div className="metric">
                  <strong>20-40%</strong>
                  <span>higher average order value</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Tech Stack */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>Our AI Technology Stack</h2>
            <p className="section-subtitle">
              Production-grade frameworks and models deployed at scale.
            </p>
          </motion.div>

          <div className="tech-stack-detail">
            <div className="tech-category-detail">
              <h3>Machine Learning Frameworks</h3>
              <ul>
                <li><CheckCircle2 size={18} /> <strong>TensorFlow</strong> - Google's production ML platform</li>
                <li><CheckCircle2 size={18} /> <strong>PyTorch</strong> - Flexible research and deployment</li>
                <li><CheckCircle2 size={18} /> <strong>Scikit-learn</strong> - Classical ML algorithms</li>
                <li><CheckCircle2 size={18} /> <strong>XGBoost</strong> - Gradient boosting for tabular data</li>
              </ul>
            </div>

            <div className="tech-category-detail">
              <h3>Large Language Models</h3>
              <ul>
                <li><CheckCircle2 size={18} /> <strong>OpenAI GPT-4</strong> - State-of-the-art language understanding</li>
                <li><CheckCircle2 size={18} /> <strong>Anthropic Claude</strong> - Long-context AI assistant</li>
                <li><CheckCircle2 size={18} /> <strong>LangChain</strong> - LLM application framework</li>
                <li><CheckCircle2 size={18} /> <strong>Vector Databases</strong> - Semantic search and RAG</li>
              </ul>
            </div>

            <div className="tech-category-detail">
              <h3>Computer Vision</h3>
              <ul>
                <li><CheckCircle2 size={18} /> <strong>OpenCV</strong> - Image processing and analysis</li>
                <li><CheckCircle2 size={18} /> <strong>YOLO</strong> - Real-time object detection</li>
                <li><CheckCircle2 size={18} /> <strong>ResNet/EfficientNet</strong> - Image classification</li>
                <li><CheckCircle2 size={18} /> <strong>Detectron2</strong> - Facebook's vision framework</li>
              </ul>
            </div>

            <div className="tech-category-detail">
              <h3>MLOps & Deployment</h3>
              <ul>
                <li><CheckCircle2 size={18} /> <strong>MLflow</strong> - Experiment tracking and model registry</li>
                <li><CheckCircle2 size={18} /> <strong>Kubernetes</strong> - Scalable model serving</li>
                <li><CheckCircle2 size={18} /> <strong>Docker</strong> - Containerized deployments</li>
                <li><CheckCircle2 size={18} /> <strong>AWS SageMaker</strong> - Cloud ML infrastructure</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="section dark-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2>Our AI Implementation Process</h2>
            <p className="section-subtitle">
              From proof of concept to production deployment, we de-risk AI adoption at every step.
            </p>
          </motion.div>

          <div className="process-timeline">
            <div className="process-step">
              <div className="process-number">01</div>
              <h3>Use Case Discovery</h3>
              <p>
                Identify high-value opportunities where AI delivers measurable ROI. Not every problem needs AI—
                we help you focus on use cases where it genuinely creates value.
              </p>
            </div>

            <div className="process-step">
              <div className="process-number">02</div>
              <h3>Data Assessment</h3>
              <p>
                Evaluate data quality, quantity, and accessibility. AI is only as good as the data it learns from. 
                We help you prepare training data and establish data pipelines.
              </p>
            </div>

            <div className="process-step">
              <div className="process-number">03</div>
              <h3>Proof of Concept</h3>
              <p>
                Build a minimal viable model to validate feasibility and performance. Quick iteration cycles 
                to prove value before committing to full development.
              </p>
            </div>

            <div className="process-step">
              <div className="process-number">04</div>
              <h3>Model Development</h3>
              <p>
                Train, tune, and validate production-grade models. Rigorous testing for accuracy, bias, 
                and edge cases. Explainability and transparency built in.
              </p>
            </div>

            <div className="process-step">
              <div className="process-number">05</div>
              <h3>Deployment & Integration</h3>
              <p>
                Deploy models with proper versioning, monitoring, and rollback capabilities. 
                Integrate with existing systems and workflows seamlessly.
              </p>
            </div>

            <div className="process-step">
              <div className="process-number">06</div>
              <h3>Monitoring & Improvement</h3>
              <p>
                Continuous monitoring for model drift and performance degradation. Regular retraining 
                with new data keeps models accurate as your business evolves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <motion.div
            className="service-cta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Ready to Deploy Intelligence?</h2>
            <p>
              Let's identify where AI can transform your operations. Free consultation, zero fluff.
            </p>
            <Link to="/#contact" className="primary-button">
              Discuss AI Solutions
              <Brain size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AISolutions
