import React, { useState } from 'react';
import { PenTool, ArrowRight, BookOpen } from 'lucide-react';
import { StoryModal, StoryData } from '../components/StoryModal';

const FEATURED_STORY: StoryData = {
  id: 'featured',
  title: 'Why I Started Life With Raia (And Why It Took Me So Long)',
  category: '🌟 Featured Essay',
  readTime: '6 min read',
  paragraphs: [
    'For almost three years, I had a secret folder on my desktop called "The Brand". Inside were color palettes, script ideas, notes on microphones, and drafts of essays that never saw daylight.',
    'Why? Because I was terrified of not being perfect. We live in an era where everyone\'s digital presence looks like a glossy high-budget magazine ad. Every room looks spotless, every morning routine starts with a candle lit at 5:00 AM, and nobody ever admits to feeling completely ungrounded.',
    'One night this past spring, I was sitting on my kitchen floor eating takeout after a day where literally everything had gone wrong. And it hit me: the creators and people who have actually inspired me most were the ones who didn\'t hide their humanity. They were the ones who showed the rough edges.',
    'Life With Raia is my antidote to the highlight reel. It is a home for the honest stories, the quiet victories, the chaotic travel days, and the spontaneous epiphanies. I\'m so grateful you\'re here to share the journey with me.',
  ],
};

const POSTS: StoryData[] = [
  {
    id: '1',
    title: '10 Things I Wish I Knew Before I Started Creating',
    category: '🌱 Creative Growth',
    readTime: '4 min read',
    paragraphs: [
      '1. Your first ten videos will probably make you cringe in six months — and that is the biggest sign of progress.',
      '2. Expensive cameras don\'t fix uninspired storytelling. Natural light and honest emotion will beat a $4,000 lens every day of the week.',
      '3. Protect your relationship with creating offline. If everything you do is for content, your well will dry up faster than you expect.',
      '4. Community isn\'t built through broadcasting; it is built through conversation.',
    ],
  },
  {
    id: '2',
    title: 'The Art of Showing Up — Even When You Don\'t Feel Like It',
    category: '⚡ Mindset',
    readTime: '5 min read',
    paragraphs: [
      'Waiting for motivation is a trap. Motivation arrives halfway into the work, rarely at the beginning.',
      'When I feel resistant to writing or picking up my camera, I make a deal with myself: just five minutes. I\'ll open the journal or shoot thirty seconds of B-roll. Nine times out of ten, momentum carries the rest.',
    ],
  },
  {
    id: '3',
    title: 'Places That Changed the Way I See the World',
    category: '🌍 Travel Diaries',
    readTime: '7 min read',
    paragraphs: [
      'Traveling alone taught me how to enjoy my own company without reaching for my phone every four seconds.',
      'In a tiny coastal village this summer, I watched older couples share morning bread in complete, comfortable silence. It completely reshaped how I view hustle and stillness.',
    ],
  },
  {
    id: '4',
    title: 'My Honest Relationship With Social Media',
    category: '💬 Real Talk',
    readTime: '5 min read',
    paragraphs: [
      'Algorithms are designed to reward speed and outrage. Storytelling requires patience and intimacy.',
      'I\'ve learned to build boundaries: no screens for the first hour of the morning, and Sundays are spent completely analog.',
    ],
  },
  {
    id: '5',
    title: 'What a "Good Day" Actually Looks Like for Me',
    category: '☀️ Daily Flow',
    readTime: '3 min read',
    paragraphs: [
      'A good day isn\'t when I check off 15 tasks on a to-do list. A good day is when I had time to savor my morning coffee, took a long walk with no destination, made something with my hands, and laughed out loud with someone I love.',
    ],
  },
  {
    id: '6',
    title: 'Lessons From the Messy Middle',
    category: '💭 Life Lessons',
    readTime: '6 min read',
    paragraphs: [
      'Starting is exciting. Finishing is triumphant. But 90% of life is the messy middle where nothing looks glamorous yet.',
      'Learning to love the process while the painting is still half-done has been my greatest lesson this year.',
    ],
  },
  {
    id: '7',
    title: 'Things I\'m Quietly Proud Of',
    category: '✨ Reflections',
    readTime: '4 min read',
    paragraphs: [
      'Setting boundaries without over-explaining. Saying "no" without guilt. Forgiving myself when my productivity dips.',
      'The things worth celebrating most often happen in private.',
    ],
  },
];

