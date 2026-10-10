import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Pause, Video, Camera, Mail, Globe, ArrowRight, Heart } from 'lucide-react';
import { useToast } from '../components/Toast';
import { VideoModal, VideoModalData } from '../components/VideoModal';
import { LightboxModal, PhotoItem } from '../components/LightboxModal';

export const Home: React.FC = () => {
  const { showToast } = useToast();

  // Audio Playback state in Weekly Rotation
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // Vibe Poll State
  const [selectedVibe, setSelectedVibe] = useState<string | null>(null);

  // Vlog Topic Input State
  const [vlogIdea, setVlogIdea] = useState('');

  // Modals state
  const [activeVideo, setActiveVideo] = useState<VideoModalData | null>(null);
  const [lightboxPhotoIndex, setLightboxPhotoIndex] = useState<number | null>(null);

  const previewPhotos: PhotoItem[] = [
    {
      id: '1',
      category: '🌅 Golden Hours',
      caption: "the kind of evening you don't want to end 🌙",
      src: '/assets/golden_hour_coast.jpg',
    },
    {
      id: '2',
      category: '✨ Everyday Magic',
      caption: 'ordinary day, extraordinary light ☀️',
      src: '/assets/everyday_magic.jpg',
    },
    {
      id: '3',
      category: "🏙️ Places I've Been",
      caption: 'somewhere between lost and found 🌿',
      src: '/assets/places_city_travel.jpg',
    },
  ];

  const handleAudioToggle = () => {
    setIsPlayingAudio(!isPlayingAudio);
    showToast(
      !isPlayingAudio ? 'Now playing: Golden Hour Frequency 🎵' : 'Paused studio mix ⏸',
      'info'
    );
  };

  const handleVibeSelect = (vibe: string) => {
    setSelectedVibe(vibe);
    showToast(`Energy logged: ${vibe}! Synced with the circle ✨`, 'success');
  };

  const handleVlogIdeaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!vlogIdea.trim()) return;
    showToast(`Idea logged: "${vlogIdea}"! Added to Raia's sticky notes 📝✨`, 'success');
    setVlogIdea('');
  };

  return (
    <div className="space-y-24">
      {/* 🏠 Hero Section */}
      <section className="pt-8 md:pt-14">
        <div className="max-w-[1240px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-bg-card border border-border-light text-xs font-semibold text-terracotta shadow-sm">
              <span className="w-2 h-2 rounded-full bg-terracotta animate-ping" />
              <span>Welcome to My Creative Journal</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary leading-[1.15]">
              "This is my life — <br />
              <span className="italic text-terracotta">and I'm just getting started."</span>
            </h1>

            <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl">
              Welcome to Life With Raia — a space where real moments, big dreams, and everyday adventures come together. Come hang out. ✨
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link to="/about" className="btn-primary">
                <span>Get to Know Me</span>
                <span>👋</span>
              </Link>
              <Link to="/updates" className="btn-secondary">
                <span>See What's New</span>
                <span>🚀</span>
              </Link>
            </div>

            {/* Stats Bar */}
            <div className="glass-panel p-5 mt-8 flex flex-wrap items-center justify-between gap-4 max-w-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-terracotta/10 text-terracotta flex items-center justify-center font-bold">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-serif font-bold text-lg leading-tight">50+</p>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-text-muted">Videos</p>
                </div>
              </div>
              <div className="w-px h-8 bg-border-subtle hidden sm:block" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-terracotta/10 text-terracotta flex items-center justify-center font-bold">
                  <Camera className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-serif font-bold text-lg leading-tight">200+</p>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-text-muted">Photos</p>
                </div>
              </div>
              <div className="w-px h-8 bg-border-subtle hidden sm:block" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-terracotta/10 text-terracotta flex items-center justify-center font-bold">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-serif font-bold text-lg leading-tight">Weekly</p>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-text-muted">Updates</p>
                </div>
              </div>
              <div className="w-px h-8 bg-border-subtle hidden sm:block" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-terracotta/10 text-terracotta flex items-center justify-center font-bold">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-serif font-bold text-lg leading-tight">Growing</p>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-text-muted">Community</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Portrait */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="absolute inset-0 bg-gradient-to-tr from-roseAccent/30 to-goldAccent/30 rounded-3xl blur-2xl -z-10" />
              <div className="bg-white p-3.5 pb-6 rounded-3xl shadow-xl -rotate-1 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/assets/raia_portrait.jpg"
                  alt="Raia smiling warmly"
                  className="w-full h-[400px] object-cover rounded-2xl"
                />
                <div className="mt-3.5 px-2 flex items-center justify-between text-xs font-serif italic text-text-primary">
                  <span>Raia · Coffee & 35mm mornings ☕</span>
                  <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-sageAccent bg-sageAccent-soft px-2 py-0.5 rounded-full not-italic">
                    Real Life
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✨ Currently Loving / Raia's Weekly Rotation */}
      <section className="max-w-[1240px] mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-terracotta">
            ✨ Current Rotation · September 2026
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold italic mt-2 text-text-primary">
            "What's Inspiring Me Right Now"
          </h2>
          <p className="text-text-secondary text-sm md:text-base mt-2">
            A little peek into my week — what's playing in my headphones, what's on my desk, and the quiet details making life feel magical.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Music */}
          <div className="glass-panel p-6 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-terracotta">
                🎧 In My Headphones
              </span>
              <h3 className="font-serif text-lg font-bold text-text-primary mt-1 mb-2">
                Late Night Drives & Lo-Fi Waves
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Warm Rhodes chords, vinyl crackle, and nostalgic synth melodies keeping me company.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-border-subtle">
              <div className="flex items-center gap-3 bg-bg-secondary p-2.5 rounded-xl">
                <button
                  onClick={handleAudioToggle}
                  className="w-8 h-8 rounded-full bg-terracotta text-white flex items-center justify-center hover:scale-105 transition-transform"
                >
                  {isPlayingAudio ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
                </button>
                <div className="overflow-hidden">
                  <p className="text-xs font-bold truncate">Golden Hour Frequency</p>
                  <p className="text-[10px] text-text-muted">Studio Mix · 02:45</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Morning Ritual */}
          <div className="glass-panel p-6 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-terracotta">
                ☕ The Morning Ritual
              </span>
              <h3 className="font-serif text-lg font-bold text-text-primary mt-1 mb-2">
                Iced Oat Honey Latte
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Light-roast Ethiopian espresso, oat milk, raw wildflower honey, and freshly grated cinnamon.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-border-subtle flex items-center justify-between text-xs text-text-muted">
              <span>Ratio: 1:2 Espresso</span>
              <span className="font-semibold text-terracotta">Comfort: 10/10 ✨</span>
            </div>
          </div>

          {/* Card 3: Bedside Table */}
          <div className="glass-panel p-6 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-terracotta">
                📚 On My Bedside Table
              </span>
              <h3 className="font-serif text-lg font-bold text-text-primary mt-1 mb-2">
                The Comfort Book
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Short reflections on hope, self-compassion, and remembering that messy progress is still progress.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-border-subtle flex items-center justify-between text-xs text-text-muted">
              <span>By Matt Haig</span>
              <span>Page 142 of 272</span>
            </div>
          </div>

          {/* Card 4: Current Obsession */}
          <div className="glass-panel p-6 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-terracotta">
                🌿 Current Vibe & Obsession
              </span>
              <h3 className="font-serif text-lg font-bold text-text-primary mt-1 mb-2">
                35mm Film & Sunset Walks
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Leaving the phone in airplane mode between 6 PM and 8 PM, catching the amber light.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-border-subtle flex items-center justify-between text-xs text-text-muted">
              <span>Kodak Portra 400</span>
              <span className="font-semibold text-terracotta">Lisbon Sunset Club</span>
            </div>
          </div>
        </div>

        {/* Vibe Poll Bar */}
        <div className="glass-panel p-6 mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <strong className="block text-sm text-text-primary font-bold">What's your energy this week?</strong>
            <span className="text-xs text-text-muted">Tap your vibe to sync with the community circle:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              '☕ Slow & Cozy Reset',
              '🎨 Deep Creative Flow',
              '✈️ Spontaneous Wanderlust',
              '🌙 Honest Conversations',
            ].map((vibe) => (
              <button
                key={vibe}
                onClick={() => handleVibeSelect(vibe)}
                className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all ${
                  selectedVibe === vibe
                    ? 'bg-terracotta text-white border-terracotta shadow-md'
                    : 'bg-bg-secondary text-text-primary border-border-subtle hover:border-terracotta'
                }`}
              >
                {vibe}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 🌸 Spaces Bento Grid */}
      <section className="max-w-[1240px] mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-terracotta">
            Curated Spaces
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold italic mt-2 text-text-primary">
            "A little bit of everything — because life doesn't fit in one box."
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/videos" className="glass-panel p-8 group hover:-translate-y-1 transition-all">
            <span className="text-3xl mb-4 block">🎥</span>
            <h3 className="font-serif text-xl font-bold text-text-primary mb-2">Vlogs & Videos</h3>
            <p className="text-xs md:text-sm text-text-secondary leading-relaxed mb-4">
              Real, unfiltered moments captured on camera. From day-in-my-life to travel diaries.
            </p>
            <span className="text-xs font-bold text-terracotta flex items-center gap-1 group-hover:gap-2 transition-all">
              Go to Videos Hub &rarr;
            </span>
          </Link>

          <Link to="/photos" className="glass-panel p-8 group hover:-translate-y-1 transition-all">
            <span className="text-3xl mb-4 block">📸</span>
            <h3 className="font-serif text-xl font-bold text-text-primary mb-2">Photo Stories</h3>
            <p className="text-xs md:text-sm text-text-secondary leading-relaxed mb-4">
              Life looks better in pictures. Browse through moments, moods, and memories.
            </p>
            <span className="text-xs font-bold text-terracotta flex items-center gap-1 group-hover:gap-2 transition-all">
              Browse Photo Diary &rarr;
            </span>
          </Link>

          <Link to="/stories" className="glass-panel p-8 group hover:-translate-y-1 transition-all">
            <span className="text-3xl mb-4 block">💭</span>
            <h3 className="font-serif text-xl font-bold text-text-primary mb-2">Thoughts & Reflections</h3>
            <p className="text-xs md:text-sm text-text-secondary leading-relaxed mb-4">
              Sometimes I just need to talk. Personal essays, life updates, and honest conversations.
            </p>
            <span className="text-xs font-bold text-terracotta flex items-center gap-1 group-hover:gap-2 transition-all">
              Read Stories &rarr;
            </span>
          </Link>

          <Link to="/photos" className="glass-panel p-8 group hover:-translate-y-1 transition-all">
            <span className="text-3xl mb-4 block">🌍</span>
            <h3 className="font-serif text-xl font-bold text-text-primary mb-2">Adventures & Travel</h3>
            <p className="text-xs md:text-sm text-text-secondary leading-relaxed mb-4">
              New cities, hidden spots, spontaneous trips. I go, I explore, I tell you all about it.
            </p>
            <span className="text-xs font-bold text-terracotta flex items-center gap-1 group-hover:gap-2 transition-all">
              Explore Places &rarr;
            </span>
          </Link>

          <Link to="/updates" className="glass-panel p-8 group hover:-translate-y-1 transition-all">
            <span className="text-3xl mb-4 block">🎯</span>
            <h3 className="font-serif text-xl font-bold text-text-primary mb-2">Projects & Goals</h3>
            <p className="text-xs md:text-sm text-text-secondary leading-relaxed mb-4">
              Big things are always in the works. Follow along as I build, create, and figure things out.
            </p>
            <span className="text-xs font-bold text-terracotta flex items-center gap-1 group-hover:gap-2 transition-all">
              View Project Roadmap &rarr;
            </span>
          </Link>

          <Link to="/contact" className="glass-panel p-8 group hover:-translate-y-1 transition-all">
            <span className="text-3xl mb-4 block">💌</span>
            <h3 className="font-serif text-xl font-bold text-text-primary mb-2">Community</h3>
            <p className="text-xs md:text-sm text-text-secondary leading-relaxed mb-4">
              This isn't just my space — it's ours. Your comments and messages make this worth it.
            </p>
            <span className="text-xs font-bold text-terracotta flex items-center gap-1 group-hover:gap-2 transition-all">
              Say Hello &rarr;
            </span>
          </Link>
        </div>
      </section>

      {/* 🎬 Videos Spotlight Preview */}
      <section className="max-w-[1240px] mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-terracotta">Watch Along</span>
            <h2 className="font-serif text-3xl font-bold italic text-text-primary mt-1">
              "Grab some snacks. We're watching together."
            </h2>
          </div>
          <Link to="/videos" className="text-sm font-bold text-terracotta hover:underline flex items-center gap-1">
            <span>Explore All Videos (50+)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="glass-panel p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 relative aspect-video rounded-2xl overflow-hidden group">
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
              className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white/90 text-terracotta flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
              aria-label="Play video"
            >
              <Play className="w-6 h-6 ml-1" />
            </button>
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
            <h3 className="font-serif text-2xl font-bold text-text-primary">
              "A Week in My Life — New Beginnings & Big Changes"
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              The one where everything shifted. Behind the scenes of taking on new creative projects, moving through transitions, and finding joy in everyday moments.
            </p>
            <div className="pt-2">
              <Link to="/videos" className="btn-primary text-xs py-2.5 px-5">
                <span>View Full Video Playlist</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 📸 Photos Preview */}
      <section className="max-w-[1240px] mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-terracotta">Visual Archive</span>
            <h2 className="font-serif text-3xl font-bold italic text-text-primary mt-1">
              "A picture is worth a thousand words — and I have a lot to say."
            </h2>
          </div>
          <Link to="/photos" className="text-sm font-bold text-terracotta hover:underline flex items-center gap-1">
            <span>View Complete Gallery (200+ Photos)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previewPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setLightboxPhotoIndex(index)}
              className="relative aspect-4/3 rounded-2xl overflow-hidden cursor-pointer group shadow-sm"
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded-full w-fit mb-2">
                  {photo.category}
                </span>
                <p className="font-serif italic text-sm">"{photo.caption}"</p>
                <span className="text-xs text-goldAccent mt-2 font-semibold">🔍 View Full Size</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 💌 Community Circle Section */}
      <section className="max-w-[1240px] mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-terracotta">
            💌 The Community Circle
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold italic mt-2 text-text-primary">
            "Notes From You — Why This Space Exists"
          </h2>
          <p className="text-text-secondary text-sm md:text-base mt-2">
            This isn't a one-way broadcast. It's a shared conversation with people from all over the world who choose real life over highlight reels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-panel p-6 border-t-4 border-t-roseAccent flex flex-col justify-between">
            <div>
              <span className="font-serif text-4xl text-terracotta/30 block mb-1">“</span>
              <p className="font-serif italic text-sm text-text-primary leading-relaxed">
                Watching your morning routine vlog felt like FaceTiming a close friend over coffee. You gave me the courage to finally leave a job that was draining my spirit.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-border-subtle flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-full bg-bg-secondary flex items-center justify-center text-sm">🌿</span>
              <div>
                <p className="text-xs font-bold text-text-primary">Maya Lin</p>
                <p className="text-[10px] text-text-muted">New York City, NY</p>
              </div>
            </div>
          </div>

          <div className="glass-panel p-6 border-t-4 border-t-goldAccent flex flex-col justify-between">
            <div>
              <span className="font-serif text-4xl text-terracotta/30 block mb-1">“</span>
              <p className="font-serif italic text-sm text-text-primary leading-relaxed">
                The essay about the 'messy middle' made me cry happy tears on my train ride home. Thank you for never pretending you have everything figured out.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-border-subtle flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-full bg-bg-secondary flex items-center justify-center text-sm">☕</span>
              <div>
                <p className="text-xs font-bold text-text-primary">Leo Sterling</p>
                <p className="text-[10px] text-text-muted">London, UK</p>
              </div>
            </div>
          </div>

          <div className="glass-panel p-6 border-t-4 border-t-sageAccent flex flex-col justify-between">
            <div>
              <span className="font-serif text-4xl text-terracotta/30 block mb-1">“</span>
              <p className="font-serif italic text-sm text-text-primary leading-relaxed">
                I moved across the country alone last month and was feeling so lost. Your Thursday videos have been my grounding anchor every single week.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-border-subtle flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-full bg-bg-secondary flex items-center justify-center text-sm">🌸</span>
              <div>
                <p className="text-xs font-bold text-text-primary">Priya Patel</p>
                <p className="text-[10px] text-text-muted">Toronto, Canada</p>
              </div>
            </div>
          </div>

          {/* Interactive Vlog Prompt */}
          <div className="glass-panel p-6 bg-gradient-to-br from-bg-card to-terracotta/10 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-terracotta">
                🎬 Community Co-Creation
              </span>
              <h3 className="font-serif text-base font-bold text-text-primary mt-1 mb-2">
                Got an idea for next week's vlog?
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Tell me what you want to watch or talk about next. I read every sticky note!
              </p>
            </div>

            <form onSubmit={handleVlogIdeaSubmit} className="mt-4 space-y-2">
              <input
                type="text"
                value={vlogIdea}
                onChange={(e) => setVlogIdea(e.target.value)}
                placeholder="e.g. A week of solo museum dates..."
                required
                className="w-full px-3.5 py-2 rounded-xl bg-bg-secondary text-xs border border-border-subtle focus:border-terracotta outline-none"
              />
              <button type="submit" className="w-full btn-primary py-2 text-xs">
                <span>Drop Sticky Note ✨</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={!!activeVideo}
        onClose={() => setActiveVideo(null)}
        video={activeVideo}
      />

      {/* Photo Lightbox */}
      <LightboxModal
        isOpen={lightboxPhotoIndex !== null}
        onClose={() => setLightboxPhotoIndex(null)}
        photos={previewPhotos}
        currentIndex={lightboxPhotoIndex || 0}
        onNavigate={(idx) => setLightboxPhotoIndex(idx)}
      />
    </div>
  );
};
