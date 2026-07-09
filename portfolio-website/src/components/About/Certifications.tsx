import { Award } from 'lucide-react';
import type { CertificationsProps } from './types';

export function Certifications({ certifications }: CertificationsProps) {
  return (
    <div>
      <h3 className="text-2xl font-bold text-text-primary mb-4">Certifications</h3>
      <div className="space-y-3">
        {certifications.map((cert, index) => (
          <div key={index} className="flex items-center gap-3 bg-card p-4 rounded-xl border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
            <Award className="w-6 h-6 text-warning flex-shrink-0" />
            <div className="flex-1">
              <h4 className="font-semibold text-text-primary">{cert.name}</h4>
              <p className="text-text-muted text-sm">{cert.issuer} • {cert.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
