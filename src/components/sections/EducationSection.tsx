'use client';

import React from 'react';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import { motion } from 'motion/react';
import GlassCard from '../common/GlassCard';
import SectionHeading from '../common/SectionHeading';

export default function EducationSection() {
  return (
    <section id="education" className="py-20 relative z-10 w-full bg-background/30">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Title */}
        <SectionHeading
          title="Education"
          subtitle="My academic qualifications that laid the theoretical and practical foundations for software engineering."
          badge="Academia"
        />

        {/* Education details inside a single large premium glass card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard glowColor="purple" hoverEffect="none" className="p-8 md:p-10 relative overflow-hidden">
            {/* Background design elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col md:flex-row gap-6 md:items-start justify-between">
              <div className="flex gap-4.5 items-start">
                {/* Academic cap icon container */}
                <div className="p-4 rounded-2xl bg-card border border-border flex items-center justify-center text-primary shadow-sm flex-shrink-0">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                
                <div className="flex flex-col">
                  {/* Degree Name */}
                  <h4 className="text-xl md:text-2xl font-extrabold text-foreground tracking-tight leading-tight">
                    Bachelor of Science in Software Engineering
                  </h4>
                  
                  {/* University Name */}
                  <span className="text-sm font-bold text-primary mt-1.5 leading-normal">
                    Pak-Austria Fachhochschule Institute of Applied Sciences and Technology (PAF-IAST)
                  </span>

                  {/* Highlights or notable metrics */}
                  <div className="flex flex-wrap gap-4 mt-6 text-xs font-semibold text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      <span>Haripur, Pakistan</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span>Graduation Year: 2024</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Specialization score or award badge */}
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider self-start md:self-auto">
                <Award className="w-4 h-4" />
                <span>Specialized in Web Engineering</span>
              </div>
            </div>

            {/* Program overview bullet points */}
            <div className="mt-8 pt-6 border-t border-border/20">
              <h5 className="text-xs font-bold uppercase tracking-wider text-foreground mb-4">Core Focus Areas</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-secondary/30 border border-border/20 rounded-xl">
                  <span className="text-xs font-bold text-foreground block">Software Construction</span>
                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                    Practiced design patterns, data structure schemas, object-oriented programming principles, and agile team practices.
                  </p>
                </div>
                <div className="p-4 bg-secondary/30 border border-border/20 rounded-xl">
                  <span className="text-xs font-bold text-foreground block">Web Engineering</span>
                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                    Designed client architectures, set up database clusters, customized cloud servers, and connected REST end-points.
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
