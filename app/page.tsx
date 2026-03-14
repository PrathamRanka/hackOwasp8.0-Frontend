import Demo from "@/components/demo";
import { AppleHelloEnglishEffect } from "@/components/apple-hello-effect";

export default function Home() {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Demo />
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <AppleHelloEnglishEffect className="h-24 text-white md:h-28" speed={1.1} aria-label="HackOwasp8.0" />
      </div>
    </main>
  );
}
