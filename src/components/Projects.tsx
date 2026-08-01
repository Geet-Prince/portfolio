"use client";
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Star, Search, GitFork, BookOpen, Code2, Folder, Calendar, Github, Shield } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Section from './Section';
import Image from 'next/image';
import { projects } from '../data/projects';
import { cn } from '../lib/utils';

function CountUp({ to, label, icon: Icon, delay = 0 }: { to: number, label: string, icon: any, delay?: number }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = to / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [to]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center justify-center p-6 bg-(--card)/60 backdrop-blur-md border border-(--border-subtle) rounded-[24px] shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
        <Icon size={80} />
      </div>
      <div className="p-3 bg-(--surface) rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon size={24} className="text-(--accent)" />
      </div>
      <span className="text-4xl font-extrabold text-(--fg) tracking-tight">{count}{to > 40 ? '+' : ''}</span>
      <span className="text-sm font-semibold text-(--muted) mt-2 uppercase tracking-wider">{label}</span>
    </motion.div>
  );
}

export default function Projects() {
  const [repos, setRepos] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Recently Updated");
  const [loading, setLoading] = useState(true);
  const [activeProject, setActiveProject] = useState<any | null>(null);
  const [showAllRepos, setShowAllRepos] = useState(false);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [activeProject]);

  useEffect(() => {
    fetch('https://api.github.com/users/Geet-Prince/repos?per_page=100&sort=updated')
      .then(res => res.json())
      .then(data => {
        if(Array.isArray(data)) {
          setRepos(data.filter(r => !r.fork));
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const categories = ["All", "Featured", "Android", "Web", "Java", "Python", "Database", "Learning", "HTML", "CSS", "JavaScript", "TypeScript", "Kotlin"];
  const sortOptions = ["Recently Updated", "Newest", "Oldest", "Most Stars", "Name A-Z"];

  const filteredRepos = useMemo(() => {
    return repos.filter(repo => {
      const s = search.toLowerCase();
      const lang = repo.language ? repo.language.toLowerCase() : '';
      const desc = repo.description ? repo.description.toLowerCase() : '';
      
      const matchesSearch = repo.name.toLowerCase().includes(s) || desc.includes(s) || lang.includes(s);
      
      const f = filter.toLowerCase();
      const matchesFilter = filter === "All" || 
                            lang === f ||
                            (filter === "Featured" && projects.some(p => p.links[0]?.url.includes(repo.name)));

      return matchesSearch && matchesFilter;
    }).sort((a, b) => {
      if (sort === "Recently Updated") return new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime();
      if (sort === "Newest") return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      if (sort === "Oldest") return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
      if (sort === "Most Stars") return b.stargazers_count - a.stargazers_count;
      if (sort === "Name A-Z") return a.name.localeCompare(b.name);
      return 0;
    });
  }, [repos, search, filter, sort]);

  const uniqueLanguages = new Set(repos.map(r => r.language).filter(Boolean)).size;

  return (
    <Section id="projects" className="py-24">
      
      {/* Featured Header */}
      <div className="space-y-4 mb-16 max-w-3xl">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-fluid-h2 font-extrabold tracking-tight text-(--fg)"
        >
          Featured Work<span className="text-(--accent)">.</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-fluid-p text-(--muted) leading-relaxed font-medium"
        >
          A curated selection of my best projects, combining scalable backend architecture with intuitive, premium user interfaces.
        </motion.p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
        <CountUp to={repos.length || 45} label="Public Repos" icon={Folder} delay={0} />
        <CountUp to={projects.length} label="Featured" icon={Star} delay={0.1} />
        <CountUp to={uniqueLanguages || 12} label="Languages" icon={Code2} delay={0.2} />
        <CountUp to={3} label="Years Coding" icon={Calendar} delay={0.3} />
      </div>

      {/* Featured Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-32 auto-rows-fr">
        {projects.map((project, index) => (
          <motion.div 
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            className="group flex flex-col rounded-[32px] bg-(--card)/40 backdrop-blur-xl border border-(--border-subtle) shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 overflow-hidden h-full relative"
          >
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-30"></div>
            
            {/* Thumbnail */}
            <div className="w-full relative aspect-[16/10] overflow-hidden border-b border-(--border-subtle) shrink-0 bg-(--surface)">
              <div className="absolute inset-0 bg-black/10 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
              <Image 
                src={project.image} 
                alt={`${project.title} Preview`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-105 motion-reduce:transform-none"
                priority={index < 2}
                loading={index < 2 ? undefined : "lazy"}
              />
              <div className="absolute top-5 left-5 z-20 flex items-center gap-2">
                <div className="px-3 py-1.5 bg-(--bg)/90 backdrop-blur-md rounded-full text-(--fg) text-xs font-bold tracking-wide shadow-lg border border-(--border-subtle)">
                  {project.category}
                </div>
              </div>
              {project.featured && (
                <div className="absolute top-5 right-5 z-20 flex items-center gap-1.5 px-3 py-1.5 bg-black/80 backdrop-blur-md rounded-full text-white text-xs font-bold tracking-wide uppercase border border-white/10 shadow-lg">
                  <Star size={14} fill="currentColor" className="text-amber-400" />
                  <span>Featured</span>
                </div>
              )}
            </div>
            
            {/* Content */}
            <div className="p-8 flex flex-col flex-grow relative z-20 bg-(--card)/40 backdrop-blur-lg">
              <h3 className="text-2xl lg:text-3xl font-extrabold tracking-tight text-(--fg) mb-4 group-hover:text-(--accent) transition-colors">{project.title}</h3>
              
              <div className="text-(--muted) text-sm leading-relaxed mb-4 flex-grow font-medium line-clamp-2">
                {project.description}
              </div>
              <button 
                onClick={() => setActiveProject(project)} 
                className="text-(--accent) text-sm font-bold mb-6 hover:underline self-start transition-colors"
              >
                View Architecture
              </button>
              
              <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                {project.technologies.map(tech => (
                  <span key={tech} className="px-3 py-1.5 bg-(--surface) text-(--fg) border border-(--border-subtle) rounded-lg text-xs font-bold shadow-sm transition-colors group-hover:border-(--accent)/30">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-(--border-subtle)">
                {project.links.map(link => {
                  const Icon = link.icon;
                  const isLive = link.name === "Live";
                  return (
                    <a 
                      key={link.name} 
                      href={link.url} 
                      target="_blank" 
                      rel="noreferrer"
                      aria-label={`View ${link.name} for ${project.title}`}
                      className={cn(
                        "inline-flex items-center gap-2 text-sm font-bold transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-(--accent) focus-visible:outline-none rounded-xl px-5 py-2.5 shadow-sm",
                        isLive 
                          ? "bg-(--accent) text-white hover:bg-(--accent)/90 hover:shadow-md" 
                          : "bg-(--surface) text-(--fg) border border-(--border-subtle) hover:border-(--accent)/50 hover:bg-(--surface-hover)"
                      )}
                    >
                      <Icon size={18} />
                      {link.name}
                    </a>
                  )
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* All Repositories Section */}
      <div className="space-y-6 mb-12">
        <h2 className="text-3xl font-extrabold tracking-tight text-(--fg)">
          All Repositories
        </h2>
        <p className="text-(--muted) font-medium">Automatically synced with GitHub via REST API.</p>
        
        {/* Controls */}
        <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between bg-(--card)/50 p-4 rounded-2xl border border-(--border-subtle) backdrop-blur-md">
          {/* Search */}
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-(--muted)" size={18} />
            <input 
              type="text" 
              placeholder="Search by name, tech, or description..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-(--surface) text-(--fg) border border-(--border-subtle) rounded-xl pl-11 pr-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-(--accent)/50 transition-all placeholder:text-(--muted)/70"
            />
          </div>

          {/* Sort */}
          <div className="flex items-center gap-3 w-full lg:w-auto">
            <span className="text-sm font-bold text-(--muted) whitespace-nowrap">Sort by:</span>
            <select 
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="w-full lg:w-auto bg-(--surface) text-(--fg) border border-(--border-subtle) rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-(--accent)/50 transition-all appearance-none cursor-pointer"
            >
              {sortOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 pt-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 border",
                filter === cat 
                  ? "bg-(--accent) text-white border-(--accent) shadow-md scale-105" 
                  : "bg-(--surface) text-(--muted) border-(--border-subtle) hover:border-(--fg)/30 hover:text-(--fg)"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Repo Grid */}
      {loading ? (
        <div className="flex items-center justify-center py-32">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-(--accent)"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {(showAllRepos ? filteredRepos : filteredRepos.slice(0, 6)).map((repo, i) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={repo.id}
                className="group flex flex-col bg-(--card)/40 backdrop-blur-md border border-(--border-subtle) rounded-3xl p-6 hover:shadow-xl hover:border-(--accent)/40 transition-all h-full"
              >
                <div className="flex items-start justify-between mb-4 gap-4">
                  <a href={repo.html_url} target="_blank" rel="noreferrer" className="flex items-center gap-3 group/title flex-1 min-w-0">
                    <div className="p-2.5 bg-(--surface) rounded-xl group-hover/title:bg-(--accent)/10 transition-colors shrink-0">
                      <BookOpen size={20} className="text-(--fg) group-hover/title:text-(--accent) transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-(--fg) group-hover/title:text-(--accent) transition-colors truncate">
                      {repo.name}
                    </h3>
                  </a>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-(--surface) border border-(--border-subtle) rounded-lg shrink-0">
                    <Shield size={12} className="text-(--muted)" />
                    <span className="text-[10px] font-bold text-(--muted) uppercase tracking-wider">{repo.visibility}</span>
                  </div>
                </div>

                <p className="text-(--muted) text-sm font-medium mb-6 line-clamp-2 flex-grow">
                  {repo.description || `A public repository by Geet-Prince showcasing ${repo.language || 'code'} architecture and implementations.`}
                </p>

                <div className="flex items-center justify-between pt-5 border-t border-(--border-subtle) mt-auto">
                  <div className="flex items-center gap-4">
                    {repo.language && (
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-(--accent)"></span>
                        <span className="text-xs font-bold text-(--fg)">{repo.language}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1.5 text-(--muted) hover:text-amber-500 transition-colors">
                      <Star size={14} />
                      <span className="text-xs font-bold">{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-(--muted) hover:text-blue-500 transition-colors">
                      <GitFork size={14} />
                      <span className="text-xs font-bold">{repo.forks_count}</span>
                    </div>
                  </div>
                  
                  <span className="text-[10px] font-bold text-(--muted) uppercase tracking-wide">
                    {new Date(repo.updated_at).toLocaleDateString(undefined, { month: 'short', year: 'numeric' })}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {filteredRepos.length === 0 && (
            <div className="col-span-full py-20 text-center text-(--muted) font-medium border-2 border-dashed border-(--border-subtle) rounded-3xl">
              No repositories found matching your criteria.
            </div>
          )}
        </div>
      )}

      {!loading && filteredRepos.length > 6 && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setShowAllRepos(!showAllRepos)}
            className="px-8 py-3 rounded-xl bg-(--surface) border border-(--border-subtle) hover:border-(--accent)/50 text-(--fg) hover:text-(--accent) font-bold transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-(--accent)"
          >
            {showAllRepos ? "Show Less" : `Load More Repositories (${filteredRepos.length - 6})`}
          </button>
        </div>
      )}

      {/* View Architecture Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-(--card) border border-(--border-subtle) rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="relative h-48 sm:h-64 w-full shrink-0">
                <Image 
                  src={activeProject.image} 
                  alt={activeProject.title} 
                  fill 
                  className="object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-(--card) to-transparent" />
                <button 
                  onClick={() => setActiveProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black text-white rounded-full flex items-center justify-center transition-colors border border-white/20"
                >
                  ✕
                </button>
              </div>
              
              <div className="p-6 sm:p-8 overflow-y-auto">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-(--accent)/10 text-(--accent) text-xs font-bold rounded-full">{activeProject.category}</span>
                </div>
                <h3 className="text-3xl font-extrabold text-(--fg) mb-6">{activeProject.title} Architecture</h3>
                
                <div className="prose prose-invert max-w-none text-(--muted) font-medium mb-8">
                  {activeProject.description}
                </div>
                
                <h4 className="text-sm font-bold text-(--fg) uppercase tracking-wider mb-4">Tech Stack & Infrastructure</h4>
                <div className="flex flex-wrap gap-2 mb-8">
                  {activeProject.technologies.map((tech: string) => (
                    <span key={tech} className="px-3 py-1.5 bg-(--surface) text-(--fg) border border-(--border-subtle) rounded-lg text-sm font-bold shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  {activeProject.links.map((link: any) => {
                    const Icon = link.icon;
                    const isLive = link.name === "Live";
                    return (
                      <a 
                        key={link.name} 
                        href={link.url} 
                        target="_blank" 
                        rel="noreferrer"
                        className={cn(
                          "inline-flex items-center gap-2 text-sm font-bold transition-all rounded-xl px-6 py-3 shadow-sm",
                          isLive 
                            ? "bg-(--accent) text-white hover:bg-(--accent)/90 hover:shadow-md" 
                            : "bg-(--surface) text-(--fg) border border-(--border-subtle) hover:border-(--accent)/50 hover:bg-(--surface-hover)"
                        )}
                      >
                        <Icon size={18} />
                        {link.name}
                      </a>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </Section>
  );
}
