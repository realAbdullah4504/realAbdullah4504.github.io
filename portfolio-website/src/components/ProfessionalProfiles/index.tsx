import { ProfileCard } from './ProfileCard';
import { FadeInSection } from '../../utils/animations';
import resumeData from '../../../../homepage/portfolio/master-resume.json';
import type { ProfessionalProfile } from './types';

export function ProfessionalProfiles() {
  const profiles = resumeData.contact.otherProfessionalProfiles as ProfessionalProfile[];

  if (!profiles || profiles.length === 0) {
    return null;
  }

  return (
    <section className="py-24 px-6 bg-background" id="professional-profiles">
      <FadeInSection className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-text-primary mb-12 text-center">Professional Profiles</h2>
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
