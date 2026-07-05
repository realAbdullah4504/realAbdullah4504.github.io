import type { SkillTagsProps } from './types';

export function SkillTags({ skills }: SkillTagsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span key={index} className="px-3 py-1 bg-indigo-50 text-indigo-700 text-sm rounded-full hover:bg-indigo-100 transition-colors duration-200">
          {skill}
        </span>
      ))}
    </div>
  );
}
