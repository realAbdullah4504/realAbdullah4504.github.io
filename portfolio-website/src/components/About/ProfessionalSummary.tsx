import type { ProfessionalSummaryProps } from './types';

export function ProfessionalSummary({ professionalSummary }: ProfessionalSummaryProps) {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Summary</h3>
      <p className="text-gray-700 leading-relaxed text-lg">{professionalSummary}</p>
    </div>
  );
}
