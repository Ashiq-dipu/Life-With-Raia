import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export interface PhotoItem {
  id: string;
  category: string;
  caption: string;
  src: string;
}

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  photos: PhotoItem[];
  currentIndex: number;
  onNavigate: (newIndex: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  photos,
  currentIndex,
  onNavigate,
}) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % photos.length);
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + photos.length) % photos.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, photos.length, onClose, onNavigate]);

  if (!isOpen || photos.length === 0) return null;

  const currentPhoto = photos[currentIndex] || photos[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
      <div className="relative max-w-4xl w-full flex items-center justify-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 rounded-full bg-white/20 text-white hover:bg-terracotta transition-colors"
          aria-label="Close lightbox"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Previous Button */}
        <button
          onClick={() => onNavigate((currentIndex - 1 + photos.length) % photos.length)}
          className="hidden sm:flex absolute -left-14 p-3 rounded-full bg-white/10 text-white hover:bg-terracotta transition-colors"
          aria-label="Previous photo"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Photo Container */}
        <div className="bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10 w-full">
          <img
            src={currentPhoto.src}
            alt={currentPhoto.caption}
            className="w-full max-h-[72vh] object-contain bg-black"
          />
          <div className="p-5 bg-[#1A1514] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-goldAccent">
              {currentPhoto.category}
            </span>
            <p className="font-serif italic text-white text-base">
              "{currentPhoto.caption}"
            </p>
            <span className="text-xs text-white/50 font-mono">
              {currentIndex + 1} / {photos.length}
            </span>
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={() => onNavigate((currentIndex + 1) % photos.length)}
          className="hidden sm:flex absolute -right-14 p-3 rounded-full bg-white/10 text-white hover:bg-terracotta transition-colors"
          aria-label="Next photo"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};
