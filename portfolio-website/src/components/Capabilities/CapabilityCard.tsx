import { HoverCard } from '../../utils/animations';
import type { CapabilityCardProps } from './types';

export function CapabilityCard({ capability }: CapabilityCardProps) {
  return (
    <HoverCard className="bg-card border border-border rounded-2xl p-6 shadow-sm">
      <h3 className="text-xl font-bold text-text-primary mb-4">{capability.name}</h3>
      
      <ul className="space-y-3">
        {capability.points.map((point, index) => (
          <li key={index} className="flex items-start gap-2 text-text-secondary text-sm leading-relaxed">
            <span className="text-accent mt-1 flex-shrink-0">•</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </HoverCard>
  );
}
