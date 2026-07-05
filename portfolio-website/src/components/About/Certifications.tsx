import { Award } from 'lucide-react';
import type { CertificationsProps } from './types';

export function Certifications({ certifications }: CertificationsProps) {
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Certifications</h3>
      <div className="space-y-3">
        {certifications.map((cert, index) => (
          <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1">
            <Award className="w-6 h-6 text-yellow-600 flex-shrink-0" />
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900">{cert.certificationName}</h4>
              <p className="text-gray-600 text-sm">{cert.issuer} • {cert.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
