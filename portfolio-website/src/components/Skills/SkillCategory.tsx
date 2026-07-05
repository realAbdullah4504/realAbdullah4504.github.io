import { SkillTags } from './SkillTags';
import type { SkillCategoryProps } from './types';

export function SkillCategory({ categoryName, skills }: SkillCategoryProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200">
      <h3 className="text-lg font-bold text-gray-900 mb-4">{categoryName}</h3>
      <SkillTags skills={skills} />
    </div>
  );
}
