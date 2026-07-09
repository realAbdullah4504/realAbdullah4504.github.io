import { ResponsibilitiesList } from './ResponsibilitiesList';
import { TechnologyTags } from './TechnologyTags';
import { FlagshipProjects } from './FlagshipProjects';
import { HoverCard } from '../../utils/animations';
import { formatDuration } from '../../utils/dataUtils';
import type { RoleCardProps } from './types';

export function RoleCard({ experience }: RoleCardProps) {
  const duration = formatDuration(experience.duration.start, experience.duration.end);

  return (
    <HoverCard className="bg-card border border-border rounded-2xl p-6 ml-6 shadow-sm">
      <div className="flex flex-wrap justify-between items-start mb-3">
        <div>
          <h3 className="text-xl font-bold text-text-primary">{experience.title}</h3>
          <p className="text-lg font-semibold text-text-secondary">{experience.company}</p>
        </div>
        <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/20">
          {experience.employment_type}
        </span>
      </div>
      
      <p className="text-text-muted text-sm mb-3">
        {experience.location} • {duration}
      </p>
      
      <p className="text-text-secondary text-sm mb-4 leading-relaxed">{experience.overview}</p>
      
      <div className="mb-4">
        <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-2">Key Responsibilities</h4>
        <ResponsibilitiesList responsibilities={experience.responsibilities} />
      </div>
      
      <div className="mb-4">
        <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-2">Technologies</h4>
        <TechnologyTags technologies={experience.technologies} />
      </div>
      
      {experience.featured_projects.length > 0 && (
        <FlagshipProjects projects={experience.featured_projects} />
      )}
    </HoverCard>
  );
}
