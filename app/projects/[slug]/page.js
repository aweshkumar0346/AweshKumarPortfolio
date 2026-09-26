import { Fragment } from "react";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import { PageHead, PrevNext } from "@/components/Blocks";
import { PROJECTS } from "@/data/portfolio";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const p = PROJECTS.find((x) => x.slug === params.slug);
  return p ? { title: p.name, description: p.desc } : { title: "Project not found" };
}

export default function ProjectDetail({ params }) {
  const i = PROJECTS.findIndex((p) => p.slug === params.slug);
  if (i < 0) notFound();
  const p = PROJECTS[i];
  const prev = PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(i + 1) % PROJECTS.length];

  return (
    <>
      <PageHead crumb={[["/projects", "Projects"], [null, p.name]]} title={p.name} sub={p.desc} />
      <div className="page-body" style={{ "--c": p.color }}><div className="wrap">
        <div className="detail">
          <div>
            <div className="dbox reveal">
              <h2>What it does</h2>
              <ul className="hl">{p.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
            </div>
            <div className="dbox reveal">
              <h2>How it&apos;s built</h2>
              <div className="arch">
                {p.arch.map(([t, d], k) => (
                  <Fragment key={t}>
                    {k ? <span className="down" aria-hidden="true" /> : null}
                    <div className="layer"><b>{t}</b><span>{d}</span></div>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="dbox reveal">
              <div className="icon"><Icon n={p.icon} /></div>
              <dl className="facts">{p.facts.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
              {p.repo ? (
                <div className="actions" style={{ marginTop: "1.4rem" }}>
                  <a className="btn primary" href={p.repo} target="_blank" rel="noopener"><Icon n="git" />View code</a>
                </div>
              ) : null}
            </div>
            <div className="dbox reveal">
              <h2>Tech stack</h2>
              <ul className="stack">{p.stack.map((s) => <li key={s}>{s}</li>)}</ul>
            </div>
          </div>
        </div>
        <PrevNext prev={[`/projects/${prev.slug}`, prev.name, "Previous project"]} next={[`/projects/${next.slug}`, next.name, "Next project"]} />
      </div></div>
    </>
  );
}
