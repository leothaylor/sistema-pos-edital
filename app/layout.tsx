import type { Metadata } from "next";
import "./globals.css";
import "./long-landing-interactions.css";
import { TrackingScripts } from "./components/TrackingScripts";
import { siteOrigin } from "./config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  applicationName: "Neural Concursos",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <TrackingScripts />
      </body>
    </html>
  );
}
