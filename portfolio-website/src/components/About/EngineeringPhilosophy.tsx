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
    <div className="mb-12">
      <h3 className="text-3xl font-bold text-text-primary mb-6 flex items-center gap-3">
        <div className="w-1 h-8 bg-gradient-to-b from-accent to-accent/50 rounded-full" />
        Engineering Philosophy
      </h3>
      <div className="grid md:grid-cols-2 gap-5">
        {pillars.map(({ key, points }) => {
          const Icon = icons[key];
          const title = titles[key];
          
          return (
            <div
              key={key}
              className="group relative bg-gradient-to-br from-card via-card to-card/50 border border-border/50 rounded-2xl p-6 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 overflow-hidden"
            >
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-accent/20 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative p-2 bg-gradient-to-br from-card to-card/50 border border-border/50 rounded-xl group-hover:border-accent/30 group-hover:shadow-lg group-hover:shadow-accent/20 transition-all duration-300">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-text-primary text-lg group-hover:text-accent transition-colors duration-300">{title}</h4>
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
            </div>
          );
        })}
      </div>
    </div>
  );
}
