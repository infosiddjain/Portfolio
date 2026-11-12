import type { MetadataRoute } from "next";
import { caseStudySlugs } from "@/data/caseStudies";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...caseStudySlugs.map((slug) => ({
      url: absoluteUrl(`/work/${slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: absoluteUrl("/blog"), lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];
}
