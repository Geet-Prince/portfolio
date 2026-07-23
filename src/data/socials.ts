import { ElementType } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail } from 'lucide-react';

export interface SocialLink {
  icon: ElementType;
  href: string;
  label: string;
}

export const socials: readonly SocialLink[] = [
  { icon: FaGithub, href: "https://github.com/Geet-Prince/", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/geetprince/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:prince.raj.ds@gmail.com", label: "Email" },
];
