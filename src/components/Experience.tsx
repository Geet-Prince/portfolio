"use client";
import React from 'react';
import Section from './Section';

import { cn } from '../lib/utils';

import { timeline } from '../data/experience';

export default function Experience() {
  return (
    <div id="experience" className="h-full scroll-mt-24">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-fluid-h2 font-bold tracking-tight text-(--fg) mb-16 text-center">
          Journey<span className="text-(--accent)">.</span>
        </h2>

        <div className="relative border-l-2 border-(--border-subtle) ml-4 md:ml-6 pl-8 md:pl-12 space-y-12">
          {timeline.map((item, idx) => (
            <div 
              key={`${item.year}-${idx}`}
              className="relative opacity-0 animate-[fade-in_0.5s_ease-out_forwards]"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div 
                className={cn(
                  "absolute -left-[41px] md:-left-[57px] top-1.5 w-5 h-5 rounded-full border-4 border-(--bg) flex items-center justify-center transition-colors duration-500",
                  item.active ? "bg-(--accent)" : "bg-(--border-subtle)"
                )}
              >
                {item.active && (
                  <span className="absolute w-8 h-8 rounded-full bg-(--accent) animate-ping opacity-20"></span>
                )}
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                <span className={cn(
                  "font-mono text-[clamp(1.125rem,2vw,1.25rem)] font-bold",
                  item.active ? "text-(--accent)" : "text-(--muted)"
                )}>
                  {item.year}
                </span>
                <span className="text-fluid-h3 font-medium text-(--fg)">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
