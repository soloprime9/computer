"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const API_URL = "https://applenews.onrender.com/posts";

export default function Sidebar() {
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

  return (
    <aside className="lg:col-span-4 hidden lg:block space-y-6">
      {/* Trending Section */}
      <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
        <h3 className="text-xs uppercase tracking-wider font-bold text-blue-600 mb-4">
          Trending Now
        </h3>
        <ul className="space-y-5">
          {loading ? (
            // Simple loading skeleton or message
            <p className="text-sm text-gray-400">Loading trends...</p>
          ) : (
            posts.slice(0, 5).map((p) => (
              <li key={p._id} className="group/item cursor-pointer">
                {/* Wrap in Link if navigation is needed */}
                <div className="flex gap-3 items-start">
                  <div className="relative flex-shrink-0">
                    <img
                      src={p.image}
                      alt=""
                      className="w-16 h-16 rounded-lg object-cover bg-gray-50"
                    />
                    {p.source?.logo && (
                      <img
                        src={p.source.logo}
                        alt=""
                        className="absolute -bottom-1 -left-1 w-6 h-6 p-1 bg-white rounded-full shadow-sm border border-gray-100 object-contain"
                      />
                    )}
                  </div>
                  <div className="text-sm font-bold leading-snug group-hover/item:text-blue-600 transition-colors line-clamp-2">
                    {p.title}
                  </div>
                </div>
              </li>
            ))
          )}
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
          <p className="font-semibold">
            FondPeace is a real-time Apple news aggregator delivering the latest
            updates on iPhone, Mac, iOS, macOS, and Apple technology from
            trusted sources.
          </p>
          <p className="opacity-80">
            FondPeace continuously curates news related to iPhone, Mac, iPad,
            Apple Watch, iOS, macOS, and emerging Apple technologies, helping
            readers stay informed without visiting multiple sites.
          </p>
          <p className="opacity-80">
            Designed for both desktop and mobile users, FondPeace offers a
            clean, fast, and distraction-free way to discover, read, and explore
            important Apple news as it happens.
          </p>
        </div>
      </div>
    </aside>
  );
}
