"use client";

import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from 'next-themes';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  const isDark = resolvedTheme === 'dark';

  const navLinks = [
    { name: 'Projects', href: '/#projects' },
    { name: 'About', href: '/#about' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 flex justify-center px-6 transition-all duration-300",
        scrolled ? "py-4" : "py-6"
      )}
    >
      <nav
        className={cn(
          "flex items-center justify-between w-full max-w-5xl px-6 py-3 rounded-2xl transition-all duration-300",
          scrolled 
            ? "bg-(--bg)/80 backdrop-blur-xl border border-(--border-subtle) shadow-sm" 
            : "bg-transparent"
        )}
      >
        <a href="#" className="font-bold text-xl tracking-tight">
          PR<span className="text-(--accent)">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-(--muted) hover:text-(--fg) transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-(--accent) transition-all duration-300 group-hover:w-full rounded-full"></span>
            </Link>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={toggleDarkMode}
          className="p-2 text-(--muted) hover:text-(--fg) bg-(--card) border border-(--border-subtle) rounded-full hover:border-(--accent) shadow-sm transition-all duration-200"
          aria-label="Toggle dark mode"
        >
          <div className="relative w-[18px] h-[18px] flex items-center justify-center">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={mounted && isDark ? "dark" : "light"}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {(mounted && isDark) ? <Sun size={18} /> : <Moon size={18} />}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.button>
      </nav>
    </header>
  );
}
