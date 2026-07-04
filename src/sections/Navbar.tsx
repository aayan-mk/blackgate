import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import logoImage from '@/assets/logo.png';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Product', to: '/product' },
  { label: 'Features', to: '/features' },
  { label: 'Resources', to: '/resources' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled 
          ? 'bg-bg-primary/90 backdrop-blur-lg border-b border-border-subtle' 
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group" aria-label="Blackgate home">
            <img
              src={logoImage}
              alt="Blackgate logo"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    'text-sm transition-colors',
                    isActive ? 'text-accent-cyan' : 'text-text-secondary hover:text-accent-cyan'
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/login"
              className="text-sm text-text-secondary hover:text-white transition-colors"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 text-sm font-medium text-bg-primary bg-accent-cyan rounded-full hover:bg-accent-teal transition-colors"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-bg-primary/95 backdrop-blur-lg border-b border-border-subtle"
        >
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'block py-2 transition-colors',
                    isActive ? 'text-accent-cyan' : 'text-text-secondary hover:text-accent-cyan'
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-3 border-t border-border-subtle flex flex-col gap-3">
              <NavLink
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="text-text-secondary hover:text-white"
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-center text-bg-primary bg-accent-cyan rounded-full hover:bg-accent-teal transition-colors"
              >
                Sign Up
              </NavLink>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
