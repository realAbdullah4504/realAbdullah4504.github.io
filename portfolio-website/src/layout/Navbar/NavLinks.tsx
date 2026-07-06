type NavLinkItem = {
  label: string;
  href: string;
};

const navLinks: NavLinkItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'All Projects', href: '#all-projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

type NavLinksProps = {
  activeSection?: string;
  onLinkClick?: (href: string) => void;
  className?: string;
};

export function NavLinks({ activeSection, onLinkClick, className = '' }: NavLinksProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (onLinkClick) {
      e.preventDefault();
      onLinkClick(href);
    }
  };

  return (
    <nav className={`flex items-center gap-6 ${className}`} aria-label="Main navigation">
      {navLinks.map((link) => {
        const isActive = activeSection === link.href.replace('#', '');
        return (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
            aria-current={isActive ? 'page' : undefined}
            className={`text-sm font-medium transition-colors duration-200 ${
              isActive
                ? 'text-accent'
                : 'text-text-secondary hover:text-accent'
            }`}
          >
            {link.label}
          </a>
        );
      })}
    </nav>
  );
}
