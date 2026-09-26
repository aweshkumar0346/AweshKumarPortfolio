import { PageHead, JobCard, PrevNext } from "@/components/Blocks";
import { JOBS } from "@/data/portfolio";

export const metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <>
      <PageHead crumb={[[null, "Experience"]]} title="Experience"
        sub="Enterprise banking on Temenos and Oracle platforms, freelance projects since 2024, and two years mentoring programmers at FAST." />
      <div className="page-body"><div className="wrap">
        <div className="timeline">{JOBS.map((j) => <JobCard key={j.title} j={j} />)}</div>
        <PrevNext prev={["/about", "About"]} next={["/projects", "Projects"]} />
      </div></div>
    </>
  );
}
