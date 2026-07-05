import { useState } from 'react';
import { Menu } from 'lucide-react';
import resumeData from '../../../../homepage/portfolio/master-resume.json';
import { NavLinks } from './NavLinks';
import { MobileMenu } from './MobileMenu';
import { ResumeButton } from './ResumeButton';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const fullName = resumeData.contact.fullName;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#hero');
              }}
              className="text-xl font-bold text-text-primary hover:text-accent transition-colors duration-200"
            >
              {fullName}
            </a>

            <NavLinks onLinkClick={handleLinkClick} />

            <div className="hidden md:flex items-center gap-4">
              <ResumeButton />
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors duration-200"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
