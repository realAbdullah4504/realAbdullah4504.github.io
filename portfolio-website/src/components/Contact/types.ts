export interface ContactProps {
  contact: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
    portfolioWebsite: string;
    otherProfiles: {
      upwork: string;
      fiverr: string;
      freelancer: string;
      guru: string;
    };
  };
}

export interface ContactInfoProps {
  email: string;
  phone: string;
  location: string;
}

export interface SocialLinksProps {
  linkedin: string;
  github: string;
  portfolioWebsite: string;
  otherProfiles: {
    upwork: string;
    fiverr: string;
    freelancer: string;
    guru: string;
  };
}

export interface CTAButtonsProps {
  email: string;
  linkedin: string;
}
