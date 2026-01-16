import PostPage from "@/Components/PostPage.jsx";
export const dynamic = "force-dynamic";

export const metadata = {
  title: "FondPeace News – Real-Time Apple News, iPhone, Mac & iOS Updates",
  description:
    "FondPeace News is an independent Apple technology news aggregator curating real-time updates on iPhone, Mac, and iOS from trusted publishers.",
  keywords: [
    "Apple News",
    "iPhone Updates",
    "Mac News",
    "iOS News",
    "Apple Technology",
    "Tech News Aggregator"
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1
    }
  },
  alternates: {
    canonical: "https://news.fondpeace.com"
  },
  openGraph: {
    title: "FondPeace News – Real-Time Apple News, iPhone, Mac & iOS Updates",
    description:
      "Independent Apple news aggregation platform delivering curated updates from authoritative tech sources.",
    url: "https://news.fondpeace.com",
    siteName: "FondPeace News",
    images: [
      {
        url: "https://news.fondpeace.com/FondPeace%20News.jpg",
        width: 1200,
        height: 630,
        alt: "FondPeace News"
      }
    ],
    type: "website"
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://news.fondpeace.com/#website",
        "url": "https://news.fondpeace.com",
        "name": "FondPeace News",
        "publisher": {
          "@id": "https://news.fondpeace.com/#organization"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://news.fondpeace.com/#homepage",
        "url": "https://news.fondpeace.com",
        "name": "FondPeace News – Real-Time Apple News",
        "isPartOf": {
          "@id": "https://news.fondpeace.com/#website"
        },
        "about": {
          "@id": "https://news.fondpeace.com/#organization"
        }
      },
      {
        "@type": "NewsMediaOrganization",
        "@id": "https://news.fondpeace.com/#organization",
        "name": "FondPeace News",
        "url": "https://news.fondpeace.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://news.fondpeace.com/logo-schema.png",
          "width": 512,
          "height": 512
        },
        "publishingPrinciples":
          "https://news.fondpeace.com/editorial-policy",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Editorial",
          "email": "contact@fondpeace.com"
        },
        "sameAs": ["https://twitter.com/fondpeace"]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PostPage />
    </main>
  );
}


