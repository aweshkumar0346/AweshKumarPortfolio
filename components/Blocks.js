// Small presentational building blocks shared by the pages
import Link from "next/link";
import Icon from "./Icon";
import { STATS, SKILLS } from "@/data/portfolio";

export function PageHead({ crumb = [], title, sub }) {
  return (
    <div className="page-head"><div className="wrap">
      <p className="crumbs">
        <Link href="/">Home</Link>
        {crumb.map(([to, l]) => <span key={l}> / {to ? <Link href={to}>{l}</Link> : l}</span>)}
      </p>
      <h1>{title}</h1>
      {sub ? <p>{sub}</p> : null}
    </div></div>
  );
}

export function PvHead({ title, sub, to, label }) {
  return (
    <div className="pv-head reveal">
      <div className="sec-head"><h2>{title}</h2><p>{sub}</p></div>
      <Link className="more" href={to}>{label} <Icon n="arrow" /></Link>
    </div>
  );
}

export function PrevNext({ prev, next }) {
  return (
    <div className="pn">
      {prev ? <Link href={prev[0]}><small>{prev[2] || "Previous"}</small><b>{prev[1]}</b></Link> : <span />}
      {next ? <Link className="next" href={next[0]}><small>{next[2] || "Next"}</small><b>{next[1]}</b></Link> : <span />}
    </div>
  );
}

export function Stats() {
  return (
    <div className="stats"><div className="wrap"><div className="stats-grid reveal">
      {STATS.map(([n, l]) => <div className="stat" key={l}><b>{n}</b><span>{l}</span></div>)}
    </div></div></div>
  );
}

export function JobCard({ j, brief }) {
  const points = brief ? j.points.slice(0, 2) : j.points;
  const mods = brief ? [] : j.modules || [];
  return (
    <article className={"job reveal" + (j.current ? " current" : "")}>
      <div className="job-top"><h3>{j.title}</h3><span className="when">{j.when}</span></div>
      <p className="org">{j.org}</p>
      {j.client ? (
        <div className="client">
          <span className="flag" aria-hidden="true">{j.client.flag}</span>
          <div>{j.client.name}<small>{j.client.note}</small></div>
        </div>
      ) : null}
      <ul>{points.map((p) => <li key={p}>{p}</li>)}</ul>
      {(j.platforms || mods.length) ? (
        <div className="mods">
          {(j.platforms || []).map((m) => <span className="mod plat" key={m}>{m}</span>)}
          {mods.map((m) => <span className="mod" key={m}>{m} module</span>)}
        </div>
      ) : null}
    </article>
  );
}

export function ProjectCard({ p, dim, brief }) {
  const wide = p.feat && !brief;
  return (
    <li className="reveal" style={wide ? { gridColumn: "1 / -1" } : undefined}>
      <Link className={"card" + (dim ? " dim" : "")} href={`/projects/${p.slug}`} style={{ "--c": p.color }}>
        <div className="icon"><Icon n={p.icon} /></div>
        <div className="tag">{p.tag}</div>
        <h3>{p.name}</h3>
        <p>{brief ? p.short : p.desc}</p>
        <ul className="stack">{(brief ? p.stack.slice(0, 4) : p.stack).map((s) => <li key={s}>{s}</li>)}</ul>
        <span className="read">Read case study <Icon n="arrow" /></span>
      </Link>
    </li>
  );
}

export function SkillGrid({ brief }) {
  const groups = brief ? SKILLS.slice(0, 3) : SKILLS;
  return (
    <div className="sgrid">
      {groups.map(([t, c, items]) => (
        <div className="sbox reveal" key={t} style={{ "--c": c }}>
          <h3><i />{t}</h3>
          <div className="pills">{(brief ? items.slice(0, 5) : items).map((s) => <span className="pill" key={s}>{s}</span>)}</div>
        </div>
      ))}
    </div>
  );
}

export function Award({ a: [ic, t, d] }) {
  return (
    <div className="award">
      <span className="medal"><Icon n={ic} /></span>
      <div><b>{t}</b><span>{d}</span></div>
    </div>
  );
}
