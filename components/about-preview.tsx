"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield } from "lucide-react";

export function AboutPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftVisualRef = useRef<HTMLDivElement>(null);
  const rightTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Hexagon rotation into view
      gsap.fromTo(leftVisualRef.current,
        { rotationX: 80, opacity: 0, scale: 0.8 },
        {
          rotationX: 0,
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      );

      // Text lines staggered reveal
      if (rightTextRef.current) {
        const lines = rightTextRef.current.querySelectorAll('.reveal-line');
        gsap.fromTo(lines,
          { y: 50, opacity: 0, clipPath: "inset(100% 0 0 0)" },
          {
            y: 0,
            opacity: 1,
            clipPath: "inset(0% 0 0 0)",
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 70%",
            }
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 px-6 max-w-7xl mx-auto border-b border-white/5 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Visual: Hexagon Diagram */}
        <div ref={leftVisualRef} className="relative aspect-square w-full max-w-md mx-auto flex items-center justify-center perspective-[1000px]">
          {/* Outer dashed hex */}
          <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_15px_rgba(0,200,255,0.3)]">
              <polygon 
                points="100,10 180,55 180,145 100,190 20,145 20,55" 
                fill="none" 
                stroke="var(--cyan)" 
                strokeWidth="1"
                strokeDasharray="8 6"
              />
            </svg>
          </div>
          
          {/* Middle solid hex */}
          <div className="absolute inset-8 animate-[spin_30s_linear_infinite_reverse] opacity-30">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <polygon 
                points="100,10 180,55 180,145 100,190 20,145 20,55" 
                fill="none" 
                stroke="var(--violet)" 
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* Inner Element */}
          <div className="relative z-10 bg-bg-primary rounded-full p-8 border border-white/10 box-glow-cyan">
             <Shield className="w-16 h-16 text-cyan" strokeWidth={1} />
          </div>

          {/* Orbiting Satellites */}
          <div className="absolute inset-0 animate-[spin_15s_linear_infinite]">
            <div className="absolute top-0 left-1/2 w-3 h-3 bg-acid rounded-full -translate-x-1/2 -translate-y-1.5 box-glow-acid" />
            <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-violet rounded-full -translate-x-1/2 translate-y-1.5 box-glow-violet" />
          </div>
          <div className="absolute inset-0 animate-[spin_12s_linear_infinite_reverse]">
            <div className="absolute top-1/2 left-0 w-2 h-2 bg-cyan rounded-full -translate-x-1 -translate-y-1/2" />
            <div className="absolute top-1/2 right-0 w-2 h-2 bg-white rounded-full translate-x-1 -translate-y-1/2" />
          </div>
        </div>

        {/* Right Text */}
        <div ref={rightTextRef}>
          <div className="reveal-line font-mono text-cyan tracking-widest text-sm mb-6">{`// WHAT IS HACKOWASP`}</div>
          <h2 className="font-display text-5xl md:text-6xl tracking-[-0.03em] leading-tight mb-8">
            <div className="reveal-line">Where Hackers</div>
            <div className="reveal-line text-white/50">Become Defenders.</div>
          </h2>
          
          <div className="reveal-line text-muted text-lg space-y-6 mb-12">
            <p>
              HackOWASP 8.0 isn&apos;t just a hackathon; it&apos;s a 48-hour simulation of real-world cyber warfare. We strip away the guardrails and force you to think like an adversary to build unbreakable systems.
            </p>
            <p>
              Organized by CodeChef TIET in collaboration with OWASP, this is the proving ground where theoretical knowledge meets actual exploitation. Will you patch it, or will you break it?
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "EDITIONS", val: "07 PAST" },
              { label: "HACKERS", val: "3500+" },
              { label: "MENTORS", val: "INDUSTRY ELITE" },
              { label: "PARTNERS", val: "TIER-1 CYBER" }
            ].map((stat, i) => (
              <div key={i} className="reveal-line bg-surface border border-white/5 p-4 rounded-sm hover:border-cyan/30 hover:box-glow-cyan transition-all duration-300">
                <div className="text-white font-mono text-sm">{stat.val}</div>
                <div className="text-muted text-[10px] tracking-widest mt-1 uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
