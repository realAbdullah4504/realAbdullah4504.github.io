import { Link, Globe, Mail } from 'lucide-react';
import type { SocialLinksProps } from './types';

export function SocialLinks({ linkedin, github, portfolioWebsite, email }: SocialLinksProps) {
  const socialItems = [
    { icon: Link, href: linkedin, label: 'LinkedIn' },
    { icon: Link, href: github, label: 'GitHub' },
    { icon: Globe, href: portfolioWebsite, label: 'Portfolio' },
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
          className="p-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-all duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          <Icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
}
