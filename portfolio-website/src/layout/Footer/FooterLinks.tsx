import type { ComponentPropsWithoutRef } from 'react';

type FooterLinksProps = ComponentPropsWithoutRef<'div'>;

export function FooterLinks({ className = '', ...props }: FooterLinksProps) {
  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div className={className} {...props}>
      <h3 className="text-text-primary font-semibold mb-4">Quick Links</h3>
      <ul className="space-y-2.5">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-text-secondary hover:text-accent text-sm transition-colors duration-200"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
