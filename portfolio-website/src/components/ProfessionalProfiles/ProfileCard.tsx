import { ExternalLink } from 'lucide-react';
import type { ProfessionalProfile } from './types';

export function ProfileCard({ profile }: { profile: ProfessionalProfile }) {
  return (
    <a
      href={profile.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between p-4 bg-card border border-border rounded-xl hover:border-accent hover:shadow-md transition-all duration-200"
    >
      <span className="font-medium text-text-secondary">{profile.platform}</span>
      <ExternalLink className="w-4 h-4 text-text-muted" />
    </a>
  );
}
