"use client";
import { useRef } from "react";
import Image from "next/image";
import ApiPanel from "./ApiPanel";
import { PROFILE } from "@/data/portfolio";

// Photo with arch frame, orbit ring, floating chips and a gentle mouse parallax
export default function HeroVisual() {
  const ref = useRef(null);

  const move = (e) => {
    if (!ref.current || e.pointerType === "touch") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", ((e.clientX - r.left) / r.width - 0.5) * 2);
    ref.current.style.setProperty("--my", ((e.clientY - r.top) / r.height - 0.5) * 2);
  };
  const reset = () => {
    if (!ref.current) return;
    ref.current.style.setProperty("--mx", 0);
    ref.current.style.setProperty("--my", 0);
  };

  return (
    <div className="visual" ref={ref} onPointerMove={move} onPointerLeave={reset}>
      <div className="photo-ring">
        <span className="orbit" aria-hidden="true" />
        <span className="plate" aria-hidden="true" />
        <div className="photo">
          <Image src={PROFILE.photo} alt="Awesh Kumar" width={720} height={960} priority
            sizes="(max-width: 920px) 90vw, 420px" />
        </div>
        <div className="chip-f chip-a" aria-hidden="true">
          <span className="ic">☕</span><div>Java &amp; Spring Boot<small>Backend engineer</small></div>
        </div>
        <div className="chip-f chip-b" aria-hidden="true">
          <span className="ic">🏦</span><div>Microservices & Cloud<small>Kafka · Docker · Kubernetes</small></div>
        </div>
      </div>
      <ApiPanel />
    </div>
  );
}
