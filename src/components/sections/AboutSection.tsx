'use client';

import React from 'react';
import { BrainCircuit, GraduationCap, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import GlassCard from '../common/GlassCard';
import SectionHeading from '../common/SectionHeading';

export default function AboutSection() {
  const highlights = [
    {
      icon: <GraduationCap className="w-5 h-5 text-violet-400" />,
      title: "Academic Background",
      detail: "BS in Software Engineering Graduate",
    },
    {
      icon: <BrainCircuit className="w-5 h-5 text-blue-400" />,
      title: "AI-Assisted Workflow",
      detail: "Prompt engineering, rapid prototyping, structural auditing",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-sky-400" />,
      title: "Core Philosophy",
      detail: "Clean architecture, performance first, and user-centric systems",
    },
  ];

  return (
    <section id="about" className="py-20 relative z-10 w-full bg-background/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <SectionHeading 
          title="About Me" 
          subtitle="Discover my background, development methodology, and what drives my engineering passion."
          badge="Profile Summary"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Description */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.h4
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold tracking-tight mb-4"
            >
              Engineering Scalable & High-Performance Solutions
            </motion.h4>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base text-muted-foreground leading-relaxed"
            >
              I am a Software Engineering graduate specializing in React.js, Next.js, and modern full-stack engineering. My primary focus is building robust, production-grade applications that solve real-world problems. By utilizing typed languages like TypeScript and structuring modules logically, I make sure the code remains clean, maintainable, and simple to scale.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base text-muted-foreground leading-relaxed mt-4"
            >
              As a fast learner and a dedicated team player, I excel at adapting to new stacks, managing relational and non-relational database nodes (MySQL, MongoDB), containerizing solutions with Docker, and deploying with modern pipelines.
            </motion.p>

            {/* AI assisted development workflow quote */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 p-5 rounded-2xl bg-primary/5 border border-primary/20 flex gap-4 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
              <div className="flex-shrink-0 p-2.5 rounded-xl bg-primary/15 text-primary flex items-center justify-center h-10 w-10">
                <Sparkles className="w-5 h-5 animate-pulse" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">AI-Assisted Development Workflow</span>
                <p className="text-sm text-foreground/80 leading-relaxed italic">
                  &ldquo;I leverage modern AI tools to accelerate development while personally designing application architecture, debugging issues, integrating APIs, and ensuring production-ready quality.&rdquo;
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column Highlights Grid */}
          <div className="lg:col-span-5 w-full flex flex-col gap-6">
            {highlights.map((hl, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <GlassCard
                  glowColor="purple"
                  hoverEffect="lift"
                  className="p-5 flex gap-4 items-start"
                >
                  <div className="p-3 rounded-xl bg-card border border-border text-primary">
                    {hl.icon}
                  </div>
                  <div>
                    <h5 className="font-bold text-sm tracking-tight text-foreground">{hl.title}</h5>
                    <p className="text-xs text-muted-foreground mt-1 leading-normal">{hl.detail}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}

            {/* Micro value stats mockup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <GlassCard
                enableTilt={false}
                glowColor="none"
                hoverEffect="none"
                className="p-6 bg-gradient-to-r from-violet-950/20 to-blue-950/20 border border-primary/20"
              >
                <div className="flex justify-between items-center text-center">
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Fast Learner</span>
                    <span className="text-sm font-extrabold text-foreground mt-1">100% Adaptability</span>
                  </div>
                  <div className="w-[1px] h-8 bg-border/40" />
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Work Mentality</span>
                    <span className="text-sm font-extrabold text-foreground mt-1">Humble & Ambitious</span>
                  </div>
                  <div className="w-[1px] h-8 bg-border/40" />
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Timezone Offset</span>
                    <span className="text-sm font-extrabold text-foreground mt-1">Flexible (GMT+3/5)</span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
