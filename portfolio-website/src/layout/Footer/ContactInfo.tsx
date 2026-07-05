import resumeData from '../../../../homepage/portfolio/master-resume.json';
import { Mail, Phone, MapPin } from 'lucide-react';
import type { ComponentPropsWithoutRef } from 'react';

type ContactInfoProps = ComponentPropsWithoutRef<'div'>;

export function ContactInfo({ className = '', ...props }: ContactInfoProps) {
  return (
    <div className={className} {...props}>
      <h3 className="text-text-primary font-semibold mb-4">Contact</h3>
      <ul className="space-y-2.5">
        <li>
          <a
            href={`mailto:${resumeData.contact.email}`}
            className="inline-flex items-center gap-2 text-text-secondary hover:text-accent text-sm transition-colors duration-200"
          >
            <Mail className="w-4 h-4" />
            {resumeData.contact.email}
          </a>
        </li>
        <li>
          <a
            href={`tel:${resumeData.contact.phone}`}
            className="inline-flex items-center gap-2 text-text-secondary hover:text-accent text-sm transition-colors duration-200"
          >
            <Phone className="w-4 h-4" />
            {resumeData.contact.phone}
          </a>
        </li>
        <li className="flex items-center gap-2 text-text-secondary text-sm">
          <MapPin className="w-4 h-4" />
          {resumeData.contact.location}
        </li>
      </ul>
    </div>
  );
}
