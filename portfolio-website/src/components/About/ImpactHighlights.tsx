import { TrendingUp } from 'lucide-react';

interface ImpactHighlightsProps {
  impacts: string[];
}

export function ImpactHighlights({ impacts }: ImpactHighlightsProps) {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-text-primary mb-4 flex items-center gap-2">
        <TrendingUp className="w-6 h-6 text-accent" />
        Quantifiable Impact
      </h3>
      <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-2 border-accent/20 rounded-xl p-6">
        <ul className="space-y-3">
          {impacts.map((impact, index) => (
            <li key={index} className="flex items-start gap-3 text-text-primary">
              <span className="flex-shrink-0 w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                {index + 1}
              </span>
              <span className="text-lg leading-relaxed">{impact}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
