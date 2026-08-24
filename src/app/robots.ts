import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/stockist/", // private wholesale order pages, not for public search
      },
    ],
    sitemap: "https://www.mamassourdough.co.uk/sitemap.xml",
  };
}
