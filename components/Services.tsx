"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { services } from "@/content/site";

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
      animate={
        shouldReduceMotion
          ? undefined
          : inView
            ? { opacity: 1, y: 0 }
            : {}
      }
      transition={{
        duration: shouldReduceMotion ? 0 : 0.6,
        delay: shouldReduceMotion ? 0 : index * 0.12,
        ease: "easeOut",
      }}
      className={`group relative flex flex-col rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 ${
        service.featured
          ? "mt-5 border-[#c9a84c]/40 bg-[#111111] hover:border-[#c9a84c]/70"
          : "border-[#1f1f1f] bg-[#0d0d0d] hover:border-[#2e2e2e]"
      }`}
    >
      {service.featured ? (
        <div className="absolute -top-3.5 left-8">
          <span className="rounded-full bg-[#c9a84c] px-3 py-1 text-xs font-semibold tracking-wide text-[#0a0a0a]">
            Most Popular
          </span>
        </div>
      ) : null}

      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#c9a84c]/20 bg-[#c9a84c]/10 text-sm font-semibold tracking-[0.18em] text-[#c9a84c]">
        {String(index + 1).padStart(2, "0")}
      </div>

      <h3 className="mb-3 text-xl font-bold text-white">{service.title}</h3>
      <p className="mb-6 text-sm leading-relaxed text-[#a3a3a3]">
        {service.description}
      </p>

      <div className="mb-6 flex flex-wrap gap-2 text-xs uppercase tracking-[0.18em] text-white/60">
        <span className="rounded-full border border-white/10 px-3 py-2">
          {service.duration}
        </span>
        <span className="rounded-full border border-[#c9a84c]/25 bg-[#c9a84c]/10 px-3 py-2 text-[#c9a84c]">
          {service.price}
        </span>
      </div>

      <ul className="mb-8 flex flex-col gap-2">
        {service.features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-2.5 text-sm text-[#d4d4d4]"
          >
            <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-[#c9a84c]/15">
              <svg
                className="h-2.5 w-2.5 text-[#c9a84c]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <a
          href="#apply"
          className={`block rounded-full px-6 py-3 text-center text-sm font-semibold transition-all duration-200 ${
            service.featured
              ? "bg-[#c9a84c] text-[#0a0a0a] hover:bg-[#e4c06e]"
              : "border border-[#2e2e2e] text-white hover:border-[#c9a84c]/50 hover:text-[#c9a84c]"
          }`}
        >
          Start Here
        </a>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="services" className="scroll-mt-20 bg-[#050505] px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center" ref={ref}>
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={
              shouldReduceMotion
                ? undefined
                : inView
                  ? { opacity: 1, y: 0 }
                  : {}
            }
            transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
            className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#c9a84c]"
          >
            Services
          </motion.p>
          <motion.h2
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={
              shouldReduceMotion
                ? undefined
                : inView
                  ? { opacity: 1, y: 0 }
                  : {}
            }
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              delay: shouldReduceMotion ? 0 : 0.1,
            }}
            className="text-3xl font-bold text-white sm:text-4xl md:text-5xl"
          >
            Coaching options built for how you want to work
          </motion.h2>
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={
              shouldReduceMotion
                ? undefined
                : inView
                  ? { opacity: 1, y: 0 }
                  : {}
            }
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              delay: shouldReduceMotion ? 0 : 0.2,
            }}
            className="mx-auto mt-4 max-w-xl text-[#a3a3a3]"
          >
            Every package is grounded in Alex&apos;s coaching philosophy:
            sustainable nutrition, intelligent training, and accountability that
            helps progress actually stick.
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
