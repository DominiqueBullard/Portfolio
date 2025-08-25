import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
        <div className="hidden md:flex items-center space-x-4">
        <li><a href="/" className="text-gray-700 hover:text-blue-500">Home</a></li>
        <li><a href="/projects" className="text-gray-700 hover:text-blue-500">Projects</a></li>
        <li><a href="/about" className="text-gray-700 hover:text-blue-500">About</a></li>
        <li><a href="/contact"className="text-gray-700 hover:text-blue-500">Contact</a></li>
        </div>
        </div>
        </div>
      
    </nav>
  );
}
