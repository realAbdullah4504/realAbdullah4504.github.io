import { Mail, Link } from 'lucide-react';
import type { CTAButtonsProps } from './types';

export function CTAButtons({ email, linkedin }: CTAButtonsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href={`mailto:${email}`}
        className="flex items-center justify-center gap-2 px-8 py-3 bg-accent hover:bg-blue-600 text-white font-semibold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
      >
        <Mail className="w-5 h-5" />
        Send Email
      </a>
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 px-8 py-3 bg-transparent border border-border hover:bg-surface text-text-secondary font-semibold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
      >
        <Link className="w-5 h-5" />
        Connect on LinkedIn
      </a>
    </div>
  );
}
