"use client";
import React, { useState } from 'react';
import Section from './Section';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

const tabs = [
  {
    id: 'backend',
    label: 'Backend & Systems',
    groups: [
      { title: 'Backend framework & Auth', skills: ["Spring Boot", "Flask", "REST APIs", "JWT", "Firebase Auth"] },
      { title: 'Databases & Storage', skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Supabase"] }
    ]
  },
  {
    id: 'frontend',
    label: 'Frontend & Infrastructure',
    groups: [
      { title: 'Frontend & UI', skills: ["React", "HTML", "CSS", "Tailwind CSS", "Framer Motion"] },
      { title: 'Cloud, DevOps & Tools', skills: ["AWS", "Linux", "Git", "GitHub", "VS Code"] }
    ]
  },
  {
    id: 'core',
    label: 'Core CS & Data',
    groups: [
      { title: 'Languages', skills: ["Java", "Python", "SQL", "JavaScript", "TypeScript", "Kotlin"] },
      { title: 'Data Science', skills: ["NumPy", "Pandas", "Matplotlib", "Feature Engineering"] },
      { title: 'Computer Science', skills: ["DSA", "DBMS", "Operating Systems", "Computer Networks", "SDLC"] }
    ]
  }
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <Section id="skills" className="py-24">
      <div className="text-center mb-12">
        <h2 className="text-fluid-h2 font-bold tracking-tight text-(--fg)">
          Technical Arsenal<span className="text-(--accent)">.</span>
        </h2>
        <p className="text-(--muted) mt-4 font-medium max-w-2xl mx-auto">
          A comprehensive breakdown of my technical toolkit, from robust backend systems to modern frontends.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Tabs Header */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 p-1 bg-(--card)/50 border border-(--border-subtle) backdrop-blur-md rounded-2xl w-fit mx-auto shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-(--accent)",
                activeTab === tab.id 
                  ? "text-white" 
                  : "text-(--muted) hover:text-(--fg) hover:bg-(--surface)"
              )}
            >
              {activeTab === tab.id && (
                <motion.div 
                  layoutId="activeTabBg" 
                  className="absolute inset-0 bg-(--accent) rounded-xl shadow-md z-0" 
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="relative min-h-[400px] sm:min-h-[300px]">
          <AnimatePresence mode="wait">
            {tabs.map((tab) => activeTab === tab.id && (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {tab.groups.map((group, idx) => (
                  <div
                    key={group.title}
                    className="p-6 rounded-3xl bg-(--card)/40 backdrop-blur-sm border border-(--border-subtle) hover:border-(--accent)/40 shadow-sm transition-colors duration-300 h-fit"
                  >
                    <h3 className="text-base font-bold text-(--fg) mb-4 uppercase tracking-wider">{group.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map(skill => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 rounded-lg border border-(--border-subtle) bg-(--surface) text-xs font-bold text-(--fg) hover:border-(--accent)/50 transition-colors shadow-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
