"use client";

import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1800&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/60 to-[#0a0a0a]" />

      {/* Gold gradient accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#c9a84c]/8 blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pb-20">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-[#c9a84c] text-sm font-medium tracking-[0.2em] uppercase mb-6"
        >
          Online Fitness Coaching
        </motion.p>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white mb-6"
        >
          Transform Your Body.{" "}
          <span className="text-[#c9a84c]">Build a Life</span>{" "}
          You&apos;re Proud Of.
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-lg md:text-xl text-[#a3a3a3] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Online fitness coaching built around your goals, your schedule, and
          your life. No cookie-cutter plans. No shortcuts. Real results.
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#apply"
            className="px-8 py-4 rounded-full bg-[#c9a84c] text-[#0a0a0a] font-semibold text-sm tracking-wide hover:bg-[#e4c06e] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Apply for Coaching
          </a>
          <a
            href="#results"
            className="px-8 py-4 rounded-full border border-white/20 text-white font-medium text-sm tracking-wide hover:border-white/50 hover:bg-white/5 transition-all duration-200"
          >
            See Results
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[#a3a3a3] text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-0.5 h-8 bg-gradient-to-b from-[#c9a84c] to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}
