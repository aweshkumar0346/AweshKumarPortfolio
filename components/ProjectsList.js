"use client";
import { useState } from "react";
import { PROJECTS, FILTERS } from "@/data/portfolio";
import { ProjectCard } from "./Blocks";

export default function ProjectsList() {
  const [f, setF] = useState("All");
  const match = (p) => f === "All" || p.stack.includes(f);
  return (
    <>
      <div className="filters reveal" role="group" aria-label="Filter projects by technology">
        {FILTERS.map((x) => (
          <button key={x} className="chip" aria-pressed={f === x} onClick={() => setF(x)}>{x}</button>
        ))}
      </div>
      <p className="sr" aria-live="polite">{PROJECTS.filter(match).length} projects match {f}</p>
      <ul className="pgrid">
        {PROJECTS.map((p) => <ProjectCard key={p.slug} p={p} dim={!match(p)} />)}
      </ul>
    </>
  );
}
