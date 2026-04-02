"use client";

import Image from "next/image";
import { motion, type Variants, useReducedMotion } from "framer-motion";
import alexHero from "@/public/client/alex-hero.jpg";
import { credentials } from "@/content/site";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.15,
      duration: 0.7,
      ease: "easeOut" as const,
    },
  }),
};

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="hero" className="relative overflow-hidden px-6 pt-32 pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,168,76,0.18),_transparent_40%),linear-gradient(180deg,_rgba(10,10,10,0.25)_0%,_rgba(10,10,10,0.92)_100%)]" />
      <div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-[#c9a84c]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-8rem)] max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-2xl">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial={shouldReduceMotion ? false : "hidden"}
            animate="visible"
            className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-[#c9a84c]"
          >
            Progress Over Perfection
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial={shouldReduceMotion ? false : "hidden"}
            animate="visible"
            className="mb-6 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Build the strongest version of yourself with coaching that fits real
            life.
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial={shouldReduceMotion ? false : "hidden"}
            animate="visible"
            className="mb-10 text-lg leading-relaxed text-white/75 md:text-xl"
          >
            Alex Dea Jue delivers custom fitness and nutrition coaching built
            around your goals, your schedule, and your standards. No
            cookie-cutter plans. No hustle-culture burnout. Just a system that
            helps you keep progressing.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial={shouldReduceMotion ? false : "hidden"}
            animate="visible"
            className="flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#apply"
              className="rounded-full bg-[#c9a84c] px-8 py-4 text-center text-sm font-semibold tracking-wide text-[#0a0a0a] transition-all duration-200 hover:scale-[1.02] hover:bg-[#e4c06e] active:scale-[0.98]"
            >
              Start Your Application
            </a>
            <a
              href="#results"
              className="rounded-full border border-white/20 px-8 py-4 text-center text-sm font-medium tracking-wide text-white transition-all duration-200 hover:border-white/50 hover:bg-white/5"
            >
              See Client Results
            </a>
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial={shouldReduceMotion ? false : "hidden"}
            animate="visible"
            className="mt-10 flex flex-wrap gap-3"
          >
            {credentials.map((credential) => (
              <span
                key={credential}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/70"
              >
                {credential}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          custom={2}
          variants={fadeUp}
          initial={shouldReduceMotion ? false : "hidden"}
          animate="visible"
          className="relative"
        >
          <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-[#c9a84c]/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            <div className="relative aspect-[4/5]">
              <Image
                src={alexHero}
                alt="Alex Dea Jue standing with arms crossed"
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 92vw"
                className="object-cover object-[center_18%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/70 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-[#0a0a0a]/70 px-5 py-4 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.22em] text-[#c9a84c]">
                Online Coaching
              </p>
              <p className="mt-2 text-lg font-semibold text-white">
                Fitness, nutrition, and accountability in one system
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {!shouldReduceMotion ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
        >
          <span className="text-xs uppercase tracking-widest text-[#a3a3a3]">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="h-8 w-0.5 rounded-full bg-gradient-to-b from-[#c9a84c] to-transparent"
          />
        </motion.div>
      ) : null}
    </section>
  );
}
