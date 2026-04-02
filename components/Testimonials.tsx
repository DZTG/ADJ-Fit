"use client";

import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import jordanTransformation from "@/public/client/jordan-transformation.png";
import { featuredTransformation, testimonials } from "@/content/site";

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, index) => (
        <svg
          key={index}
          className="h-4 w-4 text-[#c9a84c]"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[number];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const shouldReduceMotion = useReducedMotion();
  const initials = testimonial.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

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
        duration: shouldReduceMotion ? 0 : 0.65,
        delay: shouldReduceMotion ? 0 : index * 0.12,
        ease: "easeOut",
      }}
      className="flex flex-col gap-5 rounded-2xl border border-[#1f1f1f] bg-[#0d0d0d] p-8 transition-colors duration-300 hover:border-[#2a2a2a]"
    >
      <StarRating count={5} />
      <p className="text-sm italic leading-relaxed text-[#d4d4d4]">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="mt-auto flex items-center gap-3 border-t border-[#1a1a1a] pt-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#c9a84c]/15 text-xs font-semibold uppercase tracking-[0.18em] text-[#c9a84c]">
          {initials}
        </div>
        <div>
          <div className="text-sm font-semibold text-white">
            {testimonial.name}
          </div>
          <div className="text-xs font-medium text-[#c9a84c]">
            {testimonial.result}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="results" className="scroll-mt-20 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center" ref={headerRef}>
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={
              shouldReduceMotion
                ? undefined
                : headerInView
                  ? { opacity: 1, y: 0 }
                  : {}
            }
            transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
            className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#c9a84c]"
          >
            Results
          </motion.p>
          <motion.h2
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={
              shouldReduceMotion
                ? undefined
                : headerInView
                  ? { opacity: 1, y: 0 }
                  : {}
            }
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              delay: shouldReduceMotion ? 0 : 0.1,
            }}
            className="text-3xl font-bold text-white sm:text-4xl md:text-5xl"
          >
            Real clients. Real momentum.
          </motion.h2>
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={
              shouldReduceMotion
                ? undefined
                : headerInView
                  ? { opacity: 1, y: 0 }
                  : {}
            }
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              delay: shouldReduceMotion ? 0 : 0.2,
            }}
            className="mx-auto mt-4 max-w-xl text-[#a3a3a3]"
          >
            From body recomposition to long-term consistency, Alex coaches
            people toward results they can actually maintain.
          </motion.p>
        </div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.7 }}
          className="mb-12 overflow-hidden rounded-2xl border border-[#1f1f1f] bg-[#0d0d0d]"
        >
          <div className="grid gap-0 md:grid-cols-[1.1fr_0.9fr]">
            <div className="relative bg-[#111111]">
              <div className="relative aspect-[714/658]">
                <Image
                  src={jordanTransformation}
                  alt="Jordan client transformation before and after"
                  fill
                  sizes="(min-width: 768px) 48vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center gap-5 p-8 md:p-10">
              <span className="inline-flex w-fit rounded-full border border-[#c9a84c]/25 bg-[#c9a84c]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#c9a84c]">
                {featuredTransformation.label}
              </span>
              <h3 className="text-2xl font-bold text-white md:text-3xl">
                {featuredTransformation.name}
              </h3>
              <p className="leading-relaxed text-[#a3a3a3]">
                {featuredTransformation.summary}
              </p>
              <p className="text-sm text-white/65">
                Results come from a repeatable system: smart programming,
                nutrition that fits real life, and accountability that keeps the
                plan moving.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
