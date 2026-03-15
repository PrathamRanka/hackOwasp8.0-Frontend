"use client";

import { useRef } from "react";

import Ribbons from "@/components/ui/Ribbons";

type HoverRibbonsSectionProps = {
  children: React.ReactNode;
  className?: string;
  overlayClassName?: string;
};

export default function HoverRibbonsSection({
  children,
  className,
  overlayClassName,
}: HoverRibbonsSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={sectionRef} className={className ?? "relative"}>
      <div className="relative z-10">{children}</div>
      <div
        aria-hidden="true"
        className={[
          "pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-0 transition-opacity duration-300",
          "group-hover:opacity-100 hover:opacity-100",
          overlayClassName,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <Ribbons
          eventTargetRef={sectionRef}
          baseThickness={7}
          colors={["#5227FF", "#06fcdb", "#bc7cc1"]}
          speedMultiplier={0.5}
          maxAge={500}
          enableFade={false}
          enableShaderEffect
          backgroundColor={[0, 0, 0, 0]}
        />
      </div>
    </div>
  );
}