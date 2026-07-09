import { ProjectCard } from './ProjectCard';
import { FadeInSection } from '../../utils/animations';
import { useResumeData } from '../../hooks/useResumeData';

export function CaseStudies() {
  const { getFeaturedProjects } = useResumeData();
  
  // Get first 4 projects as featured
  const featuredProjects = getFeaturedProjects(4);

  return (
    <section className="py-24 px-6 bg-surface" id="case-studies">
      <FadeInSection className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-text-primary mb-12 text-center">Featured Projects</h2>
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
