"use client";

import { useState } from "react";

import GhostCursor from "@/components/ui/effects/GhostCursor";

const CURSOR_COLORS = [
  "#6FE7DD", // aqua
  "#FFD6A5", // peach
  "#A8E6CF", // mint
  "#FFAFCC", // soft pink
  "#BDE0FE", // sky blue
  "#FFE066", // pastel yellow
  "#FFB4A2", // coral
  "#FEC5BB", // blush
  "#E0BBE4", // lavender
  "#CDB4DB", // soft purple
  "#B9FBC0", // light green
  "#FFD3B6", // soft orange
  "#FFADAD", // light red
  "#CAE9FF", // pale blue
  "#FFF1A8"  // creamy yellow
];

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
