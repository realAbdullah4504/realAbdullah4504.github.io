import type { FlagshipProjectsProps } from './types';

export function FlagshipProjects({ projects }: FlagshipProjectsProps) {
  if (!projects || projects.length === 0) return null;

  return (
    <div>
      <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-2">Flagship Projects</h4>
      <div className="flex flex-wrap gap-2">
        {projects.map((project, index) => (
          <span key={index} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded border border-accent/20 hover:bg-accent/20 transition-colors duration-200">
            {project}
          </span>
        ))}
      </div>
    </div>
  );
}
