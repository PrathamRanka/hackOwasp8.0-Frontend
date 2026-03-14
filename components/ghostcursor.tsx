import GhostCursor from './ui/GhostCursor'

function Demo2() {
  return (
    <div style={{ height: 800, position: 'relative' }}>
      <GhostCursor
        // Visuals
        color="#B19EEF"
        brightness={2}
    edgeIntensity={0}

    // Trail and motion
    trailLength={50}
    inertia={0.5}

    // Post-processing
    grainIntensity={0.05}
    bloomStrength={0.1}
    bloomRadius={1}
    bloomThreshold={0.025}

    // Fade-out behavior
    fadeDelayMs={1000}
    fadeDurationMs={1500}
  />
</div>
  )
}

export default Demo2;