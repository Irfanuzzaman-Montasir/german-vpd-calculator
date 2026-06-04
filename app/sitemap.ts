import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://germanvpd.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticRoutes = [
    { url: siteUrl, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${siteUrl}/calculator`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${siteUrl}/faq`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${siteUrl}/blog`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${siteUrl}/about`, priority: 0.6, changeFrequency: "monthly" as const },
    { url: `${siteUrl}/contact`, priority: 0.5, changeFrequency: "yearly" as const },
  ];

  const blogRoutes = [
    { slug: "cgpa-to-german-grade", date: "2025-01-15" },
    { slug: "what-is-vpd", date: "2025-01-20" },
    { slug: "what-is-uni-assist", date: "2025-02-01" },
    { slug: "german-grading-system", date: "2025-02-10" },
    { slug: "minimum-cgpa-for-germany", date: "2025-02-18" },
  ].map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  return [
    ...staticRoutes.map((r) => ({ ...r, lastModified: now })),
    ...blogRoutes,
  ];
}
