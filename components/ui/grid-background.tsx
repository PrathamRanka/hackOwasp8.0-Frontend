"use client";

export default function GridBackground() {
  return (
    <div className="absolute inset-0 z-[-2] overflow-hidden pointer-events-none">
      {/* The moving grid */}
      <div 
        className="absolute -inset-full animate-grid-move"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 200, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 200, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />
      
      {/* Floating Orbs */}
      <div 
        className="absolute top-[-10%] sm:top-[10%] right-[-20%] sm:right-[10%] w-[40vw] h-[40vw] rounded-full animate-drift"
        style={{
          background: 'rgba(123, 47, 255, 0.15)',
          filter: 'blur(120px)'
        }}
      />
      <div 
        className="absolute bottom-[-10%] sm:bottom-[10%] left-[-20%] sm:left-[10%] w-[50vw] h-[50vw] rounded-full animate-drift-slow"
        style={{
          background: 'rgba(0, 200, 255, 0.12)',
          filter: 'blur(120px)'
        }}
      />
      <div 
        className="absolute top-[30%] left-[40%] w-[30vw] h-[30vw] rounded-full animate-drift"
        style={{
          background: 'rgba(57, 255, 20, 0.08)',
          filter: 'blur(100px)',
          animationDelay: '-5s'
        }}
      />
      
      {/* Scanline Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] animate-scanline mix-blend-overlay"
        style={{
          backgroundImage: `linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.8) 51%)`,
          backgroundSize: '100% 4px',
          animationDuration: '10s',
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite'
        }}
      />
    </div>
  );
}
