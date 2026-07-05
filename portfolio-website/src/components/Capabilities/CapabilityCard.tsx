import { ProjectTags } from './ProjectTags';
import { TechnologyTags } from './TechnologyTags';
import type { CapabilityCardProps } from './types';

export function CapabilityCard({ capability }: CapabilityCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
      <h3 className="text-xl font-bold text-gray-900 mb-3">{capability.name}</h3>
      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{capability.description}</p>
      
      <div className="mb-4">
        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Supporting Projects</h4>
        <ProjectTags projects={capability.supportingProjects} />
      </div>
      
      <div>
        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Technologies</h4>
        <TechnologyTags technologies={capability.supportingTechnologies} />
      </div>
    </div>
  );
}
