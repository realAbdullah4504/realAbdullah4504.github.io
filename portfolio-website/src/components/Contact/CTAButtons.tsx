import { Mail, Link, Download } from 'lucide-react';
import type { ComponentPropsWithoutRef } from 'react';
import resumeData from '../../../../homepage/portfolio/master-resume.json';

type CTAButtonsProps = {
  email: string;
  linkedin: string;
} & ComponentPropsWithoutRef<'div'>;

export function CTAButtons({ email, linkedin, className = '', ...props }: CTAButtonsProps) {
  const contact = resumeData.contact as { resumeUrl?: string };
  const resumeUrl = contact.resumeUrl;

  return (
    <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${className}`} {...props}>
      <a
        href={`mailto:${email}`}
        className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-accent hover:bg-blue-600 text-white font-semibold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
      >
        <Mail className="w-5 h-5" />
        Send Email
      </a>

      {resumeUrl && (
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-transparent border border-border hover:bg-surface text-text-secondary font-semibold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
        >
          <Download className="w-5 h-5" />
          Download Resume
        </a>
      )}

      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-transparent border border-border hover:bg-surface text-text-secondary font-semibold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
      >
        <Link className="w-5 h-5" />
        Connect on LinkedIn
      </a>
    </div>
  );
}
