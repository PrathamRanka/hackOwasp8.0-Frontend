"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const topHalfRef = useRef<HTMLDivElement>(null);
  const bottomHalfRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      // Initial state
      gsap.set(topHalfRef.current, { yPercent: 0 });
      gsap.set(bottomHalfRef.current, { yPercent: 0 });
      gsap.set(lineRef.current, { scaleX: 0, transformOrigin: "left center" });
      gsap.set(contentRef.current, { opacity: 0 });
      gsap.set(overlayRef.current, { display: "block" });

      // 1. Thin cyan line sweeps left to right
      tl.to(lineRef.current, {
        scaleX: 1,
        duration: 0.6,
        ease: "power3.inOut"
      })
      // 2. Line disappears and halves split
      .to(lineRef.current, {
        opacity: 0,
        duration: 0.2
      })
      .to(topHalfRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: "expo.inOut"
      }, "-=0.2")
      .to(bottomHalfRef.current, {
        yPercent: 100,
        duration: 0.8,
        ease: "expo.inOut"
      }, "-=0.8")
      // 3. Content fades in
      .to(contentRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out"
      }, "-=0.4")
      // 4. Hide overlay to allow interaction
      .set(overlayRef.current, { display: "none" });
      
    });

    return () => ctx.revert();
  }, [pathname]);

  return (
    <>
      <div ref={overlayRef} className="fixed inset-0 z-100 pointer-events-none flex flex-col">
        {/* Top Half */}
        <div ref={topHalfRef} className="flex-1 bg-bg-primary relative overflow-hidden flex items-end justify-center">
            {/* Can put half of the word here if desired */}
        </div>
        
        {/* Center Line */}
        <div 
           ref={lineRef}
           className="absolute top-1/2 left-0 w-full h-[2px] bg-cyan -translate-y-1/2 z-10"
        />

        {/* Bottom Half */}
        <div ref={bottomHalfRef} className="flex-1 bg-bg-primary relative overflow-hidden flex items-start justify-center">
        </div>
      </div>
      
      <div ref={contentRef} className="opacity-0">
        {children}
      </div>
    </>
  );
}
