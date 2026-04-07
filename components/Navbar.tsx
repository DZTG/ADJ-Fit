"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#1f1f1f] bg-[#0a0a0a]/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="text-lg font-semibold tracking-tight text-white transition-colors hover:text-[#c9a84c]"
        >
          Alex Dea Jue
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm tracking-wide text-[#a3a3a3] transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#apply"
            className="rounded-full bg-[#c9a84c] px-5 py-2 text-sm font-medium tracking-wide text-[#0a0a0a] transition-colors hover:bg-[#e4c06e]"
          >
            Apply Now
          </a>
        </nav>

        <button
          type="button"
          className="flex flex-col gap-1.5 p-1 md:hidden"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
            className="overflow-hidden border-b border-[#1f1f1f] bg-[#0a0a0a]/95 backdrop-blur-md md:hidden"
          >
            <nav
              id="mobile-navigation"
              className="flex flex-col gap-4 px-6 py-4"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-1 text-sm text-[#a3a3a3] transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#apply"
                onClick={() => setMenuOpen(false)}
                className="mt-1 rounded-full bg-[#c9a84c] px-5 py-2 text-center text-sm font-medium text-[#0a0a0a] transition-colors hover:bg-[#e4c06e]"
              >
                Apply Now
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
