import Demo from "@/components/demo";
import { AppleHelloEnglishEffect } from "@/components/apple-hello-effect";
import ExpandableCardDemo from "@/components/expandable-card-demo-grid";
import TimelineDemo from "@/components/timeline-demo";
import { Skiper30 } from "@/components/ui/skiper-ui/skiper30";


export default function Home() {
  return (
    <main className="relative w-full bg-black min-h-screen text-white pb-16 md:pb-24">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Demo />
        </div>
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-4">
          <AppleHelloEnglishEffect className="h-14 sm:h-20 text-white md:h-28 w-full max-w-xs sm:max-w-md md:max-w-2xl" speed={1.1} aria-label="HackOwasp8.0" />
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
