"use client";
import React, { useState, useEffect } from 'react';
import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { cn } from '../lib/utils';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {isVisible && (
          <m.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            aria-label="Back to top"
            className={cn(
              "fixed bottom-8 right-8 z-50 p-3 rounded-2xl",
              "bg-(--card) text-(--fg) border border-(--border-subtle)",
              "shadow-lg hover:shadow-xl hover:border-(--accent)",
              "hover:-translate-y-1 transition-all duration-300",
              "group focus:outline-none focus-visible:ring-2 focus-visible:ring-(--accent)"
            )}
          >
            <div aria-hidden="true" className="absolute inset-0 bg-(--accent)/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <ArrowUp size={24} aria-hidden="true" className="relative z-10 group-hover:text-(--accent) transition-colors" />
          </m.button>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}
