import type { TechnologyTagsProps } from './types';

export function TechnologyTags({ technologies }: TechnologyTagsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.slice(0, 6).map((tech, index) => (
        <span key={index} className="px-2 py-1 bg-success/10 text-success text-xs rounded border border-success/20 hover:bg-success/20 transition-colors duration-200">
          {tech}
        </span>
      ))}
      {technologies.length > 6 && (
        <span className="px-2 py-1 bg-card text-text-muted text-xs rounded border border-border">
          +{technologies.length - 6}
        </span>
      )}
    </div>
  );
}
