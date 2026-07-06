import { Target } from 'lucide-react';
import type { EngineeringFocusAreasProps } from './types';

export function EngineeringFocusAreas({ focusAreas }: EngineeringFocusAreasProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Target className="w-6 h-6 text-accent" />
        <h3 className="text-2xl font-bold text-text-primary">Engineering Focus Areas</h3>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {focusAreas.map((area, index) => (
          <div key={index} className="p-3 bg-accent/5 border border-accent/20 rounded-lg hover:bg-accent/10 transition-colors duration-200">
            <p className="text-text-secondary font-medium">{area}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
