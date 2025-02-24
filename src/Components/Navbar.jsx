import Link from "next/link";
import React from "react";
import handleSubmit from '../app/signup/page'

const Navbar = () => {
  handleSubmit == true;



  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-3">
          
          <span className="text-3xl font-bold text-white"><Link href="/" className="text-lg font-bold text-white hover:text-yellow-100">Timoes</Link></span>
        </div>

        {/* Center Section: Search Bar */}
        <div className="flex-grow max-w-lg mx-4">
          <div className="relative">
            <p
            
              type="text"
              placeholder="Search libraries..."
              className="text-3xl font-bold text-white"><Link href="/" className="text-lg font-bold text-white hover:text-yellow-100"
            > <a href="/search-user" > Search</a></p>
            
          </div>
        </div>

        {/* Right Section: Navigation Links */}
        <nav className="flex items-center space-x-6">
          <a
            href="/profile/[name]"
            className="text-lg font-bold text-white hover:text-yellow-100"
          >
            Profile
          </a>
          
        </nav>

      </div>

   

    </header>

    
  );
};

export default Navbar;
