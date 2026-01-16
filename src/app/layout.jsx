import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

export const metadata = {
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" }
    ]
  }
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="min-h-screen bg-gray-50 text-slate-900 selection:bg-blue-100"
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        }}
      >
        {/* HEADER */}
        <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
            <h1 className="text-xl md:text-2xl font-black tracking-tight text-blue-600">
              <Link href="/">FondPeace News</Link>
            </h1>
            <nav className="hidden sm:flex gap-6 text-sm font-semibold text-gray-600">
              <Link href="#" className="hover:text-blue-600 transition">
                Apple
              </Link>
              <Link href="#" className="hover:text-blue-600 transition">
                Trending
              </Link>
              <Link href="#" className="hover:text-blue-600 transition">
                Videos
              </Link>
            </nav>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main>{children}</main>

        {/* FOOTER */}
        <footer className="mt-12 border-t bg-white">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {/* Brand */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-900">FondPeace</h2>
                <p className="text-sm text-gray-500 leading-relaxed">
                  The ultimate destination for Apple enthusiasts. We aggregate
                  and deliver the latest news on iPhone, iPad, Mac, iOS, macOS,
                  and the Apple ecosystem in real-time.
                </p>
              </div>

              {[
                {
                  title: "Apple News",
                  links: [
                    "iPhone News",
                    "iPad News",
                    "Mac & macOS",
                    "iOS Updates",
                    "Apple AI",
                  ],
                },
                {
                  title: "Resources",
                  links: [
                    "About Us",
                    "Contact",
                    "Submit RSS Feed",
                    "Sitemap",
                  ],
                },
                {
                  title: "Legal",
                  links: [
                    "Privacy Policy",
                    "Terms & Conditions",
                    "Disclaimer",
                  ],
                },
              ].map((section) => (
                <div key={section.title}>
                  <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {section.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-medium text-gray-400 uppercase tracking-tighter">
              <p>© {new Date().getFullYear()} FondPeace · Apple News Aggregator</p>
              <p className="text-center md:text-right max-w-xs">
                Not affiliated with Apple Inc. All trademarks belong to their
                respective owners.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
