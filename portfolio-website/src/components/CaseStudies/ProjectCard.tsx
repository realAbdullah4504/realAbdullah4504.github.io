import { ComplexityBadge } from './ComplexityBadge';
import { TechStackTags } from './TechStackTags';
import { OutcomesList } from './OutcomesList';
import type { ProjectCardProps } from './types';

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-text-primary mb-1">{project.identity.name}</h3>
          <p className="text-sm text-text-muted">{project.identity.projectType}</p>
        </div>
        <ComplexityBadge complexity={project.classification.complexity} />
      </div>
      
      <p className="text-text-secondary text-sm mb-4 leading-relaxed">{project.overview}</p>
      
      <div className="mb-4">
        <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-2">Technical Stack</h4>
        <TechStackTags technologies={project.technicalStack} />
      </div>
      
      <div className="mb-4">
        <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-2">Key Outcomes</h4>
        <OutcomesList outcomes={project.measurableOutcomes} />
      </div>
      
      <div className="flex flex-wrap gap-2">
        {project.capabilityTags.slice(0, 3).map((tag, index) => (
          <span key={index} className="px-2 py-1 bg-surface text-text-muted text-xs rounded border border-border hover:border-accent hover:text-accent transition-colors duration-200">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
