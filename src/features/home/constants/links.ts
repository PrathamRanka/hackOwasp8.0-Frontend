export const SITE_LINKS = {
  home: "/",
  owaspPage: "https://www.owasptiet.com/",
  x: "https://x.com/Owasp_tiet",
  instagram: "https://www.instagram.com/owasp_tiet/",
  linkedin: "https://www.linkedin.com/company/owasp-tiet",
  github: "https://github.com/OWASP-STUDENT-CHAPTER",
  community: "https://www.owasptiet.com/",
  volunteer: "https://www.owasptiet.com/#form",
  codeOfConduct: "https://owasp.org/www-policy/operational/code-of-conduct",
  eventAbout: "#about",
  eventTimeline: "#timeline",
  eventTracks: "#tracks",
  eventSponsors: "#sponsors",
  eventFaq: "#faqs",
} as const;

export const TRACK_LINKS = {
  blockchain: "#",
  ai: "#",
  cybersecurity: "#",
  edtech: "#",
  medtech: "#",
} as const;

export const ORG_SAME_AS = [
  SITE_LINKS.x,
  SITE_LINKS.instagram,
  SITE_LINKS.linkedin,
  SITE_LINKS.github,
];
