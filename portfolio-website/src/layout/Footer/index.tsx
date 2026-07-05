import resumeData from '../../../../homepage/portfolio/master-resume.json';
import { ArrowUp } from 'lucide-react';
import { FooterLinks } from './FooterLinks';
import { SocialLinks } from './SocialLinks';
import { ContactInfo } from './ContactInfo';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const fullName = resumeData.contact.fullName;
  const tagline = (resumeData.profile as { tagline?: string }).tagline;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <h4 className="text-text-primary text-xl font-bold mb-2">{fullName}</h4>
            {tagline && (
              <p className="text-text-secondary text-sm font-medium mb-4">{tagline}</p>
            )}
            <p className="text-text-muted text-sm">
              Full-Stack Software Engineer specializing in Backend Systems, Cloud Infrastructure, and DevOps.
            </p>
          </div>

          <FooterLinks />
          <SocialLinks />
          <ContactInfo />
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">
            © {currentYear} {fullName}. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 text-text-secondary hover:text-accent text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface rounded-lg"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
