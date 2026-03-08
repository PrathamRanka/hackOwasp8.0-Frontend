"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Lock, Cpu, Repeat, Network } from "lucide-react";

export default function TracksSection() {
  const [activeTrack, setActiveTrack] = useState<number | null>(0); // First track expanded by default on desktop

  const tracks = [
    {
      num: "01",
      title: "WEB SECURITY",
      theme: "Breach. Patch. Repeat.",
      color: "cyan",
      icon: <Lock className="w-16 h-16 text-cyan mb-8" strokeWidth={1} />,
      points: [
        "OWASP Top 10 vulnerability exploitation",
        "XSS, SQLi, CSRF attack surface mapping",
        "Secure authentication bypass challenges",
        "API security and rate-limit evasion"
      ]
    },
    {
      num: "02",
      title: "AI SECURITY",
      theme: "The model is the vulnerability.",
      color: "acid",
      icon: <Cpu className="w-16 h-16 text-acid mb-8" strokeWidth={1} />,
      points: [
        "Prompt injection and jailbreaking",
        "Adversarial ML attacks on image classifiers",
        "Data poisoning detection systems",
        "LLM guardrail circumvention + patching"
      ]
    },
    {
      num: "03",
      title: "BLOCKCHAIN SEC",
      theme: "Trustless. Until it isn't.",
      color: "violet",
      icon: <Repeat className="w-16 h-16 text-violet mb-8" strokeWidth={1} />,
      points: [
        "Smart contract vulnerability auditing",
        "Reentrancy and flash loan attacks",
        "Wallet key management security",
        "DeFi protocol exploit simulation"
      ]
    },
    {
      num: "04",
      title: "OPEN INNOVATION",
      theme: "No constraints. No excuses.",
      color: "ember",
      icon: <Network className="w-16 h-16 text-ember mb-8" strokeWidth={1} />,
      points: [
        "Build your own cybersec tool",
        "CTF challenge creation",
        "Security awareness platforms",
        "Threat intelligence dashboards"
      ]
    }
  ];

  return (
    <main className="min-h-screen pt-24 pb-0 md:h-screen md:overflow-hidden md:flex md:flex-col relative z-10">
      
      {/* Header */}
      <div className="px-6 md:px-12 py-8 flex-shrink-0">
         <h1 className="font-display text-5xl md:text-7xl uppercase tracking-[-0.04em]">
           Select Your Target
         </h1>
      </div>

      {/* Accordion / Flex Area */}
      <div className="flex flex-col md:flex-row flex-1 h-full w-full">
        {tracks.map((track, i) => {
          const isActive = activeTrack === i;
          
          return (
            <div 
              key={i}
              onMouseEnter={() => setActiveTrack(i)}
              className={cn(
                "group relative border-t md:border-t-0 md:border-l border-white/10 transition-[flex-basis,background-color] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col overflow-hidden cursor-crosshair",
                isActive ? "md:basis-[52vw] bg-[#090f1d] z-20 shadow-[-20px_0_40px_rgba(0,0,0,0.5)]" : "md:basis-[16vw] bg-surface/50 hover:bg-surface",
                // Mobile layout height management
                isActive ? "h-[500px] md:h-auto" : "h-[100px] md:h-auto"
              )}
            >
               {/* Left accent line on active */}
               <div className={cn(
                 "absolute left-0 top-0 bottom-0 w-1 transition-opacity duration-300",
                 isActive ? "opacity-100" : "opacity-0",
                 `bg-${track.color}`
               )} />

               <div className="p-8 md:p-12 flex flex-col h-full z-10 w-[100vw] md:w-auto relative">
                 <div className="flex items-center gap-6 mb-8 w-full md:w-[50vw]">
                   <span className="font-mono text-muted text-2xl tracking-widest leading-none">
                     {track.num}
                   </span>
                   
                   {/* Title that always stays somewhat visible or fully visible */}
                   <h2 className={cn(
                     "font-display text-2xl md:text-4xl uppercase whitespace-nowrap transition-colors duration-300 w-[50vw]",
                     isActive ? "text-white" : "text-muted group-hover:text-white/80"
                   )}>
                     {track.title}
                   </h2>
                 </div>

                 {/* Content that reveals on active */}
                 <div className={cn(
                    "transition-all duration-500 flex flex-col h-full w-[85vw] md:w-[45vw]",
                    isActive ? "opacity-100 translate-x-0 delay-200" : "opacity-0 -translate-x-8 pointer-events-none absolute"
                 )}>
                   {track.icon}
                   <p className="font-mono text-white/50 mb-8 uppercase tracking-widest text-sm">
                     {track.theme}
                   </p>

                   <ul className="space-y-4 mb-auto">
                     {track.points.map((pt, ptIdx) => (
                       <li key={ptIdx} className="flex items-start gap-4">
                         <span className={cn("mt-1.5 w-1 h-3 shrink-0", `bg-${track.color}`)} />
                         <span className="text-muted md:text-lg">{pt}</span>
                       </li>
                     ))}
                   </ul>

                   <div className="mt-12 flex items-center gap-4">
                     <button className={cn(
                       "border px-6 py-3 font-mono text-xs uppercase tracking-widest hover:bg-white/5 transition-colors",
                       `text-${track.color} border-${track.color}/30`
                     )}>
                       Explore Problems →
                     </button>
                   </div>
                 </div>
               </div>

               {/* Large Background Icon on Inactive */}
               <div className={cn(
                 "absolute right-[-20%] bottom-[-5%] transition-all duration-700 pointer-events-none opacity-5",
                 isActive ? "scale-150 rotate-12" : "scale-100 rotate-0 grayscale"
               )}>
                 <span className={cn(`text-${track.color}`)}>
                   {/* Giant icon copy */}
                   {track.icon}
                 </span>
               </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
