import { Link, Globe } from 'lucide-react';
import type { SocialLinksProps } from './types';

export function SocialLinks({ linkedin, github, portfolioWebsite, otherProfiles }: SocialLinksProps) {
  const socialItems = [
    { icon: Link, href: linkedin, label: 'LinkedIn' },
    { icon: Link, href: github, label: 'GitHub' },
    { icon: Globe, href: portfolioWebsite, label: 'Portfolio' },
    { icon: Link, href: otherProfiles.upwork, label: 'Upwork' },
    { icon: Link, href: otherProfiles.fiverr, label: 'Fiverr' },
  ];

  return (
    <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
      <h3 className="text-xl font-bold text-text-primary mb-4">Social Profiles</h3>
      <div className="flex flex-wrap gap-3">
        {socialItems.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex items-center gap-2 px-4 py-2 bg-surface hover:bg-background text-text-secondary border border-border rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            <Icon className="w-4 h-4" />
            <span className="text-sm font-medium">{label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
