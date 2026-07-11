import { Award } from 'lucide-react';
import type { CertificationsProps } from './types';

export function Certifications({ certifications }: CertificationsProps) {
  return (
    <div>
      <h3 className="text-3xl font-bold text-text-primary mb-6 flex items-center gap-3">
        <div className="w-1 h-8 bg-gradient-to-b from-accent to-accent/50 rounded-full" />
        Certifications
      </h3>
      <div className="space-y-4">
        {certifications.map((cert, index) => (
          <div 
            key={index} 
            className="group relative flex items-center gap-4 bg-gradient-to-br from-card via-card to-card/50 border border-border/50 rounded-2xl p-6 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 overflow-hidden"
          >
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-accent/20 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-warning/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative p-3 bg-gradient-to-br from-card to-card/50 border border-border/50 rounded-xl group-hover:border-warning/30 group-hover:shadow-lg group-hover:shadow-warning/20 transition-all duration-300">
                <Award className="w-7 h-7 text-warning" />
              </div>
            </div>
            <div className="relative flex-1">
              <h4 className="font-semibold text-text-primary text-lg group-hover:text-warning transition-colors duration-300">{cert.name}</h4>
              <p className="text-text-muted text-sm">{cert.issuer} • {cert.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
