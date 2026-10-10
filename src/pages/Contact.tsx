import React, { useState } from 'react';
import { Mail, Send, Sparkles, Briefcase, Heart, Mic, Copy, Check, ExternalLink } from 'lucide-react';
import { useToast } from '../components/Toast';

const INQUIRIES = [
  {
    icon: Briefcase,
    title: 'Brand & Collaboration Inquiries',
    desc: 'For partnerships, sponsorships, and creative brand projects.',
    email: 'collabs@lifewithraia.com',
    subjectKey: 'Collab',
  },
  {
    icon: Heart,
    title: 'General Messages & Fan Mail',
    desc: 'Just want to say something? I\'d love to hear your thoughts.',
    email: 'hello@lifewithraia.com',
    subjectKey: 'Just Saying Hi',
  },
  {
    icon: Mic,
    title: 'Media & Press',
    desc: 'For podcast features, interviews, press kits, and speaking.',
    email: 'press@lifewithraia.com',
    subjectKey: 'Business',
  },
];

const SOCIAL_CHANNELS = [
  {
    platform: 'Instagram',
    icon: '📸',
    handle: '@lifewithraia',
    url: 'https://instagram.com',
    vibe: 'Photos, reels, daily moments',
    frequency: 'Daily Stories',
  },
  {
    platform: 'YouTube',
    icon: '📹',
    handle: 'Life With Raia',
    url: 'https://youtube.com',
    vibe: 'Weekly vlogs & long-form stories',
    frequency: 'Sundays 10 AM',
  },
  {
    platform: 'TikTok',
    icon: '⚡',
    handle: '@lifewithraia',
    url: 'https://tiktok.com',
    vibe: 'Bite-sized moments & behind-the-scenes',
    frequency: '3-4x / Week',
  },
  {
    platform: 'Pinterest',
    icon: '📌',
    handle: '@lifewithraia',
    url: 'https://pinterest.com',
    vibe: 'Moodboards, aesthetic inspo, lifestyle',
    frequency: 'Weekly Boards',
  },
];

