import React, { useState, useEffect } from 'react';
import { X, Play, Pause, Link as LinkIcon, ExternalLink } from 'lucide-react';
import { useToast } from './Toast';

export interface VideoModalData {
  title: string;
  category: string;
  thumb: string;
  duration: string;
  desc: string;
}

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  video: VideoModalData | null;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, video }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const { showToast } = useToast();

  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 250);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    if (!isOpen) {
      setIsPlaying(false);
      setProgress(0);
    }
  }, [isOpen]);

  if (!isOpen || !video) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    showToast('Video link copied to clipboard! 📋', 'success');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl glass-panel bg-bg-card p-6 rounded-3xl shadow-2xl border border-border-glass">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 pr-10 border-b border-border-subtle">
          <div>
            <span className="text-xs font-bold text-terracotta">{video.category}</span>
            <h3 className="font-serif text-lg md:text-xl font-bold text-text-primary mt-0.5">
              {video.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-black/10 hover:bg-terracotta hover:text-white transition-all text-text-primary"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Display */}
        <div className="relative aspect-video rounded-2xl overflow-hidden mt-4 bg-black group">
          <img
            src={video.thumb}
            alt={video.title}
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
            <div className="w-full flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-10 h-10 rounded-full bg-terracotta text-white flex items-center justify-center hover:scale-105 transition-transform"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
              </button>
              <div className="flex-grow h-1.5 bg-white/30 rounded-full overflow-hidden cursor-pointer">
                <div
                  className="h-full bg-terracotta transition-all duration-200"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-xs font-mono text-white/90">{video.duration}</span>
            </div>
          </div>
          <div className="absolute top-3 left-3 text-[11px] font-medium bg-black/60 backdrop-blur-sm text-white px-2.5 py-1 rounded-md">
            Life With Raia · Official Premiere
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs md:text-sm text-text-secondary max-w-lg">{video.desc}</p>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-bg-card border border-border-subtle hover:border-terracotta flex items-center gap-1.5 text-text-primary transition-all"
            >
              <LinkIcon className="w-3.5 h-3.5" />
              <span>Copy Link</span>
            </button>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-1.5 px-4 text-xs font-semibold"
            >
              <span>YouTube</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
