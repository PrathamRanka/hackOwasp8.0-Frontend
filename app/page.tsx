import Demo from "@/components/demo";
import { AppleHelloEnglishEffect } from "@/components/apple-hello-effect";
import NavbarDemo from "@/components/resizable-navbar-demo";
import CustomTracksGrid from "@/components/custom-tracks-grid";
import TimelineDemo from "@/components/timeline-demo";

export default function Home() {
  return (
    <main className="relative w-full bg-black min-h-screen text-white pb-24">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-x-0 top-0 z-20">
          <NavbarDemo />
        </div>
        <div className="absolute inset-0 z-0">
          <Demo />
        </div>
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
          <AppleHelloEnglishEffect className="h-24 text-white md:h-28" speed={1.1} aria-label="HackOwasp8.0" />
        </div>
      </section>

      {/* Tracks Section */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
        <h2 className="font-inter text-4xl md:text-5xl font-black mb-12 text-center tracking-tight">Tracks</h2>
        <CustomTracksGrid />
      </section>

      {/* Timeline Section */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto relative z-10">
        <TimelineDemo />
      </section>
    </main>
  );
}
