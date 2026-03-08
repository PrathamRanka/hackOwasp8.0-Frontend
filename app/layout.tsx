import type { Metadata } from "next";
import { DM_Sans, Fira_Code } from "next/font/google";
import "./globals.css";

import GridBackground from "@/components/ui/grid-background";
import NoiseOverlay from "@/components/ui/noise-overlay";
import CursorTracker from "@/components/ui/cursor-tracker";
import SmoothScroll from "@/components/ui/smooth-scroll";
import PageTransition from "@/components/ui/page-transition";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HackOWASP 8.0 | TIET",
  description: "The 8th edition of the premiere cybersecurity hackathon by CodeChef TIET.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${firaCode.variable} antialiased selection:bg-cyan selection:text-bg-primary`}>
        <SmoothScroll>
          <CursorTracker />
          {/* <NoiseOverlay /> */}
          {/* <GridBackground /> */}
          <PageTransition>
            {children}
          </PageTransition>
        </SmoothScroll>
      </body>
    </html>
  );
}
