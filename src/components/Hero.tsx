"use client";
import React, { useState } from 'react';
import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion';
import { Mail, ArrowDown, MapPin, Code2, BookOpen, Briefcase, ChevronRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import Section from './Section';
import { socials } from '../data/socials';

export default function Hero() {
  const [activeTab, setActiveTab] = useState<'verse' | 'music'>('verse');

  return (
    <LazyMotion features={domAnimation}>
      <Section id="hero" className="min-h-screen flex flex-col justify-center pt-32 pb-16 relative">
        {/* Subtle Background Glow behind hero */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-tr from-(--accent)/10 via-transparent to-transparent rounded-full blur-[120px] opacity-30 pointer-events-none z-0"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 xl:gap-16 items-center w-full z-10">

          {/* Left Side: Storytelling & Personal Info */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-4">
              <m.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-fluid-hero leading-[1.1] font-extrabold tracking-tight text-(--fg)"
              >
                Prince Raj<span className="text-(--accent)">.</span>
              </m.h1>

              <m.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-fluid-h3 font-semibold text-(--fg) tracking-tight"
              >
                I build software that feels as good as it performs.
              </m.p>
            </div>

            <m.article
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-fluid-p text-(--muted) leading-relaxed max-w-xl"
            >
              Engineering reliable backend systems for modern digital products. Full-stack developer with a passion for scalable architecture and polished user experiences.
            </m.article>

            {/* Personal Details Grid */}
            <m.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium text-(--muted)"
            >
              <div className="flex items-center gap-3">
                <Code2 size={16} aria-hidden="true" className="text-(--accent)" />
                <span>Current Focus: <strong className="text-(--fg)">Verse</strong></span>
              </div>
              <div className="flex items-center gap-3">
                <BookOpen size={16} aria-hidden="true" className="text-(--accent)" />
                <span>Learning <strong className="text-(--fg)">Distributed Systems</strong></span>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase size={16} aria-hidden="true" className="text-green-500" />
                <span>Open to Backend Internships</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} aria-hidden="true" className="text-(--accent)" />
                <span>Based in <strong className="text-(--fg)">Greater Noida 🇮🇳</strong></span>
              </div>
            </m.div>

            <m.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#projects"
                aria-label="View Projects"
                className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-(--fg) text-(--bg) font-semibold hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-(--accent) focus-visible:outline-none motion-reduce:transform-none"
              >
                View Projects
                <ArrowDown size={16} aria-hidden="true" className="motion-safe:group-hover:translate-y-0.5 motion-safe:transition-transform motion-safe:duration-300" />
              </a>
              <div className="flex items-center gap-4 ml-4">
                {socials.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className="group relative text-(--muted) hover:text-(--fg) transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-(--accent) focus-visible:outline-none rounded-md px-1 py-0.5"
                    >
                      <Icon size={22} aria-hidden="true" className="motion-safe:group-hover:scale-110 motion-safe:transition-transform motion-safe:duration-300 motion-reduce:transform-none" />
                      <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-(--fg) text-(--bg) text-xs rounded opacity-0 motion-safe:group-hover:opacity-100 motion-safe:transition-opacity motion-safe:duration-300 pointer-events-none whitespace-nowrap shadow-md">
                        {social.label}
                        <span aria-hidden="true" className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-(--fg)"></span>
                      </span>
                    </a>
                  );
                })}
                <a
                  href="https://leetcode.com/u/geet-prince/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LeetCode Profile"
                  className="group relative text-(--muted) hover:text-(--fg) transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-(--accent) focus-visible:outline-none rounded-md px-1 py-0.5"
                >
                  <SiLeetcode size={22} aria-hidden="true" className="motion-safe:group-hover:scale-110 motion-safe:transition-transform motion-safe:duration-300 motion-reduce:transform-none" />
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-(--fg) text-(--bg) text-xs rounded opacity-0 motion-safe:group-hover:opacity-100 motion-safe:transition-opacity motion-safe:duration-300 pointer-events-none whitespace-nowrap shadow-md">
                    LeetCode
                    <span aria-hidden="true" className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-(--fg)"></span>
                  </span>
                </a>
              </div>
            </m.div>
          </div>

          {/* Right Side: Alive Developer Workspace */}
          <div className="relative w-full h-[400px] md:h-[550px] flex items-center justify-center lg:justify-end perspective-1000">

            {/* Desk Lamp Ambient Glow */}
            <div className="absolute top-10 right-20 w-48 h-48 bg-amber-500/20 rounded-full blur-[80px] pointer-events-none z-0 mix-blend-screen"></div>

            {/* Realistic Workspace Container */}
            <m.div
              initial={{ opacity: 0, rotateY: -10, rotateX: 5 }}
              animate={{ opacity: 1, rotateY: -5, rotateX: 2 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-[420px] z-10 transform-style-3d group"
            >

              {/* The Laptop */}
              <div className="relative bg-[#1A1A1A] rounded-t-xl border-x-4 border-t-4 border-[#333] shadow-2xl overflow-hidden flex flex-col aspect-[4/3] group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-shadow duration-700">

                {/* Fake Webcam */}
                <div aria-hidden="true" className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-black flex items-center justify-center z-20">
                  <div className="w-0.5 h-0.5 rounded-full bg-blue-500/50"></div>
                </div>

                {/* VS Code Window */}
                <div className="flex-1 bg-[#1E1E1E] flex flex-col mt-3 border-t border-[#333]">
                  {/* VS Code Header */}
                  <div className="flex items-center px-3 py-2 bg-[#252526] border-b border-[#333] text-[10px] text-gray-400 font-sans">
                    <div aria-hidden="true" className="flex gap-1.5 mr-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
                    </div>
                    <div className="flex gap-1" role="tablist" aria-label="Code files">
                      <button
                        role="tab"
                        aria-selected={activeTab === 'verse'}
                        onClick={() => setActiveTab('verse')}
                        className={`px-3 py-1.5 -mb-2 rounded-t-md border-t border-x flex items-center gap-1.5 transition-colors focus:outline-none ${activeTab === 'verse' ? 'bg-[#1E1E1E] text-gray-200 border-[#333] z-10' : 'bg-transparent text-gray-500 border-transparent hover:bg-[#2A2D2E]'}`}
                      >
                        <span aria-hidden="true" className="text-[#519aba]">☕</span> Verse.kt
                      </button>
                      <button
                        role="tab"
                        aria-selected={activeTab === 'music'}
                        onClick={() => setActiveTab('music')}
                        className={`px-3 py-1.5 -mb-2 rounded-t-md border-t border-x flex items-center gap-1.5 transition-colors focus:outline-none ${activeTab === 'music' ? 'bg-[#1E1E1E] text-gray-200 border-[#333] z-10' : 'bg-transparent text-gray-500 border-transparent hover:bg-[#2A2D2E]'}`}
                      >
                        <span aria-hidden="true" className="text-[#e37933]">🐘</span> MusicController.java
                      </button>
                    </div>
                  </div>

                  {/* VS Code Editor Area */}
                  <div className="flex-1 p-4 font-mono text-[11px] md:text-xs leading-loose text-gray-300 overflow-hidden relative">
                    <div aria-hidden="true" className="absolute left-0 top-0 bottom-0 w-8 bg-[#1E1E1E] border-r border-[#333] flex flex-col items-center py-4 text-gray-600 select-none">
                      {[...Array(9)].map((_, i) => <div key={i}>{i + 1}</div>)}
                    </div>

                    <div className="pl-6 w-full h-full relative">
                      <AnimatePresence mode="wait">
                        {activeTab === 'verse' ? (
                          <m.div
                            key="verse"
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.2 }}
                            className="whitespace-pre-wrap font-mono"
                          >
                            <div><span className="text-[#c678dd]">class</span> <span className="text-[#e5c07b]">JamSessionManager</span>(</div>
                            <div>    <span className="text-[#c678dd]">private val</span> firebase: <span className="text-[#e5c07b]">FirebaseDatabase</span></div>
                            <div>{')'} {'{'}</div>
                            <br />
                            <div>    <span className="text-[#c678dd]">suspend fun</span> <span className="text-[#61afef]">syncPlayback</span>() {'{'}</div>
                            <div>        <span className="text-gray-500 italic">{'// Synchronizing stream across devices...'}</span></div>
                            <div>        firebase.<span className="text-[#61afef]">sync</span>()</div>
                            <div>    {'}'}</div>
                            <div>{'}'}<m.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} aria-hidden="true" className="inline-block w-1.5 h-3 bg-gray-400 ml-1 translate-y-0.5" /></div>
                          </m.div>
                        ) : (
                          <m.div
                            key="music"
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.2 }}
                            className="whitespace-pre-wrap font-mono"
                          >
                            <div><span className="text-[#e5c07b]">@RestController</span></div>
                            <div><span className="text-[#e5c07b]">@RequestMapping</span>(<span className="text-[#98c379]">{'"'}/api/music{'"'}</span>)</div>
                            <div><span className="text-[#c678dd]">public class</span> <span className="text-[#e5c07b]">MusicController</span> {'{'}</div>
                            <br />
                            <div>    <span className="text-[#e5c07b]">@GetMapping</span>(<span className="text-[#98c379]">{'"'}/songs{'"'}</span>)</div>
                            <div>    <span className="text-[#c678dd]">public</span> <span className="text-[#e5c07b]">ResponseEntity</span>&lt;List&lt;Song&gt;&gt; <span className="text-[#61afef]">getSongs</span>() {'{'}</div>
                            <div>        <span className="text-[#c678dd]">return</span> ResponseEntity.<span className="text-[#61afef]">ok</span>(service.<span className="text-[#61afef]">findAll</span>());</div>
                            <div>    {'}'}</div>
                            <div>{'}'}<m.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} aria-hidden="true" className="inline-block w-1.5 h-3 bg-gray-400 ml-1 translate-y-0.5" /></div>
                          </m.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>

              {/* Laptop Base */}
              <div aria-hidden="true" className="h-4 md:h-5 bg-[#D1D1D1] rounded-b-xl border-x-4 border-b-4 border-[#B0B0B0] relative flex justify-center z-10 shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
                <div className="w-16 h-1 bg-[#A0A0A0] rounded-b-md"></div>
              </div>

              {/* Desktop Elements (Coffee, Mouse) */}
              <div aria-hidden="true" className="absolute -bottom-8 -right-12 w-full flex justify-end gap-6 z-0 pointer-events-none opacity-80 mix-blend-luminosity dark:mix-blend-normal">
                {/* Coffee Cup */}
                <div className="relative transform translate-y-6">
                  <div className="w-8 h-10 bg-(--surface) border border-(--border-subtle) rounded-b-lg rounded-t-sm shadow-md flex items-center justify-center relative">
                    <div className="absolute -right-2 top-2 w-3 h-5 border-2 border-(--border-subtle) rounded-full z-[-1]"></div>
                  </div>
                  {/* Steam */}
                  <m.div
                    animate={{ y: [-5, -15], opacity: [0, 0.6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-4 left-2 w-1 h-3 bg-gray-300 rounded-full blur-[2px]"
                  ></m.div>
                  <m.div
                    animate={{ y: [-5, -15], opacity: [0, 0.4, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute -top-3 left-4 w-1 h-3 bg-gray-300 rounded-full blur-[2px]"
                  ></m.div>
                </div>

                {/* Tiny Mouse */}
                <div className="w-6 h-10 bg-(--surface) border border-(--border-subtle) rounded-full shadow-sm mt-8 transform rotate-12"></div>
              </div>

              <div aria-hidden="true" className="absolute -right-8 top-12 flex flex-col gap-3 pointer-events-none z-30">
                <m.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="px-3 py-1.5 rounded-full bg-(--card)/90 backdrop-blur-md border border-(--border-subtle) shadow-md flex items-center gap-2 text-[10px] font-medium text-(--card-fg)"
                >
                  <div className="relative w-2 h-2 flex items-center justify-center">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-orange-500 animate-ping opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500"></span>
                  </div>
                  Firebase Connected
                </m.div>
                <m.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="px-3 py-1.5 rounded-full bg-(--card)/90 backdrop-blur-md border border-(--border-subtle) shadow-md flex items-center gap-2 text-[10px] font-medium text-(--card-fg)"
                >
                  <div className="relative w-2 h-2 flex items-center justify-center">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 animate-ping opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                  </div>
                  Spring Boot Running
                </m.div>
                <m.div
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="px-3 py-1.5 rounded-full bg-(--card)/90 backdrop-blur-md border border-(--border-subtle) shadow-md flex items-center gap-2 text-[10px] font-medium text-(--card-fg)"
                >
                  <div className="relative w-2 h-2 flex items-center justify-center">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-blue-500 animate-ping opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
                  </div>
                  Jam Session Active
                </m.div>
              </div>

              {/* Currently Building Premium Widget */}
              <m.div
                animate={{ y: [0, -6, 0], rotate: [0, 0.5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-16 -left-8 md:-left-16 w-[280px] p-5 rounded-2xl bg-(--card)/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.12)] z-40 group/widget cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl opacity-50 pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-[10px] font-bold tracking-widest uppercase text-(--accent) flex items-center gap-1.5">
                      <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-(--accent) animate-ping"></span>
                      Currently Building
                    </div>
                    <div className="text-[10px] text-(--muted) font-mono bg-(--surface) px-1.5 py-0.5 rounded border border-(--border-subtle)">v2.3</div>
                  </div>

                  <h2 className="font-bold text-xl text-(--card-fg) tracking-tight mb-1">Verse</h2>
                  <p className="text-xs text-(--muted) mb-4">Modern Music Streaming Platform</p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {['Spring Boot', 'Firebase', 'Media3', 'Android', 'Realtime Sync'].map(tech => (
                      <span key={tech} className="text-[10px] px-2 py-1 rounded-full border border-(--border-subtle) bg-(--surface) text-(--surface-fg) shadow-sm">{tech}</span>
                    ))}
                  </div>

                  <a href="https://verse.geetprince.me/" target="_blank" rel="noreferrer" aria-label="Verse Live Demo" className="inline-flex items-center gap-1.5 text-xs font-semibold text-(--accent) group-hover/widget:text-(--fg) transition-colors focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-(--accent) focus-visible:outline-none rounded-sm px-1 py-0.5 -mx-1">
                    Live Demo
                    <ChevronRight size={14} aria-hidden="true" className="motion-safe:group-hover/widget:translate-x-1 motion-safe:transition-transform" />
                  </a>
                </div>
              </m.div>

            </m.div>
          </div>
        </div>

        {/* Premium Scroll Indicator */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          aria-hidden="true"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-(--muted) pointer-events-none group"
        >
          <m.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={16} className="text-(--muted)" />
          </m.div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">Featured Work</span>
        </m.div>
      </Section>
    </LazyMotion>
  );
}
