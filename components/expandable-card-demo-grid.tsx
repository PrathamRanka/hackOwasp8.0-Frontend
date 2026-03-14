"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

export default function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref as React.RefObject<HTMLDivElement>, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm h-full w-full z-90"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-neutral-900/95 backdrop-blur-2xl sm:rounded-3xl overflow-hidden border border-white/10"
            >
              <motion.div className="w-full">
                <div className={`w-full h-32 sm:h-40 lg:h-60 sm:rounded-tr-lg sm:rounded-tl-lg flex items-center justify-center overflow-hidden relative ${active.bgLight}`}>
                   {/* Background Icon */}
                   <span className={`material-symbols-outlined absolute text-[200px] opacity-[0.05] ${active.textCol}`}>
                     {active.icon}
                   </span>
                   <span className={`material-symbols-outlined text-6xl ${active.textCol} drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]`}>
                     {active.smallIcon}
                   </span>
                </div>
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-6 pb-2">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-black text-white text-2xl font-inter tracking-tight"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className={`font-bold text-base mt-1 ${active.textCol}`}
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className={`px-4 py-2 text-xs uppercase tracking-widest font-bold rounded-xl transition-all border border-white/10 hover:text-white ${active.bgLight} ${active.textCol} ${active.bgHover}`}
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-6 pb-6">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-400 text-sm h-60 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto font-mono leading-relaxed [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 w-full">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            whileHover={{ y: -5, scale: 1.02 }}
            className={`
              relative overflow-hidden group cursor-pointer
              bg-black/40 backdrop-blur-xl border border-white/5
              rounded-2xl border-l-[6px] p-5 sm:p-8
              ${card.color} ${card.shadow}
            `}
          >
            {/* Background Icon (Low opacity) */}
            <div className="absolute -right-8 -top-8 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-300 pointer-events-none">
              <span className={`material-symbols-outlined text-9xl ${card.textCol}`}>{card.icon}</span>
            </div>

            {/* Header / Badges */}
            <div className="flex justify-between items-start mb-6">
              <motion.div>
                 <div className={`p-2.5 rounded-lg border border-white/10 ${card.bgLight} ${card.textCol}`}>
                   <span className="material-symbols-outlined">{card.smallIcon}</span>
                 </div>
              </motion.div>
              <span className={`text-[10px] md:text-xs font-mono border border-white/10 px-2.5 py-1 rounded bg-black/50 ${card.textCol} opacity-80 uppercase tracking-widest`}>
                {card.trackId}
              </span>
            </div>

            {/* Content */}
            <motion.h3
              layoutId={`title-${card.title}-${id}`}
              className="text-xl md:text-2xl font-black text-white mb-1 font-inter tracking-tight"
            >
              {card.title}
            </motion.h3>
            <motion.p
              layoutId={`description-${card.description}-${id}`}
              className={`text-sm md:text-base font-bold mb-4 ${card.textCol}`}
            >
              {card.description}
            </motion.p>
            <p className="text-zinc-400 font-mono text-xs md:text-sm leading-relaxed mb-8">
              {card.shortDesc}
            </p>

            {/* Action Button */}
            <div className={`
              mt-auto w-full py-3.5 rounded-xl border border-white/10 
              font-bold tracking-widest text-xs uppercase text-center
              transition-all duration-300 backdrop-blur-sm pointer-events-none
              ${card.bgLight} ${card.textCol} group-hover:bg-${card.color.replace('border-', '')} group-hover:text-white
            `}>
              Explore Track <span className="ml-2">→</span>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    trackId: "BLOCKCHAIN_01",
    description: "Decentralized Vault",
    title: "Blockchain",
    src: "https://images.unsplash.com/photo-1639762681485-074b7f4ec651?q=80&w=3270&auto=format&fit=crop",
    ctaText: "Explore Track",
    ctaLink: "#",
    shortDesc: "Breach smart contracts and exploit consensus mechanisms in a sandboxed DeFi environment. Build trustless, decentralized systems.",
    color: "border-purple-500",
    bgLight: "bg-purple-500/20",
    bgHover: "hover:bg-purple-500 hover:text-white",
    textCol: "text-purple-500",
    shadow: "shadow-[0_0_15px_rgba(168,85,247,0.15)]",
    icon: "token",
    smallIcon: "shield_lock",
    content: () => {
      return (
        <p>
          The Blockchain track challenges you to build trustless, decentralized
          systems that redefine how we interact with digital assets and data.
          Whether it&apos;s smart contracts, decentralized finance (DeFi), or secure
          identity solutions, this is your arena to innovate. <br /> <br /> Build
          tamper-proof applications, optimize consensus mechanisms, and solve
          real-world scalability issues. From Web3 infrastructure to innovative
          dApps, push the boundaries of distributed ledger technology and build
          the foundation of a new, transparent digital economy.
        </p>
      );
    },
  },
  {
    trackId: "NEURAL_AI_02",
    description: "Adversarial Intelligence",
    title: "Artificial Intelligence",
    src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=3270&auto=format&fit=crop",
    ctaText: "Explore Track",
    ctaLink: "#",
    shortDesc: "Manipulate training data and poison neural networks. Build systems that learn, adapt, and solve complex problems autonomously.",
    color: "border-cyan-500",
    bgLight: "bg-cyan-500/20",
    bgHover: "hover:bg-cyan-500 hover:text-white",
    textCol: "text-cyan-500",
    shadow: "shadow-[0_0_15px_rgba(6,182,212,0.15)]",
    icon: "psychology",
    smallIcon: "memory",
    content: () => {
      return (
        <p>
          Dive into the frontier of machine learning, neural networks, and
          generative models. The AI track is for those who want to build systems
          that can learn, adapt, and solve complex problems autonomously.
          <br /> <br /> Develop intelligent agents, computer vision applications,
          or natural language processing tools. We are looking for solutions that
          leverage AI for social good, automate intricate workflows, or push the
          state-of-the-art in predictive analytics and intelligent automation.
        </p>
      );
    },
  },
  {
    trackId: "INFRA_SEC_03",
    description: "Ghost Network",
    title: "Cybersecurity",
    src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=3270&auto=format&fit=crop",
    ctaText: "Explore Track",
    ctaLink: "#",
    shortDesc: "Traditional penetration testing across hybrid cloud infrastructures and air-gapped systems. Think like an attacker, defend the grid.",
    color: "border-emerald-500",
    bgLight: "bg-emerald-500/20",
    bgHover: "hover:bg-emerald-500 hover:text-white",
    textCol: "text-emerald-500",
    shadow: "shadow-[0_0_15px_rgba(16,185,129,0.15)]",
    icon: "security",
    smallIcon: "android_fingerprint",
    content: () => {
      return (
        <p>
          The core of HackOWASP. This track is dedicated to securing the digital
          frontier. Build innovative defensive tools, threat detection systems,
          or novel encryption methodologies to protect critical infrastructure.
          <br /> <br /> Whether it&apos;s a zero-trust architecture, automated
          vulnerability scanners, or privacy-preserving applications, your goal is
          to outsmart the adversaries. Think like an attacker, build like a
          defender, and create solutions that ensure the integrity and resilience
          of tomorrow&apos;s systems.
        </p>
      );
    },
  },
  {
    trackId: "KNOWLEDGE_04",
    description: "Project Prometheus",
    title: "EdTech",
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=3200&auto=format&fit=crop",
    ctaText: "Explore Track",
    ctaLink: "#",
    shortDesc: "Secure student data and harden digital learning platforms. Create solutions that personalize and gamify the future of education.",
    color: "border-amber-500",
    bgLight: "bg-amber-500/20",
    bgHover: "hover:bg-amber-500 hover:text-white",
    textCol: "text-amber-500",
    shadow: "shadow-[0_0_15px_rgba(245,158,11,0.15)]",
    icon: "school",
    smallIcon: "auto_stories",
    content: () => {
      return (
        <p>
          Education is evolving. The EdTech track focuses on bridging gaps in
          learning through technology. Create platforms that democratize access
          to knowledge, personalize learning experiences, or gamify education.
          <br /> <br /> Build interactive tools for remote learning, leverage AI
          for personalized tutoring, or develop accessible platforms for underserved
          communities. We want solutions that empower students and teachers alike,
          making learning more engaging, effective, and inclusive.
        </p>
      );
    },
  },
  {
    trackId: "VITAL_SIGN_05",
    description: "Pulse Guardian",
    title: "MedTech",
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=3270&auto=format&fit=crop",
    ctaText: "Explore Track",
    ctaLink: "#",
    shortDesc: "Defend life-critical IoT medical devices from remote interception and signal jamming. Enhance patient care through secure tech.",
    color: "border-rose-500",
    bgLight: "bg-rose-500/20",
    bgHover: "hover:bg-rose-500 hover:text-white",
    textCol: "text-rose-500",
    shadow: "shadow-[0_0_15px_rgba(244,63,94,0.15)]",
    icon: "medical_services",
    smallIcon: "monitor_heart",
    content: () => {
      return (
        <p>
          The MedTech track challenges you to apply technology to save lives and
          improve healthcare delivery. Build solutions that enhance patient care,
          streamline medical research, or optimize hospital operations.
          <br /> <br /> From wearable health monitors and telemedicine platforms
          to AI-driven diagnostics and secure management of patient records, your
          innovations can have a profound impact. Combine medical insight with
          technical prowess to tackle some of the most pressing challenges in
          modern healthcare.
        </p>
      );
    },
  },
];
