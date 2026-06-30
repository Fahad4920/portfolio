'use client';

import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'motion/react';
import GlassCard from '../common/GlassCard';
import SectionHeading from '../common/SectionHeading';

export default function TestimonialsSection() {
  const testimonials = [
  {
    text: "Fahad demonstrated exceptional adaptability during his internship at SabzLand. He optimized our application's frontend and integrated complex REST APIs with minimal guidance. His problem-solving skills and commitment to delivering quality work made him a valuable member of the team.",
    author: "Senior Software Engineer",
    role: "Software Developer",
    avatarInitials: "SL",
  },
  {
    text: "Fahad's contributions to Odoo ERP customization and API development significantly improved our client data synchronization processes. He has a strong understanding of responsive web design and consistently delivers clean, maintainable, and scalable solutions.",
    author: "Technical Coordinator",
    role: "Cosmotech Technologies",
    avatarInitials: "CT",
  },
  {
    text: "Fahad is a highly motivated software developer with a strong passion for continuous learning and professional growth. He quickly adapts to new technologies, including Docker, CI/CD pipelines, and modern development practices. His dedication, technical curiosity, and collaborative mindset make him a valuable asset to any development team.",
    author: "Project Supervisor",
    role: "Software Development Mentor",
    avatarInitials: "SP",
  },
];

  return (
    <section id="testimonials" className="py-20 relative z-10 w-full bg-background/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <SectionHeading
          title="Recommendations"
          subtitle="Feedback and notes from technical mentors, supervisors, and colleagues during my educational and internship career."
          badge="Endorsements"
        />

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="h-full"
            >
              <GlassCard
                glowColor={idx % 2 === 0 ? 'purple' : 'blue'}
                hoverEffect="lift"
                className="p-6 flex flex-col justify-between h-full relative overflow-hidden"
              >
                {/* Decorative quote icon */}
                <Quote className="absolute right-6 top-6 w-12 h-12 text-primary/10 select-none pointer-events-none" />

                <div>
                  {/* Quote Paragraph */}
                  <p className="text-sm text-muted-foreground leading-relaxed italic relative z-10">
                    &ldquo;{test.text}&rdquo;
                  </p>
                </div>

                {/* Profile Author Details */}
                <div className="flex items-center gap-3.5 mt-8 pt-4 border-t border-border/20">
                  <div className="w-10 h-10 rounded-full bg-gradient-main flex items-center justify-center text-white font-extrabold text-xs shadow-sm">
                    {test.avatarInitials}
                  </div>
                  <div>
                    <h5 className="font-extrabold text-xs text-foreground tracking-tight">
                      {test.author}
                    </h5>
                    <span className="text-[10px] text-muted-foreground mt-0.5 block font-semibold uppercase tracking-wider">
                      {test.role}
                    </span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
