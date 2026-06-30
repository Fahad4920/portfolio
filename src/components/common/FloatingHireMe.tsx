'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';

export default function FloatingHireMe() {
  const scrollY = useScrollPosition();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(scrollY > 400);
  }, [scrollY]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#contact"
          onClick={handleClick}
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 z-40 bg-gradient-main text-white px-5 py-3 rounded-full flex items-center gap-2 shadow-lg shadow-primary/30 cursor-pointer font-bold select-none"
        >
          {/* Pulsing glow ring */}
          <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping opacity-75" />
          
          <Briefcase className="w-4 h-4 relative z-10 animate-bounce" />
          <span className="relative z-10 text-xs tracking-wider uppercase font-semibold">Hire Me</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
