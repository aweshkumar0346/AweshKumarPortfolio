import { MARQUEE } from "@/data/portfolio";

export default function Marquee() {
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="track">{items.map((t, i) => <span key={i}>{t}</span>)}</div>
    </div>
  );
}
