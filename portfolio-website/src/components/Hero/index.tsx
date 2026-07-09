import { HeroHeader } from './HeroHeader';
import { HeroBadges } from './HeroBadges';
import { HeroPositioning } from './HeroPositioning';
import { SocialLinks } from './SocialLinks';
import { CTAButtons } from './CTAButtons';
import { FadeInSection } from '../../utils/animations';
import { useResumeData } from '../../hooks/useResumeData';

export function Hero() {
  const { data } = useResumeData();

  const handlePrimaryCTA = () => {
    const target = document.querySelector('#case-studies');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-16 bg-gradient-to-b from-background to-surface">
      <FadeInSection className="max-w-4xl mx-auto text-center" delay={0}>
        <HeroHeader
          fullName={data.identity.name}
          professionalTitle={data.identity.professional_title}
        />
        <HeroBadges
          yearsOfExperience={data.identity.years_of_experience}
          location={data.identity.location}
          availability={data.identity.availability}
        />
        <HeroPositioning positioningStatement={data.positioning.summary} />
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
