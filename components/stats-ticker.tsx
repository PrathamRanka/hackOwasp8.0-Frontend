export function StatsTicker() {
  const stats = [
    { value: "500+", label: "HACKERS" },
    { value: "₹1,50,000", label: "IN PRIZES" },
    { value: "36", label: "MENTORS" },
    { value: "48", label: "HOURS" },
    { value: "4", label: "TRACKS" },
    { value: "8TH", label: "EDITION" },
  ];

  // Duplicate for seamless marquee
  const items = [...stats, ...stats, ...stats, ...stats];

  return (
    <div className="w-full overflow-hidden border-y border-white/10 bg-bg-primary/80 backdrop-blur-sm py-4">
      <div className="flex w-max animate-[marquee_20s_linear_infinite]">
        {items.map((stat, i) => (
          <div key={i} className="flex items-center gap-6 px-6">
            <div className="flex items-baseline gap-2">
              <span className="font-display font-bold text-xl text-white">{stat.value}</span>
              <span className="font-mono text-xs text-muted tracking-widest leading-none">{stat.label}</span>
            </div>
            <span className="text-cyan text-xs">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}
