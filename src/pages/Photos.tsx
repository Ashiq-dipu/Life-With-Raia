import React, { useState } from 'react';
import { Camera, Sparkles, ExternalLink } from 'lucide-react';
import { LightboxModal, PhotoItem } from '../components/LightboxModal';

const ALL_PHOTOS: PhotoItem[] = [
  {
    id: 'p1',
    category: 'Golden Hours',
    caption: 'the kind of evening you don\'t want to end 🌙',
    src: '/assets/golden_hour_coast.jpg',
  },
  {
    id: 'p2',
    category: 'Just Me',
    caption: 'she\'s figuring it out, one photo at a time 📷',
    src: '/assets/raia_portrait.jpg',
  },
  {
    id: 'p3',
    category: 'Everyday Magic',
    caption: 'ordinary day, extraordinary light ☀️',
    src: '/assets/everyday_magic.jpg',
  },
  {
    id: 'p4',
    category: 'Places I\'ve Been',
    caption: 'somewhere between lost and found 🌿',
    src: '/assets/places_city_travel.jpg',
  },
  {
    id: 'p5',
    category: 'Food & Mood',
    caption: 'fed my soul today 🍜',
    src: '/assets/food_mood_ramen.jpg',
  },
  {
    id: 'p6',
    category: 'Moments Worth Remembering',
    caption: 'the exact moment we realized we were making memories 🎈',
    src: '/assets/featured_vlog.jpg',
  },
];

const CATEGORIES = [
  'All Photos',
  'Everyday Magic',
  'Golden Hours',
  'Food & Mood',
  'Places I\'ve Been',
  'Just Me',
  'Moments Worth Remembering',
];

export const Photos: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All Photos');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredPhotos = activeCategory === 'All Photos'
    ? ALL_PHOTOS
    : ALL_PHOTOS.filter(p => p.category === activeCategory);

  const openLightbox = (photo: PhotoItem) => {
    const idx = filteredPhotos.findIndex(p => p.id === photo.id);
    setLightboxIndex(idx >= 0 ? idx : 0);
    setLightboxOpen(true);
  };

  return (
    <div className="pt-24 pb-20">
      {/* Subpage Hero */}
      <section className="px-4 max-w-4xl mx-auto text-center mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sand/60 dark:bg-dusk-surface/80 border border-sand/70 dark:border-dusk-border text-terracotta text-sm font-semibold mb-6">
          <Camera className="w-4 h-4" />
          <span>📸 Visual Diary & Film Archive</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-charcoal dark:text-cream leading-tight mb-6">
          &ldquo;A picture is worth a thousand words — and I have a lot to say.&rdquo;
        </h1>
        <p className="text-lg text-charcoal/70 dark:text-cream/70 max-w-2xl mx-auto">
          Life looks better in pictures. Browse through moments, moods, and memories — curated but never fake.
        </p>
      </section>

      {/* Filter Pills */}
      <section className="px-4 max-w-7xl mx-auto mb-10">
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? 'bg-terracotta text-white shadow-md shadow-terracotta/20 scale-105'
                    : 'bg-white/80 dark:bg-dusk-surface text-charcoal/80 dark:text-cream/80 hover:bg-sand/70 dark:hover:bg-dusk-border border border-sand/60 dark:border-dusk-border'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* Photo Grid */}
      <section className="px-4 max-w-7xl mx-auto mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(photo)}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer aspect-4/5 bg-sand/30"
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <span className="text-xs uppercase tracking-wider font-semibold text-gold mb-1">
                  {photo.category}
                </span>
                <p className="font-serif italic text-base mb-3 leading-snug">
                  &ldquo;{photo.caption}&rdquo;
                </p>
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-cream bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full w-fit">
                  <span>🔍 View Full Size</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Instagram Banner */}
      <section className="px-4 max-w-5xl mx-auto">
        <div className="p-8 sm:p-10 rounded-3xl bg-white/70 dark:bg-dusk-surface/80 border border-sand/80 dark:border-dusk-border backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-terracotta uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Camera Roll Archive</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-charcoal dark:text-cream">
              Daily Photo Dumps on Instagram 📸
            </h3>
            <p className="text-sm text-charcoal/70 dark:text-cream/70 max-w-xl">
              Over 200+ photos archived. Follow @lifewithraia for uncurated camera roll stories, film scans, and everyday moments.
            </p>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-terracotta text-white font-medium hover:bg-terracotta-dark transition-all duration-300 shadow-md shadow-terracotta/20 hover:scale-105 whitespace-nowrap"
          >
            <span>Follow @lifewithraia</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        photos={filteredPhotos}
        currentIndex={lightboxIndex}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </div>
  );
};
