"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { Calendar, Clock } from "lucide-react";

type EventNode = {
  time: string;
  title: string;
  desc: string;
  phase: "PRE" | "HACK" | "POST";
  important?: boolean;
};

const day1: EventNode[] = [
  { time: "09:00", title: "Registration & Check-in", desc: "Get your badges and physical auth tokens.", phase: "PRE" },
  { time: "10:00", title: "Opening Ceremony", desc: "Keynote and rule briefing.", phase: "PRE" },
  { time: "11:30", title: "Problem Statement Release", desc: "The targets are revealed.", phase: "HACK", important: true },
  { time: "12:00", title: "HACKING BEGINS", desc: "Servers are live. Good luck.", phase: "HACK", important: true },
  { time: "14:00", title: "Mentor Session: Web Security", desc: "Deep dive into web exploitation basics.", phase: "HACK" },
  { time: "18:00", title: "Mentor Session: AI Security", desc: "Attacking ML pipelines.", phase: "HACK" },
  { time: "22:00", title: "Midnight Check-in", desc: "Survive the night. Snack break.", phase: "HACK" },
];

const day2: EventNode[] = [
  { time: "02:00", title: "Mentor Session: Blockchain Security", desc: "Smart contract auditing at 2AM.", phase: "HACK" },
  { time: "08:00", title: "Morning Refresh", desc: "Breakfast and caffeine reload.", phase: "HACK" },
  { time: "10:00", title: "Submission Window Opens", desc: "Finalize your exploits.", phase: "POST" },
  { time: "12:00", title: "SUBMISSIONS CLOSED", desc: "Tools down. Network isolated.", phase: "POST", important: true },
  { time: "13:00", title: "Judging Panel Begins", desc: "Present your breach.", phase: "POST" },
  { time: "15:00", title: "Results Announcement", desc: "Who cracked the system?", phase: "POST" },
  { time: "16:00", title: "Closing Ceremony", desc: "Prize distribution.", phase: "POST" },
];

const TimelineNode = ({ event }: { event: EventNode }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const nodeRef = useRef<HTMLDivElement>(null);

  const colors = {
    PRE: "cyan",
    HACK: "violet",
    POST: "acid"
  };
  const color = colors[event.phase];

  return (
    <div 
      ref={nodeRef}
      className={cn(
        "timeline-node relative pl-12 md:pl-24 py-8 group w-full opacity-0 translate-y-8",
        event.important ? "mt-4 mb-4" : ""
      )}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* The Dot */}
      <div className={cn(
        "absolute left-[-5px] top-[40px] w-3 h-3 rounded-full z-20 transition-all duration-300",
        `bg-${color} shadow-[0_0_15px_var(--color-${color})]`,
        isExpanded ? "scale-150" : "scale-100"
      )} />

      {/* The Connector Line (draws to the card) */}
      <div className={cn(
        "absolute left-[8px] top-[45px] h-px z-10 transition-all duration-500",
        `bg-${color}`,
        isExpanded ? "w-8 md:w-20 opacity-100" : "w-0 opacity-0"
      )} />

      {/* The Card */}
      <div className={cn(
        "relative bg-surface border transition-all duration-500 transform origin-left w-full md:w-[500px] lg:w-[600px]",
        event.important ? `border-${color} shadow-[0_0_20px_rgba(var(--color-${color}),0.2)]` : "border-white/10",
        isExpanded ? "translate-x-2 border-white/30 bg-[#0f1a30]" : "translate-x-0"
      )}>
        
        {/* Glow on hover */}
        <div className={cn(
          "absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none mix-blend-overlay",
          isExpanded ? "opacity-100" : "",
          `bg-[radial-gradient(circle_at_left,_var(--color-${color})_0%,_transparent_50%)]`
        )} />

        <div className="p-6 relative z-10 flex flex-col md:flex-row gap-4 md:items-center justify-between">
          <div>
            <div className={cn("font-mono text-xl md:text-2xl mb-2", `text-${color}`)}>
              {event.time}
            </div>
            <h3 className="font-display text-2xl md:text-3xl text-white tracking-tight mb-2">
              {event.title}
            </h3>
            
            {/* Expandable description element */}
            <div 
              className={cn(
                "overflow-hidden transition-all duration-500",
                isExpanded || event.important ? "max-h-24 opacity-100 mt-2" : "max-h-0 opacity-0"
              )}
            >
              <p className="font-mono text-sm text-muted">{event.desc}</p>
            </div>
          </div>
          
          {event.important && (
             <div className={cn("shrink-0 animate-pulse hidden md:block", `text-${color}`)}>
               <Clock className="w-8 h-8" strokeWidth={1.5} />
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function ScheduleSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Draw the main vertical line
      if (lineRef.current) {
        gsap.to(lineRef.current, {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 80%",
            scrub: 1
          }
        });
      }

      // Stagger nodes in
      const nodes = gsap.utils.toArray('.timeline-node') as HTMLElement[];
      nodes.forEach((node) => {
        gsap.to(node, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: node,
            start: "top 85%"
          }
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen pt-32 pb-32 relative z-10">
      <div className="text-center mb-24 max-w-4xl mx-auto px-6">
        <h1 className="font-display text-5xl md:text-7xl mb-4">OPERATION TIMELINE</h1>
        <p className="font-mono text-cyan tracking-widest text-sm uppercase">48 Hours. No interruptions.</p>
      </div>

      <div ref={containerRef} className="max-w-5xl mx-auto px-6 md:px-12 relative flex">
        
        {/* The Master Timeline Line */}
        <div className="absolute top-0 bottom-0 left-[26px] md:left-[54px] w-[2px] bg-white/5 z-0" />
        <div 
          ref={lineRef}
          className="absolute top-0 bottom-0 left-[26px] md:left-[54px] w-[2px] z-10 origin-top bg-linear-to-b from-cyan via-violet to-acid"
          style={{ transform: "scaleY(0)" }}
        />

        <div className="w-full">
          {/* Day 1 Section */}
          <div className="mb-8 relative z-20 pl-12 md:pl-24">
            <div className="inline-flex items-center gap-4 bg-surface border border-cyan/30 px-6 py-3 box-glow-cyan">
              <Calendar className="w-5 h-5 text-cyan" />
              <div>
                <div className="font-mono text-cyan text-xs tracking-widest uppercase">Phase 1 & 2</div>
                <div className="font-display text-2xl text-white">DAY 1 — MARCH 22</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col mb-24">
            {day1.map((event, i) => <TimelineNode key={`d1-${i}`} event={event} />)}
          </div>

          {/* Day 2 Section */}
          <div className="mb-8 relative z-20 pl-12 md:pl-24">
            <div className="inline-flex items-center gap-4 bg-surface border border-acid/30 px-6 py-3 box-glow-acid">
              <Calendar className="w-5 h-5 text-acid" />
              <div>
                <div className="font-mono text-acid text-xs tracking-widest uppercase">Phase 2 & 3</div>
                <div className="font-display text-2xl text-white">DAY 2 — MARCH 23</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            {day2.map((event, i) => <TimelineNode key={`d2-${i}`} event={event} />)}
          </div>
        </div>
      </div>
    </main>
  );
}
