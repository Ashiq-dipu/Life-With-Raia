import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Video, BookOpen, Coffee, Sparkles } from 'lucide-react';
import { useToast } from '../components/Toast';

export const About: React.FC = () => {
  const { showToast } = useToast();

  const personalityTags = [
    '🎨 Creative',
    '☕ Coffee Addict',
    '📚 Storyteller',
    '✈️ Explorer',
    '🎬 Content Creator',
    '💬 Oversharer (proudly)',
    '🌙 Night Owl',
    '🌱 Always Growing',
  ];

  return (
    <div className="space-y-16">
      {/* Subpage Hero */}
      <section className="text-center max-w-3xl mx-auto px-6 pt-6">
        <span className="text-xs font-bold uppercase tracking-wider text-terracotta inline-flex items-center gap-1.5 bg-terracotta/10 px-3.5 py-1 rounded-full mb-4">
          <span>👋 Meet The Creator</span>
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold italic text-text-primary leading-tight">
          "I'm Raia — creator, dreamer, and lover of all things real."
        </h1>
        <p className="text-base sm:text-lg text-text-secondary mt-4 leading-relaxed">
          Not a highlight reel, not a persona. Just real life with all its messy, beautiful, exciting moments.
        </p>
      </section>

      {/* Bio Grid */}
      <section className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Story Card */}
          <div className="lg:col-span-8 glass-panel p-8 sm:p-10 space-y-6">
            <p className="text-lg md:text-xl font-serif text-text-primary leading-relaxed">
              Hey! I'm Raia. I started <em className="text-terracotta font-semibold">Life With Raia</em> because I wanted a place that actually felt like <strong>me</strong> — not a highlight reel, not a persona, just real life with all its messy, beautiful, exciting moments.
            </p>
            <p className="text-sm md:text-base text-text-secondary leading-relaxed">
              I'm passionate about storytelling, connecting with people, and showing up authentically — whether that's through a vlog, a photo dump, or a 2am thought I just had to share.
            </p>
            <p className="text-sm md:text-base text-text-secondary leading-relaxed">
              When I'm not creating content, you'll find me exploring new places, trying food I probably can't pronounce, rewatching my comfort shows, or planning my next big idea on a sticky note.
            </p>

            {/* Personality Tags Cloud */}
            <div className="pt-6 border-t border-border-subtle">
              <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted mb-4">
                Who I Am in 8 Badges (Click to tap my vibe):
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {personalityTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => showToast(`Personality: ${tag} ✨`, 'info')}
                    className="px-4 py-2 rounded-full text-xs font-medium bg-bg-secondary border border-border-subtle hover:bg-terracotta hover:text-white hover:border-terracotta transition-all cursor-pointer"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Aside Column */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quote Card */}
            <div className="glass-panel p-8 border-l-4 border-l-terracotta space-y-4">
              <span className="font-serif text-5xl text-terracotta/30 block leading-none">“</span>
              <p className="font-serif italic text-base md:text-lg text-text-primary leading-relaxed">
                Life isn't meant to be polished until the texture disappears. I'd rather share the messy middle than wait for the picture-perfect finish line.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <img
                  src="/assets/raia_portrait.jpg"
                  alt="Raia avatar"
                  className="w-11 h-11 rounded-full object-cover border-2 border-terracotta"
                />
                <div>
                  <p className="text-sm font-bold text-text-primary">Raia</p>
                  <p className="text-xs text-text-muted">Founder & Storyteller</p>
                </div>
              </div>
            </div>

            {/* Fun Facts */}
            <div className="glass-panel p-6 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-text-primary">
                A Few Quick Truths 📝
              </h4>
              <ul className="text-xs sm:text-sm text-text-secondary space-y-2">
                <li className="flex items-center gap-2">
                  <span>☕</span> Current Obsession: Iced oat honey lattes
                </li>
                <li className="flex items-center gap-2">
                  <span>🎞️</span> Camera of choice: 35mm analog & pocket mirrorless
                </li>
                <li className="flex items-center gap-2">
                  <span>🎧</span> Studio soundtrack: Lo-fi indie & 90s nostalgia
                </li>
                <li className="flex items-center gap-2">
                  <span>📍</span> Next flight: Somewhere by the sea
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* A Day in My Life Routine */}
      <section className="max-w-[1240px] mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-terracotta">Daily Rhythm</span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold italic mt-1 text-text-primary">
            "A Day in My Life — How I Actually Spend My Hours"
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-panel p-6">
            <span className="text-xs font-bold text-terracotta">🌅 07:30 AM</span>
            <h3 className="font-serif text-base font-bold text-text-primary mt-1 mb-2">Slow Morning Anchor</h3>
            <p className="text-xs text-text-secondary leading-relaxed">
              Pour-over coffee, 15 minutes of quiet journaling, letting in the natural sunlight.
            </p>
          </div>

          <div className="glass-panel p-6">
            <span className="text-xs font-bold text-terracotta">🎬 10:00 AM</span>
            <h3 className="font-serif text-base font-bold text-text-primary mt-1 mb-2">Creative Deep Work</h3>
            <p className="text-xs text-text-secondary leading-relaxed">
              Filming B-roll, rough-cutting vlogs, and writing newsletter drafts while mental clarity is peak.
            </p>
          </div>

          <div className="glass-panel p-6">
            <span className="text-xs font-bold text-terracotta">🌿 03:00 PM</span>
            <h3 className="font-serif text-base font-bold text-text-primary mt-1 mb-2">City Walk & Analog Snaps</h3>
            <p className="text-xs text-text-secondary leading-relaxed">
              Stepping away from screens, hitting a local bakery, snapping street frames on 35mm.
            </p>
          </div>

          <div className="glass-panel p-6">
            <span className="text-xs font-bold text-terracotta">🌙 09:30 PM</span>
            <h3 className="font-serif text-base font-bold text-text-primary mt-1 mb-2">Wind-Down & Comfort Show</h3>
            <p className="text-xs text-text-secondary leading-relaxed">
              Hot peppermint tea, reading fiction, scribbling 2am sticky-note brainstorms.
            </p>
          </div>
        </div>
      </section>

      {/* Gear & Creative Tools */}
      <section className="max-w-[1240px] mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-terracotta">Behind The Lens</span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold italic mt-1 text-text-primary">
            "What I Use to Tell Stories"
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel p-6 space-y-2">
            <Camera className="w-6 h-6 text-terracotta" />
            <h3 className="font-serif text-lg font-bold text-text-primary">Analog 35mm Film Camera</h3>
            <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
              For timeless photo dumps and natural skin tones that feel genuine without heavy color grading.
            </p>
          </div>

          <div className="glass-panel p-6 space-y-2">
            <Video className="w-6 h-6 text-terracotta" />
            <h3 className="font-serif text-lg font-bold text-text-primary">Pocket Mirrorless & Shotgun Mic</h3>
            <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
              Lightweight enough to carry everywhere without looking like an intimidating production crew.
            </p>
          </div>

          <div className="glass-panel p-6 space-y-2">
            <BookOpen className="w-6 h-6 text-terracotta" />
            <h3 className="font-serif text-lg font-bold text-text-primary">Linen Journals & Sticky Notes</h3>
            <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
              Where every single video concept, essay title, and travel itinerary begins.
            </p>
          </div>
        </div>

        <div className="text-center pt-10">
          <Link to="/contact" className="btn-primary">
            <span>Want to Collaborate? Say Hello ✨</span>
          </Link>
        </div>
      </section>
    </div>
  );
};
