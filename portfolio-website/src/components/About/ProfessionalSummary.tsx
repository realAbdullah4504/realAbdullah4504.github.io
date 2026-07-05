import type { ProfessionalSummaryProps } from './types';

export function ProfessionalSummary({ professionalSummary }: ProfessionalSummaryProps) {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-text-primary mb-4">Professional Summary</h3>
      <p className="text-text-secondary leading-relaxed text-lg">{professionalSummary}</p>
    </div>
  );
}
