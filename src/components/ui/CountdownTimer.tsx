"use client"
import React, { useEffect, useRef, useState } from "react";
import { useAnimate } from "framer-motion";

// Change this date to your target countdown date
const COUNTDOWN_FROM = "2026-04-18T00:00:00";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export default function ShiftingCountdown() {
  return (
    <div className="flex w-full max-w-2xl mx-auto items-center justify-center bg-transparent">
      <CountdownItem unit="Day" label="Days" />
      <CountdownItem unit="Hour" label="Hours" />
      <CountdownItem unit="Minute" label="Minutes" />
      <CountdownItem unit="Second" label="Seconds" />
    </div>
  );
}

function CountdownItem({ unit, label }: { unit: string; label: string }) {
  const { ref, time } = useTimer(unit);
  const display = unit === "Second" ? String(time).padStart(2, '0') : time;

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-1 px-2 py-3 md:px-4 md:py-4">
      <div className="relative w-full overflow-hidden text-center">
        <span
          ref={ref}
          className="block text-2xl font-mono font-semibold text-white md:text-4xl lg:text-5xl"
        >
          {display}
        </span>
      </div>
      <span className="text-xs font-light text-gray-400 md:text-sm uppercase tracking-widest">
        {label}
      </span>
      <div className="h-px w-full bg-white/20 mt-2"></div>
    </div>
  );
}

function useTimer(unit: string) {
  const [ref, animate] = useAnimate();
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeRef = useRef(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    handleCountdown();
    intervalRef.current = setInterval(handleCountdown, 1000);
    return () => clearInterval(intervalRef.current ?? undefined);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCountdown = async () => {
    const end = new Date(COUNTDOWN_FROM);
    const now = new Date();
    const distance = end.getTime() - now.getTime();

    let newTime = 0;
    switch (unit) {
      case "Day":
        newTime = Math.max(0, Math.floor(distance / DAY));
        break;
      case "Hour":
        newTime = Math.max(0, Math.floor((distance % DAY) / HOUR));
        break;
      case "Minute":
        newTime = Math.max(0, Math.floor((distance % HOUR) / MINUTE));
        break;
      default:
        newTime = Math.max(0, Math.floor((distance % MINUTE) / SECOND));
    }

    if (newTime !== timeRef.current) {
      await animate(
        ref.current,
        { y: ["0%", "-50%"], opacity: [1, 0] },
        { duration: 0.35 }
      );

      timeRef.current = newTime;
      setTime(newTime);

      await animate(
        ref.current,
        { y: ["50%", "0%"], opacity: [0, 1] },
        { duration: 0.35 }
      );
    }
  };

  return { ref, time };
}
