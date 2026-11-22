import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import whiteLogoImage from '@/assets/white-logo.png';

const footerLinks = {
  Company: [
    { label: 'About', to: '/about' },
    { label: 'Case Studies', to: '/case-studies' },
    { label: 'Security', to: '/security' },
    { label: 'Contact', to: '/contact' },
  ],
  Product: [
    { label: 'Features', to: '/features' },
    { label: 'Product', to: '/product' },
    { label: 'Resources', to: '/resources' },
    { label: 'Integrations', to: '#' },
  ],
  Services: [
    { label: 'Web Development', to: '/services/web-development' },
    { label: 'Cybersecurity', to: '/services/cybersecurity' },
    { label: 'Cyber Forensics', to: '/services/cyber-forensics' },
    { label: 'AI Solutions', to: '/services/ai-solutions' },
  ],
  Legal: [
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Terms of Service', to: '/terms' },
    { label: 'Cookie Policy', to: '#' },
    { label: 'Support', to: 'mailto:info@blackgateitsolutions.co.in' },
  ],
};

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export default function Footer() {
  const { scrollYProgress } = useScroll();
  const footerTextX = useTransform(scrollYProgress, [0.8, 1], ['-5%', '0%']);

  return (
    <footer className="bg-bg-primary border-t border-border-subtle relative overflow-hidden">
      {/* Gradient line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent-cyan/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 group mb-4" aria-label="Blackgate home">
              <img
                src={whiteLogoImage}
                alt="Blackgate logo"
                className="h-10 w-auto object-contain"
              />
              <span className="text-sm sm:text-base font-semibold tracking-[0.28em] text-white uppercase">
                BLACKGATE
              </span>
            </Link>
            <p className="text-sm text-text-secondary mb-6 leading-relaxed">
              Forged in Security. Perfected by Intelligence.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full border border-border-subtle flex items-center justify-center text-text-muted hover:text-accent-cyan hover:border-accent-cyan/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.to.startsWith('#') || link.to.startsWith('mailto:') ? (
                      <a
                        href={link.to}
                        className="group/link text-sm text-text-secondary hover:text-accent-cyan transition-colors inline-flex items-center gap-1"
                      >
                        <span className="w-0 group-hover/link:w-2 h-px bg-accent-cyan transition-all duration-300" />
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.to}
                        className="group/link text-sm text-text-secondary hover:text-accent-cyan transition-colors inline-flex items-center gap-1"
                      >
                        <span className="w-0 group-hover/link:w-2 h-px bg-accent-cyan transition-all duration-300" />
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border-subtle flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-text-muted">
          <p>&copy; {new Date().getFullYear()} Blackgate Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-accent-cyan transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-accent-cyan transition-colors">Terms</Link>
            <Link to="/security" className="hover:text-accent-cyan transition-colors">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
