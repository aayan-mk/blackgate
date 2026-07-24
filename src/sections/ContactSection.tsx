import { useState } from 'react';
import { Phone, Mail, MapPin, Send, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { GlowCard } from '@/components/GlowCard';

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
    alert('Thank you for your inquiry. We will contact you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <GlowCard className="p-5 flex flex-col h-full bg-bg-card/30 border-border-subtle hover:border-border-subtle/50">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="bg-bg-primary/50 border-border-subtle text-white placeholder:text-text-muted focus:border-accent-cyan focus:ring-accent-cyan/20 h-10"
          />
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@domain.com"
            className="bg-bg-primary/50 border-border-subtle text-white placeholder:text-text-muted focus:border-accent-cyan focus:ring-accent-cyan/20 h-10"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company"
            className="bg-bg-primary/50 border-border-subtle text-white placeholder:text-text-muted focus:border-accent-cyan focus:ring-accent-cyan/20 h-10"
          />
          <select
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleChange}
            className="w-full h-10 px-3 rounded-md bg-bg-primary/50 border border-border-subtle text-text-secondary text-sm focus:border-accent-cyan focus:outline-none focus:ring-1 focus:ring-accent-cyan/20"
          >
            <option value="" className="bg-bg-card text-text-secondary">Inquiry Type</option>
            <option value="sales" className="bg-bg-card text-white">Sales Inquiry</option>
            <option value="support" className="bg-bg-card text-white">Technical Support</option>
            <option value="partnership" className="bg-bg-card text-white">Partnership</option>
            <option value="other" className="bg-bg-card text-white">Other</option>
          </select>
        </div>

        <div>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your security needs..."
            rows={3}
            className="bg-bg-primary/50 border-border-subtle text-white placeholder:text-text-muted focus:border-accent-cyan focus:ring-accent-cyan/20 resize-none text-sm"
          />
        </div>

        <div className="flex gap-3 pt-1">
          <Button
            type="submit"
            className="flex-1 bg-accent-cyan hover:bg-accent-teal text-bg-primary font-semibold h-10 shadow-[0_0_15px_rgba(6,182,212,0.25)] flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            Send a Message
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => setFormData({ name: '', email: '', company: '', inquiryType: '', message: '' })}
            className="border-border-subtle text-text-secondary hover:text-white hover:bg-bg-card-hover h-10 px-4 flex items-center justify-center gap-1.5"
          >
            <X className="w-4 h-4" />
            Cancel
          </Button>
        </div>
      </form>

      {/* Stacked Contact Details */}
      <div className="mt-6 pt-5 border-t border-border-subtle/50 space-y-3.5 text-sm text-text-secondary">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-accent-cyan/10 flex items-center justify-center flex-shrink-0 border border-accent-cyan/20">
            <Phone className="w-4 h-4 text-accent-cyan" />
          </div>
          <a href="tel:+919321982420" className="hover:text-white transition-colors">+91 93219 82420</a>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-accent-cyan/10 flex items-center justify-center flex-shrink-0 border border-accent-cyan/20">
            <Mail className="w-4 h-4 text-accent-cyan" />
          </div>
          <a href="mailto:blackgatesolutions@gmail.com" className="hover:text-white transition-colors">blackgatesolutions@gmail.com</a>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-accent-cyan/10 flex items-center justify-center flex-shrink-0 border border-accent-cyan/20">
            <MapPin className="w-4 h-4 text-accent-cyan" />
          </div>
          <span>Global, Remote First, Secure</span>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="mt-5 text-center">
        <p className="text-[10px] sm:text-xs text-text-muted font-medium tracking-wide">
          SOC 2 Type II Certified • ISO 27001 Compliant • GDPR Ready
        </p>
      </div>
    </GlowCard>
  );
}
