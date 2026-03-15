"use client";
import Link from "next/link";

import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";

function Footer() {
  return (
    <footer className=" py-12 px-4 md:px-6 bg-black text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="flex items-center gap-2">
              <Icons.logo className="icon-class w-8 text-white" />
              <h2 className="text-lg font-bold text-white">HackOWASP 8.0</h2>
            </Link>

            <h1 className="text-gray-300 mt-4">
              Organized by{" "}
              <span className="text-[#22c55e]">
                <Link href="#">OWASP Student Chapter, TIET</Link>
              </span>
            </h1>
            <div className="mt-2">
            <Link href="#">
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
                  <Link href="#about" className="text-gray-400 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#timeline" className="text-gray-400 hover:text-white">
                    Timeline
                  </Link>
                </li>
                <li>
                  <Link href="#tracks" className="text-gray-400 hover:text-white">
                    Tracks
                  </Link>
                </li>
                <li>
                  <Link href="#sponsors" className="text-gray-400 hover:text-white">
                    Sponsors
                  </Link>
                </li>
                <li>
                  <Link href="#faqs" className="text-gray-400 hover:text-white">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Socials</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Twitter / X
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    GitHub
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Community</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    OWASP TIET
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Volunteer
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
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
