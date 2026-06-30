'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';
import { cn } from '@/lib/utils';

interface GradientButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export default function GradientButton({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  className,
  ...props
}: GradientButtonProps) {
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm font-semibold',
    lg: 'px-8 py-4 text-base font-bold',
  };

  const variantClasses = {
    primary: 'bg-gradient-main text-white hover:shadow-lg hover:shadow-primary/30 hover:brightness-110 border-0',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-muted border border-border',
    outline: 'bg-transparent border border-primary/40 text-foreground hover:bg-primary/10 hover:border-primary',
    ghost: 'bg-transparent text-foreground hover:bg-primary/10 hover:text-primary border-0',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 relative overflow-hidden group select-none shadow-md",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {/* Glow overlay for primary button */}
      {variant === 'primary' && (
        <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
      )}

      {icon && iconPosition === 'left' && (
        <span className="group-hover:-translate-x-0.5 transition-transform duration-200">{icon}</span>
      )}
      
      <span>{children}</span>

      {icon && iconPosition === 'right' && (
        <span className="group-hover:translate-x-0.5 transition-transform duration-200">{icon}</span>
      )}
    </motion.button>
  );
}
