import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Building2, User, ExternalLink } from 'lucide-react';
import { useResumeData } from '../hooks/useResumeData';
import { formatDuration } from '../utils/dataUtils';

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { getProjectBySlug } = useResumeData();

  if (!slug) {
    return <Navigate to="/" replace />;
  }

  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="min-h-screen py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-text-primary mb-4">Project Not Found</h1>
          <p className="text-text-secondary mb-8">The project you're looking for doesn't exist.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-accent hover:text-blue-600 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const duration = formatDuration(project.duration.start, project.duration.end);

  return (
    <div className="min-h-screen py-20 px-6 bg-surface">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors duration-200 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-text-primary mb-4">{project.name}</h1>
            
            <div className="flex flex-wrap gap-4 text-sm text-text-muted mb-4">
              <span className="flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                {project.company_or_client}
              </span>
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {project.role}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {duration}
              </span>
            </div>

            <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm rounded-lg border border-accent/20">
              {project.type}
            </span>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-text-primary mb-3">Overview</h2>
            <p className="text-text-secondary leading-relaxed">{project.description}</p>
          </div>

          {/* Business Impact */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-text-primary mb-3">Business Impact</h2>
            <ul className="space-y-3">
              {project.business_impact.map((impact, index) => (
                <li key={index} className="flex items-start gap-3 text-text-secondary">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                    ✓
                  </span>
                  <span>{impact}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Engineering Highlights */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-text-primary mb-3">Engineering Highlights</h2>
            <ul className="space-y-3">
              {project.engineering_highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3 text-text-secondary">
                  <span className="flex-shrink-0 w-6 h-6 bg-accent/10 text-accent rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                    {index + 1}
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-text-primary mb-3">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-surface text-text-secondary text-sm rounded-lg border border-border hover:border-accent hover:text-accent transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-text-primary mb-3">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-lg border border-accent/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {(project.links.live_demo || project.links.repository || project.links.case_study) && (
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-3">Links</h2>
              <div className="flex flex-wrap gap-3">
                {project.links.live_demo && (
                  <a
                    href={project.links.live_demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-accent hover:bg-blue-600 text-white rounded-lg transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
                {project.links.repository && (
                  <a
                    href={project.links.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-surface hover:bg-card text-text-primary border border-border rounded-lg transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Repository
                  </a>
                )}
                {project.links.case_study && (
                  <a
                    href={project.links.case_study}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-surface hover:bg-card text-text-primary border border-border rounded-lg transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Case Study
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
