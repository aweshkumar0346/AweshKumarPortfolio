import Link from "next/link";
import Icon from "@/components/Icon";
import Typer from "@/components/Typer";
import HeroVisual from "@/components/HeroVisual";
import { PvHead, Stats, JobCard, ProjectCard, SkillGrid, Award } from "@/components/Blocks";
import { JOBS, PROJECTS, AWARDS, PROFILE, DEGREE, ABOUT } from "@/data/portfolio";

export default function Home() {
  const [cur, ...rest] = JOBS;
  return (
    <>
      <div className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="avail"><span className="dot" />Associate SE at Xpert Digital · Open to remote</div>
            <h1>Awesh<br />Kumar</h1>
            <Typer />
            <p className="lede">I build secure Java microservices and APIs for digital banking — currently integrating Temenos T24, Infinity and Fabric for a European bank.</p>
            <div className="actions">
              <Link className="btn primary" href="/projects">View my work <Icon n="arrow" /></Link>
              <Link className="btn" href="/contact">Get in touch</Link>
              <a className="btn" href={PROFILE.resume} download><Icon n="download" />Download CV</a>
            </div>
          </div>
          <HeroVisual />
        </div>
      </div>
      <Stats />

      <section className="pv"><div className="wrap">
        <PvHead title="About me" sub="A short version of who I am and how I work." to="/about" label="Read more" />
        <div className="about-pv reveal">
          <p>{ABOUT.paragraphs[0]}</p>
          <div className="pills">{ABOUT.interests.map((x) => <span className="pill" key={x}>{x}</span>)}</div>
        </div>
      </div></section>

      <section className="pv" style={{ paddingTop: 0 }}><div className="wrap">
        <PvHead title="Experience" sub="Where I'm working now, and how I got here." to="/experience" label="Full experience" />
        <JobCard j={cur} brief />
        {rest.map((j) => (
          <Link className="mini reveal" key={j.title} href="/experience">
            <div><b>{j.title}</b><br /><span>{j.org}</span></div><span>{j.when}</span>
          </Link>
        ))}
      </div></section>

      <section className="pv"><div className="wrap">
        <PvHead title="Projects" sub="A few things I've designed and built." to="/projects" label={`All ${PROJECTS.length} projects`} />
        <ul className="pgrid">{PROJECTS.slice(0, 2).map((p) => <ProjectCard key={p.slug} p={p} brief />)}</ul>
      </div></section>

      <section className="pv"><div className="wrap">
        <PvHead title="Skills" sub="The core of what I work with." to="/skills" label="All skills" />
        <SkillGrid brief />
      </div></section>

      <section className="pv" style={{ paddingTop: 0 }}><div className="wrap">
        <PvHead title="Education" sub={`${DEGREE.title}, FAST NUCES Karachi, 2021–2025.`} to="/education" label="Education & awards" />
        <div className="pgrid awards reveal">{AWARDS.map((a) => <Award key={a[1]} a={a} />)}</div>
      </div></section>

      <section className="pv hero-mini" style={{ paddingTop: 0 }}><div className="wrap">
        <div className="cbox reveal">
          <h2>Let&apos;s build something reliable.</h2>
          <p className="sub">Hiring, a freelance project or just a question — send me a message.</p>
          <div className="actions">
            <Link className="btn primary" href="/contact"><Icon n="mail" />Send a message</Link>
            <a className="btn" href={PROFILE.linkedin} target="_blank" rel="noopener"><Icon n="link" />LinkedIn</a>
          </div>
        </div>
      </div></section>
    </>
  );
}
