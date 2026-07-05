import type { SkillTagsProps } from './types';

export function SkillTags({ skills }: SkillTagsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span key={index} className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/20 hover:bg-accent/20 transition-colors duration-200">
          {skill}
        </span>
      ))}
    </div>
  );
}
