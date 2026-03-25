"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const FORMSPREE_URL = "https://formspree.io/f/PLACEHOLDER";

const goals = [
  "Fat Loss",
  "Muscle Gain",
  "Athletic Performance",
  "General Health",
];

const experienceLevels = [
  "Complete Beginner (< 6 months)",
  "Intermediate (6 months – 2 years)",
  "Advanced (2+ years)",
];

const timelines = ["1–3 months", "3–6 months", "6+ months"];

export default function Apply() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, margin: "-60px" });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass =
    "w-full bg-[#0d0d0d] border border-[#1f1f1f] rounded-xl px-4 py-3 text-white text-sm placeholder:text-[#555] focus:outline-none focus:border-[#c9a84c]/60 transition-colors duration-200";
  const selectClass =
    inputClass +
    " cursor-pointer appearance-none bg-[image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23a3a3a3' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")] bg-no-repeat bg-[position:right_1rem_center] pr-10";
  const labelClass = "block text-sm font-medium text-[#a3a3a3] mb-2";

  return (
    <section id="apply" className="py-28 px-6 bg-[#050505] scroll-mt-20">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14" ref={headerRef}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[#c9a84c] text-sm font-medium tracking-[0.2em] uppercase mb-4"
          >
            Apply
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
          >
            Ready to Start?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#a3a3a3] mt-4 max-w-lg mx-auto leading-relaxed"
          >
            Spots are limited. Fill out the form below and Alex will be in
            touch within 24 hours.
          </motion.p>
        </div>

        {/* Form */}
        <motion.div
          ref={formRef}
          initial={{ opacity: 0, y: 28 }}
          animate={formInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-[#0d0d0d] border border-[#1f1f1f] rounded-2xl p-8 md:p-10"
        >
          {submitted ? (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Application Received!
              </h3>
              <p className="text-[#a3a3a3]">
                Thanks for reaching out. Alex will review your application and
                get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="goal" className={labelClass}>
                  Primary Goal *
                </label>
                <select
                  id="goal"
                  name="goal"
                  required
                  className={selectClass}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select your primary goal
                  </option>
                  {goals.map((g) => (
                    <option key={g} value={g} className="bg-[#111]">
                      {g}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="experience" className={labelClass}>
                  Current Experience Level *
                </label>
                <select
                  id="experience"
                  name="experience"
                  required
                  className={selectClass}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select your experience level
                  </option>
                  {experienceLevels.map((l) => (
                    <option key={l} value={l} className="bg-[#111]">
                      {l}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="timeline" className={labelClass}>
                  Timeline *
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  required
                  className={selectClass}
                  defaultValue=""
                >
                  <option value="" disabled>
                    How long are you committing?
                  </option>
                  {timelines.map((t) => (
                    <option key={t} value={t} className="bg-[#111]">
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>
                  Anything else?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell Alex about your current situation, any injuries, past coaching experience, or anything else that's relevant..."
                  className={inputClass + " resize-none"}
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 rounded-full bg-[#c9a84c] text-[#0a0a0a] font-semibold text-sm tracking-wide hover:bg-[#e4c06e] transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? "Submitting..." : "Submit Application"}
              </button>

              <p className="text-center text-xs text-[#555]">
                By submitting, you agree to be contacted by Alex Dea Jue
                regarding your application. No spam, ever.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
