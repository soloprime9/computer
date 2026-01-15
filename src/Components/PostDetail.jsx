import { notFound } from "next/navigation";
const API_URL = "https://applenews.onrender.com";
export default async function Page({ params }) {
  // slug array → string
  const slug = params?.slug?.join("/");

  if (!slug) notFound();

  // API call using FULL slug string
  const res = await fetch(
    `${API_URL}/post-by-slug/${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) notFound();

  const post = await res.json(); // 👈 THIS IS WHAT YOU WANT
  console.log("Post: ", post);
  return (
    <div>
      <h1>{post.title}</h1>

      <img
        src={post.image}
        alt={post.title}
        style={{ maxWidth: "100%" }}
      />

      <p>{post.excerpt}</p>

      <p>
        Source: {post.source?.name}
      </p>
    </div>
  );
}












// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { WiTime9 } from "react-icons/wi";
// import { RiArticleLine } from "react-icons/ri";

// const API_URL = "https://applenews.onrender.com";

// export default function PostDetail(props) {
//   // ✅ SAFE extraction
//   const params = props?.params || {};
//   const source = params.source;
//   const pid = params.pid;
//   const slug = params.slug;

//   // slug may be undefined or array
//   const slugString = Array.isArray(slug) ? slug.join("/") : "";

//   const [post, setPost] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!pid || !source) return;

//     const fetchPost = async () => {
//       try {
//         const res = await fetch(
//           `${API_URL}/posts/${source}/${pid}/${slugString}`,
//           { cache: "no-store" }
//         );

//         if (!res.ok) throw new Error("Post not found");

//         const data = await res.json();
//         setPost(data);
//       } catch (err) {
//         console.error("Fetch error:", err);
//         setPost(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPost();
//   }, [source, pid, slugString]);

//   // ⏳ Loading
//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         Loading…
//       </div>
//     );
//   }

//   // ❌ Not found
//   if (!post) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         Post not found
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <header className="bg-white border-b sticky top-0">
//         <div className="max-w-5xl mx-auto px-4 h-16 flex items-center">
//           <Link href="/" className="font-black text-blue-600 text-xl">
//             FondPeace News
//           </Link>
//         </div>
//       </header>

//       <main className="max-w-4xl mx-auto px-4 py-10">
//         <article className="bg-white rounded-3xl p-6 md:p-10 shadow">
//           <span className="text-xs font-bold uppercase bg-blue-600 text-white px-2 py-1 rounded">
//             {post.source?.name}
//           </span>

//           <h1 className="text-3xl md:text-5xl font-extrabold mt-4 mb-6">
//             {post.title}
//           </h1>

//           <div className="flex items-center gap-2 text-gray-500 mb-6">
//             <WiTime9 />
//             <span>
//               {new Date(post.publishedAt).toLocaleDateString()}
//             </span>
//           </div>

//           <img
//             src={post.image}
//             alt={post.title}
//             className="w-full rounded-2xl mb-8"
//           />

//           <p className="text-xl border-l-4 border-blue-600 pl-4 mb-8">
//             {post.excerpt}
//           </p>

//           <a
//             href={post.originalUrl}
//             target="_blank"
//             className="inline-flex items-center gap-2 px-6 py-4 bg-blue-600 text-white rounded-xl font-bold"
//           >
//             <RiArticleLine /> Read Original
//           </a>
//         </article>
//       </main>
//     </div>
//   );
// }










// "use client";
// import { useEffect, useState, use } from "react"; // Added 'use' to unwrap params
// import Link from 'next/link'; // Use Next.js Link
// import { FaShareSquare, FaFacebookF, FaXTwitter } from "react-icons/fa6";
// import { WiTime9 } from "react-icons/wi";
// import { RiArticleLine } from "react-icons/ri";
// import { MdEmail } from "react-icons/md";
// import { SiPocket } from "react-icons/si";

// const API_URL = "https://applenews.onrender.com";

// // In Next.js App Router, params are passed as a prop to the page
// const PostDetail = ({ params: paramsPromise }) => {
//   // Unwrap the params promise (required in newer Next.js versions)
//   const params = use(paramsPromise);
//   const { source, pid, slug } = params;
  
//   // Join the slug array back into a string if it's [...slug]
//   const slugString = Array.isArray(slug) ? slug.join('/') : slug;

//   const [post, setPost] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchPost = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(`${API_URL}/posts/${source}/${pid}/${slugString}`);
//         const data = await response.json();
        
//         if (response.ok) {
//           setPost(data);
//         } else {
//           console.error("Post not found");
//         }
//       } catch (error) {
//         console.error("Error fetching post:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (pid) fetchPost();
//   }, [source, pid, slugString]);

//   // ... (Keep your Loading and Not Found UI the same) ...
//   if (loading) return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
//   if (!post) return <div className="flex items-center justify-center min-h-screen">Post not found</div>;

//   return (
//     <div className="min-h-screen bg-gray-50 text-slate-900">
//       <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
//         <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
//           <Link href="/" className="text-xl md:text-2xl font-black tracking-tight text-blue-600">
//             FondPeace News
//           </Link>
//         </div>
//       </header>

//       <main className="max-w-4xl mx-auto px-4 py-8 md:py-12">
//         <article className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm">
//           <div className="p-6 md:p-12">
//             <div className="flex items-center gap-2 mb-6">
//               <span className="bg-blue-600 text-white text-[10px] font-black uppercase px-2 py-1 rounded">
//                 {post.source?.name}
//               </span>
//             </div>

//             <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-8 leading-[1.1]">
//               {post.title}
//             </h1>

//             {/* Meta Info */}
//             <div className="flex items-center gap-4 mb-10 pb-10 border-b border-gray-100">
//               {post.source?.logo && (
//                 <img src={post.source.logo} alt="" className="w-12 h-12 rounded-xl object-contain border bg-gray-50 p-1" />
//               )}
//               <div className="flex flex-col">
//                 <span className="font-bold text-gray-900 text-lg">{post.author || post.source?.name}</span>
//                 <div className="flex items-center gap-2 text-sm text-gray-500">
//                   <WiTime9 className="text-xl" />
//                   <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
//                 </div>
//               </div>
//             </div>

//             <img src={post.image} alt={post.title} className="w-full aspect-video object-cover rounded-2xl mb-10" />

//             <div className="text-xl md:text-2xl font-medium text-gray-900 mb-6 border-l-4 border-blue-600 pl-6 py-2">
//                 {post.excerpt}
//             </div>

//             {/* Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4">
//               <a href={post.originalUrl} target="_blank" className="flex-1 flex items-center justify-center gap-3 px-8 py-5 bg-blue-600 text-white rounded-2xl font-bold">
//                 <RiArticleLine /> Read Full Article
//               </a>
//             </div>
//           </div>
//         </article>
//       </main>
//     </div>
//   );
// };

// export default PostDetail;









// "use client";
// import { useEffect, useState } from "react";
// import { useParams, Link } from 'react-router-dom';
// import { FaShareSquare, FaFacebookF, FaXTwitter } from "react-icons/fa6";
// import { WiTime9 } from "react-icons/wi";
// import { RiArticleLine } from "react-icons/ri";
// import { MdEmail } from "react-icons/md";
// import { SiPocket } from "react-icons/si";

// const API_URL = "https://applenews.onrender.com";

// const PostDetail = () => {
//   const { source, pid, slug } = useParams();
//   const [post, setPost] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchPost = async () => {
//       setLoading(true);
//       try {
//         // Corrected: Using backticks and ${} for the variable
//         const response = await fetch(`${API_URL}/posts/${source}/${pid}/${slug}`);
//         const data = await response.json();
        
//         if (response.ok) {
//           setPost(data);
//         } else {
//           console.error("Post not found");
//         }
//       } catch (error) {
//         console.error("Error fetching post:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (pid) fetchPost();
//   }, [source, pid, slug]);

//   if (loading) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-white">
//         <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
//         <div className="animate-pulse text-gray-500 font-medium">Loading Article...</div>
//       </div>
//     );
//   }

//   if (!post) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen">
//         <h1 className="text-2xl font-bold text-gray-800">Post Not Found</h1>
//         <Link to="/" className="text-blue-600 hover:underline mt-4">Return to Home Feed</Link>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 text-slate-900 selection:bg-blue-100" style={{
//         fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
//       }}>
      
//       {/* Navigation Header */}
//       <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
//         <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
//           <Link to="/" className="text-xl md:text-2xl font-black tracking-tight text-blue-600">FondPeace News</Link>
//           <div className="text-xs font-bold text-gray-400 uppercase tracking-widest hidden sm:block">
//             Article Detail
//           </div>
//         </div>
//       </header>

//       {/* Main Content Area */}
//       <main className="max-w-4xl mx-auto px-4 py-8 md:py-12">
//         <article className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm">
          
//           {/* Article Header Content */}
//           <div className="p-6 md:p-12">
            
//             {/* Category/Source Badge */}
//             <div className="flex items-center gap-2 mb-6">
//               <span className="bg-blue-600 text-white text-[10px] font-black uppercase px-2 py-1 rounded">
//                 {post.source?.name}
//               </span>
//             </div>

//             <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-8 leading-[1.1]">
//               {post.title}
//             </h1>

//             {/* Author & Date Meta */}
//             <div className="flex items-center gap-4 mb-10 pb-10 border-b border-gray-100">
//               {post.source?.logo && (
//                 <img 
//                   src={post.source.logo} 
//                   alt="" 
//                   className="w-12 h-12 rounded-xl object-contain border bg-gray-50 p-1" 
//                 />
//               )}
//               <div className="flex flex-col">
//                 <span className="font-bold text-gray-900 text-lg">{post.author || post.source?.name}</span>
//                 <div className="flex items-center gap-2 text-sm text-gray-500">
//                   <WiTime9 className="text-xl" />
//                   <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
//                     month: 'long', 
//                     day: 'numeric', 
//                     year: 'numeric',
//                     hour: '2-digit',
//                     minute: '2-digit'
//                   })}</span>
//                 </div>
//               </div>
//             </div>

//             {/* Main Featured Image */}
//             <div className="relative aspect-video w-full overflow-hidden rounded-2xl mb-10 shadow-inner bg-gray-100">
//               <img 
//                 src={post.image} 
//                 alt={post.title} 
//                 className="w-full h-full object-cover" 
//               />
//             </div>

//             {/* Excerpt / Content Body */}
//             <div className="max-w-none text-gray-800 leading-relaxed mb-12">
//               <p className="text-xl md:text-2xl font-medium text-gray-900 mb-6 border-l-4 border-blue-600 pl-6 py-2">
//                 {post.excerpt}
//               </p>
//               <div className="text-lg space-y-4 text-gray-600">
//                 <p>This article was originally published by <strong>{post.source?.name}</strong>. At FondPeace, we curate the best Apple news to keep you updated in real-time.</p>
//                 <p>To view the complete technical details, comments, and related media, please use the button below to visit the official coverage.</p>
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 mb-12">
//               <a 
//                 href={post.originalUrl} 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="flex-1 flex items-center justify-center gap-3 px-8 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all shadow-xl shadow-blue-100 text-lg"
//               >
//                 <RiArticleLine className="text-2xl" /> Read Full Article
//               </a>
//               <button 
//                 onClick={() => navigator.share?.({ title: post.title, url: post.originalUrl })}
//                 className="flex items-center justify-center gap-3 px-8 py-5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-2xl font-bold transition-all border border-gray-200 text-lg"
//               >
//                 <FaShareSquare /> Share
//               </button>
//             </div>

//             {/* Social Sharing Strip */}
//             <div className="pt-10 border-t border-gray-100">
//               <p className="text-center text-[10px] font-black text-blue-500 uppercase tracking-[0.2em] mb-8">Spread the News</p>
//               <div className="flex flex-wrap justify-center gap-3">
//                 <button className="bg-blue-500 text-white p-4 px-8 rounded-xl flex items-center gap-2 text-xs font-bold uppercase hover:bg-blue-600 transition-all"><MdEmail className="text-lg" /> Email</button>
//                 <button className="bg-black text-white p-4 px-8 rounded-xl flex items-center gap-2 text-xs font-bold uppercase hover:opacity-80 transition-all"><FaXTwitter className="text-lg" /> X.com</button>
//                 <button className="bg-[#3b5998] text-white p-4 px-8 rounded-xl flex items-center gap-2 text-xs font-bold uppercase hover:opacity-90 transition-all"><FaFacebookF className="text-lg" /> Facebook</button>
//                 <button className="bg-[#ee4056] text-white p-4 px-8 rounded-xl flex items-center gap-2 text-xs font-bold uppercase hover:opacity-90 transition-all"><SiPocket className="text-lg" /> Pocket</button>
//               </div>
//             </div>
//           </div>
//         </article>
//       </main>
//     </div>
//   );
// };

// export default PostDetail;
