'use client';

import React from 'react';
import { Calendar, ArrowRight, Rss } from 'lucide-react';
import { motion } from 'motion/react';
import GlassCard from '../common/GlassCard';
import SectionHeading from '../common/SectionHeading';
import GradientButton from '../common/GradientButton';

export default function BlogSection() {
  const posts = [
    {
      title: "Optimizing API Latency in Next.js Serverless Routines",
      excerpt: "A deep dive into cache optimization layers, pool configurations, and memory buffering using Redis schemas.",
      date: "August 2026",
      readTime: "6 min read",
      category: "Performance",
    },
    {
      title: "ESP32 MQTT Low-Latency Telemetry Streaming Setup",
      excerpt: "How to customize ESP32 C++ firmware with sleep cycles and reconnect buffers to feed live dashboards over poor signals.",
      date: "July 2026",
      readTime: "8 min read",
      category: "IoT",
    },
  ];

  return (
    <section id="blog" className="py-20 relative z-10 w-full bg-background/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <SectionHeading
          title="Technical Articles"
          subtitle="Thoughts, tutorials, and deep dives on software architecture, frontend optimization, and hardware system configurations."
          badge="Publications"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
          {/* Left Column Blog posts preview */}
          <div className="lg:col-span-8 flex flex-col gap-6 w-full">
            {posts.map((post, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <GlassCard
                  glowColor="blue"
                  hoverEffect="scale"
                  className="p-6 md:p-8 flex flex-col justify-between"
                >
                  <div className="flex flex-col gap-2.5">
                    {/* Header metrics */}
                    <div className="flex items-center gap-4 text-xs font-semibold text-muted-foreground">
                      <span className="px-2 py-0.5 rounded bg-primary/10 text-primary uppercase text-[10px] font-bold tracking-wider">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{post.date}</span>
                      </div>
                      <span>&bull;</span>
                      <span>{post.readTime}</span>
                    </div>

                    {/* Title */}
                    <h4 className="text-lg md:text-xl font-extrabold tracking-tight text-foreground mt-2">
                      {post.title}
                    </h4>

                    {/* Excerpt */}
                    <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Read more button link (coming soon popup/style) */}
                  <div className="flex items-center gap-1.5 text-xs text-primary font-bold hover:text-accent transition-colors mt-6 cursor-pointer select-none">
                    <span>Read Article (Coming Soon)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Right Column Newsletter placeholder sign up card */}
          <div className="lg:col-span-4 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <GlassCard glowColor="purple" hoverEffect="none" className="p-6 md:p-8 flex flex-col text-center">
                {/* RSS Icon header */}
                <div className="w-12 h-12 rounded-xl bg-card border border-border/50 flex items-center justify-center text-primary shadow-sm mb-5 mx-auto">
                  <Rss className="w-6 h-6 text-primary" />
                </div>

                <h4 className="font-extrabold text-base tracking-tight text-foreground">Subscribe to My Feed</h4>
                
                <p className="text-xs text-muted-foreground leading-relaxed mt-2">
                  Stay updated on Next.js tips, Express architectures, and microcontroller firmware solutions. No spam, only code.
                </p>

                {/* Simulated Input controls */}
                <input
                  type="email"
                  placeholder="name@email.com"
                  disabled
                  className="mt-6 px-4 py-3 bg-secondary/50 border border-border/40 text-xs font-semibold placeholder-muted-foreground rounded-xl w-full text-center focus:outline-none cursor-not-allowed opacity-80"
                />

                <GradientButton
                  variant="primary"
                  size="sm"
                  disabled
                  className="mt-4 w-full cursor-not-allowed opacity-80"
                >
                  Join Feed
                </GradientButton>

                <span className="text-[10px] text-muted-foreground mt-4 block">
                  Feed launch scheduled: Mid 2026
                </span>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
