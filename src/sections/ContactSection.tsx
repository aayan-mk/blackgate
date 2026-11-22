import { useState } from 'react';
import { Phone, Mail, MapPin, Send, X, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
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

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in your name, email, and message.');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit inquiry. Please try again.');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        inquiryType: '',
        message: '',
      });
    } catch (err: unknown) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Unable to reach the server right now. Please email us directly.'
      );
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <GlowCard className="p-5 flex flex-col h-full bg-bg-card/30 border-border-subtle hover:border-border-subtle/50">
      {status === 'success' ? (
        <div className="py-8 px-4 flex flex-col items-center justify-center text-center space-y-4">
          <div className="w-14 h-14 rounded-full bg-accent-cyan/15 border border-accent-cyan/40 flex items-center justify-center text-accent-cyan shadow-[0_0_20px_rgba(6,182,212,0.25)]">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-1.5">Inquiry Submitted</h3>
            <p className="text-sm text-text-secondary max-w-xs mx-auto leading-relaxed">
              Thank you for reaching out! Our team has received your message and will review it promptly.
            </p>
          </div>
          <Button
            type="button"
            variant="outline"
            onClick={() => setStatus('idle')}
            className="border-accent-cyan/40 text-accent-cyan hover:bg-accent-cyan/10 hover:border-accent-cyan text-sm h-9 px-4 mt-2"
          >
            Send Another Inquiry
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name *"
              required
              disabled={status === 'loading'}
              className="bg-bg-primary/50 border-border-subtle text-white placeholder:text-text-muted focus:border-accent-cyan focus:ring-accent-cyan/20 h-10"
            />
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@domain.com *"
              required
              disabled={status === 'loading'}
              className="bg-bg-primary/50 border-border-subtle text-white placeholder:text-text-muted focus:border-accent-cyan focus:ring-accent-cyan/20 h-10"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company"
              disabled={status === 'loading'}
              className="bg-bg-primary/50 border-border-subtle text-white placeholder:text-text-muted focus:border-accent-cyan focus:ring-accent-cyan/20 h-10"
            />
            <select
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              disabled={status === 'loading'}
              className="w-full h-10 px-3 rounded-md bg-bg-primary/50 border border-border-subtle text-text-secondary text-sm focus:border-accent-cyan focus:outline-none focus:ring-1 focus:ring-accent-cyan/20"
            >
              <option value="" className="bg-bg-card text-text-secondary">Inquiry Type</option>
              <option value="Web Development" className="bg-bg-card text-white">Web Development</option>
              <option value="Cybersecurity Audit" className="bg-bg-card text-white">Cybersecurity Audit</option>
              <option value="Cyber Forensics" className="bg-bg-card text-white">Cyber Forensics</option>
              <option value="AI Solutions" className="bg-bg-card text-white">AI Solutions</option>
              <option value="General Inquiry" className="bg-bg-card text-white">Other</option>
            </select>
          </div>

          <div>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project or security requirements... *"
              rows={3}
              required
              disabled={status === 'loading'}
              className="bg-bg-primary/50 border-border-subtle text-white placeholder:text-text-muted focus:border-accent-cyan focus:ring-accent-cyan/20 resize-none text-sm"
            />
          </div>

          {status === 'error' && errorMessage && (
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="flex gap-3 pt-1">
            <Button
              type="submit"
              disabled={status === 'loading'}
              className="flex-1 bg-accent-cyan hover:bg-accent-teal text-bg-primary font-semibold h-10 shadow-[0_0_15px_rgba(6,182,212,0.25)] flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send a Message
                </>
              )}
            </Button>
            <Button
              type="button"
              variant="outline"
              disabled={status === 'loading'}
              onClick={() => {
                setStatus('idle');
                setErrorMessage('');
                setFormData({ name: '', email: '', company: '', inquiryType: '', message: '' });
              }}
              className="border-border-subtle text-text-secondary hover:text-white hover:bg-bg-card-hover h-10 px-4 flex items-center justify-center gap-1.5"
            >
              <X className="w-4 h-4" />
              Cancel
            </Button>
          </div>
        </form>
      )}

      {/* Stacked Contact Details */}
      <div className="mt-6 pt-5 border-t border-border-subtle/50 space-y-3.5 text-sm text-text-secondary">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-accent-cyan/10 flex items-center justify-center flex-shrink-0 border border-accent-cyan/20">
            <Phone className="w-4 h-4 text-accent-cyan" />
          </div>
          <a href="tel:+919321216280" className="hover:text-white transition-colors">+91 93212 16280</a>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-accent-cyan/10 flex items-center justify-center flex-shrink-0 border border-accent-cyan/20">
            <Mail className="w-4 h-4 text-accent-cyan" />
          </div>
          <a href="mailto:info@blackgateitsolutions.co.in" className="hover:text-white transition-colors">info@blackgateitsolutions.co.in</a>
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
          Zero-Trust Architecture • Security by Design • Privacy Conscious
        </p>
      </div>
    </GlowCard>
  );
}
