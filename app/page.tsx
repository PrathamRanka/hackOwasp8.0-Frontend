import ExpandableCardDemo from "@/components/expandable-card-demo-grid";
import TimelineDemo from "@/components/timeline-demo";
import { Skiper30 } from "@/components/ui/skiper-ui/skiper30";
import TextPressureSection from "@/components/textPressure";
// import { Demo2}
import Demo2 from '@/components/ghostcursor';


export default function Home() {
  return (
    <main className="relative w-full min-h-screen overflow-x-clip bg-black pb-16 text-white touch-pan-y md:pb-24">
      {/* Hero Section */}
      <section className="relative isolate h-svh w-full overflow-hidden md:h-screen">
        <div className="absolute inset-0 z-0">
          {/* <Demo /> */}
          <Demo2 />
        </div>
        <div className="pointer-events-none absolute inset-0 z-200 flex items-center justify-center px-4">
          <TextPressureSection />
        </div>
      </section>

      {/* Tracks Section */}
      <section className="py-12 md:py-24 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
        <h2 className="font-inter text-3xl sm:text-4xl md:text-5xl font-black mb-8 md:mb-12 text-center tracking-tight">Tracks</h2>
        <ExpandableCardDemo />
      </section>

      {/* Timeline Section */}
      <section className="px-0 md:px-8 max-w-7xl mx-auto relative z-10">
        <TimelineDemo />
      </section>

            {/* Prizes Section */}
      <section className="relative z-10 w-full overflow-hidden">
        <Skiper30 />
      </section>
    </main>
  );
}
