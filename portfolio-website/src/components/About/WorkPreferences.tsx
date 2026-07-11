import { Briefcase, MapPin } from 'lucide-react';
import type { WorkPreferencesProps } from './types';

export function WorkPreferences({ employmentTypes, workArrangement }: WorkPreferencesProps) {
  return (
    <div className="mb-12">
      <h3 className="text-3xl font-bold text-text-primary mb-6 flex items-center gap-3">
        <div className="w-1 h-8 bg-gradient-to-b from-accent to-accent/50 rounded-full" />
        Work Preferences
      </h3>
      <div className="grid md:grid-cols-2 gap-5">
        <div className="group relative bg-gradient-to-br from-card via-card to-card/50 border border-border/50 rounded-2xl p-6 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 overflow-hidden">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Decorative corner accent */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-accent/20 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-2 bg-gradient-to-br from-card to-card/50 border border-border/50 rounded-xl group-hover:border-accent/30 group-hover:shadow-lg group-hover:shadow-accent/20 transition-all duration-300">
                  <Briefcase className="w-5 h-5 text-accent" />
                </div>
              </div>
              <h4 className="font-semibold text-text-primary text-lg group-hover:text-accent transition-colors duration-300">Employment Types</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {employmentTypes.map((type, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-gradient-to-br from-accent/10 to-accent/5 text-accent text-sm rounded-full border border-accent/20 hover:bg-accent hover:text-white hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="group relative bg-gradient-to-br from-card via-card to-card/50 border border-border/50 rounded-2xl p-6 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 overflow-hidden">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Decorative corner accent */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-accent/20 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-2 bg-gradient-to-br from-card to-card/50 border border-border/50 rounded-xl group-hover:border-accent/30 group-hover:shadow-lg group-hover:shadow-accent/20 transition-all duration-300">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
              </div>
              <h4 className="font-semibold text-text-primary text-lg group-hover:text-accent transition-colors duration-300">Work Arrangement</h4>
            </div>
            <span className="px-4 py-2 bg-gradient-to-br from-accent/10 to-accent/5 text-accent text-sm rounded-full border border-accent/20 hover:bg-accent hover:text-white hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 inline-block">
              {workArrangement}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
