import { GraduationCap } from 'lucide-react';
import type { EducationProps } from './types';

export function Education({ education }: EducationProps) {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Education</h3>
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
        <div className="flex items-start gap-4">
          <GraduationCap className="w-8 h-8 text-gray-600 flex-shrink-0" />
          <div className="flex-1">
            <h4 className="text-xl font-semibold text-gray-900 mb-2">{education.degree}</h4>
            <p className="text-gray-700 mb-2">{education.institution}</p>
            <p className="text-gray-600 text-sm mb-3">{education.location} • {education.graduationYear}</p>
            <div className="flex flex-wrap gap-2">
              {education.academicFocusAreas.map((area, index) => (
                <span key={index} className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full border border-gray-200 hover:border-gray-300 transition-colors duration-200">
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
