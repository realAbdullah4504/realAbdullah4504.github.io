import { CTAButtons } from './CTAButtons';
import resumeData from '../../../../homepage/portfolio/master-resume.json';

export function Contact() {
  const data = resumeData;

  return (
    <section className="py-24 px-6 bg-surface" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-text-primary mb-4">Get In Touch</h2>
        <p className="text-lg text-text-secondary mb-12">
          Interested in working together? Let's discuss your project.
        </p>

        <CTAButtons
          email={data.contact.email}
          linkedin={data.contact.linkedin}
        />
      </div>
    </section>
  );
}
