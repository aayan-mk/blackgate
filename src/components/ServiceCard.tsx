import { GlowCard } from './GlowCard';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  image: string;
  title: string;
  description?: string;
  points: string[];
  emphasis?: string;
  cta?: string;
  to?: string;
}

export function ServiceCard({
  image,
  title,
  description,
  points,
  emphasis,
  cta = 'Learn More',
  to,
}: ServiceCardProps) {
  return (
    <GlowCard className="flex-shrink-0 w-[300px] md:w-[350px] flex flex-col h-full">
      {/* Image with clip-path reveal */}
      <div className="relative h-48 overflow-hidden">
        <motion.img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-accent-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-accent-cyan transition-colors duration-300">{title}</h3>
        {description && <p className="text-sm text-text-secondary mb-3">{description}</p>}
        <ul className="space-y-1.5 mb-4">
          {points.map((point, index) => (
            <li key={index} className="text-sm text-text-secondary flex items-start">
              <Check className="w-4 h-4 text-accent-cyan mr-2 mt-0.5 flex-shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        
        {/* Emphasis text */}
        {emphasis && (
          <p className="text-xs text-accent-cyan/70 font-medium italic mb-4 border-l-2 border-accent-cyan/30 pl-3">
            {emphasis}
          </p>
        )}
        
        {to ? (
          <Link
            to={to}
            className="flex items-center gap-2 text-sm font-medium text-accent-cyan mt-auto hover:text-accent-teal transition-colors group/link"
          >
            {cta}
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-2" />
          </Link>
        ) : (
          <button
            type="button"
            className="flex items-center gap-2 text-sm font-medium text-accent-cyan mt-auto hover:text-accent-teal transition-colors group/link"
          >
            {cta}
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-2" />
          </button>
        )}
      </div>
    </GlowCard>
  );
}
