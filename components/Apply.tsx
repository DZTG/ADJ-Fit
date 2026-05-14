"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

export default function Apply() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const embedRef = useRef(null);
  const embedInView = useInView(embedRef, { once: true, margin: "-60px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="apply" className="scroll-mt-20 bg-[#050505] px-6 py-28">
      <div className="mx-auto max-w-2xl">
        <div className="mb-14 text-center" ref={headerRef}>
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
            Apply
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
            Ready to Start?
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
            className="mx-auto mt-4 max-w-lg leading-relaxed text-[#a3a3a3]"
          >
            Spots are limited. Book a free 15-minute call with Alex to get
            started.
          </motion.p>
        </div>

        <motion.div
          ref={embedRef}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
          animate={
            shouldReduceMotion
              ? undefined
              : embedInView
                ? { opacity: 1, y: 0 }
                : {}
          }
          transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: "easeOut" }}
          className="overflow-hidden rounded-2xl border border-[#1f1f1f]"
        >
          <iframe
            src="https://calendly.com/alexdeajue/15min?embed_type=Inline&hide_gdpr_banner=1&primary_color=c9a84c&background_color=0d0d0d&text_color=ffffff"
            width="100%"
            height="700"
            frameBorder="0"
            title="Book a call with Alex"
            style={{ display: "block" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
