import { ComplexityBadge } from '../CaseStudies/ComplexityBadge';
import { TechStackTags } from '../CaseStudies/TechStackTags';
import { OutcomesList } from '../CaseStudies/OutcomesList';
import { HoverCard } from '../../utils/animations';
import { FadeInSection } from '../../utils/animations';
import resumeData from '../../../../homepage/portfolio/master-resume.json';

function ProjectCard({ project }: any) {
  return (
    <HoverCard className="bg-card border border-border rounded-2xl p-6 shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-text-primary mb-1">{project.name}</h3>
          <p className="text-sm text-text-muted">{project.projectType}</p>
        </div>
        <ComplexityBadge complexity={project.complexity} />
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
        {project.capabilityTags.slice(0, 3).map((tag: string, index: number) => (
          <span key={index} className="px-2 py-1 bg-surface text-text-muted text-xs rounded border border-border hover:border-accent hover:text-accent transition-colors duration-200">
            {tag}
          </span>
        ))}
      </div>
    </HoverCard>
  );
}

export function AllProjects() {
  const data = resumeData;
  
  const featuredProjects = data.projects
    .filter(project => project.metadata.portfolioPriority <= 4)
    .sort((a, b) => a.metadata.portfolioPriority - b.metadata.portfolioPriority);

  return (
    <section className="py-24 px-6 bg-background" id="all-projects">
      <FadeInSection className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-text-primary mb-12 text-center">All Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <FadeInSection key={index} delay={index * 0.05}>
              <ProjectCard project={project} />
            </FadeInSection>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
}
