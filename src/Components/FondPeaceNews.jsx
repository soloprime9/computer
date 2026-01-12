"use client";
import { useEffect, useState } from "react";
import { Play } from "lucide-react";
import { FaShareSquare } from "react-icons/fa";
import { WiTime9 } from "react-icons/wi";

const API_URL = "http://localhost:4000/posts"; // change to prod URL

export default function FondPeaceNews() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.error("Failed to load posts", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const truncateWords = (text, limit = 20) => {
    if (!text) return "";
    const words = [...new Intl.Segmenter("en", { granularity: "word" }).segment(text)]
      .filter(w => w.isWordLike)
      .map(w => w.segment);

    return words.length > limit
      ? words.slice(0, limit).join(" ") + "…"
      : text;
  };

  return (
    <div className="min-h-screen bg-gray-50 text-slate-900 selection:bg-blue-100" style={{
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
      }}>
      
      {/* Header - Fixed Height & Centered Content */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <h1 className="text-xl md:text-2xl font-black tracking-tight text-blue-600">FondPeace</h1>
          <nav className="hidden sm:flex gap-6 text-sm font-semibold text-gray-600">
            <span className="hover:text-blue-600 cursor-pointer transition">Apple</span>
            <span className="hover:text-blue-600 cursor-pointer transition">Trending</span>
            <span className="hover:text-blue-600 cursor-pointer transition">Videos</span>
          </nav>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 px-4 py-6 md:py-8">
        
        {/* Feed Section */}
        <section className="lg:col-span-8 space-y-4">
          {loading && (
            <div className="flex items-center justify-center py-20">
              <div className="animate-pulse text-sm font-medium text-gray-400">Loading your feed...</div>
            </div>
          )}

          {posts.map(post => (
            <article
              key={post._id}
              className="group bg-white rounded-xl border border-gray-100 p-4 md:p-5 flex flex-col-reverse sm:flex-row gap-4 hover:shadow-md transition-all duration-300"
            >
              {/* Content side */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="mb-2">
                    <a
                      href={post.originalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg md:text-xl font-bold leading-tight text-gray-900 group-hover:text-blue-700 transition-colors line-clamp-2"
                    >
                      {post.title}
                    </a>
                  </h2>
                  
                  <p className="text-sm text-gray-600 line-clamp-2 mb-3 leading-relaxed">
                    {truncateWords(post.excerpt, 22)}
                  </p>
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-gray-500">
                  <div className="flex items-center gap-1.5">
                    {post.source?.logo && (
                      <img
                        src={post.source.logo}
                        alt=""
                        className="w-4 h-4 rounded-sm object-contain bg-gray-50"
                      />
                    )}
                    <span className="text-gray-900">{post.source?.name}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <WiTime9 className="text-lg" />
                    <span>
                      {post.publishedAt && (() => {
                        const m = Math.floor((Date.now() - new Date(post.publishedAt)) / 60000);
                        return m < 60 ? `${m}m ago` : m < 1440 ? `${Math.floor(m/60)}h ago` : `${Math.floor(m/1440)}d ago`;
                      })()}
                    </span>
                  </div>

                  {/* Share Icon - Visible on hover desktop, always visible mobile */}
                  <button 
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({ title: post.title, url: post.originalUrl });
                      } else {
                        navigator.clipboard.writeText(post.originalUrl);
                        alert("Link copied!");
                      }
                    }}
                    className="flex items-center gap-1.5 text-blue-600 md:opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <FaShareSquare />
                    <span>Share</span>
                  </button>
                </div>
              </div>

              {/* Thumbnail side */}
              <div className="relative w-full sm:w-[180px] h-[200px] sm:h-[120px] flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {post.image?.includes(".mp4") && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="bg-white/90 backdrop-blur rounded-full p-2 shadow-lg">
                      <Play className="w-4 h-4 text-blue-600 fill-blue-600" />
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </section>

        {/* Sidebar - Hidden on mobile, visible on Large screens */}
        <aside className="lg:col-span-4 hidden lg:block space-y-6">
          <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
            <h3 className="text-xs uppercase tracking-wider font-bold text-blue-600 mb-4">Trending Now</h3>
            <ul className="space-y-5">
              {posts.slice(0, 5).map(p => (
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

          {/* Sidebar Branding Box */}
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
        </aside>
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







// "use client";
// import { useEffect, useState } from "react";
// import { Play, ExternalLink } from "lucide-react";
// import { FaShareSquare } from "react-icons/fa";
// import { WiTime9 } from "react-icons/wi";

// const API_URL = "http://localhost:4000/posts"; // change to prod URL

// export default function FondPeaceFeed() {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const res = await fetch(API_URL);
//         const data = await res.json();
//         setPosts(data);
//         console.log("hello Dear: ", data);
//       } catch (err) {
//         console.error("Failed to load posts", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPosts();
//   }, []);
//   const truncateWords = (text, limit = 20) => {
//   if (!text) return "";
//   const words = [...new Intl.Segmenter("en", { granularity: "word" }).segment(text)]
//     .filter(w => w.isWordLike)
//     .map(w => w.segment);

//   return words.length > limit
//     ? words.slice(0, limit).join(" ") + "…"
//     : text;
// };


//   return (
//     <div className="min-h-screen bg-white" style={{
//         fontFamily:
//           '-apple-system,"HelveticaNeue","Helvetica Neue","HelveticaNeueRoman","HelveticaNeue-Roman","Helvetica Neue Roman","Helvetica","Tahoma","Geneva","Arial",sans-serif'
//       }}>
//       {/* Header */}
//       <header className="bg-blue-100 border-b sticky top-0 z-50">
//         <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
//           <h1 className="text-2xl font-bold">FondPeace</h1>
//           <nav className="hidden md:flex gap-5 text-md text-gray-600 font-bold">
//             <span>Apple</span>
//             <span>Trending</span>
//             <span>Videos</span>
//           </nav>
//         </div>
//       </header>

//       {/* Main */}
//       <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 px-3 py-4 font-san">
//         {/* Feed */}
//         <section className="md:col-span-8 space-y-3">
//           {loading && <div className="text-sm text-gray-500">Loading feed…</div>}

//           {posts.map(post => (
//             <article
//               key={post._id}
//               className="group bg-white rounded-md p-4 flex gap-3 hover:bg-gray-50 transition justify-between"
//             >

//               {/* Content */}
//               <div className=" flex flex-col justify-start gap-1">
//                 <h2> <a
//                   href={post.originalUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className=" text-xl  leading-snug text-blue-900 hover:underline line-clamp-2"
//                 >
//                   {post.title}
//                 </a>
//                 </h2>

//                 <div className=" text-sm font-semibold text-gray-500 mt-1 flex items-center gap-2">
//                   {post.source?.logo && (
//                     <img
//                       src={post.source.logo}
//                       alt={post.source.name}
//                       className="w-4 h-4 rounded"
//                     />
//                   )}
//                   <span>{post.source?.name}</span>
                  

//                 <div className="flex items-center">
//                   <span><WiTime9 /></span>
//                   <span>
//                     {post.publishedAt && (() => {
//                       const m = Math.floor((Date.now() - new Date(post.publishedAt)) / 60000);
//                       return m < 60 ? `${m}m ago` : m < 1440 ? `${Math.floor(m/60)}h ago` : `${Math.floor(m/1440)}d ago`;
//                     })()}
//                   </span>
//                 </div>

//                   {/* Share Icon */}
//                   <div className="flex cursor-pointer opacity-0 group-hover:opacity-100 transition gap-1">
//                   <FaShareSquare
//                     className="w-4 h-4 "
//                     onClick={() => {
//                       if (navigator.share) {
//                         navigator.share({
//                           title: post.title,
//                           text: post.title,
//                           url: post.originalUrl,
//                         });
//                       } else {
//                         navigator.clipboard.writeText(window.location.href);
//                         alert("Link copied!");
//                       }
//                     }}
//                   />
//                   <p className="">Share</p>
//                   </div>

                  
//                 </div>

//                 {/*Description*/}
//                 <div className="line-clamp-2 text-gray-800 mt-1">
//                   <p className="text-sm">{truncateWords(post.excerpt, 20)}</p>
//                 </div>
//               </div>

//               {/* Thumbnail */}
//               <div className="relative w-[150px] h-[100px] flex-shrink-0">
//                 <img
//                   src={post.image}
//                   alt={post.title}
//                   className="w-full h-full  rounded object-cover"
//                 />
//                 {post.image?.includes(".mp4") && (
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="bg-black/60 rounded-full p-1.5">
//                       <Play className="w-3.5 h-3.5 text-white" />
//                     </div>
//                   </div>
//                 )}
//               </div>

              
//             </article>
//           ))}
//         </section>

//         {/* Sidebar */}
//         <aside className="md:col-span-4 hidden md:block space-y-4">
//           <div className="bg-white  rounded-md p-3 cursor-pointer ">
//             <h3 className="text-sm font-semibold mb-2">Trending</h3>
//             <ul className="space-y-2 text-sm text-gray-700">
//               {posts.slice(0, 5).map(p => (
                
//                 <li key={p._id} className="line-clamp-2 hover:underline">
//                   <div className="flex  gap-2 items-start hover:bg-gray-50 transition hover:rounded-sm">
//                   <div className="relative flex flex-shrink-0">
//                   <img
//                   src={p.image}
//                   alt={p.title}
//                   className="w-20 h-20  rounded object-cover"
//                 />

//                 <img
//                   src={p.source.logo}
//                   alt={p.source.name}
//                   className="absolute w-6 h-6  rounded-md object-contain bottom-2 left-1"
//                 />
//                 </div>

//                 <div className="text-md flex-1 font-bold">
//                   {p.title}  
//                 </div>
//               </div>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="bg-white  rounded-md  text-sm text-gray-600">
//             <div className="flex items-center">
//             <div className="flex-grow border-t-2 border-black"></div>
//             <h1 className="mx-4 text-2xl font-bold text-center">FondPeace</h1>
//             <div className="flex-grow border-t-2 border-black"></div>
//           </div>

            
//             <div className="p-4 gap-4">
//             <p className="font-bold mb-2">FondPeace is a real-time Apple news aggregator delivering the latest updates on iPhone, Mac, iOS, macOS, and Apple technology from trusted sources.</p>

//             <p className="mb-2">FondPeace continuously curates news related to iPhone, Mac, iPad, Apple Watch, iOS, macOS, and emerging Apple technologies, helping readers stay informed without visiting multiple sites.</p>

//             <p className="mb-2">
//             Designed for both desktop and mobile users, FondPeace offers a clean, fast, and distraction-free way to discover, read, and explore important Apple news as it happens.</p>
            
//             </div>
//           </div>
//         </aside>
//       </main>

//       {/* Footer */}
//       {/* Footer */}
// <footer className="border-t bg-white">
//   <div className="max-w-7xl mx-auto px-4 py-10">

//     {/* Top Section */}
//     <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

//       {/* Brand & Description */}
//       <div>
//         <h2 className="text-lg font-bold text-gray-900">FondPeace</h2>
//         <p className="mt-3 text-sm text-gray-600">
//           FondPeace is a real-time Apple News Aggregator delivering the latest
//           updates on iPhone, iPad, Mac, iOS, macOS, and Apple ecosystem from
//           trusted global sources.
//         </p>
//       </div>

//       {/* Apple Categories */}
//       <div>
//         <h3 className="text-sm font-semibold text-gray-900 uppercase">
//           Apple News
//         </h3>
//         <ul className="mt-3 space-y-2 text-sm text-gray-600">
//           <li><a href="/iphone-news" className="hover:text-black">iPhone News</a></li>
//           <li><a href="/ipad-news" className="hover:text-black">iPad News</a></li>
//           <li><a href="/mac-news" className="hover:text-black">Mac & macOS</a></li>
//           <li><a href="/ios-updates" className="hover:text-black">iOS Updates</a></li>
//           <li><a href="/apple-ai" className="hover:text-black">Apple AI</a></li>
//         </ul>
//       </div>

//       {/* Resources */}
//       <div>
//         <h3 className="text-sm font-semibold text-gray-900 uppercase">
//           Resources
//         </h3>
//         <ul className="mt-3 space-y-2 text-sm text-gray-600">
//           <li><a href="/about" className="hover:text-black">About Us</a></li>
//           <li><a href="/contact" className="hover:text-black">Contact</a></li>
//           <li><a href="/submit-feed" className="hover:text-black">Submit RSS Feed</a></li>
//           <li><a href="/sitemap.xml" className="hover:text-black">Sitemap</a></li>
//         </ul>
//       </div>

//       {/* Legal & Trust */}
//       <div>
//         <h3 className="text-sm font-semibold text-gray-900 uppercase">
//           Legal
//         </h3>
//         <ul className="mt-3 space-y-2 text-sm text-gray-600">
//           <li><a href="/privacy-policy" className="hover:text-black">Privacy Policy</a></li>
//           <li><a href="/terms" className="hover:text-black">Terms & Conditions</a></li>
//           <li><a href="/disclaimer" className="hover:text-black">Disclaimer</a></li>
//         </ul>
//       </div>

//     </div>

//     {/* Divider */}
//     <div className="border-t mt-10 pt-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
//       <p>
//         © {new Date().getFullYear()} FondPeace · Apple News Aggregator
//       </p>

//       <p className="mt-2 md:mt-0">
//         Not affiliated with Apple Inc. All trademarks belong to their respective owners.
//       </p>
//     </div>

//   </div>
// </footer>

//     </div>
//   );
// }
