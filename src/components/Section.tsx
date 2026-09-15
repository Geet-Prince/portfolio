"use client";
import React from 'react';

import { cn } from '../lib/utils';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export default function Section({ id, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "w-full max-w-5xl mx-auto px-6 py-24 md:py-32",
        className
      )}
    >
      <div
        className="opacity-0 animate-[fade-in-up_0.6s_ease-out_forwards]"
      >
        {children}
      </div>
    </section>
  );
}
