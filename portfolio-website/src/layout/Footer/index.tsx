import { useResumeData } from '../../hooks/useResumeData';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import upworkIcon from '../../assets/upwork-icon.png';
import fiverrIcon from '../../assets/fiverr-icon.svg';

export function Footer() {
  const { data } = useResumeData();
  const fullName = data.identity.name;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
            <span className="text-text-primary font-semibold text-sm">{fullName}</span>
            <span className="hidden md:inline text-text-muted">·</span>
            <span className="text-text-muted text-sm">{data.identity.professional_title}</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={data.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-colors duration-200"
              aria-label="GitHub"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href={data.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a
              href={data.contact.freelance_platforms.upwork}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-text-muted hover:text-accent transition-colors duration-200"
            >
              <img src={upworkIcon} alt="Upwork" className="w-4 h-4" />
            </a>
            <a
              href={data.contact.freelance_platforms.fiverr}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-text-muted hover:text-accent transition-colors duration-200"
            >
              <img src={fiverrIcon} alt="Fiverr" className="w-4 h-4" />
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
