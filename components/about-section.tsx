"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import Tag from "@/components/ui/tag";

// Mission Statement Section
const MissionSection = () => {
  const wordsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      const words = wordsRef.current?.querySelectorAll('.word');
      if (words) {
        gsap.fromTo(words, 
          { rotateX: 90, opacity: 0, y: 40 },
          {
            rotateX: 0,
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.08,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: wordsRef.current,
              start: "top 75%",
            }
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const quote = "We don't teach cybersecurity. We weaponize curiosity.".split(" ");

  return (
    <section className="min-h-screen flex items-center justify-center py-24 px-6 relative">
      <div 
        ref={wordsRef}
        className="max-w-5xl mx-auto flex flex-wrap justify-center gap-x-[3vw] gap-y-4 perspective-[1000px]"
      >
        {quote.map((word, i) => (
          <div 
            key={i} 
            className={cn(
              "word font-display text-[8rem] leading-[0.85] origin-bottom",
              word.includes("weaponize") ? "text-cyan text-glow-cyan" : "text-white"
            )}
            style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}
          >
            {word}
          </div>
        ))}
      </div>
    </section>
  );
};

// OWASP Explainer
const OwaspAccordion = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState(0); // first is open by default

  const letters = ["O", "W", "A", "S", "P"];
  const content = [
    { title: "Open", desc: "Our knowledge is free. Our community is global. Security through obscurity is dead; we build security through transparency." },
    { title: "Worldwide", desc: "Over 250 chapters globally. We are part of the largest grassroots cybersecurity organization on the planet." },
    { title: "Application", desc: "From web to mobile to AI, if it runs code, we figure out how to break it before the bad actors do." },
    { title: "Security", desc: "No fluff. No vendor pitches. Just raw technical truth about vulnerabilities, exploits, and defense mechanisms." },
    { title: "Project", desc: "Driven by volunteers, hackers, and engineers who care more about making the internet safe than making a profit." },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const letterEls = containerRef.current?.querySelectorAll('.owasp-letter');
      if (letterEls) {
        gsap.fromTo(letterEls,
          { opacity: 0, x: -50 },
          {
            opacity: 1, x: 0, duration: 1, stagger: 0.15,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 60%"
            }
          }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-16 md:gap-24">
        
        {/* Left Letters */}
        <div className="hidden md:flex flex-col items-center justify-between font-display text-muted/20 text-[10rem] leading-none select-none">
          {letters.map((l, i) => <div key={i} className="owasp-letter">{l}</div>)}
        </div>

        {/* Right Accordion */}
        <div className="flex-1 flex flex-col justify-center gap-4">
          <Tag className="mb-8">What is OWASP</Tag>
          
          {content.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i} 
                className={cn(
                  "border-l-2 pl-6 py-4 cursor-pointer transition-all duration-300 group",
                  isOpen ? "border-cyan bg-[rgba(0,200,255,0.03)]" : "border-white/10 hover:border-white/30"
                )}
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
              >
                <div className="flex items-center justify-between">
                  <h3 className={cn("font-display text-3xl transition-colors", isOpen ? "text-cyan" : "text-white group-hover:text-white/80")}>
                    {item.title}
                  </h3>
                  <Plus className={cn("w-6 h-6 transition-transform duration-500", isOpen ? "rotate-45 text-cyan" : "text-muted")} />
                </div>
                
                <div 
                  className="overflow-hidden transition-all duration-500"
                  style={{ maxHeight: isOpen ? "200px" : "0px", opacity: isOpen ? 1 : 0 }}
                >
                  <p className="text-muted text-lg mt-4 max-w-xl pr-8 pb-4">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Past Editions Timeline
const PastEditions = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);

  const editions = [
    { num: "7.0", year: "2024", stat: "3000+ Registrations", memory: "The AI Security era begins." },
    { num: "6.0", year: "2023", stat: "₹1,00,000 Prizepool", memory: "First hybrid post-pandemic edition." },
    { num: "5.0", year: "2022", stat: "1500+ Hackers", memory: "Web3/Blockchain track introduced." },
    { num: "4.0", year: "2021", stat: "2000+ Online", memory: "Massive virtual turnout." },
    { num: "3.0", year: "2020", stat: "800+ Hackers", memory: "The last pre-lockdown baseline." },
    { num: "2.0", year: "2019", stat: "500+ Hackers", memory: "Hardware hacking track debut." },
    { num: "1.0", year: "2018", stat: "200+ Hackers", memory: "First all-nighter hackathon at TIET." },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const matchMedia = gsap.matchMedia();

      matchMedia.add("(min-width: 1024px)", () => {
        const rowWidth = rowRef.current?.scrollWidth || 0;
        const viewportWidth = window.innerWidth;
        const moveAmount = rowWidth - viewportWidth + 100;

        if (moveAmount > 0) {
          gsap.to(rowRef.current, {
            x: -moveAmount,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              pin: true,
              scrub: 1,
              start: "top top",
              end: `+=${moveAmount}px`
            }
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-bg-secondary relative z-10 overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="px-6 lg:px-12 mb-16 max-w-[1400px] mx-auto w-full">
        <Tag className="mb-4">Historical Logs</Tag>
        <h2 className="font-display text-4xl md:text-5xl text-white">PAST EDITIONS</h2>
      </div>

      <div className="w-full relative">
        {/* Pulse Connector Line */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2 hidden lg:block" />
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-cyan -translate-y-1/2 hidden lg:block animate-[scanline_3s_ease-in-out_infinite] origin-left" style={{ transform: 'scaleX(0)' }} /> 
        {/* We'll just use the gradient scanline approach or static background with pulsing gradient */}
        
        <div 
          ref={rowRef} 
          className="flex flex-col lg:flex-row gap-8 px-6 lg:px-12 w-full lg:w-max relative z-10"
        >
          {editions.map((ed, i) => (
            <div key={i} className="relative bg-surface border border-white/10 p-8 w-full lg:w-[400px] shrink-0 overflow-hidden group hover:border-cyan/50 hover:box-glow-cyan transition-all duration-300">
              {/* Background massive number */}
              <div className="absolute -bottom-8 -right-4 font-display text-[12rem] leading-none text-muted/5 select-none pointer-events-none transition-transform group-hover:scale-110 duration-700">
                {ed.num}
              </div>
              
              <div className="font-mono text-cyan mb-2">{ed.year}</div>
              <h3 className="font-display text-4xl text-white mb-6">HackOWASP {ed.num}</h3>
              
              <div className="font-mono text-xs text-acid bg-acid/10 inline-block px-3 py-1 mb-4">
                {ed.stat}
              </div>
              <p className="text-muted tracking-wide text-sm">{ed.memory}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function AboutSection() {
  return (
    <main className="min-h-screen pt-24 pb-24">
      <MissionSection />
      
      {/* Data Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-surface border border-ember/30 p-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-ember)_0%,_transparent_70%)] opacity-0 group-hover:opacity-10 transition-opacity" />
            <div className="font-display text-6xl text-white mb-4">$10.5T</div>
            <div className="text-acid font-mono text-sm tracking-widest mb-2 uppercase">Annual Cost</div>
            <div className="text-muted text-sm">Cyber crime globally by 2025.</div>
          </div>
          <div className="bg-surface border border-ember/30 p-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-ember)_0%,_transparent_70%)] opacity-0 group-hover:opacity-10 transition-opacity" />
            <div className="font-display text-6xl text-white mb-4">3.5M</div>
            <div className="text-acid font-mono text-sm tracking-widest mb-2 uppercase">Unfilled Roles</div>
            <div className="text-muted text-sm">The global cybersecurity workforce gap.</div>
          </div>
          <div className="bg-surface border border-ember/30 p-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-ember)_0%,_transparent_70%)] opacity-0 group-hover:opacity-10 transition-opacity" />
            <div className="font-display text-6xl text-white mb-4">95%</div>
            <div className="text-acid font-mono text-sm tracking-widest mb-2 uppercase">Human Error</div>
            <div className="text-muted text-sm">Of breaches involve human configuration error.</div>
          </div>
        </div>
      </section>

      <OwaspAccordion />
      <PastEditions />
      
      {/* Organizing Club Stub */}
      <section className="py-32 px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <div className="flex-1">
          <Tag className="mb-4">Entity Profile</Tag>
          <h2 className="font-display text-5xl mb-6">CodeChef TIET</h2>
          <p className="text-muted text-lg mb-8">
            The coding club of Thapar Institute of Engineering and Technology. We build culture, conduct world-class hackathons, and shape the next generation of engineers and security researchers.
          </p>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4">
           {/* Achievement badges placeholder */}
           <div className="aspect-square bg-surface border border-white/10 flex flex-col items-center justify-center p-6 text-center group hover:box-glow-cyan hover:border-cyan/50 transition-all">
              <div className="font-display text-4xl text-cyan mb-2">10+</div>
              <div className="font-mono text-xs text-muted tracking-widest uppercase">Years Active</div>
           </div>
           <div className="aspect-square bg-surface border border-white/10 flex flex-col items-center justify-center p-6 text-center group hover:box-glow-violet hover:border-violet/50 transition-all">
              <div className="font-display text-4xl text-violet mb-2">50k+</div>
              <div className="font-mono text-xs text-muted tracking-widest uppercase">Community Reach</div>
           </div>
        </div>
      </section>
    </main>
  );
}
