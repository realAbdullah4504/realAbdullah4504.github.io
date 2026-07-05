import type { TechStackTagsProps } from './types';

export function TechStackTags({ technologies }: TechStackTagsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.slice(0, 6).map((tech, index) => (
        <span key={index} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded border border-accent/20 hover:bg-accent/20 transition-colors duration-200">
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
