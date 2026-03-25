"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: "🎯",
    title: "1:1 Online Coaching",
    description:
      "The most personalized experience available. Fully custom programming tailored to your goals, body, and schedule — plus weekly check-ins, real-time form feedback, and nutrition guidance that fits your life.",
    features: ["Custom training plan", "Weekly check-ins", "Nutrition guidance", "24/7 support"],
    cta: "Apply Now",
    href: "#apply",
    featured: true,
  },
  {
    icon: "📋",
    title: "Training Program Only",
    description:
      "A structured 12-week self-guided program built on the same principles Alex uses with his 1:1 clients. App access included so you can log every session and track your progress anywhere.",
    features: ["12-week program", "App access", "Video demonstrations", "Progress tracking"],
    cta: "Apply Now",
    href: "#apply",
    featured: false,
  },
  {
    icon: "🥗",
    title: "Nutrition Coaching",
    description:
      "Stop guessing what to eat. Alex builds a macro plan around your food preferences, lifestyle, and goals — then holds you accountable week over week with habit coaching and check-ins.",
    features: ["Macro planning", "Habit coaching", "Weekly accountability", "Flexible eating"],
    cta: "Apply Now",
    href: "#apply",
    featured: false,
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
      className={`relative flex flex-col rounded-2xl p-8 border transition-all duration-300 group hover:-translate-y-1 ${
        service.featured
          ? "bg-[#111111] border-[#c9a84c]/40 hover:border-[#c9a84c]/70"
          : "bg-[#0d0d0d] border-[#1f1f1f] hover:border-[#2e2e2e]"
      }`}
    >
      {service.featured && (
        <div className="absolute -top-3.5 left-8">
          <span className="bg-[#c9a84c] text-[#0a0a0a] text-xs font-semibold px-3 py-1 rounded-full tracking-wide">
            Most Popular
          </span>
        </div>
      )}

      {/* Icon */}
      <div className="text-3xl mb-5">{service.icon}</div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>

      {/* Description */}
      <p className="text-[#a3a3a3] text-sm leading-relaxed mb-6">
        {service.description}
      </p>

      {/* Features */}
      <ul className="flex flex-col gap-2 mb-8">
        {service.features.map((feat) => (
          <li key={feat} className="flex items-center gap-2.5 text-sm text-[#d4d4d4]">
            <span className="w-4 h-4 rounded-full bg-[#c9a84c]/15 flex items-center justify-center flex-shrink-0">
              <svg
                className="w-2.5 h-2.5 text-[#c9a84c]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            {feat}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-auto">
        <a
          href={service.href}
          className={`block text-center text-sm font-semibold py-3 px-6 rounded-full transition-all duration-200 ${
            service.featured
              ? "bg-[#c9a84c] text-[#0a0a0a] hover:bg-[#e4c06e]"
              : "border border-[#2e2e2e] text-white hover:border-[#c9a84c]/50 hover:text-[#c9a84c]"
          }`}
        >
          {service.cta}
        </a>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="services" className="py-28 px-6 bg-[#050505]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16" ref={ref}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[#c9a84c] text-sm font-medium tracking-[0.2em] uppercase mb-4"
          >
            Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
          >
            Choose Your Path
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#a3a3a3] mt-4 max-w-xl mx-auto"
          >
            Every option is built on the same foundation: evidence-based
            training, sustainable nutrition, and real accountability.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
