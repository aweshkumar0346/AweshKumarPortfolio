import { IBM_Plex_Sans, IBM_Plex_Sans_Condensed, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import NetworkCanvas from "@/components/NetworkCanvas";
import RevealObserver from "@/components/RevealObserver";
import { SITE } from "@/data/portfolio";

const body = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body", display: "swap" });
const display = IBM_Plex_Sans_Condensed({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-display", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.title, template: "%s — Awesh Kumar" },
  description: SITE.description,
  openGraph: { title: SITE.title, description: SITE.description, url: SITE.url, siteName: SITE.name, type: "website", images: [{ url: "/awesh-kumar.jpg", width: 720, height: 960, alt: "Awesh Kumar" }] },
  twitter: { card: "summary", title: SITE.title, description: SITE.description, images: ["/awesh-kumar.jpg"] },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0A1426",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable} ${mono.variable}`}>
      <body>
        <noscript><style>{`.reveal,.ln{opacity:1!important;transform:none!important}`}</style></noscript>
        <NetworkCanvas />
        <Header />
        <main>{children}</main>
        <footer>© {new Date().getFullYear()} Awesh Kumar · Built with Next.js</footer>
        <RevealObserver />
      </body>
    </html>
  );
}
