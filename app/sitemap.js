import { SITE, PROJECTS } from "@/data/portfolio";

export default function sitemap() {
  const pages = ["", "/about", "/experience", "/projects", "/skills", "/education", "/contact", ...PROJECTS.map((p) => `/projects/${p.slug}`)];
  return pages.map((p) => ({ url: `${SITE.url}${p}`, lastModified: new Date() }));
}
