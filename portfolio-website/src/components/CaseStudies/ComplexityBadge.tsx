import type { ComplexityBadgeProps } from './types';

export function ComplexityBadge({ complexity }: ComplexityBadgeProps) {
  const colors = {
    High: 'bg-red-100 text-red-700',
    'Medium to High': 'bg-orange-100 text-orange-700',
    Medium: 'bg-yellow-100 text-yellow-700',
    Low: 'bg-green-100 text-green-700',
  };

  const colorClass = colors[complexity as keyof typeof colors] || 'bg-gray-100 text-gray-700';

  return (
    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${colorClass} transition-colors duration-200`}>
      {complexity}
    </span>
  );
}
