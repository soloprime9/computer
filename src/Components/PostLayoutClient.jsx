"use client";

import Sidebar from "./Sidebar";

export default function PostLayoutClient({ children }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-12 gap-8">
        {/* MAIN */}
        <main className="col-span-12 lg:col-span-8">
          {children}
        </main>

        {/* SIDEBAR */}
        <aside className="col-span-12 lg:col-span-4">
          <Sidebar />
        </aside>
      </div>
    </div>
  );
}
