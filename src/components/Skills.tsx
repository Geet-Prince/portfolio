"use client";
import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

import { skillCategories } from '../data/skills';

export default function Skills() {
  return (
    <Section id="skills" className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-(--fg)">
          Technical Arsenal<span className="text-(--accent)">.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-6 rounded-3xl bg-(--card) border border-(--border-subtle) hover:border-(--accent)/50 shadow-sm hover:shadow-md transition-all duration-300 group"
          >
            <h3 className="text-lg font-semibold mb-4 text-(--fg) group-hover:text-(--accent) transition-colors">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map(skill => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-xl border border-(--border-subtle) bg-(--surface) text-sm text-(--surface-fg) hover:text-(--accent) hover:border-(--accent) transition-all duration-200 shadow-sm hover:shadow"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
