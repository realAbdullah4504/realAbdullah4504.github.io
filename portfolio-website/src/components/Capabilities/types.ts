export interface Capability {
  name: string;
  description: string;
  points: string[];
}

export interface CapabilitiesProps {
  capabilities: Capability[];
}

export interface CapabilityCardProps {
  capability: Capability;
}

export interface ProjectTagsProps {
  projects: string[];
}

export interface TechnologyTagsProps {
  technologies: string[];
}
