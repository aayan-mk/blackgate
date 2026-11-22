import { motion } from 'framer-motion';

interface DifferenceCardProps {
  number: number;
  title: string;
  subtitle: string;
  image: string;
  delay?: number;
}

export function DifferenceCard({ number, title, image, delay = 0 }: DifferenceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
      className="relative bg-bg-card/30 border border-border-subtle rounded-xl p-4 flex items-center gap-4 group hover:border-accent-cyan/40 hover:shadow-[0_0_25px_rgba(6,182,212,0.12)] transition-all duration-500 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Image & Number Badge Container */}
      <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border border-border-subtle group-hover:border-accent-cyan/30 transition-colors duration-300">
        <motion.img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        />
        {/* Number Badge */}
        <div className="absolute top-1 left-1 w-6 h-6 rounded bg-bg-primary/90 border border-accent-cyan/40 flex items-center justify-center shadow-md backdrop-blur-sm">
          <span className="text-xs font-bold text-accent-cyan">{number}</span>
        </div>
      </div>
      {/* Title */}
      <div className="flex-grow relative">
        <h3 className="text-sm sm:text-base font-semibold text-white group-hover:text-accent-cyan transition-colors duration-300 leading-snug">
          {title}
        </h3>
      </div>
    </motion.div>
  );
}
