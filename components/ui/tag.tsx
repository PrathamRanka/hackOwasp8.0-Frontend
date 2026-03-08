import { cn } from "@/lib/utils";

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'cyan' | 'acid' | 'violet' | 'ember';
}

export default function Tag({ children, variant = 'default', className, ...props }: TagProps) {
  const vClasses = {
    default: "text-muted border-white/10",
    cyan: "text-cyan border-cyan/30",
    acid: "text-acid border-acid/30",
    violet: "text-violet border-violet/30",
    ember: "text-ember border-ember/30",
  };

  return (
    <div 
      className={cn(
        "inline-flex items-center gap-2 font-mono text-[0.65rem] tracking-widest uppercase",
        vClasses[variant],
        className
      )}
      {...props}
    >
      <span>{`//`}</span>
      <span>{children}</span>
      <div className={cn("h-[1px] w-6 flex-shrink-0", `bg-${variant === 'default' ? 'muted/50' : variant}`)} />
    </div>
  );
}
