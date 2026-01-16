import { notFound, redirect } from "next/navigation";
import Script from "next/script";
import Link from "next/link";
import PostPage from "@/Components/PostPage";
import PostLayoutClient from "@/Components/PostLayoutClient";

export const dynamic = "force-dynamic";

const API_URL = "https://applenews.onrender.com/posts";

/* ============================
   SEO METADATA (AGGREGATOR SAFE)
=============================== */
export async function generateMetadata({ params }) {
  if (!params) return {};

  const { source, pid, slug } = params;
  if (!source || !pid || !slug) return {};

  const finalSlug = Array.isArray(slug) ? slug.join("/") : slug;

  const res = await fetch(
    `${API_URL}/${source}/${pid}/${finalSlug}`,
    { cache: "no-store" }
  );

  if (!res.ok) return {};

  const post = await res.json();
  const sourceName = post?.source?.name || source;

  const title = `${post.title} – ${sourceName} | FondPeace News`;
  const description =
    post.excerpt ||
    `Read a preview of this article originally published by ${sourceName}.`;

  return {
    title,
    description,

    alternates: {
      canonical: post.originalUrl,
    },

    robots: {
      index: true,
      follow: true,
      maxImagePreview: "large",
      maxSnippet: -1,
      maxVideoPreview: -1,
    },

    openGraph: {
      title,
      description,
      url: post.originalUrl,
      siteName: "FondPeace News",
      type: "article",
      images: post.image
        ? [{ url: post.image, width: 1200, height: 630 }]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: post.image ? [post.image] : [],
    },
  };
}

/* ============================
   PAGE RENDER
=============================== */
export default async function Page({ params }) {
  if (!params) notFound();

  const { source, pid, slug } = params;
  if (!source || !pid || !slug) notFound();

  const finalSlug = Array.isArray(slug) ? slug.join("/") : slug;

  const res = await fetch(
    `${API_URL}/${source}/${pid}/${finalSlug}`,
    { cache: "no-store" }
  );

  if (res.status === 301 || res.status === 302) {
    const location = res.headers.get("location");
    if (location) redirect(location);
  }

  if (!res.ok) notFound();

  const post = await res.json();
  const sourceName = post?.source?.name || source;

  /* ============================
     STRUCTURED DATA
  =============================== */

  // ✅ BREADCRUMB (NO HOME)
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "FondPeace News",
        item: "https://news.fondpeace.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: sourceName,
        item: `https://news.fondpeace.com/${source}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: post.originalUrl,
      },
    ],
  };

  // ✅ ARTICLE SCHEMA
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    image: post.image ? [post.image] : undefined,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    description: post.excerpt,
    isAccessibleForFree: true,
    author: {
      "@type": "Organization",
      name: sourceName,
      url: post.originalUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "FondPeace News",
      logo: {
        "@type": "ImageObject",
        url: "https://news.fondpeace.com/FondPeace%20News.jpg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": post.originalUrl,
    },
  };

  return (
    <PostLayoutClient>
      {/* ============================
          STRUCTURED DATA (HEAD)
      =============================== */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <Script
        id="newsarticle-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      {/* ============================
          CONTENT
      =============================== */}
      <PostPage post={post} />
    </PostLayoutClient>
  );
}
 
