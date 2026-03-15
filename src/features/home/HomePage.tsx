import AboutOwaspSection from "@/features/home/components/AboutOwaspSection";
import CountdownDemo from "@/features/home/components/CountdownDemo";
import ExpandableTracksSection from "@/features/home/components/ExpandableTracksSection";
import GhostCursorHero from "@/features/home/components/GhostCursorHero";
import MainFooter from "@/features/home/components/MainFooter";
import { SectionHeader } from "@/features/home/components/SectionHeader";
import SponsorsShowcase from "@/features/home/components/SponsorsShowcase";
import StickyBannerDemo from "@/features/home/components/StickyBannerDemo";
import TextPressureSection from "@/features/home/components/TextPressureSection";
import TimelineSection from "@/features/home/components/TimelineSection";
import HoverRibbonsSection from "@/components/ui/HoverRibbonsSection";
import { Skiper30 } from "@/components/ui/skiper-ui/Skiper30";

type HomePageProps = {
  siteUrl: string;
};

export default function HomePage({ siteUrl }: HomePageProps) {
  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "HackOWASP 8.0",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    startDate: "2026-04-17T09:00:00+05:30",
    endDate: "2026-04-19T18:00:00+05:30",
    organizer: {
      "@type": "Organization",
      name: "OWASP TIET",
      url: siteUrl,
      logo: `${siteUrl}/owasp.png`,
    },
    location: {
      "@type": "Place",
      name: "Thapar Institute of Engineering and Technology",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Patiala",
        addressRegion: "Punjab",
        addressCountry: "IN",
      },
    },
    image: [`${siteUrl}/owasp.png`],
    url: siteUrl,
    description:
      "HackOWASP 8.0 is a 36-hour student hackathon by OWASP TIET spanning cybersecurity, AI, blockchain, edtech, and medtech.",
  };

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OWASP TIET",
    url: siteUrl,
    logo: `${siteUrl}/owasp.png`,
    sameAs: [],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />

      <StickyBannerDemo />

      <main className="relative flex-1 w-full overflow-x-clip bg-black pb-16 text-white touch-pan-y md:pb-24">
        <section className="relative isolate h-svh w-full overflow-hidden md:h-screen">
          <div className="absolute inset-0 z-0">
            <GhostCursorHero />
          </div>
          <div className="pointer-events-none absolute inset-0 z-200 flex flex-col items-center justify-center gap-4 px-4">
            <TextPressureSection />
            <CountdownDemo />
          </div>
        </section>

        <AboutOwaspSection />

        <HoverRibbonsSection className="group relative py-12 md:py-24 px-4 md:px-8 max-w-7xl mx-auto z-10 rounded-3xl">
          <section id="tracks">
            <SectionHeader
              eyebrow="Challenge Domains"
              backgroundLabel="TRACKS"
              title="Tracks"
              description="Pick a field, build something sharp, and push it past the obvious."
              glowClassName="bg-linear-to-r from-cyan-500/20 via-white/12 to-purple-500/20"
              descriptionClassName="mt-3 max-w-2xl text-sm text-zinc-500 md:text-base"
            />
            <ExpandableTracksSection />
          </section>
        {/* </HoverRibbonsSection> */}

        {/* <HoverRibbonsSection className="group relative px-0 md:px-8 max-w-7xl mx-auto z-10 rounded-3xl"> */}
          <section id="timeline">
            <SectionHeader
              eyebrow="Event Flow"
              backgroundLabel="TIMELINE"
              title="Timeline"
              description="Follow the rhythm of the event from kickoff to final demos and awards."
              className="mb-8 md:mb-12 flex flex-col items-center px-4 text-center md:px-0"
              glowClassName="bg-linear-to-r from-emerald-500/20 via-white/12 to-cyan-500/20"
              descriptionClassName="mt-3 max-w-2xl text-sm text-zinc-500 md:text-base"
            />
            <TimelineSection />
          </section>
        </HoverRibbonsSection>

        <section className="relative z-10 w-full overflow-hidden">
          <Skiper30 />
        </section>

        <HoverRibbonsSection className="group relative rounded-3xl">
          <div id="sponsors">
            <SponsorsShowcase />
          </div>
        </HoverRibbonsSection>
      </main>

      <MainFooter />
    </>
  );
}