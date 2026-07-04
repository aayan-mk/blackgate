import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, X } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+919321216280',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'blackgateitsolutions@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Global. Remote-first. Secure.',
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your inquiry. We will contact you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <ScrollReveal>
            <div className="bg-bg-card border border-border-subtle rounded-xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Secure your digital assets
              </h2>
              <p className="text-text-secondary mb-6">
                Get in touch with our security experts
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-text-secondary mb-1">Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="bg-bg-secondary border-border-subtle text-white placeholder:text-text-muted focus:border-accent-cyan focus:ring-accent-cyan/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-text-secondary mb-1">Email</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="bg-bg-secondary border-border-subtle text-white placeholder:text-text-muted focus:border-accent-cyan focus:ring-accent-cyan/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-text-secondary mb-1">Company</label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company"
                      className="bg-bg-secondary border-border-subtle text-white placeholder:text-text-muted focus:border-accent-cyan focus:ring-accent-cyan/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-text-secondary mb-1">Inquiry Type</label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full h-10 px-3 rounded-md bg-bg-secondary border border-border-subtle text-white text-sm focus:border-accent-cyan focus:outline-none focus:ring-1 focus:ring-accent-cyan/20"
                    >
                      <option value="" className="bg-bg-card">Select type</option>
                      <option value="sales" className="bg-bg-card">Sales Inquiry</option>
                      <option value="support" className="bg-bg-card">Technical Support</option>
                      <option value="partnership" className="bg-bg-card">Partnership</option>
                      <option value="other" className="bg-bg-card">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-text-secondary mb-1">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your security needs..."
                    rows={4}
                    className="bg-bg-secondary border-border-subtle text-white placeholder:text-text-muted focus:border-accent-cyan focus:ring-accent-cyan/20 resize-none"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    type="submit"
                    className="flex-1 bg-accent-cyan hover:bg-accent-teal text-bg-primary font-medium"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Submit Information
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setFormData({ name: '', email: '', company: '', inquiryType: '', message: '' })}
                    className="border-border-subtle text-text-secondary hover:text-white hover:bg-bg-card-hover"
                  >
                    <X className="w-4 h-4 mr-2" />
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Contact Information
                </h3>
                <p className="text-text-secondary">
                  Our security experts are available 24/7 to assist you with your cybersecurity needs.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-bg-card border border-border-subtle rounded-lg hover:border-accent-cyan/30 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-accent-cyan" />
                    </div>
                    <div>
                      <p className="text-sm text-text-muted">{info.label}</p>
                      <p className="text-white">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Trust Badge */}
              <div className="p-4 bg-accent-cyan/5 border border-accent-cyan/20 rounded-lg">
                <p className="text-sm text-accent-cyan text-center">
                  SOC 2 Type II Certified • ISO 27001 Compliant • GDPR Ready
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
