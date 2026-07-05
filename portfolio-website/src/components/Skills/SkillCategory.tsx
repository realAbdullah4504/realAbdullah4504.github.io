import { SkillTags } from './SkillTags';
import { HoverCard } from '../../utils/animations';
import type { SkillCategoryProps } from './types';

export function SkillCategory({ categoryName, skills }: SkillCategoryProps) {
  return (
    <HoverCard className="bg-card border border-border rounded-2xl p-6 shadow-sm">
      <h3 className="text-lg font-bold text-text-primary mb-4">{categoryName}</h3>
      <SkillTags skills={skills} />
    </HoverCard>
  );
}
