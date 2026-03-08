"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface TerminalCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  typingText?: string | string[];
  typingSpeed?: number;
  delay?: number;
  children?: React.ReactNode;
}

export default function TerminalCard({ 
  title = "TERMINAL", 
  typingText, 
  typingSpeed = 50,
  delay = 0,
  children, 
  className, 
  ...props 
}: TerminalCardProps) {
  
  const textRef = useRef<HTMLDivElement>(null);
  const [isTypingComplete, setIsTypingComplete] = useState(!typingText);

  useEffect(() => {
    if (!typingText || !textRef.current) return;

    const lines = Array.isArray(typingText) ? typingText : [typingText];

    
    // Clear initial content
    textRef.current.innerHTML = "";

    const tl = gsap.timeline({ delay: delay / 1000, onComplete: () => setIsTypingComplete(true) });

    lines.forEach((line, lineIndex) => {
      const lineSpan = document.createElement("div");
      lineSpan.className = "flex gap-2";
      
      const prompt = document.createElement("span");
      prompt.className = "text-cyan select-none";
      prompt.innerText = ">";
      
      const content = document.createElement("span");
      content.className = "text-muted-foreground";
      
      lineSpan.appendChild(prompt);
      lineSpan.appendChild(content);
      textRef.current?.appendChild(lineSpan);

      const chars = line.split("");
      chars.forEach((char) => {
        tl.to({}, {
          duration: typingSpeed / 1000,
          onComplete: () => {
            content.innerHTML += char === " " ? "&nbsp;" : char;
          }
        });
      });
      
      // Pause at end of line
      if (lineIndex < lines.length - 1) {
        tl.to({}, { duration: 0.3 });
      }
    });

    return () => {
      tl.kill();
    };
  }, [typingText, typingSpeed, delay]);

  return (
    <div 
      className={cn(
        "relative bg-surface border border-white/10 p-6 font-mono text-sm overflow-hidden",
        className
      )}
      {...props}
    >
      {/* Corner Brackets */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan" />

      {/* Header */}
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/5">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-ember animate-pulse rounded-full" />
          <span className="text-muted tracking-widest text-xs">{title}</span>
        </div>
        <span className="text-[10px] text-muted tracking-widest">SYS_REQ</span>
      </div>

      {/* Typing Text Container */}
      {typingText && (
        <div className="mb-4" ref={textRef} />
      )}

      {/* Children (revealed after typing, or immediately if no typing text) */}
      <div className={cn("transition-opacity duration-500", !isTypingComplete ? "opacity-0" : "opacity-100")}>
        {children}
      </div>
    </div>
  );
}
