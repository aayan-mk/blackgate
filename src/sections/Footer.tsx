import { Link } from 'react-router-dom';
import whiteLogoImage from '@/assets/white-logo.png';

const footerLinks = {
  Company: ['About', 'Careers', 'Press', 'Contact'],
  Product: ['Features', 'Pricing', 'Security', 'Integrations'],
  Features: ['Cloud Native', 'AI Security', 'Zero Trust', 'Compliance'],
  Resources: ['Documentation', 'API Reference', 'Blog', 'Support'],
};

export default function Footer() {
  return (
    <footer className="bg-bg-primary border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
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
            <p className="text-sm text-text-secondary">
              Forged in Security. Perfected by Intelligence.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-text-secondary hover:text-accent-cyan transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted">
            © 2024 Blackgate. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-text-muted hover:text-accent-cyan transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-text-muted hover:text-accent-cyan transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-text-muted hover:text-accent-cyan transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
