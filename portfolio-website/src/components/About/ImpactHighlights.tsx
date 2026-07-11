import { TrendingUp, Award, Zap, Target } from 'lucide-react';

interface ImpactHighlightsProps {
  impacts: string[];
}

const impactIcons = [Award, Zap, Target, TrendingUp];

export function ImpactHighlights({ impacts }: ImpactHighlightsProps) {
  return (
    <div className="mb-12">
      <h3 className="text-3xl font-bold text-text-primary mb-6 flex items-center gap-3">
        <div className="w-1 h-8 bg-gradient-to-b from-accent to-accent/50 rounded-full" />
        Quantifiable Impact
      </h3>
      <div className="bg-gradient-to-br from-accent/5 via-accent/5 to-accent/10 border-2 border-accent/20 rounded-2xl p-8 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(var(--accent-rgb),0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(var(--accent-rgb),0.08),transparent_50%)]" />
        
        {/* Decorative corner accents */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-accent/20 to-transparent rounded-bl-3xl" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent/20 to-transparent rounded-tr-3xl" />
        
        <div className="relative">
          <ul className="space-y-4">
            {impacts.map((impact, index) => {
              const Icon = impactIcons[index % impactIcons.length];
              return (
                <li 
                  key={index} 
                  className="flex items-start gap-4 text-text-primary group hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-accent/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative w-10 h-10 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-accent/20 group-hover:shadow-accent/40 transition-shadow duration-300">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <span className="text-lg leading-relaxed">{impact}</span>
                  </div>
                  <Icon className="w-6 h-6 text-accent/50 group-hover:text-accent transition-colors duration-300 flex-shrink-0 mt-1" />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
