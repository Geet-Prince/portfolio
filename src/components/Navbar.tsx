import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
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
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-(--muted) hover:text-(--fg) transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-(--accent) transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 text-(--muted) hover:text-(--fg) bg-(--card) border border-(--border-subtle) rounded-full hover:border-(--accent) hover:shadow-md transition-all duration-300"
          aria-label="Toggle dark mode"
        >
          <motion.div
            initial={false}
            animate={{ rotate: darkMode ? 180 : 0, scale: darkMode ? 1 : 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </motion.div>
        </motion.button>
      </nav>
    </header>
  );
}
