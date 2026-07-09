import type { ComponentPropsWithoutRef } from 'react';

type CTAButtonsProps = {
  onPrimaryCTA?: () => void;
  onSecondaryCTA?: () => void;
} & ComponentPropsWithoutRef<'div'>;

export function CTAButtons({ onPrimaryCTA, onSecondaryCTA, className = '', ...props }: CTAButtonsProps) {
  return (
    <div className={`flex flex-col sm:flex-row justify-center gap-4 ${className}`} {...props}>
      <button
        onClick={onPrimaryCTA}
        className="px-8 py-3 bg-accent hover:bg-blue-600 text-white font-semibold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        View Projects
      </button>

      {onSecondaryCTA && (
        <button
          onClick={onSecondaryCTA}
          className="px-8 py-3 bg-transparent border border-border hover:bg-surface text-text-secondary font-semibold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Contact Me
        </button>
      )}
    </div>
  );
}
