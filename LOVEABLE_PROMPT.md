# Lovable Master Prompt: Life With Raia ✨

Copy and paste the entire prompt below directly into the prompt bar at **[Lovable.dev](https://lovable.dev)** to generate or extend the website:

---

```markdown
Build a warm, highly aesthetic, multi-page personal brand and creator portfolio website called "Life With Raia".

## Brand & Aesthetic Vision
- Creator: Raia (23-year-old lifestyle content creator, storyteller, 35mm film photographer)
- Brand Essence: "This is my life — and I'm just getting started." Real life, unfiltered moments, cozy aesthetics, and honest conversations (no fake highlight reels).
- Theme & Color Palette:
  - Default: Warm Daylight (Warm cream `#FAF6F0`, soft oatmeal `#F3ECE2`, terracotta `#D86A43`, blush rose `#E58E80`, golden sunlight `#EBB358`, sage green `#6B806E`, espresso text `#261F1D`).
  - Dusk Twilight: Deep warm dusk (`#151111`, `#1F1918`, soft amber glowing borders, cream typography).
  - Include an interactive theme toggle in the header.
- Typography:
  - Headings & Editorial Quotes: Playfair Display (Serif, italic elegance)
  - UI & Body Copy: Plus Jakarta Sans (Clean, modern, highly legible)
- Glassmorphism & Micro-Interactions:
  - Glass cards (`bg-white/75 backdrop-blur-md border border-white/50 rounded-3xl shadow-sm`)
  - Subtle float animations, glowing gradient accents, and pulsing live badges.

## Multi-Page Route Structure
Implement React Router with 7 dedicated pages:
1. `/` (Home):
   - Hero: Headline "This is my life — and I'm just getting started.", Subheadline, dual CTAs ("Get to Know Me" -> /about, "See What's New" -> /updates), Raia's 35mm portrait card with floating badges, and interactive live stats bar (50+ Videos, 200+ Photos, Weekly Updates, Growing Community).
   - Currently Loving / Weekly Rotation: 4 lifestyle cards (In My Headphones with simulated audio waveform, Morning Ritual iced oat honey latte recipe, On My Bedside Table reading book, 35mm Film Obsession) + interactive "Vibe of the Week" poll chips with instant toast feedback.
   - Spaces Bento Grid: 6 cards linking to Videos, Photos, Stories, About, Updates, and Contact.
   - Videos Spotlight: Featured vlog premiere with simulated video player modal.
   - Photo Diary Preview: 3 aesthetic photo highlights with full-size lightbox viewer.
   - Stories Spotlight: Featured essay teaser with read-time and author byline.
   - Community Circle: 3 heartfelt quote cards from community members + interactive "Drop a Sticky Note" vlog suggestion box.
   - Newsletter Signup Banner & Footer.

2. `/about` (About Raia):
   - Headline: "I'm Raia — creator, dreamer, and lover of all things real."
   - Detailed bio, authentic philosophy quote card, quick truths list.
   - 8 Interactive Personality Badges: 🎨 Creative, ☕ Coffee Addict, 📚 Storyteller, ✈️ Explorer, 🎬 Content Creator, 💬 Oversharer (proudly), 🌙 Night Owl, 🌱 Always Growing.
   - "A Day in My Life" daily rhythm timeline (07:30 AM Morning Anchor, 10:00 AM Creative Deep Work, 03:00 PM City Walk, 09:30 PM Wind-Down).
   - "Behind The Lens" gear & studio favorites (35mm Analog Film Camera, Pocket Mirrorless & Shotgun Mic, Linen Journals).

3. `/videos` (Videos & Vlogs Hub):
   - Headline: "Grab some snacks. We're watching together."
   - Featured Video Spotlight with duration pill (18:42), release badge, and play modal.
   - Playlist Category Filters: All, 🗓️ Day In My Life, ✈️ Travel Diaries, 💬 Let's Talk, 🎉 Special Moments, 🌙 Night Routines, 🛍️ Hauls & Favorites.
   - 6 Sample Video Cards with view counts, durations, and interactive player modal triggers.
   - YouTube Channel callout banner.

4. `/photos` (Photo Stories & Visual Diary):
   - Headline: "A picture is worth a thousand words — and I have a lot to say."
   - Category Filters: All Photos, ✨ Everyday Magic, 🌅 Golden Hours, 🍜 Food & Mood, 🏙️ Places I've Been, 🪞 Just Me, 🎊 Moments Worth Remembering.
   - Responsive photo grid with hover captions.
   - Interactive Lightbox Modal with Next / Previous image navigation and captions.
   - Instagram feed banner.

5. `/stories` (Written Stories & Essays):
   - Headline: "When a video isn't enough — I write it out."
   - Featured Essay: "Why I Started Life With Raia (And Why It Took Me So Long)" with "Read Full Essay" button opening a distraction-free reader modal.
   - 8 Essay preview cards with category tags and reading time badges.

6. `/updates` (The Bulletin & Creative Projects Roadmap):
   - Timeline of announcements: September 2026 launch, first video drop, newsletter launch, first travel series.
   - 6 Creative Projects Showcase with status badges: Life With Raia Website (Live Now), The Vlog Series (Ongoing), The Raia Letter (Coming Soon), Photo Book Vol. 1 (In Progress), Conversations With Raia (Concept Stage), Raia's Picks (Coming Soon).

7. `/contact` (Contact & Social Directory):
   - 3 Direct Inquiry Cards with click-to-copy email: Collabs (`collabs@lifewithraia.com`), Fan Mail (`hello@lifewithraia.com`), Media & Press (`press@lifewithraia.com`).
   - Interactive message form with validation, topic dropdown, and animated success toast.
   - Social channels grid & directory table with click-to-copy handles (@lifewithraia, The Raia Letter).

## Interactive Components & Modals
- `Navbar`: Sticky blurred backdrop, active link highlights, theme switch button, mobile drawer.
- `VideoModal`: Simulated video player with play/pause, time tracker, and copy-link button.
- `LightboxModal`: High-res image display with caption, category pill, and prev/next controls.
- `StoryModal`: Clean, typography-focused article reader with closing controls.
- `Toast`: Global notification toast system for copy feedback, poll votes, and form submissions.
- `Footer`: Global newsletter subscription form with instant feedback state.
```
