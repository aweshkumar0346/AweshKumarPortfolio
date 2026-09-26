import Link from "next/link";
import { PageHead } from "@/components/Blocks";

export default function NotFound() {
  return (
    <>
      <PageHead title="Page not found" sub="That page doesn't exist. Head back home to keep exploring." />
      <div className="wrap page-body"><Link className="btn primary" href="/">Go to home</Link></div>
    </>
  );
}
