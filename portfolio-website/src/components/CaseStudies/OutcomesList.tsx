import { Check } from 'lucide-react';
import type { OutcomesListProps } from './types';

export function OutcomesList({ outcomes }: OutcomesListProps) {
  return (
    <ul className="space-y-2.5">
      {outcomes.map((outcome, index) => (
        <li key={index} className="flex items-start gap-2 text-sm text-text-secondary leading-relaxed">
          <Check className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
          <span>{outcome}</span>
        </li>
      ))}
    </ul>
  );
}
