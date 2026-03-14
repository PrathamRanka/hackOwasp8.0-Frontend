import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function TimelineDemo() {
  const data = [
    {
      title: "April 17, 2026",
      content: (
        <div className="max-w-2xl rounded-2xl border border-white/8 bg-white/2 px-5 py-5 backdrop-blur-sm">
          <p className="mb-3 text-lg font-black uppercase tracking-[0.08em] text-white md:text-xl font-sans">
            Opening Ceremony & Hack Begins
          </p>
          <p className="mb-0 text-sm leading-7 text-zinc-300 md:text-base font-mono">
            The event kicks off with keynote speakers, track announcements, and team formation. The 36-hour hacking period officially begins!
          </p>
        </div>
      ),
    },
    {
      title: "April 18, 2026",
      content: (
        <div className="max-w-2xl rounded-2xl border border-white/8 bg-white/2 px-5 py-5 backdrop-blur-sm">
          <p className="mb-3 text-lg font-black uppercase tracking-[0.08em] text-white md:text-xl font-sans">
            Midpoint Check-ins & Workshops
          </p>
          <p className="mb-0 text-sm leading-7 text-zinc-300 md:text-base font-mono">
            Mentors make their rounds, mini-events are held to keep energy high, and teams power through the bulk of their development.
          </p>
        </div>
      ),
    },
    {
      title: "April 19, 2026",
      content: (
        <div className="max-w-2xl rounded-2xl border border-white/8 bg-white/2 px-5 py-5 backdrop-blur-sm">
          <p className="mb-3 text-lg font-black uppercase tracking-[0.08em] text-white md:text-xl font-sans">
            Hacking Ends & Closing Ceremony
          </p>
          <p className="mb-0 text-sm leading-7 text-zinc-300 md:text-base font-mono">
            Submissions close. Teams demo their projects to the judges, followed by the awards distribution and the official closing of HackOWASP.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
