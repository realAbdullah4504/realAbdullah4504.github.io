export interface Project {
  identity: {
    name: string;
    projectType: string;
    associatedEmployment: string;
  };
  classification: {
    businessDomain: string;
    complexity: string;
    architectureStyle: string;
  };
  overview: string;
  engineeringContributions: string[];
  technicalStack: string[];
  measurableOutcomes: string[];
  capabilityTags: string[];
  metadata: {
    portfolioPriority: number;
  };
}

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
