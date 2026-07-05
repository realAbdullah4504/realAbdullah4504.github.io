import type { ComplexityBadgeProps } from './types';

export function ComplexityBadge({ complexity }: ComplexityBadgeProps) {
  const colors = {
    High: 'bg-danger/10 text-danger border border-danger/20',
    'Medium to High': 'bg-warning/10 text-warning border border-warning/20',
    Medium: 'bg-warning/10 text-warning border border-warning/20',
    Low: 'bg-success/10 text-success border border-success/20',
  };

  const colorClass = colors[complexity as keyof typeof colors] || 'bg-gray-100 text-gray-700';

  return (
    <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${colorClass} transition-colors duration-200`}>
      {complexity}
    </span>
  );
}
