import Demo from "@/components/demo";

export default function Home() {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Demo />
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">HackOwasp8.0</h1>
      </div>
    </main>
  );
}
