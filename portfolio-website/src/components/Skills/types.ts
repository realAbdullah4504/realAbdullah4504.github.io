export interface TechnicalSkills {
  languages: string[];
  backend: string[];
  frontend: string[];
  cloud: string[];
  containers: string[];
  cicd: string[];
  databases: string[];
  messagingEventStreaming: string[];
  distributedSystems: string[];
  monitoringObservability: string[];
  automationTesting: string[];
}

export interface SkillsProps {
  technicalSkills: TechnicalSkills;
}

export interface SkillCategoryProps {
  categoryName: string;
  skills: string[];
}

export interface SkillTagsProps {
  skills: string[];
}

export interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}
