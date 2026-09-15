"use client";
import React from 'react';
import Section from './Section';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { Award, Brain, Cloud, Code, Star } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const stats = [
  { value: "400+", label: "DSA Problems Solved", icon: Brain },
  { value: "8.33", label: "CGPA", icon: Award },
  { value: "3+", label: "Major Projects", icon: Code },
  { value: "AWS", label: "Cloud Practitioner Certified", icon: Cloud },
  { value: "GitHub", label: "Active Open Source Contributor", icon: FaGithub },
];

export default function Achievements() {
  return (
    <LazyMotion features={domAnimation}>
      <div id="achievements" className="h-full scroll-mt-24">
        <div className="text-center mb-16">
          <h2 className="text-fluid-h2 font-bold tracking-tight text-(--fg)">
            Milestones<span className="text-(--accent)">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-16">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <m.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-(--card) border border-(--border-subtle) hover:border-(--accent)/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-(--accent)/10 flex items-center justify-center text-(--accent)">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <div>
                  <div className="text-fluid-h3 font-bold text-(--card-fg) mb-2">{stat.value}</div>
                  <div className="text-sm font-medium text-(--muted)">{stat.label}</div>
                </div>
              </m.div>
            );
          })}
        </div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="https://www.credly.com/badges/your-aws-badge-id/public_url"
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col md:flex-row items-center gap-8 p-8 md:p-12 bg-gradient-to-br from-amber-500/10 to-orange-500/5 rounded-3xl border border-amber-500/20 shadow-md relative overflow-hidden mb-16 hover:shadow-lg hover:border-amber-500/40 transition-all cursor-pointer"
          >
            <div aria-hidden="true" className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

            <div className="w-24 h-24 shrink-0 flex items-center justify-center bg-white rounded-2xl shadow-lg border border-amber-100 p-2 group-hover:scale-105 transition-transform duration-300">
              <svg viewBox="0 0 256 256" aria-hidden="true" className="w-full h-full text-[#FF9900]" fill="currentColor">
                <path d="M165.7,208.5c-8.9,3.8-19.8,6.1-30.8,6.1c-34.9,0-58.4-17.7-58.4-50.5c0-33.8,24.3-51.5,58.6-51.5 c10.3,0,19.3,2,26.6,5.3l-4.7,18.1c-6.8-2.7-14.8-4.4-22.3-4.4c-20.3,0-36,10.2-36,31.7c0,19,13.6,31.1,35,31.1 c9.1,0,18.2-2.5,25.9-5.9L165.7,208.5z" />
                <path d="M211.7,114.5l-21.7,68.9h-19.9l-13.8-47l-13.5,47h-19.8l-21.8-68.9h20l12,46.7l13.6-46.7h19.5l13.7,46.7l11.9-46.7H211.7z" />
              </svg>
            </div>

            <div className="text-center md:text-left z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/20 text-amber-700 dark:text-amber-400 text-xs font-bold rounded-full mb-3">
                <Star size={12} fill="currentColor" aria-hidden="true" />
                Verified Certification
              </div>
              <h3 className="text-xl font-bold text-(--card-fg) group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">AWS Certified Cloud Practitioner</h3>
              <p className="text-(--muted) mt-2 max-w-xl">
                Demonstrated overall understanding of the AWS Cloud platform, covering basic cloud concepts and security.
              </p>
            </div>
          </a>
        </m.div>
      </div>
    </LazyMotion>
  );
}
