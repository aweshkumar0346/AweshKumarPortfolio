"use client";
import { useEffect, useRef } from "react";

// Animated "transaction network" behind every page
export default function NetworkCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const c = ref.current, ctx = c.getContext("2d");
    let w, h, nodes = [], edges = [], packets = [], raf;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function build() {
      w = c.clientWidth; h = c.clientHeight;
      c.width = w * dpr; c.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.max(18, Math.min(46, Math.floor((w * h) / 26000)));
      nodes = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.15, vy: (Math.random() - 0.5) * 0.15, r: 1.2 + Math.random() * 2.2,
      }));
      packets = [];
    }
    function linkEdges() {
      edges = [];
      const max = Math.min(220, w / 4.5);
      for (let i = 0; i < nodes.length; i++)
        for (let j = i + 1; j < nodes.length; j++) {
          const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          if (d < max) edges.push([i, j, 1 - d / max]);
        }
    }
    function frame() {
      ctx.clearRect(0, 0, w, h);
      if (!reduce) nodes.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      });
      linkEdges();
      edges.forEach(([i, j, a]) => {
        ctx.strokeStyle = `rgba(125,211,252,${a * 0.16})`; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(nodes[i].x, nodes[i].y); ctx.lineTo(nodes[j].x, nodes[j].y); ctx.stroke();
      });
      nodes.forEach((p) => { ctx.fillStyle = "rgba(234,241,248,.55)"; ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 7); ctx.fill(); });
      if (!reduce && edges.length && packets.length < 14 && Math.random() < 0.08) {
        const e = edges[Math.floor(Math.random() * edges.length)];
        packets.push({ a: e[0], b: e[1], t: 0, s: 0.006 + Math.random() * 0.012, gold: Math.random() < 0.35 });
      }
      packets = packets.filter((k) => k.t <= 1);
      packets.forEach((k) => {
        k.t += k.s;
        const A = nodes[k.a], B = nodes[k.b];
        const x = A.x + (B.x - A.x) * k.t, y = A.y + (B.y - A.y) * k.t, col = k.gold ? "245,185,66" : "45,212,191";
        const g = ctx.createRadialGradient(x, y, 0, x, y, 10);
        g.addColorStop(0, `rgba(${col},.9)`); g.addColorStop(1, `rgba(${col},0)`);
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, 10, 0, 7); ctx.fill();
        ctx.fillStyle = `rgb(${col})`; ctx.beginPath(); ctx.arc(x, y, 2.2, 0, 7); ctx.fill();
      });
      if (!reduce) raf = requestAnimationFrame(frame);
    }
    build(); frame();
    const onResize = () => { build(); if (reduce) frame(); };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, []);
  return <canvas className="bgnet" ref={ref} aria-hidden="true" />;
}
