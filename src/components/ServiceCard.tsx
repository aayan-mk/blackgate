import { GlowCard } from './GlowCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    <GlowCard className="flex-shrink-0 w-[300px] md:w-[350px]" hoverScale={false}>
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-card to-transparent" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
        {description && <p className="text-sm text-text-secondary mb-3">{description}</p>}
        <ul className="space-y-1.5 mb-3">
          {points.map((point, index) => (
            <li key={index} className="text-sm text-text-secondary flex items-start">
              <span className="text-accent-cyan mr-2">•</span>
              {point}
            </li>
          ))}
        </ul>
        {emphasis && <p className="text-sm text-accent-cyan font-medium mb-4">{emphasis}</p>}
        {to ? (
          <Link
            to={to}
            className="flex items-center gap-2 text-sm font-medium text-accent-cyan hover:text-accent-teal transition-colors group/btn"
          >
            {cta}
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        ) : (
          <button
            type="button"
            className="flex items-center gap-2 text-sm font-medium text-accent-cyan hover:text-accent-teal transition-colors group/btn"
          >
            {cta}
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </button>
        )}
      </div>
    </GlowCard>
  );
}
