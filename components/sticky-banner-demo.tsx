"use client"
import { motion } from "motion/react";

import { StickyBanner } from "@/components/ui/sticky-banner";

const bannerSentences = [
  "HackOWASP 8.0 • April 17-19, 2026",
  "36 hours of building across security, AI, blockchain, edtech, and medtech",
  "Team up, ship fast, and demo something worth remembering",
  "Registrations open now • mentors, prizes, and live judging",
];

export default function StickyBannerDemo() {
  return (
    <div className="relative w-full">
      <StickyBanner
        showCloseButton={false}
        className="min-h-12 overflow-hidden border-b border-white/10 bg-linear-to-r from-zinc-950 via-[#07111f] to-zinc-950 px-0 py-0"
      >
        <div className="relative flex w-full overflow-hidden">
          <motion.div
            className="flex min-w-max shrink-0 items-center gap-10 py-3 pr-10"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 22,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...bannerSentences, ...bannerSentences].map((sentence, index) => (
              <div key={`${sentence}-${index}`} className="flex items-center gap-10">
                <p className="whitespace-nowrap text-[11px] font-mono uppercase tracking-[0.24em] text-white/85 sm:text-xs">
                  {sentence}
                </p>
                <span className="h-1 w-1 rounded-full bg-cyan-400/70" />
              </div>
            ))}
          </motion.div>
        </div>
      </StickyBanner>
      <DummyContent />
    </div>
  );
}

const DummyContent = () => {
  return (
<></>
  );
};
