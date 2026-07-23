import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ArrowDown, MapPin, Code2, BookOpen, Briefcase, ChevronRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Section from './Section';

const codeSnippets = [
`@RestController
@RequestMapping("/api/music")
public class MusicController {

    @GetMapping("/songs")
    public ResponseEntity<List<Song>> getSongs() {
        return ResponseEntity.ok(service.findAll());
    }

}`,
`class JamSessionManager(
    private val firebase: FirebaseDatabase
) {

    suspend fun syncPlayback() {
        // Synchronizing stream...
        firebase.sync()
    }

}`,
`@app.route("/api/analytics")
def analytics():
    stats = fetch_user_stats()
    return jsonify(stats)`
];

export default function Hero() {
  const [snippetIndex, setSnippetIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSnippetIndex((prev) => (prev + 1) % codeSnippets.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section id="hero" className="min-h-screen flex flex-col justify-center pt-32 pb-16 relative">
      {/* Subtle Background Glow behind hero */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-tr from-(--accent)/10 via-transparent to-transparent rounded-full blur-[120px] opacity-30 pointer-events-none z-0"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center w-full z-10">
        
        {/* Left Side: Storytelling & Personal Info */}
        <div className="flex flex-col space-y-8">
          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight text-(--fg)"
            >
              Prince Raj<span className="text-(--accent)">.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl md:text-3xl font-semibold text-(--fg) tracking-tight"
            >
              I build software that feels as good as it performs.
            </motion.p>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-(--muted) leading-relaxed max-w-lg"
          >
            Engineering reliable backend systems for modern digital products. Full-stack developer with a passion for scalable architecture and polished user experiences.
          </motion.p>

          {/* Personal Details Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium text-(--muted)"
          >
            <div className="flex items-center gap-3">
              <Code2 size={16} className="text-(--accent)" />
              <span>Current Focus: <strong className="text-(--fg)">Verse</strong></span>
            </div>
            <div className="flex items-center gap-3">
              <BookOpen size={16} className="text-(--accent)" />
              <span>Learning <strong className="text-(--fg)">Distributed Systems</strong></span>
            </div>
            <div className="flex items-center gap-3">
              <Briefcase size={16} className="text-green-500" />
              <span>Open to Backend Internships</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-(--accent)" />
              <span>Based in <strong className="text-(--fg)">Greater Noida 🇮🇳</strong></span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <a 
              href="#projects" 
              className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-(--fg) text-(--bg) font-semibold hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              View Projects
              <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform duration-300" />
            </a>
            <div className="flex items-center gap-4 ml-4">
              {[
                { icon: FaGithub, href: "https://github.com/Geet-Prince/", label: "GitHub" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/geetprince/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:prince.raj.ds@gmail.com", label: "Email" },
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={i}
                    href={social.href} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="group relative text-(--muted) hover:text-(--fg) transition-colors duration-300"
                  >
                    <Icon size={22} className="group-hover:scale-110 transition-transform duration-300" />
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-(--fg) text-(--bg) text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-md">
                      {social.label}
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-(--fg)"></span>
                    </span>
                  </a>
                );
              })}
              <a 
                href="https://leetcode.com/u/geet-prince/" 
                target="_blank" 
                rel="noreferrer" 
                className="group relative text-(--muted) hover:text-(--fg) transition-colors duration-300 font-bold text-lg leading-none flex items-center h-full pt-1"
              >
                <span className="group-hover:scale-110 inline-block transition-transform duration-300">LC</span>
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-(--fg) text-(--bg) text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-md">
                  LeetCode
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-(--fg)"></span>
                </span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Alive Developer Workspace */}
        <div className="relative w-full h-[400px] md:h-[550px] flex items-center justify-center lg:justify-end perspective-1000">
          
          {/* Desk Lamp Ambient Glow */}
          <div className="absolute top-10 right-20 w-48 h-48 bg-amber-500/20 rounded-full blur-[80px] pointer-events-none z-0 mix-blend-screen"></div>

          {/* Realistic Workspace Container */}
          <motion.div 
            initial={{ opacity: 0, rotateY: -10, rotateX: 5 }}
            animate={{ opacity: 1, rotateY: -5, rotateX: 2 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-[420px] z-10 transform-style-3d group"
          >
            
            {/* The Laptop */}
            <div className="relative bg-[#1A1A1A] rounded-t-xl border-x-4 border-t-4 border-[#333] shadow-2xl overflow-hidden flex flex-col aspect-[4/3] group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-shadow duration-700">
              
              {/* Fake Webcam */}
              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-black flex items-center justify-center z-20">
                <div className="w-0.5 h-0.5 rounded-full bg-blue-500/50"></div>
              </div>

              {/* VS Code Window */}
              <div className="flex-1 bg-[#1E1E1E] flex flex-col mt-3 border-t border-[#333]">
                {/* VS Code Header */}
                <div className="flex items-center px-3 py-2 bg-[#252526] border-b border-[#333] text-[10px] text-gray-400 font-sans">
                  <div className="flex gap-1.5 mr-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-gray-200 bg-[#1E1E1E] px-3 py-1 -mb-2 rounded-t-md border-t border-x border-[#333] z-10 flex items-center gap-1.5">
                      <span className="text-[#519aba]">☕</span> Verse.kt
                    </span>
                    <span className="py-1 flex items-center gap-1.5 opacity-50">
                      <span className="text-[#e37933]">🐘</span> MusicController.java
                    </span>
                  </div>
                </div>
                
                {/* VS Code Editor Area */}
                <div className="flex-1 p-4 font-mono text-[11px] md:text-xs leading-loose text-gray-300 overflow-hidden relative">
                  <div className="absolute left-0 top-0 bottom-0 w-8 bg-[#1E1E1E] border-r border-[#333] flex flex-col items-center py-4 text-gray-600 select-none">
                    {[...Array(12)].map((_, i) => <div key={i}>{i+1}</div>)}
                  </div>
                  
                  <div className="pl-6 w-full h-full relative">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={snippetIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5 }}
                        className="whitespace-pre-wrap"
                      >
                        {codeSnippets[snippetIndex].split('\n').map((line, i) => (
                          <div key={i} className="min-h-[1.5em]">
                            {/* Simple Syntax Highlighting Hack */}
                            <span dangerouslySetInnerHTML={{
                              __html: line
                                .replace(/(@\w+)/g, '<span class="text-[#c678dd]">$1</span>')
                                .replace(/(class|public|private|fun|suspend|def|return)/g, '<span class="text-[#c678dd]">$1</span>')
                                .replace(/(MusicController|JamSessionManager|ResponseEntity)/g, '<span class="text-[#e5c07b]">$1</span>')
                                .replace(/("(.*?)")/g, '<span class="text-[#98c379]">$1</span>')
                                .replace(/(getSongs|syncPlayback|analytics)/g, '<span class="text-[#61afef]">$1</span>')
                            }} />
                            {/* Blinking Cursor at the end of the last line */}
                            {i === codeSnippets[snippetIndex].split('\n').length - 1 && (
                              <motion.span 
                                animate={{ opacity: [1, 0] }}
                                transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                                className="inline-block w-1.5 h-3.5 bg-gray-400 ml-1 translate-y-0.5"
                              />
                            )}
                          </div>
                        ))}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Laptop Base */}
            <div className="h-4 md:h-5 bg-[#D1D1D1] rounded-b-xl border-x-4 border-b-4 border-[#B0B0B0] relative flex justify-center z-10 shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
              <div className="w-16 h-1 bg-[#A0A0A0] rounded-b-md"></div>
            </div>

            {/* Desktop Elements (Coffee, Plant, Mouse) */}
            <div className="absolute -bottom-8 -right-12 w-full flex justify-end gap-6 z-0 pointer-events-none opacity-80 mix-blend-luminosity dark:mix-blend-normal">
              {/* Coffee Cup */}
              <div className="relative transform translate-y-6">
                <div className="w-8 h-10 bg-(--surface) border border-(--border-subtle) rounded-b-lg rounded-t-sm shadow-md flex items-center justify-center relative">
                  <div className="absolute -right-2 top-2 w-3 h-5 border-2 border-(--border-subtle) rounded-full z-[-1]"></div>
                </div>
                {/* Steam */}
                <motion.div 
                  animate={{ y: [-5, -15], opacity: [0, 0.6, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 left-2 w-1 h-3 bg-gray-300 rounded-full blur-[2px]"
                ></motion.div>
                <motion.div 
                  animate={{ y: [-5, -15], opacity: [0, 0.4, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -top-3 left-4 w-1 h-3 bg-gray-300 rounded-full blur-[2px]"
                ></motion.div>
              </div>
              
              {/* Tiny Mouse */}
              <div className="w-6 h-10 bg-(--surface) border border-(--border-subtle) rounded-full shadow-sm mt-8 transform rotate-12"></div>
            </div>
            
            {/* Live Product Status Badges */}
            <div className="absolute -right-8 top-12 flex flex-col gap-3 pointer-events-none z-30">
              <motion.div 
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="px-3 py-1.5 rounded-full bg-(--card)/90 backdrop-blur-md border border-(--border-subtle) shadow-md flex items-center gap-2 text-[10px] font-medium text-(--card-fg)"
              >
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                Firebase Connected
              </motion.div>
              <motion.div 
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="px-3 py-1.5 rounded-full bg-(--card)/90 backdrop-blur-md border border-(--border-subtle) shadow-md flex items-center gap-2 text-[10px] font-medium text-(--card-fg)"
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Spring Boot Running
              </motion.div>
              <motion.div 
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="px-3 py-1.5 rounded-full bg-(--card)/90 backdrop-blur-md border border-(--border-subtle) shadow-md flex items-center gap-2 text-[10px] font-medium text-(--card-fg)"
              >
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                Jam Session Active
              </motion.div>
            </div>

            {/* Currently Building Premium Widget */}
            <motion.div 
              animate={{ y: [0, -6, 0], rotate: [0, 0.5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-16 -left-8 md:-left-16 w-[280px] p-5 rounded-2xl bg-(--card)/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.12)] z-40 group/widget cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl opacity-50 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-[10px] font-bold tracking-widest uppercase text-(--accent) flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-(--accent) animate-ping"></span>
                    Currently Building
                  </div>
                  <div className="text-[10px] text-(--muted) font-mono bg-(--surface) px-1.5 py-0.5 rounded border border-(--border-subtle)">v2.3</div>
                </div>
                
                <h3 className="font-bold text-xl text-(--card-fg) tracking-tight mb-1">Verse</h3>
                <p className="text-xs text-(--muted) mb-4">Modern Music Streaming Platform</p>
                
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {['Spring Boot', 'Firebase', 'Media3', 'Android', 'Realtime Sync'].map(tech => (
                    <span key={tech} className="text-[10px] px-2 py-1 rounded-full border border-(--border-subtle) bg-(--surface) text-(--surface-fg) shadow-sm">{tech}</span>
                  ))}
                </div>
                
                <a href="https://verse.geetprince.me/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold text-(--accent) group-hover/widget:text-(--fg) transition-colors">
                  Live Demo 
                  <ChevronRight size={14} className="group-hover/widget:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* Premium Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-(--muted) pointer-events-none group"
      >
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-(--muted)" />
        </motion.div>
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">Featured Work</span>
      </motion.div>
    </Section>
  );
}
