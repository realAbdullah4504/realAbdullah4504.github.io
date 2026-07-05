import type { TechnologyTagsProps } from './types';

export function TechnologyTags({ technologies }: TechnologyTagsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.slice(0, 5).map((tech, index) => (
        <span key={index} className="px-2 py-1 bg-card text-text-secondary text-xs rounded border border-border hover:bg-surface hover:text-accent transition-colors duration-200">
          {tech}
        </span>
      ))}
      {technologies.length > 5 && (
        <span className="px-2 py-1 bg-card text-text-muted text-xs rounded border border-border">
          +{technologies.length - 5}
        </span>
      )}
    </div>
  );
}
