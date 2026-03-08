"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Cpu, Lock, Repeat, Network } from "lucide-react";

const tracks = [
  {
    num: "01",
    title: "WEB SECURITY",
    desc: "Breach. Patch. Repeat.",
    icon: <Lock className="w-12 h-12 mb-6 text-cyan" strokeWidth={1} />,
    color: "cyan",
    glow: "hover:box-glow-cyan",
    border: "group-hover:border-cyan"
  },
  {
    num: "02",
    title: "AI SECURITY",
    desc: "The model is the vulnerability.",
    icon: <Cpu className="w-12 h-12 mb-6 text-acid" strokeWidth={1} />,
    color: "acid",
    glow: "hover:box-glow-acid",
    border: "group-hover:border-acid"
  },
  {
    num: "03",
    title: "BLOCKCHAIN SEC",
    desc: "Trustless. Until it isn't.",
    icon: <Repeat className="w-12 h-12 mb-6 text-violet" strokeWidth={1} />,
    color: "violet",
    glow: "hover:box-glow-violet",
    border: "group-hover:border-violet"
  },
  {
    num: "04",
    title: "OPEN INNOVATION",
    desc: "No constraints. No excuses.",
    icon: <Network className="w-12 h-12 mb-6 text-ember" strokeWidth={1} />,
    color: "ember",
    glow: "hover:box-glow-ember",
    border: "group-hover:border-ember"
  }
];

export function TracksPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Desktop horizontal scroll animation
    const ctx = gsap.context(() => {
      // Only do horizontal pinning on large screens
      const matchMedia = gsap.matchMedia();

      matchMedia.add("(min-width: 1024px)", () => {
        const rowWidth = rowRef.current?.scrollWidth || 0;
        const viewportWidth = window.innerWidth;
        
        // Horizontal scroll Amount
        const moveAmount = rowWidth - viewportWidth + 100;

        if (moveAmount > 0) {
          gsap.to(rowRef.current, {
            x: -moveAmount,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              pin: true,
              scrub: 1,
              start: "top top",
              end: `+=${moveAmount * 1.5}px`
            }
          });
        }
      });
      
      // Card entrance animation
      const cards = gsap.utils.toArray('.track-card');
      gsap.fromTo(cards, 
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: ".tracks-header",
            start: "top 80%"
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-bg-secondary relative z-10 overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="tracks-header px-6 lg:px-12 mb-16 max-w-[1400px] mx-auto w-full">
        <h2 className="font-mono text-cyan tracking-widest text-sm mb-4">{`// SELECT YOUR EXPLOIT`}</h2>
      </div>

      <div className="w-full h-full pb-12">
        <div 
          ref={rowRef} 
          className="flex flex-col lg:flex-row gap-6 px-6 lg:px-12 w-full lg:w-max h-full lg:h-[60vh] min-h-[400px]"
        >
          {tracks.map((track, i) => (
            <div 
              key={i} 
              className={`track-card group relative bg-surface border border-white/5 p-8 lg:w-[35vw] flex-shrink-0 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:bg-[#0f1a30] ${track.border}`}
            >
              {/* Radial glow on hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,_var(--color-${track.color})_0%,_transparent_70%)] mix-blend-overlay ${track.glow}`} />

              <div className="relative z-10 flex flex-col h-full">
                <div className="font-mono text-muted text-xl mb-4">{track.num}</div>
                {track.icon}
                
                <div className="mt-auto">
                  <h3 className="font-display text-3xl md:text-4xl text-white tracking-tight mb-2 uppercase group-hover:text-white transition-colors">
                    {track.title}
                  </h3>
                  <p className="text-muted text-lg">{track.desc}</p>
                </div>
              </div>

              {/* Arrow Slide In */}
              <div className="absolute bottom-8 right-8 text-white opacity-0 transform translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <ArrowRight className="w-8 h-8" />
              </div>
              
              {/* Colored left border on hover */}
              <div className={`absolute left-0 top-0 bottom-0 w-1 opacity-0 group-hover:opacity-100 bg-${track.color} transition-opacity duration-300`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
