import { notFound, redirect } from "next/navigation";
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

  const title = `${post.title} – ${post.source?.name} | FondPeace News`;
  const description =
    post.excerpt ||
    `Read a preview of this article originally published by ${post.source?.name}.`;

  return {
    title,
    description,

    robots: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },

    alternates: {
      canonical: post.originalUrl, // 🚨 canonical to original source
    },

    openGraph: {
      title,
      description,
      url: post.originalUrl,
      siteName: "FondPeace News",
      type: "article",
      images: post.image
        ? [
            {
              url: post.image,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
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

  return (
    <PostLayoutClient>
      {/* ============================
          STRUCTURED DATA (JSON-LD)
      =============================== */}
      {/* ============================
          BREADCRUMB STRUCTURED DATA
      =============================== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
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
          }),
        }}
      />

      {/* ============================
          NEWSARTICLE STRUCTURED DATA
      =============================== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: post.title,
            image: post.image ? [post.image] : undefined,
            datePublished: post.publishedAt,
            dateModified: post.publishedAt,
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
            isBasedOn: {
              "@type": "WebPage",
              url: post.originalUrl,
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": post.originalUrl,
            },
            description: post.excerpt,
          }),
        }}
      />

      {/* ============================
          CONTENT
      =============================== */}
      <PostPage post={post} />
    </PostLayoutClient>
  );
}
 
