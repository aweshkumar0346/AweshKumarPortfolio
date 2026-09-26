"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Fades elements with class "reveal" in as they scroll into view, on every page
export default function RevealObserver() {
  const path = usePathname();
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let io;
    const scan = () => {
      const els = document.querySelectorAll(".reveal:not(.in)");
      if (reduce || !("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
      io = io || new IntersectionObserver(
        (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
        { threshold: 0.1 }
      );
      els.forEach((e) => io.observe(e));
    };
    scan();
    const t = setTimeout(scan, 120); // catch content that mounts slightly later
    return () => { clearTimeout(t); io && io.disconnect(); };
  }, [path]);
  return null;
}
