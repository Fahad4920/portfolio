'use client';

import React from 'react';
import { GitFork, Star, ExternalLink, Activity } from 'lucide-react';
import { GithubIcon } from '@/components/icons';
import GlassCard from '../common/GlassCard';
import SectionHeading from '../common/SectionHeading';
import { socialLinks } from '@/data/social';

export default function GitHubSection() {
  // Deterministic mock contribution data to prevent server/client hydration mismatch
  const contributionGrid = Array.from({ length: 52 }, (_, weekIdx) =>
    Array.from({ length: 7 }, (_, dayIdx) => {
      const val = (weekIdx * 3 + dayIdx * 17) % 11;
      if (val < 4) return 0;
      if (val < 7) return 1;
      if (val < 9) return 2;
      if (val < 10) return 3;
      return 4;
    })
  );

  const pinnedRepos = [
    {
      name: "life-line-monitor",
      description: "Real-time patient health telemetry IoT system connecting micro-controllers to an Express/React portal.",
      stars: 4,
      forks: 1,
      language: "TypeScript",
      languageColor: "bg-blue-500",
    },
    {
      name: "sabzland-portal",
      description: "Evaluation metrics and document application tracking platform for internal interns.",
      stars: 5,
      forks: 2,
      language: "JavaScript",
      languageColor: "bg-yellow-400",
    },
    {
      name: "intellect-ai-chatbot",
      description: "Gereative response stream AI chat portal with customized vector search Pinecone stores.",
      stars: 3,
      forks: 0,
      language: "Next.js",
      languageColor: "bg-violet-500",
    },
  ];

  const profileStats = [
    { label: "Total Contributions", value: "842" },
    { label: "Public Repos", value: "23" },
    { label: "Followers", value: "14" },
  ];

  const topLanguages = [
    { name: "JavaScript", percent: 45, color: "bg-yellow-400" },
    { name: "TypeScript", percent: 30, color: "bg-blue-500" },
    { name: "CSS/HTML", percent: 15, color: "bg-orange-500" },
    { name: "C++ / Arduino", percent: 10, color: "bg-pink-500" },
  ];

  return (
    <section id="github" className="py-20 relative z-10 w-full bg-background/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <SectionHeading
          title="GitHub Activity"
          subtitle="Explore public repositories, core programming languages, and recent contribution activity."
          badge="Open Source contributions"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
          
          {/* Left Column Profile stats and top languages */}
          <div className="lg:col-span-4 flex flex-col gap-6 w-full">
            {/* Profile Summary Card */}
            <GlassCard glowColor="purple" hoverEffect="none" className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-main flex items-center justify-center text-white font-extrabold text-2xl shadow-md shadow-primary/20">
                  FS
                </div>
                <div>
                  <h4 className="font-extrabold text-base tracking-tight text-foreground">@fahad4920</h4>
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary font-bold flex items-center gap-1.5 mt-1 hover:underline cursor-pointer"
                  >
                    View GitHub Profile
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-2.5 mt-8 text-center">
                {profileStats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col p-2.5 bg-secondary/50 rounded-xl border border-border/40">
                    <span className="text-lg font-extrabold text-foreground tracking-tight">{stat.value}</span>
                    <span className="text-[9px] text-muted-foreground uppercase font-bold tracking-wider mt-0.5">{stat.label}</span>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Top Languages Card */}
            <GlassCard glowColor="blue" hoverEffect="none" className="p-6">
              <h5 className="font-bold text-sm tracking-tight text-foreground mb-4.5">Top Languages</h5>
              <div className="flex flex-col gap-4">
                {topLanguages.map((lang, idx) => (
                  <div key={idx} className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-center text-xs font-semibold">
                      <span className="text-foreground/90 flex items-center gap-2">
                        <span className={`w-2.5 h-2.5 rounded-full ${lang.color}`} />
                        {lang.name}
                      </span>
                      <span className="text-muted-foreground">{lang.percent}%</span>
                    </div>
                    {/* Track */}
                    <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
                      <div className={`h-full ${lang.color} rounded-full`} style={{ width: `${lang.percent}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* Right Column Contribution matrix and pinned repositories */}
          <div className="lg:col-span-8 flex flex-col gap-6 w-full">
            {/* Contribution Matrix Card */}
            <GlassCard glowColor="purple" hoverEffect="none" className="p-6 overflow-x-auto">
              <div className="flex items-center justify-between mb-4.5 min-w-[500px]">
                <h5 className="font-bold text-sm tracking-tight text-foreground flex items-center gap-2">
                  <Activity className="w-4 h-4 text-primary animate-pulse" />
                  Recent Contributions (Generated Pattern)
                </h5>
                <span className="text-[11px] text-muted-foreground">Less &bull;&bull;&bull;&bull;&bull; More</span>
              </div>

              {/* Grid block */}
              <div className="flex gap-[3px] min-w-[500px] overflow-x-auto pb-2">
                {contributionGrid.map((week, weekIdx) => (
                  <div key={weekIdx} className="flex flex-col gap-[3px]">
                    {week.map((val, dayIdx) => {
                      const colorMap = [
                        'bg-secondary/40 border border-border/10',
                        'bg-violet-950/30 border border-primary/10',
                        'bg-violet-800/40 border border-primary/20',
                        'bg-violet-600/70 border border-primary/30',
                        'bg-primary/90 border border-primary/40 shadow-sm shadow-primary/20',
                      ];
                      return (
                        <div
                          key={dayIdx}
                          className={`w-[10px] h-[10px] rounded-sm transition-all duration-300 ${colorMap[val]}`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Pinned Repositories title */}
            <h5 className="font-extrabold text-base tracking-tight text-foreground mt-2">Pinned Repositories</h5>

            {/* Repos list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {pinnedRepos.map((repo, idx) => (
                <GlassCard
                  key={idx}
                  glowColor="blue"
                  hoverEffect="scale"
                  className="p-5 flex flex-col justify-between"
                >
                  <div>
                    <h6 className="font-extrabold text-sm tracking-tight text-foreground flex items-center gap-1.5 group-hover:text-primary transition-colors">
                      <GithubIcon className="w-4 h-4 text-muted-foreground" />
                      {repo.name}
                    </h6>
                    <p className="text-xs text-muted-foreground leading-normal mt-2">
                      {repo.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-5 pt-3.5 border-t border-border/20 text-xs">
                    <span className="flex items-center gap-1.5 font-semibold text-muted-foreground">
                      <span className={`w-2.5 h-2.5 rounded-full ${repo.languageColor}`} />
                      {repo.language}
                    </span>

                    <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                        {repo.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="w-3.5 h-3.5" />
                        {repo.forks}
                      </span>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
