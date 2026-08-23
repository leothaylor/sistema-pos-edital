import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://leothaylor.github.io/sistema-pos-edital/";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteUrl, lastModified: new Date("2026-08-23"), changeFrequency: "monthly", priority: 1 }];
}
