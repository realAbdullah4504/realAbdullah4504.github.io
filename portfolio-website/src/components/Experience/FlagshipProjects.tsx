import type { FlagshipProjectsProps } from './types';

export function FlagshipProjects({ projects }: FlagshipProjectsProps) {
  if (projects.length === 0) return null;

  return (
    <div>
      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Flagship Projects</h4>
      <div className="flex flex-wrap gap-2">
        {projects.map((project, index) => (
          <span key={index} className="px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded hover:bg-purple-100 transition-colors duration-200">
            {project}
          </span>
        ))}
      </div>
    </div>
  );
}
