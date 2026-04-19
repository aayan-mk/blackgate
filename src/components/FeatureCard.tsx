import { GlowCard } from './GlowCard';

interface FeatureCardProps {
  number: number;
  title: string;
  description: string;
  image: string;
}

export function FeatureCard({ number, title, description, image }: FeatureCardProps) {
  return (
    <GlowCard className="h-full">
      <div className="p-5">
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center">
            <span className="text-xl font-bold text-gradient-cyan">{number}</span>
          </div>
          <div>
            <h3 className="text-base font-semibold text-white mb-1">{title}</h3>
            <p className="text-sm text-text-secondary">{description}</p>
          </div>
        </div>
        <div className="relative h-32 rounded-lg overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </GlowCard>
  );
}
