import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Code2,
  ShieldAlert,
  Layers,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowLeft,
  Phone,
  Mail,
  User,
  GraduationCap,
  Globe,
  ShieldCheck,
  Briefcase,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { GlowCard } from '@/components/GlowCard';
import logoImage from '@/assets/white-logo.png';

type PollOption = 'Development' | 'VAPT' | 'Both';

interface OptionCard {
  id: PollOption;
  title: string;
  badge: string;
  description: string;
  icon: typeof Code2;
}

const OPTIONS: OptionCard[] = [
  {
    id: 'Development',
    title: '1. Development',
    badge: 'Software Engineering Track',
    description:
      'Full Stack Web & App Engineering. Build high-scale microservices, modern frontend interfaces, reactive APIs & cloud-native systems.',
    icon: Code2,
  },
  {
    id: 'VAPT',
    title: '2. VAPT',
    badge: 'Cybersecurity & Offensive Security Track',
    description:
      'Vulnerability Assessment & Penetration Testing. Real-world ethical hacking, API & web penetration audits, security scanners & threat defense.',
    icon: ShieldAlert,
  },
  {
    id: 'Both',
    title: '3. Both',
    badge: 'Full-Spectrum DevSecOps Track',
    description:
      'Dual specialization: Secure Software Architecture with active offensive security auditing. Learn to build rock-solid systems and break them.',
    icon: Layers,
  },
];

