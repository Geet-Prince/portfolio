"use client";
import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { Award, Brain, Cloud, Code } from 'lucide-react';
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
    <Section id="achievements" className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-(--fg)">
          Milestones<span className="text-(--accent)">.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-(--card) border border-(--border-subtle) hover:border-(--accent)/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-(--accent)/10 flex items-center justify-center text-(--accent)">
                <Icon size={24} />
              </div>
              <div>
                <div className="text-3xl font-bold text-(--card-fg) mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-(--muted)">{stat.label}</div>
              </div>
            </motion.div>
          );
        })}
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto p-6 md:p-8 rounded-3xl bg-(--card) text-(--card-fg) border border-(--border-subtle) shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative transition-all duration-300 hover:shadow-xl"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-(--accent) rounded-full blur-[80px] opacity-20"></div>
        <div className="relative z-10 flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-(--surface) flex items-center justify-center shadow-inner">
            <Cloud size={32} className="text-(--accent)" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-(--card-fg)">AWS Certified Cloud Practitioner</h3>
            <p className="text-(--muted)">Achieved in 2025</p>
          </div>
        </div>
        <div className="relative z-10 px-6 py-2 rounded-full bg-(--surface) border border-(--border-subtle) text-(--card-fg) font-medium text-sm shadow-sm">
          Verified
        </div>
      </motion.div>
    </Section>
  );
}
