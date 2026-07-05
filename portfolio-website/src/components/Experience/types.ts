export interface Experience {
  company: string;
  position: string;
  employmentType: string;
  location: string;
  startDate: string;
  endDate: string | null;
  overview: string;
  responsibilities: string[];
  technologies: string[];
  flagshipProjects: string[];
}

export interface ExperienceProps {
  experiences: Experience[];
}

export interface TimelineProps {
  experiences: Experience[];
}

export interface TimelineItemProps {
  experience: Experience;
  isLast: boolean;
}

export interface RoleCardProps {
  experience: Experience;
}

export interface ResponsibilitiesListProps {
  responsibilities: string[];
}

export interface TechnologyTagsProps {
  technologies: string[];
}

export interface FlagshipProjectsProps {
  projects: string[];
}
