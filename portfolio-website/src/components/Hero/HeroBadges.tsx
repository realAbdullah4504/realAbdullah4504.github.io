import { MapPin, Briefcase } from 'lucide-react';
import type { HeroBadgesProps } from './types';

export function HeroBadges({ yearsOfExperience, location }: HeroBadgesProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-6">
      <div className="flex items-center gap-2 bg-blue-500/10 text-accent px-4 py-2 rounded-full border border-blue-500/20 transition-all duration-200 hover:bg-blue-500/20 hover:scale-105">
        <Briefcase className="w-5 h-5" />
        <span className="font-medium">{yearsOfExperience}+ years experience</span>
      </div>
      <div className="flex items-center gap-2 bg-surface text-text-secondary px-4 py-2 rounded-full border border-border transition-all duration-200 hover:bg-card hover:scale-105">
        <MapPin className="w-5 h-5" />
        <span className="font-medium">{location}</span>
      </div>
    </div>
  );
}
