import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, Shield, BarChart3, Zap, Check } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import Navbar from '../sections/Navbar';
import Footer from '@/sections/Footer';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  const [rememberMe, setRememberMe] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 5000);
  };

  const features = [
    { icon: Shield, title: 'Enterprise Security', description: 'Built with zero-trust principles and end-to-end encryption.' },
    { icon: BarChart3, title: 'Operational Visibility', description: 'Real-time insights and analytics across your environment.' },
    { icon: Zap, title: 'Built for Scale', description: 'Reliable, flexible, and designed for mission-critical workloads.' },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-bg-primary cyber-grid pt-24">
      <Navbar />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-20">
        <AnimatedSection>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Left Panel */}
            <div className="relative rounded-3xl bg-bg-card p-8 md:p-12 gradient-border overflow-hidden">
              <div className="absolute top-0 right-0 h-64 w-64 bg-cyan-primary/10 blur-[100px] rounded-full" />
              <div className="relative z-10">
                <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
                  Secure access to everything that <span className="gradient-text">matters.</span>
                </h1>
                <p className="mt-6 max-w-md text-text-secondary">
                  Welcome to Blackgate. Sign in to access your dashboard, manage resources, and secure your infrastructure.
                </p>

                <div className="mt-12 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-cyan-primary/20 blur-[60px] rounded-full" />
                    <div className="relative rounded-3xl border border-cyan-primary/30 bg-cyan-primary/5 p-10 glow-cyan">
                      <Lock size={64} className="text-cyan-primary" />
                    </div>
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute -top-4 -left-4 rounded-xl bg-bg-card p-3 border border-cyan-primary/20"
                    >
                      <Shield size={20} className="text-cyan-primary" />
                    </motion.div>
                    <motion.div
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute -bottom-4 -right-4 rounded-xl bg-bg-card p-3 border border-cyan-primary/20"
                    >
                      <Zap size={20} className="text-cyan-primary" />
                    </motion.div>
                  </div>
                </div>

                <div className="mt-12 space-y-5">
                  {features.map((feature, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-primary/10 text-cyan-primary">
                        <feature.icon size={20} />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-white">{feature.title}</h3>
                        <p className="mt-1 text-xs text-text-secondary">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Panel - Form */}
            <div className="rounded-3xl bg-bg-card p-8 md:p-12 gradient-border">
              <div className="flex p-1 bg-white/5 rounded-xl border border-white/10 mb-8">
                <button
                  onClick={() => setActiveTab('login')}
                  className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                    activeTab === 'login' 
                      ? 'bg-cyan-primary text-black shadow-[0_0_10px_rgba(0,212,255,0.3)]' 
                      : 'text-text-secondary hover:text-white hover:bg-white/5'
                  }`}
                >
                  Log In
                </button>
                <button
                  onClick={() => setActiveTab('signup')}
                  className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                    activeTab === 'signup' 
                      ? 'bg-cyan-primary text-black shadow-[0_0_10px_rgba(0,212,255,0.3)]' 
                      : 'text-text-secondary hover:text-white hover:bg-white/5'
                  }`}
                >
                  Sign Up
                </button>
              </div>

              <div className="mt-8 text-center">
                <h2 className="text-2xl font-bold text-white">
                  {activeTab === 'login' ? 'Welcome back' : 'Create your account'}
                </h2>
                <p className="mt-2 text-sm text-text-secondary">
                  {activeTab === 'login' ? 'Log in to your Blackgate account' : 'Start your free trial today'}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                {showMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 mb-4 text-sm text-cyan-primary bg-cyan-primary/10 border border-cyan-primary/20 rounded-xl text-center"
                  >
                    We are working on it. Please contact us at blackgatesolutions@gmail.com
                  </motion.div>
                )}
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Email address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
                    <input
                      type="email"
                      placeholder="name@company.com"
                      className="w-full rounded-xl border border-border bg-bg-primary py-3.5 pl-11 pr-4 text-sm text-white placeholder-text-muted focus:border-cyan-primary focus:outline-none focus:ring-1 focus:ring-cyan-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      className="w-full rounded-xl border border-border bg-bg-primary py-3.5 pl-11 pr-11 text-sm text-white placeholder-text-muted focus:border-cyan-primary focus:outline-none focus:ring-1 focus:ring-cyan-primary"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {activeTab === 'login' && (
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setRememberMe(!rememberMe)}
                      className="flex items-center gap-2 text-sm text-text-secondary"
                    >
                      <div className={`flex h-4 w-4 items-center justify-center rounded border transition-colors ${rememberMe ? 'bg-cyan-primary border-cyan-primary' : 'border-text-muted'}`}>
                        {rememberMe && <Check size={12} className="text-black" />}
                      </div>
                      Remember me
                    </button>
                    <a href="#" className="text-sm text-cyan-primary hover:underline">Forgot password?</a>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full rounded-xl bg-cyan-primary py-3.5 text-sm font-semibold text-black btn-glow flex items-center justify-center gap-2"
                >
                  {activeTab === 'login' ? 'Log In' : 'Create Account'} <span>→</span>
                </button>
              </form>

              <div className="mt-8">
                <div className="relative flex items-center py-2">
                  <div className="flex-1 border-t border-border" />
                  <span className="px-4 text-xs text-text-muted">or continue with</span>
                  <div className="flex-1 border-t border-border" />
                </div>
                <div className="mt-5 grid grid-cols-2 gap-4">
                  <button type="button" onClick={handleSubmit} className="flex items-center justify-center gap-2 rounded-xl border border-border bg-white/5 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors">
                    <svg className="h-5 w-5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Google
                  </button>
                  <button type="button" onClick={handleSubmit} className="flex items-center justify-center gap-2 rounded-xl border border-border bg-white/5 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors">
                    <svg className="h-5 w-5" viewBox="0 0 24 24">
                      <path fill="#f25022" d="M1 1h10v10H1z"/>
                      <path fill="#00a4ef" d="M1 13h10v10H1z"/>
                      <path fill="#7fba00" d="M13 1h10v10H13z"/>
                      <path fill="#ffb900" d="M13 13h10v10H13z"/>
                    </svg>
                    Microsoft
                  </button>
                </div>
              </div>

              <p className="mt-8 text-center text-sm text-text-secondary">
                {activeTab === 'login' ? "Don't have an account? " : 'Already have an account? '}
                <button
                  onClick={() => setActiveTab(activeTab === 'login' ? 'signup' : 'login')}
                  className="text-cyan-primary hover:underline font-medium"
                >
                  {activeTab === 'login' ? 'Sign up' : 'Log in'}
                </button>
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
      <Footer />
    </div>
  );
}
