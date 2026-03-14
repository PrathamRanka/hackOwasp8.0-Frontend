"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

export default function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(false);
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

  // Explicit bento grid placement: [Blockchain wide] [AI tall] [Cyber] [EdTech] [MedTech full]
  const bentoClasses = [
    "md:col-start-1 md:col-span-2 md:row-start-1",  // 0 — wide
    "md:col-start-3 md:row-start-1 md:row-span-2",  // 1 — tall
    "md:col-start-1 md:row-start-2",                // 2 — square
    "md:col-start-2 md:row-start-2",                // 3 — square
    "md:col-start-1 md:col-span-3 md:row-start-3",  // 4 — full width
  ];

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-md h-full w-full z-90"
          />
        )}
      </AnimatePresence>

      {/* Expanded modal */}
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-100">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex fixed right-4 top-[max(1rem,env(safe-area-inset-top))] z-120 h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/95 shadow-lg md:hidden"
              aria-label="Close track details"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>

            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-lg h-full md:h-fit md:max-h-[88%] flex flex-col bg-zinc-950 sm:rounded-2xl overflow-hidden border border-white/10"
            >
              {/* Thin accent stripe */}
              <div className={`w-full h-0.75 ${active.accent}`} />

              <div className="p-7 flex-1 overflow-auto overscroll-contain touch-pan-y [scrollbar-width:none] [-webkit-overflow-scrolling:touch]">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <span className={`text-[11px] font-mono tracking-[0.18em] uppercase ${active.textCol} opacity-50`}>
                      {active.trackNum}
                    </span>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="text-3xl font-black text-white mt-1 tracking-tight"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className={`text-sm font-semibold mt-1 ${active.textCol}`}
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
                    className={`shrink-0 ml-4 px-4 py-2 text-xs uppercase tracking-widest font-bold rounded-lg border transition-colors ${active.textCol} border-current hover:bg-white/10`}
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-zinc-400 text-sm leading-loose"
                >
                  {typeof active.content === "function" ? active.content() : active.content}
                </motion.div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* Bento grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full"
        style={{ gridAutoRows: "minmax(220px, auto)" }}
      >
        {cards.map((card, index) => {
          const isWide = index === 0;
          const isTall = index === 1;
          const isFullWidth = index === 4;

          return (
            <motion.div
              layoutId={`card-${card.title}-${id}`}
              key={card.title}
              onClick={() => setActive(card)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActive(card);
                }
              }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.99 }}
              role="button"
              tabIndex={0}
              aria-label={`Open ${card.title} track details`}
              className={[
                "relative overflow-hidden group cursor-pointer select-none",
                "bg-zinc-950 border border-white/[0.07] hover:border-white/20",
                "rounded-2xl transition-colors duration-300 flex flex-col",
                bentoClasses[index],
                isFullWidth ? "min-h-40" : isTall ? "min-h-110 md:min-h-0" : "min-h-55",
              ].join(" ")}
            >
              {/* Accent stripe */}
              <div className={`w-full h-0.5 ${card.accent} opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className={`flex-1 p-6 flex ${isFullWidth ? "flex-col md:flex-row md:items-center md:gap-16" : "flex-col"}`}>
                {/* Number + icon row */}
                <div className={`flex justify-between items-center ${isFullWidth ? "md:block md:shrink-0 md:w-28" : "mb-auto"}`}>
                  <span className="text-[11px] font-mono text-white/15 tracking-[0.2em] select-none">
                    {card.trackNum}
                  </span>
                  <span className={`material-symbols-outlined ${isWide || isTall ? "text-4xl" : "text-3xl"} ${card.textCol} opacity-20 group-hover:opacity-50 transition-opacity duration-300`}>
                    {card.smallIcon}
                  </span>
                </div>

                {/* Content */}
                <div className={`flex-1 ${isFullWidth ? "" : "mt-6"}`}>
                  <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className={`font-black text-white tracking-tight leading-none ${
                      isWide ? "text-3xl md:text-[2.5rem]" :
                      isTall ? "text-3xl md:text-4xl" :
                      "text-2xl md:text-3xl"
                    }`}
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${card.description}-${id}`}
                    className={`text-[11px] font-mono mt-2 tracking-[0.15em] uppercase ${card.textCol} opacity-60`}
                  >
                    {card.description}
                  </motion.p>
                  <p className={`text-zinc-600 text-xs leading-relaxed mt-4 group-hover:text-zinc-500 transition-colors duration-300 ${isFullWidth ? "md:max-w-2xl" : ""}`}>
                    {card.shortDesc}
                  </p>
                </div>

                {/* Hover CTA */}
                <div className={isFullWidth ? "md:shrink-0" : "mt-5"}>
                  <span className={`inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest ${card.textCol} opacity-0 group-hover:opacity-70 transition-opacity duration-300`}>
                    Explore <span className="text-base leading-none">→</span>
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}