export default function PollSurvey() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: 'Both' as PollOption,
    college: '',
    portfolio: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelectInterest = (option: PollOption) => {
    setFormData((prev) => ({
      ...prev,
      interest: option,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setStatus('error');
      setErrorMessage('Please provide your name, phone number, and email.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');

    try {
      const res = await fetch('/api/poll/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit application. Please try again.');
      }

      setStatus('success');
    } catch (err: unknown) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error ? err.message : 'Unable to submit application. Please try again later.'
      );
    }
  };

  return (
    <div className="relative min-h-screen text-white bg-bg-primary overflow-x-hidden selection:bg-accent-cyan/30 py-12 px-4 sm:px-6 lg:px-8">
      {/* Background ambient glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-accent-cyan/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[300px] bg-accent-teal/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-3xl mx-auto z-10">
        {/* Top Header */}
        <div className="flex items-center justify-between mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-text-secondary hover:text-white transition-colors py-2 px-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-accent-cyan/40 backdrop-blur-md"
          >
            <ArrowLeft className="w-4 h-4 text-accent-cyan" />
            <span>Blackgate Home</span>
          </Link>

          <div className="flex items-center gap-2.5">
            <img src={logoImage} alt="Blackgate" className="h-6 w-auto" />
            <span className="text-xs uppercase tracking-widest text-accent-cyan font-mono font-bold">
              Internship 2026/2027
            </span>
          </div>
        </div>

        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 sm:p-12 rounded-3xl bg-black/60 border border-accent-cyan/40 backdrop-blur-2xl shadow-[0_0_50px_rgba(6,182,212,0.15)] text-center space-y-6"
          >
            <div className="w-20 h-20 rounded-full bg-accent-cyan/15 border border-accent-cyan/40 flex items-center justify-center text-accent-cyan mx-auto shadow-[0_0_30px_rgba(6,182,212,0.3)]">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <h2 className="text-3xl font-black tracking-tight text-white mb-3">
                Application Received!
              </h2>
              <p className="text-base text-text-secondary max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-white font-medium">{formData.name}</span>! Your interest in the{' '}
                <span className="text-accent-cyan font-semibold">{formData.interest} Internship Track</span> has been
                registered. Our talent & technical team will review your profile and reach out via email/phone.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 max-w-sm mx-auto text-left text-xs text-text-secondary space-y-2">
              <div className="flex justify-between">
                <span>Selected Track:</span>
                <span className="text-accent-cyan font-semibold">{formData.interest}</span>
              </div>
              <div className="flex justify-between">
                <span>Contact Email:</span>
                <span className="text-white font-medium">{formData.email}</span>
              </div>
              <div className="flex justify-between">
                <span>Phone:</span>
                <span className="text-white font-medium">{formData.phone}</span>
              </div>
              {formData.college && (
                <div className="flex justify-between">
                  <span>College/Org:</span>
                  <span className="text-white font-medium truncate max-w-[180px]">{formData.college}</span>
                </div>
              )}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                variant="outline"
                onClick={() => {
                  setStatus('idle');
                  setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    interest: 'Both',
                    college: '',
                    portfolio: '',
                    message: '',
                  });
                }}
                className="border-white/20 text-white hover:bg-white/10 h-11 px-6 rounded-xl text-sm"
              >
                Submit Another Response
              </Button>
              <Link to="/">
                <Button className="bg-accent-cyan hover:bg-accent-teal text-bg-primary font-bold h-11 px-6 rounded-xl text-sm shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                  Explore Blackgate Website
                </Button>
              </Link>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Title Section */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/25 text-accent-cyan text-xs font-semibold tracking-wide uppercase mb-3">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Blackgate Internship Track Poll</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
                Choose Your Internship Domain
              </h1>
              <p className="text-sm sm:text-base text-text-secondary max-w-lg mx-auto">
                Are you looking to write high-performance software, master ethical hacking & VAPT, or master both?
                Select your preferred track below to apply.
              </p>
            </div>

            {/* Main Form Card */}
            <GlowCard className="p-6 sm:p-10 bg-bg-card/40 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* 1. Internship Track Radio Selector */}
                <div className="space-y-3">
                  <label className="text-xs font-mono font-semibold text-accent-cyan uppercase tracking-wider block">
                    Step 1: Select Your Internship Track <span className="text-accent-cyan">*</span>
                  </label>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                    {OPTIONS.map((opt) => {
                      const Icon = opt.icon;
                      const isSelected = formData.interest === opt.id;

                      return (
                        <div
                          key={opt.id}
                          onClick={() => handleSelectInterest(opt.id)}
                          className={`relative cursor-pointer p-4 rounded-2xl border transition-all duration-300 flex flex-col justify-between group/card ${
                            isSelected
                              ? 'bg-accent-cyan/15 border-accent-cyan shadow-[0_0_25px_rgba(6,182,212,0.25)]'
                              : 'bg-bg-primary/50 border-white/10 hover:border-white/30 hover:bg-white/5'
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between mb-3">
                              <div
                                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                                  isSelected
                                    ? 'bg-accent-cyan text-bg-primary font-bold'
                                    : 'bg-white/10 text-accent-cyan group-hover/card:bg-accent-cyan/20'
                                }`}
                              >
                                <Icon className="w-4 h-4" />
                              </div>

                              {/* Radio Indicator */}
                              <div
                                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                                  isSelected
                                    ? 'border-accent-cyan bg-accent-cyan'
                                    : 'border-white/30 bg-transparent'
                                }`}
                              >
                                {isSelected && (
                                  <div className="w-2 h-2 rounded-full bg-bg-primary" />
                                )}
                              </div>
                            </div>

                            <div className="text-[11px] font-mono font-semibold text-accent-cyan/90 mb-1">
                              {opt.badge}
                            </div>
                            <h3 className="text-base font-bold text-white mb-1.5">{opt.title}</h3>
                            <p className="text-xs text-text-secondary leading-relaxed">
                              {opt.description}
                            </p>
                          </div>

                          <input
                            type="radio"
                            name="interest"
                            value={opt.id}
                            checked={isSelected}
                            onChange={() => handleSelectInterest(opt.id)}
                            className="sr-only"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Applicant Details */}
                <div className="space-y-4 pt-4 border-t border-white/10">
                  <label className="text-xs font-mono font-semibold text-accent-cyan uppercase tracking-wider block">
                    Step 2: Candidate Information
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs text-text-secondary font-medium">
                        Full Name <span className="text-accent-cyan">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Candidate Name"
                          required
                          disabled={status === 'loading'}
                          className="pl-10 bg-bg-primary/70 border-white/10 text-white placeholder:text-text-muted focus:border-accent-cyan focus:ring-accent-cyan/20 h-11 rounded-xl text-sm"
                        />
                      </div>
                    </div>

                    {/* Phone Number / WhatsApp */}
                    <div className="space-y-1.5">
                      <label className="text-xs text-text-secondary font-medium">
                        Phone / WhatsApp <span className="text-accent-cyan">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <Input
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 93212 16280"
                          required
                          disabled={status === 'loading'}
                          className="pl-10 bg-bg-primary/70 border-white/10 text-white placeholder:text-text-muted focus:border-accent-cyan focus:ring-accent-cyan/20 h-11 rounded-xl text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email Address */}
                    <div className="space-y-1.5">
                      <label className="text-xs text-text-secondary font-medium">
                        Email Address <span className="text-accent-cyan">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="candidate@gmail.com"
                          required
                          disabled={status === 'loading'}
                          className="pl-10 bg-bg-primary/70 border-white/10 text-white placeholder:text-text-muted focus:border-accent-cyan focus:ring-accent-cyan/20 h-11 rounded-xl text-sm"
                        />
                      </div>
                    </div>

                    {/* College / Institution */}
                    <div className="space-y-1.5">
                      <label className="text-xs text-text-secondary font-medium">
                        College / Degree / Branch <span className="text-text-muted">(Optional)</span>
                      </label>
                      <div className="relative">
                        <GraduationCap className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <Input
                          name="college"
                          value={formData.college}
                          onChange={handleChange}
                          placeholder="e.g. B.Tech / BCA / MCA (3rd Year)"
                          disabled={status === 'loading'}
                          className="pl-10 bg-bg-primary/70 border-white/10 text-white placeholder:text-text-muted focus:border-accent-cyan focus:ring-accent-cyan/20 h-11 rounded-xl text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  {/* GitHub / Portfolio / LinkedIn / Resume Link */}
                  <div className="space-y-1.5">
                    <label className="text-xs text-text-secondary font-medium">
                      GitHub / LinkedIn / Portfolio / Resume Link <span className="text-text-muted">(Optional)</span>
                    </label>
                    <div className="relative">
                      <Globe className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <Input
                        name="portfolio"
                        type="url"
                        value={formData.portfolio}
                        onChange={handleChange}
                        placeholder="https://github.com/username or Drive Resume link"
                        disabled={status === 'loading'}
                        className="pl-10 bg-bg-primary/70 border-white/10 text-white placeholder:text-text-muted focus:border-accent-cyan focus:ring-accent-cyan/20 h-11 rounded-xl text-sm"
                      />
                    </div>
                  </div>

                  {/* Skills / Projects / Experience */}
                  <div className="space-y-1.5">
                    <label className="text-xs text-text-secondary font-medium">
                      Key Skills, Past Projects, or Reason for Applying{' '}
                      <span className="text-text-muted">(Optional)</span>
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="e.g. Hands-on experience with React, Python, Linux, OWASP Top 10, TryHackMe, etc..."
                      disabled={status === 'loading'}
                      className="bg-bg-primary/70 border-white/10 text-white placeholder:text-text-muted focus:border-accent-cyan focus:ring-accent-cyan/20 rounded-xl text-sm min-h-[90px] p-3.5"
                    />
                  </div>
                </div>

                {/* Error Banner */}
                {status === 'error' && errorMessage && (
                  <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2.5">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-accent-cyan hover:bg-accent-teal text-bg-primary font-bold h-12 rounded-xl text-sm shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Submitting Application...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Internship Application
                      </>
                    )}
                  </Button>
                </div>

                <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-text-muted font-mono">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent-cyan" />
                  <span>Direct to Blackgate HR & Technical Leads • Confidential</span>
                </div>
              </form>
            </GlowCard>
          </motion.div>
        )}
      </div>
    </div>
  );
}
