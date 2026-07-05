import { X } from 'lucide-react';
import { NavLinks } from './NavLinks';
import { ResumeButton } from './ResumeButton';

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md md:hidden">
      <div className="flex flex-col items-center justify-center h-full gap-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-text-secondary hover:text-text-primary transition-colors duration-200"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>

        <NavLinks className="flex-col text-2xl gap-8" />

        <div className="flex flex-col gap-4 mt-4">
          <ResumeButton className="text-base px-6 py-3" />
        </div>
      </div>
    </div>
  );
}