export const CloseIcon = () => (
  <motion.svg
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, transition: { duration: 0.05 } }}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 text-black"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M18 6l-12 12" />
    <path d="M6 6l12 12" />
  </motion.svg>
);

const cards = [
  {
    trackNum: "01",
    description: "Decentralized Vault",
    title: "Blockchain",
    ctaText: "Explore Track",
    ctaLink: "#",
    shortDesc: "Breach smart contracts and exploit consensus mechanisms in a sandboxed DeFi environment. Build trustless, decentralized systems.",
    accent: "bg-purple-500",
    textCol: "text-purple-400",
    smallIcon: "shield_lock",
    content: () => (
      <p>
        The Blockchain track challenges you to build trustless, decentralized
        systems that redefine how we interact with digital assets and data.
        Whether it&apos;s smart contracts, decentralized finance (DeFi), or secure
        identity solutions, this is your arena to innovate. <br /><br /> Build
        tamper-proof applications, optimize consensus mechanisms, and solve
        real-world scalability issues. From Web3 infrastructure to innovative
        dApps, push the boundaries of distributed ledger technology and build
        the foundation of a new, transparent digital economy.
      </p>
    ),
  },
  {
    trackNum: "02",
    description: "Adversarial Intelligence",
    title: "Artificial Intelligence",
    ctaText: "Explore Track",
    ctaLink: "#",
    shortDesc: "Manipulate training data and poison neural networks. Build systems that learn, adapt, and solve complex problems autonomously.",
    accent: "bg-cyan-500",
    textCol: "text-cyan-400",
    smallIcon: "memory",
    content: () => (
      <p>
        Dive into the frontier of machine learning, neural networks, and
        generative models. The AI track is for those who want to build systems
        that can learn, adapt, and solve complex problems autonomously.
        <br /><br /> Develop intelligent agents, computer vision applications,
        or natural language processing tools. We are looking for solutions that
        leverage AI for social good, automate intricate workflows, or push the
        state-of-the-art in predictive analytics and intelligent automation.
      </p>
    ),
  },
  {
    trackNum: "03",
    description: "Ghost Network",
    title: "Cybersecurity",
    ctaText: "Explore Track",
    ctaLink: "#",
    shortDesc: "Traditional penetration testing across hybrid cloud infrastructures and air-gapped systems. Think like an attacker, defend the grid.",
    accent: "bg-emerald-500",
    textCol: "text-emerald-400",
    smallIcon: "android_fingerprint",
    content: () => (
      <p>
        The core of HackOWASP. This track is dedicated to securing the digital
        frontier. Build innovative defensive tools, threat detection systems,
        or novel encryption methodologies to protect critical infrastructure.
        <br /><br /> Whether it&apos;s a zero-trust architecture, automated
        vulnerability scanners, or privacy-preserving applications, your goal is
        to outsmart the adversaries. Think like an attacker, build like a
        defender, and create solutions that ensure the integrity and resilience
        of tomorrow&apos;s systems.
      </p>
    ),
  },
  {
    trackNum: "04",
    description: "Project Prometheus",
    title: "EdTech",
    ctaText: "Explore Track",
    ctaLink: "#",
    shortDesc: "Secure student data and harden digital learning platforms. Create solutions that personalize and gamify the future of education.",
    accent: "bg-amber-500",
    textCol: "text-amber-400",
    smallIcon: "auto_stories",
    content: () => (
      <p>
        Education is evolving. The EdTech track focuses on bridging gaps in
        learning through technology. Create platforms that democratize access
        to knowledge, personalize learning experiences, or gamify education.
        <br /><br /> Build interactive tools for remote learning, leverage AI
        for personalized tutoring, or develop accessible platforms for underserved
        communities. We want solutions that empower students and teachers alike,
        making learning more engaging, effective, and inclusive.
      </p>
    ),
  },
  {
    trackNum: "05",
    description: "Pulse Guardian",
    title: "MedTech",
    ctaText: "Explore Track",
    ctaLink: "#",
    shortDesc: "Defend life-critical IoT medical devices from remote interception and signal jamming. Enhance patient care through secure tech.",
    accent: "bg-rose-500",
    textCol: "text-rose-400",
    smallIcon: "monitor_heart",
    content: () => (
      <p>
        The MedTech track challenges you to apply technology to save lives and
        improve healthcare delivery. Build solutions that enhance patient care,
        streamline medical research, or optimize hospital operations.
        <br /><br /> From wearable health monitors and telemedicine platforms
        to AI-driven diagnostics and secure management of patient records, your
        innovations can have a profound impact. Combine medical insight with
        technical prowess to tackle some of the most pressing challenges in
        modern healthcare.
      </p>
    ),
  },
];
