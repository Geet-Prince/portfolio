"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Section from './Section';
import { cn } from '../lib/utils';
import Image from 'next/image';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <Section id="projects" className="py-24">
      <div className="space-y-4 mb-16 max-w-2xl">
        <h2 className="text-fluid-h2 font-bold tracking-tight text-(--fg)">
          Featured Work<span className="text-(--accent)">.</span>
        </h2>
        <p className="text-fluid-p text-(--muted) leading-relaxed">
          A selection of my best projects, combining scalable backend architecture with intuitive, polished user interfaces.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 auto-rows-fr">
        {projects.map((project, index) => (
          <motion.div 
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex flex-col rounded-3xl bg-(--card) border border-(--border-subtle) shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden h-full"
          >
            <div className="w-full relative aspect-video overflow-hidden border-b border-(--border-subtle) shrink-0 bg-(--surface)">
              <div className="absolute inset-0 bg-black/5 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
              <Image 
                src={project.image} 
                alt={`${project.title} Preview`}
                width={600}
                height={338}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                className="w-full h-full object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-105 motion-reduce:transform-none"
                priority={index === 0}
                loading={index === 0 ? undefined : "lazy"}
              />
              {project.featured && (
                <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 bg-black/70 backdrop-blur-md rounded-full text-white text-xs font-semibold tracking-wide uppercase border border-white/10 shadow-lg">
                  <Star size={14} fill="currentColor" className="text-amber-400" />
                  <span>Featured</span>
                </div>
              )}
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-fluid-h3 font-bold tracking-tight text-(--fg) mb-3 line-clamp-1">{project.title}</h3>
              
              <div className="text-(--muted) text-sm leading-relaxed mb-6 flex-grow line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                {project.description}
              </div>
              
              <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
                {project.technologies.map(tech => (
                  <span key={tech} className="px-2.5 py-1 bg-(--surface) text-(--surface-fg) border border-(--border-subtle) rounded-md text-[11px] font-medium shadow-sm transition-colors group-hover:border-(--muted)/30">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-(--border-subtle)">
                {project.links.map(link => {
                  const Icon = link.icon;
                  return (
                    <a 
                      key={link.name} 
                      href={link.url} 
                      target="_blank" 
                      rel="noreferrer"
                      aria-label={`View ${link.name} for ${project.title}`}
                      className="group/link inline-flex items-center gap-1.5 text-xs font-semibold text-(--fg) hover:text-(--accent) transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-(--accent) focus-visible:outline-none rounded-md px-1 py-0.5 -mx-1"
                    >
                      <Icon size={16} className="motion-safe:group-hover/link:-translate-y-0.5 motion-safe:group-hover/link:translate-x-0.5 motion-safe:transition-transform motion-safe:duration-300 motion-reduce:transform-none" />
                      {link.name}
                    </a>
                  )
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
