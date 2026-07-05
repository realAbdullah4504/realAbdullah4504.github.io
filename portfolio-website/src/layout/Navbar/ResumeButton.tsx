import { Download } from 'lucide-react';
import type { ComponentPropsWithoutRef } from 'react';
import resumeData from '../../../../homepage/portfolio/master-resume.json';

type ResumeButtonProps = ComponentPropsWithoutRef<'a'>;

export function ResumeButton({ className = '', ...props }: ResumeButtonProps) {
  const contact = resumeData.contact as { resumeUrl?: string };
  const resumeUrl = contact.resumeUrl;

  if (!resumeUrl) return null;

  return (
    <a
      href={resumeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-blue-600 text-white text-sm font-semibold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background ${className}`}
      {...props}
    >
      <Download className="w-4 h-4" />
      Download Resume
    </a>
  );
}
