"use client";

import { useEffect } from "react";

export default function Reveal() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("reveal-ready");

    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const reveal = (el: Element) => el.classList.add("is-visible");

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced || !("IntersectionObserver" in window)) {
      els.forEach(reveal);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    // Reveal anything already within (or above) the viewport immediately so
    // above-the-fold content never depends on the observer's first callback.
    const vh = window.innerHeight || 800;
    els.forEach((el) => {
      if (el.getBoundingClientRect().top < vh * 0.9) reveal(el);
      else io.observe(el);
    });

    // Safety net: if the observer never fires (headless/edge cases), ensure
    // nothing stays hidden.
    const fallback = window.setTimeout(() => {
      els.forEach((el) => {
        if (!el.classList.contains("is-visible")) {
          const r = el.getBoundingClientRect();
          if (r.top < vh * 1.5) reveal(el);
        }
      });
    }, 1500);

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return null;
}
