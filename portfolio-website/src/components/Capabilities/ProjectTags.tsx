import type { ProjectTagsProps } from './types';

export function ProjectTags({ projects }: ProjectTagsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {projects.slice(0, 3).map((project, index) => (
        <span key={index} className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full hover:bg-purple-200 transition-colors duration-200">
          {project}
        </span>
      ))}
      {projects.length > 3 && (
        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
          +{projects.length - 3} more
        </span>
      )}
    </div>
  );
}
