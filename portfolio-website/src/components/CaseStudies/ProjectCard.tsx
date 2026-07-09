import { Link } from 'react-router-dom';
import { Calendar, Building2, ArrowRight } from 'lucide-react';
import { TechStackTags } from './TechStackTags';
import { HoverCard } from '../../utils/animations';
import { createProjectSlug, formatDuration } from '../../utils/dataUtils';
import type { ProjectCardProps } from './types';

export function ProjectCard({ project }: ProjectCardProps) {
  const slug = createProjectSlug(project.name);
  const duration = formatDuration(project.duration.start, project.duration.end);

  return (
    <HoverCard className="bg-card border border-border rounded-2xl p-6 shadow-sm">
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-text-primary mb-2">{project.name}</h3>
          <div className="flex flex-wrap gap-3 text-xs text-text-muted mb-2">
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
      
      <p className="text-text-secondary text-sm mb-4 leading-relaxed line-clamp-3">
        {project.description}
      </p>
      
      <div className="mb-4">
        <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-2">Technologies</h4>
        <TechStackTags technologies={project.technologies.slice(0, 6)} />
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.slice(0, 3).map((tag, index) => (
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
