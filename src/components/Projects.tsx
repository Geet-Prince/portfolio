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
      <div className="space-y-4 mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-(--fg)">
          Featured Work<span className="text-(--accent)">.</span>
        </h2>
        <p className="text-(--muted) text-lg max-w-xl">
          A selection of my best projects, combining scalable backend architecture with intuitive, polished user interfaces.
        </p>
      </div>

      <div className="flex flex-col gap-24">
        {projects.map((project, index) => (
          <motion.div 
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className={cn(
              "group flex flex-col md:flex-row gap-8 lg:gap-12 items-center",
              index % 2 !== 0 && "md:flex-row-reverse"
            )}
          >
            <div className="w-full md:w-3/5 rounded-3xl overflow-hidden bg-(--border-subtle) relative shadow-2xl transition-all duration-500 hover:shadow-3xl border border-(--border-subtle)">
              <div className="absolute inset-0 bg-black/5 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
              <Image 
                src={project.image} 
                alt={`${project.title} Preview`}
                width={800}
                height={500}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 800px"
                className="w-full h-auto object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-105 motion-reduce:transform-none"
                priority={index === 0}
                loading={index === 0 ? undefined : "lazy"}
              />
            </div>
            
            <div className="w-full md:w-2/5 flex flex-col justify-center space-y-6">
              {project.featured && (
                <div className="flex items-center gap-2 text-(--accent) text-sm font-semibold tracking-wide uppercase">
                  <Star size={16} fill="currentColor" />
                  <span>Featured Project</span>
                </div>
              )}
              
              <h3 className="text-3xl font-bold tracking-tight text-(--fg)">{project.title}</h3>
              
              <div className="p-6 rounded-2xl bg-(--card) border border-(--border-subtle) shadow-md text-(--muted) text-sm leading-relaxed transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                {project.description}
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-(--surface) text-(--surface-fg) border border-(--border-subtle) rounded-full text-xs font-medium shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-wrap items-center gap-4 pt-2">
                {project.links.map(link => {
                  const Icon = link.icon;
                  return (
                    <a 
                      key={link.name} 
                      href={link.url} 
                      target="_blank" 
                      rel="noreferrer"
                      aria-label={`View ${link.name} for ${project.title}`}
                      className="group/link inline-flex items-center gap-2 text-sm font-medium text-(--fg) hover:text-(--accent) transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-(--accent) focus-visible:outline-none rounded-md px-1 py-0.5 -mx-1"
                    >
                      <Icon size={18} className="motion-safe:group-hover/link:-translate-y-0.5 motion-safe:group-hover/link:translate-x-0.5 motion-safe:transition-transform motion-safe:duration-300 motion-reduce:transform-none" />
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
