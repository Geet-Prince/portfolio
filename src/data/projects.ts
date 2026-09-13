import { FaGithub } from 'react-icons/fa';
import { ExternalLink } from 'lucide-react';
import { ElementType } from 'react';

export interface ProjectLink {
  name: string;
  url: string;
  icon: ElementType;
}

export interface Project {
  title: string;
  category: string;
  featured: boolean;
  image: string;
  description: string;
  technologies: string[];
  links: ProjectLink[];
}

export const projects: readonly Project[] = [
  {
    title: "Verse",
    category: "Android",
    featured: true,
    image: "/verse.webp",
    description: "Collaborative music streaming application built with Kotlin, Firebase, MVVM, ExoPlayer, and Material Design.",
    technologies: ["Kotlin", "Firebase", "MVVM", "ExoPlayer", "Material Design"],
    links: [
      { name: "GitHub", url: "https://github.com/Geet-Prince/Verse-web", icon: FaGithub },
      { name: "Live", url: "https://verse.geetprince.me/", icon: ExternalLink }
    ]
  },
  {
    title: "Progex",
    category: "Web",
    featured: true,
    image: "/progex.webp",
    description: "Competitive programming companion featuring coding statistics, DSA roadmap, friend comparisons, progress tracking, and productivity tools.",
    technologies: ["HTML", "CSS", "JavaScript", "Flask", "Firebase"],
    links: [
      { name: "GitHub", url: "https://github.com/Geet-Prince/progex", icon: FaGithub },
      { name: "Live", url: "https://progex.geetprince.me/", icon: ExternalLink }
    ]
  },
  {
    title: "Portfolio",
    category: "Web",
    featured: true,
    image: "/portfolio.webp",
    description: "Personal developer portfolio built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and modern responsive UI.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    links: [
      { name: "GitHub", url: "https://github.com/Geet-Prince/portfolio", icon: FaGithub },
      { name: "Live", url: "https://geetprince.me/", icon: ExternalLink }
    ]
  },
  {
    title: "My SQL Journey",
    category: "Database",
    featured: true,
    image: "/sql.webp",
    description: "Comprehensive SQL repository covering beginner to advanced concepts including joins, window functions, CTEs, stored procedures, and interview questions.",
    technologies: ["SQL", "MySQL"],
    links: [
      { name: "GitHub", url: "https://github.com/Geet-Prince/My-SQL-Journey", icon: FaGithub }
    ]
  },
  {
    title: "Nexus Tasks",
    category: "Full Stack",
    featured: true,
    image: "/nexus.webp",
    description: "Task management application built using Core Java, REST APIs, HTML, CSS, and JavaScript without heavy frameworks.",
    technologies: ["Core Java", "REST API", "HTML", "CSS", "JavaScript"],
    links: [
      { name: "GitHub", url: "https://github.com/Geet-Prince/Nexus-Tasks", icon: FaGithub }
    ]
  }
];
