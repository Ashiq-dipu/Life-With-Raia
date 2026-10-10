import React from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface StoryData {
  id: string;
  title: string;
  category: string;
  readTime: string;
  paragraphs: string[];
}

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  story: StoryData | null;
}

export const StoryModal: React.FC<StoryModalProps> = ({ isOpen, onClose, story }) => {
  if (!isOpen || !story) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl max-h-[85vh] glass-panel bg-bg-card rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-border-glass">
        {/* Header */}
        <div className="p-6 md:p-8 pb-4 border-b border-border-subtle flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-terracotta">
              {story.category}
            </span>
            <span className="text-xs text-text-muted">· {story.readTime}</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-black/10 hover:bg-terracotta hover:text-white transition-colors"
            aria-label="Close story"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Story Body */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-4 text-text-secondary leading-relaxed">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-primary mb-4 leading-tight">
            {story.title}
          </h2>

          <div className="flex items-center gap-3 pb-6 border-b border-border-subtle">
            <img
              src="/assets/raia_portrait.jpg"
              alt="Raia"
              className="w-10 h-10 rounded-full object-cover border-2 border-terracotta"
            />
            <div>
              <p className="text-xs font-bold text-text-primary">Written by Raia</p>
              <p className="text-[11px] text-text-muted">Published on Life With Raia · September 2026</p>
            </div>
          </div>

          <div className="space-y-4 pt-2 text-base md:text-lg">
            {story.paragraphs.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-3 bg-bg-secondary/50">
          <button
            onClick={onClose}
            className="btn-secondary text-xs py-2 px-5"
          >
            Close Story
          </button>
          <Link
            to="/#newsletter"
            onClick={onClose}
            className="btn-primary text-xs py-2 px-5"
          >
            Join The Community Circle ✨
          </Link>
        </div>
      </div>
    </div>
  );
};
