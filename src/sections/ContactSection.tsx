import { useState } from 'react';
import { Phone, Mail, MapPin, Send, X, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { GlowCard } from '@/components/GlowCard';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: '',
    message: '',
  });
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Box 1: Contact Information */}
      <GlowCard className="p-8 sm:p-10 flex flex-col justify-between bg-bg-card/40 backdrop-blur-xl border border-white/5 shadow-2xl rounded-2xl relative overflow-hidden group">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-accent-cyan/10 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        
        <div className="relative z-10">
          <div className="mb-10">
            <h3 className="text-3xl font-bold text-white tracking-tight">Get in Touch</h3>
            <p className="text-text-secondary text-sm mt-3 leading-relaxed">
              Have a question or need a custom solution? Our team is ready to help you build resilient and secure operations.
            </p>
          </div>

          <div className="space-y-6 text-sm text-text-secondary">
            <div className="flex items-center gap-4 group/item">
              <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center border border-accent-cyan/20 group-hover/item:bg-accent-cyan transition-all duration-300">
                <Phone className="w-5 h-5 text-accent-cyan group-hover/item:text-bg-primary transition-colors" />
              </div>
              <a href="tel:+919321982420" className="hover:text-white transition-colors text-base font-medium">+91 93219 82420</a>
            </div>
            
            <div className="flex items-center gap-4 group/item">
              <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center border border-accent-cyan/20 group-hover/item:bg-accent-cyan transition-all duration-300">
                <Mail className="w-5 h-5 text-accent-cyan group-hover/item:text-bg-primary transition-colors" />
              </div>
              <a href="mailto:blackgatesolutions@gmail.com" className="hover:text-white transition-colors text-base font-medium break-all">blackgatesolutions@gmail.com</a>
            </div>
            
            <div className="flex items-center gap-4 group/item">
              <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center border border-accent-cyan/20 group-hover/item:bg-accent-cyan transition-all duration-300">
                <MapPin className="w-5 h-5 text-accent-cyan group-hover/item:text-bg-primary transition-colors" />
              </div>
              <span className="text-base font-medium">Global, Remote First, Secure</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-12 pt-6 border-t border-white/10">
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-text-muted font-medium tracking-wide w-full justify-center">
            <Shield className="w-4 h-4 text-accent-cyan shrink-0" />
            <span>SOC 2 Type II Certified • ISO 27001 • GDPR Ready</span>
          </p>
        </div>
      </GlowCard>

      {/* Box 2: The Form */}
      <GlowCard className="p-8 sm:p-10 flex flex-col bg-bg-card/40 backdrop-blur-xl border border-white/5 shadow-2xl rounded-2xl relative overflow-hidden group">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-cyan/20 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        <form onSubmit={handleSubmit} className="space-y-5 relative z-10 flex-1 flex flex-col">
          {showMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3 text-sm text-cyan-primary bg-cyan-primary/10 border border-cyan-primary/20 rounded-xl text-center"
            >
              We are working on it. Please contact us at blackgatesolutions@gmail.com
            </motion.div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="bg-bg-primary/60 border-white/10 text-white placeholder:text-text-muted focus:border-accent-cyan focus:ring-accent-cyan/20 h-12 rounded-xl px-4 transition-all"
            />
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@domain.com"
              className="bg-bg-primary/60 border-white/10 text-white placeholder:text-text-muted focus:border-accent-cyan focus:ring-accent-cyan/20 h-12 rounded-xl px-4 transition-all"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Input
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company"
              className="bg-bg-primary/60 border-white/10 text-white placeholder:text-text-muted focus:border-accent-cyan focus:ring-accent-cyan/20 h-12 rounded-xl px-4 transition-all"
            />
            <div className="relative">
              <select
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                className="w-full h-12 px-4 rounded-xl bg-bg-primary/60 border border-white/10 text-text-secondary text-sm focus:border-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/20 appearance-none transition-all"
              >
                <option value="" className="bg-bg-card text-text-secondary">Inquiry Type</option>
                <option value="sales" className="bg-bg-card text-white">Sales Inquiry</option>
                <option value="support" className="bg-bg-card text-white">Technical Support</option>
                <option value="partnership" className="bg-bg-card text-white">Partnership</option>
                <option value="other" className="bg-bg-card text-white">Other</option>
              </select>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                <svg className="w-4 h-4 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your security needs..."
              className="bg-bg-primary/60 border-white/10 text-white placeholder:text-text-muted focus:border-accent-cyan focus:ring-accent-cyan/20 resize-none text-sm p-4 rounded-xl transition-all h-full min-h-[120px]"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 mt-auto">
            <Button
              type="submit"
              className="flex-1 bg-accent-cyan hover:bg-accent-teal text-bg-primary font-bold h-12 rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Send Message
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => setFormData({ name: '', email: '', company: '', inquiryType: '', message: '' })}
              className="border-white/10 text-text-secondary hover:text-white hover:bg-white/5 h-12 rounded-xl px-6 flex items-center justify-center gap-2 transition-all"
            >
              <X className="w-4 h-4" />
              Clear
            </Button>
          </div>
        </form>
      </GlowCard>
    </div>
  );
}
