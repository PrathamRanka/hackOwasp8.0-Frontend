"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { GlowButton } from "@/components/ui/glow-button";

const faqs = [
  { q: "Who can participate?", a: "Anyone who is curious about breaking systems. You don't need to be a TIET student. All university students and fresh graduates are welcome." },
  { q: "What's the team size?", a: "Teams must have between 2 and 4 members. Solo hackers are not permitted—security is a team sport." },
  { q: "Do I need to know cybersecurity?", a: "No prior experience is necessary, but a strong foundation in programming and networking will help. We have mentors and resources to guide rookies." },
  { q: "What should I bring?", a: "Your laptop, charger, student ID, and an ethernet cable if you have one. We'll handle the power strips, WiFi, food, and caffeine." },
  { q: "Will there be mentors?", a: "Yes. Industry experts in Web3, AI sec, and traditional red-teaming will be floating around to help you when you hit a wall." },
  { q: "What can I submit?", a: "Depending on your track, you might submit a patched vulnerability, a novel exploit script, a security tool, or a comprehensive audit report." },
  { q: "Is it online or offline?", a: "HackOWASP 8.0 is a strictly in-person event. The best hacks happen when you're physically locked in a room together." },
  { q: "Where will it be held?", a: "Thapar Institute of Engineering and Technology (TIET), Patiala. Exact venue details will be emailed to shortlisted teams." },
  { q: "What about food & accommodation?", a: "Food and beverages are covered for all 48 hours. Accommodation is provided for outstation teams in the university hostels." },
  { q: "How are projects judged?", a: "Impact, technical complexity, feasibility, and presentation. A working exploit is worth more than a dozen slideware ideas." },
  { q: "Can I use open-source libraries?", a: "Yes, but you must declare them. Plagiarism or submitting pre-built projects will result in an immediate permanent ban from all future events." },
  { q: "When do registrations close?", a: "March 15th, 23:59 IST. The portal will automatically lock. No exceptions." }
];

const fakeTerminalLogs = [
  "querying database cluster...",
  "SELECT * FROM users WHERE status='active'",
  "injecting payload: ' OR 1=1 --",
  "access granted.",
  "downloading sensitive_data.tar.gz",
  "decrypting AES-256 blocks",
  "establishing reverse shell to 192.168.1.104",
  "whoami -> root",
  "extracting shadow file",
  "cracking hashes... [12%]",
  "ping 8.8.8.8 -c 4",
  "traceroute ctf.codechef.in",
  "bypassing WAF rules",
  "connection closed by foreign host.",
  "re-initializing socket...",
  "listening on port 4444",
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Repeat logs to make it look infinite
  const logs = [...fakeTerminalLogs, ...fakeTerminalLogs, ...fakeTerminalLogs, ...fakeTerminalLogs];

  return (
    <main className="min-h-screen pt-32 pb-32 relative z-10">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Left Column (40%) - Aesthetic Terminal */}
          <div className="hidden lg:block lg:w-[40%] sticky top-32 h-[calc(100vh-160px)]">
            <h1 className="font-display text-7xl mb-12 uppercase tracking-tight">Decrypted Records</h1>
            
            <div className="bg-surface border border-white/5 h-[60%] overflow-hidden relative fade-mask-y p-6 opacity-60">
              {/* Animated terminal lines sliding up */}
              <div className="animate-[marqueeVertical_20s_linear_infinite] flex flex-col font-mono text-sm tracking-widest text-[#39FF14] space-y-4">
                {logs.map((log, i) => (
                  <div key={i} className="flex gap-4 opacity-70">
                    <span className="text-white/30">{String(i).padStart(4, '0')}</span>
                    <span>{log}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8">
              <p className="font-mono text-muted text-sm tracking-widest uppercase">
                Still have questions?
              </p>
              <a href="mailto:hello@codecheftiet.com" className="inline-block mt-4">
                <GlowButton variant="ghost" className="px-0! py-2! hover:border-b-2 font-mono">
                  CONTACT COMMAND CENTER -&gt;
                </GlowButton>
              </a>
            </div>
          </div>

          {/* Right Column (60%) - Actual FAQ Accordion */}
          <div className="w-full lg:w-[60%]">
             <h1 className="lg:hidden font-display text-5xl mb-12 uppercase tracking-tight">FAQ</h1>

             <div className="flex flex-col gap-4">
                {faqs.map((faq, i) => {
                  const isOpen = openIndex === i;
                  
                  return (
                    <div 
                      key={i} 
                      className={cn(
                        "border-l-2 pl-6 py-5 cursor-pointer transition-all duration-300 group",
                        isOpen ? "border-cyan bg-[rgba(0,200,255,0.03)]" : "border-white/10 hover:border-white/30"
                      )}
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                    >
                      <div className="flex items-center justify-between">
                        <h3 className={cn("font-display text-2xl md:text-3xl transition-colors", isOpen ? "text-cyan" : "text-white group-hover:text-white/80")}>
                          [{isOpen ? "-" : "Q"}] {faq.q}
                        </h3>
                        <Plus className={cn("shrink-0 w-6 h-6 transition-transform duration-500", isOpen ? "rotate-45 text-cyan" : "text-muted")} />
                      </div>
                      
                      <div 
                        className={cn(
                          "overflow-hidden transition-all duration-500",
                          isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                        )}
                      >
                        <p className="font-mono text-muted text-sm md:text-base mt-4 max-w-2xl pr-8 pb-4 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  );
                })}
             </div>
             
             {/* Mobile contact block */}
             <div className="mt-24 lg:hidden">
                <p className="font-mono text-muted text-sm tracking-widest uppercase text-center">
                  Still have questions?
                </p>
                <div className="flex justify-center mt-6">
                  <a href="mailto:hello@codecheftiet.com">
                    <GlowButton variant="ghost" className="font-mono border border-white/10">
                      CONTACT COMMAND CENTER
                    </GlowButton>
                  </a>
                </div>
             </div>
          </div>

        </div>
      </div>
    </main>
  );
}
