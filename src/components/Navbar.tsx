"use client";
import React, { useState, useEffect } from 'react';
import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { navLinks } from '../data/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Lock body scroll when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  const toggleDarkMode = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  const isDark = resolvedTheme === 'dark';

  return (
    <LazyMotion features={domAnimation}>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 flex justify-center px-6 transition-all duration-300",
          scrolled ? "py-4" : "py-6"
        )}
      >
        <div className="w-full max-w-5xl relative flex flex-col">
          <nav
            className={cn(
              "flex items-center justify-between w-full px-6 py-3 rounded-2xl transition-all duration-300 relative z-50",
              (scrolled || mobileMenuOpen)
                ? "bg-(--bg)/80 backdrop-blur-xl border border-(--border-subtle) shadow-sm"
                : "bg-transparent"
            )}
          >
            <Link href="/" className="font-bold text-xl tracking-tight text-(--fg)">
              PR<span className="text-(--accent)">.</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-(--muted) hover:text-(--fg) transition-colors relative group"
                >
                  {link.name}
                  <span aria-hidden="true" className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-(--accent) transition-all duration-300 group-hover:w-full rounded-full"></span>
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <m.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={toggleDarkMode}
                className="p-2 text-(--muted) hover:text-(--fg) bg-(--card) border border-(--border-subtle) rounded-full hover:border-(--accent) shadow-sm transition-all duration-200"
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              >
                <div className="relative w-[18px] h-[18px] flex items-center justify-center">
                  <AnimatePresence mode="wait" initial={false}>
                    <m.div
                      key={mounted && isDark ? "dark" : "light"}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      {(mounted && isDark) ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
                    </m.div>
                  </AnimatePresence>
                </div>
              </m.button>

              {/* Mobile Menu Toggle */}
              <m.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-(--fg) hover:text-(--accent) transition-colors"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-nav-menu"
              >
                {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
              </m.button>
            </div>
          </nav>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <m.div
                id="mobile-nav-menu"
                role="navigation"
                aria-label="Mobile navigation"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute top-full left-6 right-6 mt-2 p-6 bg-(--card)/95 backdrop-blur-xl border border-(--border-subtle) rounded-2xl shadow-2xl md:hidden flex flex-col gap-6 origin-top"
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-semibold text-(--fg) hover:text-(--accent) transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </m.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </LazyMotion>
  );
}
