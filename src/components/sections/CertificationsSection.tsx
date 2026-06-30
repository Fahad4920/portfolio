'use client';

import React from 'react';
import { Award, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import GlassCard from '../common/GlassCard';
import SectionHeading from '../common/SectionHeading';
import { certifications } from '@/data/certifications';

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 relative z-10 w-full bg-background/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <SectionHeading
          title="Licenses & Certifications"
          subtitle="My professional credentials verified by Google and SabzLand Academy, validating competency in programming pipelines and system support."
          badge="Credentials"
        />

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="h-full"
            >
              <GlassCard
                glowColor={idx % 2 === 0 ? 'purple' : 'blue'}
                hoverEffect="lift"
                className="p-6 flex flex-col justify-between h-full group"
              >
                <div>
                  {/* Certificate Icon header */}
                  <div className="w-12 h-12 rounded-xl bg-card border border-border/50 flex items-center justify-center text-primary shadow-sm mb-5 group-hover:scale-105 group-hover:rotate-3 transition-transform duration-300">
                    <Award className="w-6 h-6 text-primary" />
                  </div>

                  {/* Title */}
                  <h4 className="text-base font-extrabold tracking-tight text-foreground group-hover:text-primary transition-colors duration-200">
                    {cert.title}
                  </h4>

                  {/* Issuer details */}
                  <span className="text-xs font-bold text-muted-foreground mt-2 block uppercase tracking-wider">
                    {cert.issuer}
                  </span>

                  {/* Credentials IDs */}
                  {cert.credentialId && (
                    <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground font-mono mt-4 p-2 bg-secondary/30 border border-border/20 rounded-lg">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                      <span>ID: {cert.credentialId}</span>
                    </div>
                  )}
                </div>

                {/* Footer details with verification URL */}
                <div className="flex items-center justify-between mt-8 pt-4 border-t border-border/20 text-xs font-semibold text-muted-foreground">
                  <span>Issued: {cert.date}</span>

                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent font-bold flex items-center gap-1 hover:underline cursor-pointer select-none"
                  >
                    Verify
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
