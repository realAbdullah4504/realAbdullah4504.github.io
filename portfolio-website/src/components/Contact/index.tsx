import { CTAButtons } from './CTAButtons';
import { FadeInSection } from '../../utils/animations';
import resumeData from '../../../../homepage/portfolio/master-resume.json';

export function Contact() {
  const data = resumeData;

  return (
    <section className="py-24 px-6 bg-surface" id="contact">
      <FadeInSection className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
          Let's Build Something Together
        </h2>
        <p className="text-lg text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
          I'm interested in full-time roles, contract engagements, and collaborations 
          with engineering teams that value reliable systems and clean architecture.
        </p>

        <CTAButtons
          email={data.contact.email}
          linkedin={data.contact.linkedIn}
          github={data.contact.github}
        />
      </FadeInSection>
    </section>
  );
}
