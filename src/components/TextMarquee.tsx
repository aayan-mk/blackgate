import { cn } from '@/lib/utils';

const keywords = [
  'Cybersecurity',
  'AI Solutions',
  'Web Development',
  'Cyber Forensics',
  'Cloud Security',
  'Zero Trust',
  'Threat Intelligence',
  'Penetration Testing',
  'Incident Response',
  'Compliance',
];

interface TextMarqueeProps {
  className?: string;
  reverse?: boolean;
}

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  return (
    <div
      className={cn(
        'flex gap-6 whitespace-nowrap group',
        reverse ? 'animate-marquee-reverse' : 'animate-marquee'
      )}
      style={{ '--marquee-duration': '40s' } as React.CSSProperties}
    >
      {[...keywords, ...keywords].map((keyword, i) => (
        <span
          key={`${keyword}-${i}`}
          className="inline-flex items-center gap-3 text-sm sm:text-base md:text-lg font-semibold tracking-wide uppercase text-white/60 hover:text-accent-cyan transition-colors duration-300"
        >
          <span>{keyword}</span>
          <span className="w-2 h-2 rounded-full bg-accent-cyan/50 flex-shrink-0" />
        </span>
      ))}
    </div>
  );
}

export function TextMarquee({ className }: TextMarqueeProps) {
  return (
    <div
      className={cn(
      'relative overflow-hidden py-6 sm:py-8 border-y border-border-subtle/50 bg-bg-primary/30 backdrop-blur-sm marquee-pausable',
        className
      )}
    >
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-bg-primary to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-bg-primary to-transparent z-10 pointer-events-none" />

      <div className="space-y-4">
        <MarqueeRow />
        <MarqueeRow reverse />
      </div>
    </div>
  );
}
