import { Briefcase, MapPin } from 'lucide-react';
import type { WorkPreferencesProps } from './types';

export function WorkPreferences({ employmentTypes, workArrangement }: WorkPreferencesProps) {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-text-primary mb-4">Work Preferences</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-card p-4 rounded-xl border border-border">
          <div className="flex items-center gap-2 mb-3">
            <Briefcase className="w-5 h-5 text-accent" />
            <h4 className="font-semibold text-text-primary">Employment Types</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {employmentTypes.map((type, index) => (
              <span key={index} className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/20">
                {type}
              </span>
            ))}
          </div>
        </div>
        <div className="bg-card p-4 rounded-xl border border-border">
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-5 h-5 text-accent" />
            <h4 className="font-semibold text-text-primary">Work Arrangement</h4>
          </div>
          <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/20 inline-block">
            {workArrangement}
          </span>
        </div>
      </div>
    </div>
  );
}
