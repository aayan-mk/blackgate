import { GlowCard } from './GlowCard';

interface StrengthCardProps {
  image: string;
  title: string;
  description: string;
}

export function StrengthCard({ image, title, description }: StrengthCardProps) {
  return (
    <GlowCard className="h-full flex flex-col">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm text-text-secondary">{description}</p>
      </div>
    </GlowCard>
  );
}
