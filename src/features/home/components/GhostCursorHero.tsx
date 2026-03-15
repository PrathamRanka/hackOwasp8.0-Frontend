"use client";

import { useState } from "react";

import GhostCursor from "@/components/ui/effects/GhostCursor";

const CURSOR_COLORS = ["#6FE7DD", "#FFD6A5", "#A8E6CF", "#FFAFCC", "#BDE0FE"];

export default function GhostCursorHero() {
  const [randomCursorColor] = useState(
    () => CURSOR_COLORS[Math.floor(Math.random() * CURSOR_COLORS.length)]
  );

  return (
    <div style={{ height: "100%", width: "100%", position: "relative" }}>
      <GhostCursor
        color={randomCursorColor}
        brightness={1.55}
        edgeIntensity={0}
        trailLength={20}
        inertia={0.5}
        grainIntensity={0.05}
        bloomStrength={0.1}
        bloomRadius={2}
        bloomThreshold={0.025}
        fadeDelayMs={1000}
        fadeDurationMs={1500}
      />
    </div>
  );
}
