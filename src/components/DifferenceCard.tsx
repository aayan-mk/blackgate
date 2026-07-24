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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative bg-bg-card/30 border border-border-subtle rounded-xl p-4 flex items-center gap-4 group hover:border-accent-cyan/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all duration-300"
    >
      {/* Image & Number Badge Container */}
      <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border border-border-subtle">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
        {/* Number Badge */}
        <div className="absolute top-1 left-1 w-6 h-6 rounded bg-bg-primary/80 border border-accent-cyan/40 flex items-center justify-center shadow-md">
          <span className="text-xs font-bold text-accent-cyan">{number}</span>
        </div>
      </div>
      {/* Title */}
      <div className="flex-grow">
        <h3 className="text-sm sm:text-base font-semibold text-white group-hover:text-accent-cyan transition-colors leading-snug">
          {title}
        </h3>
      </div>
    </motion.div>
  );
}
