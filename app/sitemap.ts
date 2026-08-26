import type { MetadataRoute } from "next";
import { siteUrls } from "./config/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrls.home,
      lastModified: new Date("2026-08-26"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: siteUrls.product,
      lastModified: new Date("2026-08-26"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: siteUrls.raioX,
      lastModified: new Date("2026-08-26"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
