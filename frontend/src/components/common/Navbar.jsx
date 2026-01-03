import { useState } from "react";
import { Button } from "./Button";
import { Link, Links } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-xl font-bold">TaskNest</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-black">
              Overview
            </Link>

            <Link to="/" className="text-gray-700 hover:text-black">
              Features
            </Link>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link to="/login" className="text-gray-700 hover:text-black">
              Sign In
            </Link>
            <Link to="/register" className="text-gray-700 hover:text-black">
              Sign Up
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a href="#" className="block text-gray-700">
            Overview
          </a>
          <a href="#" className="block text-gray-700">
            Features
          </a>
          <a href="#" className="block text-gray-700">
            Sign In
          </a>
          <a href="#" className="block text-gray-700">
            Sign In
          </a>
        </div>
      )}
    </nav>
  );
}
