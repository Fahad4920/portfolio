'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'motion/react';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting until mounted on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9 rounded-xl bg-secondary/50 border border-border/50" />;
  }

  const isDark = theme === 'dark';

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="p-2.5 rounded-xl bg-card border border-border hover:bg-muted text-foreground hover:text-primary transition-colors cursor-pointer select-none shadow-sm flex items-center justify-center"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180, scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-indigo-600" />}
      </motion.div>
    </motion.button>
  );
}
