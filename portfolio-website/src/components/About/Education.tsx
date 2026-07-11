import { GraduationCap } from 'lucide-react';
import type { EducationProps } from './types';

export function Education({ education }: EducationProps) {
  return (
    <div className="mb-12">
      <h3 className="text-3xl font-bold text-text-primary mb-6 flex items-center gap-3">
        <div className="w-1 h-8 bg-gradient-to-b from-accent to-accent/50 rounded-full" />
        Education
      </h3>
      <div className="group relative bg-gradient-to-br from-card via-card to-card/50 border border-border/50 rounded-2xl p-8 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/20 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative flex items-start gap-6">
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative p-4 bg-gradient-to-br from-card to-card/50 border border-border/50 rounded-2xl group-hover:border-accent/30 group-hover:shadow-lg group-hover:shadow-accent/20 transition-all duration-300">
              <GraduationCap className="w-10 h-10 text-accent" />
            </div>
          </div>
          <div className="flex-1">
            <h4 className="text-2xl font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300">{education.degree}</h4>
            <p className="text-text-secondary text-lg mb-2">{education.institution}</p>
            <p className="text-text-muted text-sm mb-4">{education.location} • {education.graduationYear}</p>
            <div className="flex flex-wrap gap-2">
              {education.academicFocusAreas.map((area, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-gradient-to-br from-surface to-surface/50 text-text-secondary text-sm rounded-full border border-border hover:border-accent hover:text-accent hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
                >
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
