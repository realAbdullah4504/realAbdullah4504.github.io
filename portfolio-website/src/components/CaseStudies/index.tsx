import { ProjectCard } from './ProjectCard';
import { FadeInSection } from '../../utils/animations';
import resumeData from '../../../../homepage/portfolio/master-resume.json';

export function CaseStudies() {
  const data = resumeData;
  
  const featuredProjects = data.projects
    .filter(project => project.metadata.portfolioPriority <= 4)
    .sort((a, b) => a.metadata.portfolioPriority - b.metadata.portfolioPriority);

  return (
    <section className="py-24 px-6 bg-surface" id="case-studies">
      <FadeInSection className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-text-primary mb-12 text-center">Case Studies</h2>
        <div className="grid md:grid-cols-2 gap-6">
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
