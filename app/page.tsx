import Demo from "@/components/demo";
import { AppleHelloEnglishEffect } from "@/components/apple-hello-effect";
import NavbarDemo from "@/components/resizable-navbar-demo";

export default function Home() {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-x-0 top-0 z-20">
        <NavbarDemo />
      </div>
      <div className="absolute inset-0">
        <Demo />
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <AppleHelloEnglishEffect className="h-24 text-white md:h-28" speed={1.1} aria-label="HackOwasp8.0" />
      </div>
    </main>
  );
}
