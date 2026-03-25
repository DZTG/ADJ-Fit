"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    name: "Jordan M.",
    result: "Lost 22 lbs in 12 weeks",
    rating: 5,
    quote:
      "I'd tried every program out there and nothing stuck. Alex took the time to actually understand my schedule and my habits — the plan he built didn't feel like a diet, it felt like a lifestyle. I'm down 22 lbs and I've kept it off for 6 months now.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  },
  {
    name: "Priya S.",
    result: "Added 15 lbs of muscle in 5 months",
    rating: 5,
    quote:
      "As a woman, I was nervous about a strength program. Alex made me feel supported from day one, explained every decision, and the results blew me away. I'm stronger than I've ever been and I actually love training now.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    name: "Marcus T.",
    result: "Dropped 3% body fat, PR'd his marathon time",
    rating: 5,
    quote:
      "I came to Alex as a runner wanting to get leaner without losing endurance. The way he balanced my training and nutrition was unlike anything I'd experienced. PR'd my marathon by 14 minutes. That says it all.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#c9a84c]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({
  t,
  index,
}: {
  t: (typeof testimonials)[number];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.12, ease: "easeOut" }}
      className="bg-[#0d0d0d] border border-[#1f1f1f] rounded-2xl p-8 flex flex-col gap-5 hover:border-[#2a2a2a] transition-colors duration-300"
    >
      <StarRating count={t.rating} />
      <p className="text-[#d4d4d4] leading-relaxed text-sm italic">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-[#1a1a1a]">
        <img
          src={t.avatar}
          alt={t.name}
          className="w-10 h-10 rounded-full object-cover object-top"
        />
        <div>
          <div className="text-white font-semibold text-sm">{t.name}</div>
          <div className="text-[#c9a84c] text-xs font-medium">{t.result}</div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section id="results" className="py-28 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16" ref={headerRef}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[#c9a84c] text-sm font-medium tracking-[0.2em] uppercase mb-4"
          >
            Results
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
          >
            Real People. Real Results.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#a3a3a3] mt-4 max-w-xl mx-auto"
          >
            No cherry-picked transformations. Just consistent results from
            people who showed up and did the work.
          </motion.p>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>

        {/* Before/After placeholder banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="mt-16 rounded-2xl border border-[#1f1f1f] bg-[#0d0d0d] overflow-hidden"
        >
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#1f1f1f]">
            {["Before", "After"].map((label) => (
              <div key={label} className="relative aspect-[16/7] bg-[#111]">
                <img
                  src={
                    label === "Before"
                      ? "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80"
                      : "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80"
                  }
                  alt={`${label} placeholder`}
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs font-semibold tracking-widest uppercase text-[#a3a3a3] bg-[#0a0a0a]/60 px-3 py-1 rounded-full border border-[#1f1f1f]">
                    {label}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="px-8 py-5 text-center">
            <p className="text-[#a3a3a3] text-sm">
              Placeholder before/after layout — swap with real client photos when ready.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
