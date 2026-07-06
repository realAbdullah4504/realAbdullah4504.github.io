import resumeData from '../../../../homepage/portfolio/master-resume.json';
import { FaGithub, FaLinkedin, FaDownload, FaEnvelope } from 'react-icons/fa';

export function Footer() {
  const fullName = resumeData.contact.fullName;
  const currentYear = new Date().getFullYear();
  const contact = resumeData.contact as { resumeUrl?: string };
  const resumeUrl = contact.resumeUrl;

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
            <span className="text-text-primary font-semibold text-sm">{fullName}</span>
            <span className="hidden md:inline text-text-muted">·</span>
            <span className="text-text-muted text-sm">Full-Stack Systems & DevOps Engineer</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={resumeData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-colors duration-200"
              aria-label="GitHub"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href={resumeData.contact.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            {resumeUrl && (
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent transition-colors duration-200"
                aria-label="Resume"
              >
                <FaDownload className="w-4 h-4" />
              </a>
            )}
            <a
              href={`mailto:${resumeData.contact.email}`}
              className="text-text-muted hover:text-accent transition-colors duration-200"
              aria-label="Email"
            >
              <FaEnvelope className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-border text-center">
          <p className="text-text-muted text-xs">
            © {currentYear} {fullName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
