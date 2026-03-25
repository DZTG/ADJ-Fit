"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "150+", label: "Clients Coached" },
  { value: "5", label: "Years Experience" },
  { value: "98%", label: "Client Retention" },
];

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
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-28 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <FadeInWhenVisible delay={0}>
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-[#111111]">
                <img
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"
                  alt="Alex Dea Jue - Fitness Coach"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Decorative gold border accent */}
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border border-[#c9a84c]/30 -z-10" />
              {/* Gold glow */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full bg-[#c9a84c]/10 blur-3xl -z-10" />
            </div>
          </FadeInWhenVisible>

          {/* Text */}
          <div className="flex flex-col gap-6">
            <FadeInWhenVisible delay={0.1}>
              <p className="text-[#c9a84c] text-sm font-medium tracking-[0.2em] uppercase mb-3">
                About Alex
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                Coaching That Actually Works
              </h2>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2}>
              <p className="text-[#a3a3a3] leading-relaxed text-base md:text-lg">
                Alex Dea Jue isn&apos;t your typical online coach. With five years of
                experience helping real people make real changes, Alex has built
                a reputation for cutting through the noise and delivering
                results that last — not just for a season, but for life.
              </p>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.3}>
              <p className="text-[#a3a3a3] leading-relaxed text-base md:text-lg">
                Every plan is built from scratch around you: your schedule, your
                lifestyle, your starting point. No cookie-cutter templates, no
                generic diets, no programs that fall apart the moment life gets
                busy. Just sustainable, science-backed habits that compound over
                time.
              </p>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.4}>
              <p className="text-[#a3a3a3] leading-relaxed text-base md:text-lg">
                Whether you&apos;re looking to lose fat, build muscle, or simply feel
                better in your own body — Alex meets you exactly where you are
                and guides you to where you want to be.
              </p>
            </FadeInWhenVisible>

            {/* Stats */}
            <FadeInWhenVisible delay={0.5}>
              <div className="grid grid-cols-3 gap-4 mt-4 pt-6 border-t border-[#1f1f1f]">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-[#c9a84c]">
                      {stat.value}
                    </div>
                    <div className="text-xs text-[#a3a3a3] mt-1 leading-tight">
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
