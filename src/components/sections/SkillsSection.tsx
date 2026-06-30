'use client';

import React from 'react';
import { Layout, Server, Database, Cpu, Code } from 'lucide-react';
import { motion } from 'motion/react';
import GlassCard from '../common/GlassCard';
import SectionHeading from '../common/SectionHeading';
import { skillCategories } from '@/data/skills';

// Map icon strings to Lucide components
const iconMap: Record<string, React.ReactNode> = {
  Layout: <Layout className="w-5 h-5 text-violet-400" />,
  Server: <Server className="w-5 h-5 text-blue-400" />,
  Database: <Database className="w-5 h-5 text-sky-400" />,
  Cpu: <Cpu className="w-5 h-5 text-purple-400" />,
  Code: <Code className="w-5 h-5 text-emerald-400" />,
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 relative z-10 w-full bg-background/50">
      {/* Decorative Blur background */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <SectionHeading
          title="Technical Skills"
          subtitle="My technical stack spans frontend structures, backend engines, microcontrollers, and modern database patterns."
          badge="Core Competencies"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            >
              <GlassCard
                glowColor={catIdx % 2 === 0 ? 'purple' : 'blue'}
                hoverEffect="lift"
                className="p-6 flex flex-col h-full"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/20">
                  <div className="p-2.5 rounded-xl bg-card border border-border/50 shadow-sm flex items-center justify-center">
                    {iconMap[category.icon] || <Code className="w-5 h-5" />}
                  </div>
                  <h4 className="font-extrabold text-base tracking-tight text-foreground">
                    {category.title}
                  </h4>
                </div>

                {/* Skills list with animated progress indicators */}
                <div className="flex flex-col gap-4.5 flex-grow justify-start">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="flex flex-col gap-1.5 w-full">
                      <div className="flex justify-between items-center text-xs font-semibold">
                        <span className="text-foreground/90">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      
                      {/* Meter Track */}
                      <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden relative">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIdx * 0.05 + 0.2, ease: "easeOut" }}
                          className="h-full bg-gradient-main rounded-full absolute left-0 top-0"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
