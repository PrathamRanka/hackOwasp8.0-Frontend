import ExpandableCardDemo from "@/components/expandable-card-demo-grid";
import TimelineDemo from "@/components/timeline-demo";
import { Skiper30 } from "@/components/ui/skiper-ui/skiper30";
import StickyBannerDemo from "@/components/sticky-banner-demo";
import TextPressureSection from "@/components/textPressure";
// import { Demo2}
import Demo2 from '@/components/ghostcursor';
import { DemoOne } from "@/components/countdown";


export default function Home() {
  return (
    <main className="relative w-full min-h-screen overflow-x-clip bg-black pb-16 text-white touch-pan-y md:pb-24">
      <StickyBannerDemo />

      {/* Hero Section */}
      <section className="relative isolate h-svh w-full overflow-hidden md:h-screen">
        <div className="absolute inset-0 z-0">
          {/* <Demo /> */}
          <Demo2 />
        </div>
        <div className="pointer-events-none absolute inset-0 z-200 flex flex-col items-center justify-center gap-4 px-4">
          <TextPressureSection />
          <DemoOne />
        </div>
      </section>

      {/* Tracks Section */}
      <section className="py-12 md:py-24 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
        <div className="mb-8 md:mb-12 flex flex-col items-center text-center">
          <span className="mb-3 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.3em] text-white/60">
            Challenge Domains
          </span>
          <div className="relative inline-flex items-center justify-center px-4">
            <div className="absolute inset-x-6 top-1/2 h-16 -translate-y-1/2 rounded-full bg-linear-to-r from-cyan-500/20 via-white/12 to-purple-500/20 blur-3xl" />
            <span
              aria-hidden="true"
              className="absolute text-6xl font-black uppercase tracking-tighter text-white/10 blur-sm sm:text-7xl md:text-8xl lg:text-9xl"
            >
              TRACKS
            </span>
            <h2 className="relative bg-linear-to-b from-white via-zinc-100 to-zinc-500 bg-clip-text text-5xl font-black uppercase tracking-tighter text-transparent sm:text-6xl md:text-7xl lg:text-8xl">
              Tracks
            </h2>
          </div>
          <p className="mt-3 max-w-2xl text-sm text-zinc-500 md:text-base">
            Pick a field, build something sharp, and push it past the obvious.
          </p>
        </div>
        <ExpandableCardDemo />
      </section>

      {/* Timeline Section */}
      <section className="px-0 md:px-8 max-w-7xl mx-auto relative z-10">
        <div className="mb-8 md:mb-12 flex flex-col items-center px-4 text-center md:px-0">
          <span className="mb-3 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.3em] text-white/60">
            Event Flow
          </span>
          <div className="relative inline-flex items-center justify-center px-4">
            <div className="absolute inset-x-6 top-1/2 h-16 -translate-y-1/2 rounded-full bg-linear-to-r from-emerald-500/20 via-white/12 to-cyan-500/20 blur-3xl" />
            <span
              aria-hidden="true"
              className="absolute text-6xl font-black uppercase tracking-tighter text-white/10 blur-sm sm:text-7xl md:text-8xl lg:text-9xl"
            >
              TIMELINE
            </span>
            <h2 className="relative bg-linear-to-b from-white via-zinc-100 to-zinc-500 bg-clip-text text-5xl font-black uppercase tracking-tighter text-transparent sm:text-6xl md:text-7xl lg:text-8xl">
              Timeline
            </h2>
          </div>
          <p className="mt-3 max-w-2xl text-sm text-zinc-500 md:text-base">
            Follow the rhythm of the event from kickoff to final demos and awards.
          </p>
        </div>
        <TimelineDemo />
      </section>

            {/* Prizes Section */}
      <section className="relative z-10 w-full overflow-hidden">
        <Skiper30 />
      </section>
    </main>
  );
}
