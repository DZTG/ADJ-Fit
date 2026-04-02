"use client";

import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import alexAbout from "@/public/client/alex-about.jpg";
import { aboutParagraphs, credentials, stats } from "@/content/site";

function FadeInWhenVisible({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
      animate={
        shouldReduceMotion
          ? undefined
          : inView
            ? { opacity: 1, y: 0 }
            : {}
      }
      transition={{
        duration: shouldReduceMotion ? 0 : 0.7,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <FadeInWhenVisible delay={0}>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#111111]">
                <Image
                  src={alexAbout}
                  alt="Alex Dea Jue smiling outdoors"
                  fill
                  sizes="(min-width: 768px) 42vw, 92vw"
                  className="object-cover object-[center_18%]"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border border-[#c9a84c]/30" />
              <div className="absolute -bottom-8 -right-8 -z-10 h-48 w-48 rounded-full bg-[#c9a84c]/10 blur-3xl" />
            </div>
          </FadeInWhenVisible>

          <div className="flex flex-col gap-6">
            <FadeInWhenVisible delay={0.1}>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#c9a84c]">
                About Alex
              </p>
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                Coaching built on purpose, not shortcuts
              </h2>
            </FadeInWhenVisible>

            {aboutParagraphs.map((paragraph, index) => (
              <FadeInWhenVisible key={paragraph} delay={0.2 + index * 0.1}>
                <p className="text-base leading-relaxed text-[#a3a3a3] md:text-lg">
                  {paragraph}
                </p>
              </FadeInWhenVisible>
            ))}

            <FadeInWhenVisible delay={0.5}>
              <div className="flex flex-wrap gap-3">
                {credentials.map((credential) => (
                  <span
                    key={credential}
                    className="rounded-full border border-[#c9a84c]/20 bg-[#111111] px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/75"
                  >
                    {credential}
                  </span>
                ))}
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.6}>
              <p className="text-sm text-[#a3a3a3]">
                Outside coaching, Alex loves food, the outdoors, and music.
              </p>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.7}>
              <div className="mt-4 grid grid-cols-3 gap-4 border-t border-[#1f1f1f] pt-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-[#c9a84c] md:text-3xl">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs leading-tight text-[#a3a3a3]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </div>
    </section>
  );
}
