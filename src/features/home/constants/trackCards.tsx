import type { TrackCard } from "@/types/home";
import { TRACK_LINKS } from "@/features/home/constants/links";

export const trackCards: TrackCard[] = [
  {
    trackNum: "01",
    description: "Decentralized Vault",
    title: "Blockchain",
    ctaText: "Explore Track",
    ctaLink: TRACK_LINKS.blockchain,
    shortDesc: "Breach smart contracts and exploit consensus mechanisms in a sandboxed DeFi environment. Build trustless, decentralized systems.",
    accent: "bg-purple-500",
    textCol: "text-purple-400",
    smallIcon: "shield_lock",
    content: () => (
      <p>
        The Blockchain track challenges you to build trustless, decentralized systems that redefine how we interact with digital assets and data.
        Whether it&apos;s smart contracts, decentralized finance (DeFi), or secure identity solutions, this is your arena to innovate. <br /><br /> Build
        tamper-proof applications, optimize consensus mechanisms, and solve real-world scalability issues. From Web3 infrastructure to innovative
        dApps, push the boundaries of distributed ledger technology and build the foundation of a new, transparent digital economy.
      </p>
    ),
  },
  {
    trackNum: "02",
    description: "Adversarial Intelligence",
    title: "Artificial Intelligence",
    ctaText: "Explore Track",
    ctaLink: TRACK_LINKS.ai,
    shortDesc: "Manipulate training data and poison neural networks. Build systems that learn, adapt, and solve complex problems autonomously.",
    accent: "bg-cyan-500",
    textCol: "text-cyan-400",
    smallIcon: "memory",
    content: () => (
      <p>
        Dive into the frontier of machine learning, neural networks, and generative models. The AI track is for those who want to build systems
        that can learn, adapt, and solve complex problems autonomously.
        <br /><br /> Develop intelligent agents, computer vision applications, or natural language processing tools. We are looking for solutions that
        leverage AI for social good, automate intricate workflows, or push the state-of-the-art in predictive analytics and intelligent automation.
      </p>
    ),
  },
  {
    trackNum: "03",
    description: "Ghost Network",
    title: "Cybersecurity",
    ctaText: "Explore Track",
    ctaLink: TRACK_LINKS.cybersecurity,
    shortDesc: "Traditional penetration testing across hybrid cloud infrastructures and air-gapped systems. Think like an attacker, defend the grid.",
    accent: "bg-emerald-500",
    textCol: "text-emerald-400",
    smallIcon: "android_fingerprint",
    content: () => (
      <p>
        The core of HackOWASP. This track is dedicated to securing the digital frontier. Build innovative defensive tools, threat detection systems,
        or novel encryption methodologies to protect critical infrastructure.
        <br /><br /> Whether it&apos;s a zero-trust architecture, automated vulnerability scanners, or privacy-preserving applications, your goal is
        to outsmart the adversaries. Think like an attacker, build like a defender, and create solutions that ensure the integrity and resilience
        of tomorrow&apos;s systems.
      </p>
    ),
  },
  {
    trackNum: "04",
    description: "Project Prometheus",
    title: "EdTech",
    ctaText: "Explore Track",
    ctaLink: TRACK_LINKS.edtech,
    shortDesc: "Secure student data and harden digital learning platforms. Create solutions that personalize and gamify the future of education.",
    accent: "bg-amber-500",
    textCol: "text-amber-400",
    smallIcon: "auto_stories",
    content: () => (
      <p>
        Education is evolving. The EdTech track focuses on bridging gaps in learning through technology. Create platforms that democratize access
        to knowledge, personalize learning experiences, or gamify education.
        <br /><br /> Build interactive tools for remote learning, leverage AI for personalized tutoring, or develop accessible platforms for underserved
        communities. We want solutions that empower students and teachers alike, making learning more engaging, effective, and inclusive.
      </p>
    ),
  },
  {
    trackNum: "05",
    description: "Pulse Guardian",
    title: "MedTech",
    ctaText: "Explore Track",
    ctaLink: TRACK_LINKS.medtech,
    shortDesc: "Defend life-critical IoT medical devices from remote interception and signal jamming. Enhance patient care through secure tech.",
    accent: "bg-rose-500",
    textCol: "text-rose-400",
    smallIcon: "monitor_heart",
    content: () => (
      <p>
        The MedTech track challenges you to apply technology to save lives and improve healthcare delivery. Build solutions that enhance patient care,
        streamline medical research, or optimize hospital operations.
        <br /><br /> From wearable health monitors and telemedicine platforms to AI-driven diagnostics and secure management of patient records, your
        innovations can have a profound impact. Combine medical insight with technical prowess to tackle some of the most pressing challenges in
        modern healthcare.
      </p>
    ),
  },
];