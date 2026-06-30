'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';

export default function BackToTop() {
  const scrollY = useScrollPosition();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(scrollY > 500);
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 left-6 z-40 bg-card border border-border p-3.5 rounded-full flex items-center justify-center text-foreground hover:text-primary shadow-lg cursor-pointer select-none"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
