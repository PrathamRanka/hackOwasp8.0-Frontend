"use client";

import { LogoLoop } from "@/components/ui/LogoLoop";
import GhostCursor from "@/components/ui/effects/GhostCursor";
import { SectionHeader } from "@/features/home/components/SectionHeader";
import {
  allLogos,
  allSponsorCount,
  communityPartners,
  mainSponsors,
} from "@/features/home/constants/sponsorLogos";

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

      <SectionHeader
        eyebrow="Ecosystem Partners"
        backgroundLabel="SPONSORS"
        title="Sponsors"
        description={`${allSponsorCount} partners powering HackOWASP with mentorship, cloud access, tooling, and community support.`}
        className="relative mb-10 md:mb-14 flex flex-col items-center text-center"
        glowClassName="bg-linear-to-r from-blue-500/20 via-white/12 to-violet-500/20"
        descriptionClassName="mx-auto mt-3 max-w-2xl text-sm text-zinc-400 md:text-base"
      />

      <div className="relative space-y-6">
        <div>
          <p className="mb-3 text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-600">Main Sponsors</p>
          <div style={{ height: "76px", position: "relative", overflow: "hidden" }}>
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

        <div>
          <p className="mb-3 text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-600">Community Partners</p>
          <div style={{ height: "76px", position: "relative", overflow: "hidden" }}>
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

        <div>
          <p className="mb-3 text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-600">All Partners</p>
          <div style={{ height: "76px", position: "relative", overflow: "hidden" }}>
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
