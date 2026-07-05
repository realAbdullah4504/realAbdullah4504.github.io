import { Mail, Phone, MapPin } from 'lucide-react';
import type { ContactInfoProps } from './types';

export function ContactInfo({ email, phone, location }: ContactInfoProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-gray-600" />
          <a href={`mailto:${email}`} className="text-gray-700 hover:text-blue-600 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded">
            {email}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-gray-600" />
          <a href={`tel:${phone}`} className="text-gray-700 hover:text-blue-600 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded">
            {phone}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-gray-600" />
          <span className="text-gray-700">{location}</span>
        </div>
      </div>
    </div>
  );
}
