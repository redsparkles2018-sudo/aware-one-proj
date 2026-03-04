import type { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";
import { postSlugsQuery } from "@/sanity/lib/queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://awareone.co.nz";
  const staticRoutes = [
    "",
    "/services",
    "/services/operate",
    "/services/source",
    "/services/build",
    "/about",
    "/contact",
    "/blog",
  ];

  const posts = await client.fetch(postSlugsQuery);
  const postRoutes = posts.map((p: { slug: string }) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes.map((route) => ({
      url: `${base}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...postRoutes,
  ];
}
