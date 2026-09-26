import { PageHead, Award, PrevNext } from "@/components/Blocks";
import { DEGREE, AWARDS, EARLIER_EDU, LANGUAGES } from "@/data/portfolio";

export const metadata = { title: "Education" };

export default function EducationPage() {
  return (
    <>
      <PageHead crumb={[[null, "Education"]]} title="Education" sub="Computer science with a focus on enterprise backend systems." />
      <div className="page-body"><div className="wrap">
        <div className="edu">
          <div className="ebox reveal">
            <h3>{DEGREE.title}</h3>
            <p className="meta">{DEGREE.meta}</p>
            <p>{DEGREE.note}</p>
            <div className="pills" style={{ "--c": "var(--teal)" }}>
              {DEGREE.coursework.map((x) => <span className="pill" key={x}>{x}</span>)}
            </div>
          </div>
          <div className="reveal">{AWARDS.map((a) => <Award key={a[1]} a={a} />)}</div>
        </div>

        <h2 className="sub-h reveal">Earlier education</h2>
        <div className="pgrid">
          {EARLIER_EDU.map(([d, sch, y]) => (
            <div className="ebox reveal" key={d}><h3>{d}</h3><p className="meta">{sch} — {y}</p></div>
          ))}
        </div>

        <h2 className="sub-h reveal">Languages</h2>
        <div className="pgrid">
          {LANGUAGES.map(([l, d]) => (
            <div className="ebox reveal" key={l}><h3>{l}</h3><p className="meta">{d}</p></div>
          ))}
        </div>

        <PrevNext prev={["/skills", "Skills"]} next={["/contact", "Contact"]} />
      </div></div>
    </>
  );
}
