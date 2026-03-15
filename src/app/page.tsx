import type { Metadata } from "next";
import HomePage from "@/features/home/HomePage";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "HackOWASP 8.0 - OWASP TIET's Premier Hackathon",
  description:
    "Official website of HackOWASP 8.0, the OWASP TIET hackathon for cybersecurity and frontier tech builders.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <HomePage siteUrl={siteUrl} />;
}
