import type { ProjectTagsProps } from './types';

export function ProjectTags({ projects }: ProjectTagsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {projects.slice(0, 3).map((project, index) => (
        <span key={index} className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/20 hover:bg-accent/20 transition-colors duration-200">
          {project}
        </span>
      ))}
      {projects.length > 3 && (
        <span className="px-3 py-1 bg-card text-text-muted text-xs rounded-full border border-border">
          +{projects.length - 3} more
        </span>
      )}
    </div>
  );
}
