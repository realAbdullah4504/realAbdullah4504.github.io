import type { LanguagesProps } from './types';

export function Languages({ languages }: LanguagesProps) {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-text-primary mb-4">Languages</h3>
      <div className="flex flex-wrap gap-2">
        {languages.map((language) => (
          <span
            key={language}
            className="bg-surface text-text-secondary px-4 py-2 rounded-full border border-border hover:bg-card hover:border-accent transition-all duration-200"
          >
            {language}
          </span>
        ))}
      </div>
    </div>
  );
}
