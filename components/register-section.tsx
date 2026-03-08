"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { GlowButton } from "@/components/ui/glow-button";
import TerminalCard from "@/components/ui/terminal-card";
import { CopyCheck, Users, CodeXml, Smile, MapPin, Scale } from "lucide-react";

export default function RegisterSection() {
  const [time, setTime] = useState({ d: 4, h: 12, m: 33, s: 7 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => {
        let { d, h, m, s } = prev;
        s -= 1;
        if (s < 0) { s = 59; m -= 1; }
        if (m < 0) { m = 59; h -= 1; }
        if (h < 0) { h = 23; d -= 1; }
        return { d, h, m, s };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const format = (n: number) => String(Math.max(0, n)).padStart(2, '0');

  useEffect(() => {
    // Reveal animation
    gsap.fromTo(".fade-in-up", 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out", delay: 0.5 }
    );
  }, []);

  return (
    <main className="min-h-screen pt-16 pb-32 relative z-10 flex flex-col">
      {/* Fixed Urgency Bar */}
      <div className="fixed top-0 left-0 w-full bg-ember/10 border-b border-ember/30 backdrop-blur-md z-50 py-2 hidden md:block">
        <div className="container mx-auto px-6 text-center font-mono text-ember text-sm tracking-widest uppercase">
          <span className="animate-pulse mr-4">⚠</span>
          REGISTRATION CLOSES IN: [ {format(time.d)}d : {format(time.h)}h : {format(time.m)}m : {format(time.s)}s ]
        </div>
      </div>

      <div className="flex-1 max-w-7xl mx-auto px-6 w-full flex flex-col justify-center mt-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          {/* Left Hero */}
          <div className="fade-in-up order-2 lg:order-1">
            <h2 className="font-mono text-cyan tracking-widest text-sm mb-6">{`// INITIATE SEQUENCE`}</h2>
            <h1 className="font-display text-5xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-tight mb-12 uppercase">
              Your Breach<br/>
              <span className="text-white/40">Starts Here.</span>
            </h1>

            <div className="flex flex-wrap gap-4">
               <div className="border border-white/10 bg-surface/50 px-4 py-2 font-mono text-xs uppercase tracking-widest text-muted">
                 [ Team Size: 2–4 ]
               </div>
               <div className="border border-white/10 bg-surface/50 px-4 py-2 font-mono text-xs uppercase tracking-widest text-muted">
                 [ Free to register ]
               </div>
               <div className="border border-cyan/30 bg-cyan/5 px-4 py-2 font-mono text-xs uppercase tracking-widest text-cyan">
                 [ On-site @ TIET ]
               </div>
            </div>
          </div>

          {/* Right Terminal Panel */}
          <div className="fade-in-up order-1 lg:order-2 w-full max-w-lg mx-auto lg:mx-0">
             <div className="relative">
               {/* Decorative background glow */}
               <div className="absolute -inset-4 bg-[radial-gradient(circle_at_center,var(--color-cyan)_0%,transparent_70%)] opacity-20 blur-xl pointer-events-none" />
               
               <TerminalCard 
                 title="REGISTRATION TERMINAL"
                 typingText={[
                   "establishing secure connection...",
                   "fetching event parameters...",
                   "[ OK ] parameters loaded."
                 ]}
                 typingSpeed={30}
                 className="shadow-2xl shadow-black/50"
               >
                 <div className="space-y-4 mb-8 text-sm md:text-base">
                   <div className="flex justify-between border-b border-white/5 pb-2">
                     <span className="text-muted">HACKATHON:</span>
                     <span className="text-white">HackOWASP 8.0</span>
                   </div>
                   <div className="flex justify-between border-b border-white/5 pb-2">
                     <span className="text-muted">DATE:</span>
                     <span className="text-white">March 22–23, 2025</span>
                   </div>
                   <div className="flex justify-between border-b border-white/5 pb-2">
                     <span className="text-muted">VENUE:</span>
                     <span className="text-white">TIET, Patiala</span>
                   </div>
                   <div className="flex justify-between border-b border-white/5 pb-2">
                     <span className="text-muted">TEAM SIZE:</span>
                     <span className="text-white">2 - 4 members</span>
                   </div>
                   <div className="flex justify-between border-b border-white/5 pb-2">
                     <span className="text-muted">FEE:</span>
                     <span className="text-acid">₹0.00 (Free)</span>
                   </div>
                   <div className="flex justify-between border-b border-white/5 pb-2">
                     <span className="text-muted">STATUS:</span>
                     <span className="text-cyan animate-pulse">REGISTRATIONS OPEN</span>
                   </div>
                 </div>

                 <div className="flex flex-col gap-4 mt-8 pt-4 border-t border-cyan/20">
                    <GlowButton variant="acid" className="w-full justify-center">
                      REGISTER ON DEVFOLIO →
                    </GlowButton>
                    <GlowButton variant="ghost" className="w-full justify-center border border-white/10 hover:border-white/30 text-xs">
                      JOIN DISCORD COMMUNITY →
                    </GlowButton>
                 </div>
               </TerminalCard>
             </div>
          </div>
        </div>

        {/* Rules Grid */}
        <div className="fade-in-up grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
           {[
             { title: "No plagiarism", desc: "Insta-ban offense.", icon: <CopyCheck className="text-ember mb-4" /> },
             { title: "On-site only", desc: "No remote hacking.", icon: <MapPin className="text-cyan mb-4" /> },
             { title: "Original work", desc: "Fresh code only.", icon: <CodeXml className="text-violet mb-4" /> },
             { title: "Team of 2–4", desc: "No lone wolves.", icon: <Users className="text-acid mb-4" /> },
             { title: "Open-source OK", desc: "Libraries permitted.", icon: <Smile className="text-muted mb-4" /> },
             { title: "Be respectful", desc: "Zero tolerance policy.", icon: <Scale className="text-white mb-4" /> },
           ].map((rule, i) => (
             <div key={i} className="bg-surface border border-white/5 p-6 hover:border-white/20 transition-colors">
               {rule.icon}
               <h4 className="font-display text-xl text-white mb-1 uppercase">{rule.title}</h4>
               <p className="font-mono text-muted text-xs tracking-widest uppercase">{rule.desc}</p>
             </div>
           ))}
        </div>

        {/* Social Proof Strip */}
        <div className="fade-in-up flex flex-col sm:flex-row items-center justify-center gap-6 py-12 border-t border-white/10 text-center sm:text-left">
           <div className="flex -space-x-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-bg-primary overflow-hidden relative grayscale opacity-70">
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/api/placeholder/100/100')` }} />
                </div>
              ))}
           </div>
           <div>
             <h3 className="font-display text-2xl text-white mb-1">Join 500+ hackers already registered.</h3>
             <p className="font-mono text-muted tracking-widest text-xs uppercase">+ 492 others preparing for the breach.</p>
           </div>
        </div>

      </div>
    </main>
  );
}
