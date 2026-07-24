import { GlowCard } from './GlowCard';

interface StrengthCardProps {
  image: string;
  title: string;
  description: string;
}

export function StrengthCard({ image, title, description }: StrengthCardProps) {
  return (
    <GlowCard className="h-full flex flex-row items-center p-4 sm:p-5 gap-4">
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-lg overflow-hidden flex-shrink-0 border border-border-subtle/30">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-bg-card/30" />
      </div>
      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-white mb-1.5 leading-snug">{title}</h3>
        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">{description}</p>
      </div>
    </GlowCard>
  );
}
