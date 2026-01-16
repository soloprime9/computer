import Sidebar from "./Sidebar";
import { WiTime9 } from "react-icons/wi";
import { RiArticleLine } from "react-icons/ri";
import { FaShareSquare, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SiPocket } from "react-icons/si";
import Link from "next/link";

export default function PostPage({ post }) {
  if (!post) return null;

  return (
    <div className="min-h-screen bg-gray-50 text-slate-900 selection:bg-blue-100" style={{
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
      }}>
      
      {/* Header - Fixed Height & Centered Content */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <h1 className="text-xl md:text-2xl font-black tracking-tight text-blue-600">
          <Link href="/">FondPeace News</Link> </h1>
          <nav className="hidden sm:flex gap-6 text-sm font-semibold text-gray-600">
            <span className="hover:text-blue-600 cursor-pointer transition">Apple</span>
            <span className="hover:text-blue-600 cursor-pointer transition">Trending</span>
            <span className="hover:text-blue-600 cursor-pointer transition">Videos</span>
          </nav>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 px-4 py-6 md:py-8">
        
        
        <section className="lg:col-span-8">
    <article className="bg-white rounded-xl border border-gray-100 overflow-hidden">

      {/* Featured Image */}
      <div className="w-full h-[220px] sm:h-[320px] md:h-[420px] bg-gray-100 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Article Body */}
      <div className="p-5 md:p-7 space-y-5">

        {/* Source + Meta */}
        <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-gray-500">
          <div className="flex items-center gap-2">
            {post.source?.logo && (
              <img
                src={post.source.logo}
                alt={post.source.name}
                className="w-5 h-5 rounded-sm object-contain bg-gray-50"
              />
            )}
            <span className="text-gray-900">{post.source?.name}</span>
          </div>

          <span>•</span>

          <span>
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-black leading-tight text-gray-900">
          {post.title}
        </h1>

        {/* Author */}
        {post.author && (
          <p className="text-sm text-gray-500">
            By <span className="font-semibold text-gray-700">{post.author}</span>
          </p>
        )}

        {/* Excerpt / Description */}
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-4 pt-4 border-t">
          <a
            href={post.originalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition"
          >
            Read Full Article
          </a>

          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: post.title,
                  url: post.originalUrl,
                });
              } else {
                navigator.clipboard.writeText(post.originalUrl);
                alert("Link copied!");
              }
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-semibold text-gray-700 hover:bg-gray-50 transition"
          >
            <FaShareSquare />
            Share
          </button>
        </div>
      </div>
    </article>
  </section>

        {/*  Sidebar - Hidden on mobile, visible on Large screens 
        <aside className="lg:col-span-4 hidden lg:block space-y-6">
          <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
            <h3 className="text-xs uppercase tracking-wider font-bold text-blue-600 mb-4">Trending Now</h3>
            <ul className="space-y-5">
              {post.slice(0, 5).map(p => (
                <li key={p._id} className="group/item cursor-pointer">
                  <div className="flex gap-3 items-start">
                    <div className="relative flex-shrink-0">
                      <img
                        src={p.image}
                        alt=""
                        className="w-16 h-16 rounded-lg object-cover bg-gray-50"
                      />
                      <img
                        src={p.source.logo}
                        alt=""
                        className="absolute -bottom-1 -left-1 w-6 h-6 p-1 bg-white rounded-full shadow-sm border border-gray-100 object-contain"
                      />
                    </div>
                    <div className="text-sm font-bold leading-snug group-hover/item:text-blue-600 transition-colors line-clamp-2">
                      {p.title}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          
          <div className="bg-blue-600 rounded-xl p-6 text-white shadow-xl shadow-blue-100">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[2px] flex-grow bg-blue-400/50"></div>
              <span className="text-xl font-black">FondPeace</span>
              <div className="h-[2px] flex-grow bg-blue-400/50"></div>
            </div>
            <div className="space-y-3 text-sm leading-relaxed text-blue-50">
              <p className="font-semibold">FondPeace is a real-time Apple news aggregator delivering the latest updates on iPhone, Mac, iOS, macOS, and Apple technology from trusted sources.</p>
              
              <p className="opacity-80">FondPeace continuously curates news related to iPhone, Mac, iPad, Apple Watch, iOS, macOS, and emerging Apple technologies, helping readers stay informed without visiting multiple sites.</p>
              <p className="opacity-80">Designed for both desktop and mobile users, FondPeace offers a clean, fast, and distraction-free way to discover, read, and explore important Apple news as it happens.</p>
            </div>
          </div>
        </aside> */}
      
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">FondPeace</h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                The ultimate destination for Apple enthusiasts. We aggregate and deliver latest news on iPhone, iPad, Mac, iOS, macOS, and Apple ecosystem in real-time.
              </p>
            </div>

            {/* Links Sections */}
            {[
              { title: "Apple News", links: ["iPhone News", "iPad News", "Mac & macOS", "iOS Updates", "Apple AI"] },
              { title: "Resources", links: ["About Us", "Contact", "Submit RSS Feed", "Sitemap"] },
              { title: "Legal", links: ["Privacy Policy", "Terms & Conditions", "Disclaimer"] }
            ].map((section) => (
              <div key={section.title}>
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2.5">
                  {section.links.map(link => (
                    <li key={link}>
                      <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-medium text-gray-400 uppercase tracking-tighter">
            <p>© {new Date().getFullYear()} FondPeace · Apple News Aggregator</p>
            <p className="text-center md:text-right max-w-xs">
              Not affiliated with Apple Inc. All trademarks belong to their respective owners.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
