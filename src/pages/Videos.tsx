import React, { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';
import { VideoModal, VideoModalData } from '../components/VideoModal';

export const Videos: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeVideo, setActiveVideo] = useState<VideoModalData | null>(null);

  const categories = [
    { label: 'All Playlists', value: 'all' },
    { label: '🗓️ Day In My Life', value: 'Day In My Life' },
    { label: '✈️ Travel Diaries', value: 'Travel Diaries' },
    { label: "💬 Let's Talk", value: "Let's Talk" },
    { label: '🎉 Special Moments', value: 'Special Moments' },
    { label: '🌙 Night Routines', value: 'Night Routines' },
    { label: '🛍️ Hauls & Favorites', value: 'Hauls & Favorites' },
  ];

  const videosData = [
    {
      id: '1',
      title: "I Did Everything Differently for a Week — Here's What Happened",
      category: 'Day In My Life',
      duration: '21:15',
      views: '28K',
      time: '3 days ago',
      desc: 'Waking up at 5am, trading coffee for matcha, and resetting my entire daily flow.',
      thumb: '/assets/everyday_magic.jpg',
    },
    {
      id: '2',
      title: 'Solo Trip Diaries: Finding Myself One City at a Time',
      category: 'Travel Diaries',
      duration: '24:08',
      views: '35K',
      time: '1 week ago',
      desc: 'Getting wonderfully lost in cobblestone streets, dining alone, and feeling free.',
      thumb: '/assets/places_city_travel.jpg',
    },
    {
      id: '3',
      title: 'Honest Talk: What Nobody Tells You About Starting Over',
      category: "Let's Talk",
      duration: '17:34',
      views: '49K',
      time: '2 weeks ago',
      desc: 'Late night tea, raw emotions, and finding the courage to pivot when life gets confusing.',
      thumb: '/assets/raia_portrait.jpg',
    },
    {
      id: '4',
      title: 'Morning Routine That Actually Works (For Me)',
      category: 'Day In My Life',
      duration: '14:50',
      views: '22K',
      time: '3 weeks ago',
      desc: 'No 10-step impossibilities. Just slow coffee, sunlight, stretching, and grounded intentions.',
      thumb: '/assets/everyday_magic.jpg',
    },
    {
      id: '5',
      title: "Trying 5 Things I've Always Been Scared To Do",
      category: 'Special Moments',
      duration: '19:45',
      views: '31K',
      time: '1 month ago',
      desc: 'From cliffside hiking to open mic night — testing my limits and discovering new thrills.',
      thumb: '/assets/golden_hour_coast.jpg',
    },
    {
      id: '6',
      title: 'My Favorite Places, People & Things Right Now',
      category: 'Hauls & Favorites',
      duration: '16:20',
      views: '19K',
      time: '1 month ago',
      desc: 'A cozy sit-down roundup of books, recipes, vintage finds, and songs on repeat.',
      thumb: '/assets/food_mood_ramen.jpg',
    },
  ];

  const filteredVideos =
    selectedCategory === 'all'
      ? videosData
      : videosData.filter((v) => v.category === selectedCategory);

  return (
    <div className="space-y-16">
      {/* Subpage Hero */}
      <section className="text-center max-w-3xl mx-auto px-6 pt-6">
        <span className="text-xs font-bold uppercase tracking-wider text-terracotta inline-flex items-center gap-1.5 bg-terracotta/10 px-3.5 py-1 rounded-full mb-4">
          <span>🎬 Watch & Unwind</span>
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold italic text-text-primary leading-tight">
          "Grab some snacks. We're watching together."
        </h1>
        <p className="text-base sm:text-lg text-text-secondary mt-4 leading-relaxed">
          Real, unfiltered moments captured on camera. From day-in-my-life videos to travel diaries — if it happened, there's probably a vlog about it.
        </p>
      </section>

      {/* Featured Video Card */}
      <section className="max-w-[1240px] mx-auto px-6">
        <div className="glass-panel p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 relative aspect-video rounded-2xl overflow-hidden group shadow-md">
            <img
              src="/assets/featured_vlog.jpg"
              alt="A Week in My Life"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <button
              onClick={() =>
                setActiveVideo({
                  title: 'A Week in My Life — New Beginnings & Big Changes',
                  category: '🗓️ Day In My Life',
                  thumb: '/assets/featured_vlog.jpg',
                  duration: '18:42',
                  desc: 'The one where everything shifted. Behind the scenes of taking on new creative projects, moving through transitions, and finding joy in everyday moments.',
                })
              }
              className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white/95 text-terracotta flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
              aria-label="Play video"
            >
              <Play className="w-6 h-6 ml-1" />
            </button>
            <span className="absolute top-3 left-3 text-xs font-bold uppercase tracking-wider bg-terracotta text-white px-2.5 py-1 rounded-full">
              Featured Premiere
            </span>
            <span className="absolute bottom-3 right-3 text-xs font-bold bg-black/75 text-white px-2.5 py-1 rounded-md">
              18:42
            </span>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3 text-xs text-text-muted">
              <span className="bg-terracotta/10 text-terracotta font-bold px-2.5 py-0.5 rounded-full">
                🗓️ Day In My Life
              </span>
              <span>September 2026</span>
              <span>42K Views</span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-primary">
              "A Week in My Life — New Beginnings & Big Changes"
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              The one where everything shifted. Come see what's been going on behind the scenes as I take on new creative adventures, move through unexpected transitions, and find joy in the little things.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() =>
                  setActiveVideo({
                    title: 'A Week in My Life — New Beginnings & Big Changes',
                    category: '🗓️ Day In My Life',
                    thumb: '/assets/featured_vlog.jpg',
                    duration: '18:42',
                    desc: 'The one where everything shifted. Behind the scenes of taking on new creative projects, moving through transitions, and finding joy in everyday moments.',
                  })
                }
                className="btn-primary text-xs py-2.5 px-6"
              >
                <span>Watch Episode Now</span>
                <Play className="w-3.5 h-3.5 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Playlists Filter & Video Cards Grid */}
      <section className="max-w-[1240px] mx-auto px-6">
        {/* Category Pills */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all border ${
                selectedCategory === cat.value
                  ? 'bg-terracotta text-white border-terracotta shadow-md'
                  : 'bg-bg-card text-text-secondary border-border-subtle hover:border-terracotta'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              onClick={() =>
                setActiveVideo({
                  title: video.title,
                  category: video.category,
                  thumb: video.thumb,
                  duration: video.duration,
                  desc: video.desc,
                })
              }
              className="glass-panel overflow-hidden cursor-pointer group flex flex-col justify-between"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumb}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-11 h-11 rounded-full bg-white text-terracotta flex items-center justify-center shadow-lg">
                    <Play className="w-4 h-4 ml-0.5" />
                  </div>
                </div>
                <span className="absolute top-2.5 left-2.5 text-[10px] font-bold bg-white/90 text-text-primary px-2 py-0.5 rounded-full">
                  {video.category}
                </span>
                <span className="absolute bottom-2.5 right-2.5 text-xs font-semibold bg-black/75 text-white px-2 py-0.5 rounded">
                  {video.duration}
                </span>
              </div>

              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-base font-bold text-text-primary group-hover:text-terracotta transition-colors mb-1.5 leading-snug">
                    "{video.title}"
                  </h3>
                  <p className="text-xs text-text-secondary line-clamp-2 leading-relaxed">
                    {video.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-border-subtle flex items-center justify-between text-xs text-text-muted">
                  <span>{video.views} views · {video.time}</span>
                  <span className="font-bold text-terracotta">Play &rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* YouTube Channel Banner */}
        <div className="glass-panel p-8 mt-14 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-bg-card to-terracotta/10">
          <div>
            <h3 className="font-serif text-xl font-bold text-text-primary mb-1">
              Subscribe on YouTube for Weekly Episodes 🎥
            </h3>
            <p className="text-xs md:text-sm text-text-secondary">
              New long-form vlogs drop every Thursday at 6:00 PM EST. Turn on notifications so you never miss a premiere.
            </p>
          </div>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs py-3 px-6 whitespace-nowrap"
          >
            <span>Subscribe on YouTube</span>
            <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={!!activeVideo}
        onClose={() => setActiveVideo(null)}
        video={activeVideo}
      />
    </div>
  );
};
