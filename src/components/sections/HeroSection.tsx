'use client';

import React from 'react';
import { Download, FolderGit, MessageSquare, Terminal } from 'lucide-react';
import { motion } from 'motion/react';
import ParticlesBackground from '../effects/ParticlesBackground';
import TypewriterEffect from '../effects/TypewriterEffect';
import GradientButton from '../common/GradientButton';

export default function HeroSection() {
  const roles = [
    'Software Engineer',
    'React Developer',
    'Frontend Engineer',
    'Full Stack Developer',
    'Node.js Developer',
  ];

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-background"
    >
      {/* Dynamic Backgrounds */}
      <ParticlesBackground />
      
      {/* Decorative radial glows */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-primary/10 blur-[120px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[45vw] h-[45vw] rounded-full bg-accent/5 blur-[120px] pointer-events-none -z-10 animate-pulse-slow" style={{ animationDelay: '-5s' }} />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left Column Text Info */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Headline badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 mb-6 flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            React.js | Next.js | Node.js | Full Stack Developer
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-none"
          >
            Hi, I&apos;m <span className="text-gradient">Fahad Sajid</span>
          </motion.h1>

          {/* Subtitle / Typewriter Role */}
          <motion.h3
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl sm:text-3xl font-bold mt-4 text-foreground/90 flex items-center gap-2"
          >
            <span>I&apos;m a</span>
            <TypewriterEffect words={roles} />
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            I build fast, scalable, and user-focused web applications using modern JavaScript technologies. Passionate about solving real-world problems through clean architecture, responsive UI, and efficient backend systems.
          </motion.p>

          {/* Availability note */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 text-xs font-medium text-foreground/80 flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span>Available for Full-Time Opportunities </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-4 w-full"
          >
            <GradientButton
              variant="primary"
              icon={<Download className="w-4.5 h-4.5" />}
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              Download Resume
            </GradientButton>

            <GradientButton
              variant="outline"
              icon={<FolderGit className="w-4.5 h-4.5" />}
              onClick={() => handleScrollTo('projects')}
            >
              View Projects
            </GradientButton>

            <GradientButton
              variant="secondary"
              icon={<MessageSquare className="w-4.5 h-4.5" />}
              onClick={() => handleScrollTo('contact')}
            >
              Contact Me
            </GradientButton>
          </motion.div>
        </div>

        {/* Right Column Custom IDE Mockup */}
        <div className="lg:col-span-5 flex justify-center w-full relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.3 }}
            className="w-full max-w-md relative select-none"
          >
            {/* Visual glow backdrop for code panel */}
            <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl opacity-50 z-0 animate-pulse-slow" />
            
            {/* Real IDE Card in CSS */}
            <div className="glass-panel border border-border/30 rounded-2xl overflow-hidden shadow-2xl relative z-10 w-full">
              {/* Header Bar */}
              <div className="bg-[#12121a] px-4 py-3.5 border-b border-border/20 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground font-mono">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>developer.tsx</span>
                </div>
                <div className="w-12" /> {/* alignment spacer */}
              </div>

              {/* Code Editor body */}
              <div className="p-5 font-mono text-xs text-foreground/90 overflow-x-auto leading-relaxed bg-[#0b0b10]/95 min-h-[280px]">
                <div>
                  <span className="text-pink-500">const</span>{' '}
                  <span className="text-blue-400">developer</span>{' '}
                  <span className="text-pink-500">=</span>{' '}
                  <span className="text-yellow-300">&#123;</span>
                </div>
                <div className="pl-4">
                  <span className="text-sky-300">name</span>: <span className="text-amber-300">{"'Fahad Sajid'"}</span>,
                </div>
                <div className="pl-4">
                  <span className="text-sky-300">title</span>: <span className="text-amber-300">{"'Software Engineer'"}</span>,
                </div>
                <div className="pl-4">
                  <span className="text-sky-300">coreTech</span>: <span className="text-yellow-300">[</span>
                </div>
                <div className="pl-8">
                  <span className="text-amber-300">{"'Next.js'"}</span>, <span className="text-amber-300">{"'React'"}</span>, <span className="text-amber-300">{"'Node'"}</span>,
                </div>
                <div className="pl-8">
                  <span className="text-amber-300">{"'TypeScript'"}</span>, <span className="text-amber-300">{"'PostgreSQL'"}</span>
                </div>
                <div className="pl-4">
                  <span className="text-yellow-300">]</span>,
                </div>
                <div className="pl-4">
                  <span className="text-sky-300">location</span>: <span className="text-amber-300">{"'Haripur KPK, PK'"}</span>,
                </div>
                <div className="pl-4">
                  <span className="text-sky-300">hirable</span>: <span className="text-emerald-400">true</span>,
                </div>
                <div className="pl-4">
                  <span className="text-sky-300">focus</span>: <span className="text-amber-300">{"'Highly Scalable Architectures'"}</span>
                </div>
                <div>
                  <span className="text-yellow-300">&#125;</span>;
                </div>
                <div className="mt-4 text-muted-foreground">
                  {"// Ready for performance review"}
                </div>
              </div>
            </div>

            {/* Floating floating mini-elements to create Awwwards-level complexity */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 glass-panel px-4 py-3 rounded-xl shadow-lg border border-border/40 z-20 flex items-center gap-3 backdrop-blur-md"
            >
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block animate-ping mr-1.5" />
                <span className="text-[11px] font-bold uppercase tracking-wider">Fast Load Speed</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 glass-panel px-4 py-3 rounded-xl shadow-lg border border-border/40 z-20 flex items-center gap-3 backdrop-blur-md"
            >
              <div className="flex flex-col gap-0.5 font-sans">
                <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Lighthouse</span>
                <span className="text-xs font-extrabold text-emerald-400">100% Performance</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
