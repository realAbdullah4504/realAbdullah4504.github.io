import { ContactInfo } from './ContactInfo';
import { SocialLinks } from './SocialLinks';
import { CTAButtons } from './CTAButtons';
import resumeData from '../../../../homepage/portfolio/master-resume.json';

export function Contact() {
  const data = resumeData;

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 bg-white" id="contact">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Get In Touch</h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          Interested in working together? Let's discuss your project.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <ContactInfo
            email={data.contact.email}
            phone={data.contact.phone}
            location={data.contact.location}
          />
          <SocialLinks
            linkedin={data.contact.linkedin}
            github={data.contact.github}
            portfolioWebsite={data.contact.portfolioWebsite}
            otherProfiles={data.contact.otherProfiles}
          />
        </div>
        
        <CTAButtons
          email={data.contact.email}
          linkedin={data.contact.linkedin}
        />
      </div>
    </section>
  );
}
