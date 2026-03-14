"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const prizesData = [
  { prize: "1st Prize", amount: "₹50,000", src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=3270&auto=format&fit=crop" },
  { prize: "2nd Prize", amount: "₹30,000", src: "https://images.unsplash.com/photo-1639762681485-074b7f4ec651?q=80&w=3270&auto=format&fit=crop" },
  { prize: "3rd Prize", amount: "₹20,000", src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=3270&auto=format&fit=crop" },
  { prize: "Best First Year", amount: "₹10,000", src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=3200&auto=format&fit=crop" },
  { prize: "Best Girls Team", amount: "₹10,000", src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=3270&auto=format&fit=crop" },
];

const Skiper30 = () => {
  const gallery = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main className="w-full bg-black text-white relative z-10">
      <div className="font-geist flex h-screen items-center justify-center gap-2">
        <div className="absolute left-1/2 top-[10%] grid -translate-x-1/2 content-start justify-items-center gap-6 text-center text-white">
        <h2 className="font-inter text-4xl sm:text-5xl md:text-7xl font-black mb-4 tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">Hackathon Prizes</h2>
          <span className="relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-linear-to-b after:from-white/60 after:to-transparent after:content-['']">
            scroll down to see
          </span>
        </div>
      </div>

      <div
        ref={gallery}
        className="relative box-border hidden sm:flex h-[175vh] gap-[2vw] overflow-hidden bg-black p-[2vw]"
      >
        <Column items={[prizesData[0], prizesData[1], prizesData[2]]} y={y} />
        <Column items={[prizesData[3], prizesData[4], prizesData[0]]} y={y2} />
        <Column items={[prizesData[1], prizesData[2], prizesData[3]]} y={y3} />
        <Column items={[prizesData[4], prizesData[0], prizesData[1]]} y={y4} />
      </div>

      {/* Mobile prizes — shown only on xs screens */}
      <div className="flex sm:hidden flex-col items-center px-6 pb-16">
        <div className="grid grid-cols-1 gap-4 w-full max-w-md mx-auto">
          {prizesData.map((item, i) => (
            <div key={i} className="relative h-44 rounded-2xl overflow-hidden border border-white/10">
              <Image
                src={item.src}
                alt={item.prize}
                fill
                className="pointer-events-none object-cover brightness-[0.3]"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <h3 className="text-white font-black text-xl tracking-tighter uppercase mb-2 drop-shadow-lg">{item.prize}</h3>
                <p className="text-emerald-400 font-bold text-base font-mono border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 rounded backdrop-blur-sm">{item.amount}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </main>
  );
};

type ColumnProps = {
  items: typeof prizesData;
  y: MotionValue<number>;
};

const Column = ({ items, y }: ColumnProps) => {
  return (
    <motion.div
      className="relative -top-[45%] flex h-full w-1/4 min-w-[250px] flex-col gap-[2vw] first:top-[-45%] nth-2:top-[-95%] nth-3:top-[-45%] nth-4:top-[-75%]"
      style={{ y }}
    >
      {items.map((item, i) => (
        <div key={i} className="relative h-full w-full overflow-hidden rounded-3xl group border border-white/10">
          <Image
            src={`${item.src}`}
            alt={item.prize}
            fill
            className="pointer-events-none object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.3] group-hover:brightness-[0.4]"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
             <h3 className="text-white font-black text-2xl md:text-3xl tracking-tighter uppercase mb-2 drop-shadow-lg">{item.prize}</h3>
             <p className="text-emerald-400 font-bold text-lg md:text-xl font-mono border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 rounded backdrop-blur-sm">{item.amount}</p>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export { Skiper30 };

/**
 * Skiper 30 Parallax_002 — React + framer motion + lenis
 * Inspired by and adapted from https://www.siena.film/films/my-project-x
 * We respect the original creators. This is an inspired rebuild with our own taste and does not claim any ownership.
 * These animations aren’t associated with the siena.film . They’re independent recreations meant to study interaction design
 *
 * License & Usage:
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * - No attribution required with Skiper UI Pro.
 *
 * Feedback and contributions are welcome.
 *
 * Author: @gurvinder-singh02
 * Website: https://gxuri.in
 * Twitter: https://x.com/Gur__vi
 */
