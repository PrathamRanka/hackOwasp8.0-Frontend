"use client";

import GhostCursor from "@/components/ui/GhostCursor";
import { LogoLoop, type LogoItem } from "@/components/ui/LogoLoop";
import {
  SiEthereum,
  SiPolygon,
  SiGithub,
  SiDiscord,
} from "react-icons/si";

const mainSponsors: LogoItem[] = [
  { node: <span className="flex items-center gap-2 text-white/80 font-semibold text-sm"><SiEthereum className="text-2xl text-purple-400" /> ETHIndia</span>, title: "ETHIndia" },
  { node: <span className="flex items-center gap-2 text-white/80 font-semibold text-sm"><SiPolygon className="text-2xl text-violet-400" /> Polygon</span>, title: "Polygon" },
  { node: <span className="flex items-center gap-1.5 text-white/80 font-semibold text-sm">☕ Tim Hortons</span>, title: "Tim Hortons" },
  { node: <span className="flex items-center gap-1.5 text-white/80 font-semibold text-sm">🔷 BlockseBlock</span>, title: "BlockseBlock" },
  { node: <span className="flex items-center gap-1.5 text-white/80 font-semibold text-sm">🌐 ICP India</span>, title: "ICP India" },
  { node: <span className="flex items-center gap-1.5 text-white/80 font-semibold text-sm">🔄 SwapSpace</span>, title: "SwapSpace" },
];

const additionalSponsors: LogoItem[] = [
  { node: <span className="flex items-center gap-1.5 text-white/80 font-semibold text-sm">🎁 Archies</span>, title: "Archies" },
  { node: <span className="flex items-center gap-1.5 text-white/80 font-semibold text-sm">🍱 Tiffin Wala</span>, title: "Tiffin Wala" },
  { node: <span className="flex items-center gap-1.5 text-white/80 font-semibold text-sm">🍽️ Megh&apos;s</span>, title: "Megh's" },
];

const communityPartners: LogoItem[] = [
  { node: <span className="flex items-center gap-2 text-white/80 font-semibold text-sm"><SiGithub className="text-xl" /> Web3 India</span>, title: "Web3 India" },
  { node: <span className="flex items-center gap-1.5 text-white/80 font-semibold text-sm">🌿 The Crypto Vines</span>, title: "The Crypto Vines" },
  { node: <span className="flex items-center gap-1.5 text-white/80 font-semibold text-sm">🔒 CYNDIA</span>, title: "CYNDIA" },
  { node: <span className="flex items-center gap-2 text-white/80 font-semibold text-sm"><SiDiscord className="text-xl text-indigo-400" /> Noida B-Sides</span>, title: "Noida B-Sides" },
  { node: <span className="flex items-center gap-1.5 text-white/80 font-semibold text-sm">⚡ SIZ</span>, title: "SIZ" },
];

const allLogos: LogoItem[] = [...mainSponsors, ...additionalSponsors, ...communityPartners];

const allSponsorCount = mainSponsors.length + additionalSponsors.length + communityPartners.length;

export default function SponsorsShowcase() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-7xl overflow-hidden px-4 py-12 md:px-8 md:py-16">
      <div className="absolute inset-0 z-0 hidden opacity-60 sm:block">
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

      {/* ── Header ───────────────────────────────────────────────────── */}
      <div className="relative mb-10 md:mb-14 flex flex-col items-center text-center">
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

      {/* ── LogoLoop rows ────────────────────────────────────────────── */}
      <div className="relative space-y-6">

        {/* Row 1 — Main Sponsors · right → left */}
        <div>
          <p className="mb-3 text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-600">Main Sponsors</p>
          <div style={{ height: '76px', position: 'relative', overflow: 'hidden' }}>
            <LogoLoop
              logos={mainSponsors}
              speed={100}
              direction="left"
              logoHeight={60}
              gap={60}
              hoverSpeed={30}
              scaleOnHover
              fadeOut
              fadeOutColor="#000000"
              ariaLabel="Main sponsors"
            />
          </div>
        </div>

        {/* Row 2 — Community Partners · left → right */}
        <div>
          <p className="mb-3 text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-600">Community Partners</p>
          <div style={{ height: '76px', position: 'relative', overflow: 'hidden' }}>
            <LogoLoop
              logos={communityPartners}
              speed={100}
              direction="right"
              logoHeight={60}
              gap={60}
              hoverSpeed={30}
              scaleOnHover
              fadeOut
              fadeOutColor="#000000"
              ariaLabel="Community partners"
            />
          </div>
        </div>

        {/* Row 3 — All Partners · right → left */}
        <div>
          <p className="mb-3 text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-600">All Partners</p>
          <div style={{ height: '76px', position: 'relative', overflow: 'hidden' }}>
            <LogoLoop
              logos={allLogos}
              speed={120}
              direction="left"
              logoHeight={60}
              gap={60}
              hoverSpeed={30}
              scaleOnHover
              fadeOut
              fadeOutColor="#000000"
              ariaLabel="All sponsors and partners"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
