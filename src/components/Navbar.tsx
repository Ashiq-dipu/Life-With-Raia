import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Sun, Moon, Sparkles, Menu, X } from 'lucide-react';
import { useToast } from './Toast';

export const Navbar: React.FC = () => {
  const [theme, setTheme] = useState<'warm' | 'dusk'>('warm');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    const saved = (localStorage.getItem('raia-theme') as 'warm' | 'dusk') || 'warm';
    setTheme(saved);
    document.documentElement.setAttribute('data-theme', saved);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'warm' ? 'dusk' : 'warm';
    setTheme(next);
    localStorage.setItem('raia-theme', next);
    document.documentElement.setAttribute('data-theme', next);
    showToast(`Switched to ${next === 'warm' ? 'Warm Daylight ☀️' : 'Dusk Twilight 🌙'} theme!`, 'info');
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Videos', path: '/videos' },
    { name: 'Photos', path: '/photos' },
    { name: 'Stories', path: '/stories' },
    { name: 'Updates', path: '/updates' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 border-b border-border-glass ${
        scrolled
          ? 'h-16 bg-bg-primary/90 backdrop-blur-xl shadow-sm'
          : 'h-[76px] bg-bg-primary/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-[1240px] mx-auto h-full px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <Sparkles className="w-5 h-5 text-goldAccent animate-spin-slow transition-transform group-hover:scale-110" />
          <span className="font-serif font-bold text-xl tracking-tight text-text-primary">
            Life With Raia
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wider bg-sageAccent-soft text-sageAccent px-2 py-0.5 rounded-full ml-1">
            Est. 2026
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors relative py-1 ${
                  isActive
                    ? 'text-terracotta font-semibold'
                    : 'text-text-secondary hover:text-terracotta'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-terracotta rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Header Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-bg-card border border-border-subtle hover:border-terracotta transition-all text-text-primary"
            aria-label="Toggle theme"
          >
            {theme === 'warm' ? (
              <>
                <Sun className="w-3.5 h-3.5 text-goldAccent" />
                <span>Warmth</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-goldAccent" />
                <span>Twilight</span>
              </>
            )}
          </button>

          {/* Say Hi CTA Button */}
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-terracotta text-white hover:bg-terracotta-hover transition-all shadow-sm"
          >
            <span>Say Hi</span>
            <span>✨</span>
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-text-primary hover:text-terracotta transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-bg-card/95 backdrop-blur-2xl border-b border-border-subtle px-6 py-6 shadow-xl animate-fade-in">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-base font-medium py-1 transition-colors ${
                    isActive ? 'text-terracotta font-bold' : 'text-text-secondary'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center py-2.5 rounded-full bg-terracotta text-white font-semibold text-sm shadow-md"
            >
              Say Hi ✨
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
