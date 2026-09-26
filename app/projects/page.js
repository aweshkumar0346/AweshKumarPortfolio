import { PageHead, PrevNext } from "@/components/Blocks";
import ProjectsList from "@/components/ProjectsList";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <>
      <PageHead crumb={[[null, "Projects"]]} title="Projects"
        sub="Full-stack apps, secure APIs and a game or two. Open any project for the full case study." />
      <div className="page-body"><div className="wrap">
        <ProjectsList />
        <PrevNext prev={["/experience", "Experience"]} next={["/skills", "Skills"]} />
      </div></div>
    </>
  );
}
