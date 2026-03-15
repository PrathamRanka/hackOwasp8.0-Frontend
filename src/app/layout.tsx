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
    "HackOWASP 8.0 is OWASP TIET's flagship 36-hour hackathon focused on cybersecurity, AI, blockchain, edtech, and medtech.",
  applicationName: "HackOWASP 8.0",
  keywords: [
    "HackOWASP",
    "OWASP TIET",
    "Hackathon",
    "Cybersecurity",
    "Blockchain",
    "Artificial Intelligence",
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
      "Join HackOWASP 8.0, OWASP TIET's 36-hour build sprint across security, AI, blockchain, edtech, and medtech.",
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
      "OWASP TIET's flagship hackathon for builders in cybersecurity, AI, blockchain, edtech, and medtech.",
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} min-h-screen flex flex-col bg-black antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
