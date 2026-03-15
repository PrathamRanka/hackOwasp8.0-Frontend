import type { ReactNode } from "react";

export type TrackCard = {
  trackNum: string;
  description: string;
  title: string;
  ctaText: string;
  ctaLink: string;
  shortDesc: string;
  accent: string;
  textCol: string;
  smallIcon: string;
  content: () => ReactNode;
};

export type TimelineItem = {
  id: string;
  title: string;
  content: ReactNode;
};