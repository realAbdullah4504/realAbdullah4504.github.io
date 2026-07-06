export interface AboutProps {
  professionalSummary: string;
  engineeringAchievements: string[];
  education: {
    degree: string;
    institution: string;
    location: string;
    graduationYear: number;
    academicFocusAreas: string[];
  };
  certifications: {
    certificationName: string;
    issuer: string;
    year: number;
  }[];
}

export interface ProfessionalSummaryProps {
  professionalSummary: string;
}

export interface EngineeringAchievementsProps {
  achievements: string[];
}

export interface EducationProps {
  education: {
    degree: string;
    institution: string;
    location: string;
    graduationYear: number;
    academicFocusAreas: string[];
  };
}

export interface CertificationsProps {
  certifications: {
    certificationName: string;
    issuer: string;
    year: number;
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

export interface ProfessionalProfilesProps {
  profiles: {
    platform: string;
    url: string;
  }[];
}

export interface WorkPreferencesProps {
  employmentTypes: string[];
  workArrangement: string;
}

export interface EngineeringFocusAreasProps {
  focusAreas: string[];
}
