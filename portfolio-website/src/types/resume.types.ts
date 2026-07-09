// TypeScript interfaces matching the new master-resume.json structure

export interface Language {
  language: string;
  proficiency: string;
}

export interface Identity {
  name: string;
  professional_title: string;
  years_of_experience: string;
  location: string;
  languages: Language[];
  availability: string;
  work_preferences: string[];
}

export interface EngineeringPhilosophy {
  systems_ownership: string[];
  balanced_evolution: string[];
  reliability_first_engineering: string[];
  operational_excellence: string[];
}

export interface EngineeringCapabilities {
  system_design_and_architecture: string[];
  application_engineering: string[];
  distributed_systems_engineering: string[];
  data_engineering_and_automation: string[];
}

export interface Positioning {
  summary: string;
  engineering_philosophy: EngineeringPhilosophy;
  quantifiable_impact: string[];
  engineering_capabilities: EngineeringCapabilities;
}

export interface CloudPlatforms {
  aws: string[];
}

export interface Skills {
  programming_languages: string[];
  frontend_development: string[];
  backend_development: string[];
  databases_and_data_storage: string[];
  caching_and_message_queues: string[];
  cloud_platforms: CloudPlatforms;
  containerization_and_orchestration: string[];
  ci_cd: string[];
  infrastructure_as_code: string[];
  event_driven_systems_and_messaging: string[];
  observability_and_monitoring: string[];
  data_processing_and_automation: string[];
  apis_and_communication: string[];
  operating_systems_and_scripting: string[];
}

export interface Duration {
  start: string;
  end: string;
}

export interface Experience {
  title: string;
  company: string;
  employment_type: string;
  location: string;
  duration: Duration;
  overview: string;
  responsibilities: string[];
  featured_projects: string[];
  technologies: string[];
}

export interface ProjectLinks {
  live_demo: string | null;
  repository: string | null;
  case_study: string | null;
}

export interface Project {
  name: string;
  company_or_client: string;
  role: string;
  duration: Duration;
  type: string;
  description: string;
  business_impact: string[];
  engineering_highlights: string[];
  technologies: string[];
  tags: string[];
  links: ProjectLinks;
}

export interface FormalEducation {
  degree: string;
  institution: string;
  location: string;
  graduation_year: string;
  academic_focus_areas: string[];
}

export interface Education {
  formal_education: FormalEducation;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface FreelancePlatforms {
  upwork: string;
  fiverr: string;
  freelancer: string;
  guru: string;
}

export interface Contact {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  portfolio_website: string;
  freelance_platforms: FreelancePlatforms;
}

export interface Meta {
  version: string;
  generated_at: string;
  source_document: string;
}

export interface ResumeData {
  meta: Meta;
  identity: Identity;
  positioning: Positioning;
  skills: Skills;
  experience: Experience[];
  projects: Project[];
  education: Education;
  certifications: Certification[];
  contact: Contact;
  soft_skills: string[];
}
