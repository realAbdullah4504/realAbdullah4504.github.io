import type { TechnologyTagsProps } from './types';

export function TechnologyTags({ technologies }: TechnologyTagsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.slice(0, 5).map((tech, index) => (
        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded hover:bg-gray-200 transition-colors duration-200">
          {tech}
        </span>
      ))}
      {technologies.length > 5 && (
        <span className="px-2 py-1 bg-gray-50 text-gray-500 text-xs rounded">
          +{technologies.length - 5}
        </span>
      )}
    </div>
  );
}
