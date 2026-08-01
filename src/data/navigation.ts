export interface NavLink {
  name: string;
  href: string;
}

export const navLinks: readonly NavLink[] = [
  { name: 'Projects', href: '/#projects' },
  { name: 'About', href: '/#about' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Achievements', href: '/#achievements' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/#contact' },
];
