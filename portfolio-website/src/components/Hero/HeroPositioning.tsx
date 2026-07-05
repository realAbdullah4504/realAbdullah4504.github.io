import type { HeroPositioningProps } from './types';

export function HeroPositioning({ positioningStatement }: HeroPositioningProps) {
  return (
    <p className="text-lg md:text-xl text-gray-600 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
      {positioningStatement}
    </p>
  );
}
