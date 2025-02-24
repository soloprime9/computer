import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-3">
          <span className="text-3xl font-bold text-white">
            <Link href="/" className="text-lg font-bold text-white hover:text-yellow-100">
              Timoes
            </Link>
          </span>
        </div>

        {/* Center Section: Search Bar */}
        <div className="flex-grow max-w-lg mx-4">
          <div className="relative">
            <Link href="/search-user" className="text-lg font-bold text-white hover:text-yellow-100">
              🔍 Search
            </Link>
          </div>
        </div>

        {/* Right Section: Navigation Links */}
        <nav className="flex items-center space-x-6">
          <Link href="/profile/[name]" className="text-lg font-bold text-white hover:text-yellow-100">
            Profile
          </Link>
        </nav>

      </div>
    </header>
  );
};

export default Navbar;
