import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import GitHubSection from '@/components/sections/GitHubSection';
import CertificationsSection from '@/components/sections/CertificationsSection';
import EducationSection from '@/components/sections/EducationSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import BlogSection from '@/components/sections/BlogSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <div className="flex flex-col w-full relative">
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <GitHubSection />
      <CertificationsSection />
      <EducationSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />
    </div>
  );
}
