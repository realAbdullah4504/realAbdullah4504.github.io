import { ExternalLink } from 'lucide-react';
import type { ProfessionalProfilesProps } from './types';

export function ProfessionalProfiles({ profiles }: ProfessionalProfilesProps) {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-text-primary mb-4">Professional Profiles</h3>
      <div className="grid md:grid-cols-2 gap-3">
        {profiles.map((profile, index) => (
          <a
            key={index}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-card border border-border rounded-xl hover:border-accent hover:shadow-md transition-all duration-200"
          >
            <span className="font-medium text-text-secondary">{profile.platform}</span>
            <ExternalLink className="w-4 h-4 text-text-muted" />
          </a>
        ))}
      </div>
    </div>
  );
}
