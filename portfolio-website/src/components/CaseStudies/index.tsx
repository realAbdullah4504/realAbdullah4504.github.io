import { ProjectCard } from './ProjectCard';
import resumeData from '../../../../homepage/portfolio/master-resume.json';

export function CaseStudies() {
  const data = resumeData;
  
  // Filter projects by portfolioPriority (1-4 for featured)
  const featuredProjects = data.projects
    .filter(project => project.metadata.portfolioPriority <= 4)
    .sort((a, b) => a.metadata.portfolioPriority - b.metadata.portfolioPriority);

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 bg-white" id="case-studies">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Case Studies</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
