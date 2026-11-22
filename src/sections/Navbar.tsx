import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import whiteLogoImage from '@/assets/white-logo.png';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Product', to: '/product' },
  { label: 'Features', to: '/features' },
  { label: 'Resources', to: '/resources' },
];

function MagneticLink({ children, className, ...props }: React.ComponentPropsWithRef<typeof NavLink>) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.15;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.15;
    setOffset({ x, y });
  };

  const handleMouseLeave = () => setOffset({ x: 0, y: 0 });

  return (
    <NavLink
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: 'transform 0.2s ease-out',
      }}
      {...props}
    >
      {children}
    </NavLink>
  );
}

const mobileItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] },
  }),
  exit: { opacity: 0, x: -20, transition: { duration: 0.15 } },
};

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
      transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled 
          ? 'bg-bg-primary/80 backdrop-blur-xl border-b border-border-subtle shadow-[0_4px_30px_rgba(0,0,0,0.3)]' 
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" aria-label="Blackgate home">
            <motion.img
              src={whiteLogoImage}
              alt="Blackgate logo"
              className="h-10 w-auto object-contain"
              whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: 0.4 } }}
            />
            <span className="text-sm sm:text-base font-semibold tracking-[0.28em] text-white uppercase group-hover:text-accent-cyan transition-colors duration-300">
              BLACKGATE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <MagneticLink
                key={link.label}
                to={link.to}
                className={({ isActive }: { isActive: boolean }) =>
                  cn(
                    'relative text-sm font-medium transition-colors py-1',
                    isActive ? 'text-accent-cyan' : 'text-text-secondary hover:text-white'
                  )
                }
              >
                {({ isActive }: { isActive: boolean }) => (
                  <>
                    {link.label}
                    {/* Active underline */}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavLink"
                        className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-accent-cyan rounded-full"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </MagneticLink>
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
              className="group relative px-5 py-2 text-sm font-medium text-bg-primary bg-accent-cyan rounded-full hover:bg-accent-teal transition-all duration-300 overflow-hidden hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
              <span className="relative">Sign Up</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-white"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden bg-bg-primary/95 backdrop-blur-xl border-b border-border-subtle overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div key={link.label} custom={i} variants={mobileItemVariants} initial="hidden" animate="visible" exit="exit">
                  <NavLink
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        'block py-3 px-3 rounded-lg transition-all',
                        isActive 
                          ? 'text-accent-cyan bg-accent-cyan/5' 
                          : 'text-text-secondary hover:text-white hover:bg-white/5'
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                custom={navLinks.length}
                variants={mobileItemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="pt-3 border-t border-border-subtle flex flex-col gap-3"
              >
                <NavLink
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3 px-3 text-text-secondary hover:text-white rounded-lg hover:bg-white/5 transition-all"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/signup"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-center text-bg-primary bg-accent-cyan rounded-full hover:bg-accent-teal transition-colors font-medium"
                >
                  Sign Up
                </NavLink>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
