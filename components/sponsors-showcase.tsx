"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useMemo, useState } from "react";
import GhostCursor from "@/components/ui/GhostCursor";

type Sponsor = {
  name: string;
  logoUrl: string;
};

type SponsorGroup = {
  title: string;
  sponsors: Sponsor[];
};

const sponsorGroups: SponsorGroup[] = [
  {
    title: "Main Sponsors",
    sponsors: [
      { name: "ETHIndia", logoUrl: "https://logo.clearbit.com/ethindia.co" },
      { name: "Tim Hortons", logoUrl: "https://logo.clearbit.com/timhortons.com" },
      { name: "Polygon", logoUrl: "https://logo.clearbit.com/polygon.technology" },
      { name: "BlockseBlock", logoUrl: "https://logo.clearbit.com/blockseblock.com" },
      { name: "ICP India", logoUrl: "https://logo.clearbit.com/icpindia.org" },
      { name: "SwapSpace", logoUrl: "https://logo.clearbit.com/swapspace.co" },
    ],
  },
  {
    title: "Additional Sponsors",
    sponsors: [
      { name: "Archies", logoUrl: "https://logo.clearbit.com/archiesonline.com" },
      { name: "Tiffin Wala", logoUrl: "https://logo.clearbit.com/tiffinwala.in" },
      { name: "Megh's", logoUrl: "https://logo.clearbit.com/meghs.in" },
    ],
  },
  {
    title: "Community Partners",
    sponsors: [
      { name: "Web3 India", logoUrl: "https://logo.clearbit.com/web3india.xyz" },
      { name: "The Crypto Vines", logoUrl: "https://logo.clearbit.com/thecryptovines.com" },
      { name: "CYNDIA", logoUrl: "https://logo.clearbit.com/cyndia.io" },
      { name: "Noida B-Sides", logoUrl: "https://logo.clearbit.com/noidabsides.com" },
      { name: "SIZ", logoUrl: "https://logo.clearbit.com/siz.in" },
    ],
  },
];

function initials(name: string) {
  const words = name
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .split(" ")
    .filter(Boolean);

  if (!words.length) return "SP";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();

  return (words[0][0] + words[1][0]).toUpperCase();
}

export default function SponsorsShowcase() {
  const [brokenLogos, setBrokenLogos] = useState<Record<string, boolean>>({});

  const allSponsorCount = useMemo(
    () => sponsorGroups.reduce((count, group) => count + group.sponsors.length, 0),
    []
  );

  return (
    <section className="relative z-10 mx-auto w-full max-w-7xl overflow-hidden px-4 py-12 md:px-8 md:py-16">
      <div className="absolute inset-0 z-0 opacity-60">
        <GhostCursor
          color="#5B9DFF"
          brightness={1.2}
          edgeIntensity={0.45}
          trailLength={28}
          inertia={0.22}
          grainIntensity={0.025}
          bloomStrength={0.08}
          bloomRadius={0.8}
          bloomThreshold={0.03}
          fadeDelayMs={900}
          fadeDurationMs={1300}
          maxDevicePixelRatio={0.45}
          mixBlendMode="screen"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-0 bg-linear-to-b from-black/35 via-transparent to-black/60" />

      <div className="relative mb-8 md:mb-12 flex flex-col items-center text-center">
        <span className="mb-3 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.3em] text-white/60">
          Ecosystem Partners
        </span>
        <div className="relative inline-flex items-center justify-center px-4">
          <div className="absolute inset-x-6 top-1/2 h-16 -translate-y-1/2 rounded-full bg-linear-to-r from-blue-500/20 via-white/12 to-violet-500/20 blur-3xl" />
          <span
            aria-hidden="true"
            className="absolute text-6xl font-black uppercase tracking-tighter text-white/10 blur-sm sm:text-7xl md:text-8xl lg:text-9xl"
          >
            SPONSORS
          </span>
          <h2 className="relative bg-linear-to-b from-white via-zinc-100 to-zinc-500 bg-clip-text text-5xl font-black uppercase tracking-tighter text-transparent sm:text-6xl md:text-7xl lg:text-8xl">
            Sponsors
          </h2>
        </div>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-zinc-400 md:text-base">
          {allSponsorCount} partners powering HackOWASP with mentorship, cloud access, tooling, and community support.
        </p>
      </div>

      <div className="relative space-y-10">
        {sponsorGroups.map((group, groupIndex) => (
          <div key={group.title} className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-[0.22em] text-zinc-500">
              {group.title}
            </h3>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.sponsors.map((sponsor, sponsorIndex) => {
                const key = `${group.title}-${sponsor.name}`;
                const broken = brokenLogos[key];

                return (
                  <motion.article
                    key={key}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.35, delay: (groupIndex * 0.04) + (sponsorIndex * 0.03) }}
                    className="group flex min-h-44 flex-col items-center justify-center rounded-2xl border border-white/10 bg-zinc-950/80 px-5 py-6 text-center shadow-[0_10px_28px_rgba(0,0,0,0.35)]"
                  >
                    <div className="mb-4 flex h-16 w-full items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-black/40 p-3">
                      {!broken ? (
                        <Image
                          src={sponsor.logoUrl}
                          alt={`${sponsor.name} logo`}
                          width={240}
                          height={80}
                          className="max-h-full max-w-full object-contain"
                          onError={() =>
                            setBrokenLogos((prev) => ({
                              ...prev,
                              [key]: true,
                            }))
                          }
                        />
                      ) : (
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-sm font-bold tracking-wide text-white/90">
                          {initials(sponsor.name)}
                        </span>
                      )}
                    </div>

                    <p className="text-base font-bold tracking-tight text-white md:text-lg">
                      {sponsor.name}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
