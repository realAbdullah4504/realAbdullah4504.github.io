import type { HeroHeaderProps } from './types';

export function HeroHeader({ fullName, professionalTitle }: HeroHeaderProps) {
  return (
    <div className="text-center mb-6">
      <h1 className="text-5xl md:text-7xl font-bold text-text-primary mb-3">
        {fullName}
      </h1>
      <h2 className="text-2xl md:text-4xl font-semibold text-text-secondary">
        {professionalTitle}
      </h2>
    </div>
  );
}
