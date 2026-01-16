import { WiTime9 } from "react-icons/wi";
import { RiArticleLine } from "react-icons/ri";
import { FaShareSquare, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SiPocket } from "react-icons/si";
import Link from "next/link";

export default function PostPage({ post }) {
  if (!post) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* HEADER SECTION */}
      <header className="mb-8 border-b pb-6">
        <div className="flex items-center gap-2 text-blue-600 font-bold mb-2 uppercase text-sm">
          <RiArticleLine /> {post.source.name}
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          {post.title}
        </h1>
        
        <div className="flex flex-wrap items-center justify-between gap-4 text-gray-600 text-sm">
          <div className="flex items-center gap-4">
            <span className="font-semibold text-gray-900">By {post.author}</span>
            <span className="flex items-center gap-1">
              <WiTime9 className="text-lg" /> 
              {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                month: 'long', day: 'numeric', year: 'numeric' 
              })}
            </span>
          </div>
          
          {/* Social Share Icons */}
          <div className="flex items-center gap-3 text-lg">
            <FaFacebookF className="cursor-pointer hover:text-blue-700" />
            <FaXTwitter className="cursor-pointer hover:text-black" />
            <SiPocket className="cursor-pointer hover:text-red-500" />
            <MdEmail className="cursor-pointer hover:text-gray-900" />
            <FaShareSquare className="cursor-pointer hover:text-green-600" />
          </div>
        </div>
      </header>

      {/* MAIN LAYOUT: Content + Sidebar */}
      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* MAIN CONTAINER (Left Side) */}
        <main className="lg:w-2/3">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-auto rounded-xl shadow-lg mb-8"
          />
          
          <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
            <p className="text-xl font-medium mb-6 text-gray-700">
              {post.excerpt}
            </p>
            {/* Simulation of full content */}
            <p className="mb-4">
              Apple’s rumored roadmap is coming into clearer focus. With the iPhone 18 display 
              technologies leaking, we are seeing a shift toward more integrated AI features 
              through Siri’s Gemini-powered capabilities...
            </p>
          </div>

          <div className="mt-10 p-6 bg-gray-50 rounded-lg border border-dashed border-gray-300">
            <p className="text-sm text-gray-500 mb-2">Original Source:</p>
            <Link 
              href={post.originalUrl} 
              target="_blank"
              className="text-blue-600 hover:underline font-bold flex items-center gap-2"
            >
              Read full article on {post.source.name}
            </Link>
          </div>
        </main>

        {/* SIDEBAR (Right Side) */}
        <aside className="lg:w-1/3">
          <div className="sticky top-8 space-y-8">
            {/* Author/Source Box */}
            <div className="bg-white p-6 rounded-xl border shadow-sm">
              <img 
                src={post.source.logo} 
                alt={post.source.name} 
                className="h-12 mb-4 grayscale hover:grayscale-0 transition duration-300"
              />
              <h3 className="text-lg font-bold mb-2">About {post.source.name}</h3>
              <p className="text-sm text-gray-600 mb-4">
                Providing the latest Apple news and rumors with expert analysis.
              </p>
              <Link href={post.source.website} className="text-blue-500 text-sm font-semibold">
                Visit Website →
              </Link>
            </div>

            {/* Post Metadata Card */}
            <div className="bg-gray-900 text-white p-6 rounded-xl">
              <h3 className="text-lg font-bold mb-4">Post Stats</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Article ID</span>
                  <span>#{post.pid}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Views</span>
                  <span>{post.views}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Interactions</span>
                  <span>{post.clicks}</span>
                </div>
              </div>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}
