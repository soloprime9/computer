
import { WiTime9 } from "react-icons/wi";
import { RiArticleLine } from "react-icons/ri";
import { FaShareSquare, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SiPocket } from "react-icons/si";

export default function PostPage({ post }) {
  if (!post) return null;

  return (
    <div className="min-h-screen bg-gray-50 text-slate-900">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="text-xl font-black text-blue-600">
            FondPeace News
          </a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-10">
        <article className="bg-white rounded-3xl border p-6 md:p-10">

          <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
            {post.source?.name}
          </span>

          <h1 className="text-3xl md:text-5xl font-extrabold mt-6 mb-8">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 text-gray-500 mb-8">
            <WiTime9 />
            {new Date(post.publishedAt).toLocaleString()}
          </div>

          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              className="rounded-xl mb-10"
            />
          )}

          <p className="text-xl font-medium mb-6">
            {post.excerpt}
          </p>

          <a
            href={post.originalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-4 bg-blue-600 text-white rounded-xl font-bold"
          >
            <RiArticleLine /> Read Full Article
          </a>
        </article>
      </main>
    </div>
  );
}
