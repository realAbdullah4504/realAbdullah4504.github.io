import type { CTAButtonsProps } from './types';

export function CTAButtons({ onPrimaryCTA, onSecondaryCTA }: CTAButtonsProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <button
        onClick={onPrimaryCTA}
        className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      >
        View Projects
      </button>
      <button
        onClick={onSecondaryCTA}
        className="px-8 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
      >
        Contact Me
      </button>
    </div>
  );
}
