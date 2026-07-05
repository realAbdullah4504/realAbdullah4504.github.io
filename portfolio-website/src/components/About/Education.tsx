import { GraduationCap } from 'lucide-react';
import type { EducationProps } from './types';

export function Education({ education }: EducationProps) {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-text-primary mb-4">Education</h3>
      <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
        <div className="flex items-start gap-4">
          <GraduationCap className="w-8 h-8 text-text-muted flex-shrink-0" />
          <div className="flex-1">
            <h4 className="text-xl font-semibold text-text-primary mb-2">{education.degree}</h4>
            <p className="text-text-secondary mb-2">{education.institution}</p>
            <p className="text-text-muted text-sm mb-3">{education.location} • {education.graduationYear}</p>
            <div className="flex flex-wrap gap-2">
              {education.academicFocusAreas.map((area, index) => (
                <span key={index} className="px-3 py-1 bg-surface text-text-secondary text-sm rounded-full border border-border hover:border-accent hover:text-accent transition-colors duration-200">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
