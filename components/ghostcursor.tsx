"use client"
import { useState } from 'react'
import GhostCursor from './ui/GhostCursor'

const CURSOR_COLORS = ['#6FE7DD', '#FFD6A5', '#A8E6CF', '#FFAFCC', '#BDE0FE']

function Demo2() {
  const [randomCursorColor] = useState(
    () => CURSOR_COLORS[Math.floor(Math.random() * CURSOR_COLORS.length)]
  )

  return (
    <div style={{ height: '100%', width: '100%', position: 'relative' }}>
      <GhostCursor
        // Visuals
        color={randomCursorColor}
        brightness={1.55}
    edgeIntensity={0}

    // Trail and motion
    trailLength={20}
    inertia={0.5}

    // Post-processing
    grainIntensity={0.05}
    bloomStrength={0.1}
    bloomRadius={2}
    bloomThreshold={0.025}

    // Fade-out behavior
    fadeDelayMs={1000}
    fadeDurationMs={1500}
  />
</div>
  )
}

export default Demo2;