export const Stories: React.FC = () => {
  const [selectedStory, setSelectedStory] = useState<StoryData | null>(null);

  return (
    <div className="pt-24 pb-20">
      {/* Subpage Hero */}
      <section className="px-4 max-w-4xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sand/60 dark:bg-dusk-surface/80 border border-sand/70 dark:border-dusk-border text-terracotta text-sm font-semibold mb-6">
          <PenTool className="w-4 h-4" />
          <span>✍️ Words & Reflections</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-charcoal dark:text-cream leading-tight mb-6">
          &ldquo;When a video isn&apos;t enough — I write it out.&rdquo;
        </h1>
        <p className="text-lg text-charcoal/70 dark:text-cream/70 max-w-2xl mx-auto">
          Personal essays, life updates, late-night journal entries, and honest conversations about the things that actually matter.
        </p>
      </section>

      {/* Featured Essay Spotlight */}
      <section className="px-4 max-w-5xl mx-auto mb-16">
        <article className="p-8 sm:p-12 rounded-3xl bg-white/80 dark:bg-dusk-surface/90 border border-sand/80 dark:border-dusk-border backdrop-blur-md shadow-md hover:shadow-xl transition-all duration-300">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3.5 py-1 rounded-full bg-terracotta/10 text-terracotta text-xs font-bold uppercase tracking-wider">
              {FEATURED_STORY.category}
            </span>
            <span className="text-xs text-charcoal/50 dark:text-cream/50">
              · {FEATURED_STORY.readTime}
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-charcoal dark:text-cream mb-4 leading-snug">
            &ldquo;{FEATURED_STORY.title}&rdquo;
          </h2>

          <p className="text-base sm:text-lg text-charcoal/80 dark:text-cream/80 leading-relaxed mb-8 max-w-3xl">
            The honest story behind the brand, the fear, the excitement, and what finally made me just go for it. For years, I hid behind perfectionism. Here is what shifted when I stopped waiting to feel &lsquo;ready&rsquo;.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-sand/60 dark:border-dusk-border">
            <div className="flex items-center gap-3">
              <img
                src="/assets/raia_portrait.jpg"
                alt="Raia"
                className="w-12 h-12 rounded-full object-cover border-2 border-terracotta"
              />
              <div>
                <strong className="block text-sm text-charcoal dark:text-cream">Raia</strong>
                <small className="text-xs text-charcoal/60 dark:text-cream/60">
                  September 2026 · Personal Essay
                </small>
              </div>
            </div>

            <button
              onClick={() => setSelectedStory(FEATURED_STORY)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-terracotta text-white font-medium hover:bg-terracotta-dark transition-all duration-300 shadow-md shadow-terracotta/20 hover:scale-105 self-start sm:self-auto cursor-pointer"
            >
              <span>Read Full Essay</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </article>
      </section>

      {/* Posts Grid */}
      <section className="px-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="w-5 h-5 text-terracotta" />
          <h2 className="font-serif text-2xl font-bold text-charcoal dark:text-cream">
            All Essays & Reflections
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POSTS.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedStory(post)}
              className="group p-7 rounded-2xl bg-white/70 dark:bg-dusk-surface/70 border border-sand/70 dark:border-dusk-border backdrop-blur-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="text-xs font-semibold text-terracotta mb-3">
                  {post.category} · {post.readTime}
                </div>
                <h3 className="font-serif text-xl font-bold text-charcoal dark:text-cream mb-3 group-hover:text-terracotta transition-colors leading-snug">
                  &ldquo;{post.title}&rdquo;
                </h3>
                <p className="text-sm text-charcoal/70 dark:text-cream/70 leading-relaxed mb-6">
                  {post.paragraphs[0].slice(0, 130)}...
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-semibold text-terracotta group-hover:gap-2.5 transition-all">
                <span>Read essay</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Story Modal */}
      <StoryModal
        isOpen={Boolean(selectedStory)}
        onClose={() => setSelectedStory(null)}
        story={selectedStory}
      />
    </div>
  );
};
