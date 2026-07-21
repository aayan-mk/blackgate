import { motion } from 'framer-motion'
import { ArrowLeft, Brain, Cpu, Zap, CheckCircle2, Bot, TrendingUp, Target, MessageSquare } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import ServiceQuickNav from '../components/ServiceQuickNav'
import Navbar from '@/sections/Navbar'
import Footer from '@/sections/Footer'
import { GlowCard } from '@/components/GlowCard'

function AISolutions() {
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
              <Brain size={48} className="sm:w-16 sm:h-16" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              AI <span className="text-gradient-cyan">Solutions</span>
            </h1>
            <p className="text-lg sm:text-xl text-text-secondary max-w-2xl leading-relaxed">
              Intelligence at scale. AI systems that automate complexity and unlock insights.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-6 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceQuickNav />
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">AI Capabilities We Deploy</h2>
            <p className="text-lg text-text-secondary">
              From automation to prediction, we build AI systems that deliver measurable business value.
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
              <Cpu className="w-12 h-12 text-accent-cyan mb-6" />
              <h3 className="text-xl font-semibold text-white mb-3">Intelligent Automation</h3>
              <p className="text-text-secondary leading-relaxed">
                Free your team from repetitive tasks. Our AI agents handle data entry, document processing, 
                email triage, scheduling, and routine decision-making—24/7, error-free, infinitely scalable.
              </p>
            </GlowCard>

            <GlowCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8"
            >
              <MessageSquare className="w-12 h-12 text-accent-cyan mb-6" />
              <h3 className="text-xl font-semibold text-white mb-3">Conversational AI</h3>
              <p className="text-text-secondary leading-relaxed">
                AI-powered chatbots and virtual assistants that understand context, remember conversations, 
                and deliver personalized experiences. Multilingual support and 24/7 availability.
              </p>
            </GlowCard>

            <GlowCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-8"
            >
              <TrendingUp className="w-12 h-12 text-accent-cyan mb-6" />
              <h3 className="text-xl font-semibold text-white mb-3">Predictive Analytics</h3>
              <p className="text-text-secondary leading-relaxed">
                Forecast trends, detect anomalies, and identify opportunities before competitors see them. 
                Machine learning models that turn historical data into future insights.
              </p>
            </GlowCard>

            <GlowCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-8"
            >
              <Target className="w-12 h-12 text-accent-cyan mb-6" />
              <h3 className="text-xl font-semibold text-white mb-3">Recommendation Engines</h3>
              <p className="text-text-secondary leading-relaxed">
                Personalized product recommendations, content suggestions, and dynamic pricing. 
                Collaborative filtering and deep learning that increase conversion and engagement.
              </p>
            </GlowCard>

            <GlowCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="p-8"
            >
              <Bot className="w-12 h-12 text-accent-cyan mb-6" />
              <h3 className="text-xl font-semibold text-white mb-3">Computer Vision</h3>
              <p className="text-text-secondary leading-relaxed">
                Object detection, image classification, facial recognition, and quality control automation. 
                Train custom models on your data for specialized use cases.
              </p>
            </GlowCard>

            <GlowCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="p-8"
            >
              <Zap className="w-12 h-12 text-accent-cyan mb-6" />
              <h3 className="text-xl font-semibold text-white mb-3">Natural Language Processing</h3>
              <p className="text-text-secondary leading-relaxed">
                Sentiment analysis, document classification, entity extraction, and text summarization. 
                Turn unstructured text into structured insights at scale.
              </p>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* Business Impact */}
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">How AI Transforms Your Business</h2>
            <p className="text-lg text-text-secondary">
              Real benefits, not hype. Here's what AI actually delivers.
            </p>
          </motion.div>

          <div className="flex flex-col gap-8 max-w-5xl mx-auto">
            <GlowCard className="p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-cyan/20 to-accent-cyan/5 border border-accent-cyan/30 rounded-xl flex items-center justify-center shrink-0">
                <Cpu size={32} className="text-accent-cyan" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-4">Operational Efficiency</h3>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Reduce operational costs by 30-50% through intelligent automation. Tasks that took hours 
                  now complete in seconds. Employees focus on strategic work instead of repetitive drudgery.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-bg-card/50 rounded-lg p-4 border border-accent-cyan/10">
                    <strong className="block text-2xl font-bold text-white mb-1">40+ hours</strong>
                    <span className="text-text-secondary text-sm">saved per employee per week</span>
                  </div>
                  <div className="bg-bg-card/50 rounded-lg p-4 border border-accent-cyan/10">
                    <strong className="block text-2xl font-bold text-white mb-1">99.9%</strong>
                    <span className="text-text-secondary text-sm">accuracy in automated tasks</span>
                  </div>
                </div>
              </div>
            </GlowCard>

            <GlowCard className="p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-cyan/20 to-accent-cyan/5 border border-accent-cyan/30 rounded-xl flex items-center justify-center shrink-0">
                <MessageSquare size={32} className="text-accent-cyan" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-4">Customer Experience</h3>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Instant, personalized support that scales infinitely. AI chatbots handle routine inquiries 
                  while human agents focus on complex issues requiring empathy and judgment.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-bg-card/50 rounded-lg p-4 border border-accent-cyan/10">
                    <strong className="block text-2xl font-bold text-white mb-1">90% faster</strong>
                    <span className="text-text-secondary text-sm">response times</span>
                  </div>
                  <div className="bg-bg-card/50 rounded-lg p-4 border border-accent-cyan/10">
                    <strong className="block text-2xl font-bold text-white mb-1">24/7</strong>
                    <span className="text-text-secondary text-sm">availability, zero downtime</span>
                  </div>
                </div>
              </div>
            </GlowCard>

            <GlowCard className="p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-cyan/20 to-accent-cyan/5 border border-accent-cyan/30 rounded-xl flex items-center justify-center shrink-0">
                <TrendingUp size={32} className="text-accent-cyan" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-4">Data-Driven Decisions</h3>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  Predictive models forecast trends and identify opportunities before the market shifts. 
                  Act on insights in seconds instead of waiting days for manual analysis.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-bg-card/50 rounded-lg p-4 border border-accent-cyan/10">
                    <strong className="block text-2xl font-bold text-white mb-1">85%</strong>
                    <span className="text-text-secondary text-sm">prediction accuracy</span>
                  </div>
                  <div className="bg-bg-card/50 rounded-lg p-4 border border-accent-cyan/10">
                    <strong className="block text-2xl font-bold text-white mb-1">10x faster</strong>
                    <span className="text-text-secondary text-sm">insight generation</span>
                  </div>
                </div>
              </div>
            </GlowCard>

            <GlowCard className="p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-cyan/20 to-accent-cyan/5 border border-accent-cyan/30 rounded-xl flex items-center justify-center shrink-0">
                <Zap size={32} className="text-accent-cyan" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-4">Revenue Growth</h3>
                <p className="text-text-secondary text-lg leading-relaxed mb-6">
                  AI-powered recommendations increase conversion rates and average order value. 
                  Personalization at scale turns browsers into buyers.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-bg-card/50 rounded-lg p-4 border border-accent-cyan/10">
                    <strong className="block text-2xl font-bold text-white mb-1">15-30%</strong>
                    <span className="text-text-secondary text-sm">increase in conversion</span>
                  </div>
                  <div className="bg-bg-card/50 rounded-lg p-4 border border-accent-cyan/10">
                    <strong className="block text-2xl font-bold text-white mb-1">20-40%</strong>
                    <span className="text-text-secondary text-sm">higher average order value</span>
                  </div>
                </div>
              </div>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* AI Tech Stack */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our AI Technology Stack</h2>
            <p className="text-lg text-text-secondary">
              Production-grade frameworks and models deployed at scale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <GlowCard className="p-8">
              <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">Machine Learning Frameworks</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-text-secondary"><CheckCircle2 size={20} className="text-accent-cyan shrink-0 mt-0.5" /> <span><strong className="text-white">TensorFlow</strong> - Google's production ML platform</span></li>
                <li className="flex items-start gap-3 text-text-secondary"><CheckCircle2 size={20} className="text-accent-cyan shrink-0 mt-0.5" /> <span><strong className="text-white">PyTorch</strong> - Flexible research and deployment</span></li>
                <li className="flex items-start gap-3 text-text-secondary"><CheckCircle2 size={20} className="text-accent-cyan shrink-0 mt-0.5" /> <span><strong className="text-white">Scikit-learn</strong> - Classical ML algorithms</span></li>
                <li className="flex items-start gap-3 text-text-secondary"><CheckCircle2 size={20} className="text-accent-cyan shrink-0 mt-0.5" /> <span><strong className="text-white">XGBoost</strong> - Gradient boosting for tabular data</span></li>
              </ul>
            </GlowCard>

            <GlowCard className="p-8">
              <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">Large Language Models</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-text-secondary"><CheckCircle2 size={20} className="text-accent-cyan shrink-0 mt-0.5" /> <span><strong className="text-white">OpenAI GPT-4</strong> - State-of-the-art language understanding</span></li>
                <li className="flex items-start gap-3 text-text-secondary"><CheckCircle2 size={20} className="text-accent-cyan shrink-0 mt-0.5" /> <span><strong className="text-white">Anthropic Claude</strong> - Long-context AI assistant</span></li>
                <li className="flex items-start gap-3 text-text-secondary"><CheckCircle2 size={20} className="text-accent-cyan shrink-0 mt-0.5" /> <span><strong className="text-white">LangChain</strong> - LLM application framework</span></li>
                <li className="flex items-start gap-3 text-text-secondary"><CheckCircle2 size={20} className="text-accent-cyan shrink-0 mt-0.5" /> <span><strong className="text-white">Vector Databases</strong> - Semantic search and RAG</span></li>
              </ul>
            </GlowCard>

            <GlowCard className="p-8">
              <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">Computer Vision</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-text-secondary"><CheckCircle2 size={20} className="text-accent-cyan shrink-0 mt-0.5" /> <span><strong className="text-white">OpenCV</strong> - Image processing and analysis</span></li>
                <li className="flex items-start gap-3 text-text-secondary"><CheckCircle2 size={20} className="text-accent-cyan shrink-0 mt-0.5" /> <span><strong className="text-white">YOLO</strong> - Real-time object detection</span></li>
                <li className="flex items-start gap-3 text-text-secondary"><CheckCircle2 size={20} className="text-accent-cyan shrink-0 mt-0.5" /> <span><strong className="text-white">ResNet/EfficientNet</strong> - Image classification</span></li>
                <li className="flex items-start gap-3 text-text-secondary"><CheckCircle2 size={20} className="text-accent-cyan shrink-0 mt-0.5" /> <span><strong className="text-white">Detectron2</strong> - Facebook's vision framework</span></li>
              </ul>
            </GlowCard>

            <GlowCard className="p-8">
              <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">MLOps & Deployment</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-text-secondary"><CheckCircle2 size={20} className="text-accent-cyan shrink-0 mt-0.5" /> <span><strong className="text-white">MLflow</strong> - Experiment tracking and model registry</span></li>
                <li className="flex items-start gap-3 text-text-secondary"><CheckCircle2 size={20} className="text-accent-cyan shrink-0 mt-0.5" /> <span><strong className="text-white">Kubernetes</strong> - Scalable model serving</span></li>
                <li className="flex items-start gap-3 text-text-secondary"><CheckCircle2 size={20} className="text-accent-cyan shrink-0 mt-0.5" /> <span><strong className="text-white">Docker</strong> - Containerized deployments</span></li>
                <li className="flex items-start gap-3 text-text-secondary"><CheckCircle2 size={20} className="text-accent-cyan shrink-0 mt-0.5" /> <span><strong className="text-white">AWS SageMaker</strong> - Cloud ML infrastructure</span></li>
              </ul>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our AI Implementation Process</h2>
            <p className="text-lg text-text-secondary">
              From proof of concept to production deployment, we de-risk AI adoption at every step.
            </p>
          </motion.div>

          <div className="flex flex-col gap-6 max-w-3xl mx-auto">
            <GlowCard className="p-8 pl-16 relative">
              <div className="absolute left-6 top-6 text-2xl font-bold text-accent-cyan/30">01</div>
              <h3 className="text-xl font-semibold text-white mb-3">Use Case Discovery</h3>
              <p className="text-text-secondary leading-relaxed">
                Identify high-value opportunities where AI delivers measurable ROI. Not every problem needs AI—
                we help you focus on use cases where it genuinely creates value.
              </p>
            </GlowCard>

            <GlowCard className="p-8 pl-16 relative">
              <div className="absolute left-6 top-6 text-2xl font-bold text-accent-cyan/30">02</div>
              <h3 className="text-xl font-semibold text-white mb-3">Data Assessment</h3>
              <p className="text-text-secondary leading-relaxed">
                Evaluate data quality, quantity, and accessibility. AI is only as good as the data it learns from. 
                We help you prepare training data and establish data pipelines.
              </p>
            </GlowCard>

            <GlowCard className="p-8 pl-16 relative">
              <div className="absolute left-6 top-6 text-2xl font-bold text-accent-cyan/30">03</div>
              <h3 className="text-xl font-semibold text-white mb-3">Proof of Concept</h3>
              <p className="text-text-secondary leading-relaxed">
                Build a minimal viable model to validate feasibility and performance. Quick iteration cycles 
                to prove value before committing to full development.
              </p>
            </GlowCard>

            <GlowCard className="p-8 pl-16 relative">
              <div className="absolute left-6 top-6 text-2xl font-bold text-accent-cyan/30">04</div>
              <h3 className="text-xl font-semibold text-white mb-3">Model Development</h3>
              <p className="text-text-secondary leading-relaxed">
                Train, tune, and validate production-grade models. Rigorous testing for accuracy, bias, 
                and edge cases. Explainability and transparency built in.
              </p>
            </GlowCard>

            <GlowCard className="p-8 pl-16 relative">
              <div className="absolute left-6 top-6 text-2xl font-bold text-accent-cyan/30">05</div>
              <h3 className="text-xl font-semibold text-white mb-3">Deployment & Integration</h3>
              <p className="text-text-secondary leading-relaxed">
                Deploy models with proper versioning, monitoring, and rollback capabilities. 
                Integrate with existing systems and workflows seamlessly.
              </p>
            </GlowCard>

            <GlowCard className="p-8 pl-16 relative">
              <div className="absolute left-6 top-6 text-2xl font-bold text-accent-cyan/30">06</div>
              <h3 className="text-xl font-semibold text-white mb-3">Monitoring & Improvement</h3>
              <p className="text-text-secondary leading-relaxed">
                Continuous monitoring for model drift and performance degradation. Regular retraining 
                with new data keeps models accurate as your business evolves.
              </p>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center bg-black border border-border-subtle hover:border-white hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300 rounded-2xl p-10 sm:p-16 max-w-4xl mx-auto backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Deploy Intelligence?</h2>
            <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto">
              Let's identify where AI can transform your operations. Free consultation, zero fluff.
            </p>
            <Link to="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-accent-cyan text-bg-primary font-bold rounded-full hover:bg-accent-teal hover:scale-105 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              Discuss AI Solutions
              <Brain size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AISolutions
