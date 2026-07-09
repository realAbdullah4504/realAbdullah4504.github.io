import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useResumeData } from '../../hooks/useResumeData';
import { NavLinks } from './NavLinks';
import { MobileMenu } from './MobileMenu';
import { ResumeButton } from './ResumeButton';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data } = useResumeData();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLinkClick = (href: string) => {
    // If we're on a project detail page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation then scroll
      setTimeout(() => {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    if (location.pathname !== '/') {
      // Let the default Link behavior work
      return;
    }
    // If already on home, scroll to top
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const fullName = data.identity.name;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <a
              href="/"
              onClick={handleHomeClick}
              className="text-xl font-bold text-text-primary hover:text-accent transition-colors duration-200"
            >
              {fullName}
            </a>

            <NavLinks onLinkClick={handleLinkClick} className="hidden md:flex" />

            <div className="hidden md:flex items-center gap-4">
              <ResumeButton />
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 -mr-2 text-text-secondary hover:text-text-primary transition-colors duration-200"
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
