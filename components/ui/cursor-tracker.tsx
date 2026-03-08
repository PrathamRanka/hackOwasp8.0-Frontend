"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CursorTracker() {
  const cursorDot = useRef<HTMLDivElement>(null);
  const cursorRing = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);

  useEffect(() => {
    // Check if it's a touch device; if so, return early and don't show cursor
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const ctx = gsap.context(() => {
      // QuickSetter for performance
      const xSetDot = gsap.quickSetter(cursorDot.current, "x", "px");
      const ySetDot = gsap.quickSetter(cursorDot.current, "y", "px");

      const onMouseMove = (e: MouseEvent) => {
        if (!hasMoved) setHasMoved(true);
        xSetDot(e.clientX - 5);
        ySetDot(e.clientY - 5);

        // Lag for the ring
        gsap.to(cursorRing.current, {
          x: e.clientX - 18,
          y: e.clientY - 18,
          duration: 0.15,
          ease: "power2.out"
        });
      };

      const onMouseDown = () => setIsClicking(true);
      const onMouseUp = () => setIsClicking(false);

      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mousedown", onMouseDown);
      window.addEventListener("mouseup", onMouseUp);

      // Handle hover states on interactive elements
      const handleMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (
          target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.closest("a") ||
          target.closest("button")
        ) {
          setIsHovering(true);
        } else {
          setIsHovering(false);
        }
      };

      window.addEventListener("mouseover", handleMouseOver);

      return () => {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mousedown", onMouseDown);
        window.removeEventListener("mouseup", onMouseUp);
        window.removeEventListener("mouseover", handleMouseOver);
      };
    });

    return () => ctx.revert();
  }, [hasMoved]);

  if (!hasMoved && typeof window !== 'undefined' && !window.matchMedia("(pointer: coarse)").matches) {
     // Still returning it but hidden until mouse moves to prevent random placement at 0,0
  }

  return (
    <>
      <div 
        ref={cursorDot}
        className={`fixed top-0 left-0 w-[10px] h-[10px] bg-cyan rounded-full pointer-events-none z-9999 transition-transform duration-150 ${hasMoved ? 'opacity-100' : 'opacity-0'} ${isHovering ? 'scale-[2] bg-white' : 'scale-100'} ${isClicking ? 'scale-150' : ''}`}
        style={{ mixBlendMode: 'difference' }}
      />
      <div 
        ref={cursorRing}
        className={`fixed top-0 left-0 w-[36px] h-[36px] border border-cyan rounded-full pointer-events-none z-9998 transition-all duration-300 ${hasMoved ? 'opacity-100' : 'opacity-0'} ${isHovering ? 'opacity-0 scale-50' : 'scale-100'} ${isClicking ? 'scale-75' : ''}`}
      />
    </>
  );
}
