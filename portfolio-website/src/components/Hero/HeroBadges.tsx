import { MapPin, Briefcase } from 'lucide-react';
import type { HeroBadgesProps } from './types';

export function HeroBadges({ yearsOfExperience, location }: HeroBadgesProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-6">
      <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full transition-all duration-200 hover:bg-blue-100 hover:scale-105">
        <Briefcase className="w-5 h-5" />
        <span className="font-medium">{yearsOfExperience}+ years experience</span>
      </div>
      <div className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full transition-all duration-200 hover:bg-gray-200 hover:scale-105">
        <MapPin className="w-5 h-5" />
        <span className="font-medium">{location}</span>
      </div>
    </div>
  );
}
