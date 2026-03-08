"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { GlowButton } from "@/components/ui/glow-button";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLHeadingElement>(null);
  const title2Ref = useRef<HTMLHeadingElement>(null);
  const title3Ref = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const countdownRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  const terminalLines = [
    "> INITIALIZING HACKOWASP_8.0...",
    "> ENCRYPTION: AES-256-GCM [ACTIVE]",
    "> THREAT LEVEL: CRITICAL",
    "> PARTICIPANTS: LOADING...",
    "> STATUS: [████████░░] 80%..."
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 0.0s -> Screen flicker
      tl.fromTo(containerRef.current, 
        { opacity: 0 },
        { opacity: 1, duration: 0.1, repeat: 3, yoyo: true }
      )
      
      // 0.3s -> Terminal text
      .to({}, { duration: 0.2 }) // Delay

      // Setup terminal lines
      const termLines = terminalRef.current?.children;
      if (termLines) {
        gsap.set(termLines, { opacity: 0 });
        tl.to(termLines, {
          opacity: 1,
          stagger: 0.1,
          duration: 0.1
        }, "+=0.1");
      }

      // 1.6s -> HACK slams in from top
      tl.from(title1Ref.current, {
        y: -200,
        opacity: 0,
        ease: "expo.out",
        duration: 0.8
      }, 1.2) // Absolute time 1.2 approx

      // 1.8s -> OWASP slams in from bottom
      .from(title2Ref.current, {
        y: 200,
        opacity: 0,
        ease: "expo.out",
        duration: 0.8
      }, 1.4)

      // 2.0s -> 8.0 fades in with cyan glow
      .from(title3Ref.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.5)"
      }, 1.6)

      // 2.3s -> Tagline reveal via clip-path
      .from(taglineRef.current, {
        clipPath: "inset(0 100% 0 0)",
        duration: 0.6
      }, 1.9)

      // 2.5s -> Countdown cells pop in
      const countdownCells = countdownRef.current?.children;
      if (countdownCells) {
        tl.from(countdownCells, {
          scale: 0.5,
          opacity: 0,
          stagger: 0.08,
          duration: 0.4,
          ease: "back.out(1.5)"
        }, 2.1);
      }

      // 2.8s -> Buttons fade up
      const buttons = buttonsRef.current?.children;
      if (buttons) {
        tl.from(buttons, {
          y: 20,
          opacity: 0,
          stagger: 0.1,
          duration: 0.5
        }, 2.4);
      }

      // 3.0s -> Terminal lines fade to 20%
      tl.to(terminalRef.current, {
        opacity: 0.2,
        duration: 1
      }, 2.6);

    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-24">
      {/* Corner Bracket Decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-cyan opacity-50" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-cyan opacity-50" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-cyan opacity-50" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-cyan opacity-50" />

      {/* Top Left Terminal Status */}
      <div 
        ref={terminalRef} 
        className="absolute top-12 left-14 font-mono text-cyan/80 text-sm tracking-widest hidden md:block"
      >
        {terminalLines.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>

      {/* Top Right Organizer */}
      <div className="absolute top-12 right-14 font-mono text-muted text-xs tracking-widest uppercase text-right hidden md:block border-r-2 border-cyan pr-4">
        <div>Organized by</div>
        <div className="text-white mt-1">CodeChef TIET</div>
      </div>

      {/* Center Main Titles */}
      <div className="relative z-10 text-center flex flex-col items-center select-none pt-12 md:pt-0">
        <h1 
          ref={title1Ref} 
          className="font-display font-medium text-white tracking-[-0.05em] leading-[0.8] mb-0"
          style={{ fontSize: "clamp(5rem, 14vw, 12rem)" }}
        >
          HACK
        </h1>
        <h1 
          ref={title2Ref} 
          className="font-display font-medium text-cyan text-glow-cyan tracking-[-0.05em] leading-[0.8]"
          style={{ fontSize: "clamp(5rem, 14vw, 12rem)" }}
        >
          OWASP
        </h1>
        <h2 
          ref={title3Ref} 
          className="font-mono text-acid text-3xl md:text-5xl lg:text-[4rem] tracking-widest mt-4 md:mt-2"
        >
          ─── 8.0 ───
        </h2>
        
        <p 
          ref={taglineRef}
          className="text-muted tracking-widest font-mono text-sm md:text-lg mt-8 mb-12 uppercase"
        >
          &quot;48 Hours. No Rules. Break Everything.&quot;
        </p>
      </div>

      {/* Countdown Blocks */}
      <div ref={countdownRef} className="flex flex-wrap justify-center gap-4 mb-16 relative z-10 w-full max-w-4xl px-4">
        {[
          { label: "DAYS", value: "08" },
          { label: "HRS", value: "23" },
          { label: "MIN", value: "45" },
          { label: "SEC", value: "12" }
        ].map((block, i) => (
          <div 
            key={i} 
            className="flex flex-col items-center justify-center bg-surface border border-cyan/30 px-6 py-4 w-[calc(50%-0.5rem)] md:w-32"
          >
            <span className="font-display text-4xl text-white tracking-tight">{block.value}</span>
            <span className="font-mono text-[0.65rem] text-muted tracking-widest mt-1">{block.label}</span>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-6 relative z-10">
        <GlowButton variant="acid" glowColor="acid" className="w-full sm:w-auto">
          REGISTER NOW →
        </GlowButton>
        <GlowButton variant="secondary" glowColor="cyan" className="w-full sm:w-auto">
          ↓ EXPLORE
        </GlowButton>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 flex flex-col items-center gap-2 opacity-60">
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase rotate-90 mb-6 text-cyan">Scroll</span>
        <div className="w-px h-16 bg-linear-to-b from-cyan to-transparent" />
      </div>
    </section>
  );
}
