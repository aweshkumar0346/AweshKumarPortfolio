import { PageHead, SkillGrid, PrevNext } from "@/components/Blocks";

export const metadata = { title: "Skills" };

export default function SkillsPage() {
  return (
    <>
      <PageHead crumb={[[null, "Skills"]]} title="Skills" sub="The tools I reach for every day, and the ones I've shipped with." />
      <div className="page-body"><div className="wrap">
        <SkillGrid />
        <PrevNext prev={["/projects", "Projects"]} next={["/education", "Education"]} />
      </div></div>
    </>
  );
}
