'use client';

import React from 'react';
import { Briefcase, FolderGit, Calendar } from 'lucide-react';
import { GithubIcon } from '@/components/icons';
import { motion } from 'motion/react';
import AnimatedCounter from '../effects/AnimatedCounter';
import GlassCard from '../common/GlassCard';

export default function StatsSection() {
  const stats = [
    {
      icon: <Briefcase className="w-6 h-6 text-violet-400" />,
      value: 2,
      suffix: "+",
      label: "Professional Internships",
    },
    {
      icon: <FolderGit className="w-6 h-6 text-blue-400" />,
      value: 7,
      suffix: "+",
      label: "Major Projects",
    },
    {
      icon: <GithubIcon className="w-6 h-6 text-sky-400" />,
      value: 23,
      suffix: "+",
      label: "GitHub Repositories",
    },
    {
      icon: <Calendar className="w-6 h-6 text-purple-400" />,
      value: 1,
      suffix: "+",
      label: "Year of Dev Experience",
    },
  ];

  return (
    <section className="py-12 relative z-10 w-full bg-background/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard
                glowColor={idx % 2 === 0 ? 'purple' : 'blue'}
                hoverEffect="scale"
                className="p-6 flex flex-col items-center justify-center text-center group h-full"
              >
                {/* Icon wrapper with hover spin */}
                <div className="p-3.5 rounded-xl bg-card border border-border group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 mb-4 shadow-sm">
                  {stat.icon}
                </div>
                
                {/* Count value */}
                <span className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight flex items-center justify-center">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </span>
                
                {/* Label */}
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
