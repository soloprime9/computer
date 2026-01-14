import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://news.fondpeace.com",
      lastModified: new Date(),
      priority: 1
    },
    {
      url: "https://news.fondpeace.com/about"
    },
    {
      url: "https://news.fondpeace.com/editorial-policy"
    },
    {
      url: "https://news.fondpeace.com/contact"
    },
    {
      url: "https://news.fondpeace.com/privacy-policy"
    },
    {
      url: "https://news.fondpeace.com/terms"
    }
  ];
}
