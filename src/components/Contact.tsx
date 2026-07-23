import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <Section id="contact" className="py-32">
      <div className="flex flex-col items-center text-center space-y-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-(--fg) max-w-4xl"
        >
          Let's build something <span className="text-(--accent)">meaningful</span> together.
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <a 
            href="mailto:prince.raj.ds@gmail.com"
            className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-(--fg) text-(--bg) font-medium hover:scale-105 transition-transform duration-300 shadow-xl"
          >
            <Mail size={20} />
            Email Me
          </a>
          <a 
            href="https://www.linkedin.com/in/geetprince/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-(--card) text-(--card-fg) border border-(--border-subtle) shadow-sm font-medium hover:border-(--accent) hover:shadow-md transition-all duration-300"
          >
            <FaLinkedin size={20} />
            LinkedIn
          </a>
          <a 
            href="https://github.com/Geet-Prince/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-(--card) text-(--card-fg) border border-(--border-subtle) shadow-sm font-medium hover:border-(--accent) hover:shadow-md transition-all duration-300"
          >
            <FaGithub size={20} />
            GitHub
          </a>
          <a 
            href="https://leetcode.com/u/geet-prince/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-(--card) text-(--card-fg) border border-(--border-subtle) shadow-sm font-medium hover:border-(--accent) hover:shadow-md transition-all duration-300"
          >
            <span className="font-bold">LC</span>
            LeetCode
          </a>
        </motion.div>
      </div>
    </Section>
  );
}
