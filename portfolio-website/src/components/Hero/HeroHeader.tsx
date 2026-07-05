import type { HeroHeaderProps } from './types';

export function HeroHeader({ fullName, professionalTitle }: HeroHeaderProps) {
  return (
    <div className="text-center mb-6">
      <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-3">
        {fullName}
      </h1>
      <h2 className="text-2xl md:text-4xl font-semibold text-gray-700">
        {professionalTitle}
      </h2>
    </div>
  );
}
