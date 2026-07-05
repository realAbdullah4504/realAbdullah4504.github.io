import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import type { SocialLinksProps } from './types';

export function SocialLinks({ linkedin, github, email }: SocialLinksProps) {
  const socialItems = [
    { icon: FaLinkedin, href: linkedin, label: 'LinkedIn' },
    { icon: FaGithub, href: github, label: 'GitHub' },
    { icon: Mail, href: `mailto:${email}`, label: 'Email' },
  ];

  return (
    <div className="flex justify-center gap-4 mb-8">
      {socialItems.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="p-3 bg-surface hover:bg-card text-text-secondary border border-border rounded-full transition-all duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <Icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
}
