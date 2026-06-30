'use client';

import React, { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ThemeSwitcher from '../common/ThemeSwitcher';
import { useScrollPosition } from '@/hooks/useScrollPosition';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const scrollY = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      let currentSection = 'home';

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the section is close to the top of viewport
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const el = document.getElementById(targetId);
    if (el) {
      const offset = 80; // Navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const isScrolled = scrollY > 20;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 w-full ${
          isScrolled
            ? 'bg-background/70 backdrop-blur-md border-b border-border/40 py-3 shadow-md'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-main flex items-center justify-center text-white font-extrabold text-lg shadow-md shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
              FS
            </div>
            <span className="font-bold text-lg tracking-tight hidden sm:inline-block group-hover:text-primary transition-colors">
              Fahad Sajid
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-card/40 border border-border/30 rounded-full px-4 py-1.5 backdrop-blur-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer select-none ${
                    isActive ? 'text-white' : 'text-foreground/75 hover:text-primary'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-gradient-main rounded-full -z-10 shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeSwitcher />
            
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="bg-gradient-main text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-primary/20 hover:brightness-110 transition-all flex items-center gap-1 cursor-pointer select-none"
            >
              Hire Me
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Right Actions */}
          <div className="flex lg:hidden items-center gap-3">
            <ThemeSwitcher />
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-card border border-border hover:bg-muted text-foreground transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-background/90 backdrop-blur-md lg:hidden flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col gap-6 text-center">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <motion.a
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ delay: index * 0.05 }}
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`text-2xl font-bold uppercase tracking-widest transition-colors cursor-pointer ${
                      isActive ? 'text-primary' : 'text-foreground hover:text-primary'
                    }`}
                  >
                    {item.label}
                  </motion.a>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ delay: navItems.length * 0.05 }}
                className="mt-6"
              >
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="bg-gradient-main text-white px-8 py-3.5 rounded-xl text-sm font-extrabold uppercase tracking-widest shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  Hire Me
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
