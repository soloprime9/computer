import { notFound, redirect } from "next/navigation";
import Link from "next/link";
const API_URL = "https://applenews.onrender.com/posts";

export default async function PostPage({ params }) {
  const { source, pid, slug } = params;
  console.log(source,pid,slug);

  const res = await fetch(
    `${API_URL}/${source}/${pid}/${slug}`,
    { cache: "no-store" }
  );

  // Backend 301 redirect handling
  if (res.status === 301 || res.status === 302) {
    const location = res.headers.get("location");
    if (location) redirect(location);
  }

  if (!res.ok) {
    notFound();
  }

  const post = await res.json();
  console.log("Post: ", post);

  return (
    <div className="min-h-screen bg-gray-50 text-slate-900 selection:bg-blue-100" style={{
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
      }}>
      
      {/* Navigation Header */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl md:text-2xl font-black tracking-tight text-blue-600">FondPeace News</Link>
          <div className="text-xs font-bold text-gray-400 uppercase tracking-widest hidden sm:block">
            Article Detail
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <article className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm">
          
          {/* Article Header Content */}
          <div className="p-6 md:p-12">
            
            {/* Category/Source Badge */}
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-blue-600 text-white text-[10px] font-black uppercase px-2 py-1 rounded">
                {post.source?.name}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-8 leading-[1.1]">
              {post.title}
            </h1>

            {/* Author & Date Meta */}
            <div className="flex items-center gap-4 mb-10 pb-10 border-b border-gray-100">
              {post.source?.logo && (
                <img 
                  src={post.source.logo} 
                  alt="" 
                  className="w-12 h-12 rounded-xl object-contain border bg-gray-50 p-1" 
                />
              )}
              <div className="flex flex-col">
                <span className="font-bold text-gray-900 text-lg">{post.author || post.source?.name}</span>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <WiTime9 className="text-xl" />
                  <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}</span>
                </div>
              </div>
            </div>

            {/* Main Featured Image */}
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl mb-10 shadow-inner bg-gray-100">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover" 
              />
            </div>

            {/* Excerpt / Content Body */}
            <div className="max-w-none text-gray-800 leading-relaxed mb-12">
              <p className="text-xl md:text-2xl font-medium text-gray-900 mb-6 border-l-4 border-blue-600 pl-6 py-2">
                {post.excerpt}
              </p>
              <div className="text-lg space-y-4 text-gray-600">
                <p>This article was originally published by <strong>{post.source?.name}</strong>. At FondPeace, we curate the best Apple news to keep you updated in real-time.</p>
                <p>To view the complete technical details, comments, and related media, please use the button below to visit the official coverage.</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a 
                href={post.originalUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-3 px-8 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all shadow-xl shadow-blue-100 text-lg"
              >
                <RiArticleLine className="text-2xl" /> Read Full Article
              </a>
              <button 
                onClick={() => navigator.share?.({ title: post.title, url: post.originalUrl })}
                className="flex items-center justify-center gap-3 px-8 py-5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-2xl font-bold transition-all border border-gray-200 text-lg"
              >
                <FaShareSquare /> Share
              </button>
            </div>

            {/* Social Sharing Strip */}
            <div className="pt-10 border-t border-gray-100">
              <p className="text-center text-[10px] font-black text-blue-500 uppercase tracking-[0.2em] mb-8">Spread the News</p>
              <div className="flex flex-wrap justify-center gap-3">
                <button className="bg-blue-500 text-white p-4 px-8 rounded-xl flex items-center gap-2 text-xs font-bold uppercase hover:bg-blue-600 transition-all"><MdEmail className="text-lg" /> Email</button>
                <button className="bg-black text-white p-4 px-8 rounded-xl flex items-center gap-2 text-xs font-bold uppercase hover:opacity-80 transition-all"><FaXTwitter className="text-lg" /> X.com</button>
                <button className="bg-[#3b5998] text-white p-4 px-8 rounded-xl flex items-center gap-2 text-xs font-bold uppercase hover:opacity-90 transition-all"><FaFacebookF className="text-lg" /> Facebook</button>
                <button className="bg-[#ee4056] text-white p-4 px-8 rounded-xl flex items-center gap-2 text-xs font-bold uppercase hover:opacity-90 transition-all"><SiPocket className="text-lg" /> Pocket</button>
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
