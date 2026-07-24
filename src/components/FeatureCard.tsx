import { GlowCard } from './GlowCard';

interface FeatureCardProps {
  number: number;
  title: string;
  description: string;
  image: string;
}

export function FeatureCard({ number, title, description, image }: FeatureCardProps) {
  return (
    <GlowCard className="h-full flex flex-col justify-between hover:border-accent-cyan/30 transition-all duration-300">
      <div className="p-2.5 sm:p-3 flex flex-col h-full flex-grow">
        {/* Badge */}
        <div className="w-7 h-7 rounded bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center mb-2.5 flex-shrink-0">
          <span className="text-xs font-bold text-accent-cyan">{number}</span>
        </div>
        
        {/* Title & Description */}
        <div className="mb-3.5 flex-grow">
          <h3 className="text-xs sm:text-sm font-bold text-white mb-1 leading-tight tracking-tight">
            {title}
          </h3>
          <p className="text-[10px] sm:text-[11px] text-text-secondary leading-normal tracking-wide">
            {description}
          </p>
        </div>
        
        {/* Image with responsive aspect ratio */}
        <div className="relative aspect-[16/10] rounded overflow-hidden mt-auto border border-border-subtle/40 flex-shrink-0">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </GlowCard>
  );
}
