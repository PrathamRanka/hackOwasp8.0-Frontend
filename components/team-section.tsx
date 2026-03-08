"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

const teamCategories = [
  {
    title: "Core Organizing Team",
    color: "cyan",
    members: [
      { name: "Alice Hacker", role: "Lead Organizer", photo: "/api/placeholder/400/533" },
      { name: "Bob Security", role: "Co-Lead", photo: "/api/placeholder/400/533" },
    ]
  },
  {
    title: "Technical Team",
    color: "acid",
    members: [
      { name: "Charlie Root", role: "Infrastructure", photo: "/api/placeholder/400/533" },
      { name: "Dave Null", role: "CTF Architect", photo: "/api/placeholder/400/533" },
      { name: "Eve Dropper", role: "Web Dev", photo: "/api/placeholder/400/533" },
      { name: "Frank Tank", role: "Blockchain", photo: "/api/placeholder/400/533" },
    ]
  },
  {
    title: "Design & Content Team",
    color: "violet",
    members: [
      { name: "Grace Hopper", role: "Creative Dir", photo: "/api/placeholder/400/533" },
      { name: "Heidi Pixel", role: "UI/UX", photo: "/api/placeholder/400/533" },
      { name: "Ivan Writer", role: "Content", photo: "/api/placeholder/400/533" },
    ]
  },
  {
    title: "Operations & Logistics",
    color: "ember",
    members: [
      { name: "Judy Ops", role: "Head of Ops", photo: "/api/placeholder/400/533" },
      { name: "Mallory Event", role: "Sponsorships", photo: "/api/placeholder/400/533" },
      { name: "Ned Network", role: "Logistics", photo: "/api/placeholder/400/533" },
    ]
  }
];

export default function TeamSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('.team-section') as HTMLElement[];
      
      sections.forEach((section) => {
        const cards = section.querySelectorAll('.team-card');
        gsap.fromTo(cards,
          { 
            y: 80, 
            opacity: 0, 
            rotationY: 15,
            transformPerspective: 1000
          },
          {
            y: 0,
            opacity: 1,
            rotationY: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: section,
              start: "top 80%"
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen pt-32 pb-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Classified Header */}
        <div className="mb-24 flex justify-center">
          <div className="border border-white/20 p-6 md:p-8 bg-surface/50 font-mono inline-block max-w-full relative shadow-[0_0_50px_rgba(255,77,0,0.05)]">
            {/* Stamp corners */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-ember" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-ember" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-ember" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-ember" />

            <div className="text-ember mb-2 text-xl md:text-2xl font-bold flex items-center gap-3 tracking-widest uppercase">
              <span className="animate-pulse">⚠</span>
              CLASSIFIED — CORE TEAM FILES
            </div>
            <div className="text-muted tracking-widest uppercase text-sm border-t border-white/10 pt-2 mt-2">
              ACCESS LEVEL: PUBLIC
            </div>
          </div>
        </div>

        {/* Team Sections */}
        {teamCategories.map((category, i) => (
          <section key={i} className="team-section mb-32 last:mb-0">
            <h2 className="font-display text-4xl mb-12 flex flex-col uppercase tracking-tight">
              <span className={cn("font-mono text-sm tracking-widest mb-2", `text-${category.color}`)}>
                {`// DIVISION ${String(i + 1).padStart(2, '0')}`}
              </span>
              {category.title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {category.members.map((member, j) => (
                <div 
                  key={j} 
                  className={cn(
                    "team-card group relative bg-surface border border-white/10 aspect-[3/4] flex flex-col overflow-hidden transition-all duration-500",
                    `hover:border-${category.color} hover:box-glow-${category.color}`
                  )}
                >
                  {/* Top Badge */}
                  <div className={cn(
                    "absolute top-4 right-4 z-20 font-mono text-[10px] tracking-widest uppercase px-2 py-1 border bg-surface/80 backdrop-blur-sm",
                    `text-${category.color} border-${category.color}/30`
                  )}>
                    {member.role.split(" ")[0]} 
                  </div>

                  {/* Top Half: Photo Phase */}
                  <div className="relative h-[65%] w-full overflow-hidden bg-[#0a0f18]">
                    {/* SVG Scanline Overlay - ALWAYS there but sweeps on hover */}
                    <div className="absolute inset-0 z-10 pointer-events-none mix-blend-overlay opacity-30 select-none">
                      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <pattern id="scanlines" width="4" height="4" patternUnits="userSpaceOnUse">
                            <rect width="4" height="2" fill="#fff" />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#scanlines)" />
                      </svg>
                    </div>

                    {/* Animated bright scanning line on hover */}
                    <div className={cn(
                       "absolute top-0 left-0 w-full h-[2px] z-10 shadow-[0_0_10px_currentColor] opacity-0 group-hover:opacity-100 group-hover:animate-[scanline_2s_linear_infinite]",
                       `bg-${category.color} text-${category.color}`
                    )} />

                    {/* Photo - Grayscale to Color */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-all duration-700 grayscale-[1] group-hover:grayscale-0 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                      style={{ backgroundImage: `url('${member.photo}')` }}
                    />

                    {/* Color tint overlay on hover */}
                    <div className={cn(
                      "absolute inset-0 mix-blend-color opacity-0 group-hover:opacity-20 transition-opacity duration-500",
                      `bg-${category.color}`
                    )} />
                  </div>

                  {/* Bottom Half: Info */}
                  <div className="relative h-[35%] p-6 flex flex-col justify-center border-t border-white/10 bg-surface z-20 group-hover:bg-[#0f1a30] transition-colors duration-500">
                    <h3 className="font-display text-2xl text-white mb-1 uppercase tracking-tight">{member.name}</h3>
                    <p className="font-mono text-muted text-xs tracking-widest uppercase">{member.role}</p>
                    
                    {/* Socials - Slide up on hover */}
                    <div className="absolute bottom-6 right-6 flex gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                      <a href="#" className="text-muted hover:text-white transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href="#" className="text-muted hover:text-white transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

      </div>
    </main>
  );
}
