"use client";
import { useRef } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Icons } from "@/components/ui/Icons";
import Ribbons from "@/components/ui/Ribbons";
import { SITE_LINKS } from "@/features/home/constants/links";

function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  return (
    <footer ref={footerRef} className="group relative overflow-hidden py-12 px-4 md:px-6 bg-black text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        <Ribbons
          eventTargetRef={footerRef}
          baseThickness={7}
          colors={["#5227FF", "#06fcdb", "#bc7cc1"]}
          speedMultiplier={0.5}
          maxAge={500}
          enableFade={false}
          enableShaderEffect
          backgroundColor={[0, 0, 0, 0]}
        />
      </div>

      <div className="container relative z-10 mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <Link href={SITE_LINKS.home} className="flex items-center gap-2">
              <Icons.logo className="icon-class w-8 text-white" />
              <h2 className="text-lg font-bold text-white">HackOWASP 8.0</h2>
            </Link>

            <h1 className="text-gray-300 mt-4">
              Organized by{" "}
              <span className="text-[#22c55e]">
                <Link href={SITE_LINKS.owaspPage}>OWASP Student Chapter, TIET</Link>
              </span>
            </h1>
            <div className="mt-2">
            <Link href={SITE_LINKS.x}>
              <Button variant='secondary'>
                Follow us on X
                <Icons.twitter className="icon-class ml-1 w-3.5 " />
              </Button>
            </Link>
            </div>
            <p className="text-sm text-gray-400 mt-5">
              © 2026 HackOWASP 8.0. All rights reserved.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4 text-white">Event</h3>
              <ul className="space-y-2">
                <li>
                  <Link href={SITE_LINKS.eventAbout} className="text-gray-400 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href={SITE_LINKS.eventTimeline} className="text-gray-400 hover:text-white">
                    Timeline
                  </Link>
                </li>
                <li>
                  <Link href={SITE_LINKS.eventTracks} className="text-gray-400 hover:text-white">
                    Tracks
                  </Link>
                </li>
                <li>
                  <Link href={SITE_LINKS.eventSponsors} className="text-gray-400 hover:text-white">
                    Sponsors
                  </Link>
                </li>
                <li>
                  <Link href={SITE_LINKS.eventFaq} className="text-gray-400 hover:text-white">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Socials</h3>
              <ul className="space-y-2">
                <li>
                  <Link href={SITE_LINKS.instagram} className="text-gray-400 hover:text-white">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href={SITE_LINKS.linkedin} className="text-gray-400 hover:text-white">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href={SITE_LINKS.x} className="text-gray-400 hover:text-white">
                    Twitter / X
                  </Link>
                </li>
                <li>
                  <Link href={SITE_LINKS.github} className="text-gray-400 hover:text-white">
                    GitHub
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Community</h3>
              <ul className="space-y-2">
                <li>
                  <Link href={SITE_LINKS.community} className="text-gray-400 hover:text-white">
                    OWASP TIET
                  </Link>
                </li>
                <li>
                  <Link href={SITE_LINKS.volunteer} className="text-gray-400 hover:text-white">
                    Volunteer
                  </Link>
                </li>
                <li>
                  <Link href={SITE_LINKS.codeOfConduct} className="text-gray-400 hover:text-white">
                    Code of Conduct
                  </Link>
                </li>
              
              </ul>
            </div>
          </div>
        </div>
        <div className=" w-full flex mt-4 items-center justify-center   ">
          <h1 className="text-center text-3xl md:text-5xl lg:text-[10rem] font-bold bg-clip-text text-transparent bg-linear-to-b from-neutral-300 to-neutral-600 select-none">
            HackOWASP
          </h1>
        </div>
      
      </div>
    </footer>
  );
}

export { Footer };
