import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowUp } from 'lucide-react';
import { useToast } from './Toast';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const { showToast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFeedback('Please enter a valid email address.');
      return;
    }
    setFeedback('✨ Welcome to The Raia Letter community! Check your inbox soon 💕');
    setEmail('');
    showToast('Subscribed to The Raia Letter! 💌', 'success');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-bg-secondary border-t border-border-subtle pt-16 pb-10 mt-20">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Newsletter Banner */}
        <div className="glass-panel p-8 md:p-12 mb-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 bg-gradient-to-br from-bg-card to-terracotta/5">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-terracotta mb-2 inline-block">
              💌 The Raia Letter
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-text-primary mb-2">
              Join the community
            </h3>
            <p className="font-serif italic text-text-secondary text-base md:text-lg">
              "Get updates, behind-the-scenes, and good vibes straight to your inbox."
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full md:max-w-md">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-grow px-5 py-3 rounded-full bg-bg-card border border-border-subtle text-text-primary placeholder:text-text-muted outline-none focus:border-terracotta text-sm"
              />
              <button
                type="submit"
                className="btn-primary whitespace-nowrap text-sm py-3 px-6"
              >
                <span>Subscribe ✨</span>
              </button>
            </div>
            {feedback && (
              <p className="text-xs font-semibold text-sageAccent mt-2">
                {feedback}
              </p>
            )}
          </form>
        </div>

        {/* Brand & Directory Links */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 pb-10 border-b border-border-subtle">
          <div className="max-w-md">
            <Link to="/" className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-goldAccent" />
              <span className="font-serif font-bold text-xl text-text-primary">
                Life With Raia
              </span>
            </Link>
            <p className="font-serif italic text-text-secondary text-sm md:text-base">
              Life With Raia — Real life. Real moments. Always growing. ✨
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-text-muted mb-4">
              Quick Directory
            </h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-text-secondary">
              <Link to="/" className="hover:text-terracotta transition-colors">Home</Link>
              <Link to="/about" className="hover:text-terracotta transition-colors">About</Link>
              <Link to="/videos" className="hover:text-terracotta transition-colors">Videos</Link>
              <Link to="/photos" className="hover:text-terracotta transition-colors">Photos</Link>
              <Link to="/stories" className="hover:text-terracotta transition-colors">Stories</Link>
              <Link to="/updates" className="hover:text-terracotta transition-colors">Updates</Link>
              <Link to="/contact" className="hover:text-terracotta transition-colors">Contact</Link>
            </div>
          </div>
        </div>

        {/* Legal & Back-to-Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>© 2026 Life With Raia. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-terracotta transition-colors font-semibold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
