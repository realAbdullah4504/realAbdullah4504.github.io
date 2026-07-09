import { ProfileCard } from './ProfileCard';
import { FadeInSection } from '../../utils/animations';
import { useResumeData } from '../../hooks/useResumeData';

export function ProfessionalProfiles() {
  const { data } = useResumeData();
  
  // Transform freelance_platforms object into array format
  const profiles = [
    { platform: 'Upwork', url: data.contact.freelance_platforms.upwork },
    { platform: 'Fiverr', url: data.contact.freelance_platforms.fiverr },
    { platform: 'Freelancer', url: data.contact.freelance_platforms.freelancer },
    { platform: 'Guru', url: data.contact.freelance_platforms.guru },
  ];

  return (
    <section className="py-24 px-6 bg-background" id="professional-profiles">
      <FadeInSection className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-text-primary mb-12 text-center">Freelance Platforms</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {profiles.map((profile, index) => (
            <FadeInSection key={profile.platform} delay={index * 0.05}>
              <ProfileCard profile={profile} />
            </FadeInSection>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
}
