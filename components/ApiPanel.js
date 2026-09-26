"use client";
import { useEffect, useState } from "react";
import { API_LINES } from "@/data/portfolio";

export default function ApiPanel() {
  const [shown, setShown] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setShown(API_LINES.length); return; }
    if (shown >= API_LINES.length) return;
    const t = setTimeout(() => setShown((n) => n + 1), shown === 0 ? 700 : 120);
    return () => clearTimeout(t);
  }, [shown]);

  return (
    <div className="panel" role="img"
      aria-label="API response: Associate Software Engineer at Xpert Digital, integrating Temenos T24, Infinity and Fabric for a European bank.">
      <div className="panel-head">
        <span className="lights"><i /><i /><i /></span>
        <span className="verb">GET</span><span>/api/v1/engineers/awesh-kumar</span>
        <span className="status">● 200 OK</span>
      </div>
      <pre aria-hidden="true">
        {API_LINES.map((line, i) => (
          <span key={i} className={"ln" + (i < shown ? " on" : "")}>
            {line.map(([c, t], j) => <span key={j} className={c}>{t}</span>)}
            {i === API_LINES.length - 1 && shown === API_LINES.length ? <> <span className="caret" /></> : null}
          </span>
        ))}
      </pre>
    </div>
  );
}
