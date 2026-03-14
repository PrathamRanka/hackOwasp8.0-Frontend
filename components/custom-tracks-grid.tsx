"use client";

import { motion } from "motion/react";

export default function CustomTracksGrid() {
  const tracks = [
    {
      id: "BLOCKCHAIN_01",
      title: "Blockchain",
      subtitle: "Decentralized Vault",
      desc: "Breach smart contracts and exploit consensus mechanisms in a sandboxed DeFi environment. Build trustless, decentralized systems.",
      color: "border-purple-500",
      bgLight: "bg-purple-500/20",
      bgHover: "hover:bg-purple-500 hover:text-white",
      textCol: "text-purple-500",
      shadow: "shadow-[0_0_15px_rgba(168,85,247,0.15)]",
      icon: "token",
      smallIcon: "shield_lock",
    },
    {
      id: "NEURAL_AI_02",
      title: "Artificial Intelligence",
      subtitle: "Adversarial Intelligence",
      desc: "Manipulate training data and poison neural networks. Build systems that learn, adapt, and solve complex problems autonomously.",
      color: "border-cyan-500",
      bgLight: "bg-cyan-500/20",
      bgHover: "hover:bg-cyan-500 hover:text-white",
      textCol: "text-cyan-500",
      shadow: "shadow-[0_0_15px_rgba(6,182,212,0.15)]",
      icon: "psychology",
      smallIcon: "memory",
    },
    {
      id: "INFRA_SEC_03",
      title: "Cybersecurity",
      subtitle: "Ghost Network",
      desc: "Traditional penetration testing across hybrid cloud infrastructures and air-gapped systems. Think like an attacker, defend the grid.",
      color: "border-emerald-500",
      bgLight: "bg-emerald-500/20",
      bgHover: "hover:bg-emerald-500 hover:text-white",
      textCol: "text-emerald-500",
      shadow: "shadow-[0_0_15px_rgba(16,185,129,0.15)]",
      icon: "security",
      smallIcon: "android_fingerprint",
    },
    {
      id: "KNOWLEDGE_04",
      title: "EdTech",
      subtitle: "Project Prometheus",
      desc: "Secure student data and harden digital learning platforms. Create solutions that personalize and gamify the future of education.",
      color: "border-amber-500",
      bgLight: "bg-amber-500/20",
      bgHover: "hover:bg-amber-500 hover:text-white",
      textCol: "text-amber-500",
      shadow: "shadow-[0_0_15px_rgba(245,158,11,0.15)]",
      icon: "school",
      smallIcon: "auto_stories",
    },
    {
      id: "VITAL_SIGN_05",
      title: "MedTech",
      subtitle: "Pulse Guardian",
      desc: "Defend life-critical IoT medical devices from remote interception and signal jamming. Enhance patient care through secure tech.",
      color: "border-rose-500",
      bgLight: "bg-rose-500/20",
      bgHover: "hover:bg-rose-500 hover:text-white",
      textCol: "text-rose-500",
      shadow: "shadow-[0_0_15px_rgba(244,63,94,0.15)]",
      icon: "medical_services",
      smallIcon: "monitor_heart",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto py-12">
      {/* Grid Layout Container */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {tracks.map((track) => (
          <motion.div
            key={track.id}
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            className={`
              relative overflow-hidden group 
              bg-black/40 backdrop-blur-xl border border-white/5
              rounded-2xl border-l-[6px] p-6 sm:p-8
              ${track.color} ${track.shadow}
              transition-all duration-300
            `}
          >
            {/* Background Icon (Low opacity) */}
            <div className="absolute -right-8 -top-8 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-300 pointer-events-none">
              <span className={`material-symbols-outlined text-9xl ${track.textCol}`}>{track.icon}</span>
            </div>

            {/* Header / Badges */}
            <div className="flex justify-between items-start mb-6">
              <div className={`p-2.5 rounded-lg border border-white/10 ${track.bgLight} ${track.textCol}`}>
                <span className="material-symbols-outlined">{track.smallIcon}</span>
              </div>
              <span className={`text-[10px] md:text-xs font-mono border border-white/10 px-2.5 py-1 rounded bg-black/50 ${track.textCol} opacity-80 uppercase tracking-widest`}>
                {track.id}
              </span>
            </div>

            {/* Content */}
            <h4 className="text-xl md:text-2xl font-black text-white mb-1 font-inter tracking-tight">{track.title}</h4>
            <h5 className={`text-sm md:text-base font-bold mb-4 ${track.textCol}`}>{track.subtitle}</h5>
            <p className="text-zinc-400 font-mono text-xs md:text-sm leading-relaxed mb-8">
              {track.desc}
            </p>

            {/* Action Button */}
            <button className={`
              mt-auto w-full py-3.5 rounded-xl border border-white/10 
              font-bold tracking-widest text-xs uppercase
              transition-all duration-300 backdrop-blur-sm
              ${track.bgLight} ${track.textCol} ${track.bgHover}
            `}>
              Explore Track <span className="ml-2">→</span>
            </button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
