"use client";

import HeroSection from "@/components/hero-section";
import { StatsTicker } from "@/components/stats-ticker";
import AboutSection from "@/components/about-section";
import TracksSection from "@/components/tracks-section";
import PrizesSection from "@/components/prizes-section";
import ScheduleSection from "@/components/schedule-section";
import SponsorsSection from "@/components/sponsors-section";
import FAQSection from "@/components/faq-section";
import TeamSection from "@/components/team-section";
import RegisterSection from "@/components/register-section";

export default function Home() {
  return (
    <main className="bg-bg-primary text-white overflow-x-hidden">
      {/* <HeroSection /> */}
      <StatsTicker />
      <AboutSection />
      <TracksSection />
      <PrizesSection />
      <ScheduleSection />
      <SponsorsSection />
      <FAQSection />
      <TeamSection />
      <RegisterSection />
    </main>
  );
}
