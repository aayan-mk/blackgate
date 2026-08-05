import { useEffect } from 'react';
import Navbar from '@/sections/Navbar';
import Footer from '@/sections/Footer';
import ContactSection from '@/sections/ContactSection';
import { motion } from 'framer-motion';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-bg-primary cyber-grid">
      <Navbar />
      
      <main className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold tracking-wider text-cyan-primary uppercase mb-4 block">Connect with us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Ready to secure your digital assets? Our team of experts is here to help you navigate the complex landscape of cybersecurity and digital infrastructure.
            </p>
          </motion.div>
          
          <ContactSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
