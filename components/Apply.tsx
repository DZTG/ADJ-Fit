"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import { contactEmail } from "@/content/site";

const goals = [
  "Fat Loss",
  "Muscle Gain",
  "Athletic Performance",
  "General Health",
];

const experienceLevels = [
  "Complete Beginner (< 6 months)",
  "Intermediate (6 months - 2 years)",
  "Advanced (2+ years)",
];

const timelines = ["1-3 months", "3-6 months", "6+ months"];

const investmentOptions = [
  "Yes, I'm ready to invest",
  "I need more information first",
  "Not yet",
];

export default function Apply() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, margin: "-60px" });
  const shouldReduceMotion = useReducedMotion();

  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setStatusMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    const lines = [
      `Name: ${String(data.get("name") ?? "")}`,
      `Email: ${String(data.get("email") ?? "")}`,
      `Primary Goal: ${String(data.get("goal") ?? "")}`,
      `Experience Level: ${String(data.get("experience") ?? "")}`,
      `Timeline: ${String(data.get("timeline") ?? "")}`,
      `What's holding you back right now?: ${String(data.get("blocker") ?? "")}`,
      `Prepared to invest in health?: ${String(data.get("investment") ?? "")}`,
      "",
      "Additional Notes:",
      String(data.get("message") ?? ""),
    ];

    const name = String(data.get("name") ?? "Website Application");
    const subject = encodeURIComponent(`Coaching application from ${name}`);
    const body = encodeURIComponent(lines.join("\n"));

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setStatusMessage(
      `Your email app should open with your application pre-filled. If it doesn't, send your answers to ${contactEmail}.`
    );
    setSubmitting(false);
  }

  const inputClass =
    "w-full rounded-xl border border-[#1f1f1f] bg-[#0d0d0d] px-4 py-3 text-sm text-white placeholder:text-[#555] transition-colors duration-200 focus:border-[#c9a84c]/60 focus:outline-none";
  const selectClass =
    inputClass +
    " cursor-pointer appearance-none bg-[image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23a3a3a3' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")] bg-no-repeat bg-[position:right_1rem_center] pr-10";
  const labelClass = "mb-2 block text-sm font-medium text-[#a3a3a3]";

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
            Spots are limited. Fill out the application below and your answers
            will open in a pre-filled email to Alex while the full online form
            is being finalized.
          </motion.p>
        </div>

        <motion.div
          ref={formRef}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
          animate={
            shouldReduceMotion
              ? undefined
              : formInView
                ? { opacity: 1, y: 0 }
                : {}
          }
          transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: "easeOut" }}
          className="rounded-2xl border border-[#1f1f1f] bg-[#0d0d0d] p-8 md:p-10"
        >
          <div className="mb-6 rounded-2xl border border-[#c9a84c]/20 bg-[#c9a84c]/8 px-5 py-4 text-sm text-[#f5f5f5]">
            For now, submitting this application opens your default email app
            with all of your answers filled in. You can also reach Alex
            directly at{" "}
            <a
              href={`mailto:${contactEmail}`}
              className="text-[#c9a84c] underline underline-offset-4"
            >
              {contactEmail}
            </a>
            .
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid gap-6 sm:grid-cols-2">
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
                {goals.map((goal) => (
                  <option key={goal} value={goal} className="bg-[#111]">
                    {goal}
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
                {experienceLevels.map((level) => (
                  <option key={level} value={level} className="bg-[#111]">
                    {level}
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
                {timelines.map((timeline) => (
                  <option key={timeline} value={timeline} className="bg-[#111]">
                    {timeline}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="blocker" className={labelClass}>
                What&apos;s holding you back from reaching your goal? *
              </label>
              <textarea
                id="blocker"
                name="blocker"
                rows={4}
                required
                placeholder="Tell Alex what has been getting in the way so far."
                className={inputClass + " resize-none"}
              />
            </div>

            <div>
              <label htmlFor="investment" className={labelClass}>
                Are you prepared to invest in your health? *
              </label>
              <select
                id="investment"
                name="investment"
                required
                className={selectClass}
                defaultValue=""
              >
                <option value="" disabled>
                  Select an option
                </option>
                {investmentOptions.map((option) => (
                  <option key={option} value={option} className="bg-[#111]">
                    {option}
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

            {statusMessage ? (
              <p
                role="status"
                aria-live="polite"
                className="rounded-2xl border border-[#1f1f1f] bg-[#111111] px-4 py-3 text-sm text-[#d4d4d4]"
              >
                {statusMessage}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-full bg-[#c9a84c] py-4 text-sm font-semibold tracking-wide text-[#0a0a0a] transition-all duration-200 hover:scale-[1.01] hover:bg-[#e4c06e] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? "Preparing..." : "Open Email Application"}
            </button>

            <p className="text-center text-xs text-[#555]">
              By submitting, you agree to be contacted by Alex Dea Jue
              regarding your application. No spam, ever.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
