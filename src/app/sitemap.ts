import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://byulchae.vercel.app";
  const now = new Date();
  const routes = [
    "/",
    "/about",
    "/treatments",
    "/quiz",
    "/location",
    "/reservation",
    "/faq",
  ];
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "/" ? 1 : 0.7,
  }));
}
