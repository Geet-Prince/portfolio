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
  featured: boolean;
  image: string;
  description: string;
  technologies: string[];
  links: ProjectLink[];
}

export const projects: readonly Project[] = [
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
