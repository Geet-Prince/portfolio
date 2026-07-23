"use client";
import React from 'react';
import Section from './Section';

export default function About() {
  return (
    <Section id="about" className="py-24 md:py-32 bg-(--card) text-(--card-fg) rounded-[2.5rem] my-12 relative overflow-hidden border border-(--border-subtle) shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-b from-(--surface)/50 to-transparent pointer-events-none"></div>
      
      <div className="relative z-10 p-4 md:p-8">
        <h2 className="text-sm font-medium tracking-widest uppercase text-(--accent) mb-8">
          About Me
        </h2>
        
        <blockquote className="text-2xl md:text-4xl font-medium leading-tight md:leading-snug max-w-4xl text-(--card-fg)">
          "I enjoy building software that combines scalable backend systems with thoughtful user experiences. My interests span backend engineering, distributed systems, full-stack development, and data-driven products. I enjoy transforming ideas into reliable, high-performance applications."
        </blockquote>
        
        <div className="mt-16 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-(--accent) flex items-center justify-center text-white font-bold text-xl shadow-md">
            PR
          </div>
          <div>
            <div className="font-semibold text-lg text-(--card-fg)">Prince Raj</div>
            <div className="text-(--muted)">Software Engineer</div>
          </div>
        </div>
      </div>
    </Section>
  );
}
