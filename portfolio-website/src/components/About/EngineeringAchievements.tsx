import { CheckCircle } from 'lucide-react';
import type { EngineeringAchievementsProps } from './types';

export function EngineeringAchievements({ achievements }: EngineeringAchievementsProps) {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Achievements</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {achievements.map((achievement, index) => (
          <div key={index} className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1">
            <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="text-gray-700 text-sm leading-relaxed">{achievement}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
