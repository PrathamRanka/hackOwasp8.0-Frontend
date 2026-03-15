"use client";

import Image from "next/image";
import { useState } from "react";
import TargetCursor from "@/components/ui/effects/TargetCursor";

import { SectionHeader } from "@/features/home/components/SectionHeader";

export default function AboutOwaspSection() {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <section className="owasp-cursor-area px-4 py-12 md:px-8 md:py-20 max-w-7xl mx-auto relative z-10">
      <TargetCursor
        targetSelector=".owasp-cursor-area .cursor-target"
        activeAreaSelector=".owasp-cursor-area"
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
      />

      <SectionHeader
        eyebrow="Chapter Spotlight"
        backgroundLabel="ABOUT"
        title="About OWASP"
        description="Open Worldwide Application Security Project"
        glowClassName="bg-linear-to-r from-fuchsia-500/20 via-white/12 to-cyan-500/20"
        descriptionClassName="mt-3 max-w-2xl text-sm text-zinc-500 md:text-base"
      />

      <div className="grid items-center gap-10 md:grid-cols-[0.95fr_1.2fr] md:gap-14">
        <div className="cursor-target flex items-center justify-center rounded-3xl border border-white/8 bg-zinc-950/60 px-8 py-10 md:min-h-105">
          {!logoFailed ? (
            <Image
              src="/owasp.png"
              alt="OWASP logo"
              width={900}
              height={900}
              className="h-auto w-full max-w-72 object-contain md:max-w-96"
              onError={() => setLogoFailed(true)}
            />
          ) : (
            <div className="flex h-56 w-56 flex-col items-center justify-center rounded-full border border-white/10 bg-black text-center md:h-72 md:w-72">
              <span className="text-xs font-mono uppercase tracking-[0.26em] text-zinc-500">
                OWASP
              </span>
              <span className="mt-3 text-4xl font-black tracking-tight text-white md:text-5xl">
                TIET
              </span>
            </div>
          )}
        </div>

        <div>
          <h3 className="cursor-target text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
            OWASP at TIET
          </h3>

          <div className="mt-8 space-y-5 text-sm leading-7 text-zinc-300 md:text-base md:leading-8">
            <p>
              The OWASP Student Chapter at Thapar Institute of Engineering and Technology is a community of builders interested in cybersecurity, software security, and emerging technologies.
            </p>
            <p>
              Through workshops, capture-the-flag challenges, and events like <span className="font-semibold text-white">HackOWASP</span>, the chapter creates a space where students learn by building, experimenting, and solving real security problems together.
            </p>
            <p>
              The focus is simple: explore technology, strengthen security knowledge, and grow alongside a community that values curiosity and practical learning.
            </p>
          </div>

          <div className="mt-8">
            <a
              href="#"
              className="cursor-target inline-flex min-h-11 items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 text-sm font-semibold text-white transition-colors duration-300 hover:border-white/20 hover:bg-white/10"
            >
              Explore OWASP →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
