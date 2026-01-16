
import { WiTime9 } from "react-icons/wi";
import { FaFacebookF, FaShareSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SiPocket } from "react-icons/si";
import Link from "next/link";

export default function PostMainContainer({ post }) {
  if (!post) return null;

  return (
    <main className="lg:w-3/3">
      {/* TITLE */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-4">
        {post.title}
      </h1>

      {/* META ROW */}
      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-4">
        <span className="font-semibold text-blue-600">
          {post.source?.name}
        </span>

        {post.author && (
          <>
            <span>•</span>
            <span>By {post.author}</span>
          </>
        )}

        {post.publishedAt && (
          <>
            <span>•</span>
            <span className="flex items-center gap-1">
              <WiTime9 />
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </>
        )}
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex items-center gap-3 mb-6">
        <Link
          href={post.originalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gray-200 hover:bg-gray-300 
                     text-gray-900 font-semibold px-4 py-2 rounded-md text-sm"
        >
          Read Article
        </Link>

        <button className="inline-flex items-center gap-2 bg-gray-200 
                           hover:bg-gray-300 px-4 py-2 rounded-md text-sm">
         <FaShareSquare /> Share
        </button>
      </div>

      {/* IMAGE (MacHash style – right aligned inside content) */}
      {post.image && (
        <div className="flex justify-end mb-6">
          <img
            src={post.image}
            alt={post.title}
            className="w-full max-w-md rounded-md border"
            loading="lazy"
          />
        </div>
      )}

      {/* EXCERPT ONLY */}
      {post.excerpt && (
        <p className="text-lg text-gray-800 leading-relaxed mb-6">
          {post.excerpt}
        </p>
      )}

      {/* DISCLAIMER (CRITICAL FOR SAFETY) */}
      <p className="text-sm text-gray-500 italic mb-6">
        FondPeace News is an independent news aggregator. This page contains a
        preview only. Full content is available on the original publisher’s
        website.
      </p>

      {/* SHARE BAR (MacHash style) */}
      <div className="border-t pt-4">
        <p className="text-sm font-semibold text-gray-700 mb-3">
          SHARE ARTICLE
        </p>

        <div className="flex flex-wrap gap-2">
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded text-sm">
            <MdEmail /> Email
          </button>

          <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded text-sm">
            <FaXTwitter /> X
          </button>

          <button className="flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded text-sm">
            <FaFacebookF /> Facebook
          </button>

          <button className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded text-sm">
            <SiPocket /> Pocket
          </button>

          <button className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded text-sm">
            <FaShareSquare /> Share
          </button>
        </div>
      </div>
    </main>
  );
}
