'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center font-sans">
      <div className="flex flex-col items-center gap-6 select-none pointer-events-none">
        
        {/* Pulsing initials container */}
        <div className="relative flex items-center justify-center">
          {/* Spinner rings */}
          <div className="w-20 h-20 rounded-full border border-primary/20 animate-pulse absolute" />
          <div className="w-24 h-24 rounded-full border-t-2 border-primary border-r-2 border-r-transparent animate-spin absolute" style={{ animationDuration: '1.2s' }} />

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.1, 0.95, 1], opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-16 h-16 rounded-2xl bg-gradient-main flex items-center justify-center text-white font-extrabold text-2xl shadow-xl shadow-primary/30 z-10"
          >
            FS
          </motion.div>
        </div>

        {/* Text loading feedback */}
        <div className="flex flex-col items-center gap-1.5 mt-2">
          <span className="text-sm font-extrabold tracking-widest text-foreground uppercase animate-pulse">
            Fahad Sajid
          </span>
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
            Portfolio is Loading...
          </span>
        </div>
      </div>
    </div>
  );
}
