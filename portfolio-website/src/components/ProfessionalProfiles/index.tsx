import { ProfileCard } from './ProfileCard';
import { FadeInSection } from '../../utils/animations';
import { useResumeData } from '../../hooks/useResumeData';
import upworkIcon from '../../assets/upwork-icon.png';
import fiverrIcon from '../../assets/fiverr-icon.svg';
import freelancerIcon from '../../assets/freelancer-icon.svg';
import guruIcon   from '../../assets/guru-icon.png';

export function ProfessionalProfiles() {
  const { data } = useResumeData();
  
  // Transform freelance_platforms object into array format
  const profiles = [
    { platform: 'Upwork', url: data.contact.freelance_platforms.upwork, icon: upworkIcon },
    { platform: 'Fiverr', url: data.contact.freelance_platforms.fiverr, icon: fiverrIcon },
    { platform: 'Freelancer', url: data.contact.freelance_platforms.freelancer, icon: freelancerIcon },
    { platform: 'Guru', url: data.contact.freelance_platforms.guru, icon: guruIcon },
  ];

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-background via-background to-background/95 relative overflow-hidden" id="professional-profiles">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(var(--accent-rgb),0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_50%,rgba(var(--accent-rgb),0.03),transparent_30%)]" />
      
      <FadeInSection className="max-w-5xl mx-auto relative">
        {/* Section header with premium styling */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-accent">Professional Presence</span>
          </div>
          
          <h2 className="text-5xl font-bold text-text-primary mb-4 bg-gradient-to-r from-text-primary via-text-primary to-text-secondary bg-clip-text text-transparent">
            Freelance Platforms
          </h2>
          
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Connect with me across multiple professional platforms for project collaboration and services
          </p>
        </div>
        
        {/* Grid layout with enhanced spacing */}
        <div className="grid md:grid-cols-2 gap-5">
          {profiles.map((profile, index) => (
            <FadeInSection key={profile.platform} delay={index * 0.1}>
              <ProfileCard profile={profile} />
            </FadeInSection>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
}
