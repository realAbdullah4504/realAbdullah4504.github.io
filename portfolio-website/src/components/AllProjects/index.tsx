import { Link } from 'react-router-dom';
import { Calendar, Building2, ArrowRight } from 'lucide-react';
import { TechStackTags } from '../CaseStudies/TechStackTags';
import { HoverCard } from '../../utils/animations';
import { FadeInSection } from '../../utils/animations';
import { useResumeData } from '../../hooks/useResumeData';
import { createProjectSlug, formatDuration } from '../../utils/dataUtils';
import type { Project } from '../../types/resume.types';

function ProjectCard({ project }: { project: Project }) {
  const slug = createProjectSlug(project.name);
  const duration = formatDuration(project.duration.start, project.duration.end);

  return (
    <HoverCard className="bg-card border border-border rounded-2xl p-6 shadow-sm">
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-text-primary mb-2">{project.name}</h3>
          <div className="flex flex-wrap gap-2 text-xs text-text-muted mb-2">
            <span className="flex items-center gap-1">
              <Building2 className="w-3 h-3" />
              {project.company_or_client}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {duration}
            </span>
          </div>
          <span className="inline-block px-2 py-1 bg-accent/10 text-accent text-xs rounded border border-accent/20">
            {project.type}
          </span>
        </div>
      </div>
      
      <p className="text-text-secondary text-sm mb-3 leading-relaxed line-clamp-2">
        {project.description}
      </p>
      
      <div className="mb-3">
        <TechStackTags technologies={project.technologies.slice(0, 4)} />
      </div>
      
      <div className="flex flex-wrap gap-2 mb-3">
        {project.tags.slice(0, 2).map((tag, index) => (
          <span key={index} className="px-2 py-1 bg-surface text-text-muted text-xs rounded border border-border">
            {tag}
          </span>
        ))}
      </div>

      <Link
        to={`/projects/${slug}`}
        className="inline-flex items-center gap-2 text-accent hover:text-blue-600 text-sm font-medium transition-colors duration-200"
      >
        View Details
        <ArrowRight className="w-4 h-4" />
      </Link>
    </HoverCard>
  );
}

export function AllProjects() {
  const { getAllProjects } = useResumeData();
  const allProjects = getAllProjects();

  return (
    <section className="py-24 px-6 bg-background" id="all-projects">
      <FadeInSection className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-text-primary mb-12 text-center">All Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProjects.map((project, index) => (
            <FadeInSection key={index} delay={index * 0.05}>
              <ProjectCard project={project} />
            </FadeInSection>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
}
