"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

const sponsorTiers = [
  {
    tier: "TITLE SPONSORS",
    color: "acid",
    size: "large",
    sponsors: [
      { name: "Acme Cyber", hasBadge: true },
      { name: "NullSec Corp", hasBadge: true },
    ]
  },
  {
    tier: "GOLD SPONSORS",
    color: "cyan",
    size: "medium",
    sponsors: [
      { name: "DefendX" },
      { name: "CloudShield" },
      { name: "NetGuard" },
      { name: "Zero Trust Ltd." },
    ]
  },
  {
    tier: "SILVER SPONSORS",
    color: "violet",
    size: "small",
    sponsors: [
      { name: "Cryptic Networks" },
      { name: "Patch Day" },
      { name: "PhishNet" },
      { name: "NodeSec" },
      { name: "ByteDefenders" },
      { name: "SecOps Pro" },
    ]
  },
  {
    tier: "COMMUNITY PARTNERS",
    color: "muted",
    size: "xsmall",
    sponsors: [
      { name: "HackTheBox" },
      { name: "TryHackMe" },
      { name: "OffSec" },
      { name: "Local DefCon" },
    ]
  }
];

export default function SponsorsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      const tiers = gsap.utils.toArray('.sponsor-tier') as HTMLElement[];
      
      tiers.forEach((tier) => {
        const cards = tier.querySelectorAll('.sponsor-card');
        gsap.fromTo(cards,
          { opacity: 0, y: 30, scale: 0.9 },
          {
            opacity: 1, y: 0, scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: tier,
              start: "top 85%"
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen pt-32 pb-32 relative z-10">
      <div className="text-center mb-24">
        <h1 className="font-display text-5xl md:text-7xl mb-4 text-white hover:text-cyan transition-colors">THE SYNDICATE</h1>
        <p className="font-mono text-muted tracking-widest text-sm uppercase">Entities funding the operation</p>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {sponsorTiers.map((tierGroup, i) => (
          <section key={i} className="sponsor-tier mb-24 last:mb-0">
            {/* Tier Header */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className={cn("h-px flex-1 bg-linear-to-r from-transparent", `to-${tierGroup.color}`)} />
              <h2 className={cn("font-display text-xl md:text-2xl tracking-widest uppercase", `text-${tierGroup.color}`)}>
                ◈ {tierGroup.tier} ◈
              </h2>
              <div className={cn("h-px flex-1 bg-linear-to-l from-transparent", `to-${tierGroup.color}`)} />
            </div>

            {/* Grid wrapper based on size */}
            <div className={cn(
              "grid gap-6 justify-center",
              tierGroup.size === 'large' ? "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto" : 
              tierGroup.size === 'medium' ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4" :
              tierGroup.size === 'small' ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-6" :
              "grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
            )}>
              {tierGroup.sponsors.map((sponsor, j) => (
                <div 
                  key={j}
                  className={cn(
                    "sponsor-card relative flex items-center justify-center bg-surface border border-white/5 rounded-sm overflow-hidden group transition-all duration-300",
                    "hover:scale-[1.04] hover:border-cyan hover:box-glow-cyan hover:z-10 bg-blend-luminosity grayscale hover:grayscale-0",
                    tierGroup.size === 'large' ? "h-[200px] md:h-[280px]" :
                    tierGroup.size === 'medium' ? "h-[120px] md:h-[150px]" :
                    tierGroup.size === 'small' ? "h-[100px] md:h-[120px]" :
                    "h-[80px]"
                  )}
                >
                  {/* Subtle hover background radial */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-cyan)_0%,_transparent_70%)] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  
                  {/* Text Placeholder for Logo */}
                  <div className="font-display text-white/50 group-hover:text-white transition-colors text-center px-4">
                     <span className={cn(
                       tierGroup.size === 'large' ? "text-3xl md:text-4xl" : "text-xl"
                     )}>
                       {sponsor.name}
                     </span>
                  </div>

                  {/* Title Partner Badge */}
                  {(sponsor as { hasBadge?: boolean }).hasBadge && (
                    <div className="absolute top-4 right-4 bg-acid/10 border border-acid/30 text-acid font-mono text-[10px] tracking-widest uppercase px-2 py-1">
                      Title Partner
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Call to Action for Sponsors */}
        <section className="sponsor-tier mt-32 max-w-4xl mx-auto">
          <a href="#" className="sponsor-card block w-full bg-surface border-2 border-dashed border-ember/30 hover:border-ember hover:box-glow-ember group transition-all duration-300 p-12 text-center rounded-sm">
            <h3 className="font-display text-3xl text-white mb-2">Want to hack the mainframe?</h3>
            <p className="font-mono text-muted text-sm tracking-widest mb-6">Become a Sponsor to get access</p>
            <span className="inline-block bg-ember text-bg-primary font-bold font-mono text-xs uppercase tracking-widest px-6 py-3 transition-transform group-hover:scale-105">
              Initiate Handshake →
            </span>
          </a>
        </section>
      </div>
    </main>
  );
}
