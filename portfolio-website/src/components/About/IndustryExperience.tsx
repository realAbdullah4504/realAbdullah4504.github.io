import type { IndustryExperienceProps } from './types';

export function IndustryExperience({ industryExperience }: IndustryExperienceProps) {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-text-primary mb-4">Industry Experience</h3>
      <div className="flex flex-wrap gap-2">
        {industryExperience.map((industry) => (
          <span
            key={industry}
            className="bg-surface text-text-secondary px-4 py-2 rounded-full border border-border hover:bg-card hover:border-accent transition-all duration-200"
          >
            {industry}
          </span>
        ))}
      </div>
    </div>
  );
}
