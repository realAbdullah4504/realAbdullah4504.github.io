export interface AboutProps {
  professionalSummary: string;
  engineeringAchievements: string[];
  education: {
    degree: string;
    institution: string;
    location: string;
    graduationYear: string;
    academicFocusAreas: string[];
  };
  certifications: {
    name: string;
    issuer: string;
    year: string;
  }[];
}

export interface ProfessionalSummaryProps {
  professionalSummary: string;
}

export interface EngineeringAchievementsProps {
  achievements: string[];
}

export interface EngineeringPhilosophyProps {
  philosophy: {
    systems_ownership: string[];
    balanced_evolution: string[];
    reliability_first_engineering: string[];
    operational_excellence: string[];
  };
}

export interface EducationProps {
  education: {
    degree: string;
    institution: string;
    location: string;
    graduationYear: string;
    academicFocusAreas: string[];
  };
}

export interface CertificationsProps {
  certifications: {
    name: string;
    issuer: string;
    year: string;
  }[];
}

export interface LanguagesProps {
  languages: string[];
}

export interface SoftSkillsProps {
  softSkills: string[];
}

export interface IndustryExperienceProps {
  industryExperience: string[];
}

export interface WorkPreferencesProps {
  employmentTypes: string[];
  workArrangement: string;
}

export interface EngineeringFocusAreasProps {
  focusAreas: string[];
}
