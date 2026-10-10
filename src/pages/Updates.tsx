import React from 'react';
import { Bell, Sparkles, ArrowRight, CheckCircle2, Clock, Compass, Radio, BookOpen, ShoppingBag, Globe, Video, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const MILESTONES = [
  {
    date: 'September 2026',
    status: 'Live Now',
    statusClass: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
    title: 'Life With Raia officially launches today!',
    body: 'The website is live, the content is coming, and I am SO ready for this. Thank you for being here from the beginning — it means everything. 💕',
    isPrimary: true,
  },
  {
    date: 'September 2026',
    status: 'Dropping Soon',
    statusClass: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30',
    title: 'First video drops this week.',
    body: 'It\'s personal, it\'s honest, and I\'m nervous about it — which probably means it\'s exactly right. Stay tuned.',
    isPrimary: false,
  },
  {
    date: 'Coming Soon',
    status: 'In The Works',
    statusClass: 'bg-terracotta/10 text-terracotta border-terracotta/30',
    title: 'Newsletter launching next month.',
    body: 'Weekly updates, behind-the-scenes, things I\'m loving — straight to your inbox. Sign up below to be first.',
    isPrimary: false,
  },
  {
    date: 'Coming Soon',
    status: 'In Production',
    statusClass: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30',
    title: 'First travel series in the works.',
    body: 'I\'m going somewhere new and bringing you along for every single second of it.',
    isPrimary: false,
  },
];

const PROJECTS = [
  {
    icon: Globe,
    status: 'Live Now',
    statusColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
    title: 'Life With Raia — The Website',
    desc: 'The digital home base. A place for everything — videos, photos, writing, and updates. This is just the beginning.',
    metaLeft: 'v1.0 Launched',
    metaRight: 'Active Home Base ✓',
    link: '/',
  },
  {
    icon: Video,
    status: 'Ongoing',
    statusColor: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30',
    title: 'The Vlog Series',
    desc: 'A long-form video series documenting real life — the highs, the lows, the in-betweens. New episodes dropping regularly.',
    metaLeft: 'Weekly Episodes',
    metaRight: 'Watch Episodes →',
    link: '/videos',
  },
  {
    icon: Mail,
    status: 'Coming Soon',
    statusColor: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30',
    title: 'The Raia Letter',
    desc: 'A personal newsletter. Think: what I\'m thinking about, what I\'m watching, what\'s inspiring me, and what I want to share with you this week.',
    metaLeft: 'Sunday Dispatch',
    metaRight: 'Join Waitlist →',
    link: '#newsletterSignup',
  },
  {
    icon: BookOpen,
    status: 'In Progress',
    statusColor: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30',
    title: 'Photo Book Vol. 1',
    desc: 'Curating a collection of my favorite images into a digital (and maybe physical) photo book. A visual diary of this season of life.',
    metaLeft: 'Curating 150+ Shots',
    metaRight: 'Expected Late 2026',
    link: '/photos',
  },
  {
    icon: Radio,
    status: 'Concept Stage',
    statusColor: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30',
    title: 'Conversations With Raia',
    desc: 'A podcast or interview series where I sit down with interesting people and have the kinds of conversations you actually want to listen to.',
    metaLeft: 'Audio Series',
    metaRight: 'Pilot Planning',
    link: '/contact',
  },
  {
    icon: ShoppingBag,
    status: 'Coming Soon',
    statusColor: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30',
    title: 'Raia\'s Picks',
    desc: 'A curated collection of things I genuinely love — from products to places to playlists. No fluff, just real recommendations.',
    metaLeft: 'Curated Guides',
    metaRight: 'Drops With Newsletter',
    link: '/about',
  },
];

export const Updates: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Subpage Hero */}
      <section className="px-4 max-w-4xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sand/60 dark:bg-dusk-surface/80 border border-sand/70 dark:border-dusk-border text-terracotta text-sm font-semibold mb-6">
          <Bell className="w-4 h-4" />
          <span>📣 The Bulletin & Creative Roadmap</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-charcoal dark:text-cream leading-tight mb-6">
          &ldquo;What&apos;s going on in Raia&apos;s world? Let&apos;s catch up.&rdquo;
        </h1>
        <p className="text-lg text-charcoal/70 dark:text-cream/70 max-w-2xl mx-auto">
          Current announcements, upcoming launches, and a transparent look at everything currently being built.
        </p>
      </section>

      {/* Part 1: Timeline Section */}
      <section className="px-4 max-w-4xl mx-auto mb-20">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-terracotta block mb-2">
            Latest Dispatches
          </span>
          <h2 className="font-serif text-3xl font-bold text-charcoal dark:text-cream">
            &ldquo;Fresh From The Desk&rdquo;
          </h2>
        </div>

        <div className="space-y-6 relative before:absolute before:left-4 sm:before:left-8 before:top-4 before:bottom-4 before:w-0.5 before:bg-sand dark:before:bg-dusk-border">
          {MILESTONES.map((item, idx) => (
            <div
              key={idx}
              className={`relative pl-12 sm:pl-20 transition-all duration-300 group`}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute left-2.5 sm:left-6.5 top-6 w-3.5 h-3.5 rounded-full border-2 border-white dark:border-dusk-bg transition-transform group-hover:scale-125 ${
                  item.isPrimary ? 'bg-terracotta ring-4 ring-terracotta/20' : 'bg-sand dark:bg-dusk-border'
                }`}
              />

              <div
                className={`p-6 sm:p-8 rounded-2xl bg-white/80 dark:bg-dusk-surface/80 border transition-all duration-300 hover:shadow-lg ${
                  item.isPrimary
                    ? 'border-terracotta/40 shadow-md shadow-terracotta/5'
                    : 'border-sand/70 dark:border-dusk-border'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold text-charcoal/60 dark:text-cream/60">
                    📅 {item.date}
                  </span>
                  <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${item.statusClass}`}>
                    {item.status}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal dark:text-cream mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-charcoal/75 dark:text-cream/75 leading-relaxed">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Part 2: Projects Showcase Pipeline */}
      <section className="px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-terracotta block mb-2">
            Creative Pipeline
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal dark:text-cream mb-4">
            &ldquo;Always building. Always creating. Here&apos;s what&apos;s in the works.&rdquo;
          </h2>
          <p className="text-base text-charcoal/70 dark:text-cream/70">
            From digital publications to community initiatives, follow along as ideas turn into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((proj, idx) => {
            const IconComponent = proj.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-white/70 dark:bg-dusk-surface/70 border border-sand/70 dark:border-dusk-border backdrop-blur-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-terracotta/10 text-terracotta flex items-center justify-center">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${proj.statusColor}`}>
                      {proj.status}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-charcoal dark:text-cream mb-2 leading-snug">
                    {proj.title}
                  </h3>
                  <p className="text-sm text-charcoal/70 dark:text-cream/70 leading-relaxed mb-6">
                    {proj.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-sand/60 dark:border-dusk-border flex items-center justify-between text-xs">
                  <span className="text-charcoal/60 dark:text-cream/60">{proj.metaLeft}</span>
                  <Link
                    to={proj.link}
                    className="font-semibold text-terracotta hover:underline inline-flex items-center gap-1"
                  >
                    <span>{proj.metaRight}</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
