import { motion } from 'framer-motion';

export function PageLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-bg-primary z-50">
      <motion.div
        className="w-16 h-16 border-4 border-accent-cyan/30 border-t-accent-cyan rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
}
