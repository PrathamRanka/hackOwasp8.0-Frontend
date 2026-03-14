import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "HackOWASP 8.0",
    short_name: "HackOWASP",
    description:
      "OWASP TIET's flagship hackathon for cybersecurity and emerging technology builders.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/owasp.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/owasp.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
