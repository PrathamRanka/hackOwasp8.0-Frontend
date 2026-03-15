import type { LogoItem } from "@/components/ui/LogoLoop";
import { SiDiscord, SiEthereum, SiGithub, SiPolygon } from "react-icons/si";

export const mainSponsors: LogoItem[] = [
  {
    node: (
      <span className="flex items-center gap-2 text-white/80 font-semibold text-sm">
        <SiEthereum className="text-2xl text-purple-400" /> ETHIndia
      </span>
    ),
    title: "ETHIndia",
  },
  {
    node: (
      <span className="flex items-center gap-2 text-white/80 font-semibold text-sm">
        <SiPolygon className="text-2xl text-violet-400" /> Polygon
      </span>
    ),
    title: "Polygon",
  },
  {
    node: <span className="flex items-center gap-1.5 text-white/80 font-semibold text-sm">☕ Tim Hortons</span>,
    title: "Tim Hortons",
  },
  {
    node: <span className="flex items-center gap-1.5 text-white/80 font-semibold text-sm">🔷 BlockseBlock</span>,
    title: "BlockseBlock",
  },
  {
    node: <span className="flex items-center gap-1.5 text-white/80 font-semibold text-sm">🌐 ICP India</span>,
    title: "ICP India",
  },
  {
    node: <span className="flex items-center gap-1.5 text-white/80 font-semibold text-sm">🔄 SwapSpace</span>,
    title: "SwapSpace",
  },
];

const additionalSponsors: LogoItem[] = [
  {
    node: <span className="flex items-center gap-1.5 text-white/80 font-semibold text-sm">🎁 Archies</span>,
    title: "Archies",
  },
  {
    node: <span className="flex items-center gap-1.5 text-white/80 font-semibold text-sm">🍱 Tiffin Wala</span>,
    title: "Tiffin Wala",
  },
  {
    node: <span className="flex items-center gap-1.5 text-white/80 font-semibold text-sm">🍽️ Megh&apos;s</span>,
    title: "Megh's",
  },
];

export const communityPartners: LogoItem[] = [
  {
    node: (
      <span className="flex items-center gap-2 text-white/80 font-semibold text-sm">
        <SiGithub className="text-xl" /> Web3 India
      </span>
    ),
    title: "Web3 India",
  },
  {
    node: <span className="flex items-center gap-1.5 text-white/80 font-semibold text-sm">🌿 The Crypto Vines</span>,
    title: "The Crypto Vines",
  },
  {
    node: <span className="flex items-center gap-1.5 text-white/80 font-semibold text-sm">🔒 CYNDIA</span>,
    title: "CYNDIA",
  },
  {
    node: (
      <span className="flex items-center gap-2 text-white/80 font-semibold text-sm">
        <SiDiscord className="text-xl text-indigo-400" /> Noida B-Sides
      </span>
    ),
    title: "Noida B-Sides",
  },
  {
    node: <span className="flex items-center gap-1.5 text-white/80 font-semibold text-sm">⚡ SIZ</span>,
    title: "SIZ",
  },
];

export const allLogos: LogoItem[] = [...mainSponsors, ...additionalSponsors, ...communityPartners];
export const allSponsorCount = allLogos.length;