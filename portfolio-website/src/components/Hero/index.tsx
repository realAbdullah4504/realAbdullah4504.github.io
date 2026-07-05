import { HeroHeader } from './HeroHeader';
import { HeroBadges } from './HeroBadges';
import { HeroPositioning } from './HeroPositioning';
import { SocialLinks } from './SocialLinks';
import { CTAButtons } from './CTAButtons';
import { FadeInSection } from '../../utils/animations';
import resumeData from '../../../../homepage/portfolio/master-resume.json';

export function Hero() {
  const data = resumeData;

  const handlePrimaryCTA = () => {
    console.log('View Projects clicked');
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 bg-gradient-to-b from-background to-surface">
      <FadeInSection className="max-w-4xl mx-auto text-center" delay={0}>
        <HeroHeader
          fullName={data.contact.fullName}
          professionalTitle={data.profile.professionalTitle}
        />
        <HeroBadges
          yearsOfExperience={data.profile.yearsOfExperience}
          location={data.contact.location}
        />
        <HeroPositioning positioningStatement={data.profile.positioningStatement} />
        <SocialLinks
          linkedin={data.contact.linkedin}
          github={data.contact.github}
          email={data.contact.email}
        />
        <CTAButtons onPrimaryCTA={handlePrimaryCTA} />
      </FadeInSection>
    </section>
  );
}
