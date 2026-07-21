import { motion } from 'framer-motion';

interface DifferenceCardProps {
  number: number;
  title: string;
  subtitle: string;
  image: string;
  delay?: number;
}

export function DifferenceCard({ number, title, subtitle, image, delay = 0 }: DifferenceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative bg-black border border-border-subtle rounded-xl overflow-hidden group hover:border-white hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row">
        <div className="relative w-full md:w-1/2 h-48 md:h-auto">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-accent-cyan/20 border border-accent-cyan/50 flex items-center justify-center">
            <span className="text-accent-cyan font-bold">{number}</span>
          </div>
        </div>
        <div className="p-5 md:w-1/2 flex flex-col justify-center">
          <h4 className="text-accent-cyan text-sm font-medium mb-1">{subtitle}</h4>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
      </div>
    </motion.div>
  );
}
