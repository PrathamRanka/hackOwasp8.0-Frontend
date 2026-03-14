import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function TimelineDemo() {
  const data = [
    {
      title: "April 17, 2026",
      content: (
        <div>
          <p className="mb-4 text-base md:text-lg font-inter text-white font-semibold">
            Opening Ceremony & Hack Begins
          </p>
          <p className="mb-8 text-base md:text-lg font-inter text-white/80">
            The event kicks off with keynote speakers, track announcements, and team formation. The 36-hour hacking period officially begins!
          </p>
        </div>
      ),
    },
    {
      title: "April 18, 2026",
      content: (
        <div>
          <p className="mb-4 text-base md:text-lg font-inter text-white font-semibold">
            Midpoint Check-ins & Workshops
          </p>
          <p className="mb-8 text-base md:text-lg font-inter text-white/80">
            Mentors make their rounds, mini-events are held to keep energy high, and teams power through the bulk of their development.
          </p>
        </div>
      ),
    },
    {
      title: "April 19, 2026",
      content: (
        <div>
          <p className="mb-4 text-base md:text-lg font-inter text-white font-semibold">
            Hacking Ends & Closing Ceremony
          </p>
          <p className="mb-8 text-base md:text-lg font-inter text-white/80">
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
