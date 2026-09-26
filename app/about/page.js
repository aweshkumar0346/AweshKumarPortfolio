import Image from "next/image";
import { PageHead, PrevNext } from "@/components/Blocks";
import { ABOUT, PROFILE } from "@/data/portfolio";

export const metadata = { title: "About", description: ABOUT.short };

export default function AboutPage() {
  return (
    <>
      <PageHead crumb={[[null, "About"]]} title="About me" sub={ABOUT.short} />
      <div className="page-body" style={{ "--c": "var(--teal)" }}><div className="wrap">
        <div className="detail">
          <div>
            <div className="dbox reveal">
              <h2>My story</h2>
              {ABOUT.paragraphs.map((t) => <p key={t.slice(0, 24)}>{t}</p>)}
            </div>
            <div className="dbox reveal">
              <h2>How I work</h2>
              <div className="vgrid">
                {ABOUT.values.map(([t, d]) => (
                  <div className="vbox" key={t}><b>{t}</b><span>{d}</span></div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="dbox reveal">
              <Image className="avatar" src={PROFILE.photo} alt="Awesh Kumar" width={84} height={84} />
              <dl className="facts">
                {ABOUT.facts.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
              </dl>
            </div>
            <div className="dbox reveal">
              <h2>Interested in</h2>
              <div className="pills">{ABOUT.interests.map((x) => <span className="pill" key={x}>{x}</span>)}</div>
            </div>
          </div>
        </div>
        <PrevNext prev={["/", "Home", "Back to"]} next={["/experience", "Experience"]} />
      </div></div>
    </>
  );
}
