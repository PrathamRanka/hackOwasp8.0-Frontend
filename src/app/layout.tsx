import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "../styles/globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const metadataBase = new URL(siteUrl);

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "HackOWASP 8.0 | OWASP TIET",
    template: "%s | HackOWASP 8.0",
  },
  description:
    "HackOWASP 8.0 is OWASP TIET's flagship 36-hour hackathon in India for cybersecurity, AI, blockchain, edtech, and medtech innovators building real-world solutions.",
  applicationName: "HackOWASP 8.0",
  manifest: "/manifest.webmanifest",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/owasp.png", type: "image/png", sizes: "32x32" },
      { url: "/owasp.png", type: "image/png", sizes: "192x192" },
      { url: "/owasp.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: [{ url: "/owasp.png", type: "image/png" }],
    apple: [{ url: "/owasp.png", type: "image/png", sizes: "180x180" }],
  },
  keywords: [
    "HackOWASP",
    "OWASP TIET",
    "Hackathon",
    "Cybersecurity",
    "Blockchain",
    "Artificial Intelligence",
    "Student Innovation",
    "CTF",
    "Secure Coding",
    "Web Security",
    "India Hackathon",
    "Punjab Hackathon",
    "Thapar Institute of Engineering and Technology",
    "Student Hackathon",
    "Thapar University",
  ],
  authors: [{ name: "OWASP TIET" }],
  creator: "OWASP TIET",
  publisher: "OWASP TIET",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "HackOWASP 8.0 | OWASP TIET",
    description:
      "Join HackOWASP 8.0, OWASP TIET's 36-hour flagship hackathon where teams build high-impact products across AI, blockchain, edtech, and medtech.",
    siteName: "HackOWASP 8.0",
    images: [
      {
        url: "/owasp.png",
        width: 900,
        height: 900,
        alt: "HackOWASP by OWASP TIET",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "HackOWASP 8.0 | OWASP TIET",
    description:
      "Build, break, and secure at HackOWASP 8.0 — OWASP TIET's flagship 36-hour hackathon for cybersecurity and frontier tech builders.",
    images: ["/owasp.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@300,0..1&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/png" sizes="32x32" href="/owasp.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/owasp.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/owasp.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} min-h-screen flex flex-col bg-black antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
