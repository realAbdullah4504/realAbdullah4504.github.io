import { Code2, TrendingUp, Shield, Settings } from 'lucide-react';
import type { EngineeringPhilosophyProps } from './types';

const icons = {
  systems_ownership: Code2,
  balanced_evolution: TrendingUp,
  reliability_first_engineering: Shield,
  operational_excellence: Settings,
};

const titles = {
  systems_ownership: 'Systems Ownership',
  balanced_evolution: 'Balanced Evolution',
  reliability_first_engineering: 'Reliability-First Engineering',
  operational_excellence: 'Operational Excellence',
};

export function EngineeringPhilosophy({ philosophy }: EngineeringPhilosophyProps) {
  const pillars = [
    { key: 'systems_ownership' as const, points: philosophy.systems_ownership },
    { key: 'balanced_evolution' as const, points: philosophy.balanced_evolution },
    { key: 'reliability_first_engineering' as const, points: philosophy.reliability_first_engineering },
    { key: 'operational_excellence' as const, points: philosophy.operational_excellence },
  ];

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-text-primary mb-4">Engineering Philosophy</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {pillars.map(({ key, points }) => {
          const Icon = icons[key];
          const title = titles[key];
          
          return (
            <div
              key={key}
              className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <Icon className="w-6 h-6 text-accent flex-shrink-0" />
                <h4 className="font-semibold text-text-primary text-lg">{title}</h4>
              </div>
              <ul className="space-y-2">
                {points.map((point, index) => (
                  <li key={index} className="text-text-secondary text-sm leading-relaxed flex items-start gap-2">
                    <span className="text-accent mt-1 flex-shrink-0">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