export const Contact: React.FC = () => {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedHandle, setCopiedHandle] = useState<string | null>(null);

  const handleInquiryCardClick = (subjectKey: string) => {
    setFormData((prev) => ({ ...prev, subject: subjectKey }));
    showToast(`Subject set to "${subjectKey}" ✨`, 'info');
  };

  const handleCopyHandle = (handle: string) => {
    navigator.clipboard.writeText(handle);
    setCopiedHandle(handle);
    showToast(`Copied ${handle} to clipboard! 📋`, 'success');
    setTimeout(() => setCopiedHandle(null), 2500);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.subject) errs.subject = 'Please select a conversation topic';
    if (!formData.message.trim()) errs.message = 'Please type your message';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      showToast('Please fill out all required fields.', 'error');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      showToast(`Thank you ${formData.name}! Your message was sent straight to Raia 💌`, 'success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }, 800);
  };

  return (
    <div className="pt-24 pb-20">
      {/* Subpage Hero */}
      <section className="px-4 max-w-4xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sand/60 dark:bg-dusk-surface/80 border border-sand/70 dark:border-dusk-border text-terracotta text-sm font-semibold mb-6">
          <Mail className="w-4 h-4" />
          <span>📬 Open Inbox & Community</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-charcoal dark:text-cream leading-tight mb-6">
          &ldquo;Let&apos;s talk. I love hearing from you.&rdquo;
        </h1>
        <p className="text-lg text-charcoal/70 dark:text-cream/70 max-w-2xl mx-auto">
          Whether you&apos;re a brand looking to collaborate, a fellow creator wanting to connect, or just someone who wants to say hi — my inbox is always open. Seriously, reach out.
        </p>
      </section>

      {/* Main Grid: Info + Form */}
      <section className="px-4 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Inquiry Channels */}
          <div className="lg:col-span-5 space-y-5">
            {INQUIRIES.map((inq, idx) => {
              const IconComponent = inq.icon;
              return (
                <div
                  key={idx}
                  onClick={() => handleInquiryCardClick(inq.subjectKey)}
                  className="p-6 rounded-2xl bg-white/70 dark:bg-dusk-surface/70 border border-sand/70 dark:border-dusk-border hover:border-terracotta/40 hover:shadow-lg transition-all duration-300 cursor-pointer group flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-terracotta/10 text-terracotta flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-charcoal dark:text-cream mb-1">
                      {inq.title}
                    </h3>
                    <p className="text-xs text-charcoal/70 dark:text-cream/70 leading-relaxed mb-2">
                      {inq.desc}
                    </p>
                    <span className="text-xs font-semibold text-terracotta">
                      📧 {inq.email}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Response Promise Card */}
            <div className="p-6 rounded-2xl bg-terracotta/5 dark:bg-terracotta/10 border border-terracotta/20 flex items-center gap-4 text-sm text-charcoal/80 dark:text-cream/80">
              <span className="text-2xl">💕</span>
              <p className="italic">
                &ldquo;I read every message. Response time is usually 2–3 days. Can&apos;t wait to hear from you 💕&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Direct Note Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white/80 dark:bg-dusk-surface/80 border border-sand/80 dark:border-dusk-border backdrop-blur-md shadow-md">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal dark:text-cream mb-2">
              Send a Direct Note ✨
            </h2>
            <p className="text-sm text-charcoal/70 dark:text-cream/70 mb-8">
              Fill this out and it lands straight in my inbox.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal/70 dark:text-cream/70 mb-2">
                    Your Name <span className="text-terracotta">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Maya Lin"
                    className="w-full px-4 py-3 rounded-xl bg-sand/30 dark:bg-dusk-bg border border-sand/80 dark:border-dusk-border text-charcoal dark:text-cream focus:outline-none focus:border-terracotta transition-colors text-sm"
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal/70 dark:text-cream/70 mb-2">
                    Your Email <span className="text-terracotta">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-sand/30 dark:bg-dusk-bg border border-sand/80 dark:border-dusk-border text-charcoal dark:text-cream focus:outline-none focus:border-terracotta transition-colors text-sm"
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal/70 dark:text-cream/70 mb-2">
                  Subject <span className="text-terracotta">*</span>
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-sand/30 dark:bg-dusk-bg border border-sand/80 dark:border-dusk-border text-charcoal dark:text-cream focus:outline-none focus:border-terracotta transition-colors text-sm cursor-pointer"
                >
                  <option value="" disabled>Select a conversation topic...</option>
                  <option value="Collab">💼 Brand / Collab Opportunity</option>
                  <option value="Just Saying Hi">💌 Just Saying Hi &amp; Kind Words</option>
                  <option value="Business">🎙️ Media / Press / Speaking</option>
                  <option value="Other">✨ Other Creative Thoughts</option>
                </select>
                {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal/70 dark:text-cream/70 mb-2">
                  Message <span className="text-terracotta">*</span>
                </label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share your thoughts, ideas, or questions here..."
                  className="w-full px-4 py-3 rounded-xl bg-sand/30 dark:bg-dusk-bg border border-sand/80 dark:border-dusk-border text-charcoal dark:text-cream focus:outline-none focus:border-terracotta transition-colors text-sm resize-y"
                />
                {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-terracotta text-white font-medium hover:bg-terracotta-dark transition-all duration-300 shadow-md shadow-terracotta/20 hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
              >
                <span>{isSubmitting ? 'Sending Note...' : 'Send It ✨'}</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Social Media Hub */}
      <section className="px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-terracotta block mb-2">
            Find Me Online
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal dark:text-cream mb-4">
            &ldquo;Come find me — I&apos;m always around.&rdquo;
          </h2>
          <p className="text-base text-charcoal/70 dark:text-cream/70 italic">
            &ldquo;Follow along, send a DM, drop a comment — I actually read everything. Let&apos;s be friends.&rdquo;
          </p>
        </div>

        {/* Social Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {SOCIAL_CHANNELS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/70 dark:bg-dusk-surface/70 border border-sand/70 dark:border-dusk-border backdrop-blur-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl block mb-3">{item.icon}</span>
                <h3 className="font-serif text-lg font-bold text-charcoal dark:text-cream">
                  {item.platform}
                </h3>
                <span className="text-xs font-semibold text-terracotta block mb-2">
                  {item.handle}
                </span>
                <p className="text-xs text-charcoal/70 dark:text-cream/70 mb-4 leading-relaxed">
                  {item.vibe}
                </p>
              </div>

              <div className="flex items-center gap-2 pt-3 border-t border-sand/60 dark:border-dusk-border">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 text-center text-xs font-semibold rounded-lg bg-terracotta/10 text-terracotta hover:bg-terracotta hover:text-white transition-colors"
                >
                  Visit ↗
                </a>
                <button
                  onClick={() => handleCopyHandle(item.handle)}
                  className="p-2 rounded-lg bg-sand/60 dark:bg-dusk-border text-charcoal/70 dark:text-cream/70 hover:bg-terracotta hover:text-white transition-colors"
                  title="Copy handle"
                >
                  {copiedHandle === item.handle ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
