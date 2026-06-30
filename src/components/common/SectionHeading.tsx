'use client';

import React from 'react';
import { motion } from 'motion/react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
}

export default function SectionHeading({ title, subtitle, badge }: SectionHeadingProps) {
  return (
    <div className="flex flex-col items-center text-center mb-16 relative z-10">
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 rounded-full mb-4"
        >
          {badge}
        </motion.span>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl md:text-5xl font-extrabold tracking-tight"
      >
        <span className="text-gradient">{title}</span>
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Decorative gradient underline line */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: '80px', opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="h-1 bg-gradient-main rounded-full mt-6"
      />
    </div>
  );
}
