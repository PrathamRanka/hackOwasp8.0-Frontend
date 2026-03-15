import type { Metadata } from "next";
import HomePage from "@/features/home/HomePage";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "HackOWASP 8.0 | Cybersecurity & AI Hackathon by OWASP TIET",
  description:
    "Official HackOWASP 8.0 website by OWASP TIET. Register for a 36-hour student hackathon focused on cybersecurity, AI, blockchain, edtech, and medtech product building.",
  keywords: [
    "HackOWASP 8.0",
    "OWASP TIET hackathon",
    "cybersecurity hackathon",
    "AI hackathon India",
    "blockchain hackathon",
    "student hackathon 2026",
    "Thapar University hackathon",
    "secure coding challenge",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "HackOWASP 8.0 | Cybersecurity & AI Hackathon by OWASP TIET",
    description:
      "Compete at HackOWASP 8.0, OWASP TIET's flagship 36-hour hackathon featuring cybersecurity, AI, blockchain, edtech, and medtech tracks.",
    url: "/",
    images: ["/owasp.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "HackOWASP 8.0 | OWASP TIET",
    description:
      "Join HackOWASP 8.0 to build secure, high-impact tech products in 36 hours.",
    images: ["/owasp.png"],
  },
};

export default function Home() {
  return <HomePage siteUrl={siteUrl} />;
}
