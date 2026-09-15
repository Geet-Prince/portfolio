"use client";
import React from 'react';
import Section from './Section';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export default function Contact() {
  return (
    <LazyMotion features={domAnimation}>
      <Section id="contact" className="py-32">
        <div className="flex flex-col items-center text-center space-y-12">
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-fluid-hero leading-[1.1] font-bold tracking-tight text-(--fg) max-w-4xl"
          >
            Let&apos;s build something <span className="text-(--accent)">meaningful</span> together.
          </m.h2>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-4 sm:gap-6 w-full max-w-xs sm:max-w-none mx-auto"
          >
            <a
              href="mailto:prince.raj.ds@gmail.com"
              aria-label="Email Me"
              className="flex items-center justify-center gap-2 px-6 sm:px-8 py-4 rounded-2xl bg-(--fg) text-(--bg) font-medium hover:-translate-y-1 transition-all duration-300 shadow-xl hover:shadow-2xl focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-(--accent) focus-visible:outline-none"
            >
              <Mail size={20} aria-hidden="true" />
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/geetprince/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="flex items-center justify-center gap-2 px-6 sm:px-8 py-4 rounded-2xl bg-(--card) text-(--card-fg) border border-(--border-subtle) shadow-sm font-medium hover:border-(--accent) hover:-translate-y-1 hover:shadow-md transition-all duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-(--accent) focus-visible:outline-none"
            >
              <FaLinkedin size={20} aria-hidden="true" />
              LinkedIn
            </a>
            <a
              href="https://github.com/Geet-Prince/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="flex items-center justify-center gap-2 px-6 sm:px-8 py-4 rounded-2xl bg-(--card) text-(--card-fg) border border-(--border-subtle) shadow-sm font-medium hover:border-(--accent) hover:-translate-y-1 hover:shadow-md transition-all duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-(--accent) focus-visible:outline-none"
            >
              <FaGithub size={20} aria-hidden="true" />
              GitHub
            </a>
            <a
              href="https://leetcode.com/u/geet-prince/"
              target="_blank"
              rel="noreferrer"
              aria-label="LeetCode Profile"
              className="flex items-center justify-center gap-2 px-6 sm:px-8 py-4 rounded-2xl bg-(--card) text-(--card-fg) border border-(--border-subtle) shadow-sm font-medium hover:border-(--accent) hover:-translate-y-1 hover:shadow-md transition-all duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-(--accent) focus-visible:outline-none"
            >
              <SiLeetcode size={20} aria-hidden="true" />
              LeetCode
            </a>
          </m.div>
        </div>
      </Section>
    </LazyMotion>
  );
}
