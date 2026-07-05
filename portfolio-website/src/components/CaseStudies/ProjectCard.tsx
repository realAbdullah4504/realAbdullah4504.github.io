import { ComplexityBadge } from './ComplexityBadge';
import { TechStackTags } from './TechStackTags';
import { OutcomesList } from './OutcomesList';
import type { ProjectCardProps } from './types';

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">{project.identity.name}</h3>
          <p className="text-sm text-gray-600">{project.identity.projectType}</p>
        </div>
        <ComplexityBadge complexity={project.classification.complexity} />
      </div>
      
      <p className="text-gray-700 text-sm mb-4 leading-relaxed">{project.overview}</p>
      
      <div className="mb-4">
        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Technical Stack</h4>
        <TechStackTags technologies={project.technicalStack} />
      </div>
      
      <div className="mb-4">
        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Key Outcomes</h4>
        <OutcomesList outcomes={project.measurableOutcomes} />
      </div>
      
      <div className="flex flex-wrap gap-2">
        {project.capabilityTags.slice(0, 3).map((tag, index) => (
          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded hover:bg-gray-200 transition-colors duration-200">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
