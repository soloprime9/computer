import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 py-6 border-t border-gray-300 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <h1 className="text-xl font-bold">Join Us</h1>
          </div>
          <div className="mb-4 md:mb-0">
            <h1 className="text-xl font-bold">About Us</h1>
          </div>
          <div>
            <h1 className="text-xl font-bold">Contact Us</h1>
          </div>
        </div>
        <div className="text-center mt-4 text-gray-600">
          <p>Created with the MERN Stack</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
