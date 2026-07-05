import { HeroHeader } from './HeroHeader';
import { HeroBadges } from './HeroBadges';
import { HeroPositioning } from './HeroPositioning';
import { SocialLinks } from './SocialLinks';
import { CTAButtons } from './CTAButtons';
import resumeData from '../../../../homepage/portfolio/master-resume.json';

export function Hero() {
  const data = resumeData;

  const handlePrimaryCTA = () => {
    console.log('View Projects clicked');
    // TODO: Scroll to projects section or navigate
  };

  const handleSecondaryCTA = () => {
    console.log('Contact Me clicked');
    // TODO: Scroll to contact section or navigate
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 bg-gradient-to-b from-background to-surface">
      <div className="max-w-4xl mx-auto text-center">
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
          portfolioWebsite={data.contact.portfolioWebsite}
          email={data.contact.email}
        />
        <CTAButtons
          onPrimaryCTA={handlePrimaryCTA}
          onSecondaryCTA={handleSecondaryCTA}
        />
      </div>
    </section>
  );
}
