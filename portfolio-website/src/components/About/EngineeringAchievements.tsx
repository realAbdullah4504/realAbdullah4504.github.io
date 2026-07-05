import { CheckCircle } from 'lucide-react';
import type { EngineeringAchievementsProps } from './types';

export function EngineeringAchievements({ achievements }: EngineeringAchievementsProps) {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-text-primary mb-4">Key Achievements</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {achievements.map((achievement, index) => (
          <div key={index} className="flex items-start gap-3 bg-accent/10 p-4 rounded-xl border border-accent/20 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
            <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
            <p className="text-text-secondary text-sm leading-relaxed">{achievement}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
