export interface TechnicalSkills {
  Languages: string[];
  Backend: string[];
  Frontend: string[];
  Cloud: string[];
  Containers: string[];
  'CI/CD': string[];
  Databases: string[];
  Messaging: string[];
  'Distributed Systems': string[];
  Monitoring: string[];
  APIs: string[];
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
