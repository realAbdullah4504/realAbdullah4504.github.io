import { ExternalLink, ArrowRight } from 'lucide-react';
import type { ProfessionalProfile } from './types';


export function ProfileCard({ profile }: { profile: ProfessionalProfile }) {
  return (
    <a
      href={profile.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center justify-between p-6 bg-gradient-to-br from-card via-card to-card/50 border border-border/50 rounded-2xl hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-accent/20 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative flex items-center gap-4">
        {/* Icon container with glow effect */}
        <div className="relative">
          <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative p-3 bg-gradient-to-br from-card to-card/50 border border-border/50 rounded-xl group-hover:border-accent/30 group-hover:shadow-lg group-hover:shadow-accent/20 transition-all duration-300">
            <img src={profile.icon} alt={profile.platform} className="w-8 h-8" />
          </div>
        </div>
        
        <div className="flex flex-col">
          <span className="font-semibold text-text-primary text-lg group-hover:text-accent transition-colors duration-300">
            {profile.platform}
          </span>
          <span className="text-xs text-text-muted group-hover:text-text-secondary transition-colors duration-300">
            View Profile
          </span>
        </div>
      </div>
      
      {/* Arrow icon with animation */}
      <div className="relative">
        <div className="absolute inset-0 bg-accent/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative p-2 bg-gradient-to-br from-accent to-accent/80 rounded-lg opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
          <ArrowRight className="w-4 h-4 text-white" />
        </div>
      </div>
      
      {/* Subtle shine effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
    </a>
  );
}
