import type { LanguagesProps } from './types';

export function Languages({ languages }: LanguagesProps) {
  return (
    <div className="mb-12">
      <h3 className="text-3xl font-bold text-text-primary mb-6 flex items-center gap-3">
        <div className="w-1 h-8 bg-gradient-to-b from-accent to-accent/50 rounded-full" />
        Languages
      </h3>
      <div className="flex flex-wrap gap-3">
        {languages.map((language) => (
          <span
            key={language}
            className="group relative px-5 py-3 bg-gradient-to-br from-surface to-surface/50 text-text-secondary rounded-full border border-border hover:border-accent hover:text-accent hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
          >
            <span className="relative z-10">{language}</span>
            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-accent/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </span>
        ))}
      </div>
    </div>
  );
}
