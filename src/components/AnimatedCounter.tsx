import { useCountUp } from '@/hooks/useCountUp';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function AnimatedCounter({ 
  end, 
  duration = 2, 
  suffix = '', 
  prefix = '',
  className = ''
}: AnimatedCounterProps) {
  const { count, ref } = useCountUp(end, duration);
  const decimalPlaces = Number.isInteger(end) ? 0 : (end.toString().split('.')[1]?.length ?? 0);

  const formattedCount = count.toLocaleString(undefined, {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  });

  return (
    <div ref={ref} className={className}>
      {prefix}{formattedCount}{suffix}
    </div>
  );
}
