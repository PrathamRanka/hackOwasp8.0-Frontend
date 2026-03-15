"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { trackCards } from "@/features/home/constants/trackCards";
import { useOutsideClick } from "@/hooks/useOutsideClick";

const bentoClasses = [
  "md:col-start-1 md:col-span-2 md:row-start-1",
  "md:col-start-3 md:row-start-1 md:row-span-2",
  "md:col-start-1 md:row-start-2",
  "md:col-start-2 md:row-start-2",
  "md:col-start-1 md:col-span-3 md:row-start-3",
];

export default function ExpandableTracksSection() {
  const [active, setActive] = useState<(typeof trackCards)[number] | boolean | null>(null);
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

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-90 h-full w-full bg-black/85 backdrop-blur-md"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 z-100 grid place-items-center">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="fixed right-4 top-[max(1rem,env(safe-area-inset-top))] z-120 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/95 shadow-lg md:hidden"
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

      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full"
        style={{ gridAutoRows: "minmax(220px, auto)" }}
      >
        {trackCards.map((card, index) => {
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
              <div className={`w-full h-0.5 ${card.accent} opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className={`flex-1 p-6 flex ${isFullWidth ? "flex-col md:flex-row md:items-center md:gap-16" : "flex-col"}`}>
                <div className={`flex justify-between items-center ${isFullWidth ? "md:block md:shrink-0 md:w-28" : "mb-auto"}`}>
                  <span className="text-[11px] font-mono text-white/15 tracking-[0.2em] select-none">
                    {card.trackNum}
                  </span>
                  <span className={`material-symbols-outlined ${isWide || isTall ? "text-4xl" : "text-3xl"} ${card.textCol} opacity-20 group-hover:opacity-50 transition-opacity duration-300`}>
                    {card.smallIcon}
                  </span>
                </div>

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
