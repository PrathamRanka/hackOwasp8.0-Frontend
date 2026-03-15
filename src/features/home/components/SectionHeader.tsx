import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  backgroundLabel: string;
  title: string;
  description: string;
  glowClassName: string;
  className?: string;
  descriptionClassName?: string;
};

export function SectionHeader({
  eyebrow,
  backgroundLabel,
  title,
  description,
  glowClassName,
  className,
  descriptionClassName,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-8 md:mb-12 flex flex-col items-center text-center", className)}>
      <span className="mb-3 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.3em] text-white/60">
        {eyebrow}
      </span>
      <div className="relative inline-flex items-center justify-center px-4">
        <div className={cn("absolute inset-x-6 top-1/2 h-16 -translate-y-1/2 rounded-full blur-3xl", glowClassName)} />
        <span
          aria-hidden="true"
          className="absolute text-6xl font-black uppercase tracking-tighter text-white/10 blur-sm sm:text-7xl md:text-8xl lg:text-9xl"
        >
          {backgroundLabel}
        </span>
        <h2 className="relative bg-linear-to-b from-white via-zinc-100 to-zinc-500 bg-clip-text text-5xl font-black uppercase tracking-tighter text-transparent sm:text-6xl md:text-7xl lg:text-8xl">
          {title}
        </h2>
      </div>
      <p className={cn("mt-3 max-w-2xl text-sm md:text-base", descriptionClassName)}>{description}</p>
    </div>
  );
}