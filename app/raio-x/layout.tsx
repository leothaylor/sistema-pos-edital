import type { Metadata } from "next";
import { siteUrls } from "../config/site";

export const metadata: Metadata = {
  title: "Raio X Express mudou de endereço | Neural Concursos",
  description: "Acesse a página oficial do Raio X Express.",
  alternates: { canonical: siteUrls.raioX },
  robots: { index: false, follow: true },
};

export default function LegacyRaioXLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
