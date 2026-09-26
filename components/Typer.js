"use client";
import { useEffect, useState } from "react";
import { ROLES } from "@/data/portfolio";

export default function Typer() {
  const [i, setI] = useState(0);
  const [txt, setTxt] = useState("");
  const [del, setDel] = useState(false);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setReduce(true); setTxt(ROLES[0]); }
  }, []);

  useEffect(() => {
    if (reduce) return;
    const full = ROLES[i];
    let t;
    if (!del && txt === full) t = setTimeout(() => setDel(true), 1800);
    else if (del && txt === "") { setDel(false); setI((i + 1) % ROLES.length); }
    else t = setTimeout(() => setTxt(del ? full.slice(0, txt.length - 1) : full.slice(0, txt.length + 1)), del ? 35 : 65);
    return () => clearTimeout(t);
  }, [txt, del, i, reduce]);

  return (
    <p className="role" aria-label={"Roles: " + ROLES.join(", ")}>
      <span aria-hidden="true">&gt; {txt}</span><span className="cur" aria-hidden="true" />
    </p>
  );
}
