'use client';

import React from 'react';
import { Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons';
import { socialLinks } from '@/data/social';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-card/25 border-t border-border/40 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-main flex items-center justify-center text-white font-extrabold text-sm">
            FS
          </div>
          <span className="font-semibold text-sm tracking-tight text-foreground/80">
            Fahad Sajid &copy; {currentYear}
          </span>
        </div>

        {/* Made with and Location */}
        <div className="text-xs text-muted-foreground flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-1.5">
            <span>Designed & Built with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>using Next.js</span>
          </div>
          <span className="opacity-80"> Haripur KPK, PK</span>
        </div>

        {/* Social Icons Links */}
        <div className="flex items-center gap-4">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-card border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary/50 transition-colors shadow-sm"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4.5 h-4.5" />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-card border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary/50 transition-colors shadow-sm"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4.5 h-4.5" />
          </a>
          <a
            href={`mailto:${socialLinks.email}`}
            className="w-9 h-9 rounded-xl bg-card border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary/50 transition-colors shadow-sm"
            aria-label="Send Email"
          >
            <Mail className="w-4.5 h-4.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
