import type { SoftSkillsProps } from './types';

export function SoftSkills({ softSkills }: SoftSkillsProps) {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-text-primary mb-4">Soft Skills</h3>
      <div className="flex flex-wrap gap-2">
        {softSkills.map((skill) => (
          <span
            key={skill}
            className="bg-surface text-text-secondary px-4 py-2 rounded-full border border-border hover:bg-card hover:border-accent transition-all duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
