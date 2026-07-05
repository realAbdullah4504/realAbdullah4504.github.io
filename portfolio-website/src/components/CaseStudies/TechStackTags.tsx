import type { TechStackTagsProps } from './types';

export function TechStackTags({ technologies }: TechStackTagsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.slice(0, 6).map((tech, index) => (
        <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded hover:bg-blue-100 transition-colors duration-200">
          {tech}
        </span>
      ))}
      {technologies.length > 6 && (
        <span className="px-2 py-1 bg-gray-50 text-gray-500 text-xs rounded">
          +{technologies.length - 6}
        </span>
      )}
    </div>
  );
}
