import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Section from './Section';
import { cn } from '../lib/utils';

const projects = [
  {
    title: "Verse",
    featured: true,
    image: "/verse.jpg",
    description: "Verse is a modern music streaming platform designed with a clean, Gen Z-inspired interface. It supports synchronized jam sessions, collaborative listening, personalized recommendations, wheel mode for discovering music, playlist sharing, offline capabilities, and seamless playback. The web platform serves as the landing page where users can explore features, download the Android app, and experience interactive demos.",
    technologies: ["Spring Boot", "Firebase", "Media3", "Kotlin", "Java", "Android"],
    links: [
      { name: "GitHub Android", url: "https://github.com/OmkarMishra07/Verse", icon: FaGithub },
      { name: "GitHub Web", url: "https://github.com/Geet-Prince/Verse-web", icon: FaGithub },
      { name: "Live", url: "https://verse.geetprince.me/", icon: ExternalLink }
    ]
  },
  {
    title: "Progex",
    featured: false,
    image: "/progex.jpg",
    description: "A competitive programming analytics and social platform built with a scalable application factory architecture. It helps developers track coding consistency, compete on live leaderboards, and follow personalized study plans using a real-time NoSQL database.",
    technologies: ["Flask", "Python", "Firebase Firestore", "Docker", "REST APIs"],
    links: [
      { name: "GitHub", url: "https://github.com/Geet-Prince/progex", icon: FaGithub },
      { name: "Live", url: "https://progex.geetprince.me/", icon: ExternalLink }
    ]
  },
  {
    title: "Eventify",
    featured: false,
    image: "/eventify.jpg",
    description: "A secure event management platform successfully deployed across multiple college fests. It features dynamic QR code generation for attendee entry validation, automated PDF ticketing, and leverages a zero-cost Google Sheets backend via Service Accounts for real-time data access by non-technical staff.",
    technologies: ["Flask", "Python", "Google Sheets API", "OAuth2", "Pandas", "QR Code"],
    links: [
      { name: "GitHub", url: "https://github.com/Geet-Prince/event-management-system", icon: FaGithub }
    ]
  }
];

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
            <div className="w-full md:w-3/5 rounded-3xl overflow-hidden bg-(--border-subtle) relative aspect-[16/10] md:aspect-video shadow-2xl transition-all duration-500 hover:shadow-3xl border border-(--border-subtle)">
              <div className="absolute inset-0 bg-black/5 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
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
                      className="group/link inline-flex items-center gap-2 text-sm font-medium text-(--fg) hover:text-(--accent) transition-colors"
                    >
                      <Icon size={18} className="group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform duration-300" />
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
