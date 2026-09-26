"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV } from "@/data/portfolio";
import Icon from "./Icon";
import Marquee from "./Marquee";

export default function Header() {
  const path = usePathname();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const bar = useRef(null);

  useEffect(() => {
    const on = () => {
      setSolid(window.scrollY > 40);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, [path]);

  useEffect(() => setOpen(false), [path]);
  const isActive = (to) => path === to || path.startsWith(to + "/");

  return (
    <>
      <div className="progress" ref={bar} style={{ transform: "scaleX(0)" }} />
      <header className={"top" + (solid || open ? " solid" : "")}>
        <div className="wrap">
          <Link className="brand" href="/"><span className="mono">AK</span>Awesh Kumar</Link>
          <button className="menu-btn" aria-expanded={open} aria-controls="site-nav"
            aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
            <Icon n={open ? "close" : "menu"} />
          </button>
          <nav id="site-nav" className={"nav" + (open ? " open" : "")} aria-label="Pages">
            {NAV.map(([to, label]) => (
              <Link key={to} href={to} className={isActive(to) ? "active" : ""} aria-current={isActive(to) ? "page" : undefined}>
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <Marquee />
      </header>
    </>
  );
}
