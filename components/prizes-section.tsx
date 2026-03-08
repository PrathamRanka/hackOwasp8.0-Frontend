"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Trophy, Medal, Award, Zap, Code, Shield, Cpu } from "lucide-react";

// Helper component for counting numbers
const Counter = ({ target, duration }: { target: number, duration: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    let isMounted = true;
    
    ScrollTrigger.create({
      trigger: ref.current,
      start: "top 85%",
      onEnter: () => {
        const current = { val: 0 };
        gsap.to(current, {
          val: target,
          duration: duration,
          ease: "power2.out",
          onUpdate: () => {
            if (isMounted) setCount(Math.floor(current.val));
          }
        });
      }
    });

    return () => { isMounted = false; };
  }, [target, duration]);

  return <span ref={ref}>{count.toLocaleString('en-IN')}</span>;
};

export default function PrizesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Podium cards entrance
      gsap.fromTo(".podium-card", 
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: ".podium-section",
            start: "top 70%"
          }
        }
      );

      // Special cards entrance
      gsap.fromTo(".special-card",
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: "power2.out",
          scrollTrigger: {
            trigger: ".special-section",
            start: "top 80%"
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen pt-32 pb-24 relative z-10 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-24">
         <h1 className="font-display text-5xl md:text-7xl mb-4">THE LOOT</h1>
         <p className="font-mono text-cyan tracking-widest text-sm uppercase">Over ₹1,50,000 in Prizes</p>
      </div>

      {/* Main Podium */}
      <section className="podium-section flex flex-col md:flex-row items-end justify-center gap-6 mb-32 h-auto md:h-[500px]">
        {/* Runner Up */}
        <div className="podium-card order-2 md:order-1 w-full md:w-1/3 bg-surface border-t-4 border-[#C0C0C0] p-8 h-[380px] flex flex-col justify-between group hover:-translate-y-2 transition-transform shadow-[0_0_30px_rgba(192,192,192,0.1)] relative">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(192,192,192,0.15)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity" />
           
           <div className="relative z-10">
              <Medal className="w-12 h-12 text-[#C0C0C0] mb-6" />
              <h2 className="font-mono text-muted tracking-widest text-sm uppercase mb-2">Runner Up</h2>
              <div className="font-display text-5xl text-white mb-6">₹<Counter target={40000} duration={2} /></div>
           </div>
           
           <ul className="relative z-10 space-y-3 font-mono text-sm text-muted">
             <li className="flex items-center gap-2"><span className="text-[#C0C0C0]">+</span> Goodies</li>
             <li className="flex items-center gap-2"><span className="text-[#C0C0C0]">+</span> Fast-track interviews</li>
           </ul>
        </div>

        {/* Winner */}
        <div className="podium-card order-1 md:order-2 w-full md:w-[40%] bg-surface border-t-4 border-[#FFD700] p-10 h-[460px] flex flex-col justify-between group hover:-translate-y-4 transition-transform shadow-[0_0_50px_rgba(255,215,0,0.15)] relative">
           {/* Crown particle effect */}
           <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-[radial-gradient(ellipse_at_center,rgba(255,215,0,0.4)_0%,transparent_70%)] rounded-full animate-pulse pointer-events-none" />
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.15)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity" />
           
           <div className="relative z-10 text-center flex flex-col items-center">
              <Trophy className="w-16 h-16 text-[#FFD700] mb-6 drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]" />
              <h2 className="font-mono text-[#FFD700] tracking-widest text-sm uppercase mb-2">CHAMPION</h2>
              <div className="font-display text-6xl text-white mb-8">₹<Counter target={75000} duration={2.5} /></div>
           </div>
           
           <ul className="relative z-10 space-y-3 font-mono text-sm text-white/80 border-t border-white/10 pt-6">
             <li className="flex items-center gap-3"><span className="text-[#FFD700]">◆</span> Internship Referrals</li>
             <li className="flex items-center gap-3"><span className="text-[#FFD700]">◆</span> Premium Swag Kit</li>
             <li className="flex items-center gap-3"><span className="text-[#FFD700]">◆</span> Overall Trophy</li>
           </ul>
        </div>

        {/* 2nd Runner Up */}
        <div className="podium-card order-3 w-full md:w-1/3 bg-surface border-t-4 border-[#CD7F32] p-8 h-[340px] flex flex-col justify-between group hover:-translate-y-2 transition-transform shadow-[0_0_30px_rgba(205,127,50,0.1)] relative">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(205,127,50,0.15)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity" />
           
           <div className="relative z-10">
              <Award className="w-12 h-12 text-[#CD7F32] mb-6" />
              <h2 className="font-mono text-muted tracking-widest text-sm uppercase mb-2">2nd Runner Up</h2>
              <div className="font-display text-4xl text-white mb-6">₹<Counter target={25000} duration={1.5} /></div>
           </div>
           
           <ul className="relative z-10 space-y-3 font-mono text-sm text-muted">
             <li className="flex items-center gap-2"><span className="text-[#CD7F32]">+</span> Swag kit</li>
             <li className="flex items-center gap-2"><span className="text-[#CD7F32]">+</span> Honorable Mentions</li>
           </ul>
        </div>
      </section>

      {/* Special Category Prizes */}
      <section className="special-section">
        <div className="flex items-center gap-4 mb-12 border-b border-white/10 pb-4">
          <div className="w-2 h-2 bg-violet animate-pulse" />
          <h2 className="font-mono text-white text-sm tracking-widest uppercase">Special Categories</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "BEST ROOKIE HACK", price: 10000, desc: "For first-time hackers", icon: <Zap className="text-violet" /> },
            { title: "MOST CREATIVE HACK", price: 10000, desc: "For unconventional approach", icon: <Code className="text-violet" /> },
            { title: "BEST USE OF AI", price: 10000, desc: "For best LLM/ML integration", icon: <Cpu className="text-violet" /> },
            { title: "BEST MITIGATION", price: 8000, desc: "Best defensive architecture", icon: <Shield className="text-cyan" /> },
            { title: "COMMUNITY CHOICE", price: 5000, desc: "Voted by participants", icon: <Award className="text-acid" /> },
            { title: "SPONSOR PRIZES", price: 0, desc: "To Be Announced", icon: <Trophy className="text-ember" /> },
          ].map((cat, i) => (
            <div key={i} className="special-card bg-surface border-t-2 border-violet/50 p-6 flex flex-col group relative overflow-hidden transition-all duration-300 hover:border-violet hover:box-glow-violet">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-violet)_0%,transparent_70%)] opacity-0 group-hover:opacity-10 transition-opacity" />
              
              <div className="relative z-10 flex justify-between items-start mb-6">
                 {cat.icon}
                 <h3 className="font-mono text-xs text-muted max-w-[120px] text-right">{cat.desc}</h3>
              </div>
              
              <div className="relative z-10 mt-auto">
                <h4 className="font-display text-2xl text-white mb-2">{cat.title}</h4>
                <div className="font-mono text-cyan text-xl">
                  {cat.price > 0 ? <>₹<Counter target={cat.price} duration={1.5} /></> : "TBA"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
