import type { ResponsibilitiesListProps } from './types';

export function ResponsibilitiesList({ responsibilities }: ResponsibilitiesListProps) {
  return (
    <ul className="space-y-2">
      {responsibilities.map((responsibility, index) => (
        <li key={index} className="flex items-start gap-2 text-sm text-text-secondary">
          <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0 mt-2" />
          <span>{responsibility}</span>
        </li>
      ))}
    </ul>
  );
}
