'use client';

import React from 'react';
import { Calendar, Briefcase } from 'lucide-react';
import { motion } from 'motion/react';
import GlassCard from '../common/GlassCard';
import SectionHeading from '../common/SectionHeading';
import { experiences } from '@/data/experience';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 relative z-10 w-full bg-background/30">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Title */}
        <SectionHeading
          title="Work Experience"
          subtitle="My professional background includes internship roles where I optimized client web platforms, integrated REST APIs, and managed data structures."
          badge="Career History"
        />

        {/* Timeline container */}
        <div className="relative border-l border-border/40 pl-6 sm:pl-8 ml-4 flex flex-col gap-12">
          
          {/* Vertical line dynamic fill block (visual styling) */}
          <div className="absolute left-[-1px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary via-accent to-transparent" />

          {experiences.map((exp, idx) => (
            <div key={idx} className="relative w-full">
              
              {/* Timeline Indicator dot node */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, delay: idx * 0.15 }}
                className="absolute left-[-31px] sm:left-[-37px] top-1.5 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-md z-10"
              >
                <Briefcase className="w-3 h-3 text-primary" />
              </motion.div>

              {/* Card wrapper */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                <GlassCard
                  glowColor={idx % 2 === 0 ? 'purple' : 'blue'}
                  hoverEffect="none"
                  className="p-6 md:p-8"
                >
                  {/* Job Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 mb-5">
                    <div>
                      <h4 className="text-lg md:text-xl font-extrabold text-foreground tracking-tight leading-snug">
                        {exp.role}
                      </h4>
                      <span className="text-sm font-bold text-primary mt-1 inline-block">
                        {exp.company}
                      </span>
                    </div>

                    {/* Timeline period badge */}
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground bg-secondary/50 border border-border px-3 py-1.5 rounded-full self-start sm:self-center">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Highlights Bullet points */}
                  <ul className="flex flex-col gap-3">
                    {exp.points.map((pt, ptIdx) => (
                      <li key={ptIdx} className="text-sm text-muted-foreground leading-relaxed flex gap-2.5 items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
