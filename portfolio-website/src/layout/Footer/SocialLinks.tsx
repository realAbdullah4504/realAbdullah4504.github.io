import resumeData from '../../../../homepage/portfolio/master-resume.json';
import { Link, Globe, ExternalLink } from 'lucide-react';
import type { ComponentPropsWithoutRef } from 'react';

type SocialLinksProps = ComponentPropsWithoutRef<'div'>;

const socialItems = [
  { icon: Link, href: resumeData.contact.linkedin, label: 'LinkedIn' },
  { icon: Link, href: resumeData.contact.github, label: 'GitHub' },
  { icon: Globe, href: resumeData.contact.portfolioWebsite, label: 'Portfolio' },
  { icon: ExternalLink, href: resumeData.contact.otherProfiles.upwork, label: 'Upwork' },
  { icon: ExternalLink, href: resumeData.contact.otherProfiles.fiverr, label: 'Fiverr' },
  { icon: ExternalLink, href: resumeData.contact.otherProfiles.freelancer, label: 'Freelancer' },
  { icon: ExternalLink, href: resumeData.contact.otherProfiles.guru, label: 'Guru' },
];

export function SocialLinks({ className = '', ...props }: SocialLinksProps) {
  return (
    <div className={className} {...props}>
      <h3 className="text-text-primary font-semibold mb-4">Social Links</h3>
      <ul className="space-y-2.5">
        {socialItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-accent text-sm transition-colors duration-200"
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
