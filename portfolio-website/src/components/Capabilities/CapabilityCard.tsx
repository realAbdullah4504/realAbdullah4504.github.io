import { ProjectTags } from './ProjectTags';
import { TechnologyTags } from './TechnologyTags';
import type { CapabilityCardProps } from './types';

export function CapabilityCard({ capability }: CapabilityCardProps) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
      <h3 className="text-xl font-bold text-text-primary mb-3">{capability.name}</h3>
      <p className="text-text-secondary text-sm mb-4 leading-relaxed">{capability.description}</p>
      
      <div className="mb-4">
        <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-2">Supporting Projects</h4>
        <ProjectTags projects={capability.supportingProjects} />
      </div>
      
      <div>
        <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-2">Technologies</h4>
        <TechnologyTags technologies={capability.supportingTechnologies} />
      </div>
    </div>
  );
}
