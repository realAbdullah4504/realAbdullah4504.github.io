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
    certificationName: string;
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
    certificationName: string;
    issuer: string;
    year: string;
  }[];
}
