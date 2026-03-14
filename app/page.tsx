import Demo from "@/components/demo";
import { AppleHelloEnglishEffect } from "@/components/apple-hello-effect";
import NavbarDemo from "@/components/resizable-navbar-demo";
import ExpandableCardDemo from "@/components/expandable-card-demo-grid";

export default function Home() {
  return (
    <main className="relative w-full bg-black min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-x-0 top-0 z-20">
          <NavbarDemo />
        </div>
        <div className="absolute inset-0">
          <Demo />
        </div>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <AppleHelloEnglishEffect className="h-24 text-white md:h-28" speed={1.1} aria-label="HackOwasp8.0" />
        </div>
      </section>

      {/* Tracks Section */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
        <h2 className="font-inter text-4xl md:text-5xl font-black mb-12 text-center tracking-tight">Tracks</h2>
        <ExpandableCardDemo />
      </section>
    </main>
  );
}
