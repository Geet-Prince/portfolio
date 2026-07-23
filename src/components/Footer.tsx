"use client";
import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-(--border-subtle) py-8 mt-12">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-(--muted)">
          © 2026 Prince Raj. All rights reserved.
        </p>
        
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-sm text-(--muted)">
          <span>Built with React + Tailwind CSS.</span>
          <span>Designed & Developed by Prince Raj.</span>
        </div>
      </div>
    </footer>
  );
}
