import type { Project } from '../../types/resume.types';

export interface CaseStudiesProps {
  projects: Project[];
}

export interface ProjectCardProps {
  project: Project;
}

export interface TechStackTagsProps {
  technologies: string[];
}

export interface OutcomesListProps {
  outcomes: string[];
}

export interface ComplexityBadgeProps {
  complexity: string;
}
