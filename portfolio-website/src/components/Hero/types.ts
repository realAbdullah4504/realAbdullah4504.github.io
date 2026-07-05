export interface HeroProps {
  fullName: string;
  professionalTitle: string;
  yearsOfExperience: number;
  location: string;
  positioningStatement: string;
  socialLinks: {
    linkedin: string;
    github: string;
    email: string;
  };
  onPrimaryCTA: () => void;
  onSecondaryCTA: () => void;
}

export interface HeroHeaderProps {
  fullName: string;
  professionalTitle: string;
}

export interface HeroBadgesProps {
  yearsOfExperience: number;
  location: string;
}

export interface HeroPositioningProps {
  positioningStatement: string;
}

export interface SocialLinksProps {
  linkedin: string;
  github: string;
  email: string;
}

export interface CTAButtonsProps {
  onPrimaryCTA: () => void;
  onSecondaryCTA: () => void;
}
