'use client';

import React, { useState, useMemo } from 'react';
import { Search, Globe, FolderGit } from 'lucide-react';
import { GithubIcon } from '@/components/icons';
import { motion, AnimatePresence } from 'motion/react';
import { Input } from '../ui/input';
import GlassCard from '../common/GlassCard';
import SectionHeading from '../common/SectionHeading';
import GradientButton from '../common/GradientButton';
import { projects } from '@/data/projects';

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'iot', label: 'IoT' },
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter projects by both category tab and search query
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase())) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="projects" className="py-20 relative z-10 w-full bg-background/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <SectionHeading
          title="Featured Projects"
          subtitle="A handpicked collection of applications showcasing full-stack capabilities, API integrations, and IoT microcontroller systems."
          badge="Portfolio Showcase"
        />

        {/* Filter and Search Actions Bar */}
        <div className="flex flex-col md:flex-row gap-5 items-center justify-between mb-12 w-full">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 bg-card/50 border border-border/30 rounded-xl p-1 w-full md:w-auto overflow-x-auto">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer select-none ${
                    isActive ? 'bg-primary text-white shadow-sm' : 'text-foreground/75 hover:text-primary hover:bg-secondary/50'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Input bar */}
          <div className="relative w-full md:max-w-xs flex items-center">
            <Search className="w-4 h-4 text-muted-foreground absolute left-3 pointer-events-none" />
            <Input
              type="text"
              placeholder="Search title, technology..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 py-5 bg-card/40 border-border/50 text-xs font-medium placeholder-muted-foreground rounded-xl w-full"
            />
          </div>
        </div>

        {/* Grid Display */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full"
              >
                <GlassCard
                  glowColor={idx % 2 === 0 ? 'purple' : 'blue'}
                  hoverEffect="none"
                  className="flex flex-col h-full overflow-hidden"
                >
                  {/* Project Visual Container */}
                  <div className="relative h-56 w-full bg-gradient-to-br from-violet-950/40 to-blue-950/40 border-b border-border/20 overflow-hidden group">
                    {/* Placeholder structural pattern background */}
                    <div className="absolute inset-0 bg-radial-gradient opacity-80" />
                    
                    {/* Simulated visual diagram inside the card header itself */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center font-sans">
                      <div className="w-12 h-12 rounded-2xl bg-card border border-border/50 flex items-center justify-center text-primary shadow-lg mb-3">
                        <FolderGit className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-sm font-extrabold tracking-wider uppercase text-foreground">{project.title}</span>
                      <span className="text-[10px] text-muted-foreground mt-1 uppercase font-semibold tracking-widest">{project.category}</span>
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-80" />
                  </div>

                  {/* Body details */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow justify-between">
                    <div>
                      {/* Title */}
                      <h4 className="text-xl font-extrabold tracking-tight text-foreground">{project.title}</h4>
                      
                      {/* Tech stack badges */}
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase text-primary bg-primary/10 border border-primary/20 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed mt-4">
                        {project.description}
                      </p>

                      {/* Key features list */}
                      <div className="mt-5">
                        <span className="text-xs font-bold uppercase tracking-wider text-foreground">Key Features</span>
                        <ul className="flex flex-col gap-1.5 mt-2.5">
                          {project.features.slice(0, 3).map((feat, featIdx) => (
                            <li key={featIdx} className="text-xs text-muted-foreground flex gap-2 items-start leading-normal">
                              <span className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Challenges Solved */}
                      <div className="mt-5 p-3.5 rounded-xl bg-card border border-border/40 text-xs">
                        <span className="font-bold text-foreground block">Challenge Solved</span>
                        <p className="text-muted-foreground mt-1 leading-relaxed">
                          {project.challenges[0]}
                        </p>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-4 mt-8 pt-4 border-t border-border/20">
                      <GradientButton
                        variant="secondary"
                        size="sm"
                        icon={<GithubIcon className="w-3.5 h-3.5" />}
                        iconPosition="left"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        GitHub Code
                      </GradientButton>

                      {project.liveUrl && (
                        <GradientButton
                          variant="outline"
                          size="sm"
                          icon={<Globe className="w-3.5 h-3.5" />}
                          iconPosition="left"
                          onClick={() => window.open(project.liveUrl, '_blank')}
                        >
                          Live Demo
                        </GradientButton>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state if nothing matches search */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 font-sans text-muted-foreground">
            No projects found matching &ldquo;{searchQuery}&rdquo;.
          </div>
        )}
      </div>
    </section>
  );
}
