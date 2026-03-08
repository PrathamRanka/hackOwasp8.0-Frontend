"use client";

import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";

export interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'acid' | 'ghost';
  glowColor?: 'cyan' | 'acid' | 'violet' | 'ember';
  children: React.ReactNode;
}

const GlowButton = forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ className, variant = 'primary', glowColor = 'cyan', children, ...props }, ref) => {
    
    const baseClasses = "relative inline-flex items-center justify-center font-display uppercase tracking-widest text-sm transition-all duration-300 overflow-hidden group px-8 py-4";
    
    const variants = {
      primary: "bg-surface text-cyan border border-cyan/50 hover:bg-cyan/10",
      secondary: "bg-transparent text-white border border-white/20 hover:border-white/50",
      acid: "bg-acid text-bg-primary font-bold hover:brightness-110",
      ghost: "bg-transparent text-muted hover:text-white"
    };

    const glows = {
      cyan: "group-hover:box-glow-cyan",
      acid: "group-hover:box-glow-acid",
      violet: "group-hover:box-glow-violet",
      ember: "group-hover:box-glow-ember",
    };

    return (
      <button
        ref={ref}
        className={cn(baseClasses, variants[variant], variant !== 'ghost' && glows[glowColor], className)}
        {...props}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>
        
        {/* Shimmer effect */}
        {variant !== 'ghost' && (
          <div className="absolute inset-0 -translate-x-[150%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shimmer_1.5s_ease-out_infinite] pointer-events-none group-hover:translate-x-[150%] transition-none" />
        )}
      </button>
    );
  }
);

GlowButton.displayName = "GlowButton";

export { GlowButton };
