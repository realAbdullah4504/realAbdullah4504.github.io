import { Mail, Phone, MapPin } from 'lucide-react';
import type { ContactInfoProps } from './types';

export function ContactInfo({ email, phone, location }: ContactInfoProps) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
      <h3 className="text-xl font-bold text-text-primary mb-4">Contact Information</h3>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-text-muted" />
          <a href={`mailto:${email}`} className="text-text-secondary hover:text-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded">
            {email}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-text-muted" />
          <a href={`tel:${phone}`} className="text-text-secondary hover:text-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded">
            {phone}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-text-muted" />
          <span className="text-text-secondary">{location}</span>
        </div>
      </div>
    </div>
  );
}
